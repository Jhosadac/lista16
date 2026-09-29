/* ================================================================
   DATOS DE LOS CANDIDATOS
   Las imágenes se cargan desde la carpeta "assets/" (mismo nivel
   que este archivo HTML).
   ================================================================ */
const CANDIDATOS = [
  { nombre: "Helfer",       src: "assets/imagen1_Helfer.jpg" },
  { nombre: "Bryan",        src: "assets/imagen2_bryan.png" },
  { nombre: "Alexssander",  src: "assets/imagen3_alexssander.png" },
  { nombre: "Pool",         src: "assets/imagen4_pool.png" },
  { nombre: "Joaquín",      src: "assets/imagen5_joaquin.png" },
  { nombre: "Kristhel",     src: "assets/imagen6_kristhel.png" },
];


/* ================================================================
   REFERENCIAS AL DOM
   ================================================================ */
const carousel   = document.getElementById('carousel');
const dotsWrap   = document.getElementById('dots');
const prevBtn    = document.getElementById('prevBtn');
const nextBtn    = document.getElementById('nextBtn');
const root       = document.documentElement;
const colorCanvas = document.getElementById('colorCanvas');
const ctx        = colorCanvas.getContext('2d', { willReadFrequently: true });

let currentIndex   = 0;
let slides          = [];
let dots             = [];
let dominantColors   = [];   // color dominante precalculado por candidato
let autoplayTimer    = null;
const AUTOPLAY_MS    = 3500;

/* ================================================================
   1) CONSTRUCCIÓN DINÁMICA DEL CARRUSEL Y LOS PUNTOS
   ================================================================ */
function buildCarousel(){
  CANDIDATOS.forEach((cand, i) => {
    // --- Tarjeta / slide ---
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.dataset.index = i;

    const img = document.createElement('img');
    img.crossOrigin = 'anonymous';   // permite leer los píxeles en el canvas
    img.src = cand.src;
    img.alt = cand.nombre;
    img.draggable = false;

    slide.appendChild(img);

    // Clic sobre una tarjeta -> la centra
    slide.addEventListener('click', () => goToSlide(i));

    carousel.appendChild(slide);
    slides.push(slide);

    // --- Punto indicador ---
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
    dots.push(dot);
  });

  // Padding lateral dinámico para poder centrar la 1ra y la última tarjeta
  updateCarouselPadding();
}

/* Calcula el padding lateral necesario para que cualquier tarjeta,
   incluidas la primera y la última, pueda quedar centrada al hacer scroll */
function updateCarouselPadding(){
  if(!slides.length) return;
  const wrapperWidth = carousel.parentElement.clientWidth;
  const slideWidth = slides[0].getBoundingClientRect().width;
  const sidePad = Math.max((wrapperWidth - slideWidth) / 2, 12);
  carousel.style.paddingLeft = sidePad + 'px';
  carousel.style.paddingRight = sidePad + 'px';
}

/* ================================================================
   2) EXTRACCIÓN DE COLOR DOMINANTE CON <canvas>
   Dibuja la imagen a baja resolución, recorre los píxeles,
   descarta los tonos casi blancos/negros (poco informativos) y
   pondera más a los píxeles con mayor saturación, para obtener
   un color vivo y representativo de la imagen.
   ================================================================ */
function getDominantColor(imgEl){
  const SIZE = 48; // reducir resolución = más rápido y suficiente precisión
  colorCanvas.width = SIZE;
  colorCanvas.height = SIZE;

  try{
    ctx.drawImage(imgEl, 0, 0, SIZE, SIZE);
    const data = ctx.getImageData(0, 0, SIZE, SIZE).data;

    let rSum = 0, gSum = 0, bSum = 0, weightSum = 0;

    for(let i = 0; i < data.length; i += 4){
      const r = data[i], g = data[i+1], b = data[i+2];

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const lightness = (max + min) / 2 / 255;
      const sat = max === min ? 0 : (max - min) / (255 - Math.abs(max + min - 255));

      // Descartar píxeles casi blancos o casi negros (aportan poco color)
      if(lightness > 0.92 || lightness < 0.08) continue;

      // Ponderar: los píxeles más saturados influyen más en el promedio
      const weight = 0.15 + sat; // peso base + bono por saturación
      rSum += r * weight;
      gSum += g * weight;
      bSum += b * weight;
      weightSum += weight;
    }

    if(weightSum === 0) return { r: 122, g: 22, b: 32 };

    return {
      r: Math.round(rSum / weightSum),
      g: Math.round(gSum / weightSum),
      b: Math.round(bSum / weightSum)
    };
  }catch(e){
    // Si el canvas está "tainted" (file://, CORS, etc.), devolvemos respaldo
    console.warn('No se pudo leer el color dominante, usando color por defecto.', e);
    return { r: 122, g: 22, b: 32 };
  }
}

/* Precalcula el color dominante de cada candidato una sola vez,
   esperando a que cada imagen termine de decodificarse */
async function precomputeColors(){
  const promises = slides.map((slide, i) => {
    const img = slide.querySelector('img');
    return (img.decode ? img.decode().catch(()=>{}) : Promise.resolve())
      .then(() => { dominantColors[i] = getDominantColor(img); });
  });
  await Promise.all(promises);
}

/* Aplica el color dominante del índice dado al fondo y al resplandor,
   con una transición suave gracias a la propiedad CSS "transition" */
function applyColor(index){
  const c = dominantColors[index];
  if(!c) return;
  const rgb = `rgb(${c.r}, ${c.g}, ${c.b})`;
  // Fondo: versión más oscura del color dominante para no "quemar" la vista
  const bgDark = `rgb(${Math.round(c.r*0.18)}, ${Math.round(c.g*0.18)}, ${Math.round(c.b*0.18)})`;
  root.style.setProperty('--bg-color', bgDark);
  root.style.setProperty('--glow-color', rgb);
}

/* ================================================================
   3) LÓGICA DE NAVEGACIÓN DEL CARRUSEL
   ================================================================ */
function goToSlide(index){
  index = Math.max(0, Math.min(index, slides.length - 1));
  currentIndex = index;
  slides[index].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });
  setActive(index);
}

function nextSlide(){ goToSlide((currentIndex + 1) % slides.length); }
function prevSlide(){ goToSlide((currentIndex - 1 + slides.length) % slides.length); }

/* Marca visualmente la tarjeta y el punto activo, y actualiza los colores */
function setActive(index){
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  applyColor(index);
}

/* Detecta, mientras el usuario hace scroll manual, cuál tarjeta quedó
   más cerca del centro del carrusel y la marca como activa */
let scrollTimeout = null;
function handleScroll(){
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const wrapperCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const distance = Math.abs(slideCenter - wrapperCenter);
      if(distance < closestDistance){
        closestDistance = distance;
        closestIndex = i;
      }
    });

    if(closestIndex !== currentIndex){
      currentIndex = closestIndex;
      setActive(currentIndex);
    }
  }, 90); // pequeño debounce para no recalcular en cada frame
}

/* ================================================================
   4) AUTOPLAY (se pausa con mouse/touch encima del carrusel)
   ================================================================ */
function startAutoplay(){
  stopAutoplay();
  autoplayTimer = setInterval(nextSlide, AUTOPLAY_MS);
}
function stopAutoplay(){
  if(autoplayTimer) clearInterval(autoplayTimer);
  autoplayTimer = null;
}

/* ================================================================
   5) EVENTOS
   ================================================================ */
prevBtn.addEventListener('click', () => { prevSlide(); });
nextBtn.addEventListener('click', () => { nextSlide(); });

carousel.addEventListener('scroll', handleScroll, { passive: true });

// Navegación con teclado (flechas izquierda/derecha)
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight') nextSlide();
  if(e.key === 'ArrowLeft') prevSlide();
});

// Pausar autoplay al pasar el mouse o tocar el carrusel
const wrapper = document.querySelector('.carousel-wrapper');
wrapper.addEventListener('mouseenter', stopAutoplay);
wrapper.addEventListener('mouseleave', startAutoplay);
wrapper.addEventListener('touchstart', stopAutoplay, { passive: true });
wrapper.addEventListener('touchend', () => setTimeout(startAutoplay, 1000), { passive: true });

// Recalcular el padding lateral si cambia el tamaño de la ventana
window.addEventListener('resize', () => {
  updateCarouselPadding();
  // volver a centrar la tarjeta activa tras el resize
  goToSlide(currentIndex);
});

/* ================================================================
   6) INICIALIZACIÓN
   ================================================================ */
function init(){
  buildCarousel();

  // Colores de respaldo mientras se calculan los reales, para que
  // el fondo no aparezca negro puro durante la carga
  dominantColors = CANDIDATOS.map(() => ({ r: 122, g: 22, b: 32 }));

  precomputeColors().then(() => {
    // Una vez calculados los colores reales, centramos la primera
    // tarjeta y aplicamos su color correspondiente
    goToSlide(0);
    startAutoplay();
  });

  // Centrado inicial (por si las imágenes tardan en decodificar)
  requestAnimationFrame(() => goToSlide(0));
}

window.addEventListener('load', init);

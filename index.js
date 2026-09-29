/* ================================================================
   DATOS DE LOS CANDIDATOS
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
   DATOS DE LAS PROPUESTAS
   ================================================================ */
const PROPUESTAS = [
  {
    categoria: "Infraestructura, tecnología y servicios",
    items: [
      {
        titulo: 'Habilitación del espacio "Piedritas"',
        texto: 'Se coordinará con el Centro de Estudiantes para apoyar la habilitación y el funcionamiento del espacio "Piedritas" como espacio de descanso y sala de estudio, promoviendo su disponibilidad y aprovechamiento por parte de los estudiantes.'
      },
      {
        titulo: 'Mejora de los servicios higiénicos',
        texto: 'Se promoverá la mejora de las condiciones de los servicios higiénicos de la facultad, garantizando su disponibilidad desde las 8:00 am y el abastecimiento permanente de implementos básicos de higiene como jabón.'
      },
      {
        titulo: 'Continuidad de la modernización del Centro Médico',
        texto: 'Se impulsará, mediante el Consejo de Facultad, proponer que los nuevos espacios contemplados en el plan de modernización de la facultad, en el antiguo centro médico, tengan ambientes destinados a los centros culturales de la facultad.'
      }
    ]
  },
  {
    categoria: "Oferta académica y planificación",
    items: [
      {
        titulo: 'Implementación del ciclo de verano',
        texto: 'Se gestionará y coordinará la apertura de un ciclo de verano con cursos regulares y nivelatorios, permitiendo a los estudiantes adelantar materias o reforzar contenidos. Asimismo, se promoverá mantener un factor H bajo y accesible.'
      },
      {
        titulo: 'Implementación del SICHA y horarios versátiles',
        texto: 'Se propondrá la implementación del Sistema de Coordinación Horaria Académica (SICHA), con el objetivo de mejorar la planificación de horarios, reducir cruces y facilitar la coordinación académica. Como resultado de una mejor planificación, se impulsará la ampliación de opciones horarias versátiles y flexibles, especialmente mediante la implementación de cursos electivos y de fin de carrera en turno noche, para estudiantes que trabajan o tienen otras responsabilidades.'
      },
      {
        titulo: 'Cambio de malla y coordinación académica',
        texto: 'Se dará seguimiento y apoyo a los avances de la actual comisión encargada del cambio de malla curricular, promoviendo la continuidad de las propuestas que se encuentren en proceso de evaluación. Esto incluye iniciativas como la implementación de talleres de inglés de carácter no obligatorio, el desarrollo de talleres de habilidades blandas y la revisión y articulación de los contenidos académicos, con el objetivo de garantizar una secuencia lógica de conocimientos y evitar duplicidades o vacíos en la formación. Por ejemplo, se promoverá una mejor articulación entre los contenidos de Álgebra Lineal e Inferencia Estadística.'
      },
      {
        titulo: 'Participación estudiantil en concursos y competencias',
        texto: 'Se promoverá la participación de estudiantes en concursos de Estadística, hackatones, datathones y otras competencias académicas, fomentando la preparación y el acompañamiento entre estudiantes de distintos ciclos.'
      },
      {
        titulo: 'Fortalecimiento y difusión de los semilleros',
        texto: 'Se promoverá la difusión de los semilleros de investigación y sus beneficios, facilitando que los estudiantes conozcan las oportunidades de formación, investigación y participación académica que ofrecen.'
      },
      {
        titulo: 'Participación equitativa en concursos académicos',
        texto: 'Se promoverá una participación más equitativa en los concursos en los que intervienen semilleros, considerando las diferencias de experiencia y formación entre estudiantes de distintos ciclos.'
      },
      {
        titulo: 'Fortalecimiento de la Feria de Proyectos',
        texto: 'Se fortalecerá la Feria de Proyectos mediante incentivos económicos, reconocimiento y agilización de la premiación. Asimismo, se impulsará el desarrollo de proyectos en cursos de programación y estadística que contribuyan a resolver problemas de la facultad y su entorno, promoviendo su reconocimiento académico cuando corresponda.'
      },
      {
        titulo: 'Comisión para delegaciones a congresos',
        texto: 'Se propondrá, desde el inicio del año académico, la creación de una comisión encargada de coordinar y promover la participación de estudiantes en congresos, encuentros académicos y otros eventos relevantes. Esta comisión facilitará la difusión de oportunidades, la organización de delegaciones y el acompañamiento de los estudiantes, promoviendo además la generación de redes de contacto académico y profesional.'
      }
    ]
  },
  {
    categoria: "Prevención y acompañamiento estudiantil",
    items: [
      {
        titulo: 'Prevención y seguimiento del riesgo académico',
        texto: 'Se propondrá la creación de una Comisión de Información Continua (CIC) en la facultad, que trabajará de manera conjunta con el programa preventivo de tutoría implementado a nivel UNI. La CIC contribuirá a la identificación y seguimiento oportuno de estudiantes en riesgo, facilitando la comunicación de sus necesidades y la articulación de acciones de tutoría y acompañamiento académico dentro de la facultad.'
      }
    ]
  },
  {
    categoria: "Empleabilidad y vinculación institucional",
    items: [
      {
        titulo: 'Fortalecimiento de alianzas con empresas',
        texto: 'Se promoverá, mediante el Consejo de Facultad, el seguimiento y fortalecimiento de las alianzas existentes con entidades y empresas relevantes, como BCP, Interbank, entre otras. El objetivo será ampliar y mantener oportunidades para que los estudiantes puedan acceder a charlas, programas, convocatorias, prácticas preprofesionales y otras experiencias de vinculación con el sector empresarial.'
      }
    ]
  },
  {
    categoria: "Gestión cultural y recursos",
    items: [
      {
        titulo: 'Fortalecimiento del financiamiento de los centros culturales',
        texto: 'Se impulsará, mediante el Consejo de Facultad, una gestión más ágil y ordenada de los recursos destinados a los centros culturales de la facultad, buscando una distribución adecuada del presupuesto disponible y facilitando el desarrollo continuo de sus actividades culturales y formativas.'
      },
      {
        titulo: 'Regulación del uso de espacios de la facultad',
        texto: 'Se propondrá establecer una tarifa razonable y diferenciada para las organizaciones estudiantiles externas que soliciten utilizar los espacios de la facultad, considerando las condiciones de cada organización y promoviendo un uso ordenado de los ambientes.'
      }
    ]
  },
  {
    categoria: "Comunicación",
    items: [
      {
        titulo: 'Comunicación constante y abierta',
        texto: 'Se fortalecerán los canales de comunicación entre los estudiantes, delegados, Centro de Estudiantes y Tercio, manteniendo informada a la comunidad estudiantil sobre decisiones, proyectos y gestiones realizadas ante las autoridades de la facultad.'
      }
    ]
  }
];


/* ================================================================
   REFERENCIAS AL DOM
   ================================================================ */
const carousel    = document.getElementById('carousel');
const dotsWrap    = document.getElementById('dots');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const categorias  = document.getElementById('categorias');
const root        = document.documentElement;
const colorCanvas = document.getElementById('colorCanvas');
const ctx         = colorCanvas.getContext('2d', { willReadFrequently: true });

let currentIndex   = 0;
let slides          = [];
let dots             = [];
let dominantColors   = [];
let autoplayTimer    = null;
const AUTOPLAY_MS    = 3500;

/* ================================================================
   1) CONSTRUCCIÓN DEL CARRUSEL Y LOS PUNTOS
   ================================================================ */
function buildCarousel(){
  CANDIDATOS.forEach((cand, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.dataset.index = i;

    const img = document.createElement('img');
    img.src = cand.src;
    img.alt = cand.nombre;
    img.draggable = false;

    slide.appendChild(img);
    slide.addEventListener('click', () => goToSlide(i));

    carousel.appendChild(slide);
    slides.push(slide);

    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
    dots.push(dot);
  });

  updateCarouselPadding();
}

function updateCarouselPadding(){
  if(!slides.length) return;
  const wrapperWidth = carousel.parentElement.clientWidth;
  const slideWidth = slides[0].getBoundingClientRect().width;
  const sidePad = Math.max((wrapperWidth - slideWidth) / 2, 12);
  carousel.style.paddingLeft = sidePad + 'px';
  carousel.style.paddingRight = sidePad + 'px';
}

/* ================================================================
   2) EXTRACCIÓN DE COLOR DOMINANTE
   ================================================================ */
function getDominantColor(imgEl){
  const SIZE = 48;
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

      if(lightness > 0.92 || lightness < 0.08) continue;

      const weight = 0.15 + sat;
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
    console.warn('No se pudo leer el color dominante, usando color por defecto.', e);
    return { r: 122, g: 22, b: 32 };
  }
}

async function precomputeColors(){
  const promises = slides.map((slide, i) => {
    const img = slide.querySelector('img');
    return (img.decode ? img.decode().catch(()=>{}) : Promise.resolve())
      .then(() => { dominantColors[i] = getDominantColor(img); });
  });
  await Promise.all(promises);
}

/* Aplica el color dominante como glow ambiental del HERO */
function applyColor(index){
  const c = dominantColors[index];
  if(!c) return;
  const rgb = `rgb(${c.r}, ${c.g}, ${c.b})`;
  root.style.setProperty('--glow-color', rgb);
}

/* ================================================================
   3) NAVEGACIÓN DEL CARRUSEL
   ---------------------------------------------------------------
   Usamos carousel.scrollTo() para NO afectar el scroll vertical.
   ================================================================ */
function goToSlide(index){
  index = Math.max(0, Math.min(index, slides.length - 1));
  currentIndex = index;

  const slide = slides[index];
  const targetScrollLeft = slide.offsetLeft
    - (carousel.clientWidth - slide.clientWidth) / 2;

  carousel.scrollTo({
    left: targetScrollLeft,
    behavior: 'smooth'
  });

  setActive(index);
}

function nextSlide(){ goToSlide((currentIndex + 1) % slides.length); }
function prevSlide(){ goToSlide((currentIndex - 1 + slides.length) % slides.length); }

function setActive(index){
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  applyColor(index);
}

/* ================================================================
   4) DETECTAR SCROLL MANUAL DEL CARRUSEL
   ================================================================ */
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
  }, 90);
}

/* ================================================================
   5) AUTOPLAY
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
   6) RENDER DE PROPUESTAS
   ================================================================ */
function renderPropuestas(){
  if(!categorias) return;

  let contador = 0;

  PROPUESTAS.forEach(cat => {
    const catEl = document.createElement('div');
    catEl.className = 'categoria';

    const h3 = document.createElement('h3');

    const label = document.createElement('span');
    label.textContent = cat.categoria;
    h3.appendChild(label);

    const count = document.createElement('span');
    count.className = 'count';
    count.textContent = cat.items.length === 1
      ? '1 propuesta'
      : `${cat.items.length} propuestas`;
    h3.appendChild(count);

    catEl.appendChild(h3);

    const grid = document.createElement('div');
    grid.className = 'grid';

    cat.items.forEach(item => {
      contador++;

      const card = document.createElement('article');
      card.className = 'propuesta';

      const num = document.createElement('span');
      num.className = 'num';
      num.textContent = String(contador).padStart(2, '0');

      const h4 = document.createElement('h4');
      h4.textContent = item.titulo;

      const p = document.createElement('p');
      p.textContent = item.texto;

      card.appendChild(num);
      card.appendChild(h4);
      card.appendChild(p);
      grid.appendChild(card);
    });

    catEl.appendChild(grid);
    categorias.appendChild(catEl);
  });
}

/* ================================================================
   7) EVENTOS
   ================================================================ */
prevBtn.addEventListener('click', () => { prevSlide(); });
nextBtn.addEventListener('click', () => { nextSlide(); });

carousel.addEventListener('scroll', handleScroll, { passive: true });

document.addEventListener('keydown', (e) => {
  if(window.scrollY > window.innerHeight * 0.5) return;
  if(e.key === 'ArrowRight') nextSlide();
  if(e.key === 'ArrowLeft') prevSlide();
});

const wrapper = document.querySelector('.carousel-wrapper');
wrapper.addEventListener('mouseenter', stopAutoplay);
wrapper.addEventListener('mouseleave', startAutoplay);
wrapper.addEventListener('touchstart', stopAutoplay, { passive: true });
wrapper.addEventListener('touchend', () => setTimeout(startAutoplay, 1000), { passive: true });

window.addEventListener('resize', () => {
  updateCarouselPadding();
  goToSlide(currentIndex);
});

/* ================================================================
   8) INICIALIZACIÓN
   ================================================================ */
function init(){
  buildCarousel();
  renderPropuestas();

  dominantColors = CANDIDATOS.map(() => ({ r: 122, g: 22, b: 32 }));

  precomputeColors().then(() => {
    goToSlide(0);
    startAutoplay();
  });

  requestAnimationFrame(() => goToSlide(0));
}

window.addEventListener('load', init);

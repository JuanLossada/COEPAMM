/*
 * Contenido verificado de COEPAMM - única fuente de textos de negocio del sitio.
 *
 * Fuentes legítimas usadas (junio 2026):
 *  - Web oficial: coepamm.es.tl (registrada como su web en la ficha mercantil)
 *  - Instagram: @coepamm (bio y destacados vigentes)
 *  - Ficha registral: pymesvenezuela.com (RIF)
 *  - mppt.gob.ve (curso modelo OMI 3.27, 2016)
 *
 * Regla del proyecto: no inventar información. Todo dato dudoso lleva TODO.
 */

export const identidad = {
  siglas: "COEPAMM",
  nombreLegal: "Cooperativa Escuela de Patrones y Motoristas de Maracaibo, R.S.",
  nombreCorto: "Escuela de Patrones y Motoristas de Maracaibo",
  // Según bio de Instagram @coepamm
  lema: "Cursos OMI | SIAHO",
  cobertura: "Maracaibo y toda Venezuela",
  avales: ["INEA", "MPPE"], // "Avalado por @inea__ve @mineducacion_ve" (bio IG)
  rif: "J-29415141-8", // ficha registral - TODO: confirmar con COEPAMM
};

// Según "Quiénes Somos" de coepamm.es.tl
export const quienesSomos =
  "La Cooperativa Escuela de Patrones y Motoristas de Maracaibo, R.S (COEPAMM) es la institución líder dedicada a la formación y capacitación del personal titulado en la Plataforma Costa Afuera, el sector náutico y el transporte marítimo. El adiestramiento que reciben nuestros alumnos es impartido por profesionales certificados, de probada pedagogía y alta experiencia en las áreas marítimas “OMI” y de Seguridad, Higiene y Ambiente “SHA”.";

// Según "Misión" de coepamm.es.tl
export const mision =
  "Prestar servicios de Educación Integral en el Sector Náutico, para garantizar la atención de los requerimientos del valioso recurso humano que desempeña labores activamente en el mar, cumpliendo con las Leyes y Convenios Internacionales, contando con un equipo profesional, multidisciplinario, competente y responsable, cuyo propósito es la satisfacción del cliente, preservando la integridad de las instalaciones y del ambiente.";

// Según "Visión" de coepamm.es.tl
export const vision =
  "Ser la institución líder en la Formación y Capacitación para el Sector Náutico, consolidada y reconocida por dar oportunidades a quienes aspiran pertenecer activamente al proceso de engrandecer la Marina Mercante, por la excelencia en la calidad del servicio, capacidad de respuesta, empatía, orden y compromiso.";

// Según "Reseña Histórica" de coepamm.es.tl
export const historia = [
  {
    anio: "1958",
    titulo: "Nace la escuela original",
    texto:
      "El 20 de enero de 1958 se establece la escuela para responder a la falta de personal certificado que operara embarcaciones en el Lago de Maracaibo, formando patrones de segunda clase (hasta 40 t) y de primera clase (hasta 500 t).",
  },
  {
    anio: "2001",
    titulo: "Registro oficial",
    texto:
      "La Dirección General de Transporte Acuático registra la escuela bajo el número DGTA-IN-O16/2001, autorizándola a impartir cursos en varias categorías de patrones y motoristas.",
  },
  {
    anio: "2007",
    titulo: "Se constituye la cooperativa",
    texto:
      "El 5 de marzo de 2007 se constituye formalmente COEPAMM, que inicia actividades el 29 de noviembre de 2007 bajo la supervisión del Instituto Nacional de los Espacios Acuáticos (INEA) y cumpliendo las normas de la Organización Marítima Internacional (OMI).",
  },
];

// Catálogo oficial según el apartado "Cursos" de coepamm.es.tl.
// TODO: confirmar con COEPAMM el catálogo vigente y su programación actual.
export const cursos = [
  {
    nombre: "Cursos Básicos OMI STCW 78/95",
    descripcion:
      "Formación básica según los cursos modelo de la Organización Marítima Internacional bajo el convenio STCW 78/95.",
    etiqueta: "OMI",
  },
  {
    nombre: "Cursos OMI Avanzados",
    descripcion:
      "Programas avanzados de los cursos modelo OMI para la gente de mar en ejercicio.",
    etiqueta: "OMI",
  },
  {
    nombre: "Curso de Patrones (1ª y 2ª clase)",
    descripcion:
      "Formación de patrones de primera y segunda clase para buques de hasta 500 toneladas de registro bruto.",
    etiqueta: "Titulación",
  },
  {
    nombre: "Curso de Motoristas (1ª y 2ª)",
    descripcion:
      "Formación de motoristas de primera y segunda para el área de máquinas.",
    etiqueta: "Titulación",
  },
  {
    nombre: "Técnicas Básicas de Marinería",
    descripcion:
      "Fundamentos prácticos de marinería para quienes inician la carrera del sector marítimo.",
    etiqueta: "Marinería",
  },
  {
    nombre: "Cursos SHA",
    descripcion:
      "Seguridad, Higiene y Ambiente (SIAHO/SHA) para el desempeño seguro de labores en el mar y costa afuera.",
    etiqueta: "SIAHO",
  },
];

// Sede principal según coepamm.es.tl, ficha registral y Google Maps.
// TODO: confirmar con COEPAMM teléfonos, email y dirección vigentes antes de publicar.
export const contacto = {
  direccion: "Av. 19C entre calle 101A y 101B, Edificio Agua Linda",
  ciudad: "Maracaibo 4001, Zulia, Venezuela",
  telefonos: ["0261-7292838", "0414-6129824", "0426-5674250"],
  email: "coepamm@cantv.net",
  instagram: "https://www.instagram.com/coepamm/",
  instagramUsuario: "@coepamm",
  mapsUrl: "https://www.google.com/maps/place/COEPAMM/",
  // Vista satelital embebida (t=k) centrada en la sede de COEPAMM
  // (coordenadas de su ficha en Google Maps).
  mapsEmbed:
    "https://maps.google.com/maps?q=COEPAMM&ll=10.6345555,-71.6262235&t=k&z=18&hl=es&output=embed",
};

// Presencia según destacados de Instagram @coepamm.
// TODO: confirmar con COEPAMM si Margarita y Ciudad Ojeda son sedes o actividades itinerantes.
export const presencia = ["Maracaibo", "Margarita", "Ciudad Ojeda"];

// Beneficios del portal de afiliados (propuesta de valor para alumnos y
// afiliados, apoyada en los destacados reales "Programación", "Cursos OMI",
// "Pagos" y "Dudas frecuentes" de su Instagram y en su visión de plataforma virtual).
export const portalBeneficios = [
  {
    titulo: "Cursos y material formativo",
    texto:
      "Accede a tus cursos, su programación y el material de estudio de cada uno.",
  },
  {
    titulo: "Certificaciones y credenciales",
    texto:
      "Consulta tus certificaciones emitidas y su estado de tramitación en un solo lugar.",
  },
  {
    titulo: "Seguimiento del progreso",
    texto:
      "Visualiza tu avance académico y los pasos que te faltan para completar cada formación.",
  },
  {
    titulo: "Descarga de documentación",
    texto:
      "Obtén constancias, temarios y documentos relevantes sin desplazarte a la sede.",
  },
  {
    titulo: "Información centralizada",
    texto:
      "Pagos, inscripciones y avisos de la escuela reunidos en un único acceso.",
  },
  {
    titulo: "Desde cualquier dispositivo",
    texto:
      "Disponible en computadora, tableta o teléfono, en el momento que lo necesites.",
  },
];

// Datos de demostración para el portal (NO son datos reales de alumnos).
export const demoAlumno = {
  nombre: "Alumno/a de demostración",
  cursos: [
    { nombre: "Cursos Básicos OMI STCW 78/95", progreso: 75, estado: "En curso" },
    { nombre: "Técnicas Básicas de Marinería", progreso: 100, estado: "Completado" },
    { nombre: "Cursos SHA", progreso: 30, estado: "En curso" },
  ],
  certificados: [
    { nombre: "Técnicas Básicas de Marinería", estado: "Ejemplo" },
  ],
};

/**
 * Configuración centralizada de videos tutoriales.
 * Permite cambiar los videos de cualquier sección sin alterar los templates de las vistas.
 */

/**
 * Convierte cualquier formato de URL (YouTube o Canva)
 * a una URL embed válida y segura para iframe.
 *
 * @param {string} url - URL original
 * @returns {string} URL lista para iframe embed
 */
export function toYouTubeEmbedUrl(url) {
  if (!url || typeof url !== "string") return "";
  const trimmed = url.trim();

  // Si ya es una URL de embed directa
  if (trimmed.includes("/embed/") || trimmed.includes("?embed")) {
    return trimmed;
  }

  // Canva shortlinks y design links
  if (trimmed.includes("canva.link/msonhvatgph8agd")) {
    return "https://www.canva.com/design/DAHFjnjuaV8/l3kiN2ybL0SGM6fHJHUO1w/view?embed";
  }
  if (trimmed.includes("canva.link/yayrt09qlu50bhk")) {
    return "https://www.canva.com/design/DAHFNRhChGw/fJtbglrOcpME9t70Cnczsg/view?embed";
  }
  const canvaMatch = trimmed.match(/canva\.com\/design\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)/);
  if (canvaMatch) {
    return `https://www.canva.com/design/${canvaMatch[1]}/${canvaMatch[2]}/view?embed`;
  }

  // Formato corto YouTube: https://youtu.be/<id>
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch && shortMatch[1]) {
    return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1`;
  }

  // Formato estándar YouTube: https://www.youtube.com/watch?v=<id>
  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch && watchMatch[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1`;
  }

  // Formato shorts: https://www.youtube.com/shorts/<id>
  const shortsMatch = trimmed.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1`;
  }

  return trimmed;
}

export const TUTORIAL_VIDEOS = {
  // Administrador - Solicitud de Pasantías
  ADMIN_SOLICITUD_PASANTIA: {
    key: "ADMIN_SOLICITUD_PASANTIA",
    title: "Cómo crear una pasantía en Internship by Cato | Guía para empresas",
    description: "En este tutorial te mostramos cómo crear y publicar una pasantía en Internship by Cato, la plataforma de la UCB que conecta a empresas con talento universitario.",
    videoUrl: "https://www.canva.com/design/DAHFNRhChGw/fJtbglrOcpME9t70Cnczsg/view?embed",
  },
  // Administrador - Empresas
  ADMIN_EMPRESAS: {
    key: "ADMIN_EMPRESAS",
    title: "Cómo crear una cuenta de empresa en Internship by Cato | Guía paso a paso",
    description: "En este tutorial te mostramos, paso a paso, cómo crear una cuenta de empresa en Internship by Cato, la plataforma de la UCB que conecta a organizaciones con estudiantes y egresados.",
    videoUrl: "https://www.canva.com/design/DAHFjnjuaV8/l3kiN2ybL0SGM6fHJHUO1w/view?embed",
  },
  // Administrador - Solicitudes de Registro de Empresa
  ADMIN_SOLICITUD_EMPRESAS: {
    key: "ADMIN_SOLICITUD_EMPRESAS",
    title: "Cómo crear una cuenta de empresa en Internship by Cato | Guía paso a paso",
    description: "En este tutorial te mostramos, paso a paso, cómo crear una cuenta de empresa en Internship by Cato, la plataforma de la UCB que conecta a organizaciones con estudiantes y egresados.",
    videoUrl: "https://www.canva.com/design/DAHFjnjuaV8/l3kiN2ybL0SGM6fHJHUO1w/view?embed",
  },
  // Administrador - Pasantías
  ADMIN_PASANTIAS: {
    key: "ADMIN_PASANTIAS",
    title: "Cómo crear una pasantía en Internship by Cato | Guía para empresas",
    description: "En este tutorial te mostramos cómo crear y publicar una pasantía en Internship by Cato, la plataforma de la UCB que conecta a empresas con talento universitario.",
    videoUrl: "https://www.canva.com/design/DAHFNRhChGw/fJtbglrOcpME9t70Cnczsg/view?embed",
  },
  // Administrador - Pasantías sin Aplicantes
  ADMIN_PASANTIAS_SIN_APLICANTES: {
    key: "ADMIN_PASANTIAS_SIN_APLICANTES",
    title: "Cómo crear una pasantía en Internship by Cato | Guía para empresas",
    description: "En este tutorial te mostramos cómo crear y publicar una pasantía en Internship by Cato, la plataforma de la UCB que conecta a empresas con talento universitario.",
    videoUrl: "https://www.canva.com/design/DAHFNRhChGw/fJtbglrOcpME9t70Cnczsg/view?embed",
  },
  // Completar Registro - Estudiante
  REGISTRO_ESTUDIANTE: {
    key: "REGISTRO_ESTUDIANTE",
    title: "Registro de estudiante",
    description: "Guía paso a paso para completar tus datos de estudiante.",
    videoUrl: "https://www.youtube.com/embed/S_CGed6E610?feature=oembed",
  },
  // Completar Registro - Empresa
  REGISTRO_EMPRESA: {
    key: "REGISTRO_EMPRESA",
    title: "Cómo crear una cuenta de empresa en Internship by Cato | Guía paso a paso",
    description: "En este tutorial te mostramos, paso a paso, cómo crear una cuenta de empresa en Internship by Cato, la plataforma de la UCB que conecta a organizaciones con estudiantes y egresados.",
    videoUrl: "https://www.canva.com/design/DAHFjnjuaV8/l3kiN2ybL0SGM6fHJHUO1w/view?embed",
  },
  // Home - Mejores Empresas
  HOME_BEST_COMPANIES: {
    key: "HOME_BEST_COMPANIES",
    title: "Cómo crear una cuenta de empresa en Internship by Cato | Guía paso a paso",
    description: "En este tutorial te mostramos cómo crear una cuenta de empresa en Internship by Cato y formar parte del ecosistema de empleabilidad.",
    videoUrl: "https://www.canva.com/design/DAHFjnjuaV8/l3kiN2ybL0SGM6fHJHUO1w/view?embed",
  },
  // Home - Two Job CTA
  HOME_TWO_JOB_CTA: {
    key: "HOME_TWO_JOB_CTA",
    title: "Cómo crear una pasantía en Internship by Cato | Guía para empresas",
    description: "En este tutorial te mostramos cómo crear y publicar una pasantía en Internship by Cato, la plataforma de la UCB que conecta a empresas con talento universitario.",
    videoUrl: "https://www.canva.com/design/DAHFNRhChGw/fJtbglrOcpME9t70Cnczsg/view?embed",
  },
};

/**
 * Obtiene la configuración de video por clave con URL embebida lista para iframe.
 *
 * @param {string} key - Clave del video definida en TUTORIAL_VIDEOS
 * @returns {{ key: string, title: string, description: string, videoUrl: string, embedUrl: string }}
 */
export function getTutorialVideo(key) {
  const item = TUTORIAL_VIDEOS[key];
  if (!item) {
    return {
      key: key || "DEFAULT",
      title: "Tutorial",
      description: "",
      videoUrl: "https://www.canva.com/design/DAHFjnjuaV8/l3kiN2ybL0SGM6fHJHUO1w/view?embed",
      embedUrl: "https://www.canva.com/design/DAHFjnjuaV8/l3kiN2ybL0SGM6fHJHUO1w/view?embed",
    };
  }
  return {
    ...item,
    embedUrl: toYouTubeEmbedUrl(item.videoUrl),
  };
}

export default {
  TUTORIAL_VIDEOS,
  toYouTubeEmbedUrl,
  getTutorialVideo,
};

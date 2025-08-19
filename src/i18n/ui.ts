export const languages: Record<'es' | 'en', { name: string; flag: string }> = {
  es: { name: 'Español', flag: 'mx' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'es';

export type LanguageCode = keyof typeof languages;

export const ui = {
  es: {
    projectsContent: {
      sampleProject: {
        title: 'Exemple de Projet',
        description: "Ceci est un projet d'exemple pour le template.",
        imageAltText: "Image placeholder pour le projet d'exemple",
        categoryText: 'Application Web',
        dateText: 'Janvier 2025',
        detailedDescription:
          "Une description plus détaillée de ce projet d'exemple, montrant comment structurer le contenu pour la page de détail du projet.",
        keyFeatures: {
          responsiveDesign: {
            title: 'Design Adaptatif',
            description: "Le projet s'adapte à toutes les tailles d'écran.",
          },
          contentManagement: {
            title: 'Gestion de Contenu Facile',
            description:
              'Permet une gestion aisée du contenu via des fichiers Markdown ou un CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          //   alt: "Texte alternatif pour l'image de galerie 1",
          //   caption: "Légende pour l'image de galerie 1",
          // },
        },
        challenges:
          'Description des défis rencontrés lors de la création de ce projet exemple.',
        learnings: 'Description des apprentissages tirés de ce projet exemple.',
      },
    },
    skillsContent: {
      graphicsProgramming: {
        title: 'Graphics Programming',
        description:
          'Crafting renderers using OpenGL',
      },
      frontendDevelopment: {
        title: 'Développement Frontend',
        description:
          "Création d'interfaces utilisateur interactives et performantes.",
      },
      backendDevelopment: {
        title: 'Développement Backend',
        description: "Construction de logiques serveur robustes et d'API.",
      },
      uiUxDesign: {
        title: 'Design UI/UX',
        description:
          "Conception d'expériences utilisateur intuitives et esthétiques.",
      },
      devOps: {
        title: 'DevOps',
        description:
          'Automatisation des processus de développement et de déploiement.',
      },
    },
    site: {
      title: 'Portafolio de JonathanGzzBen',
      description:
        'Portafolios y blog de JonathanGzzBen. Un ingeniero en software enfocado en systems, embedded y graphics programming.',
    },
    nav: {
      home: 'Accueil',
      blog: 'Blog',
      contact: 'Contacto',
      projects: 'Proyectos',
      tips: 'Consejos',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
    homePage: {
      pageTitle: 'JonathanGzzBen | Ingeniero de Software',
      pageDescription:
        "Bienvenido al portafolios y blog de JonathanGzzBen. Un ingeniero en software enfocado en systems, embedded y graphics programming.",
      heroGreeting: "Hola, soy Jonathan",
      heroSubtitlePart1: 'Ingeniero de Software',
      heroSubtitlePart2: 'Apasionado de los graficos',
      heroIntroduction: 'Esta es mi introduccion. Soy un ingeniero de software fan del anime',
      heroViewWorkButton: 'Mis trabajos',
      heroContactButton: 'Contactame',
      heroImageAlt:
        'Ilustracion representante de Jonathan desarrollando',
      featuredProjectsTitle: '3 de mis proyectos recientes',
      featuredProjectsDescription:
        "Algunos proyectos en los que he trabajado recientemente. ¡Sientete libre de darles un vistazo!",
      projectCardViewProject: 'Ver proyecto',
      projectCardViewCode: 'Ver código',
      imageNotAvailable: 'Imagen no disponible',
      mySkillsTitle: 'Mis habilidades',
      mySkillsDescription:
        'Explora las habilidades y expertiz que definen mi trabajo y pasión.',
    },
    blogPage: {
      pageTitle: 'Blog técnico de JonathanGzzBen',
      pageDescription:
        'Artículos y pensamientos de programación de bajo nivel, gráficos , optimización y nuevas tecnologías.',
      title: 'Blog técnico de JonathanGzzBen',
      description:
        'Artículos y pensamientos de programación de bajo nivel, gráficos , optimización y nuevas tecnologías.',
      comingSoon: 'Los posts de mi blog apareceran aquí pronto. ¡Vuelve a revisar más tarde!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Publicado: ',
      readMore: 'Leer más',
      readingTimeSuffix: 'minutos de lectura',
      searchPlaceholder: 'Buscar articulos...',
      filterByTagButtonLabel: 'Filtrar por etiqueta',
      noTagFound: 'Etiqueta no encontrada.',
      selectTagCommandPlaceholder: 'Buscar etiqueta...',
      allTagsLabel: 'Todas las etiquetas',
      noPostsFound: 'No se encontraron posts.',
    },
    blogPost: {
      publishedOn: 'Publicado el: ',
      updatedOn: 'Actualizado el: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Regresar a la lista de articulos',
      readingTimeSuffix: 'minutos de lectura',
      relatedPostsTitle: 'También te recomiendo :',
      readMore: 'Leer más',
      editOnGithub: 'Proponer cambio en GitHub',
    },
    toc: {
      title: "Tabla de Contenidos",
    },
    contactPage: {
      pageTitle: 'Contáctame',
      pageDescription:
        "Discutamos tu proyecto, una colaboración potencial, simplemente platiquemos de tecnología.",
      title: 'Contáctame',
      description:
        "Discutamos tu proyecto, una colaboración potencial, simplemente platiquemos de tecnología.",
      formTitle: 'Enviar un mensaje',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellidos',
      emailLabel: 'Correo',
      messageLabel: 'Mensaje',
      sendButtonLabel: 'Enviar',
      firstNamePlaceholder: 'Tu nombre',
      lastNamePlaceholder: 'Tus apellidos',
      emailPlaceholder: 'Tu correo electronico',
      messagePlaceholder: 'Tu mensaje...',
      calendarTitle: 'Agendar una reunión',
      calendarDescription:
        '¿Prefieres hablar en vivo? Reserva un espacio directamente en mi calendario.',
      calendarButtonLabel: 'Ver mi disponibilidad',
      calendarLinkLabel: 'Ver mi calendario',
      calendarPlaceHolder:
        "La integración con Google Calendar vendrá pronto...",
      orSeparatorText: 'O',
      toastSuccessMessageSent: 'Mensaje enviado exitosamente!',
      toastErrorFailedToSend: "Error al enviar el mensaje.",
      toastErrorUnexpected: "Ocurrio un error inesperado.",
      toastErrorDetails: "Detalles del error:",
      toastErrorValidationFailed: 'Validación del formulario fallida.',
    },
    projectDetailPage: {
      backToProjects: 'Volver a Proyectos',
      categoryLabel: 'Categoria:',
      dateLabel: 'Fecha:',
      aboutTitle: 'Acerca de este proyecto',
      keyFeaturesTitle: 'Caracteristicas clave',
      galleryTitle: 'Galeria',
      challengesTitle: 'Desafios',
      learningsTitle: 'Aprendizajes',
      visitProjectButton: 'Visitar proyecto',
      viewCodeButton: 'Ver codigo',
    },
    projectsPage: {
      title: 'Mis Proyectos',
      metaTitle: 'Mis Proyectos | Portafolio',
      metaDescription: 'Descubre todos mis proyectos.',
      noProjects: 'No hay proyectos que mostrar en este momento.',
      noProjectsDescription:
        "Parece que no hay proyectos que pueda mostrar en este momento.",
    },
    notFoundPage: {
      pageTitle: 'Pagina no encontrada',
      title: 'Ups! Pagina no encontrada',
      message:
        "Perdon, la pagina que estas buscando no existe. Revisa la URL o regresa a la pagina principal.",
      homeLink: "Regresar a la pagina principal",
    },

    tipsPage: {
      metaTitle: 'Consejos de desarrollo',
      metaDescription:
        'Navega una coleccion de mis pequeños consejos acerca de programación e ingenieria de software.',
      title: 'Consejos más recientes',
      description:
        'Navega una coleccion de mis pequeños consejos acerca de programación e ingenieria de software.',
      noTips: 'No hay consejos que mostrar en este momento.',
      readTip: "Leer consejo",
      backToList: 'Regresar a la lista de Consejos',
      featuredTips: 'Consejos recomendados',
      allTips: 'Todos los Consejos',
      tipsAvailable: 'consejos disponibles',
      tipAvailable: 'consejo disponible',
      editOnGithub: 'Editar en Github',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Type invalide.',
      invalid_type_received_undefined: 'Ce champ est requis.', // For required fields (fallback)
      required_field_custom: 'Le champ {fieldName} est requis.',
      // String errors
      too_small_string_minimum: 'Doit contenir au moins {minimum} caractères.',
      too_big_string_maximum: 'Ne doit pas dépasser {maximum} caractères.',
      invalid_string_email: 'Adresse e-mail invalide.',
      invalid_string_url: 'URL invalide.',
      invalid_string_uuid: 'UUID invalide.',
      // You can add more specific messages as needed
    },
  },
  en: {
    projectsContent: {
      sampleProject: {
        title: 'Sample Project',
        description: 'This is a sample project for the template.',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Web Application',
        dateText: 'January 2025',
        detailedDescription:
          'A more detailed description of this sample project, showing how to structure content for the project detail page.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsive Design',
            description: 'The project adapts to all screen sizes.',
          },
          contentManagement: {
            title: 'Easy Content Management',
            description:
              'Allows for easy content management via Markdown files or a CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
    },
    skillsContent: {
      graphicsProgramming: {
        title: 'Graphics Programming',
        description:
          'Crafting renderers using OpenGL',
      },
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      devOps: {
        title: 'DevOps',
        description: 'Automating development and deployment processes.',
      },
    },
    site: {
      title: 'My Awesome Template',
      description:
        'A modern and performant Astro template to kickstart your project.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
      tips: 'Tips',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | Jonathan - Software Engineer',
      pageDescription:
        'Welcome to the portfolio of Jonathan, a software engineer passionate about creating high performance systems.',
      heroGreeting: "Hi, I'm Jonathan",
      heroSubtitlePart1: 'Systems Programmer',
      heroSubtitlePart2: 'Graphics Enthusiast',
      heroIntroduction: 'Add an introduction here.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing Jonathan or a development concept',
      featuredProjectsTitle: '3 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | Jonathan's Portfolio",
      metaDescription: "Discover all of Jonathan's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      metaTitle: 'Development Tips | Jonathan',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}

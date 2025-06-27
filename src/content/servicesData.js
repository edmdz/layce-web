// src/content/servicesData.js
export const servicesPageData = [
    {
        id: "diseno-planificacion",
        title: "Diseño y planificación",
        iconName: "pencil-square", // Nombre del icono de config/icons.js
        description: "Creamos soluciones integrales desde la concepción inicial, asegurando que cada detalle esté alineado con tus objetivos y las mejores prácticas de la industria.",
        imageSrc: "https://images.unsplash.com/photo-1744627049721-73c27008ad28?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJxdWl0ZWN0b3MlMjBwbGFub3MlMjBkaXNlJUMzJUIxb3xlbnwwfHwwfHx8Mg%3D%3D",
        imageAlt: "Arquitectos colaborando en planos de diseño detallados.",
        imagePosition: "left",
        bulletPoints: [
            "Planos oficiales",
            "Diseño de interiores",
            "Renders",
            "Planos ejecutivos"
        ],
        cta: {
            text: "Cotizar Diseño",
            link: "/contacto?servicio=diseno"
        }
    },
    {
        id: "construccion-remodelacion",
        title: "Construcción y remodelación",
        iconName: "building-office-2",
        description: "Materializamos tus proyectos con los más altos estándares de calidad, desde obra nueva hasta renovaciones que transforman espacios existentes.",
        imageSrc: "/images/monumento_sendero/monumento_sendero_2.jpeg",
        imageAlt: "Sitio de construcción activo con maquinaria y trabajadores.",
        imagePosition: "right",
        bulletPoints: [
            "Obra civil",
            "Acabados interiores y exteriores",
            "Urbanización",
            "Bacheo",
            "Pintura",
            "Obra pública"
        ],
        cta: {
            text: "Cotizar Construcción",
            link: "/contacto?servicio=construccion"
        }
    },
    {
        id: "consultoria-gestion",
        title: "Consultoría y gestión de proyectos",
        iconName: "clipboard-document-list",
        description: "Guiamos tu proyecto al éxito con una supervisión experta y metodologías probadas, asegurando eficiencia, transparencia y cumplimiento de objetivos.",
        imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageAlt: "Reunión de equipo discutiendo la planificación y gestión de un proyecto.",
        imagePosition: "left",
        bulletPoints: [
            "Gestión y supervisión de proyectos con metodología Project Management",
            "Consultoría en construcción y remodelación"
        ],
        cta: {
            text: "Consultar Gestión",
            link: "/contacto?servicio=gestion"
        }
    }
];
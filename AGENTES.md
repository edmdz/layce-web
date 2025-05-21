# Contexto del Proyecto: Sitio Web Corporativo LAYCE Construcciones (para LLMs)

**Última Actualización:** [Fecha de Hoy, ej: 2024-05-21]

**Propósito de este Documento:**
Este documento centraliza la información crítica y las directrices para el desarrollo del sitio web corporativo de LAYCE Construcciones. Está diseñado para ser consumido por Modelos de Lenguaje Grandes (LLMs) para asegurar consistencia, calidad y alineación con los objetivos del proyecto.

---

## 1. Visión General del Proyecto

*   **Cliente:** LAYCE Construcciones
*   **Tipo de Sitio Web:** Corporativo, Informativo.
*   **Objetivo Principal:** Desarrollar un sitio web profesional, moderno y optimizado para SEO que refleje la visión, misión, valores, servicios y trayectoria de LAYCE, generando confianza y captando prospectos.
*   **Palabras Clave del Proyecto:** Profesionalismo, Claridad, Confianza, Calidad, Innovación, Sostenibilidad.

---

## 2. Información de la Empresa (Basado en `LAYCE CONSTRUCCIONES.pdf`)

*   **Visión:** [Extraer del PDF - ej: Ser la empresa constructora líder reconocida por su excelencia, innovación y compromiso con la sostenibilidad...]
*   **Misión:** [Extraer del PDF - ej: Transformar las ideas de nuestros clientes en proyectos constructivos de alta calidad, superando sus expectativas a través de un equipo profesional, procesos eficientes y un enfoque en la seguridad y el medio ambiente...]
*   **Valores Fundamentales:**
    *   Calidad
    *   Compromiso
    *   Innovación
    *   Seguridad (Política de cero accidentes)
    *   Sostenibilidad
    *   Integridad
    *   Trabajo en Equipo
*   **Servicios Ofrecidos:**
    1.  Diseño y Planificación de Proyectos
    2.  Construcción Residencial
    3.  Construcción Comercial
    4.  Construcción Industrial
    5.  Remodelaciones y Ampliaciones
    6.  Consultoría y Gestión de Proyectos (con metodologías PMI)
    7.  Urbanización, Acabados, Pintura, Bacheo y Obra Pública (mencionado en el componente `TabbedServices`)
*   **Diferenciadores Estratégicos:**
    *   Enfoque en inteligencia artificial (IA) y nuevas tecnologías.
    *   Aplicación de metodologías PMI.
    *   Política de cero accidentes.
    *   Compromiso con la sostenibilidad.
    *   Experiencia comprobada (ej: +15 años).
    *   Legado familiar y valores sólidos.
*   **Metas (Resumen):** [Referenciar objetivos a corto, mediano y largo plazo si están detallados en el PDF]

---

## 3. Arquitectura de la Información y Secciones del Sitio

*   **Páginas Principales (Rutas):**
    *   `/` (Inicio / Home)
    *   `/servicios`
    *   `/proyectos`
    *   `/proyectos/[slug]` (Página de detalle de proyecto individual - dinámica)
    *   `/nosotros`
    *   `/metas-innovacion`
    *   `/contacto`
    *   `/aviso-privacidad`
*   **Estructura de la Página de Inicio (Componentes Actuales):**
    1.  `Header.astro` (Navegación principal, logo)
    2.  `HeroSection.astro` (Título impactante, imagen de fondo, CTA principal)
    3.  `CompanyBrief.astro` (Resumen visual de la empresa con imagen y puntos clave)
    4.  `TabbedServices.astro` (Presentación interactiva de servicios con pestañas)
    5.  `FeaturedProjects.astro` (Galería visual de proyectos destacados)
    6.  `Footer.astro` (Información de contacto, copyright, enlaces)
*   **Wireframe General (Referencia `home_wireframe.txt` para la Home):** Se mantiene como guía conceptual para la estructura de la página de inicio, aunque la implementación ha evolucionado (ej. `CompanyBrief` reemplazó al "Sobre Nosotros" más simple).
*   **Jerarquía de Información Clave (Referencia `Plan de diseño.txt`):**
    *   **Alta Prioridad:** Servicios, Contacto, Proyectos destacados, Logros/Experiencia.
    *   **Media Prioridad:** Misión, Visión.
    *   **Baja Prioridad (contextual):** Valores (integrados), Metas futuras (en su sección).

---

## 4. Identidad Visual y Guía de Estilo

#### Paleta de Colores Oficial (Ref. `tailwind.config.js` y `Plan de diseño.txt`)

| Rol                 | Color        | Hex       | Tailwind Class | Uso Recomendado                                                     |
| ------------------- | ------------ | --------- | -------------- | ------------------------------------------------------------------- |
| **Primario Azul**   | Azul LAYCE   | `#3F63C8` | `bg-primary`, `text-primary` | Botones principales, encabezados, íconos, elementos de marca, fondo de footer. |
| **Secundario Rojo** | Rojo LAYCE   | `#DE3A3A` | `bg-secondary`, `text-secondary` | CTAs de énfasis, hovers en primario, elementos de alerta (con cuidado). |
| **Gris Oscuro**     | Neutro texto | `#333333` | `text-neutralText` | Texto principal y de cuerpo.                                        |
| **Gris Claro**      | Fondo UI     | `#F5F5F5` | `bg-lightGray` | Fondos de secciones alternas, contenedores internos.              |
| **Blanco**          | Base         | `#FFFFFF` | `bg-white`, `text-white` | Fondo base general, texto sobre fondos oscuros/de color.           |
| **Negro suave**     | Contraste    | `#1A1A1A` | `text-softBlack` | Líneas, sombras sutiles, texto muy destacado (con moderación).    |

#### Tipografía Principal (Poppins vía Google Fonts)

| Peso de Fuente        | Clase Tailwind  | Uso Principal                                                                 |
| --------------------- | --------------- | ----------------------------------------------------------------------------- |
| Poppins Regular (400) | `font-normal`   | Párrafos, texto de cuerpo principal, descripciones largas.                       |
| Poppins Medium (500)  | `font-medium`   | Subtítulos (H3, H4), texto destacado, enlaces de navegación, botones y CTAs.  |
| Poppins SemiBold (600)| `font-semibold` | Títulos principales (H1, H2), frases de impacto, cabeceras de tarjetas.       |
| Poppins Bold (700)    | `font-bold`     | Para énfasis fuerte (usar con moderación).                                    |

*   **Implementación:** Cargada desde Google Fonts en `Layout.astro`. Definida como `font-sans` en `tailwind.config.js`.
*   **Uso:** Aplicar clases de peso de Tailwind (`font-normal`, `font-medium`, `font-semibold`, `font-bold`) según la jerarquía visual.

#### Logos

*   **Principal (Header):** `src/assets/Layce_logo_horizontal_transparent.svg`
*   **Para Fondos Oscuros (Footer):** Idealmente, una versión SVG completamente blanca/clara. Actualmente se usa un filtro CSS como apaño temporal: `filter: brightness(0) invert(1) grayscale(1) contrast(100);`.
*   **Favicon:** `public/favicon.svg`

---

## 5. Aspectos Técnicos del Desarrollo (Ref. `README.md` del proyecto)

*   **Framework:** Astro (SSG por defecto, componentes `client:*` para interactividad).
*   **Estilos:** Tailwind CSS v3.4.17 (configurado en `tailwind.config.js`).
*   **Estructura de Carpetas Principal:**
    ```
    /public
        /images
        /scripts
            animations.js
    /src
        /assets         (Logos, SVGs no directamente en public)
        /components
            /home
            /layout
            /services
            /(otras agrupaciones por funcionalidad)
        /layouts        (Layout.astro)
        /pages          (Rutas del sitio)
        /styles         (global.css)
        /content        (Potencial para Markdown/MDX)
    ```
*   **Optimización para SEO:**
    *   HTML Semántico.
    *   Metaetiquetas completas (`title`, `description` por página).
    *   URLs limpias y amigables.
    *   Optimización de imágenes (placeholders actuales, se reemplazarán).
    *   Schema.org (pendiente de implementación detallada).
*   **Experiencia de Usuario (UX/UI):**
    *   Mobile-first y responsive.
    *   Navegación clara.
    *   Microinteracciones y animaciones CSS sutiles (controladas por `animations.js` y Intersection Observer).
    *   Foco en Core Web Vitals (LCP, INP, CLS).
*   **Animaciones:**
    *   Implementadas con CSS (`@keyframes`, `animation-*`) y disparadas por JavaScript (`animations.js` usando `IntersectionObserver`).
    *   Clase `scroll-animate` para elementos a observar.
    *   Clase `is-visible` para activar la animación.
    *   Animación única por carga de página (`observer.unobserve(entry.target)`).
    *   Se respeta `prefers-reduced-motion`.
*   **Próximas Fases (Potencial):** Blog, integración con redes sociales más profunda, formularios avanzados, multilenguaje.

---

## 6. Directrices Específicas para LLMs

*   **Tono de Comunicación (para contenido generado):** Profesional, claro, confiable, experto, pero accesible. Enfocado en el cliente y en soluciones.
*   **Priorizar Directrices de este Documento:** En caso de conflicto con información genérica, este documento tiene precedencia.
*   **Consideraciones de SEO al Generar Contenido:** Incluir palabras clave relevantes de forma natural. Crear títulos y descripciones únicos y atractivos.
*   **Estilo de Código (Astro/Tailwind):** Seguir las convenciones existentes en el proyecto. Usar clases utilitarias de Tailwind preferentemente. Mantener componentes modulares y bien estructurados.
*   **Al proponer nuevos componentes o secciones:** Considerar la reutilización, el rendimiento y la alineación con la identidad visual y los objetivos del proyecto.
*   **Criticar y Sugerir:** No solo ejecutar, sino también proponer mejoras, alternativas y justificaciones técnicas, especialmente en cuanto a estructura, UX y rendimiento.
*   **Creatividad Visual:** Proponer ideas innovadoras para diseño visual, animaciones y microinteracciones, siempre dentro del marco profesional de una constructora.

---

Este documento debe ser la fuente principal de verdad para el contexto del proyecto LAYCE Construcciones. Se actualizará conforme el proyecto evolucione.
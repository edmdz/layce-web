/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'; // Necesario para extender las fuentes por defecto

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Establece Poppins como la fuente principal para la clase 'font-sans'
        // y mantiene las fuentes sans-serif por defecto de Tailwind como fallback.
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#3F63C8',       // Azul LAYCE (tomado del nuevo logo)
        secondary: '#DE3A3A',     // Rojo LAYCE (tomado del nuevo logo)
        neutralText: '#333333',  // Gris Oscuro para texto
        lightGray: '#F5F5F5',    // Gris Claro para fondos de UI
        softBlack: '#1A1A1A',    // Negro suave para contraste
      },
    },
  },
  plugins: [],
}
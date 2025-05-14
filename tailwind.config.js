/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F63C8',       // Azul LAYCE
        secondary: '#DE3A3A',     // Rojo LAYCE
        neutralText: '#333333',  // Gris Oscuro para texto
        lightGray: '#F5F5F5',    // Gris Claro para fondos de UI
        softBlack: '#1A1A1A',    // Negro suave para contraste
      },
    },
  },
  plugins: [],
}
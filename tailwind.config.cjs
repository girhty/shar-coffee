/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        espressoDark: '#070707',
        espressoSwirl: '#171715',
        roastDeep: '#2a1a0f',
        roastCrema: '#b07a45',
        boneSurface: '#f1f1ef',
        boneSwirl: '#e7e5e3',
        accentAmber: '#d58c3d',
      },
      fontFamily: {
        space: ['"Space Mono"', 'monospace'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        allura: ['Allura', 'cursive'],
        onest: ['Onest', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}
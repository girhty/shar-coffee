import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/shar-coffee/',
  output: 'static',
  integrations: [tailwind()]
});
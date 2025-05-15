// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.my-site.dev',
  base: '/dist/',
  compressHTML: false,
  experimental: {
    fonts: [{
        provider: fontProviders.google(),
        name: "Noto Sans JP",
        cssVariable: "--font-notoSansJP"
    }]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
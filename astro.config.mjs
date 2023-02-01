import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro-i18next.yassinedoghri.com/
import astroI18next from 'astro-i18next'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next()],
  site: 'https://jacobgonzalez.dev',
  base: '/',
})

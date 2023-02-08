import { defineConfig } from 'astro/config'

// https://astro-i18next.yassinedoghri.com/
import astroI18next from 'astro-i18next'

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next()],
  site: 'https://jacobgonzalez.dev',
  base: '/',
})

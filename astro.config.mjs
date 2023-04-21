import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'

// https://astro-i18next.yassinedoghri.com/
import astroI18next from 'astro-i18next'

// https://astro.build/config
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next(),
    image(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  site: 'https://jacobgonzalez.dev',
  base: '/',
})

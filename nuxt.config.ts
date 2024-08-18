export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  plugins: ['~/plugins/spline-viewer.client.ts'],
  
})

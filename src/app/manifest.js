export default function manifest() {
  return {
    name: 'Mauro Apps',
    short_name: 'Mauro Apps',
    description: 'Premium mobile applications crafted with care.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/assets/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

const dev = !`${process.env.NODE_ENV}`.toLowerCase().includes('prod')

// TODO: Change these according to where you'll deploy
export const server = dev
  ? 'http://localhost:3000'
  : 'https://ecommerce-app-pi.vercel.app/'

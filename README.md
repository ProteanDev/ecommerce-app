**Ecommerce Sample App by Chan D**
Demo URL: [ecommerce-app-pi.vercel.app](https://ecommerce-app-pi.vercel.app)

To run this app locally, you'll need to have Node installed with npm (`npm run dev`) or with yarn (`yarn dev`).

This sample app demonstrates the usage of Tailwind CSS (v2.2) with Next.js. It follows the steps outlined in the official Tailwind documentation.

It utilizes Tailwind CSS's Just-in-Time mode for improved efficiency.

**Why didn't I use Styled Components?**
I'm currently experimenting with Tailwind CSS. If you're interested in seeing my work with styled-components in action, you can check out this repository: [Protean Card Editor](https://github.com/example/protean-card-editor).

**Why didn't I use TypeScript and Redux?**
At the moment, I didn't want to introduce too much complexity to this demo project.

**Why didn't I use Next.js's page routes?**
Currently, there's no immediate need for it. However, if I have more time in the future, I'll consider improving this demo to utilize Next.js's page routes.

This project employs the following combinations to achieve simplicity:
- Next.js's API Routes and axios for fetching data from [fakestoreapi.com](https://fakestoreapi.com)
- React's Context API for managing app state
- localStorage for persisting data
- Tailwind CSS and Tippy for UI
- Service Workers to enable offline functionality for the entire site

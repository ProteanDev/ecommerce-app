

# Ecommerce Sample App from Christian Dela Peña

Demo URL: https://ecommerce-app-pi.vercel.app/

To run this locally you need to have node installed with npm
(`npm run dev`)
or with yarn
(`yarn dev`)


This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

# Why I didn't use Styled Components?

I'm experimenting with Tailwind CSS, if you wish to see how I work in styled-components in action check this repo
[Protean Card Editor](https://github.com/ProteanDev/protean-card-editor)

# Why I didn't use TypeScript and Redux?

I do not want to introduce that much of a complexity yet on this demo project

# Why I didn't use Next js's page routes?

There's no need yet, if I get more time someday I will improve this demo to use that

# This project use the following combinations to achieve simplicity

- Next js's API Routes and axios to fetch data from fakestoreapi.com
- React's Context API to manage app state
- localStorage to persist data
- Tailwind CSS and Tippy for UI
- Service Workers to persist the whole site offline

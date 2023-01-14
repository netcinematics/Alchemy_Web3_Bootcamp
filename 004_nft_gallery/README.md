
# Notes

> npx create-next-app -e with-tailwindcss 004_nft_gallery

- name must be lower case, lolz

>cd 004_nft_gallery

> npm run dev    

> also > cd nameoftheproject && code .

> npm install dotenv //(?)

CHALLENGES:

Add an icon next to the NFT addresses to make it easy for people viewing your site to copy the contract address.
Add a pagination system to view more than 100 NFTs, by using the pageKey parameter from the getNFTs endpoint.


ADDED~TOUCH for EXTRA~CREDIT:
- tailwind: MEDIA QUERIES in tailwind.config.js | max NOT min
- CUSTOM: MEDIA QUERY | flex-col and items-center, remove w-1/4
- tailwind: full screen | min-h-screen NOT h-screen
- tailwind: layout:  remove w-5/6 and flex-wrap | add width to Card and Buttons w/Radius.
- next.js: Home.getInitialProps = async (ctx) => {} | init front-load
- CUSTOM NAV: 'BOOK' and 'PAGE'. 
- CUSTOM SEARCH: input w/ LOOKUP button.
- CUSTOM PAGINATION (3): using pageKey parameter from getNFTs.
- CUSTOM: Header,Content,Footer to CARD and APP.



# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

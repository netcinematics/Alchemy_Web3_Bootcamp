
# Notes

> npx create-next-app -e with-tailwindcss 004_nft_gallery

- name must be lower case, lolz

>cd 004_nft_gallery

> npm run dev    

> also > cd nameoftheproject && code .

> npm install dotenv //(?) no. Next.js changed to .local.env

CHALLENGES:

Add an icon next to the NFT addresses to make it easy for people viewing your site to copy the contract address.
Add a pagination system to view more than 100 NFTs, by using the pageKey parameter from the getNFTs endpoint.


DEV STEPS  - for EXTRA~CREDIT:
x - SEMANTIC HTML: Header,Content,Footer (html frames) for CARD and APP.
x - tailwind: MEDIA QUERIES | Phone PC | tailwind.config.js | max NOT min
x - CUSTOM: MEDIA QUERY | flex-col and items-center, remove w-1/4
x - tailwind: full screen | min-h-screen NOT h-screen
x - tailwind: layout:  remove w-5/6 and flex-wrap | add width to Card and Buttons w/Radius.
x - next.js: Home.getInitialProps = async (ctx) => {} | init front-load
x - CUSTOM: NAV: 'BOOK' and 'PAGE'. 
x - CUSTOM: SEARCH: input w/ LOOKUP button.
x - CUSTOM: PAGINATION (3): using pageKey parameter from getNFTs.
x - CUSTOM: FLEX GROW.
x - COPY-CLIPBOARD0x : https://learnjsx.com/category/4/posts/nextjs-copy-clipboard 
x - PAGE NAV tailwind: 
x - https://tailwindui.com/components/application-ui/navigation/pagination
x - https://dev.to/larainfo/tailwind-css-simple-pagination-4m3p
x - PAGE NAV next.js: https://nextjs.org/learn/basics/navigate-between-pages
x - CUSTOM: CAROUSEL COMPONENT: from TAILWIND STACKED-CARD component.
x - https://v1.tailwindcss.com/components/cards#stacked
x - IMPROVEMENT: add flex-1 and self-auto to the CARD. with items-stretch Tricky.

# NEED BETTER DATA - for Carousel-Pagination and for WEB3NFTBOOK!
x - TESTNET: switch to POLYGON MUMBAI TESTNET!
x - NEXT.js.localenv ?
x - CAROUSEL load/click behavior.

# I've been on Alchemy for over 1yr already! Looking back, days on Alchemy 467!
# GALLERY INTERACTION EXAMPLE:
x - https://beta.reactjs.org/learn/adding-interactivity
x - CUSTOM COMPONENT: Next.js - gallery navigation.
x - DEEPDIVE: Next.js Routing and React LINK pages.
x - POC | SANDBOX: TEST NAV/PAGE/CARD behavior.
x - added loop around index capability.
x - NAV COMPONENT - tricky, bubble up state.
x - APIManager: factory method style, state update.
o - split out to separate (clean) project "CRYPTOBOOKZ"
o - DEPLOY VERCEL
o - CREATE NEW BOOK - for TESTNET Polygon...


>npm install alchemy-sdk //suggested by dashboard.




EXTRA-CREDIT-DEEPDIVE:
https://nextjs.org/learn/basics/create-nextjs-app

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

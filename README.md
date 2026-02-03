# Pegasus Craftsmanship Engine

Vite + React + TypeScript + Tailwind (shadcn-ui).

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The static build output is generated in `dist/`.

## Deploy to Cloudflare Pages (recommended)

This is a static Vite site, so Cloudflare Pages can build and host it directly.

### Option A: Connect GitHub repo (CI/CD)

1. In the Cloudflare dashboard, go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select this GitHub repository.
3. Configure the build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Save and deploy.

On each push to your production branch, Cloudflare Pages will rebuild and redeploy automatically.

Cloudflare’s build configuration docs for Pages include these Vite settings (build command and `dist` output).  
See: [Build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration) and the Vite guide: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/

### Option B: Direct upload with Wrangler (no Git required)

Use this when you already built locally (or want to upload artifacts from another CI).

```sh
npm install
npm run build
npx wrangler pages deploy dist
```

Direct upload is documented here: https://developers.cloudflare.com/pages/get-started/direct-upload

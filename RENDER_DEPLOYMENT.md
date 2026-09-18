# Deploy Bishfun on Render

Bishfun is a Vite static site. Render builds the React app and serves the generated `dist` directory.

## 1. Push the repository

Push the project to GitHub or GitLab. Make sure these files are committed:

- `package.json`
- `package-lock.json`
- `render.yaml`
- `src/`

Do not commit `.env.local` or any file containing credentials.

## 2. Create the Render service

1. Open the Render dashboard and choose **New > Blueprint**.
2. Connect the repository containing Bishfun.
3. Select the branch to deploy.
4. Render detects `render.yaml` and creates the `bishfun` static site.
5. Confirm the service and start the first deploy.

The blueprint uses:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Pull request previews: enabled
- Catch-all rewrite: `/*` to `/index.html`

## 3. Configure environment variables

In the Render service, open **Environment > Environment Variables** and provide values for the variables marked `sync: false`:

- `VITE_TRAVELPAYOUTS_PARTNER_ID`
- `VITE_TRAVELPAYOUTS_PROJECT_ID`
- `VITE_TRAVELPAYOUTS_DRIVE_SCRIPT_URL`
- `VITE_ANALYTICS_ID`
- `VITE_SITE_URL`, for example `https://your-domain.com`

These variables are read during the build, so save them before triggering a deploy. A later change requires a new deploy.

## 4. Security requirements

Every variable beginning with `VITE_` is embedded in the browser bundle. Treat it as public. Do not place a private API token, password, or secret in a `VITE_*` variable.

`VITE_TRAVELPAYOUTS_TOKEN` is intentionally not included in `render.yaml`. If server-side API access is needed later, add a separate backend service or serverless endpoint and keep that token in a non-`VITE_` environment variable.

The Travelpayouts Drive URL must come from the Partner Center and must be authorized for the deployed domain. An unauthorized or incorrect URL can produce a `403` request from the external Drive script.

## 5. Verify the deployment

After the deploy finishes:

1. Open the Render URL.
2. Confirm the homepage loads without a blank screen.
3. Test navigation links. Hash routes should look like `/#/flights` or `/#/destinations`.
4. Open a destination, guide, flight, and hotel page.
5. Check the browser Network panel for the Travelpayouts Drive request.
6. Confirm analytics only loads when `VITE_ANALYTICS_ID` is configured.

Browser messages from files such as `content.js`, `globals-front.js`, or `adblock-picreplacement.js` belong to browser extensions and are unrelated to the Render deployment.

## 6. Add a custom domain

1. Open the Render service and choose **Settings > Custom Domains**.
2. Add the domain.
3. Create the DNS record Render requests at your DNS provider.
4. Wait for certificate provisioning.
5. Update `VITE_SITE_URL` to the final HTTPS domain and redeploy.

## Local production check

Run the same build used by Render:

```bash
npm ci
npm run build
```

The generated site is in `dist/`.

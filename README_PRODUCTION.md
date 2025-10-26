Production build & deployment

This project is an Angular (v19) application. The following steps produce a production-ready `dist/task1` and a Docker image that serves the app using nginx.

1) Build locally (already done by the agent):

   npm install
   npm run build -- --configuration production

   Output: `dist/task1`

2) Build Docker image (from project root):

   # Build image
   docker build -t product-app:prod .

   # Run container (maps host port 8080 to container 80)
   docker run -d -p 8080:80 --name product-app product-app:prod

   # Open in browser: http://localhost:8080

3) Push to a registry (optional):

   # Tag and push to Docker Hub (example)
   docker tag product-app:prod your-dockerhub-username/product-app:latest
   docker push your-dockerhub-username/product-app:latest

4) Alternative: Deploy `dist/task1` to any static host
   - Netlify, Vercel, Surge, GitHub Pages (with appropriate config), or an S3 bucket behind a CDN.
   - For SPA routing, ensure the host returns `index.html` for unknown routes (single-page-app fallback).

   5) Automatic deploy via GitHub Pages (no server, no Docker)

       This repository includes a GitHub Actions workflow that builds the app and deploys the production
       output to the `gh-pages` branch when you push to `main`.

       How it works (what you need to do):
       - Commit & push your changes to `main` on GitHub.
       - The workflow will run `npm ci`, build the app with the repository name as `base-href`,
          and publish `dist/task1` to the `gh-pages` branch using the repository token.
       - After the workflow completes, enable GitHub Pages in your repository settings:
          Settings → Pages → Branch: `gh-pages` / Folder: `/ (root)`.
       - Visit: https://<your-github-username>.github.io/<your-repo-name>/

       Notes:
       - The workflow sets the `--base-href` automatically from the repo name so the app assets load
          correctly for project pages (https://user.github.io/repo).
       - If you prefer to publish to a custom domain, configure it in the Pages settings after the
          first successful deployment.

Notes & troubleshooting
- If your build exceeds budget, consider optimizing large dependencies or using lazy loading for heavy modules.
- If using a custom domain or HTTPS, configure nginx/host accordingly.

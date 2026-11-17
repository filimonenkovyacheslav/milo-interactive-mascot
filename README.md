# MILO — Interactive Mascot Demo

A standalone responsive web playground featuring animated mascot characters reacting to a mini dictionary and UI events.

## Features
- **5 states:** idle, searching, success, not found, error
- Click/tap reactions and speech bubbles
- **3 character styles** and a live event monitor
- English/Russian interface
- Mobile-friendly layout; no backend or database required

## Run locally
Open `site/index.html`, or from the repository root run:

```bash
cd site
python3 -m http.server 8080
```

Then visit http://localhost:8080.

Try `hello`, `sun`, `friend`, `привет`, `солнце`, `друг`. `unknown` simulates no result and `error` simulates a network error.

## Technology and credits
Vanilla HTML, CSS and JavaScript. Animated characters use the open-source [Lively Mascot](https://github.com/jingluoguo/lively-mascot) JavaScript/SVG engine (MIT licensed; see `LICENSE-LIVELY-MASCOT.md`). A custom SVG fallback is provided if the CDN is unavailable. The mini dictionary contains local demonstration data; it is **not** connected to a live translation API.

## Ukraine.com.ua deployment
A workflow in `.github/workflows/deploy.yml` uploads **only** `site/` via encrypted FTPS after a push to `main` or manual dispatch. Use a dedicated FTP account restricted to an isolated demo website directory.

Configure these GitHub Actions repository secrets:
- `MILO_FTP_HOST` — FTP server hostname
- `MILO_FTP_USER` — restricted FTP username
- `MILO_FTP_PASSWORD` — FTP password (**do not commit or send in chat**)

Until the secrets are configured, the deployment is intentionally skipped or fails during its configuration check. Use **Actions → Deploy MILO to Ukraine.com.ua (FTPS) → Run workflow** after setup.

Source and design: original portfolio demonstration. Third-party credits are retained in the repository.
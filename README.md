# MILO — Interactive Mascot Demo

**Interactive animated mascot + mini-dictionary UI** — a responsive, browser-based portfolio project built with vanilla JavaScript.

**🌐 [Live Demo — HTTPS](https://milo-interactive-mascot.free-logistic-helper.com/#playground)** · **[Source code](https://github.com/filimonenkovyacheslav/milo-interactive-mascot)**

## Overview

MILO shows how animated characters can respond to real interface events rather than play a decorative loop. It combines a small client-side dictionary, interactive character reactions, and smooth user-feedback states.

| Feature | Implementation |
| --- | --- |
| 5 UI states | Idle, Thinking, Happy, Confused, Error |
| Interactive characters | Sprout, Robot, Cat |
| Click / touch | Character reactions and contextual speech bubbles |
| Dictionary playground | Simulated async lookup with success, empty result, and error cases |
| Languages | English / Russian |
| Responsive UI | Desktop and mobile |
| Graceful fallback | Built-in SVG animation if the remote mascot engine is unavailable |

**Try it:** open the [playground](https://milo-interactive-mascot.free-logistic-helper.com/#playground) and search for `hello`, `sun`, or `friend`. Use `unknown` for an empty response and `error` for an error state; change characters and tap a mascot to explore additional reactions.

## Tech stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript
- **Animation:** SVG, CSS transitions, [Lively Mascot](https://github.com/jingluoguo/lively-mascot) (MIT)
- **Deployment:** GitHub Actions → SSH/rsync → Ukraine.com.ua shared hosting
- **Dependencies:** No framework, database, PHP, or build step required

## Run locally

```bash
git clone https://github.com/filimonenkovyacheslav/milo-interactive-mascot.git
cd milo-interactive-mascot/site
python3 -m http.server 8080
```

Visit `http://localhost:8080`.

## Project structure

```text
site/
  index.html          # UI structure
  assets/
    styles.css        # Responsive design and transitions
    app.js            # Mascot states, clicks and demo dictionary
.github/workflows/
  deploy.yml          # Automatic deployment over SSH
PORTFOLIO_TEXT_RU_EN.md
THIRD_PARTY_LICENSES.md
LICENSE-LIVELY-MASCOT.md
DEPLOY_UKRAINE.md
```

## Deployment

The deployment workflow publishes **only** `site/` to the dedicated subdomain. It uses SSH key authentication, strict host verification and `rsync`; credentials are stored in GitHub Actions secrets and never committed to the repository.

[Read the Ukraine.com.ua deployment guide](DEPLOY_UKRAINE.md).

## Attribution and scope

The mascot engine is third-party open-source software used under its MIT license; see [license](LICENSE-LIVELY-MASCOT.md) and [third-party acknowledgements](THIRD_PARTY_LICENSES.md).

**Portfolio demo, not a production dictionary:** search data and error responses are simulated locally. This project illustrates frontend UX, animated character integration and state management. It is not affiliated with GAGAUZ.ONLINE.

## Portfolio

Short project descriptions in Russian and English are available in [PORTFOLIO_TEXT_RU_EN.md](PORTFOLIO_TEXT_RU_EN.md).

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

## Ukraine.com.ua deployment over SSH

Public demo: http://milo-interactive-mascot.free-logistic-helper.com/

The workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) copies only the static `site/` directory to the hosting web root over SSH using `rsync`. It does **not** use FTP, does **not** copy the repository or `.git` into the website, and does **not** delete unrelated server files.

The repository administrator must configure these **GitHub Actions repository secrets** under Settings → Secrets and variables → Actions:

| Secret | Value |
| --- | --- |
| `MILO_SSH_HOST` | SSH hostname from the Ukraine.com.ua hosting panel (often `*.ftp.tools`; not necessarily the website domain) |
| `MILO_SSH_USER` | SSH login shown in the hosting panel |
| `MILO_SSH_PORT` | SSH port, usually `22`; optional |
| `MILO_SSH_PRIVATE_KEY` | Contents of a **dedicated** private SSH key used exclusively for this deployment |
| `MILO_SSH_KNOWN_HOSTS` | Verified SSH host-key entry for `MILO_SSH_HOST` |
| `MILO_DEPLOY_PATH` | Existing **absolute** path to the subdomain's document root |

For this subdomain, Ukraine.com's default path is usually `~/free-logistic-helper.com/milo-interactive-mascot`; verify the real absolute path using SSH `pwd -P` and the hosting panel before using it. The workflow fails if the folder does not exist or is not writable.

### Create a dedicated deploy key

On a trusted local machine (macOS/Linux):

```bash
ssh-keygen -t ed25519 -f ~/.ssh/milo_github_actions -C "milo-github-actions" -N ""
cat ~/.ssh/milo_github_actions.pub
```

Bind this **public** key to the hosting account in Ukraine.com.ua → Hosting → SSH access → Key-based connections (as described in their documentation). Never commit or share the private key. Copy its contents directly from your local terminal into the GitHub secret `MILO_SSH_PRIVATE_KEY`.

### Host authenticity

Connect to the SSH host from your trusted local computer and check its host-key fingerprint. Save its verified known-host entry from `~/.ssh/known_hosts` in GitHub secret `MILO_SSH_KNOWN_HOSTS` (or verify the output of `ssh-keyscan -p 22 <SSH_HOST>` against the trusted fingerprint before saving).

### Trigger the deployment

Push a change in `site/` to `main` or manually use **Actions → Deploy MILO via SSH → Run workflow**. Once deployment succeeds, open the demo URL. Enable HTTPS for the subdomain in the hosting panel before sharing it publicly.

The SSH host, username, keys, and credentials must **never** be posted in a GitHub issue, source file, or public chat. More setup details: [SSH deployment guide](DEPLOY_UKRAINE.md).

Source and design: original portfolio demonstration. Third-party credits are retained in the repository.
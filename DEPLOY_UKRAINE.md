# MILO → Ukraine.com.ua deployment

Target demo: http://milo-interactive-mascot.free-logistic-helper.com/

## 1. Identify the real document root

Ukraine.com.ua normally uses `~/parent-domain/subdomain-name` for subdomains, which suggests:

```
~/free-logistic-helper.com/milo-interactive-mascot
```

But this can differ when the site's root folder has been manually changed. Open WebSSH for the **subdomain** in the hosting control panel, or connect via SSH, then run:

```bash
pwd -P
printf '\nExpected default directory:\n'
ls -ld "$HOME/free-logistic-helper.com/milo-interactive-mascot" 2>&1
printf '\nFiles in expected directory (if it exists):\n'
ls -la "$HOME/free-logistic-helper.com/milo-interactive-mascot" 2>&1 | head -25
```

In the hosting panel, check **My Sites → site settings → Root directory** for the exact document root. Do not delete a directory or modify an unrelated site.

## 2. Publish the current files manually (optional, one-time)

Run this **only after** confirming that the directory is the dedicated MILO subdomain's document root and contains no important files to overwrite. The commands copy the public site only:

```bash
SITE_ROOT="$HOME/free-logistic-helper.com/milo-interactive-mascot"
test -d "$SITE_ROOT" && test -w "$SITE_ROOT" || { echo "Wrong site directory or no permissions"; exit 1; }
git clone --depth 1 https://github.com/filimonenkovyacheslav/milo-interactive-mascot.git "$HOME/milo-portfolio-source"
cp -n "$HOME/milo-portfolio-source/site/index.html" "$SITE_ROOT/"
mkdir -p "$SITE_ROOT/assets"
cp -n "$HOME/milo-portfolio-source/site/assets/app.js" "$SITE_ROOT/assets/"
cp -n "$HOME/milo-portfolio-source/site/assets/styles.css" "$SITE_ROOT/assets/"
```

`cp -n` does not overwrite existing files. If the hosting provider's placeholder `index.php` takes precedence, remove it **only after** verifying it belongs exclusively to this newly created subdomain; otherwise configure `DirectoryIndex index.html` for this subdomain. Do not leave the Git repository inside the public document root.

## 3. Automatic deployment via SSH

Create a dedicated ED25519 key on your **local Mac**:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/milo_github_actions -C "milo-github-actions" -N ""
cat ~/.ssh/milo_github_actions.pub
```

Add the PUBLIC key to the hosting account using Ukraine.com.ua's SSH key management. Save the PRIVATE key contents, locally, as the GitHub Actions secret `MILO_SSH_PRIVATE_KEY`. **Never post either private key or password in chat.**

Set these **GitHub repository secrets** under Settings → Secrets and variables → Actions:

| Secret | Meaning |
| --- | --- |
| `MILO_SSH_HOST` | Hosting panel SSH hostname (not the website URL) |
| `MILO_SSH_USER` | SSH account login |
| `MILO_SSH_PORT` | Usually 22 (optional) |
| `MILO_SSH_PRIVATE_KEY` | Dedicated deploy key's private half |
| `MILO_SSH_KNOWN_HOSTS` | SSH host-key entry verified against a trusted fingerprint |
| `MILO_DEPLOY_PATH` | Absolute document root path (from `pwd -P`) |

To obtain a proposed host-key entry on your Mac, `ssh-keyscan -p 22 YOUR_SSH_HOST`; verify the fingerprint against the one presented during your trusted SSH connection before using it. GitHub workflow uses strict host-key checking.

The deployment workflow is [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It uploads `site/` with `rsync`, refuses to create a nonexistent server directory, and does not delete server files.

## 4. Trigger and verify

In GitHub: Actions → **Deploy MILO via SSH** → Run workflow.

Once the job succeeds, visit the public URL and check the search interface, click reactions, responsive layout, and asset loading. Enable SSL/HTTPS for the subdomain in the hosting panel before sharing the portfolio link.

If the server returns 403/404, first verify the document root, index file priority, and SSL configuration. Do not run mass deletion or broad chmod commands.

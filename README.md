# Clean Living Cleaning Services — concept site

A one-page concept website for Clean Living Cleaning Services, designed by MartKam Digital. Plain HTML, CSS and JavaScript with no build step, so it runs on GitHub Pages as it is.

## Preview locally

Open `index.html` in a browser. Nothing needs installing.

## Publish on GitHub Pages

1. Create a new repository on GitHub and push this folder to it:

   ```bash
   git init -b main
   git add .
   git commit -m "Clean Living concept site"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then save.
4. After a minute or so the site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

All links and asset paths are relative, so the site works from a project sub-path or a custom domain without changes.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The page |
| `policies.html` | Placeholder policies page linked from the footer |
| `css/styles.css` | All styling; colours and spacing are variables at the top |
| `js/main.js` | Mobile menu, enquiry form demo behaviour |
| `assets/` | Logo, photos and favicon |
| `desktop-1440-full.png` | The original design reference, kept locally only (git-ignored) |

## Before this goes live for the client

- **Placeholders** are marked on the page in orange dashed boxes: owner name, owner portrait, the two reviews and the policies page.
- **"What's included" lists** for End of tenancy and One-off clean are draft wording and need the owner's sign-off.
- **Photos and logo** were taken from the design mock-up at screen resolution. Swap in the original files (same filenames in `assets/`) so they stay sharp on high-resolution screens.
- **The enquiry form** validates but does not send. Connect it to a form service (for example Formspree) or a mail handler.
- **Search engines** are blocked with a `noindex` meta tag in both HTML files. Remove it at launch.
- **The concept bar** at the top of each page and the footer credit line should be removed or reworded at launch.

# WIP: Katja Mali — Landscape Architect Portfolio

Live site: [[mousaka.github.io/kmali](https://katjamali.se)](https://katjamali.se)

## Structure

```
kmali/
  index.html          Main single-page site
  style.css           All styles (CSS custom properties, responsive)
  script.js           Nav scroll effect, scroll-reveal animations
  assets/
    images/           Replace placeholder images here
      hero.jpg        Full-bleed hero background (recommend ≥1920px wide)
      portrait.jpg    Katja's portrait (recommend 3:4 ratio)
      project-1.jpg   Project images (recommend 4:3 ratio, ≥800px wide)
      project-2.jpg
      project-3.jpg
      project-4.jpg
      project-5.jpg
      project-6.jpg
```

## Updating content

All copy, project titles, and contact details are in `index.html`.  
Colors, fonts, and spacing are in the `:root` block at the top of `style.css`.

## Deploying

Deployment is automated with GitHub Actions:

- Pushes to `main` deploy the site root to `gh-pages`.
- Pull requests from branches in this repository deploy previews to `pr-preview/pr-<number>/`.
- Preview URL format: `https://mousaka.github.io/kmali/pr-preview/pr-<number>/`.
- Preview deployments are removed automatically when the PR is closed.

### Required repository settings

- GitHub Pages source should be **Deploy from a branch** using branch `gh-pages` and folder `/`.
- Forked PR previews are skipped by default because the workflow does not use a write token for forks.

### Typical update flow

```sh
git add .
git commit -m "update"
git push
```

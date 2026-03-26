# GitHub Copilot Instructions

## Serving the site for testing

This is a static site (HTML/CSS/JS) — no build step is required.

**For the Copilot agent sandbox**, start a local HTTP server with:

```sh
cd /home/runner/work/kmali/kmali && python3 -m http.server 8080 &
sleep 2
```

**For local development**, run from the repository root:

```sh
python3 -m http.server 8080
```

The site will be available at `http://localhost:8080`.

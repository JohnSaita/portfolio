# John Saitabau Portfolio

This portfolio is now a React + Vite project with reusable sections and JSON-driven content.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Update Portfolio Content

Most text and portfolio items live in:

```text
src/data/portfolio.json
```

To add a recent job, add another object to the `recentJobs` array:

```json
{
  "title": "New GIS Project",
  "category": "Spatial Analysis",
  "year": "2026",
  "summary": "Short description of the work.",
  "image": "/images/sample-1200.jpg",
  "tools": ["QGIS", "Python", "Cartography"],
  "result": "The practical outcome or business value.",
  "link": "#contact"
}
```

Images are served from `public/images`. Keep image paths starting with `/images/`.

If you do not have a project image yet, replace `image` with a reusable visual:

```json
"visual": {
  "icon": "MapPinned",
  "variant": "spatial"
}
```

Available visual variants are `spatial`, `automation`, and `database`.

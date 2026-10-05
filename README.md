# Portfolio Website

An audiovisual portfolio for graduate-program applications in the United States.

## Architecture

- **GitHub:** source code, project metadata, and curation configuration.
- **Vercel:** previews, production deployment, and custom domain.
- **Cloudinary:** project images, videos, and animated media.
- **Independent archive:** original full-quality media files.

## Current structure

```text
.
├── assets/
│   ├── scripts/
│   │   └── site.js
│   └── styles/
│       ├── global.css
│       ├── home.css
│       └── project.css
├── content/
│   ├── curations/
│   │   └── master.json
│   └── projects/
│       └── un-paso-adelante.json
├── projects/
│   └── un-paso-adelante/
│       └── index.html
├── index.html
├── PRODUCT_REQUIREMENTS.md
└── vercel.json
```

## Local preview

Run the included dependency-free preview server:

```sh
node scripts/serve.mjs
```

Then open `http://localhost:4173`. The site intentionally has no package or build dependency at this stage.


## Content conventions

- Keep large project media out of Git.
- Store Cloudinary public IDs and media metadata in `content/projects`.
- Keep each project canonical and reference its slug from one or more files in `content/curations`.
- Preserve meaningful alternative text, credits, dimensions, and poster assets in the media record.

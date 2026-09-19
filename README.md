<div align="center">

<h1>Ayush Naik - Portfolio</h1>

<p><strong>Personal portfolio of Ayush Naik: an engineering student and software developer who bridges business and code, translating client requirements into functional solutions.</strong></p>

[![Live site](https://img.shields.io/badge/live-ayushnaik.dev-d9663d?style=flat&labelColor=15191c)](https://www.ayushnaik.dev)
[![License](https://img.shields.io/badge/license-source--available-d9663d?style=flat&labelColor=15191c)](LICENSE)

<a href="https://www.ayushnaik.dev"><strong>Visit the site &rarr;</strong></a>

</div>

---

## What this is

A personal portfolio built from scratch to showcase my work as a software developer and engineering student. Built with Next.js App Router, TypeScript, and modern web technologies, featuring an interactive 3D hero that adapts to device capabilities.

## Highlights

- **Device-aware 3D hero** that loads only on capable devices, with static poster fallback for mobile
- **One content source of truth** - all content in a single typed TypeScript file
- **Client-focused project showcase** featuring real commercial work including instacollab.in B2B marketplace
- **Performance-first** with lazy loading, image optimization, and smart render loop management
- **Full accessibility** with skip links, focus management, and reduced motion support
- **SEO optimized** with framework-level metadata, structured data, and generated sitemap

## Why this stack

Chosen for a content site that has to be cheap to serve under traffic, rank well, and still host real interactivity. It is not framework-by-default.

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js (App Router)** | Server Components for fast first paint, file-based metadata, sitemap, robots, and social image so SEO is native rather than bolted on, static rendering for content routes, and built-in image optimization to keep data transfer low. |
| UI | **React + TypeScript (strict)** | Concurrent React with strict types, so the single content source stays honest. |
| 3D | **React Three Fiber + drei** | Declarative Three.js for the hero, lazy-loaded and gated by device capability. |
| Motion | **GSAP + Lenis** | One shared animation loop drives smooth scroll and scroll-triggered timelines together, and both stand down under reduced motion. |
| Styling | **Tailwind CSS** | CSS-first design tokens with no runtime, one source for the palette. |
| Validation | **Zod** | Schema validation at the contact API boundary. |
| Analytics | **Vercel Analytics + Speed Insights** | Lightweight, privacy-friendly, real-user metrics. |

## Running locally

Use the Node version pinned in `.nvmrc`.

```bash
npm install
cp .env.example .env.local   # optional, see the file for what each value does
npm run dev
```

Lint and a production build:

```bash
npm run lint
npm run build
```

## Performance and accessibility

Imagery is served as WebP through the framework's image pipeline with explicit dimensions, so the layout never shifts and only the right size ships per viewport. The 3D scene and its model download only on capable, in-view devices. Smooth scroll, parallax, and scroll-triggered reveals all respect reduced motion, and keyboard paths are first-class: a skip link, a focus ring that clears contrast on any background, and focus trapping with restoration on the mobile menu.

## License

Source-available, not open-source. You are welcome to read and learn from the code; please do not redeploy it as your own site or reuse the content, design, or personal branding. See [LICENSE](LICENSE).

## Citation

If you reference this project, see [CITATION.cff](CITATION.cff) or use GitHub's "Cite this repository".

## Author

<table>
  <tr>
    <td>
      <strong>Ayush Naik</strong><br/>
      Engineering Student & Software Developer, Mumbai
    </td>
    <td>
      <a href="https://www.ayushnaik.dev">Website</a> &middot;
      <a href="https://github.com/AyushNaik7">GitHub</a> &middot;
      <a href="https://www.linkedin.com/in/ayush-naik7/">LinkedIn</a> &middot;
      <a href="mailto:ayushnaik9898@gmail.com">Email</a>
    </td>
  </tr>
</table>

# Apple Website Clone

Lightweight Apple website clone built with React and Vite. This repo reproduces core UI, 3D model viewer, and scroll-driven animations used across the site for learning and prototyping.

**Status:** Implementation complete — ready for local development and testing.

**Tech stack:** React, Vite, Tailwind (via utilities), @react-three/fiber + drei, GSAP + ScrollTrigger.

**Quick Start**
- **Install:**

	```powershell
	npm install
	```

- **Run dev server:**

	```powershell
	npm run dev
	```

- **Build:**

	```powershell
	npm run build
	```

- **Preview production build:**

	```powershell
	npm run preview
	```

**Required Node:** Use Node.js 16+ (recommend 18+). If you see build issues, try switching Node versions with nvm.

**Project Scripts**
- `dev` : Start Vite dev server with HMR
- `build`: Create a production build
- `preview`: Serve the production build locally

**Project Structure**
- `src/` : application source
	- `components/` : React components (NavBar, Showcase, Performance, 3D models)
	- `index.css` : global styles and Tailwind utilities
	- `main.jsx`, `app.jsx` : app entry
- `public/` : static assets (models, fonts, images, videos)

**Key Features**
- Responsive layout with Tailwind utility classes and custom utilities
- 3D MacBook model viewer using `@react-three/fiber` and `drei` with color and screen texture controls
- Scroll-driven animations using `gsap` + `ScrollTrigger` (pinning, scrubbed timelines)

**Notes & Troubleshooting**
- Fonts: the app loads local fonts from `public/fonts`. Chrome may show a "Slow network" intervention warning while the browser loads large font files — this is expected on constrained environments.
- WebGL/Canvas: If you see "THREE.WebGLRenderer: Context Lost" or Canvas errors, try reloading the page, disabling other GPU-heavy tabs, or updating GPU drivers. Adding an error boundary around the `<Canvas>` component helps surface graceful fallbacks.
- GSAP: ScrollTrigger is registered in components that use it. If animations don't run, ensure `gsap` and `gsap/ScrollTrigger` are imported and `gsap.registerPlugin(ScrollTrigger)` is called.
- Three.js colors: model color strings must include `#`. Components sanitize color values before applying them to materials.

**Development Tips**
- Use Chrome devtools to inspect `ScrollTrigger` markers (you can enable them in the code temporarily) when fine-tuning start/end points.
- For 3D debugging, use `drei` helpers and the `transformControls` helper during development.

**Contributing**
- Open an issue or submit a PR for fixes and improvements. Keep changes small and focused.

**License**
- This project is a learning prototype. Refer to original assets' licenses in `public/models` where applicable.

If you want, I can also add a short "How to run locally" section with environment variable examples or add debugging aids (ScrollTrigger markers, Canvas error boundary).

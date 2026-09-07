# Ronnsquare – Corporate Website

Ronnsquare is a corporate website for a premier workplace design and office fit-out company based in Paris, France. The platform showcases strategic consulting, architecture, turnkey fit-out execution, sustainability, and commercial real estate portfolio transformations.

---

## 🏢 Project Overview

- **Client/Brand**: Ronnsquare (Paris, France)
- **Domain**: Workplace strategy, office architecture, turnkey interior transformation, and technical project management.
- **Languages Supported**:
  - **English** (Default international portal): `/en/`
  - **French** (Primary local portal): `/`
- **Developed & Maintained by**: **[AstraCognix Solutions](https://astracognixsolutions.in/)** (Patna, Bihar, India)
- **Contact Email**: [info@astracognixsolutions.in](mailto:info@astracognixsolutions.in)

---

## 🚀 Technical Architecture & Stack

- **Runtime & Server**: Node.js (ES Module) + Express (`server.js`) configured for Cloud Run container hosting on port `3000`.
- **Frontend**: High-performance semantic HTML5, CSS3, custom WordPress-style theme assets (`/wp-content/`), responsive grid layouts, and interactive modals.
- **Asset Routing & Proxy Layer**:
  - Automatic fallback serving from `/ronnsquare.fr/` local static mirror.
  - Proxy fallback with on-the-fly URL rewrites for production assets and static paths.
  - Custom HTML transformation pipeline: removes obsolete widgets (e.g. CallPage), injects proper publisher and development credits, and secures outbound hyperlinks.
- **Multilingual Support**: Fully linked dual-language directories with `hreflang` tags and synchronized route parity (`/` and `/en/`).

---

## 📂 Project Structure

```text
├── server.js               # Express application server with route proxy & asset mapping
├── metadata.json           # Application metadata & platform configuration
├── package.json            # Node project configuration & dependencies
├── README.md               # Project documentation
├── scripts/
│   └── sync_pages.js       # Static synchronization & content transformation utility
└── ronnsquare.fr/          # Static website mirror
    ├── index.html          # French homepage
    ├── en/                 # English website portal
    │   ├── index.html      # English homepage
    │   ├── expertises/     # Service pages (Consulting, Architecture, etc.)
    │   ├── realisations/   # Client case studies (Abylsen, Arneg, etc.)
    │   ├── legal-notice/   # English Legal notice page
    │   └── privacy-policy/ # English Privacy policy page
    ├── mentions-legales/   # French Legal notice page
    ├── politique-de-confidentialite/ # French Privacy policy page
    └── wp-content/         # Themes, plugins, fonts, images, and scripts
```

---

## 🛠️ Local Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation & Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Access the application in your browser**:
   - **English Homepage**: [http://localhost:3000/en/](http://localhost:3000/en/)
   - **French Homepage**: [http://localhost:3000/](http://localhost:3000/)
   - **Legal Notice**: [http://localhost:3000/en/legal-notice/](http://localhost:3000/en/legal-notice/)

### cPanel Static Hosting

Build the uploadable static package:

```bash
npm run build
```

Upload the **contents of `dist/`** into the domain's cPanel document root, usually `public_html/`. Upload `index.html`, `.htaccess`, `wp-content/`, `en/`, and the other folders directly into `public_html/`; do not upload the enclosing `dist` folder itself. The generated `.htaccess` keeps directory URLs such as `/en/` and `/expertises/` working.

The cPanel package is static and does not run `server.js`. Form submissions that rely on the local Express mock endpoints require a separate backend or a hosted form service.

---

## 🔄 Page Synchronization Script

To synchronize upstream page updates or re-apply transformations across all HTML files:

```bash
node scripts/sync_pages.js
```

This utility ensures:
- Full URL consistency (rewriting external absolute references).
- Automatic injection of publisher and developer details.
- Consistent footer branding and removal of legacy call widgets.

---

## 📜 Legal & Publisher Information

- **Website Publisher & Technical Lead**:
  - **AstraCognix Solutions**
  - **Headquarters**: Patna, Bihar – India 🇮🇳
  - **Website**: [astracognixsolutions.in](https://astracognixsolutions.in/)
  - **Email**: [info@astracognixsolutions.in](mailto:info@astracognixsolutions.in)
- **Publication Director**: AstraCognix Solutions

---

## 📄 License & Usage

All content, photography, branding, and architectural project imagery are the property of Ronnsquare and its respective partners. Technical implementation, server architecture, and site optimizations by AstraCognix Solutions.


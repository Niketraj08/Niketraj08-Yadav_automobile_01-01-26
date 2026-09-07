import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const urls = [
  'https://ronnsquare.fr/en/',
  'https://ronnsquare.fr/',
  'https://ronnsquare.fr/en/contact/',
  'https://ronnsquare.fr/contact/',
  'https://ronnsquare.fr/en/dna-team/',
  'https://ronnsquare.fr/en/adn-equipe/',
  'https://ronnsquare.fr/adn-equipe/',
  'https://ronnsquare.fr/en/realisations/',
  'https://ronnsquare.fr/realisations/',
  'https://ronnsquare.fr/en/realisations/abylsen/',
  'https://ronnsquare.fr/realisations/abylsen/',
  'https://ronnsquare.fr/en/realisations/epiceum/',
  'https://ronnsquare.fr/realisations/epiceum/',
  'https://ronnsquare.fr/en/realisations/groupe-pharma/',
  'https://ronnsquare.fr/realisations/groupe-pharma/',
  'https://ronnsquare.fr/en/realisations/merz-aesthetic/',
  'https://ronnsquare.fr/realisations/merz-aesthetic/',
  'https://ronnsquare.fr/en/realisations/niterra/',
  'https://ronnsquare.fr/realisations/niterra/',
  'https://ronnsquare.fr/en/realisations/arneg/',
  'https://ronnsquare.fr/realisations/arneg/',
  'https://ronnsquare.fr/en/realisations/socoda/',
  'https://ronnsquare.fr/realisations/socoda/',
  'https://ronnsquare.fr/en/realisations/rodl-partner/',
  'https://ronnsquare.fr/realisations/rodl-partner/',
  'https://ronnsquare.fr/en/preoccupations/',
  'https://ronnsquare.fr/preoccupations/',
  'https://ronnsquare.fr/en/preoccupations/lease-expiry/',
  'https://ronnsquare.fr/preoccupations/fin-de-bail-renouvellement-resiliation/',
  'https://ronnsquare.fr/en/preoccupations/complex-projects/',
  'https://ronnsquare.fr/preoccupations/projets-complexes-immeuble-occupe/',
  'https://ronnsquare.fr/en/preoccupations/attract-and-retain-talent/',
  'https://ronnsquare.fr/preoccupations/attirer-et-fideliser-les-talents/',
  'https://ronnsquare.fr/en/preoccupations/bring-teams-back/',
  'https://ronnsquare.fr/preoccupations/faire-revenir-les-collaborateurs-au-bureau/',
  'https://ronnsquare.fr/en/expertises/',
  'https://ronnsquare.fr/expertises/',
  'https://ronnsquare.fr/en/expertises/sustainability-ecology/',
  'https://ronnsquare.fr/expertises/eco-responsabilite-rse/',
  'https://ronnsquare.fr/en/expertises/technical-execution/',
  'https://ronnsquare.fr/expertises/execution-technique-travaux/',
  'https://ronnsquare.fr/en/expertises/consulting-strategy/',
  'https://ronnsquare.fr/expertises/conseil-strategique-immobilier/',
  'https://ronnsquare.fr/en/expertises/architecture-design/',
  'https://ronnsquare.fr/expertises/architecture-design-espaces/',
  'https://ronnsquare.fr/en/faq/',
  'https://ronnsquare.fr/faq/',
  'https://ronnsquare.fr/en/testimonials/',
  'https://ronnsquare.fr/en/temoignages/',
  'https://ronnsquare.fr/temoignages/',
  'https://ronnsquare.fr/en/privacy-policy/',
  'https://ronnsquare.fr/politique-de-confidentialite/',
  'https://ronnsquare.fr/en/legal-notice/',
  'https://ronnsquare.fr/mentions-legales/'
];

const enPubPage = `<section class="legal-page__section" id="Website Publisher" data-legalpage-section="Website Publisher">
          <h2 class="legal-page__section-title">Website Publisher</h2>
          <div class="legal-page__section-body">
            <p>This website is published by:</p>
            <p><strong>AstraCognix Solutions</strong><br />
            Headquarters: Patna, Bihar – India 🇮🇳<br />
            Website: <strong><a href="https://astracognixsolutions.in/" target="_blank" rel="noopener">astracognixsolutions.in</a></strong><br />
            Email: <strong><a href="mailto:info@astracognixsolutions.in">info@astracognixsolutions.in</a></strong></p>
            <p><strong>Created &amp; Published in:</strong> Patna, Bihar, India</p>
            <p>Publication Director: AstraCognix Solutions</p>
          </div>
        </section>`;

const enPubModal = `<section
          class="legal-mentions__section"
          id="legal-section-Website Publisher"
          data-legal-section="Website Publisher"
        >
          <h3 class="legal-mentions__section-title">Website Publisher</h3>
          <div class="legal-mentions__section-body">
            <p>This website is published by:</p>
            <p><strong>AstraCognix Solutions</strong><br />
            Headquarters: Patna, Bihar – India 🇮🇳<br />
            Website: <strong><a href="https://astracognixsolutions.in/" target="_blank" rel="noopener">astracognixsolutions.in</a></strong><br />
            Email: <strong><a href="mailto:info@astracognixsolutions.in">info@astracognixsolutions.in</a></strong></p>
            <p><strong>Created &amp; Published in:</strong> Patna, Bihar, India</p>
            <p>Publication Director: AstraCognix Solutions</p>
          </div>
        </section>`;

const enDesignPage = `<section class="legal-page__section" id="Website Design and Management" data-legalpage-section="Website Design and Management">
          <h2 class="legal-page__section-title">Website Design and Management</h2>
          <div class="legal-page__section-body">
            <p>This website was created, designed and developed in <strong>Patna, Bihar, India</strong> by:</p>
            <p><strong>AstraCognix Solutions</strong><br />
            Headquarters: Patna, Bihar – India 🇮🇳<br />
            Website: <strong><a href="https://astracognixsolutions.in/" target="_blank" rel="noopener">astracognixsolutions.in</a></strong><br />
            Email: <strong><a href="mailto:info@astracognixsolutions.in">info@astracognixsolutions.in</a></strong></p>
          </div>
        </section>`;

const enDesignModal = `<section
          class="legal-mentions__section"
          id="legal-section-Website Design and Management"
          data-legal-section="Website Design and Management"
        >
          <h3 class="legal-mentions__section-title">Website Design and Management</h3>
          <div class="legal-mentions__section-body">
            <p>This website was created, designed and developed in <strong>Patna, Bihar, India</strong> by:</p>
            <p><strong>AstraCognix Solutions</strong><br />
            Headquarters: Patna, Bihar – India 🇮🇳<br />
            Website: <strong><a href="https://astracognixsolutions.in/" target="_blank" rel="noopener">astracognixsolutions.in</a></strong><br />
            Email: <strong><a href="mailto:info@astracognixsolutions.in">info@astracognixsolutions.in</a></strong></p>
          </div>
        </section>`;

const frPubPage = `<section class="legal-page__section" id="Éditeur du site" data-legalpage-section="Éditeur du site">
          <h2 class="legal-page__section-title">Éditeur du site</h2>
          <div class="legal-page__section-body">
            <p><strong>Le présent site est édité par :</strong></p>
            <p><strong>AstraCognix Solutions</strong><br />
            Siège : Patna, Bihar – Inde 🇮🇳<br />
            Site web : <strong><a href="https://astracognixsolutions.in/" target="_blank" rel="noopener">astracognixsolutions.in</a></strong><br />
            Email : <strong><a href="mailto:info@astracognixsolutions.in">info@astracognixsolutions.in</a></strong></p>
            <p><strong>Conçu et développé à :</strong> Patna, Bihar, Inde</p>
            <p>Directeur de la publication : AstraCognix Solutions</p>
          </div>
        </section>`;

const frPubModal = `<section
          class="legal-mentions__section"
          id="legal-section-Éditeur du site"
          data-legal-section="Éditeur du site"
        >
          <h3 class="legal-mentions__section-title">Éditeur du site</h3>
          <div class="legal-mentions__section-body">
            <p><strong>Le présent site est édité par :</strong></p>
            <p><strong>AstraCognix Solutions</strong><br />
            Siège : Patna, Bihar – Inde 🇮🇳<br />
            Site web : <strong><a href="https://astracognixsolutions.in/" target="_blank" rel="noopener">astracognixsolutions.in</a></strong><br />
            Email : <strong><a href="mailto:info@astracognixsolutions.in">info@astracognixsolutions.in</a></strong></p>
            <p><strong>Conçu et développé à :</strong> Patna, Bihar, Inde</p>
            <p>Directeur de la publication : AstraCognix Solutions</p>
          </div>
        </section>`;

const creditReplacement = `<a class="footer-ronn__credit footer-ronn__credit--en" href="https://astracognixsolutions.in/" target="_blank" rel="noopener" aria-label="Made by AstraCognix Solutions" style="text-decoration: none; cursor: pointer; display: inline-flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;">
        <span class="footer-ronn__credit-label" style="opacity: 0.85;">Made by</span>
        <span style="font-family: var(--font-secondary, sans-serif); font-size: 0.875rem; font-weight: 600; color: var(--color-headline-sable, #eedfd0); letter-spacing: 0.02em;">AstraCognix Solutions</span>
      </a>`;

export function transformHtml(html) {
  return html
    .replaceAll('https://ronnsquare.fr/wp-content/', '/wp-content/')
    .replaceAll('https://ronnsquare.fr/en/', '/en/')
    .replaceAll('https://ronnsquare.fr/', '/')
    .replaceAll('https://cdn-front.callpage.io', '/cdn-front.callpage.io')
    .replaceAll('https://static.axept.io', '/static.axept.io')
    .replace(/<script>\s*window\.rsCallpageHideBubble[\s\S]*?<\/script>/gi, '')
    .replace(/<style id="rs-callpage-hide-launcher">[\s\S]*?<\/style>/gi, '')
    .replace(/<a\b[^>]*href=["']#callpage["'][^>]*class=["'][^"']*header-ronn__btn--outline[^"']*["'][\s\S]*?<\/a>/gi, '')
    .replace(/<a\b[^>]*href=["']#callpage["'][^>]*class=["'][^"']*header-ronn__mobile-cta[^"']*["'][\s\S]*?<\/a>/gi, '')
    .replace(/<a\b[^>]*class=["'][^"']*header-ronn__mobile-cta[^"']*["'][^>]*href=["']#callpage["'][\s\S]*?<\/a>/gi, '')
    .replace(/<a\b[^>]*href=["']#(?:callpage|cp-widget)["'][^>]*>[\s\S]*?<\/a>/gi, '')
    .replace(/<a\b[^>]*class="[^"]*footer-ronn__credit[^"]*"[^>]*>[\s\S]*?<\/a>/gi, creditReplacement)
    .replace(/<section\b[^>]*?(?:id="Website Publisher"|data-legalpage-section="Website Publisher")[^>]*?>[\s\S]*?<\/section>/gi, enPubPage)
    .replace(/<section\b[^>]*?(?:id="legal-section-Website Publisher"|data-legal-section="Website Publisher")[^>]*?>[\s\S]*?<\/section>/gi, enPubModal)
    .replace(/<section\b[^>]*?(?:id="Website Design and Management"|data-legalpage-section="Website Design and Management")[^>]*?>[\s\S]*?<\/section>/gi, enDesignPage)
    .replace(/<section\b[^>]*?(?:id="legal-section-Website Design and Management"|data-legal-section="Website Design and Management")[^>]*?>[\s\S]*?<\/section>/gi, enDesignModal)
    .replace(/<section\b[^>]*?(?:id="Éditeur du site"|data-legalpage-section="Éditeur du site")[^>]*?>[\s\S]*?<\/section>/gi, frPubPage)
    .replace(/<section\b[^>]*?(?:id="legal-section-Éditeur du site"|data-legal-section="Éditeur du site")[^>]*?>[\s\S]*?<\/section>/gi, frPubModal)
    .replace(/This website was designed and is managed by Colibrity Agency \(colibrity\.com\)/gi, 'This website was designed, developed and is managed by AstraCognix Solutions, Patna, Bihar, India (astracognixsolutions.in)')
    .replace(/Ce site a été conçu et est géré par Colibrity Agency \(colibrity\.com\)/gi, 'Ce site a été conçu, développé et est géré par AstraCognix Solutions, Patna, Bihar, Inde (astracognixsolutions.in)')
    .replace(/Colibrity Agency acts as a data processor/gi, 'AstraCognix Solutions acts as a technical partner and data processor')
    .replace(/Colibrity Agency agit en qualité de sous-traitant/gi, 'AstraCognix Solutions agit en qualité de partenaire technique et sous-traitant')
    .replaceAll('https://astracognix.com/', 'https://astracognixsolutions.in/')
    .replaceAll('https://astracognix.com', 'https://astracognixsolutions.in')
    .replaceAll('contact@astracognix.com', 'info@astracognixsolutions.in')
    .replaceAll('astracognix.com', 'astracognixsolutions.in');
}

async function syncAll() {
  console.log(`Starting sync of ${urls.length} pages...`);
  
  for (const pageUrl of urls) {
    try {
      const parsed = new URL(pageUrl);
      let pathname = parsed.pathname;
      if (pathname.endsWith('/')) pathname = pathname.slice(0, -1);
      
      let filePath;
      if (!pathname || pathname === '') {
        filePath = path.join(rootDir, 'ronnsquare.fr', 'index.html');
      } else {
        filePath = path.join(rootDir, 'ronnsquare.fr', pathname, 'index.html');
      }

      console.log(`Fetching ${pageUrl} -> ${filePath}...`);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const res = await fetch(pageUrl, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      clearTimeout(timeout);

      if (res.ok) {
        let html = await res.text();
        html = transformHtml(html);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, html, 'utf-8');
        console.log(`Saved ${pageUrl} (${html.length} bytes)`);
      } else {
        console.warn(`Failed ${pageUrl}: HTTP ${res.status}`);
      }
    } catch (err) {
      console.error(`Error syncing ${pageUrl}:`, err.message);
    }
  }

  console.log('Sync complete!');
}

if (process.argv[1] && process.argv[1].endsWith('sync_pages.js')) {
  syncAll();
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const siteDirectory = path.join(rootDir, 'ronnsquare.fr');
const assetDirectories = [
  '_DataURI',
  'static.axept.io',
  'www.googletagmanager.com'
];

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

// Copy the website contents directly into dist so it can be uploaded as the cPanel document root.
fs.cpSync(siteDirectory, distDir, { recursive: true });

for (const directory of assetDirectories) {
  const source = path.join(rootDir, directory);
  const destination = path.join(distDir, directory);
  if (fs.existsSync(source)) {
    fs.cpSync(source, destination, { recursive: true });
  }
}

const imageFallbacks = [
  {
    source: path.join(distDir, 'wp-content', 'uploads', '2026', '07', 'Main-image-768x512.jpg'),
    destination: path.join(distDir, 'wp-content', 'uploads', '2026', '05', 'fullimage-placeholder-768x512.jpg')
  }
];

for (const { source, destination } of imageFallbacks) {
  if (fs.existsSync(source) && !fs.existsSync(destination)) {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(source, destination);
  }
}

fs.writeFileSync(path.join(distDir, '.htaccess'), `Options -MultiViews
DirectoryIndex index.html

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}/index.html -f
RewriteRule ^(.+?)/?$ $1/index.html [L]
`, 'utf-8');

console.log(`Build completed successfully: ${distDir}`);
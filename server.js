/* ===== SoleHaus static file server =====
   Zero-dependency Node server for running this site locally.
   Usage:  node server.js  [port]   (defaults to 8000)
   Then open http://localhost:8000/ */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.argv[2]) || Number(process.env.PORT) || 8000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function send404(res) {
  const notFoundPath = path.join(ROOT, 'pages', '404.html');
  fs.readFile(notFoundPath, (err, data) => {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(err ? '404 Not Found' : data);
  });
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // Root of the site -> redirect to the home page at /pages/index.html.
  // This is a real redirect (not a silent internal rewrite) so the address
  // bar updates to /pages/index.html and every other page's relative links
  // (about.html, products.html, ../assets/...) keep resolving correctly —
  // matches the redirect used in vercel.json for production.
  if (urlPath === '/' || urlPath === '/index.html') {
    res.writeHead(302, { Location: '/pages/index.html' });
    return res.end();
  }

  // Resolve safely inside ROOT (block ../ traversal)
  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) return send404(res);

  fs.stat(filePath, (err, stats) => {
    if (err) return send404(res);

    const finalPath = stats.isDirectory() ? path.join(filePath, 'index.html') : filePath;

    fs.readFile(finalPath, (readErr, data) => {
      if (readErr) return send404(res);
      const ext = path.extname(finalPath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`SoleHaus running at http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to stop.');
});

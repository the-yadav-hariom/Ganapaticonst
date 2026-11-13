/**
 * Core Craft Technologies - Backend Service
 * Built with native Node.js (Zero external dependencies needed)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;
const CLIENT_DIR = path.join(__dirname, '..', 'client');
const DATA_FILE = path.join(__dirname, 'quotes.json');

// Ensure quotes.json exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// MIME types for static files
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jsx': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = parsedUrl.pathname;

  // API Endpoints
  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'Core Craft API', time: new Date().toISOString() }));
    return;
  }

  if (pathname === '/api/quotes' && req.method === 'GET') {
    try {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to read quotes' }));
    }
    return;
  }

  if (pathname === '/api/quote' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const record = {
          id: Date.now(),
          createdAt: new Date().toISOString(),
          ...payload,
        };

        const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8') || '[]');
        existing.push(record);
        fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2));

        console.log('[API] New Quote Received:', record.name, record.service, record.email);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Quote received successfully', id: record.id }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON request' }));
      }
    });
    return;
  }

  // Static File Serving from client directory
  let filePath = path.join(CLIENT_DIR, pathname === '/' ? 'preview.html' : pathname);

  // If path doesn't exist, check public folder
  if (!fs.existsSync(filePath)) {
    filePath = path.join(CLIENT_DIR, 'public', pathname);
  }

  // If still not found, fallback to client/preview.html
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(CLIENT_DIR, 'preview.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`Core Craft Technologies Service is running!`);
  console.log(`Server URL: http://localhost:${PORT}`);
  console.log(`API Health: http://localhost:${PORT}/api/health`);
  console.log(`Quotes API: http://localhost:${PORT}/api/quotes`);
  console.log(`Serving Client from: ${CLIENT_DIR}`);
  console.log(`===================================================`);
});


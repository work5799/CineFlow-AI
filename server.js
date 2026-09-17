/**
 * Standalone Local Development Server for CineFlow AI
 * Runs locally on http://localhost:3000
 * Serves both static frontend assets and /api serverless functions
 * Zero external npm dependencies required!
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const idx = trimmed.indexOf('=');
      const key = trimmed.substring(0, idx).trim();
      const val = trimmed.substring(idx + 1).trim().replace(/(^['"]|['"]$)/g, '');
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  });
}

const PORT = process.env.PORT || 3000;

// Map API endpoints to serverless function modules
const apiRoutes = {
  '/api/health': require('./api/health'),
  '/api/test-key': require('./api/test-key'),
  '/api/analyze-product': require('./api/analyze-product'),
  '/api/analyze-storyboard': require('./api/analyze-storyboard')
};

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // Add standard express-like helpers to res
  res.status = function(code) {
    this.statusCode = code;
    return this;
  };

  res.json = function(data) {
    this.setHeader('Content-Type', 'application/json');
    this.end(JSON.stringify(data));
  };

  // Check if request is an API route
  const apiHandler = apiRoutes[pathname];
  if (apiHandler) {
    // Read body if POST/PUT
    let rawBody = '';
    req.on('data', chunk => {
      rawBody += chunk;
      // Protection against massive uploads (>50MB)
      if (rawBody.length > 50 * 1024 * 1024) {
        req.destroy();
      }
    });

    req.on('end', async () => {
      try {
        if (rawBody && req.headers['content-type']?.includes('application/json')) {
          req.body = JSON.parse(rawBody);
        } else {
          req.body = {};
        }
      } catch (e) {
        req.body = {};
      }

      try {
        await apiHandler(req, res);
      } catch (err) {
        console.error('Server error on ' + pathname + ':', err);
        if (!res.writableEnded) {
          res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
        }
      }
    });
    return;
  }

  // Serve static files
  let relativePath = pathname === '/' ? '/index.html' : pathname;
  let filePath = path.join(__dirname, relativePath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'public', relativePath);
  }

  // Security check to prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.status(403).end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for client-side routing
      const indexPath = path.join(__dirname, 'index.html');
      fs.readFile(indexPath, (indexErr, indexData) => {
        if (indexErr) {
          res.status(404).end('Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(indexData);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n=================================================`);
  console.log(`🚀 CineFlow AI Server running at http://localhost:${PORT}`);
  console.log(`📡 Backend API: /api/health, /api/test-key, /api/analyze-product, /api/analyze-storyboard`);
  console.log(`🔑 Server Key Configured: ${process.env.GEMINI_API_KEY ? 'YES (Active)' : 'NO (Using user modal keys)'}`);
  console.log(`=================================================\n`);
});

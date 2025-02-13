// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000; // Ensure port is set from environment variable or defaults to 3000

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true); // Parse the URL

    // Handle custom routes if necessary
    if (parsedUrl.pathname === '/a') {
      app.render(req, res, '/a', parsedUrl.query);
    } else if (parsedUrl.pathname === '/b') {
      app.render(req, res, '/b', parsedUrl.query);
    } else {
      handle(req, res, parsedUrl); // Handle all other routes
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});

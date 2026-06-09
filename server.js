const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false;
// Mengunci direktori agar cPanel mutlak membaca folder .next di dalam folder ini
const app = next({ dev, dir: __dirname }); 
const handle = app.getRequestHandler();

// Port dinamis yang diatur oleh Phusion Passenger cPanel
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
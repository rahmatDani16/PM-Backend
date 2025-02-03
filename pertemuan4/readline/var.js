import http from 'http';

// Membuat server HTTP untuk menangani permintaan pendaftaran
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/register') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const userData = JSON.parse(body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: 'Pendaftaran berhasil!',
        user: userData
      }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Menjalankan server di port 3000
server.listen(6000, () => {
  console.log('Server berjalan di:3000');
});

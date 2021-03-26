const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const app = express();

app.use(express.static('static'));

app.use('/static', express.static('static'));

app.set('views', './views');
app.set('view engine', 'pug');

app.use((req, res, next) => {
  console.log(`URL: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.status(200).render('index');
});

const httpServer = http.createServer(app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/dan-scott.dev-0001/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/dan-scott.dev-0001/fullchain.pem'),
}, app);

httpsServer.listen(443, () => {
  console.log(`HTTPS server running on port 443`);
})
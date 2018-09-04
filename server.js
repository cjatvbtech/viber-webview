const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

console.log(process.env);

app.use(express.static(__dirname + '/dist/viber-microsite'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/dist/viber-microsite/index.html')));

const server = http.createServer(app);

server.listen(port, () => console.log('Running...'))
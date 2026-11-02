const express = require("express");
const path = require("path");

const server = express();

server.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
server.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
server.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

server.use('/public', express.static(path.join(__dirname, 'public')));
server.use('/tailwind', express.static(path.join(__dirname, 'public/css')));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

server.get("/tailwind", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/tailwind.html'));
});

server.listen(5000, () => {
  console.log('Serveur démarré sur http://localhost:5000/');
  console.log('Version Bootstrap : http://localhost:5000/');
  console.log('Version Tailwind  : http://localhost:5000/tailwind');
});

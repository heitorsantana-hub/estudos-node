//Aplicação Web
//Lendo um arquivo HTML e gerando um servidor através dele com o FS (File System) e o URL

const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("message.html", function (err, data) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

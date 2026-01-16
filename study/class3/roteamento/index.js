//Aplicação Web
//Escrevendo um arquivo HTML e gerando um servidor através dele com o FS (File System) e o URL

const http = require("http"); //importa o modulo nativo para gerar o arquivo web
const fs = require("fs");
const url = require("url");

const port = 3000; // define qual porta do meu computador o servidor vai rodar

//criando o servidor
const server = http.createServer((req, res) => {
  // O 'req' (request) contém os dados que vêm do navegador.
  // O 'res' (response) é o objeto que usamos para enviar a resposta de volta.
  const q = url.parse(req.url, true);
  const nameFile = q.pathname.substring(1);

  if (nameFile.includes("html")) {
    if (fs.existsSync(nameFile)) {
      fs.readFile(nameFile, function (err, data) {
        res.writeHead(200, { "content-type": "text/html" }); //diz ao navegador que foi bem sucedido e vai enviar o arquivo html
        res.write(data); //envia ao navegador o arquivo html
        return res.end();
      });
    } else {
      fs.readFile("404.html", function (err, data) {
        fs.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  }
});

//liga o servidor
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

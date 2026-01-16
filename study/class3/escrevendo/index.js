//Aplicação Web
//Escrevendo um arquivo HTML e gerando um servidor através dele com o FS (File System) e o URL

const http = require("http"); //importa o modulo nativo para gerar o arquivo web
const fs = require("fs");

const port = 3000; // define qual porta do meu computador o servidor vai rodar

//criando o servidor
const server = http.createServer((req, res) => {
  // O 'req' (request) contém os dados que vêm do navegador.
  // O 'res' (response) é o objeto que usamos para enviar a resposta de volta.

  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile("escrevendo.html", function (err, data) {
      res.writeHead(200, { "content-type": "text/html" }); //diz ao navegador que foi bem sucedid e vai enviar o arquivo html
      res.write(data); //envia ao navegador o arquivo html
      return res.end();
    });
  } else {
    fs.writeFile("arquivo.txt", name, function (err, data) {
      res.writeHead(302, {
        //código 302 signfica: Redirecionamento
        location: "/", //Retorna o usuário para a página inicial
      });
      return res.end();
    });
  }
});

//liga o servidor
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

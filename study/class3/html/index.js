const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; //Codigo de resultado requerimento bem sucedido
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Bahia é o mundo </h1>");
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

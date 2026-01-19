//Aprendendo na prática com remover um arquivo usando o modulo FS
const fs = require("fs");

fs.unlink("arquivo.txt", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Arquvio Removido com Sucesso");
});

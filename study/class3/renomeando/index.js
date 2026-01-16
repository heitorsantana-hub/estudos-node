const fs = require("fs");
const arqOld = "arquivo.txt";
const arqNew = "novo.txt";

//Renomeando Arquivo para o novo
fs.rename(arqOld, arqNew, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Arquivo Renomeado com Sucesso");
});

const fs = require("fs");

console.log("inicio");

//Depois todo o código for executado, realiza essa função do Fs
fs.writeFile("arquivo.txt", "oi", function (err) {
  setTimeout(function () {
    console.log("Arquivo foi criado");
  }, 1000);
});

console.log("Fim");

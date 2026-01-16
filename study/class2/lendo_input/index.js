const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual time você torce? ", (time) => {
  console.log(`Meu time é: ${time}`);

  if (time === "Bahia") {
    console.log("Você torcer pro Esquadrão de Aço");
  } else {
    console.log("Seu time é uma merda");
  }

  readline.close();
});

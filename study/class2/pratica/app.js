const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Digite seu nome: ",
    },
    {
      name: "idade",
      message: "Digite sua idade: ",
    },
  ])
  .then((resultado) => {
    if (!resultado.nome || !resultado.idade) {
      throw new Error("Nome ou Idade são obrigatórios!");
    }

    console.log(chalk.bgYellow(`Seu nome é: ${resultado.nome}`));
    console.log(chalk.bgCyan(`Seu nome é: ${resultado.nome}`));
  })
  .catch((err) => {
    console.log(`Erro: ${err}`);
  });

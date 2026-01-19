const inquirer = require("inquirer"); //Modulo que ler todos argumentos do usuario pelo console e gerar perguntas, funciona com método then and cath

inquirer
  .prompt([
    {
      name: "p1",
      message: "Digite qual time você torce? ",
    },
    {
      name: "p2",
      message: "Qual país você mora? ",
    },
  ])
  .then((answers) => {
    console.log(answers);
    //const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;

    //console.log(`A média das seus números é: ${media}`);
    console.log(`O time que você torce é: ${answers.p1}`);
    console.log(`O país que você mora é: ${answers.p2}`);
  })
  .catch((err) => {
    console.log(err);
  });

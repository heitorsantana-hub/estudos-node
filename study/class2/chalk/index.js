const chalk = require("chalk");
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

const nota = args["nota"];

if (nota <= 5) {
  console.log(chalk.red("Parabéns seu Arrombado você é um animal"));
} else if (nota >= 5 && nota <= 8) {
  console.log(
    chalk.yellow("Olha seu pau no cu, até que você não é burro desse jeito")
  );
} else {
  console.log(chalk.green("Inteligenta para um caralho!"));
}

const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args["nome"];
const time = args["time"];

console.log(nome, time);

console.log(`O nome dele é ${nome} e ele torce pro ${time}`);

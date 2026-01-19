const EventEmitter = require("events"); //Uma ferramenta poderosa onde eu posso estar criando algum evento para ser executado quando eu quiser
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Durante");
});

console.log("Antes");

eventEmitter.emit("start");

console.log("Fim");

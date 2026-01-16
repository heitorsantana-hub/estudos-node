const url = require("url");
const adress = "https://www.bahiaeomundo.com.br/camisas?oficial=blusa treino";
const parseUrl = new url.URL(adress);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.search);
console.log(parseUrl.searchParams);
console.log(parseUrl.searchParams.get("oficial"));

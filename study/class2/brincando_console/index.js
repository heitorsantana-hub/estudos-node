const x = 10;
const y = "bahia";
const z = [12, 2];

// padrão
console.log(x, y, z);

// contagem de impressões
console.count(`O valor do numero é: ${x}, contagem numero: `);
console.count(`O valor do numero é: ${x}, contagem numero: `);
console.count(`O valor do numero é: ${x}, contagem numero: `);
console.count(`O valor do numero é: ${x}, contagem numero: `);
console.count(`O valor do numero  `);

// apagar console
setTimeout(() => {
  console.clear();
}, 2000);

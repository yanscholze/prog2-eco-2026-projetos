const produtos = [
  { nome: "Mouse",   preco: 80,  estoque: 5 },
  { nome: "Teclado", preco: 150, estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 2 },
  { nome: "Headset", preco: 200, estoque: 8 },
  { nome: "Webcam",  preco: 120, estoque: 0 },
];

// O filter olha cada "produto" e só guarda os que têm estoque > 0
const emEstoque = produtos.filter(produto => produto.estoque > 0);

console.log("--- Produtos em Estoque (FILTER) ---");
console.log(emEstoque);

// Atenção: para retornar um objeto {} direto em uma arrow function, 
// precisamos colocar parênteses em volta dele ({ ... })
const produtosComDesconto = produtos.map(produto => ({
  nome: produto.nome,
  preco: produto.preco * 0.90 
}));

console.log("\n--- Produtos com 10% de Desconto (MAP) ---");
console.log(produtosComDesconto);

// O primeiro parâmetro (acc) é o acumulador. O segundo é o item atual.
// O "0" lá no finalzinho indica que nossa soma começa do zero.
const valorTotalGeral = produtos.reduce((acc, produto) => {
  return acc + (produto.preco * produto.estoque);
}, 0);

console.log("\n--- Valor Total de TODOS os produtos (REDUCE) ---");
console.log(`R$ ${valorTotalGeral}`);

const valorTotalDisponivel = produtos
  .filter(produto => produto.estoque > 0) // 1º: Filtra
  .reduce((acc, produto) => acc + (produto.preco * produto.estoque), 0); // 2º: Soma oque sobrou 

console.log("\n--- Desafio: Valor Total Apenas dos Disponíveis ---");
console.log(`R$ ${valorTotalDisponivel}`);

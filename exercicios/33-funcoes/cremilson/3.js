const produtos = [
  { nome: "Mouse", preco: 80, estoque: 5 },
  { nome: "Teclado", preco: 150, estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 2 },
  { nome: "Headset", preco: 200, estoque: 8 },
  { nome: "Webcam", preco: 120, estoque: 0 },
];

const produtosDisponiveis = produtos.filter(produto => produto.estoque > 0);
const produtosComDesconto = produtosDisponiveis.map(produto => ({
  nome: produto.nome,
  preco: Number((produto.preco * 0.9).toFixed(2)),
}));
const valorTotalEstoque = produtos.reduce(
  (total, produto) => total + produto.preco * produto.estoque,
  0
);
const valorTotalDisponiveis = produtos
  .filter(produto => produto.estoque > 0)
  .reduce((total, produto) => total + produto.preco * produto.estoque, 0);

console.log("Produtos disponíveis:", produtosDisponiveis);
console.log("Produtos com desconto:", produtosComDesconto);
console.log("Valor total do estoque:", valorTotalEstoque);
console.log("Valor total apenas dos disponíveis:", valorTotalDisponiveis);

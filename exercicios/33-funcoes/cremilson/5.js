const produtos = [
  { nome: "Mouse", preco: 80, estoque: 5 },
  { nome: "Teclado", preco: 150, estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 2 },
  { nome: "Headset", preco: 200, estoque: 8 },
  { nome: "Webcam", preco: 120, estoque: 0 },
];

const resultadoPipeline = produtos
  .filter(produto => produto.estoque > 0)
  .map(produto => ({
    nome: produto.nome,
    precoComDesconto: Number((produto.preco * 0.9).toFixed(2)),
    estoque: produto.estoque,
  }))
  .reduce((acc, produto) => {
    acc.valorTotal += produto.precoComDesconto * produto.estoque;
    acc.produtos.push(produto);
    return acc;
  }, { produtos: [], valorTotal: 0 });

console.log("Produtos disponíveis com desconto:", resultadoPipeline.produtos);
console.log("Valor total em estoque com desconto:", resultadoPipeline.valorTotal);

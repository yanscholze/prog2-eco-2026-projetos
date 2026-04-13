const produtos = [
    { nome: "Mouse", preco: 80, estoque: 5 },
    { nome: "Teclado", preco: 150, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 2 },
    { nome: "Headset", preco: 200, estoque: 8 },
    { nome: "Webcam", preco: 120, estoque: 0 }
];

// 1. filter: produtos com estoque maior que zero
const produtosComEstoque = produtos.filter(produto => produto.estoque > 0);
console.log("Produtos com estoque > 0:");
console.log(produtosComEstoque);
console.log("\n");

// 2. map: aplicar 10% de desconto em todos os preços
const produtosComDesconto = produtos.map(produto => ({
    nome: produto.nome,
    precoComDesconto: produto.preco * 0.9 // 10% de desconto = multiplicar por 0.9
}));
console.log("Produtos com 10% de desconto:");
console.log(produtosComDesconto);
console.log("\n");

// 3. reduce: valor total do estoque (preço x estoque)
const valorTotalEstoque = produtos.reduce((total, produto) => {
    return total + (produto.preco * produto.estoque);
}, 0);
console.log("Valor total do estoque:");
console.log(`R$ ${valorTotalEstoque.toFixed(2)}`);
console.log("\n");

// Desafio:  valor total apenas dos produtos disponíveis em estoque
const valorTotalDisponivel = produtos
    .filter(produto => produto.estoque > 0) // pega só produtos com estoque
    .reduce((total, produto) => {
        return total + (produto.preco * produto.estoque);
    }, 0);
console.log("Valor total apenas dos produtos disponíveis:");
console.log(`R$ ${valorTotalDisponivel.toFixed(2)}`);
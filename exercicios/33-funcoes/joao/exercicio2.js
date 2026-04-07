// 1. A FUNÇÃO PRINCIPAL
function processarIdade(idade, callback) {
  if (idade < 0 || idade > 120) {
    throw new Error("Idade inválida! A idade deve estar entre 0 e 120 anos.");
  }
  
  callback(idade);
}

// 2. OS CALLBACKS
const verificarMaioridade = (idade) => {
  if (idade >= 18) {
    console.log(`Com ${idade} anos, a pessoa é MAIOR de idade.`);
  } else {
    console.log(`Com ${idade} anos, a pessoa é MENOR de idade.`);
  }
};

const calcularAnoNascimento = (idade) => {
  const anoAtual = new Date().getFullYear();
  const anoNascimento = anoAtual - idade;
  console.log(`Uma pessoa com ${idade} anos nasceu aproximadamente em ${anoNascimento}.`);
};

// 3. TESTANDO NA PRÁTICA
console.log("--- Testando Maioridade ---");
processarIdade(25, verificarMaioridade);
processarIdade(15, verificarMaioridade);

console.log("\n--- Testando Ano de Nascimento ---");
processarIdade(30, calcularAnoNascimento);

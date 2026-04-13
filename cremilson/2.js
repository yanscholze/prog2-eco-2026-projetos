function processarIdade(idade, callback) {
  if (typeof idade !== 'number' || Number.isNaN(idade)) {
    throw new Error('Idade deve ser um número.');
  }
  if (idade < 0 || idade > 120) {
    throw new Error('Idade inválida: deve ser entre 0 e 120.');
  }
  return callback(idade);
}

// Exemplos de uso:
const maioridade = idade => idade >= 18 ? 'Maior de idade' : 'Menor de idade';
const anoNascimento = idade => {
  const anoAtual = new Date().getFullYear();
  return `Ano de nascimento aproximado: ${anoAtual - idade}`;
};

console.log(processarIdade(25, maioridade)); // Maior de idade
console.log(processarIdade(16, maioridade)); // Menor de idade
console.log(processarIdade(30, anoNascimento)); // Ano de nascimento aproximado: 1996 (ou ano atual - 30)

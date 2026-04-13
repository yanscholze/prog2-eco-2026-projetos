function apresentar(nome, curso, semestre = 1) {
  return `${nome} – ${curso} – ${semestre}º semestre`;
}

// Exemplo de uso:
console.log(apresentar("Ana", "Eng. Computação", 3)); // Ana – Eng. Computação – 3º semestre
console.log(apresentar("João", "Eng. Computação")); // João – Eng. Computação – 1º semestre

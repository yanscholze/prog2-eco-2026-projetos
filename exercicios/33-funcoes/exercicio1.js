function apresentar(nome, curso, semestre = 1) {
    return `${nome} – ${curso} – ${semestre}º semestre`;
}

// Testes
console.log(apresentar("Ana", "Eng. Computação", 3));   
console.log(apresentar("João", "Eng. Computação", 1));      

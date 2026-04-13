function processarIdade(idade, callback) {
    // validação
    if (idade < 0 || idade > 120) {
        throw new Error("Idade inválida!");
    }
    callback(idade);
}

//  verificar maior de idade
function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        console.log("É maior de idade");
    } else {
        console.log("É menor de idade");
    }
}

// alcular ano de nascimento aproximado
function calcularAnoNascimento(idade) {
    const anoAtual = new Date().getFullYear();
    const anoNascimento = anoAtual - idade;
    console.log("Ano de nascimento aproximado:", anoNascimento);
}

// testes
try {
    processarIdade(56, verificarMaiorIdade);
    processarIdade(56, calcularAnoNascimento);

    processarIdade(192, verificarMaiorIdade); 
} catch (erro) {
    console.log(erro.message);
}

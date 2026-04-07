function criarSaudacao(idioma) {
  // A mágica vai acontecer aqui dentro
}

function criarSaudacao(idioma) {
  
  // Retornamos uma nova função!
  return function(nome) {
    // Essa função de dentro LEMBRA da variável "idioma" da função de fora
  };
}

// 1. Criando a função que usa Closure
function criarSaudacao(idioma) {
  
  // Retornamos a função de dentro
  return function(nome) {
    
    // Verificamos o idioma que ficou salvo na "memória" (closure)
    if (idioma === "pt") {
      console.log(`Olá, ${nome}!`);
    } else if (idioma === "en") {
      console.log(`Hello, ${nome}!`);
    } else if (idioma === "es") {
      console.log(`Hola, ${nome}!`);
    } else {
      console.log(`Idioma não suportado... Oi, ${nome}!`);
    }
    
  };
}

// 2. Usando a "fábrica" para criar funções específicas
console.log("--- Criando as funções ---");
const saudarEmPortugues = criarSaudacao("pt");
const saudarEmIngles = criarSaudacao("en");
const saudarEmEspanhol = criarSaudacao("es"); // Vamos testar o espanhol também!

// 3. Testando as funções geradas
console.log("\n--- Executando as saudações ---");
saudarEmPortugues("Ana");
saudarEmIngles("Ana");
saudarEmEspanhol("João");

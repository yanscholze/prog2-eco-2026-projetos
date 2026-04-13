function criarSaudacao(idioma) {
    const saudacoes = {
        pt: "Olá",
        en: "Hello",
        es: "Hola"
    };
    
    return function(nome) {
        const saudacao = saudacoes[idioma] || saudacoes.pt;
        console.log(`${saudacao}, ${nome}!`);
    };
}

// Testando a função
const saudarEmPortugues = criarSaudacao("pt");
const saudarEmIngles = criarSaudacao("en");
const saudarEmEspanhol = criarSaudacao("es");


saudarEmPortugues("Isabel");  
saudarEmIngles("Isabel");     
saudarEmEspanhol("Isabel"); 

console.log("\n");

// Testando com outros nomes
saudarEmPortugues("Carlos");  
saudarEmIngles("Otávio");     
saudarEmEspanhol("Manuela");  
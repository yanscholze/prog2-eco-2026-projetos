function criarSaudacao(idioma) {
  return function(nome) {
    switch (idioma) {
      case 'pt':
        return `Olá, ${nome}!`;
      case 'en':
        return `Hello, ${nome}!`;
      case 'es':
        return `¡Hola, ${nome}!`;
      default:
        return `Olá, ${nome}!`;
    }
  };
}

const saudarEmPortugues = criarSaudacao('pt');
const saudarEmIngles = criarSaudacao('en');
const saudarEmEspanhol = criarSaudacao('es');

console.log(saudarEmPortugues('Ana')); // Olá, Ana!
console.log(saudarEmIngles('Ana')); // Hello, Ana!
console.log(saudarEmEspanhol('Ana')); // ¡Hola, Ana!

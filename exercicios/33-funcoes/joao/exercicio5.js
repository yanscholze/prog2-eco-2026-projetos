const estudantes = [
  { nome: "Ana", nota: 8, turma: "ECO" },
  { nome: "João", nota: 5, turma: "ECO" },   // Reprovado
  { nome: "Maria", nota: 9, turma: "ECO" },
  { nome: "Pedro", nota: 7, turma: "ECO" },
  { nome: "Lucas", nota: 8, turma: "DIR" },  // Outra turma
  { nome: "Julia", nota: 4, turma: "ENG" }   // Outra turma
];

const resultadoFinal = estudantes
  // 1º: Deixa passar apenas quem é da turma ECO
  .filter(estudante => estudante.turma === "ECO")
  
  // 2º: Da turma ECO, deixa passar apenas quem tirou 6 ou mais
  .filter(estudante => estudante.nota >= 6)
  
  // 3º: Agora que só temos os aprovados de ECO, pegamos APENAS os nomes deles
  // Nesse ponto, a lista vira algo como: ["Ana", "Maria", "Pedro"]
  .map(estudante => estudante.nome)
  
  // 4º: Pegamos essa lista de nomes e "reduzimos" a um único texto
  .reduce((acumulador, nome, index) => {
    // Se for o primeiro nome da lista, damos só um espaço
    if (index === 0) {
      return `${acumulador} ${nome}`;
    } 
    // Para os próximos nomes, colocamos vírgula e espaço
    else {
      return `${acumulador}, ${nome}`;
    }
  }, "Aprovados da turma ECO:"); // Esse é o texto inicial do nosso acumulador!

// Imprimindo o resultado com orgulho
console.log(resultadoFinal);

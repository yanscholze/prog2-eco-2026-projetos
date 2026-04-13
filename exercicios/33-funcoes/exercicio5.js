// Array com estudantes contendo nome, nota e turma
const estudantes = [
    { nome: "Ana", nota: 8.5, turma: "ECO" },
    { nome: "Bruno", nota: 5.0, turma: "ECO" },
    { nome: "Carla", nota: 7.0, turma: "ECO" },
    { nome: "Daniel", nota: 4.5, turma: "ECO" },
    { nome: "Elisa", nota: 9.0, turma: "ECO" },
    { nome: "Felipe", nota: 6.5, turma: "ECO" },
    { nome: "Gabriela", nota: 8.0, turma: "ADM" },
    { nome: "Henrique", nota: 7.5, turma: "ADM" },
    { nome: "Isabela", nota: 5.5, turma: "ADM" },
    { nome: "João", nota: 9.5, turma: "ENG" },
    { nome: "Karla", nota: 6.0, turma: "ENG" },
    { nome: "Lucas", nota: 4.0, turma: "ENG" }
];

// criando as strings 
const resultado = estudantes
    .filter(estudante => estudante.turma === "ECO" && estudante.nota >= 6) // nota maior que 6  e ECO

    .map(estudante => estudante.nome)
   
    .reduce((acumulador, nome, indice, array) => {
        if (indice === 0) {
            return `Aprovados da turma ECO: ${nome}`;
        } else {
            return `${acumulador}, ${nome}`;
        }
    }, "");

console.log(resultado);

# Aula 01 - Exercicios de Revisao de Orientacao a Objetos

**Disciplina:** Programacao II - ECO 2026/1
**Referencia:** https://wilcilene.github.io/estudos/disciplinas/programacaoii-eco/revisao-oo.html

---

## Instrucoes de entrega

1. Dentro da pasta `entregas/`, crie uma pasta com o seu nome (ex.: `entregas/maria-silva/`).
2. Coloque todos os arquivos da sua solucao nessa pasta.
3. Inclua um `README.md` usando o template em `/templates/README-exercicio.md`.
4. Faca commit e abra um Pull Request conforme o `CONTRIBUTING.md`.

---

## Atividade 1 – Modelando uma turma
Modele as classes abaixo em JavaScript, seguindo as práticas estudadas nos exemplos (validação de dados, nomes claros, responsabilidade única).

Curso: possui nome e carga horária.
Turma: está ligada a um curso e contém uma lista de estudantes (Estudante).
Regras sugeridas:

Não permitir estudantes duplicados na turma (mesma matrícula).
Garantir que toda turma esteja ligada a um curso válido.

## Atividade 2 – Encapsulando um carrinho de compras
Implemente uma classe CarrinhoDeCompras com:

Lista interna de itens (cada item com descricao, preco, quantidade).
Métodos: adicionarItem, removerItem, calcularTotal, listarItens.
Regras:

Não aceitar quantidade zero ou negativa.
Esconder a lista interna (encapsulamento) e expor apenas métodos de acesso.

## Atividade 3 – Herança e polimorfismo com veículos
Implemente:

Veículo com marca, modelo, ano e método para cadastrar descricao().
Carro e Moto, que herdam de Veiculo e sobrescrevem descricao().
Crie uma função imprimirDescricao(veiculo) que recebe qualquer Veiculo (ou subclasse) e chama descricao(), demonstrando polimorfismo.

##  Atividade 4 – Biblioteca
Crie as classes Livro, UsuarioBiblioteca e, se achar necessário, uma classe para controlar empréstimos.

Regras sugeridas:

Use encapsulamento para proteger a lista interna de livros emprestados.
Impeça que o mesmo livro seja emprestado duas vezes para o mesmo usuário.
Inclua um método para listar todos os empréstimos ativos.

## Atividade 5 – Sistema de pagamentos
Crie uma hierarquia de Pagamento com subclasses para PagamentoCartao, PagamentoPix e PagamentoBoleto.

Orientações:

Defina na classe base um método processar() que é sobrescrito em cada subclasse com a lógica específica de mensagem ou validação.
Implemente uma função pagar(pagamento) que recebe qualquer objeto da hierarquia e chama processar(), explorando o polimorfismo.

## Atividade 6 – Refatoração para OO
Escolha um script simples em JavaScript (pode ser um exercício da Programação I) e reescreva usando classes.

Objetivos da refatoração:

Melhorar nomes de variáveis, funções e estruturas.
Separar responsabilidades em classes e métodos coerentes.
Identificar onde POO traz reuso e organização melhores que o código original.

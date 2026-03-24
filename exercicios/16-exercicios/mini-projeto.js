// 1. Selecionar elementos da página
const inputTarefa = document.querySelector("#tarefa-input");
const btnAdicionar = document.querySelector("#btn-adicionar-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");
const pErro = document.querySelector("#erro-tarefa");

// 2. Array para guardar as tarefas (estado da aplicação)
const tarefas = [];

// 3. Função para redesenhar a lista usando innerHTML
function atualizarLista() {
  let html = "";

  for (const tarefa of tarefas) {
    html += "<li>" + tarefa + "</li>";
  }

  listaTarefas.innerHTML = html;
}

// 4. Função para adicionar uma nova tarefa
function adicionarTarefa() {
  const texto = inputTarefa.value.trim();

  if (texto === "") {
    pErro.textContent = "Digite uma tarefa antes de adicionar.";
    return;
  }

  pErro.textContent = ""; // limpa mensagem de erro
  tarefas.push(texto);
  inputTarefa.value = "";
  atualizarLista();
}

// 5. Conectar eventos
btnAdicionar.addEventListener("click", adicionarTarefa);

// Permite adicionar com Enter
inputTarefa.addEventListener("keyup", (evento) => {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});
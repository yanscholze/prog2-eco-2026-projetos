
// ======================================================
// CLASSE BASE: Criatura
// Representa qualquer criatura do zoológico
// ======================================================
class Criatura {

  constructor(nome, especie, nivelFome=5) {
    this.nome = nome;
    this.especie = especie;
    this.nivelFome = nivelFome;
  }

  // Método padrão de alimentação
  alimentar(comida) {

    // Se já estiver sem fome, lança erro
    if(this.nivelFome === 0) 
      throw new Error(this.nome + " já está saciada!");

    // Reduz fome em 3 (mínimo 0)
    this.nivelFome = Math.max(0, this.nivelFome - 3);

    return `${this.nome} comeu ${comida}!`;
  }

  // Getter do nível de fome
  getNivelFome() {
    return this.nivelFome;
  }
}

// ======================================================
// SUBCLASSE: Dragao
// Só aceita "código compilado"
// ======================================================
class Dragao extends Criatura {

  alimentar(comida) {

    // Validação da comida
    if(comida !== "código compilado") 
      throw new Error("🔥 O dragão rejeitou isso e queimou tudo!");

    return super.alimentar(comida);
  }
}

// ======================================================
// SUBCLASSE: Unicornio
// Aceita qualquer comida, mas penaliza se não for arco-íris
// ======================================================
class Unicornio extends Criatura {

  alimentar(comida) {

    if(this.nivelFome === 0) 
      throw new Error(this.nome + " já está saciado!");

    // Comida incorreta → reduz apenas 1
    if(comida !== "arco-íris") {
      this.nivelFome = Math.max(0, this.nivelFome - 1);
      return `${this.nome} achou meh...`;
    }

    return super.alimentar(comida);
  }
}

// ======================================================
// SUBCLASSE: Fenix
// Quando está sem fome, renasce e reseta atributos
// ======================================================
class Fenix extends Criatura {

  constructor(nome) {
    super(nome, "Fênix", 5);
  }

  alimentar(comida) {

    // Caso especial: renascimento
    if(this.nivelFome === 0) {
      this.nome = "Fênix";
      this.especie = "Fênix";
      this.nivelFome = 5;
      throw new Error("🔥 A Fênix renasceu e resetou tudo!");
    }

    return super.alimentar(comida);
  }
}

// ======================================================
// "INTERFACE" Alimentavel (simulada)
// Verifica se o objeto possui os métodos necessários
// ======================================================
function verificarAlimentavel(obj) {
  return typeof obj.alimentar === 'function' && 
         typeof obj.getNivelFome === 'function';
}

// ======================================================
// OBJETO ZOOLÓGICO
// Responsável por gerenciar as criaturas
// ======================================================
const zoologico = {

  criaturas: [],

  // Adiciona criatura validando a "interface"
  adicionar(c) {
    if(!verificarAlimentavel(c)) 
      throw new Error("Objeto não é alimentável!");

    this.criaturas.push(c);
  },

  // Alimenta todas as criaturas (com try/catch individual)
  alimentarTodas(comida) {

    const resultados = [];

    this.criaturas.forEach(c => {

      try {
        resultados.push({
          msg: c.alimentar(comida),
          tipo: 'sucesso'
        });

      } catch(e) {
        resultados.push({
          msg: e.message,
          tipo: 'erro'
        });
      }
    });

    return resultados;
  },

  // Retorna criaturas com fome crítica (>7)
  listarFamintas() {
    return this.criaturas.filter(c => c.getNivelFome() > 7);
  },

  // Salva no localStorage
  salvar() {
    localStorage.setItem("zoo", JSON.stringify(this.criaturas));
  },

  // Carrega do localStorage
  carregar() {
    const data = JSON.parse(localStorage.getItem("zoo")) || [];
    this.criaturas = data;
  }
};

// ======================================================
// INSTÂNCIAS INICIAIS
// ======================================================
const dragao = new Dragao("Draco", "Dragão", 8);
const unicornio = new Unicornio("Luna", "Unicórnio", 6);
const fenix = new Fenix("Fênix");

zoologico.adicionar(dragao);
zoologico.adicionar(unicornio);
zoologico.adicionar(fenix);

// ======================================================
// RENDERIZAÇÃO DOS CARDS
// ======================================================
function render() {

  const container = document.getElementById("cards");
  container.innerHTML = "";

  zoologico.criaturas.forEach((c) => {

    const card = document.createElement("div");
    card.className = "card";

    // Conteúdo do card
    card.innerHTML = `
      <h3>${c.nome}</h3>
      <p>${c.especie}</p>
      <div class="bar" style="width:${c.nivelFome*10}%"></div>
    `;

    // Tooltip ao passar o mouse
    card.onmouseover = () => {
      card.innerHTML += `<div class='tooltip'>Criatura mágica!</div>`;
    };

    // Remove tooltip ao sair
    card.onmouseout = () => render();

    container.appendChild(card);
  });

  atualizarAlerta();
}

// ======================================================
// EXIBE LOG NA TELA
// ======================================================
function logar(res) {

  const log = document.getElementById("log");

  log.innerHTML = res
    .map(r => `<p class='${r.tipo}'>${r.msg}</p>`)
    .join("");
}

// ======================================================
// BOTÃO: Alimentar Todas
// ======================================================
function alimentarTodas() {

  const comida = document.getElementById("comida").value;

  const res = zoologico.alimentarTodas(comida);

  logar(res);
  render();
}

// ======================================================
// BOTÃO: Alimentar Individualmente
// ======================================================
function alimentarIndividual() {

  const comida = document.getElementById("comida").value;

  const res = zoologico.criaturas.map(c => {

    try {
      return { msg:c.alimentar(comida), tipo:'sucesso' }
    }
    catch(e){ 
      return { msg:e.message, tipo:'erro' }
    }
  });

  logar(res);
  render();
}

// ======================================================
// ATUALIZA ALERTA DE FOME CRÍTICA
// ======================================================
function atualizarAlerta() {

  const qtd = zoologico.listarFamintas().length;

  document.querySelector("#alerta")
    .innerText = `🚨 Criaturas com fome crítica: ${qtd}`;
}

// ======================================================
// DEMONSTRAÇÃO AUTOMÁTICA
// ======================================================
window.onload = () => {

  render();

  // 1. ERRO DO DRAGÃO (comida errada)
  console.log(zoologico.alimentarTodas("carne"));

  // 2. SUCESSO PARCIAL DO UNICÓRNIO
  console.log(zoologico.alimentarTodas("banana"));

  // 3. RENASCIMENTO DA FÊNIX
  fenix.nivelFome = 0;

  try {
    fenix.alimentar("qualquer");
  } catch(e) {
    console.log(e.message);
  }

  render();
};


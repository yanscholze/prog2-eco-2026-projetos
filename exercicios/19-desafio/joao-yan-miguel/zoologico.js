<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Zoológico Digital</title>
  <style>
    body { font-family: Arial; background: #111; color: #eee; }
    .container { display: flex; gap: 20px; margin-bottom: 20px; }
    .card {
      background: #222; padding: 15px; border-radius: 10px;
      width: 200px; position: relative;
    }
    .barra {
      height: 20px; background: red; margin-top: 10px;
      transition: width 0.3s;
    }
    .tooltip {
      position: absolute;
      top: -40px;
      left: 0;
      background: #333;
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
    }
    #log { margin-top: 20px; }
    .erro { color: red; }
    .sucesso { color: lightgreen; }
  </style>
</head>
<body>

<h2 id="titulo">🚨 Criaturas com fome crítica: 0</h2>

<div class="container">
  <div class="card" id="dragaoCard">
    <h3>🐉 Dragão</h3>
    <div class="barra" id="dragaoBar"></div>
  </div>
  <div class="card" id="unicornioCard">
    <h3>🦄 Unicórnio</h3>
    <div class="barra" id="unicornioBar"></div>
  </div>
  <div class="card" id="fenixCard">
    <h3>🔥 Fênix</h3>
    <div class="barra" id="fenixBar"></div>
  </div>
</div>

<input type="text" id="comida" placeholder="O que servir?">
<button onclick="alimentarTodas()">Alimentar Todas</button>
<button onclick="alimentarIndividual()">Alimentar Individualmente</button>

<div id="log"></div>

<script>
// Classe base
class Criatura {
  constructor(nome, especie, nivelFome = 10) {
    this.nome = nome;
    this.especie = especie;
    this.nivelFome = nivelFome;
  }

  alimentar(comida) {
    if (this.nivelFome === 0) {
      throw new Error(`${this.nome} já está saciada!`);
    }
    this.nivelFome = Math.max(0, this.nivelFome - 3);
    return `${this.nome} comeu ${comida}!`;
  }

  getNivelFome() {
    return this.nivelFome;
  }
}

// Dragão
class Dragao extends Criatura {
  alimentar(comida) {
    if (comida !== "código compilado") {
      throw new Error("🔥 Dragão indignado! Só aceito código compilado!");
    }
    return super.alimentar(comida);
  }
}

// Unicórnio
class Unicornio extends Criatura {
  alimentar(comida) {
    if (this.nivelFome === 0) {
      throw new Error(`${this.nome} já está feliz demais!`);
    }
    let reducao = (comida === "arco-íris") ? 3 : 1;
    this.nivelFome = Math.max(0, this.nivelFome - reducao);
    return `${this.nome} comeu ${comida} (-${reducao} fome).`;
  }
}

// Fênix
class Fenix extends Criatura {
  alimentar(comida) {
    if (this.nivelFome === 0) {
      this.nome = "Fênix";
      this.especie = "Fênix";
      this.nivelFome = 10;
      throw new Error("🔥 A Fênix renasceu e resetou tudo!");
    }
    return super.alimentar(comida);
  }
}

// Interface fake
function verificarAlimentavel(obj) {
  return typeof obj.alimentar === "function" &&
         typeof obj.getNivelFome === "function";
}

// Zoológico
const zoologico = {
  criaturas: [],

  adicionar(c) {
    if (!verificarAlimentavel(c)) {
      throw new Error("Objeto inválido!");
    }
    this.criaturas.push(c);
  },

  alimentarTodas(comida) {
    let resultados = [];
    this.criaturas.forEach(c => {
      try {
        let msg = c.alimentar(comida);
        resultados.push({ tipo: "sucesso", msg });
      } catch (e) {
        resultados.push({ tipo: "erro", msg: e.message });
      }
    });
    return resultados;
  },

  listarFamintas() {
    return this.criaturas.filter(c => c.getNivelFome() > 7);
  }
};

// Instâncias
const dragao = new Dragao("Draco", "Dragão", 10);
const unicornio = new Unicornio("Lumi", "Unicórnio", 10);
const fenix = new Fenix("Pyra", "Fênix", 0);

zoologico.adicionar(dragao);
zoologico.adicionar(unicornio);
zoologico.adicionar(fenix);

// DOM
function atualizarBarras() {
  document.getElementById("dragaoBar").style.width = dragao.getNivelFome() * 10 + "%";
  document.getElementById("unicornioBar").style.width = unicornio.getNivelFome() * 10 + "%";
  document.getElementById("fenixBar").style.width = fenix.getNivelFome() * 10 + "%";

  document.querySelector("#titulo").innerText =
    `🚨 Criaturas com fome crítica: ${zoologico.listarFamintas().length}`;
}

function logar(resultados) {
  let log = document.getElementById("log");
  log.innerHTML += resultados.map(r =>
    `<div class="${r.tipo}">${r.msg}</div>`
  ).join("");
}

function alimentarTodas() {
  const comida = document.getElementById("comida").value;
  const resultados = zoologico.alimentarTodas(comida);
  logar(resultados);
  atualizarBarras();
}

function alimentarIndividual() {
  alimentarTodas(); // simplificado
}

// Tooltips
function addTooltip(cardId, texto) {
  const card = document.getElementById(cardId);

  card.addEventListener("mouseover", () => {
    const tip = document.createElement("div");
    tip.className = "tooltip";
    tip.innerText = texto;
    card.appendChild(tip);
  });

  card.addEventListener("mouseout", () => {
    const tip = card.querySelector(".tooltip");
    if (tip) tip.remove();
  });
}

addTooltip("dragaoCard", "Dragões só comem código compilado!");
addTooltip("unicornioCard", "Unicórnios preferem arco-íris!");
addTooltip("fenixCard", "Fênix renasce das cinzas!");

// 🔥 DEMONSTRAÇÃO AUTOMÁTICA
window.onload = () => {
  let resultados = [];

  // 1. erro do dragão
  resultados.push(...zoologico.alimentarTodas("pizza"));

  // 2. sucesso parcial unicórnio
  resultados.push(...zoologico.alimentarTodas("maçã"));

  // 3. renascimento da fênix
  resultados.push(...zoologico.alimentarTodas("qualquer coisa"));

  logar(resultados);
  atualizarBarras();
};
</script>

</body>
</html>

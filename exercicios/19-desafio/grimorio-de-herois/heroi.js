// Classe base - Carlos Eduardo
class Heroi {
  constructor(nome, nivel, pontosDeVida = 100) {
    if (!nome || nome.trim() === "") {
      throw new Error("O nome do herói não pode estar vazio.");
    }

    this.nome = nome;
    this.nivel = nivel;
    this.pontosDeVida = pontosDeVida;
  }

  getStatus() {
    return `Nome: ${this.nome} | Nível: ${this.nivel} | Vida: ${this.pontosDeVida}`;
  }
}

// Subclasses
class Mago extends Heroi {
  constructor(nome, nivel, mana = 50) {
    super(nome, nivel);
    this.mana = mana;
    this.tipo = "Mago";
  }

  atacar() {
    if (this.mana < 10) {
      throw new Error("Mana insuficiente!");
    }
    this.mana -= 10;
    return `${this.nome} lançou uma magia! 🔮 (Mana restante: ${this.mana})`;
  }
}

class Guerreiro extends Heroi {
  constructor(nome, nivel, forca = 10) {
    super(nome, nivel);
    this.forca = forca;
    this.tipo = "Guerreiro";
  }

  atacar() {
    const dano = this.forca * this.nivel;
    return `${this.nome} atacou com espada! ⚔️ (Dano: ${dano})`;
  }
}

class Arqueiro extends Heroi {
  constructor(nome, nivel, flechas = 5) {
    super(nome, nivel);
    this.flechas = flechas;
    this.tipo = "Arqueiro";
  }

  atacar() {
    if (this.flechas <= 0) {
      throw new Error("Sem flechas!");
    }
    this.flechas--;
    return `${this.nome} disparou uma flecha! 🏹 (Flechas restantes: ${this.flechas})`;
  }
}

// "Interface" Combatente
function verificarCombatente(obj) {
  if (typeof obj.atacar !== "function") {
    throw new Error("Objeto não possui o método atacar()");
  }
  if (typeof obj.getStatus !== "function") {
    throw new Error("Objeto não possui o método getStatus()");
  }
}

// Grimório
const grimorio = {
  herois: [],

  adicionarHeroi(heroi) {
    verificarCombatente(heroi);
    this.herois.push(heroi);
    renderizar();
  },

  salvar() {
    localStorage.setItem("grimorio", JSON.stringify(this.herois));
  },

  carregar() {
    const dados = JSON.parse(localStorage.getItem("grimorio")) || [];
    this.herois = dados.map(h => {
      switch (h.tipo) {
        case "Mago":
          return new Mago(h.nome, h.nivel, h.mana);
        case "Guerreiro":
          return new Guerreiro(h.nome, h.nivel, h.forca);
        case "Arqueiro":
          return new Arqueiro(h.nome, h.nivel, h.flechas);
        default:
          throw new Error("Tipo desconhecido ao carregar.");
      }
    });
    renderizar();
  },

  buscarPorNome(nome) {
    const heroi = this.herois.find(h => h.nome === nome);
    if (!heroi) {
      throw new Error("Herói não encontrado!");
    }
    return heroi;
  }
};
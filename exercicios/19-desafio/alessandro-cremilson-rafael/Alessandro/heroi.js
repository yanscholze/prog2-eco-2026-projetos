class Heroi {
    constructor(nome, nivel, pontosDeVida) {
        if (!nome || nome.trim() === '') {
            throw new Error("É necessário dar um nome ao seu heroi!!!!");
        }
        
        this.nome = nome;
        this.nivel = nivel;
        this.pontosDeVida = pontosDeVida;
        this.tipo = "Heroi";
    }
    
    getStatus() {
        return `Nome: ${this.nome} | Nivel: ${this.nivel} | HP: ${this.pontosDeVida}`;
    }
}

class Mago extends Heroi {
    constructor(nome, nivel, pontosDeVida, mana) {
        super(nome, nivel, pontosDeVida);
        this.mana = mana;
        this.tipo = "Mago";
    }
    
    atacar() {
        if (this.mana <= 0) {
            throw new Error(`${this.nome} não tem mana!`);
        }
        this.mana -= 10;
        return `${this.nome} lança bola de fogo! Mana restante: ${this.mana}`;
    }
}

class Guerreiro extends Heroi {
    constructor(nome, nivel, pontosDeVida, forca) {
        super(nome, nivel, pontosDeVida);
        this.forca = forca;
        this.tipo = "Guerreiro";
    }
    
    atacar() {
        if (this.forca <= 0) {
            throw new Error(`${this.nome} está sem força!`);
        }
        const dano = this.forca * this.nivel;
        return `${this.nome} atacou com força ${this.forca}! Dano causado: ${dano}`;
    }
}

class Arqueiro extends Heroi {
    constructor(nome, nivel, pontosDeVida, flechas) {
        super(nome, nivel, pontosDeVida);
        this.flechas = flechas;
        this.tipo = "Arqueiro";
    }
    
    atacar() {
        if (this.flechas <= 0) {
            throw new Error(`${this.nome} está sem flechas!`);
        }
        this.flechas -= 1;
        return `${this.nome} disparou uma flecha certeira! Flechas restantes: ${this.flechas}`;
    }
}

// Função verificarCombatente - simula interface
function verificarCombatente(obj) {
    if (typeof obj.atacar !== 'function') {
        throw new Error('Método atacar() não encontrado!');
    }
    if (typeof obj.getStatus !== 'function') {
        throw new Error('Método getStatus() não encontrado!');
    }
}

// Objeto grimório
const grimorio = {
    herois: [],
    
    adicionarHeroi(heroi) {
        verificarCombatente(heroi);
        this.herois.push(heroi);
    },
    
    salvar() {
        const heroesData = this.herois.map(heroi => ({
            nome: heroi.nome,
            nivel: heroi.nivel,
            pontosDeVida: heroi.pontosDeVida,
            tipo: heroi.tipo,
            mana: heroi.mana,
            forca: heroi.forca,
            flechas: heroi.flechas
        }));
        localStorage.setItem('grimorio', JSON.stringify(heroesData));
    },
    
    carregar() {
        const data = localStorage.getItem('grimorio');
        if (!data) return;
        
        const heroesData = JSON.parse(data);
        this.herois = [];
        
        heroesData.forEach(heroiData => {
            let heroi;
            switch(heroiData.tipo) {
                case 'Mago':
                    heroi = new Mago(heroiData.nome, heroiData.nivel, heroiData.pontosDeVida, heroiData.mana || 0);
                    break;
                case 'Guerreiro':
                    heroi = new Guerreiro(heroiData.nome, heroiData.nivel, heroiData.pontosDeVida, heroiData.forca || 0);
                    break;
                case 'Arqueiro':
                    heroi = new Arqueiro(heroiData.nome, heroiData.nivel, heroiData.pontosDeVida, heroiData.flechas || 0);
                    break;
            }
            if (heroi) {
                console.log('Carregando herói:', heroi);
                this.herois.push(heroi);
            }
        });
    },
    
    buscarPorNome(nome) {
        const heroi = this.herois.find(h => h.nome === nome);
        if (!heroi) {
            throw new Error(`Herói '${nome}' não encontrado!`);
        }
        return heroi;
    }
};








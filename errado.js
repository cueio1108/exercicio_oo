function Filme(nome) {
    this.nome = nome;
    this.generoF = function() {
        console.log(this.nome + " é um filme de ação")
    }
}

function Serie(nome) {
    this.nome = nome;
    this.generoS = function() {
        console.log(this.nome + " é uma série de aventura")
    }
}

function Info(nome, lancamento, duracao, tipo) {
    this.nome = nome;
    this.lancamento = lancamento;
    this.duracao = duracao;

    console.log(`O filme ${this.nome} foi lançado em ${this.lancamento} e tem duração de ${this.duracao}`)

    if(tipo === "Filme") {
        let filme = new Filme(nome);
        filme.generoF();
    } else if(tipo === "Serie") {
        let serie = new Serie(nome);
        serie.generoS();
    }

    Filme.call(this, nome);

    Serie.call(this, nome);
}

const filme1 = new Info("John Wick", "2014", "1h41m");

const info2 = new Info("John ", "2018", "8h41m")
info2.generoS();




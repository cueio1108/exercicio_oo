function Filme(nome, lancamento, duracao) {
    this.nome = nome;
    this.lancamento = lancamento;
    this.duracao = duracao;
    this.dizInfo = function() {
        console.log(` - ${this.nome} já vai começar, aproveite!`);
    }
}

function Acao(nome, lancamento, duracao, genero) {
    this.genero = genero;
    
    Filme.call(this, nome, lancamento, duracao)
    
    console.log(`${this.nome} foi um filme de ${this.genero} lançado em ${this.lancamento} e tem ${this.duracao}.`)
}

function Comedia(nome, lancamento, duracao, genero) {
    this.genero = genero;
    
    Filme.call(this, nome, lancamento, duracao)
    
    console.log(`${this.nome} foi um filme de ${this.genero} lançado em ${this.lancamento} e tem ${this.duracao}.`)
}

const acao1 = new Acao("John Wick", "2014", "1h41m", "ação");
acao1.dizInfo();
const comedia1 = new Comedia("Familia do bagulho", "2013", "1h50m", "comédia");
comedia1.dizInfo();
const acao2 = new Acao("O resgate", "2020", "1h56m", "ação");
acao1.dizInfo();
const comedia2 = new Comedia("Minha mãe é uma peça", "2012", "1h24m", "comédia");
comedia1.dizInfo();
//abstração - classe mãe
function Programa(nome, lancamento, duracao) {
    this.nome = nome;
    this.lancamento = lancamento;
    this.duracao = duracao;
    
    this.dizOi = function() {
        console.log(this.nome + " diz oi");
    }
}

//herdeira - classe filha
function Filme(nome, lancamento, duracao, tipo) {
    this.tipo = tipo;

    /*this.dizLancamento = function() {
        console.log(this.lancamento);
    }*/

    Programa.call(this, nome, lancamento, duracao)
}

function Serie(nome, lancamento, duracao, tipo) {
    this.tipo = tipo;

    Programa.call(this, nome, lancamento, duracao)
}

//instância de objeto
const filme1 = new Filme("john wick", 2014, "1h41m");
const serie1 = new Serie("miraculous", 2014, "5 temporadas");

//filme1.dizOi();
//filme1.dizLancamento();

//console.log(filme1 instanceof Filme)
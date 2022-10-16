//identificando os elementos que representam as abas no html
const abas = document.querySelectorAll(".aba");

//identificar os clicks na aba
abas.forEach(aba=>{
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado"))
        {return};

selecionarAba(aba)

mostrarInformacoesDaAba(aba)
})

});

function selecionarAba(aba) {
    //passo 3 ao cliclar, desmarca o outra aba
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    // passo 4 marca a aba clicada como selecionado

    aba.classList.add("selecionado")
}
function mostrarInformacoesDaAba(aba) {
    //passo 5 esconder o conteudo anterior
    const informacaoSelecionada= document 
    .querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");



    //passo 6 mostrar a aba selecionadain
const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
informacaoASerMostrada.classList.add("selecionado")
}
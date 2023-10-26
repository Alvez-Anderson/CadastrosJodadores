function calcularEstatisticas(){
    
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    const totalJogadores = jogadores.filter(t=> t.desabilitado == false)
    const suspenso = jogadores.filter(t=> t.desabilitado == true)
    const qtdeJogadores = totalJogadores.length
    const qtdeSuspensos = suspenso.length
    document.querySelector("#total").innerHTML = qtdeJogadores
    document.querySelector("#suspenso").innerHTML = qtdeSuspensos
}

calcularEstatisticas()
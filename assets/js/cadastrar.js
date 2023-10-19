document.querySelector("#botao-cadastrar").addEventListener("click", () => {
 
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || []

    console.log(jogadores)


    const jogador ={
      id: Date.now(),
        nome:document.querySelector("#nome").value,
        posicao:document.querySelector("#posicao").value,
        idade:document.querySelector("#idade").value,
        nometime:document.querySelector("#nometime").value,
        concluido:false
    }
  
  jogadores.push(jogador)
  
    localStorage.setItem("jogadores", JSON.stringify (jogadores))

    window.location.href = "index.html"
})


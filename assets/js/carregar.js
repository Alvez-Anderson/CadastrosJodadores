window.addEventListener("load", atualizar)

function atualizar(){
  document.querySelector("#lista-Jogador").innerHTML = ""
  let jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
  jogadores.forEach(jogador=> criarCard(jogador))

}

function criarCard(jogador){
const card = document.createElement("div")
card.classList.add("col", "s12", "m6", "l4")
if (jogador.desabilitado) {
  card.classList.add("disabled");
}
card.innerHTML = `
  <div class="card">
    <div class="card-image">
    </div>
    <div class="card-content">
    <span class="card-title">Nome: ${jogador.nome}</span>
      <p> Time: ${jogador.nometime}<br>
          Idade: ${jogador.idade}<br>
          Posição: ${jogador.posicao} </p>
    </div>
     <div class="card-action">
    <a href="#" class="btn red accent-4" onClick="apagar(${jogador.id})">
      <i class="material-icons">delete</i>
    </a>
    <a href="#" class="btn green" onClick="desabilitar(${jogador.id}, ${!jogador.desabilitado})">
    <i class="material-icons">do_not_disturb_alt</i>
    </a>
    </div>
      </div>
`

document.querySelector("#lista-Jogador").appendChild(card)
calcularEstatisticas()

}


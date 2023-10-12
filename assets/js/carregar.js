window.addEventListener("load", () => {
let jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
jogadores.forEach(jogador=> criarCard(jogador))
})

function criarCard(jogador){
const card = document.createElement("div")
card.innerHTML = `
<div class="card">
        <div class="card-content">
          <span class="${jogador.nome}">Nome Jogador</span>
          <p>${jogador.posicao}</p>
          <span data-badge-caption="Time" class="badge blue white-text"></span>
        </div>
        <div class="card-action">
          <a href="#"class="btn red accent-4"><i class="material-icons">delete</i>
          </a>
          <a href="#" class="btn green"><i class="material-icons">check</i>
          </a></a>
        </div>
      </div>
`

document.querySelector("#lista-Jogador").appendChild(card)



}
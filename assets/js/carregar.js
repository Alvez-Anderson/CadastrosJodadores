window.addEventListener("load", () => {
let jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
jogadores.forEach(jogador=> criarCard(jogador))
})

function criarCard(jogador){
const card = document.createElement("div")
card.classList.add("col", "s12", "m6")
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
          <a href="#"class="btn red accent-4"><i class="material-icons">delete</i>
          </a>
          <a href="#" class="btn green"><i class="material-icons">check</i>
          </a></a>
        </div>
      </div>
`

document.querySelector("#lista-Jogador").appendChild(card)



}


const botoes = document.querySelectorAll(".btn-apagar")
function apagar(id){

//buscar os dados do localstorage
const jogadorf = JSON.parse(localStorage.getItem("jogadores"))|| []


// remover a tarefa
const jogador_filtrado = jogadorf.filter(jogador => jogador.id !== id)

//salvar localstorage
localStorage.setItem("jogadores", JSON.stringify(jogador_filtrado))
atualizar()
}
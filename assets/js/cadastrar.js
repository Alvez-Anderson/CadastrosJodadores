document.querySelector("#botao-cadastrar").addEventListener("click", () => {
  const nome = document.querySelector("#nome").value;
  const posicao = document.querySelector("#posicao").value;
  const idade = document.querySelector("#idade").value;
  const nometime = document.querySelector("#nometime").value;

  if (nome.trim() === '' || posicao.trim() === '' || idade.trim() === '' || nometime.trim() === '') {
    alert("Preencha todos os campos antes de cadastrar o jogador.");
  } else {
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    const jogador = {
      id: Date.now(),
      nome: nome,
      posicao: posicao,
      idade: idade,
      nometime: nometime,
      desabilitado: false
    }

    jogadores.push(jogador)

    localStorage.setItem("jogadores", JSON.stringify(jogadores))

    window.location.href = "index.html"
  }
});


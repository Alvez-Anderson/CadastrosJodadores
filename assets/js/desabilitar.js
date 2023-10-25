function desabilitar(id, desabilitado) {
    // buscar os dados do localstorage
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  
    // buscar o jogador com o ID
    let jogador = jogadores.find(jogador => jogador.id === id);
  
    // definir o estado de desabilitado 
    jogador.desabilitado = desabilitado;
  
    // salvar no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));
  
    // atualizar a exibição
    atualizar();
  }
  
  
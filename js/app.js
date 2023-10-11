function alterarStatus(id) {
    
    let jogoSelecionado = document.querySelector(`#game-${id}`);
    let imagemJogo = jogoSelecionado.querySelector(".dashboard__item__img");
    let textoJogo = jogoSelecionado.querySelector(".dashboard__item__name");
    let botaoJogo = jogoSelecionado.querySelector(".dashboard__item__button");
    
    alert(botaoJogo.innerHTML);
    
}
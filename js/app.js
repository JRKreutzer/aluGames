function alterarStatus(id) {
    
    let jogoSelecionado = document.querySelector(`#game-${id}`);
    let imagemJogo = jogoSelecionado.querySelector(".dashboard__item__img");
    let botaoJogo = jogoSelecionado.querySelector(".dashboard__item__button");

    if (imagemJogo.classList.contains("dashboard__item__img--rented")) {
        imagemJogo.classList.remove("dashboard__item__img--rented");
        botaoJogo.textContent = "Alugar";
        botaoJogo.classList.remove("dashboard__item__button--return");
    } else {
        imagemJogo.classList.add("dashboard__item__img--rented");
        botaoJogo.textContent = "Devolver";
        botaoJogo.classList.add("dashboard__item__button--return");
    }
}
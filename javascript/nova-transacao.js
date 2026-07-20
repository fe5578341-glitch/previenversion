const botoes = document.querySelectorAll(".tipo-btn");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        // Remove a seleção de todos
        botoes.forEach(btn => btn.classList.remove("ativo"));

        // Adiciona ao botão clicado
        botao.classList.add("ativo");

    });

});
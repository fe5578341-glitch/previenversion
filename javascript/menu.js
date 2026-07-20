async function carregarMenu() {

    const resposta = await fetch("../componentes/menu.html");

    const html = await resposta.text();

    document.getElementById("menu-container").innerHTML = html;

    const menu = document.getElementById("menuLateral");
    const overlay = document.getElementById("overlay");
    const abrir = document.getElementById("abrirMenu");

    abrir.addEventListener("click", () => {
        menu.classList.add("ativo");
        overlay.classList.add("ativo");
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("ativo");
        overlay.classList.remove("ativo");
    });
    
}

document.addEventListener("DOMContentLoaded", carregarMenu);
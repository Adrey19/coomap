
// ==========================================
// MENU MOBILE
// ==========================================

const botaoMenu = document.getElementById("menu-mobile");

const menu = document.getElementById("menu");


botaoMenu.addEventListener("click", function () {

    menu.classList.toggle("ativo");

});

// ==========================================
// GALERIA - AMPLIAR IMAGEM
// ==========================================

const fotosGaleria = document.querySelectorAll(".foto-galeria img");

const visualizador = document.getElementById("visualizador");

const imagemAmpliada = document.getElementById("imagem-ampliada");

const legendaAmpliada = document.getElementById("legenda-ampliada");

const fecharVisualizador = document.getElementById("fechar-visualizador");


fotosGaleria.forEach(function (foto) {

    foto.addEventListener("click", function () {

        imagemAmpliada.src = foto.src;

        imagemAmpliada.alt = foto.alt;

        const titulo = foto
            .closest(".foto-galeria")
            .querySelector("h3")
            .textContent;

        legendaAmpliada.textContent = titulo;

        visualizador.classList.add("ativo");

    });

});


fecharVisualizador.addEventListener("click", function () {

    visualizador.classList.remove("ativo");

});
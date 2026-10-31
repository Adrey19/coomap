const botaoMenu = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        const menuAberto = menu.classList.toggle("ativo");
        botaoMenu.setAttribute("aria-expanded", String(menuAberto));
        botaoMenu.setAttribute("aria-label", menuAberto ? "Fechar menu" : "Abrir menu");
    });

    menu.querySelectorAll("a").forEach(function (link) {
        const destino = new URL(link.href, window.location.href);
        const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
        const paginaLink = destino.pathname.split("/").pop();

        if (paginaLink === paginaAtual) {
            link.setAttribute("aria-current", "page");
        }

        link.addEventListener("click", function () {
            menu.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menu.classList.contains("ativo")) {
            menu.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
            botaoMenu.focus();
        }
    });
}

document.querySelectorAll(".ano-atual").forEach(function (ano) {
    ano.textContent = new Date().getFullYear();
});

const fotosGaleria = document.querySelectorAll(".foto-galeria img");
const visualizador = document.getElementById("visualizador");
const imagemAmpliada = document.getElementById("imagem-ampliada");
const legendaAmpliada = document.getElementById("legenda-ampliada");
const fecharVisualizador = document.getElementById("fechar-visualizador");

if (visualizador && imagemAmpliada && legendaAmpliada && fecharVisualizador) {
    let fotoEmFoco;

    function fecharGaleria() {
        visualizador.classList.remove("ativo");
        document.body.classList.remove("visualizador-aberto");
        if (fotoEmFoco) {
            fotoEmFoco.focus();
        }
    }

    fotosGaleria.forEach(function (foto) {
        function abrirGaleria() {
            imagemAmpliada.src = foto.src;
            imagemAmpliada.alt = foto.alt;

            const titulo = foto.closest(".foto-galeria").querySelector("h3");
            legendaAmpliada.textContent = titulo ? titulo.textContent : foto.alt;

            fotoEmFoco = foto;
            visualizador.classList.add("ativo");
            document.body.classList.add("visualizador-aberto");
            fecharVisualizador.focus();
        }

        foto.tabIndex = 0;
        foto.addEventListener("click", abrirGaleria);
        foto.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                abrirGaleria();
            }
        });
    });

    fecharVisualizador.addEventListener("click", fecharGaleria);

    visualizador.addEventListener("click", function (event) {
        if (event.target === visualizador) {
            fecharGaleria();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && visualizador.classList.contains("ativo")) {
            fecharGaleria();
        }
    });
}

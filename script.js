/*=========================================
            PORTFÓLIO - MARCELLE
=========================================*/

// Mensagem no console
console.log("Portfólio carregado com sucesso! 🚀");

// ===========================
// MENU ATIVO
// ===========================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => item.classList.remove("ativo"));

        this.classList.add("ativo");

    });

});

// ===========================
// ANIMAÇÃO AO ROLAR
// ===========================

const secoes = document.querySelectorAll("section");

function revelarSecoes() {

    const alturaTela = window.innerHeight;

    secoes.forEach(secao => {

        const topo = secao.getBoundingClientRect().top;

        if (topo < alturaTela - 120) {

            secao.style.opacity = "1";
            secao.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revelarSecoes);

window.addEventListener("load", revelarSecoes);

// ===========================
// ANO AUTOMÁTICO NO FOOTER
// ===========================

const footer = document.querySelector("footer p");

const ano = new Date().getFullYear();

footer.innerHTML = `© ${ano} - Desenvolvido por Marcelle Eduarda Fernandes`;

// ===========================
// EFEITO NOS BOTÕES
// ===========================

const botoes = document.querySelectorAll(".botoes a");

botoes.forEach(botao => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "scale(1.08)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "scale(1)";

    });

});

// ===========================
// BOAS-VINDAS
// ===========================

window.addEventListener("load", () => {

    setTimeout(() => {

        console.log("Bem-vindo ao meu portfólio! 💖");

    }, 1000);

});

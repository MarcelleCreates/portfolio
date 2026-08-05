// ==============================
// PORTFÓLIO - MARCELLE EDUARDA
// ==============================

// Ano automático no rodapé
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Marcelle Eduarda Fernandes`;
}

// ==============================
// EFEITO AO ROLAR A PÁGINA
// ==============================

const sections = document.querySelectorAll("section");

function revelarSecoes() {

    const alturaTela = window.innerHeight;

    sections.forEach(secao => {

        const topo = secao.getBoundingClientRect().top;

        if (topo < alturaTela - 120) {

            secao.style.opacity = "1";
            secao.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revelarSecoes);
window.addEventListener("load", revelarSecoes);

// ==============================
// ANIMAÇÃO DOS CARDS
// ==============================

const cards = document.querySelectorAll(".projeto-card, .lista-tecnologias div");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ==============================
// EFEITO NOS BOTÕES
// ==============================

const botoes = document.querySelectorAll(".botoes a");

botoes.forEach(botao => {

    botao.addEventListener("mouseenter", () => {

        botao.style.boxShadow = "0 0 25px rgba(255,77,166,.5)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.boxShadow = "none";

    });

});

// ==============================
// SCROLL SUAVE DO MENU
// ==============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==============================
// TEXTO DIGITANDO
// ==============================

const titulo = document.querySelector(".texto h2");

const texto = "Criando interfaces modernas com tecnologia e criatividade";

let i = 0;

if (titulo) {

    titulo.textContent = "";

    function escrever(){

        if(i < texto.length){

            titulo.textContent += texto.charAt(i);

            i++;

            setTimeout(escrever,45);

        }

    }

    escrever();

}

// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "25px";
botaoTopo.style.right = "25px";
botaoTopo.style.width = "55px";
botaoTopo.style.height = "55px";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.border = "none";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.background = "#ff4da6";
botaoTopo.style.color = "#fff";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 0 20px rgba(255,77,166,.4)";

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        botaoTopo.style.display = "block";

    }else{

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==============================
// MENSAGEM NO CONSOLE
// ==============================

console.log("Portfólio desenvolvido por Marcelle Eduarda 🚀");
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

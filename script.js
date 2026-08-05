// ==============================
// PORTFÓLIO - MARCELLE EDUARDA
// ==============================


// Ano automático no rodapé

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML = `©️ ${new Date().getFullYear()} Marcelle Eduarda Fernandes`;

}



// Animação ao aparecer as seções

const sections = document.querySelectorAll("section");


function revelarSecoes(){

    const alturaTela = window.innerHeight;


    sections.forEach(secao=>{


        const topo = secao.getBoundingClientRect().top;


        if(topo < alturaTela - 120){

            secao.style.opacity = "1";

            secao.style.transform = "translateY(0)";

        }


    });


}


window.addEventListener("scroll", revelarSecoes);

window.addEventListener("load", revelarSecoes);



// Efeito nos cards

const cards = document.querySelectorAll(
    ".projeto-card, .lista-tecnologias div"
);


cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });


    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });


});



// Botões

const botoes = document.querySelectorAll(".botoes a");


botoes.forEach(botao=>{


    botao.addEventListener("mouseenter",()=>{

        botao.style.boxShadow =
        "0 0 25px rgba(236,72,153,.5)";

    });


    botao.addEventListener("mouseleave",()=>{

        botao.style.boxShadow="none";

    });


});



// Scroll suave menu

document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",function(e){


        e.preventDefault();


        const destino =
        document.querySelector(this.getAttribute("href"));


        destino.scrollIntoView({

            behavior:"smooth"

        });


    });


});



// Texto digitando

const titulo = document.querySelector(".texto h2");


if(titulo){


    const textoOriginal = titulo.textContent.trim();

    titulo.textContent="";


    let i=0;


    function escrever(){


        if(i < textoOriginal.length){


            titulo.textContent += textoOriginal.charAt(i);

            i++;

            setTimeout(escrever,45);


        }


    }


    escrever();


}



// Botão voltar ao topo


const botaoTopo = document.createElement("button");


botaoTopo.innerHTML="↑";

botaoTopo.id="topo";


document.body.appendChild(botaoTopo);



botaoTopo.style.position="fixed";

botaoTopo.style.bottom="25px";

botaoTopo.style.right="25px";

botaoTopo.style.width="55px";

botaoTopo.style.height="55px";

botaoTopo.style.borderRadius="50%";

botaoTopo.style.border="none";

botaoTopo.style.cursor="pointer";

botaoTopo.style.fontSize="22px";

botaoTopo.style.background="#ec4899";

botaoTopo.style.color="white";

botaoTopo.style.display="none";



window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        botaoTopo.style.display="block";

    }else{

        botaoTopo.style.display="none";

    }


});



botaoTopo.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



console.log("Portfólio desenvolvido por Marcelle Eduarda 🚀");

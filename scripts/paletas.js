const botaoAtualizar = document.querySelector(".grids .bx-refresh");
const divPaletas = document.querySelectorAll(".corpo-conteudo .paletas");
const textColores = document.querySelectorAll(".detalhes .texto-color");
const conteudoControlo = document.querySelectorAll(".corpo-conteudo");

//Funcao para gerar cores nas paletas
const geradorPaletas = ()=>{

    // Gerador de cores aliatorios
    const geradorCores = ()=> Math.floor(Math.random() * 0xffffff).toString(16);
    var i;
    var cor1 = geradorCores();
    var cor2 = geradorCores();
    var cor3 = geradorCores();
    var cor4 = geradorCores();
    var cor5 = geradorCores();
    var cor6 = geradorCores();
    
    for(i = 0; i < divPaletas.length; i++){
        divPaletas[0].style.backgroundColor = `#${cor1}`;
        divPaletas[1].style.backgroundColor = `#${cor2}`;
        divPaletas[2].style.backgroundColor = `#${cor3}`;
        divPaletas[3].style.backgroundColor = `#${cor4}`;
        divPaletas[4].style.backgroundColor = `#${cor5}`;
        divPaletas[5].style.backgroundColor = `#${cor6}`;
    }

    for(i = 0; i < textColores.length; i++){
        textColores[0].textContent = `#${cor1}`;
        textColores[1].textContent = `#${cor2}`;
        textColores[2].textContent = `#${cor3}`;
        textColores[3].textContent = `#${cor4}`;
        textColores[4].textContent = `#${cor5}`;
        textColores[5].textContent = `#${cor6}`;
    }
}

// Actualizar a funcao
window.onload = ()=>{
    geradorPaletas();
}

botaoAtualizar.addEventListener("click", geradorPaletas);
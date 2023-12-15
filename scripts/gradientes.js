const botaoAtualizar = document.querySelector(".grids .bx-refresh");
const divPaletas = document.querySelectorAll(".corpo-conteudo .paletas");
const textColores = document.querySelectorAll(".detalhes .texto-color");
const selectTop = document.querySelector(".menu .selecionar");

const geradorPaletas = ()=>{
    const geradorCores = ()=> Math.floor(Math.random() * 0xffffff).toString(16);
    var i;
    var cor1 = geradorCores();
    var cor2 = geradorCores();
    var cor3 = geradorCores();
    var cor4 = geradorCores();
    var cor5 = geradorCores();
    var cor6 = geradorCores();
    
    for(i = 0; i < divPaletas.length; i++){
        divPaletas[0].style.backgroundImage = `linear-gradient(to bottom, #${cor1}, #${cor2})`;
        divPaletas[1].style.backgroundImage = `linear-gradient(to bottom, #${cor2}, #${cor3})`;
        divPaletas[2].style.backgroundImage = `linear-gradient(to bottom, #${cor3}, #${cor4})`;
        divPaletas[3].style.backgroundImage = `linear-gradient(to bottom, #${cor4}, #${cor5})`;
        divPaletas[4].style.backgroundImage = `linear-gradient(to bottom, #${cor5}, #${cor6})`;
        divPaletas[5].style.backgroundImage = `linear-gradient(to bottom, #${cor6}, #${cor1})`;
    }

    for(i = 0; i < textColores.length; i++){
        textColores[0].textContent = `#${cor1}, - #${cor2}`;
        textColores[1].textContent = `#${cor2}, - #${cor3}`;
        textColores[2].textContent = `#${cor3}, - #${cor4}`;
        textColores[3].textContent = `#${cor4}, - #${cor5}`;
        textColores[4].textContent = `#${cor5}, - #${cor6}`;
        textColores[5].textContent = `#${cor6}, - #${cor1}`;
    }

}

window.onload = ()=>{
    geradorPaletas();
}

botaoAtualizar.addEventListener("click", geradorPaletas);
const btnPonto = document.querySelector("#ponto")
const btnMais = document.querySelector("#mais")
const btnMenos = document.querySelector("#menos")
const btnMult = document.querySelector("#multiplicacao")
const btnDivisao = document.querySelector("#divisao")
const btnApagar = document.querySelector("#apagar")
const btnResultado = document.querySelector("#igual")
const visor = document.querySelector("#visor")

const btnNumeros = document.querySelectorAll(".numero")

let numeros = []

let visorEstatico = "";
let concat = "";



for(let i = 0; i<btnNumeros.length; i++) {
    btnNumeros[i].addEventListener("click", function() {
        concat = concat + i.toString();
        visor.textContent = concat
    });
}

btnPonto.addEventListener("click", function() {
    concat = concat + "."
    visor.textContent = concat
});

btnApagar.addEventListener("click", function() {
    concat = concat.slice(0, -1); 
    visor.textContent = concat
});

btnMais.addEventListener("click", function() {
    if(concat.at(-1) != "+" && concat.at(-1) != "-" && concat.at(-1) != "/" && concat.at(-1) != "*" && concat.at(0) != null) {

        concat = concat + "+"

        visor.textContent = concat
    }
    
});

btnMenos.addEventListener("click", function() {
    if(concat.at(-1) != "-") {

        concat = concat + "-"

        visor.textContent = concat
    }
});

btnMult.addEventListener("click", function() {
    if(concat.at(-1) != "+" && concat.at(-1) != "-" && concat.at(-1) != "/" && concat.at(-1) != "*" && concat.at(0) != null) {

        concat = concat + "*"

        visor.textContent = concat
    }
});

btnDivisao.addEventListener("click", function() {

    if(concat.at(-1) != "+" && concat.at(-1) != "-" && concat.at(-1) != "/" && concat.at(-1) != "*" && concat.at(0) != null)  {

        concat = concat + "/"

        visor.textContent = concat
    }
});

btnResultado.addEventListener("click", function() {
    if (eval(concat) != concat) {
        visor.textContent = eval(concat)
        concat = ""
    }   
});


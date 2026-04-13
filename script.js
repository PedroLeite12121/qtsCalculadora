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


let concat = "";



btnNumeros.forEach(btn => {
    btn.addEventListener("click", function() {
        concat += this.textContent;   
        visor.textContent = concat;
    });
});

btnPonto.addEventListener("click", function() {
    //basicamente procura um . seguido de um número, se esse número tiver outro ponto dentro dele, impede a ação
    if (/\.\d*$/.test(concat)) {
        return;   
    }

    if (concat === "" || /[+\-*/]$/.test(concat)) {
        concat += "0.";    
    } else {
        concat += ".";
    }

    visor.textContent = concat;
});
btnApagar.addEventListener("click", function() {
    concat = concat.slice(0, -1); 
    visor.textContent = concat
});

btnMais.addEventListener("click", function() {
    if(concat.at(-1) != "+" && concat.at(-1) != "/" && concat.at(-1) != "*" && concat.at(0) != null) {
        if(concat.at(-1) == "-") {
            concat = concat.slice(0, -1); 
            concat = concat + "+"
        }
        else{
            concat = concat + "+"
        }


        visor.textContent = concat
    }
    
});

btnMenos.addEventListener("click", function() {
    if(concat.at(-1) != "-") {
        if(concat.at(-1) == "+") {
            concat = concat.slice(0, -1); 
            concat = concat + "-"
        }
        else{
            concat = concat + "-"
        }
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


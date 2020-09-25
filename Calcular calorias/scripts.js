function escuro(){
    let body = document.getElementById("fundo");
    let sd = document.getElementById("saida");
    let pg = document.getElementById("txt");
    pg.style.color = "white";
    sd.style.color = "white";
    body.style.backgroundColor = "black";
    HTMLButtonElement.style.color = "red";

   
}
function claro(){
    let body = document.getElementById("fundo");
    let sd = document.getElementById("saida");
    let pg = document.getElementById("txt");
    pg.style.color = "black";
    sd.style.color = "black";
    body.style.backgroundColor = "white";
   
}

function calcular(){


    var peso = Number(document.getElementById("peso em Kg").value);
    var altura = Number(document.getElementById("altura em cm").value);
    var idade  = Number(document.getElementById("idade").value);
    var tmb = (0);
    var saida = document.getElementById("saida");
   
    
    tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    saida.innerHTML = 'A sua taxa metabolia basal é de:' (peso * 10) + (altura * 6.25) - (idade * 5) + 5;
}
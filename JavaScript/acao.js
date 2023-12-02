window.onload = Inicio
var cont = 0
var temporizador
//var index = [1,2,3,4]

function AutomaticoFoto(){

    temporizador =  setInterval(Go, 2000)
}


var titulo = document.querySelector("h2")
var preco = document.querySelector("h4")
var botaoCame = document.getElementById("btnCame")
var botaoGo = document.getElementById("btnGo")
var tela = document.getElementById("tela")

function Inicio(){
    
    botaoCame.onclick = Came
    botaoGo.onclick = Go
    Atualizar()
    AutomaticoFoto()
}

function Came(){

    cont--;

    // se o cont for menor que 0 mostra o ultimo ou seja o a imagem 3
    if(cont < 0){
      cont = 3;
    }
    
    Atualizar()
    clearInterval(temporizador)
    AutomaticoFoto()
}

function Go(){
    cont++;

    // se o cont for maior que 3 reinicia o carrossel
    if(cont > 3){
      cont = 0
    }
    
    Atualizar()
    clearInterval(temporizador)
    AutomaticoFoto()
}

function Atualizar(){
    //alert(cont);

    var caminho = "./Imagens/toalhabanho.jpeg"
    if (cont > 0 && cont < 4) {
        caminho = "./Imagens/toalhabanho"+cont+".jpeg"
    }

    tela.src = caminho
}


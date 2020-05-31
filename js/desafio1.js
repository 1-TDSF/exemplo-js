function acende(nome){
  nome.src = "./img/lampada-on.gif";
}

function apagada(nome){
  nome.src = "./img/lampada.gif";
}

// OI TIO PHILL

function cores(nome){
  if (nome.name == "Verde") {
    nome.style.backgroundColor = "green";
  }else if(nome.name == "Vermelho"){
    nome.style.backgroundColor = "red";
  }
}

/*
ALALALA
colombiana
TCHAU
 */

function teste(){
  document.getElementById('resultado').innerHTML = "Esse texto foi inserido pelo JavaScript...";
}

function teste2(){
  document.getElementById('resultado').innerHTML = "Esse texto foi inserido pela Larissah";
}

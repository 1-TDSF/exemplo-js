// Desafio 4
function acender(element){
    element.src = "./img/lampada-on.gif";
}
function apagar(element){
    element.src = "./img/lampada.gif";
}
// Desafio 5
// Comentário de uma linha

// Desafio 6
function cor(element){
    if(element.name == "verde"){
        element.style.backgroundColor = "green";
    }else if(element.name == "vermelho"){
        element.style.backgroundColor = "red";
    }else{
        element.style.backgroundColor = "blue";
    }
}
/*
*
Desafio de número 7, comentário de varias linhas no JavaScript
*
*/
// Desafio 8
function insereDiv(){
    document.getElementById("resultado").innerHTML = "Esse texto foi inserido pelo JavaScript...";
}

// Desafio 9
function insereDiv2(){
    document.getElementById("resultado").innerHTML = "Exercício 9";
}
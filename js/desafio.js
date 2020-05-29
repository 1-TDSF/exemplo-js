// Desafio 5

function acende(elem){
    elem.src = "./img/lampada-on.gif";
}

function apaga(elem){
    elem.src = "./img/lampada.gif";
}

// Desafio 6

function cor(elem){
    if(elem.name == "verde"){
        elem.style.backgroundColor = "green";
    }else if(elem.name == "vermelho"){
        elem.style.backgroundColor = "red";
    }else{
        elem.style.backgroundColor = "blue";
    }
}

/*
*
Comentário de várias linhas no desafio 7 Javascript.
*
*/

function insereDiv(){
    document.getElementById('ex').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}
function insereDiv2(){
    document.getElementById('ex').innerHTML = "Exercício 9:"
}

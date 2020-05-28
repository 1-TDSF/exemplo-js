
//Trabalhar com operadores aritméticos.

//Declarando variáveis
var nr1 = 2;
var nr2 = 2;

//EXEMPLO de ADIÇÃO
console.log("Resultado da Operação : " + (nr1+nr2));

//EXEMPLO de SUBTRAÇÃO
console.log("Resultado da Operação : " + (nr1-nr2));

//EXEMPLO de MULTIPLICAÇÃO
console.log("Resultado da Operação : " + (nr1*nr2));

//EXEMPLO de DIVISÃO
console.log("Resultado da Operação : " + (nr1/nr2));

//EXEMPLO de MÓDULO
console.log("Resultado da Operação : " + (nr1 % nr2));


// Utilização de estrutura condicional
//IF / ELSE / ELSE IF ?

//Comparar o valor das variáveis com IF/ELSE
var str = "10";
var nr  = 10;
//Isso vai dar true
if(nr == str){
  console.log(true);
}else{
  console.log(false);
}
//Agora comparando com o operador ESTRITO (===)
//Isso vai dar false
if(nr === str){
  console.log(true);
}else{
  console.log(false);
}

//JAVASCRIPT não é tipada.
nr = str;
console.log("Valor de nr: " + nr);

//Determinando 'numeros pares ou impares com IF ternário
var n1,n2;
n1 = 2323232111;
n2 = 9;
var result = (n1/n2) % 2 ? "IMPAR" : "PAR";
console.log("O número é - " + result);

//Operador de desigualdade
var nome1 = "Alexandre"
var nome2 = "Alex"
if (nome1 != nome2) {
  console.log("Os nomes são diferentes!");
}else {
  console.log("Os nomes são iguais!");
}

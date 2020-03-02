
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //console.log()
    //alert("Obrigado por clicar.")
}

function redirecionar(){
    window.open("https://www.google.com/");
    //window.location.href="https://www.google.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")    
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)

}

//FUNCTION
/*
function soma(n1,n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    

    if (idade >=18){
        validar = true
    }else{
        validar = false
    }

    return validar;
}   

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(soma(5,10));
*/


//DATA
/*
var d = new Date();
alert(d.getDate());
alert(d.getDay()+1);
alert(d.getFullYear());
alert(d.getMonth()+1);
alert(d.getMinutes()+1);
console.log(d.getDate());
console.log(d.getDay()+1);
console.log(d.getFullYear());
console.log(d.getMonth());
*/

//LAÇOS DE REPETIÇÃO
//WHILE
/*var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/
//FOR
/*
var count;
for (count=1;count <= 5;count++){
    alert(count);
    console.log(count);
}
*/


//CONDICIONAIS
/*
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("Maior de idade.");
}else{
    alert("Menor de idade.");
};
*/

//LISTA DE DICIONARIOS
/*var frutas = [ {nome:"maça", cor:"vermelho"}
              ,{nome:"uva", cor:"roxo"} ]
console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[0].cor);
*/

//DICIONARIO
/*var fruta = {nome:"maça", cor:"vermelho"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/



// LISTA
/*   
var lista = ["maça","pera","laranja"];

//lista.push("uva");
//lista.pop();

console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));
*/



/*
var nome   = "Gabriel Resende";
var n1  = 5;
var n2 = 3;
var frase  = "Japão é o melhor time do mundo.";

//alert(nome + " tem " + idade +" anos.");
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toLocaleUpperCase());
*/

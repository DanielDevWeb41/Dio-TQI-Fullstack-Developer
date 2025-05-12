//Tipos primitivos

//boolean - valor booleano: verdadeiro ou falso
var VouF = false;
console.log(typeof VouF);

//number - valor numerico
var numeroQualquer = 1;
console.log(typeof numeroQualquer)

//string -"texto" 
var nome = 'daniel'
console.log(typeof nome); 



// como declarar
var variavel;
console.log(variavel);


let variavel2 = 'daniel';
variavel2 = 'ricardo'
console.log(variavel2);


const constante = 'rabanete';
console.log(constante);


//ESCOPO GLOBAL E LOCAL EXEMPLOS

var escopoGlobal = 'global';
console.log(escopoGlobal);

// AQUI NÃO VAI APARECE NO CONSOLE DO NAVEGADOR
/*
    function escopoLocal() {
        let escopoLocalInterno = 'local';
    }

    console.log(escopoLocalInterno);
*/

// AQUI VAI APARECE
function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();





//atribuição - ==
var atribuição = 'joão';

//Comparação - ==
var comparcao = '0' == 0;

//Comparação Identica - ===
var comparacaoIdentica = '0' === 0;
// console.log(comparacaoIdentica);


//adicao
var adicao = 1 + 1;
console.log(adicao);

// subtração
var subtrcao = 5 - 4;
console.log(subtrcao);

//Multiplicação
var multiplicacao = 10 * 10;
console.log(multiplicacao);

//divisão real
var divisao = 80 / 8;
console.log(divisao);

// divisão inteira - é o resto da divisão o que sobra
var divisaoInteira = 60 % 7;
console.log(divisaoInteira);

//Potenciação
var pontenciacao = 20 ** 2;
console.log(pontenciacao);



//maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);



//menor que 
var menorQue = 8 < 5
console.log(menorQue);


//maior ou igual a
var maiorOuIgual = 40 >= 40;
console.log(maiorOuIgual);

var maiorOuIgual2 = 80 >= 20;
console.log(maiorOuIgual2);


//menor ou igual a
var menorOuIgual = 90 <= 50;
console.log(menorOuIgual);

var menorOuIgual2 = 90 <= 90;
console.log(menorOuIgual2);



// && “e”
var e = true && false;
console.log(e);


// || - “ou”
var ou = true || false
console.log(ou);

// ! - "não"
var nao = !true;
console.log(nao);









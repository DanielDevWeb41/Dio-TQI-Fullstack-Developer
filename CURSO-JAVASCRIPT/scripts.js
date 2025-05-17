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


// Vetores ou Arrays

/* let array = ['string',1, true ];
console.log(array); */ 

//pode guardar vários tipos de dados
let array1 = ['string', 1, true, ['array2'], ['array3'], ['array4']];
//console.log(array1);

//ForEach
// array1.forEach(function(item, index){console.log(item, index)});


//push 
/* array1.push(1);
console.log(array1) */


//pop
/* array1.pop();
console.log(array1); */


//shift
/* array1.shift();
console.log(array1) */


// unshift
/* array1.unshift("novo item");
console.log(array1) */


//indexOf 
//console.log(array1.indexOf (true));


//splice
/* array1.splice(0, 3);
console.log(array1) */ 


//slice
/* let novoArray = array1.slice(0, 3);
console.log(novoArray); */ 



//OBJETOS
/* let object = {String: 'string', Number: 1, Boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};

console.log(object.objectInterno)

var string = object.String;
console.log(string);

var array = object.array;
console.log(array);

var { String, Boolean, objectInterno} = object;
console.log(String, Boolean, objectInterno); */ 



// Estruturas condicionais

        // Estruturas de decisão
        var jogador1 = -1;
        var jogador2 = 0
        var placar;

        /* if (jogador1 > 0) {
            console.log('jogador 1 marcou ponto');
        } else if(jogador2 > 0) {
            console.log('jogador 2 marcou ponto')
        } else {
            console.log('Ninguém marcou ponto')
        } */

            //ninho de IF
            if (jogador1 !== -1)
                if (jogador1 > 0) {
                    console.log('jogador 1 marcou ponto');
                } else if(jogador2 > 0) {
                    console.log('jogador 2 marcou ponto')
                } else {
                    console.log('Ninguém marcou ponto')
                } 





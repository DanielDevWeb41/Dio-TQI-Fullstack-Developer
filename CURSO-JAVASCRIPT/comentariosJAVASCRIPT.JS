/*
    BOAS PRÁTICAS BÁSICAS NO JS ->
    EXTERNAR O SCRIPT EX:
    <script src="lugar aonde está o script.js"></script>

    Carregar o script ao final do body no html
*/



// Entendendo variáveis e seus valores

/*
    <- Tipagem ->
        A tipagem funciona como uma regra de uso de dados, quanto
        mais forte for a tipagem, mais obrigatório é a declaração do tipo
        de dado.
        A tipagem em JavaScript é fraca, a declaração dos dados acontece
        de modo dinâmico.

        Ex.: Ao criarmos uma variável com valor entre aspas (“valor”) o
        JavaScript já converte o dado para o tipo String.

        Ex.: var numero = 1;
        o JavaScript já converte o valor 1 para o tipo Number.




    <- Declaração de váriaveis ->

        Tipos primitivos

        As variáveis em JavaScript podem guardar tipos de dados que
        chamamos de tipos primitivos

        Variáveis podem guardar valores dos tipos: Boolean; null;
        undefined; Number; String; Array; Object; Function.



        O que são variáveis?
        São dados que variam.
        Imagina uma caixa, tu pode colocar quase qualquer coisa dentro
        dela, pode ser uma lista de nomes, cartões com números, objetos
        no geral...

        Variáveis funcionam dessa forma
        Como uma caixa que guarda valores



        Declaração de variáveis
        Existem 3 modos de declarar as variáveis em JavaScript:

        var – escopo global e local, pode ter seu valor alterado, se não
        tiver um valor inicial será tratada como null;

        let – escopo local de bloco, pode ter seu valor alterado, se não
        tiver um valor inicial será tratada como null;

        const – escopo local de bloco, somente leitura, o valor inicial é
        obrigatório e não pode ser alterado.



        Escopo
        O escopo em JavaScript define a limitação e visibilidade de um bloco de código.

        Escopo global – quando a variável é declarada fora de qualquer
        bloco, sua visibilidade fica disponível em todo o código.

        Escopo local – quando a variável é declarada dentro de um bloco,
        sua visibilidade pode ficar disponível ou não.



        Regras de Uso de Variáveis
        Iniciar com letras, underscore _ ou cifrão $; Não iniciar com número.
        Ex.: var 1nome ❌
        var nome || var _nome ✔


        Não usar espaços (use o camelCase ou _); 
        Ex.: var nome completo ❌
        var nomeCompleto || var nome_completo✔

        camelCase é que se você quer declarar alguma variavel com nome composto vai ser obrigatório a segunda letra do nome composto ser maiuscula ex: nomeCompleto


        Não usar palavras reservadas;
        Ex.: var function ❌

        Declarar variáveis no topo do bloco de código.




    <- Diferenças entre atribuição comparação e comparação idêntica ->

        Atribuição
        O sinal de igualdade “=“ em JavaScript, significa atribuição.

        Ex.:
        como declarar: var nome = “meu nome”;
        como ler: variável nome recebe o valor meunome;


        Comparação
        Para fazermos uma comparação de valores em JavaScript usamos
        “==“.

        Ex.:
        como declarar: "0" == 0; ;
        como ler: “0” tem o valor igual a 0?

        nesse caso retorna true


        Comparação idêntica
        Para fazermos uma comparação de valores e tipos em JavaScript
        usamos “===“.

        Ex.:
        como declarar: "0" === 0; ;
        como ler: “0” tem o valor e o tipo idêntico a 0?

        nesse caso retorna false

    <- Operadores aritméticos relacionais e lógicos ->

        Operadores aritméticos
        São tipos de operadores matemáticos com valor numérico:

        • + adição;
        • - subtração;
        • * multiplicação;
        • / divisão real;
        • % divisão inteira;
        • ** potenciação;


        Operadores relacionais
        São tipos de operadores que consultam a relação entre valores:

        • > maior que;
        • < menor que;
        • >= maior ou igual a;
        • <= menor ou igual a;


        Operadores lógicos
        São tipos de operadores que consultam valores lógicos:

        • && - “e” – considera que todos os valores sejam true;
        • || - “ou” – considera que qualquer valor seja true;
        • ! - “não” – inverte o valor de true para false ou vice-versa;

*/



//Vetores e Objetos

/* 
    O QUE SÃO VETORES 
        Vetores ou arrays
        Arrays são um tipo de lista, ou matriz de variáveis, onde cada
        variável possui um índice. Os valores podem ser de vários tipos.

        Imagina que um array é uma caixa com várias outras caixas dentro
        e cada uma contendo algum valor;



        Array
        O array deve ser declarado entre colchetes “[]”, e podem guardar
        qualquer valor dentro de seus índices: inclusive outros arrays.

        Ex.: let array = ['string', 1, true, false, [‘array1], [‘array2’]...]

        Obs.: O índice só é acessado por um número inteiro, onde 0 é o
        primeiro índice. Cada índice é separado por vírgula.



        Manipulando Arrays
        Ao ser declarado, o Array traz consigo uma série de métodos para
        manipulá-lo.

        • forEach() – itera um array;
        • push() – add item no final do array;
        • pop() – remove item no final do array;
        • shift() – remove item no início do array;
        • unshift() – add item no início do array;
        • indexOf() – retorna o índice de um valor;
        • splice() – remove ou substitui um item pelo índice;
        • slice() – retorna uma parte de um array existente;
    
    
    O QUE SÃO Objetos
        
        Objetos
        Dados que possuem propriedades e valores que definem suas
        características. Deve ser declarado entre chaves “{}”.

        Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários
        tamanhos e funções(quero cafééé). Pode ser declarada assim:

        var xicara = {
            cor: ‘azul’,
            tamanho: ‘p’,
            funcao: tomarCafe()
        }


        Manipulando objetos
        As propriedades de ojbetos podem ser atribuídas à variáveis,
        facilitando a manipulação do objeto. Chamamos isso de
        desestruturação.

        Ex.: var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}

        var cor = xicara.cor;
        var tamanho = xicara.tamanho;
        var funcao = tomarCafe();

        Outra forma de fazer a desestruturação é utilizando chaves ao
        declarar a variável:

        Ex.: var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}

        var { cor, tamanho, funcao } = xicara;

*/



// ESTRUTURAS CONDICIONAIS

/* 
    Estruturas condicionais

        São instruções para realizar determinadas tarefas a partir de uma
        condição, seja de decisão ou repetição;

        Ex.: Um jogo precisa mudar o placar toda vez que um jogador
        marca pontuação;
    
    Estruturas de decisão
        Podemos usar as palavras reservadas “if” para estabelecer uma
        condição:
            Ex.: var jogador1 = 0;
            var jogador2 = 0;

            if (jogador1 > 0) {
            console.log(‘jogador1 marcou ponto’);
            }


        como ler: se o jogador1 tiver valor maior que 0
        ele marcou ponto.

        else
        No caso de a condição não ser atendida podemos usar o “else” :
            Ex.: var jogador1 = 1;
            var jogador2 = 0;

            if (jogador1 > 0) {
                console.log(‘jogador1 marcou ponto’);
            } else {
                console.log(‘ninguem marcou ponto’);
            }


        else if
        Caso haja mais de uma condição usamos o “else if“.
            Ex.: var jogador1 = 1;
            var jogador2 = 0;

            if (jogador1 > 0) {
                console.log(‘jogador1 marcou ponto’);
            } else if (jogador2 > 0) {
                console.log(‘jogador2 marcou ponto’);
            } else {
                console.log(‘ninguém marcou ponto);
            }


        ninho de if
        Podemos também usar o “if” dentro de um outro “if”, chamamos
        isso de aninhamento de if’s ou ninho de if’s.
            Ex.: if (jogador1 = -1) {
            if (jogador1 > 0) {
                console.log(‘jogador 1 marcou ponto’);
            } else {
                console.log(‘ninguém marcou ponto’);
            }
            } else {
                console.log(‘jogador inválido’);
            }


        If ternário
        Podemos também fazer uma verificação em uma única linha
        usando o “if” ternário:

            Ex.: [condição] ? [instrução1] : [instrução2];

            jogador1 > 0 ? console.log(‘marcou ponto’) : console.log(‘não
            marcou ponto”);


        lembre de usar a interrogação “?” e dois pontos “:”


        Usando switch/case 
        O “switch/case” funciona como uma estrutura condicional
        também;

            Ex.: switch (${expressao}) {
                case 1:
                ${instrucao};
                    break;
                case 2:
                ${instrução};
                    break;
                }
    Estruturas de repetição

        Laços de repetição
        São estruturas condicionais que repetem uma instrução até atingir
        determinada condição:

            • For;
            • For/in;
            • For/of;
            • While;
            • Do/while;
        
        For
        Funciona como uma repetição de instrução até que a condição
        seja falsa:

            for ([expressaoInicial]; [condicao]; [incremento]) {
            declaracao }

            Ex.: var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

            for (let i = 0; i < array.length; i++) {
            console.log(i);
            }
        
        For/in
        Funciona como uma repetição a partir de uma propriedade:

            for ([indice] in [objeto ou array]) {
            declaracao }

            Ex.: var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

            for (i in array) {
            console.log(i);
            }

        For/of
        Funciona como uma repetição a partir de um valor:

            for ([indice] of [array]) {
            declaracao }

            Ex.: var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

            for (i of array) {
            console.log(i);
            }

        For/of
        O For/of não funciona com objetos pois as propriedades variam,
        diferentes do índice em um array que sempre serão números
        inteiros.

        Mas e se eu quiser pegar o valor mesmo assim?
            Ex.: for (i of object.propriedade) {
            console.log(i);
            }

        porém cada caractere dentro do valor será
        Impresso em linhas separadas.


        While
        Executa uma instrução “enquanto” determinada condição for
        verdadeira, a verificação é feita antes da execução;

            Ex.: var a = 0;
            while (a < 10) {
            a++;
            console.log(a);
            }

        como ler: enquanto a variável a for menor que 10 ela
        vai receber mais um e imprimir no console.


        Do/while
        Executa uma instrução “até que” determinada condição seja falsa,
        a verificação é feita depois da execução;
            Ex.: var a = 0;
            do {
            a++;
            console.log(a);
            } while (a < 10)

        como ler: a variável a vai receber mais um e imprimir
        no console até que seu valor chegue a 10
*/
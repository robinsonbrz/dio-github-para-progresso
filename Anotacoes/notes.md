Sintaxe Básica em JavaScript
Instrutora Diana Martine

Glossário – 
developer.mozilla.org/pt-BR/docs/Glossary/JavaScript

O que é o JavaScript –
developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript


Repositório do curso
github.com/DianaMartine/curso-dio-sintaxe-basica-javascript

Variáveis podem guardar valores dos tipos: Boolean; null;
undefined; Number; String; Array; Object; Function.



**var** – escopo global e local, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;


**let** – **escopo local de bloco**, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;

**const** – escopo local de bloco, somente leitura, o valor inicial é
obrigatório e não pode ser alterado.


JavaScript - camelCase

Comparação idêntica valor e tipo

Slides aula 02
https://drive.google.com/file/d/13lpV1BvcbScdyRy_n9_VCZpOkgyAVAD4/view


Tipagem –
https://danvitoriano.medium.com/tipagem-dinâmica-no-javascrip
t-e3551a445b38
Variáveis –
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/
Grammar_and_types
Escopo –
https://imasters.com.br/desenvolvimento/escopos-em-javascript
Operadores –
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/


Manipulando Arrays

Ao ser declarado, o Array traz consigo uma série de métodos para
manipulá-lo.

```javascript
forEach()   // – itera um array; recebe função como parâmetro
push()      // – add item no final do array;
pop()       // – remove item no final do array;
shift()     // – remove item no início do array;
unshift()   // – add item no início do array;
indexOf()   // – retorna o índice de um valor;
splice()    // – remove ou substitui um item pelo índice;
slice()     // – retorna uma parte de um array existente;
```



Objetos

Dados que possuem propriedades e valores que definem suas
características. Deve ser declarado entre chaves “{}”.

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários
tamanhos e funções(quero cafééé). Pode ser declarada assim:


```javascript
var xicara = {
cor: ‘azul’,
tamanho: ‘p’,
funcao: tomarCafe()
}
```


Arrays –

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

Objetos –

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects

Desestruturação –

https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt


Aula - 05
Estruturas Condicionais

```javascript
var jogador1 = 1;
var jogador2 = 0;

if (jogador1 > 0) {
    console.log(‘jogador1 marcou ponto’);
} else if (jogador2 > 0) {
    console.log(‘jogador2 marcou ponto’);
} else {
    console.log(‘ninguém marcou ponto);
}

```


aninhamento de if’s ou ninho de if’s.
Ex.: 
```javascript
if (jogador1 = -1) {
    if (jogador1 > 0) { 
        console.log(‘jogador 1 marcou ponto’);
    } 
    else { 
            console.log(‘ninguém marcou ponto’);
    }
} 
else {
        console.log(‘jogador inválido’);
}
```



If ternário
```javascript
jogador1 > 0 ? console.log(‘marcou ponto’) : console.log(‘não
marcou ponto”);
```


Usando switch/case

O “switch/case” funciona como uma estrutura condicional
também;

Ex.: 
```javascript
switch (${expressao}) {
case 1:
    ${instrucao};
    break;
case 2:
    ${instrução};
    break;
}
```


For
```javascript
var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

for (let i = 0; i < array.length; i++) {
    console.log(i);
}
```

For/in
```javascript
var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

for (i in array) {
    console.log(i);
}
```

For/of
```javascript
var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]

for (i of array) {
    console.log(i);
}
```

```javascript
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}
```

```javascript
var a = 0;
do {
    a++;
    console.log(a);
} while (a < 10)
```


Estruturas condicionais –
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals

Laços de repetição –
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration


Aula 06 
Funções

```javascript

function nomeDaFuncao() {
    ${instrucao};
}

// chamando a função
nomeDaFuncao();
```

Parâmetros
```javascript
function mensagem(primeiro, segundo) {
console.log(primeiro, segundo);
}

nomeDaFuncao(“Tudo certo”, “jovem!”);
```

Funções –

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions


Aula 07 Funções

Expressões de Funções

São funções atribuídas à expressões. A nomeação das funções por
expressão é opcional:

Nos dois exemplos o resultado é o mesmo
```javascript
var funcao = function nomeDaFuncao() {
    ${instrucao};
}

var funcao = function() {
    ${instrucao};
};

```

Arrow Function

São funções de expressão de sintaxe curta. Arrow functions
sempre serão anônimas, e portanto não podem ser nomeadas.
deve ser declarada com parênteses "()", seguido de "=>" e depois
chaves "{}"

Ex. 1: 
```javascript
var funcao = () => {
    ${instrucao};
}
```

Template Strings – para usar strings junto com expressões;
```javascript
Number()    // para converter valores em números;
Prompt()    // para registrar entradas de usuário;
Alert()     // para mostrar mensagem ao usuário;

```

# Criando uma calculadora
```javascript
function calculadora() {

    // definindo as operações e pegando valor de entrada do usuário
    // usamos "\n" para fazer uma quebra de linha
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
    
    // verificando se a operação é válida
    if (!operacao ||  operacao >= 7) {
        alert('erro - operação inválida');
        calculadora();
    } else {

        // definindo variáveis
        // todas as entradas devem ser do tipo number
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        // verificando se as variáveis são válidas
        if (!n1 || !n2) {
            alert('erro - parâmetros inválidos');
            calculadora();
        } else {

            // definindo as funções
            function soma() {
                resultado = n1 + n2;

                // mostrando o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2}ª potência é ${resultado}`);
                novaOperacao();
            }

            // nova operação
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    } */

    /* // escolhendo operação
    // usand if && else
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    } */

/*     // usando switch case
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
}

calculadora(); */
```


Window.alert –
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alertTemplate 

String -
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals


```javascript
string1 = "a"
string2 = "b"

let concatenado = string1.concat(string2)
concatenado.length
concatenado2=string1 + " " + string2 

//////
let exemplo = new String("blablabla")

typeof exemplo  // "object"

concole.clear()

// string é iteravel
string1.length
concatenado = `${nome} ${sobrenome}`

concatenado = '"'

let frase = "Olá, tudo bem?"
frase.split(" ")

// a string frase não foi modificada. Temos um retorno em forma de lista.

frase.includes("tudo")  // true
frase.startsWith("O")   // false
frase.endsWith("?")     // true

frase.replace(",","!")


```



```javascript
// Math objeto nativo matemática
let fiveByThree = 5 / 3
fiveByThree //  1.66666666666667

Math.floor(fiveByThree);    // arred pra baixo
Math.ceil(fiveByThree);     // arred pra cima

// para exibir porcentagem é necessário concatenar "%" ao número
"10" + "%"
```



Boolean
```javascript

let validation = 3 === 0
validation  // false

validation.toString() // "true"


```

# Arrays
```javascript
let array = []

array.push(3)   // insere 3 na lista
array.pop( )    // tira o último valor da lista
array.shift()   // tira do primeiro elemento
array.unshift()   // insere valor no primeiro elemento da lista

// iterabilidade entre arrays
array = [1, 2, 3, 4, 5]
array2 = []
for(let i = 0; i < array.length; i++){
    array2.unshift( array[i]);
}
console.log(array);
console.log(array2);

array.reverse();

```


Objetos -> parecidos com dictionaries
```javascript
// chave valor
let obj = {};
typeof obj;

obj.name = "Julia"
obj  //  {name "Julia"}
obj.age = 20
obj  //  {name "Julia", age:20}

Object.values(obj);      // ["Julia", 20]
Object.keys(obj);        // ["name", "age"]

let person = {
    name = "Julia",
    age: 20,
    address: "Rua 2"
}

person.name     // "Julia"
person["name"]   // "Julia"
```

Empty, null e undefined
```javascript

// undefined nunca hove atribuição
let 



```


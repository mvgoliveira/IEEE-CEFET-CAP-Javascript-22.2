let soma = 1 + 3

let subtração = 1 - 3

let divisão = 4 / 2

let restoDivisão = 5 % 2

let multiplicação = 3 * 3

let exponencial = 2 ** 3

let concatenacao = "a" + "bc"

{
    //falar sobre maior igual/menor igual também
    let maior = 5 > 1; //true 
    let menor = 1 < 1; //false 

    console.log(maior, menor)
}

//verdadeiro -> explicar a diferença entre igualdade e atribuição
let verdadeiro = 2 == "2"; // comparação independente do tipo.

//falso
let falso = 2 === "2"; // comparação entre o tipo de dado e o valor.

let verdadeira = false != true
//verdadeiro -> ressaltar que qualquer coisa comparada com exceção do 0 e do " " é verdadeiro

for (let i = 0; i <= 5; i++) {
    if (i % 2 == 0) { //SE  -> alguma coisa for verdade -> realiza a ação de baixo
        console.log(i + " é par" + "\n") // falar sobre concatenação -> \n
    } else { //SENÃO
        console.log(`${i} é impar \n`) // template string
    } 
}

let i = 0;
while (i <= 5) { // repete o que está dentro do escopo até a condição ser falso
    i % 2 == 0
        ? (console.log(i + " é par" + "\n"))
        : ( console.log(`${i} é impar \n`)); // operador ternário
    
    i++;
}
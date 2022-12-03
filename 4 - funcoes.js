function soma(a, b) { // explicar -> a diferença entre as funções do JS e de outras linguagens
    return a + b
}

// explicar -> diferentes formas de se chamar uma função.
let vSoma = soma(1, 3)

console.log(vSoma);

console.log(soma(1, 4));

// as funções não exigem declaração de retorno nem argumentos.

// callback

// arrow functions

/*
    
    const subtracao = function(a, b) { return a - b }
    const subtracao = function(a, b) => a - b 
    const subtracao = (a, b) =>  return a - b
    
*/

const divisao = (a, b) => { return a / b } // retorno explícito
const subtracao = (a, b) => a - b // retorno implícito
const somaUm = a => a + 1 //menor maneira possível de escrever uma função => somente funções com 1 parâmetro
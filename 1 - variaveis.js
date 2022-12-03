/*

OBJETIVO: CRIAR UM CÓDIGO QUE RETORNE TODOS OS MEMBROS, PORJETOS E LÍDERES DA WOLFBYTE COM AS DEVIDAS INFORMAÇÕES

ESSE CODIGO NÃO SERÁ MODULARIZADO E NEM COMPACTO -> O objetivo é ser o mais didático possível

*/

//variáveis 

let membro = "Gabriel"; // declaração da variável

//falar sobre console log
console.log(membro);

// trocar o nome na variável
membro = "Marcus"

console.log(membro)

//comentar sobre o ; opcional

//falar sobre os tipos de variáveis
console.log(typeof(membro)) //função que retorna o tipo de valor que a variável contem

// boolean
console.log(typeof(membro) == "string")

// começar com o var porque não deve ser utilizado

var equipe = "Web"

console.log(equipe);

// escopo -> comparações entre let e var
// vida util das variáveis


{//delimitadores de escopo
    var lider = "Marcus"
}

console.log(lider)

{
    let projeto = "site do ramo"
}

console.log(projeto) // explicar o porque o codigo não roda nessa parte

// explicar tipos primitivos e o porque das aspas
// Tipos primitivos : String, Number, Boolean, Null, undefined,
//camel case -> corcovas do camelo
//snake case -> cobra

const nome_da_equipe = "WolfByte" // snake case
const nomeDaEquipe = "WolfByte" // camel case

nomeDaEquipe = "WolfByte" // explicar por que não é possível mudar

console.log(nomeDaEquipe);







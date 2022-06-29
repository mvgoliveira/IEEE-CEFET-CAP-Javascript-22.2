//explicar como funciona um array/vetor/lista -> uma varáveis que armazena vários valores -> No js especificar mente, que a tipagem é bem fraca

let array = [1, 2 ,3]

console.log(array[0]); //Explicar que inicia do indice 0.

// explicar o que são objetos e como eles são obtidos (consultar a bd, api, JSONs, etc)
let membro = {
    nome: "Gabriel", 
    ativo: true, 
    equipes: ["Games", "Web"]
}

//explicar o acesso a partes específicas dos array -> nome
// membro.nome
console.log(membro.nome)
// etc


let membros = [ 
    { nome: "Aaron", ativo: true, equipes: ["Web"] },
    { nome: "Andrey", ativo: false, equipes: [null] },
    { nome: "Arthur", ativo: true, equipes: ["Games", "Web"] },
    { nome: "Bruna", ativo: true, equipes: ["Games"] },
    { nome: "Carlos", ativo: true, equipes: ["Web"] },
    { nome: "Cleyton", ativo: true, equipes: ["Web"] },
    { nome: "Eric", ativo: true, equipes: ["Web"] },
    { nome: "Felipe Jandorno", ativo: true, equipes: ["Games"] },
    { nome: "Ferrari", ativo: true, equipes: ["Console", "Games"] },
    { nome: "Francesco", ativo: true, equipes: ["Web"] },
    { nome: "Gabriel Renato", ativo: true, equipes: ["Games", "Web"] },
    { nome: "Guilherme", ativo: true, equipes: ["Web"] },
    { nome: "Isaac", ativo: true, equipes: ["Console", "Games"] },
    { nome: "João", ativo: true, equipes: ["Games"] },
    { nome: "João Marcos", ativo: false, equipes: [null] },
    { nome: "Larissa", ativo: true, equipes: ["Games"] },
    { nome: "Lucas", ativo: true, equipes: ["Games"] },
    { nome: "Marcius", ativo: false, equipes: [null] },
    { nome: "Marcus Oliveira", ativo: true, equipes: ["Web"] },
    { nome: "Matheus Moura", ativo: true, equipes: ["Console"] },
    { nome: "Natália", ativo: true, equipes: ["Games"] },
    { nome: "Natan Andrade", ativo: true, equipes: ["Web"] },
    { nome: "Natan Steinbruch", ativo: false, equipes: [null] },
    { nome: "Rodrigo", ativo: true, equipes: ["Games"] },
    { nome: "Thiago André", ativo: true, equipes: ["Web"] },
    { nome: "Vinicius Leitão", ativo: false, equipes: [null] },
    { nome: "Vinícius Tavares", ativo: true, equipes: ["Games"] }
]

console.log(membros[10]) // array sempre começa no índice 0
console.log(membros.length) // retorna o tamanho do array
// explicar o forEach e que em outras linguagens é usado o for
membros.forEach(nome => console.log(nome))

// explicar que os dois tem exatamente o mesmo resultado
// em outras linguagens como C
for (let i = 0; i < membros.length; i++) {
    console.log(membros[i])
}

// Mesma coisa só que feito de outra forma
for (let membro of membros) {
    console.log(membro)
}

//comentar que os arrays em js também podem conter mais de um tipo -> apesar de não ser comum ver isso sendo usado em aplicações
let membrosAtivos = membros.filter(membro => membro.ativo) // retorna os membros ativos da equipe 

let membrosWeb = membros.filter(membro => {
    if (membro.equipes.find(equipe => equipe === "Web") === "Web") // retorno = Web
        return membro // Se retornar Web, coloca o membro dentro do membrosWeb.
});  

let nomeMembro = membros.map(membro => ({nome_do_membro: membro.nome})) //retorna os nomes dos membros

console.log(membrosWeb)
console.log(nomeMembro)
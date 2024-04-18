let pessoas = [
    {nome: 'Italo', idade: 30},
    {nome: 'Pedro', idade: 9},
    {nome: 'Ricardo', idade: 48}
]

// let pessoasComIdadeDe30Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade===30){
//         pessoasComIdadeDe30Anos.push(pessoas[i])
//     }

// }

// console.log(pessoasComIdadeDe30Anos)

let pessoasComIdadeDe30Anos = pessoas.filter(function(pessoa){
return pessoa.idade === 30
})
console.log(pessoasComIdadeDe30Anos)

//arrow function
// let pessoasComIdadeDe30Anos = pessoas.filter((pessoa)=>pessoa.idade === 30)
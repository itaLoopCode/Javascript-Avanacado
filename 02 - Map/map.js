//map ao contrario do filter, cirar um array totalmente novo

let pessoas = [
    {nome: 'Italo', idade: 30},
    {nome: 'Pedro', idade: 9},
    {nome: 'Ricardo', idade: 48}
]

// let nomeDasPessoas = []
// for(let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
// }
// console.log(nomeDasPessoas)

// let nomeDasPessoas = pessoas.map(function(pessoa){
//     return pessoa.nome + ' Tem ' +pessoa.idade + ' anos.'
// })


let nomeDasPessoas = pessoas.map((pessoa) => pessoa.nome  + ' Tem ' + pessoa.idade + ' anos.')


console.log(nomeDasPessoas)
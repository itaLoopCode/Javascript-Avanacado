// function(a, b, ...arg){
    //...
//}


//função de nome incentivarQuester recebe parametro de mensagem e array
// do array extraimos um objeto e então imprimimos o parametro mensagem + os objetos dentro do array

function incentivarQuester(mensagem, ...nomeQuesters){
    nomeQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabens por ter chegado ao módulo de javacript avançado, ', 'Italo', 'Pedro')


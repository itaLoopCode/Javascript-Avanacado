/*
    Pendente
    Realizada
    Recusada
    Estabelecida
*/


let ferverAgua =  (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return  new Promise((resolve, reject) => {
    if(chaleiraEstaNoFogao && fogaoEstaLigado){
        resolve()
    }else{console.log('É nescessário ligaar o fogão e colocar a chaleira no fogão')
reject()

}
    }) 
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false


ferverAgua (chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('Fazendo o café')
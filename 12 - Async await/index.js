let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
            console.log('é necessário colocar a chaleira no fogo e ligar o fogão, se não, seu cafezinho não vai ficar pronto nunca')
            reject()
        }
    })
}

let passarCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: café foi passado')
        resolve(true)
    })
}

let tomarOCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resolve()
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: Terminei de lavar a xícara')
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
//     .then(() => {
//         return passarCafe();
//     })
//     .then(() => {
//         return tomarOCafe();
//     })
//     .then(() => {
//         return lavarXicara();
//     })
//     .then(() => {
//         console.log('Finalizado ritual do café, vamos trabalhar!');
//     });

async function iniciarProcessoDeFerverCafe(){
const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
const cafePassado = await passarCafe(aguaFervida)
const cafeTomado = await tomarOCafe(cafePassado)
const xicaraLavada = await lavarXicara(cafeTomado)
if(xicaraLavada) console.log('Finalizado o ritual de tomar o café, vamos trabalhar')
}
iniciarProcessoDeFerverCafe()
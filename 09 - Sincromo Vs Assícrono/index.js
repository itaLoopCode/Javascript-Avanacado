setTimeout(() => {
    console.log('Água ferveu')
    passarOCafe()
}, 5000);

function colocarAguaPraFerver(params) {
    console.log('colocar agua pra ferver')
}

function prepararPraPassarOCafe(params) {
    console.log('Pegar o pó de café')
    console.log('pegar o filtro de café')
    console.log('colocar o café no filtro')
    console.log('colocar o filtro em cima da xícara')
}

function passarOCafe(params) {
    console.log('Passando o café')
}

colocarAguaPraFerver()
prepararPraPassarOCafe()

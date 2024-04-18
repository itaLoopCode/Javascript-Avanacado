// setTimeout(() => {
//     alert("Olá mundo!")
// }, 2000);

// setInterval(() => {
//     console.log('Console dentro do setTimeout')
// }, 2000);

// console.log('Console depois do setTimeout')

let idDoInterval = setInterval(() => {
    console.log('Executando a cada 2 seg.')
}, 2000);

console.log(idDoInterval)
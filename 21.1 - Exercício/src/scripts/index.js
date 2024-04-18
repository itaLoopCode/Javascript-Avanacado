async function user (){
    const response = await fetch('https://api.github.com/users/Italosilva1993')
    return await response.json()
}
console.log(await user())

// function getUserProfile(){
//     user().then(userData =>{
//     let userInfo = `<img src="${userData.avatar_url}" alt="Foto do Usuário">
//                     <div class="data">

//                     <h1>${userData.name}</h1>
//                     <p>${userData.bio}</p>
//                     </div>`
// })
// }

// getUserProfile()
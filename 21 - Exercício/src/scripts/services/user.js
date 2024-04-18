import { baseUrl } from "/DEV FULL STACK/JavaScript/Projeto Com fetch/4 -  Refatorando o código/src/scripts/variables.js";

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
      return await response.json();
    };
console.log(await getUser())
    export { getUser }
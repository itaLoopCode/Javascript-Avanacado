import { baseUrl,  } from "/DEV FULL STACK/JavaScript/Projeto Com fetch/4 -  Refatorando o código/src/scripts/variables.js";

async function getFollowers (userName) {

    const response = await fetch(`${baseUrl}/${userName}/followers`)
      return await response.json();
};

export{getFollowers}
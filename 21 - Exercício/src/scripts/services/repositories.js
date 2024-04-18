import { baseUrl, repositoriesQuantity } from "/DEV FULL STACK/JavaScript/Projeto Com fetch/4 -  Refatorando o código/src/scripts/variables.js";

async function getRepositories (userName) {

    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
      return await response.json();
};

export{getRepositories}
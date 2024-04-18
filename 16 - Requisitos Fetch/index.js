async function criarBaralhoEmbaralhado() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()

}

async function tirarCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaDoBaralho() {
    const baralho = await criarBaralhoEmbaralhado()
    const carta = await tirarCarta(baralho.deck_id)
    console.log(carta)
}

tirarUmaCartaDoBaralho()
import { pokemonData } from '../pokemonCards/pokemonData.js'
 console.log(pokemonData)
 
pokemonData.forEach((singlePoke) => {
fetch(singlePoke.url)
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    console.log(myJson)
    createPokeCard(myJson)
  })
})


  const mainContainer = document.queryselector('.container') 

  function createPokeCard(pokeData) {
      let card = document.createElement('div')
      let name = document.createElement('p')

      name.textContent = pokeData.name
      card.appendchild(name)
      mainContainer.appendchild(card)

  }
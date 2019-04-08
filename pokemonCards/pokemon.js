import {
  pokemonData
} from '../pokemonCards/pokemonData.js'
console.log(pokemonData)

pokemonData.forEach((singlePoke) => {
fetch(singlePoke.url)
.then(function (response) {
  return response.json()
 })
.then(function (myJson) {
   console.log(myJson)
   createPokeCard(matchIdToImage(myJson))
  })
})

function matchIdToImage(aPokemon) {
if (aPokemon.id < 10) {
        aPokemon.imageID = "00" + aPokemon.id
      }
      if (aPokemon.id > 9 && aPokemon.id < 100) {
        aPokemon.imageID = "0" + aPokemon.id
      }
      if (aPokemon.id > 99) {
        aPokemon.imageID = aPokemon.id
      }
      aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
  return (aPokemon)
}

function fetchSinglePokemon(id) {
  fetch('https://pokeapi.co/api/v2/pokemon/${id}/')
    .then(function (response) {
      return response.jason()
    })
    .then(function (retrievedPokemon) {
      
      createPokeCard(matchImageToID(retrievedPokemon))

    })

  const mainContainer = document.querySelector('.container')

  function createPokeCard(pokeData) {
    let card = document.createElement('div')
    let title = document.createElement('p')
    let image = document.createElement("figure")

    card.appendChild(title)
    card.appendChild(image)
    mainContainer.appendChild(card)
  }
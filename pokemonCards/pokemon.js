import {
  pokemonData
} from '../pokemonCards/pokemonData.js'
console.log(pokemonData)

//pokemonData.forEach((singlePoke) => {
//fetch(singlePoke.url)
//.then(function (response) {
//  return response.json()
// })
// .then(function (myJson) {
//   console.log(myJson)
//   createPokeCard(myJson)
//  })
//})

function fetchSinglePokemon(id) {
  fetch('https://pokeapi.co/api/v2/pokemon/${id}/')
    .then(function (response) {
      return response.jason()
    })
    .then(function (retrievedPokemon) {
      console.log(typeof(retrievedPokemon.id))
        if(retrievedPokemon.id < 10) {
          retrievedPokemon.imageID = "00" + retrievedPokemon.id
      }
      if(retrievedPokemon.id > 9 && retrievedPokemon.id < 100) {
        retrievedPokemon.imageID = "0" + retrievedPokemon.id
      }
      if(retrievedPokemon.id > 99) {
        retrievedPokemon.imageID = retrievedPokemon.id
      })
}


const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
  let card = document.createElement('div')
  let title = document.createElement('p')
  let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
  title.textContent = upperName

  card.appendChild(title)
  mainContainer.appendChild(card)

}
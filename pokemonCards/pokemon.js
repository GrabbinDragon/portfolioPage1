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
      createPokeCard(myJson)
    })
})


const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
  let card = document.createElement('div')
  card.classname = 'box'
  let title = document.createElement('p')
  let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
  title.textContent = upperName


  card.appendChild(title)
  mainContainer.appendChild(card)

}
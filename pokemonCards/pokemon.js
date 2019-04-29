import {
  pokemon
} from '../pokemonCards/pokemonData.js'

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
  let cardFront = document.createElement('div')
  cardFront.className = 'card__face'
  let figure = document.createElement('figure')
  let caption = document.createElement('figcaption')
  let image = document.createElement('img')

  caption.textContent = pokeData.name
  if(pokeData.id !== 0) {
      image.src = `pokemonPics/images/${pokeData.imageID}${pokeData.name}.png`
  }
  else {
    image.src = `pokemonPics/images/pokeEgg.png`
  }
  
  figure.appendChild(image)
  figure.appendChild(caption)
  cardFront.appendChild(figure)
  return cardFront
}

function cardBackInfo(pokeData) {
  let infoDiv = document.createElement('div')
  infoDiv.className = 'infoDiv'
  let moveOne = document.createElement('p')
  let moveTwo = document.createElement('p')
  let HP = document.createElement('p')
  let ATK = document.createElement('p')
  moveOne.textContent = pokeData.moves[1].move.name
  moveTwo.textContent = pokeData.moves[2].move.name
  HP.textContent = "Base HP = " + pokeData.stats[5].base_stat
  ATK.textContent = "Base ATK = " + pokeData.stats[4].base_stat
  infoDiv.appendChild(HP)
  infoDiv.appendChild(ATK)
  infoDiv.appendChild(moveOne)
  infoDiv.appendChild(moveTwo)
  
  return infoDiv
}

function cardBack(pokeData) {
  let cardBack = document.createElement('div')
  let backImage = document.createElement('img')
  backImage.className = 'backImage'
  backImage.src = `pokemonPics/images/pokeCardBack.jpg`
  cardBack.className = 'card__face card__face--back'
  cardBack.appendChild(backImage)
  cardBack.appendChild(cardBackInfo(pokeData))
  return cardBack
}

function createPokeCard(pokeData) {
  let scene = document.createElement('div')
  scene.className = 'scene'
  let card = document.createElement('div')
  card.className = 'card'

  card.appendChild(cardFront(pokeData))
  card.appendChild(cardBack(pokeData))

  card.addEventListener( 'click', function() {
      card.classList.toggle('is-flipped');
    })

  scene.appendChild(card)
  mainContainer.appendChild(scene)
}

pokemon.forEach(singleMon => {
  fetch(singleMon.url)
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    createPokeCard(matchIdToImage(myJson))
  })
})

function matchIdToImage(aPokemon) {
  if(aPokemon.id === 0) {
      aPokemon.imageID = 0
      aPokemon.name = "Poke Egg"
  }
  if(aPokemon.id < 10) {
      aPokemon.imageID = "00" + aPokemon.id
  }
  if(aPokemon.id > 9 && aPokemon.id < 100 ) {
      aPokemon.imageID = "0" + aPokemon.id
  }
  if(aPokemon.id > 99 ) {
      aPokemon.imageID = aPokemon.id
  }
  if(aPokemon.name === "mr-mime") {
    aPokemon.name = "mr. Mime"
  }
  let dash = aPokemon.name.indexOf('-')
  if(dash !== -1) {
    aPokemon.name = aPokemon.name.slice(0,dash)
  }
  aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
  return aPokemon
}

function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(function(response) {
      return response.json()
  })
  .then(function(retrievedPokemon) {
      createPokeCard(matchIdToImage(retrievedPokemon))
  })
}

const specificPokemonButton = document.querySelector('#fetchPokemon')

specificPokemonButton.addEventListener('click', function() {
  let pokemonID = prompt('Enter an ID of an existing pokemon (1-721):')
  fetchSinglePokemon(pokemonID)
})
//3 darts is too much!!
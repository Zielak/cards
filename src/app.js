
console.clear()

import './index.html'
import './styles.scss'


import Game from './Game'
import Card from './Card'
import Deck from './Deck'
import Hand from './Hand'
import Pile from './Pile'
import Player from './Player'



/** 
 * Add zombie-related stuff to classes
 */
Card.prototype.isZombie = function(){
  return this.suit === 'd' || this.rank === 14
}


const game = new Game({
  table: '#card-table',
  acesHigh: true,
})



/**
 * New deck of cards
 */
const deck = new Deck()

deck.x -= 50
deck.addCards( game.allCards )
deck.render({immediate: true})


/**
 * Generate all players
 */
game.players = [
  new Player(
    new Hand({
      faceUp: false,
      y: 60,
      x: config.table.width()/4,
    }),
    new Deck({
      y: 60 + config.cardSize.height,
      x: config.table.width()/4,
      faceUp: true
    })
  ),
  new Player(
    new Hand({
      faceUp: false,
      y: 60,
      x: config.table.width()/4 * 3
    }),
    new Deck({
      y: 60 + config.cardSize.height,
    x: config.table.width()/4 * 3,
      faceUp: true
    })
  ),
  new Player(
    new Hand({
      faceUp: false,
      y: config.table.height()-60,
      x: config.table.width()/4 * 3
    }),
    new Deck({
      y: config.table.height()-60 - config.cardSize.height,
      x: config.table.width()/4 * 3,
      faceUp: true
    })
  ),
  new Player(
    new Hand({
      faceUp: false,
      y: config.table.height()-60,
      x: config.table.width()/4
    }),
    new Deck({
      y: config.table.height()-60 - config.cardSize.height,
      x: config.table.width()/4,
      faceUp: true
    })
  )
]


/**
 * Prepare discard pile
 */
const discardPile = new Deck({
  faceUp: true
})
discardPile.x += 50



/**
 * Init game
 */

function initGame(){
  deck.deal(7, game.players.map(v => {
    return v.hand
  }), 10, function() {
    // Dealing is done
    discardPile.addCard(deck.topCard())
    discardPile.render()
  })
  prepareCurrentPlayer()
}



const moves = {
  zombie: true,
  action: true,
  discard: true,
  fight: false,
}
function resetMoves(){
  moves.zombie = canPlaceZombie()
  moves.action = true
  moves.discard = true
  moves.fight = hasZombie( game.currentPlayer.pile )
}

function nextPlayer(){

  // Check if player should pick cards from deck
  // if()

  // stop listening for clicks in my hand
  game.currentPlayer.hand._click = undefined

  game.nextPlayer()

  resetMoves()

  prepareCurrentPlayer()

}


// Final move, player can't do anything
deck.click( function(card) {
  if (card === deck.topCard()) {
    deck.deal(2, game.currentPlayer.hand, 100)
    nextPlayer()
  }
}, this)





function prepareCurrentPlayer(){

  // Show/hide player cards
  game.players.forEach( p => {
    p.hand.faceUp = false
    p.hand.render({immediate: true})
  })
  game.currentPlayer.hand.faceUp = true
  game.currentPlayer.hand.render({immediate: true})
  $('.card').removeClass('card-chosen')


  // Prepare his actions
  game.currentPlayer.hand.click( function(card) {
    const chosenBefore = card.el.hasClass('card-chosen')
    card.container.render()
    $('.card').removeClass('card-chosen')

    if(chosenBefore){
      stopChoosingPlayer()
      return
    }
    
    if ( card.isZombie() && canPlaceZombie() && moves.zombie ) {
      card.moveToFront()
      card.el.addClass('card-chosen')
      console.log('clicked zombie card', card)

      choosePlayer(card, () => {
        moves.zombie = false
      })
    }else if( !canPlaceZombie() ){
      console.log(`can't place zombie`)
    }

  }, this)


}



function choosePlayer(card, callback){

  game.players.forEach( p => {
    if(p !== game.currentPlayer){
      p.hand.click( function(){

        if( !hasZombie(p.pile) ){
          p.pile.addCard(card)
          p.pile.render()
          game.currentPlayer.hand.render()

          callback()
        }

      }, this)
    }
  })

}
function stopChoosingPlayer(){
  game.players.forEach( p => {
    if(p !== game.currentPlayer){
      p.hand._click = undefined
    }
  })
}


/**
 * Zombie game card functions
 */
function hasZombie(container){
  let res = false

  container.forEach( v => {
    if(v.isZombie()) res = true
  })

  return res
}

/**
 * Check other players if they don't have zombie yet
 */
function canPlaceZombie(){
  let res = false
  game.players.forEach( p => {
    if(p === game.currentPlayer) return

    if( !hasZombie(p.pile) ) res = true
  })

  return res
}



$(window).keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    e.preventDefault()
    nextPlayer()
  }
})


initGame()


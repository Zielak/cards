
console.clear()

import './index.html'
import './styles.scss'


import Game from './Game'
import Card from './Card'
import Deck from './Deck'
import Hand from './Hand'
import Pile from './Pile'
import Player from './Player'

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
    new Pile()
  ),
  new Player(
    new Hand({
      faceUp: false,
      y: 60,
      x: config.table.width()/4 * 3
    }),
    new Pile()
  ),
  new Player(
    new Hand({
      faceUp: false,
      y: config.table.height()-60,
      x: config.table.width()/4 * 3
    }),
    new Pile()
  ),
  new Player(
    new Hand({
      faceUp: false,
      y: config.table.height()-60,
      x: config.table.width()/4
    }),
    new Pile()
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
 * Init button
 */

deck.deal(7, game.players.map(v => {
  return v.hand
}), 10, function() {
  // Dealing is done
  discardPile.addCard(deck.topCard())
  discardPile.render()

  game.hideOtherCards()
})


const moves = {
  zombie: true,
  action: true,
  discard: true,
}

function resetMoves(){
  moves.zombie = true
  moves.action = true
  moves.discard = true
}
function recalculateMoves(player){
  let hand = player.hand


}


// Final move, player can't do anything
deck.click( function(card) {
  if (card === deck.topCard()) {
    deck.deal(2, game.currentPlayer.hand, 100)
    game.nextPlayer()
  }
}.bind(this))


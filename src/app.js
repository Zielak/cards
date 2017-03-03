
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




const deck = new Deck()

deck.x -= 50
deck.addCards( game.allCards )
deck.render({immediate: true})


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



const discardPile = new Deck({
  faceUp: true
})
discardPile.x += 50




$('#deal').click(function() {
  //Deck has a built in method to deal to hands.
  $('#deal').hide()

  deck.deal(7, game.players.map( v => {
    return v.hand
  } ), 10, function() {
    //This is a callback function, called when the dealing
    //is done.
    discardPile.addCard(deck.topCard());
    discardPile.render();
  })
})


deck.click( function(card) {
  if (card === deck.topCard()) {
    game.currentPlayer.hand.addCard( deck.topCard() )
    game.currentPlayer.hand.render()
  }
}.bind(this))


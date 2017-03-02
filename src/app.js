
console.clear()

import './index.html'
import './styles.scss'


import Game from './Game'
import Card from './Card'
import Deck from './Deck'
import Hand from './Hand'
import Pile from './Pile'

const cards = new Game({
  table: '#card-table'
})


const deck = new Deck()

deck.x -= 50
deck.addCards( cards.all )
deck.render({immediate: true})


const upperhand = new Hand({
  faceUp: false,
  y: 60
})

const lowerhand = new Hand({
  faceUp: true,
  y: 340
})

const discardPile = new Deck({
  faceUp: true
})
discardPile.x += 50





$('#deal').click(function() {
	//Deck has a built in method to deal to hands.
	$('#deal').hide()

	deck.deal(5, [upperhand, lowerhand], 50, function() {
		//This is a callback function, called when the dealing
		//is done.
		discardPile.addCard(deck.topCard());
		discardPile.render();
	})
})


console.clear()

import './index.html'
import './styles.scss'


import Game from './Game'
import Card from './Card'
import Deck from './Deck'
import Hand from './Hand'
import Pile from './Pile'
import Player from './Player'



function print(){
  console.log.apply(this, arguments)
}



/** 
 * Add zombie-related stuff to classes
 */
Object.defineProperty(Card.prototype, 'selected', {
  writable: true,
  value: false
})
Card.prototype.select = function(){
  this.selected = true
  this.moveToFront()
  this.el.addClass('card-selected')
  return this
}
Card.prototype.deselect = function(){
  this.selected = false
  this.el.removeClass('card-selected')
  return this
}
Object.defineProperty(Card.prototype, 'isZombie', {
  get: function(){
    return this.suit === 'd' || this.rank === 14
  }
})
Object.defineProperty(Card.prototype, 'isActionCard', {
  get: function(){
    return this.rank >= 11 && this.rank <= 13
  }
})
Object.defineProperty(Card.prototype, 'isStun', {
  get: function(){
    return this.rank === 11
  }
})
Object.defineProperty(Card.prototype, 'isHeadshot', {
  get: function(){
    return this.rank === 12
  }
})
Object.defineProperty(Card.prototype, 'isKing', {
  get: function(){
    return this.rank === 13
  }
})


// Object.defineProperty(Hand.prototype, 'isKing', {
//   get: function(){
//     return this.rank === 13
//   }
// })


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

function asdasd(){
  return 'asdasd'
}
asdasd()
console.log('creating new players')
game.players = [
  new Player(
    new Hand({
      faceUp: false,
      y: 60,
      x: config.table.width()/4,
    }),
    new Hand({
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
    new Hand({
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
    new Hand({
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
    new Hand({
      y: config.table.height()-60 - config.cardSize.height,
      x: config.table.width()/4,
      faceUp: true
    })
  )
]
console.log('new players created')


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
    updateMoves()
    prepareCurrentPlayer()
  })
}



const moves = {
  zombie: true,
  action: true,
  discard: true,
  fight: false,
}
function updateMoves(){
  moves.zombie = canPlaceZombieSomewhere()
  moves.action = hasActionCard( game.currentPlayer.hand )
  moves.discard = hasWeapon( game.currentPlayer.hand )
  moves.fight = hasZombie( game.currentPlayer.pile )
  print(
    'can',
    moves.zombie ? 'place ZOMBIE,':'',
    moves.action ? 'use ACTION card,':'',
    moves.discard ? 'DISCARD,':'',
    moves.fight ? 'FIGHT':''
  )
}

function nextPlayer(){

  // Check if player should pick cards from deck
  // if()

  // stop listening for clicks in my hand
  game.currentPlayer.hand._click = undefined

  game.nextPlayer()

  updateMoves()

  prepareCurrentPlayer()

}







function prepareCurrentPlayer(){

  // Show/hide player cards
  game.players.forEach( p => {
    p.hand.faceUp = false
    p.hand.render({immediate: true})
  })
  game.currentPlayer.hand.faceUp = true
  game.currentPlayer.hand.render({immediate: true})
  // $('.card').removeClass('card-selected')


  // Prepare his actions
  game.currentPlayer.hand.click( function(card) {
    // card.container.render()

    stopChoosingPlayer()

    if(card.selected){
      card.deselect()
      return
    }

    /**
     * ZOMBIE
     */
    if( card.isZombie && !moves.zombie){
      print(`you're out of moves for zombies`)
    }
    if( card.isZombie && canPlaceZombieSomewhere() && moves.zombie ) {

      if( selectedCards().length === 0 ){
        card.select()
      }else if( selectedCards().length < 2){
        // Only choose another zombie, if you chose a zombie
        // ASSUMING you can select only 2 zombie cards
        if( selectedCards()[0].isZombie ){
          card.select()
        }else{
          print(`select another ZOMBIE (if you have 2 or more)`)
          return
        }
      }

      choosePlayer( selectedCards() , ()=>{
        moves.zombie = false
      })

    }else if( !canPlaceZombieSomewhere() ){
      print(`can't place zombie`)
    }

  }, this)


}



function choosePlayer(cards, callback){

  game.players.forEach( p => {
    if(p !== game.currentPlayer){
      p.hand.click( function(){

        if( !hasZombie(p.pile) ){
          p.pile.addCards(cards)
          p.pile.render({immediate: true})
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
 * Does this container has any zombie cards?
 */
function hasZombie(container){
  return container.some( v => {
    return v.isZombie
  })
}
function hasActionCard(container){
  return container.some( v => {
    return v.isActionCard
  })
}
function hasWeapon(container){
  return container.some( v => {
    return v.rank >= 2 && v.rank <= 10
  })
}

function hasSelectedCards(container){
  return container.some( v => {
    return v.selected
  })
}

function duoMatch(cards){
  return (
    (cards[0].rank+1 === cards[1].rank ||
    cards[0].rank-1 === cards[1].rank) ||

    (cards[0].rank === cards[1].rank &&
    cards[0].suit !== cards[1].suit)
  )
}

/**
 * Check other players if they don't have zombie yet
 */
function canPlaceZombieSomewhere(){
  let res = false
  game.players.forEach( p => {
    if(p === game.currentPlayer) return

    if( !hasZombie(p.pile) ) res = true
  })

  return res
}

/**
 * Returns all cards selected by current player
 */
function selectedCards(){
  return game.currentPlayer.hand.filter( v=>v.selected )
}


// Final move, player can't do anything
deck.click( function(card) {
  if (card === deck.topCard()) {
    deck.deal(2, game.currentPlayer.hand, 100)
    nextPlayer()
  }
}, this)

// Player finishes his moves
$(window).keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    e.preventDefault()
    nextPlayer()
  }
})


initGame()

window.game = game
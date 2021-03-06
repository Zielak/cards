
import Card from './Card'

export default class Game {

  constructor(opts){

    if (opts) {
      for (const i in opts) {
        if (opts.hasOwnProperty(i)) {
          config[i] = opts[i]
        }
      }
    }

    this.players = []

    this._currentPlayer = 0

    this.allCards = []

    const start = config.acesHigh ? 2 : 1
    const end = start + 12
    config.table = $(config.table)
    if ( config.table.css('position') === 'static') {
      config.table.css('position', 'relative')
    }
    for (let i = start; i <= end; i++) {
      this.allCards.push(new Card({
        game: this,
        suit: 'h',
        rank: i,
        table: config.table
      }))
      this.allCards.push(new Card({
        game: this,
        suit: 's',
        rank: i,
        table: config.table
      }))
      this.allCards.push(new Card({
        game: this,
        suit: 'd',
        rank: i,
        table: config.table
      }))
      this.allCards.push(new Card({
        game: this,
        suit: 'c',
        rank: i,
        table: config.table
      }))
    }
    if (config.blackJoker) {
      this.allCards.push(new Card({
        game: this,
        suit: 'bj',
        rank: 0,
        table: config.table
      }))
    }
    if (config.redJoker) {
      this.allCards.push(new Card({
        game: this,
        suit: 'rj',
        rank: 0,
        table: config.table
      }))
    }
    
    $('.card').click(mouseEvent)
    this.shuffle(this.allCards)

  }

  shuffle(deck) {
    //Fisher yates shuffle
    let i = deck.length
    if (i === 0) return
    while (--i) {
      const j = Math.floor(Math.random() * (i + 1))
      const tempi = deck[i]
      const tempj = deck[j]
      deck[i] = tempj
      deck[j] = tempi
    }
  }

  get currentPlayer(){
    return this.players[this._currentPlayer]
  } 

  nextPlayer(){
    this._currentPlayer ++
    if(this._currentPlayer > this.players.length-1){
      this._currentPlayer = 0
    }
  }

  // hideOtherCards(){
  //   this.players.forEach( p => {
  //     p.hand.forEach( c => {
  //       p === this.currentPlayer ? c.show() : c.hide()
  //     })
  //   })
  // }
}

function mouseEvent(ev) {
  const card = $(this).data('card')
  if (card.container) {
    const handler = card.container._click
    if (handler) {
      handler.func.call(handler.context||window, card, ev)
    }
  }
}



import { classic, other } from './decks'
import Card from './card'

export { card, deck, hand, pile, player } from './'

export default class Game {

  constructor(opts){

    if (opts) {
      for (var i in opts) {
        if (opts.hasOwnProperty(i)) {
          config[i] = opts[i]
        }
      }
    }

    this.all = []

    var start = config.acesHigh ? 2 : 1
    var end = start + 12
    config.table = $(config.table)[0]
    if ($(config.table).css('position') == 'static') {
      $(config.table).css('position', 'relative')
    }
    for (var i = start; i <= end; i++) {
      this.all.push(new Card({
        game: this,
        suit: 'h',
        rank: i,
        table: config.table
      }))
      this.all.push(new Card({
        game: this,
        suit: 's',
        rank: i,
        table: config.table
      }))
      this.all.push(new Card({
        game: this,
        suit: 'd',
        rank: i,
        table: config.table
      }))
      this.all.push(new Card({
        game: this,
        suit: 'c',
        rank: i,
        table: config.table
      }))
    }
    if (config.blackJoker) {
      this.all.push(new Card({
        game: this,
        suit: 'bj',
        rank: 0,
        table: config.table
      }))
    }
    if (config.redJoker) {
      this.all.push(new Card({
        game: this,
        suit: 'rj',
        rank: 0,
        table: config.table
      }))
    }
    
    $('.card').click(mouseEvent)
    this.shuffle(this.all)

  }

  shuffle(deck) {
    //Fisher yates shuffle
    var i = deck.length;
    if (i == 0) return;
    while (--i) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempi = deck[i];
      var tempj = deck[j];
      deck[i] = tempj;
      deck[j] = tempi;
    }
  }
}

function mouseEvent(ev) {
  var card = $(this).data('card');
  if (card.container) {
    var handler = card.container._click;
    if (handler) {
      handler.func.call(handler.context||window, card, ev);
    }
  }
}

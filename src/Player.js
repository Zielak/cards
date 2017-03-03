
import Container from './Container'
import Hand from './Hand'

export default class Player {

  constructor(hand, pile, options) {
    options = options || {}

    this.hand = hand
    this.pile = pile
  }

}

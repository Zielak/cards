
import Container from './Container'

export default class Deck extends Container{

  calcPosition(options) {
    options = options || {}
    var left = Math.round(this.x - config.cardSize.width/2, 0)
    var top = Math.round(this.y - config.cardSize.height/2, 0)
    var condenseCount = 6

    for (var i=0; i<this.length; i++) {
      if (i > 0 && i % condenseCount == 0) {
        top -= 1
        left -= 1
      }
      this[i].targetTop = top
      this[i].targetLeft = left
    }
  }
  
  deal(count, hands, speed, callback) {
    var me = this
    var i = 0
    var totalCount = count * hands.length
    function dealOne() {
      if (me.length === 0 || i === totalCount) {
        if (callback) {
          callback()
        }
        return
      }
      hands[i%hands.length].addCard(me.topCard())
      hands[i%hands.length].render({callback:dealOne, speed:speed})
      i++
    }
    dealOne()
  }

  toString() {
    return 'Deck'
  }
}

import Container from './Container'

export default class Hand extends Container{

  calcPosition(options) {
    options = options || {}
    var width = config.cardSize.width + (this.length-1) * config.cardSize.padding
    var left = Math.round(this.x - width/2)
    var top = Math.round(this.y-config.cardSize.height/2, 0)
    
    for (var i=0; i<this.length; i++) {
      this[i].targetTop = top
      this[i].targetLeft = left + i * config.cardSize.padding
    }
  }
  
  toString() {
    return 'Hand'
  }
}

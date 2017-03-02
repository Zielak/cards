import Container from './container'

export default class Hand extends Container{

  calcPosition(options) {
    options = options || {}
    var width = opt.cardSize.width + (this.length-1) * opt.cardSize.padding
    var left = Math.round(this.x - width/2)
    var top = Math.round(this.y-opt.cardSize.height/2, 0)
    for (var i=0; i<this.length; i++) {
      this[i].targetTop = top
      this[i].targetLeft = left + i * opt.cardSize.padding
    }
  }
  
  toString() {
    return 'Hand'
  }
}

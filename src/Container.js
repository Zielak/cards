
export default class Container extends Array {

  constructor(options){
    super()

    options = options || {}
    this.x = options.x || $(config.table).width()/2
    this.y = options.y || $(config.table).height()/2
    this.faceUp = options.faceUp
  }

  click(func, context){
    this._click = {func:func, context:context}
  }
  mousedown(func, context){
    this._mousedown = {func:func, context:context}
  }
  mouseup(func, context){
    this._mouseup = {func:func, context:context}
  }

  addCard(card) {
    this.addCards([card])
  }

  addCards(cards){
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i]
      if (card.container) {
        card.container.removeCard(card)
      }
      this.push(card)
      card.container = this
    }
  }

  removeCard(card) {
    for (var i=0; i< this.length;i++) {
      if (this[i] == card) {
        this.splice(i, 1)
        return true
      }
    }
    return false
  }


  render(options) {
    options = options || {}
    const speed = options.speed || config.animationSpeed
    this.calcPosition(options)
    
    for (let i=0;i<this.length;i++) {
      const card = this[i]
      config.zIndexCounter++
      card.moveToFront()

      const top = parseInt($(card.el).css('top'))
      const left = parseInt($(card.el).css('left'))

      if (top != card.targetTop || left != card.targetLeft) {
        let props = {top:card.targetTop, left:card.targetLeft, queue:false}
        if (options.immediate) {
          $(card.el).css(props)
        } else {
          $(card.el).animate(props, speed)
        }
      }
    }

    const flip = function(){
      for (let i=0; i<this.length; i++) {
        if (this.faceUp) {
          this[i].show()
        } else {
          this[i].hide()
        }
      }
    }
    if (options.immediate) {
      flip.call(this)
    } else {
      setTimeout(flip.bind(this), speed/2)
    }
    
    if (options.callback) {
      setTimeout(options.callback, speed)
    }
  }
  
  topCard() {
    return this[this.length-1]
  }
  
  toString() {
    return 'Container'
  }

}

export default class Card{

  constructor(options) {
    this.game = options.game
    this.shortName = this.suit + this.rank
    this.suit = options.suit
    this.rank = options.rank
    this.name = this.suit.toUpperCase() + this.rank
    this.faceUp = false

    this.el = $(`<div class="card suit-${this.rank === 14 ? 'd' : this.suit}">
      <div class="suit-icon"></div>
      <div class="rank-icon">${this.translateName(this.rank, this.suit)}</div>
    </div>`)
    .css({
      width: config.cardSize.width,
      height: config.cardSize.height,
      position: 'absolute',
      cursor: 'pointer'
    })
    .data('card', this)

    this.el.appendTo( options.table )

    this.showCard()
    this.moveToFront()
  }

  moveTo(x, y, speed, callback) {
    const props = {top:y-(config.cardSize.height/2),left:x-(config.cardSize.width/2)}
    $(this.el).animate(props, speed || config.animationSpeed, callback)
  }
  
  rotate(angle) {
    $(this.el)
      .css('-webkit-transform', 'rotate(' + angle + 'deg)')
      .css('-moz-transform', 'rotate(' + angle + 'deg)')
      .css('-ms-transform', 'rotate(' + angle + 'deg)')
      .css('transform', 'rotate(' + angle + 'deg)')
      .css('-o-transform', 'rotate(' + angle + 'deg)')
  }
  
  showCard() {
    var offsets = { "c": 0, "d": 1, "h": 2, "s": 3 }
    var xpos, ypos
    var rank = this.rank
    if (rank == 14) {
      rank = 1; //Aces high must work as well.
    }
    xpos = -rank * config.cardSize.width
    ypos = -offsets[this.suit] * config.cardSize.height
    this.rotate(0)
    $(this.el).css('background-position', xpos + 'px ' + ypos + 'px')
  }

  hideCard(position) {
    var y = config.cardback == 'red' ? 0 * config.cardSize.height : -1 * config.cardSize.height
    $(this.el).css('background-position', '0px ' + y + 'px')
    this.rotate(0)
  }
  
  moveToFront() {
    $(this.el).css('z-index', config.zIndexCounter++)
  }

  translateName(rank, suit){
    if(suit !== 'd' && rank !== 14){
      switch(rank){
        case 11: return '⊗'
        case 12: return '☩'
        case 13: return '⚔'
        case 14: return 'Α'
        default: return rank
      }
    }else{
      switch(rank){
        case 11: return '15'
        case 12: return '15'
        case 13: return '15'
        case 14: return '20'
        default: return rank
      }
    }
  }

  toString() {
    return this.name
  }
}

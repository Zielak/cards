
export default class Card{

  constructor(options) {
    this.game = options.game
    this.shortName = this.suit + this.rank;
    this.suit = options.suit;
    this.rank = options.rank;
    this.name = this.suit.toUpperCase() + this.rank;
    this.faceUp = false;

    this.el = $('<div/>').css({
      width: config.cardSize.width,
      height: config.cardSize.height,
      "background-image": 'url('+ options.cardsUrl + ')',
      position: 'absolute',
      cursor: 'pointer'
    }).addClass('card').data('card', this).appendTo($(options.table));
    this.showCard();
    this.moveToFront();
  }

  moveTo(x, y, speed, callback) {
    const props = {top:y-(config.cardSize.height/2),left:x-(config.cardSize.width/2)};
    $(this.el).animate(props, speed || config.animationSpeed, callback);
  }
  
  rotate(angle) {
    $(this.el)
      .css('-webkit-transform', 'rotate(' + angle + 'deg)')
      .css('-moz-transform', 'rotate(' + angle + 'deg)')
      .css('-ms-transform', 'rotate(' + angle + 'deg)')
      .css('transform', 'rotate(' + angle + 'deg)')
      .css('-o-transform', 'rotate(' + angle + 'deg)');
  }
  
  showCard() {
    var offsets = { "c": 0, "d": 1, "h": 2, "s": 3 };
    var xpos, ypos;
    var rank = this.rank;
    if (rank == 14) {
      rank = 1; //Aces high must work as well.
    }
    xpos = -rank * config.cardSize.width;
    ypos = -offsets[this.suit] * config.cardSize.height;
    this.rotate(0);
    $(this.el).css('background-position', xpos + 'px ' + ypos + 'px');
  }

  hideCard(position) {
    var y = config.cardback == 'red' ? 0 * config.cardSize.height : -1 * config.cardSize.height;
    $(this.el).css('background-position', '0px ' + y + 'px');
    this.rotate(0);
  }
  
  moveToFront() {
    $(this.el).css('z-index', config.zIndexCounter++);
  }

  toString() {
    return this.name;
  }
}

import Container from './container'

export default class Pile extends Container{

  calcPosition(options) {
    options = options || {}
  }
  
  deal(count, hands) {
    if (!this.dealCounter) {
      this.dealCounter = count * hands.length
    }
  }

  toString() {
    return 'Pile'
  }
}

import './index.html'
require('./styles.css')

import { card, deck, hand, pile } from './'
import Game from './'

const el = document.createElement('div')
el.id = 'card-table'

document.querySelector('body').appendChild(el)


const game = new Game({
  table: '#card-table'
})



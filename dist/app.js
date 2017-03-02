/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(config, $) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decks__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(0);
/* unused harmony reexport card */
/* unused harmony reexport deck */
/* unused harmony reexport hand */
/* unused harmony reexport pile */
/* unused harmony reexport player */







class Game {

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
      this.all.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* default */]({
        game: this,
        suit: 'h',
        rank: i,
        table: config.table
      }))
      this.all.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* default */]({
        game: this,
        suit: 's',
        rank: i,
        table: config.table
      }))
      this.all.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* default */]({
        game: this,
        suit: 'd',
        rank: i,
        table: config.table
      }))
      this.all.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* default */]({
        game: this,
        suit: 'c',
        rank: i,
        table: config.table
      }))
    }
    if (config.blackJoker) {
      this.all.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* default */]({
        game: this,
        suit: 'bj',
        rank: 0,
        table: config.table
      }))
    }
    if (config.redJoker) {
      this.all.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* default */]({
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


function mouseEvent(ev) {
  var card = $(this).data('card');
  if (card.container) {
    var handler = card.container._click;
    if (handler) {
      handler.func.call(handler.context||window, card, ev);
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2), __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jquery.js";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// default config
module.exports = {
  cardSize: {
    width:69, height:94, padding:18
  },
  animationSpeed : 500,
  table: 'body',
  cardback: 'red',
  acesHigh: false,
  // cardsUrl : 'img/cards.png',
  blackJoker: false,
  redJoker: false,
  zIndexCounter: 0
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(3);
/* unused harmony reexport classic */


// import { classic, other } from './docks'

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, config) {
class Card{

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Card;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(0);


__webpack_require__(4)




const el = document.createElement('div')
el.id = 'card-table'

document.querySelector('body').appendChild(el)


const game = new __WEBPACK_IMPORTED_MODULE_1____["a" /* default */]({
  table: '#card-table'
})




/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzg1ZGEwMzg3NmMxMWRlNGQ1YzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEeUI7QUFDekI7O0FBRXlDOztBQUV6Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqR0EscUQ7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JrQjs7QUFFbEIsV0FBVyxpQkFBaUIsZTs7Ozs7O0FDRjVCLHlDOzs7Ozs7QUNBQSxzRDs7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTs7QUFFaUM7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzg1ZGEwMzg3NmMxMWRlNGQ1YzEiLCJcblxuaW1wb3J0IHsgY2xhc3NpYywgb3RoZXIgfSBmcm9tICcuL2RlY2tzJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuXG5leHBvcnQgeyBjYXJkLCBkZWNrLCBoYW5kLCBwaWxlLCBwbGF5ZXIgfSBmcm9tICcuLydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgY29uc3RydWN0b3Iob3B0cyl7XG5cbiAgICBpZiAob3B0cykge1xuICAgICAgZm9yICh2YXIgaSBpbiBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgY29uZmlnW2ldID0gb3B0c1tpXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hbGwgPSBbXVxuXG4gICAgdmFyIHN0YXJ0ID0gY29uZmlnLmFjZXNIaWdoID8gMiA6IDFcbiAgICB2YXIgZW5kID0gc3RhcnQgKyAxMlxuICAgIGNvbmZpZy50YWJsZSA9ICQoY29uZmlnLnRhYmxlKVswXVxuICAgIGlmICgkKGNvbmZpZy50YWJsZSkuY3NzKCdwb3NpdGlvbicpID09ICdzdGF0aWMnKSB7XG4gICAgICAkKGNvbmZpZy50YWJsZSkuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5hbGwucHVzaChuZXcgQ2FyZCh7XG4gICAgICAgIGdhbWU6IHRoaXMsXG4gICAgICAgIHN1aXQ6ICdoJyxcbiAgICAgICAgcmFuazogaSxcbiAgICAgICAgdGFibGU6IGNvbmZpZy50YWJsZVxuICAgICAgfSkpXG4gICAgICB0aGlzLmFsbC5wdXNoKG5ldyBDYXJkKHtcbiAgICAgICAgZ2FtZTogdGhpcyxcbiAgICAgICAgc3VpdDogJ3MnLFxuICAgICAgICByYW5rOiBpLFxuICAgICAgICB0YWJsZTogY29uZmlnLnRhYmxlXG4gICAgICB9KSlcbiAgICAgIHRoaXMuYWxsLnB1c2gobmV3IENhcmQoe1xuICAgICAgICBnYW1lOiB0aGlzLFxuICAgICAgICBzdWl0OiAnZCcsXG4gICAgICAgIHJhbms6IGksXG4gICAgICAgIHRhYmxlOiBjb25maWcudGFibGVcbiAgICAgIH0pKVxuICAgICAgdGhpcy5hbGwucHVzaChuZXcgQ2FyZCh7XG4gICAgICAgIGdhbWU6IHRoaXMsXG4gICAgICAgIHN1aXQ6ICdjJyxcbiAgICAgICAgcmFuazogaSxcbiAgICAgICAgdGFibGU6IGNvbmZpZy50YWJsZVxuICAgICAgfSkpXG4gICAgfVxuICAgIGlmIChjb25maWcuYmxhY2tKb2tlcikge1xuICAgICAgdGhpcy5hbGwucHVzaChuZXcgQ2FyZCh7XG4gICAgICAgIGdhbWU6IHRoaXMsXG4gICAgICAgIHN1aXQ6ICdiaicsXG4gICAgICAgIHJhbms6IDAsXG4gICAgICAgIHRhYmxlOiBjb25maWcudGFibGVcbiAgICAgIH0pKVxuICAgIH1cbiAgICBpZiAoY29uZmlnLnJlZEpva2VyKSB7XG4gICAgICB0aGlzLmFsbC5wdXNoKG5ldyBDYXJkKHtcbiAgICAgICAgZ2FtZTogdGhpcyxcbiAgICAgICAgc3VpdDogJ3JqJyxcbiAgICAgICAgcmFuazogMCxcbiAgICAgICAgdGFibGU6IGNvbmZpZy50YWJsZVxuICAgICAgfSkpXG4gICAgfVxuICAgIFxuICAgICQoJy5jYXJkJykuY2xpY2sobW91c2VFdmVudClcbiAgICB0aGlzLnNodWZmbGUodGhpcy5hbGwpXG5cbiAgfVxuXG4gIHNodWZmbGUoZGVjaykge1xuICAgIC8vRmlzaGVyIHlhdGVzIHNodWZmbGVcbiAgICB2YXIgaSA9IGRlY2subGVuZ3RoO1xuICAgIGlmIChpID09IDApIHJldHVybjtcbiAgICB3aGlsZSAoLS1pKSB7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgdmFyIHRlbXBpID0gZGVja1tpXTtcbiAgICAgIHZhciB0ZW1waiA9IGRlY2tbal07XG4gICAgICBkZWNrW2ldID0gdGVtcGo7XG4gICAgICBkZWNrW2pdID0gdGVtcGk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlRXZlbnQoZXYpIHtcbiAgdmFyIGNhcmQgPSAkKHRoaXMpLmRhdGEoJ2NhcmQnKTtcbiAgaWYgKGNhcmQuY29udGFpbmVyKSB7XG4gICAgdmFyIGhhbmRsZXIgPSBjYXJkLmNvbnRhaW5lci5fY2xpY2s7XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIuZnVuYy5jYWxsKGhhbmRsZXIuY29udGV4dHx8d2luZG93LCBjYXJkLCBldik7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJqcXVlcnkuanNcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGRlZmF1bHQgY29uZmlnXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FyZFNpemU6IHtcbiAgICB3aWR0aDo2OSwgaGVpZ2h0Ojk0LCBwYWRkaW5nOjE4XG4gIH0sXG4gIGFuaW1hdGlvblNwZWVkIDogNTAwLFxuICB0YWJsZTogJ2JvZHknLFxuICBjYXJkYmFjazogJ3JlZCcsXG4gIGFjZXNIaWdoOiBmYWxzZSxcbiAgLy8gY2FyZHNVcmwgOiAnaW1nL2NhcmRzLnBuZycsXG4gIGJsYWNrSm9rZXI6IGZhbHNlLFxuICByZWRKb2tlcjogZmFsc2UsXG4gIHpJbmRleENvdW50ZXI6IDBcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgeyBjbGFzc2ljIH0gZnJvbSAnLi8nXG5cbi8vIGltcG9ydCB7IGNsYXNzaWMsIG90aGVyIH0gZnJvbSAnLi9kb2NrcydcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZWNrcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJke1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWVcbiAgICB0aGlzLnNob3J0TmFtZSA9IHRoaXMuc3VpdCArIHRoaXMucmFuaztcbiAgICB0aGlzLnN1aXQgPSBvcHRpb25zLnN1aXQ7XG4gICAgdGhpcy5yYW5rID0gb3B0aW9ucy5yYW5rO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuc3VpdC50b1VwcGVyQ2FzZSgpICsgdGhpcy5yYW5rO1xuICAgIHRoaXMuZmFjZVVwID0gZmFsc2U7XG5cbiAgICB0aGlzLmVsID0gJCgnPGRpdi8+JykuY3NzKHtcbiAgICAgIHdpZHRoOiBjb25maWcuY2FyZFNpemUud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZy5jYXJkU2l6ZS5oZWlnaHQsXG4gICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogJ3VybCgnKyBvcHRpb25zLmNhcmRzVXJsICsgJyknLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH0pLmFkZENsYXNzKCdjYXJkJykuZGF0YSgnY2FyZCcsIHRoaXMpLmFwcGVuZFRvKCQob3B0aW9ucy50YWJsZSkpO1xuICAgIHRoaXMuc2hvd0NhcmQoKTtcbiAgICB0aGlzLm1vdmVUb0Zyb250KCk7XG4gIH1cblxuICBtb3ZlVG8oeCwgeSwgc3BlZWQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcHJvcHMgPSB7dG9wOnktKGNvbmZpZy5jYXJkU2l6ZS5oZWlnaHQvMiksbGVmdDp4LShjb25maWcuY2FyZFNpemUud2lkdGgvMil9O1xuICAgICQodGhpcy5lbCkuYW5pbWF0ZShwcm9wcywgc3BlZWQgfHwgY29uZmlnLmFuaW1hdGlvblNwZWVkLCBjYWxsYmFjayk7XG4gIH1cbiAgXG4gIHJvdGF0ZShhbmdsZSkge1xuICAgICQodGhpcy5lbClcbiAgICAgIC5jc3MoJy13ZWJraXQtdHJhbnNmb3JtJywgJ3JvdGF0ZSgnICsgYW5nbGUgKyAnZGVnKScpXG4gICAgICAuY3NzKCctbW96LXRyYW5zZm9ybScsICdyb3RhdGUoJyArIGFuZ2xlICsgJ2RlZyknKVxuICAgICAgLmNzcygnLW1zLXRyYW5zZm9ybScsICdyb3RhdGUoJyArIGFuZ2xlICsgJ2RlZyknKVxuICAgICAgLmNzcygndHJhbnNmb3JtJywgJ3JvdGF0ZSgnICsgYW5nbGUgKyAnZGVnKScpXG4gICAgICAuY3NzKCctby10cmFuc2Zvcm0nLCAncm90YXRlKCcgKyBhbmdsZSArICdkZWcpJyk7XG4gIH1cbiAgXG4gIHNob3dDYXJkKCkge1xuICAgIHZhciBvZmZzZXRzID0geyBcImNcIjogMCwgXCJkXCI6IDEsIFwiaFwiOiAyLCBcInNcIjogMyB9O1xuICAgIHZhciB4cG9zLCB5cG9zO1xuICAgIHZhciByYW5rID0gdGhpcy5yYW5rO1xuICAgIGlmIChyYW5rID09IDE0KSB7XG4gICAgICByYW5rID0gMTsgLy9BY2VzIGhpZ2ggbXVzdCB3b3JrIGFzIHdlbGwuXG4gICAgfVxuICAgIHhwb3MgPSAtcmFuayAqIGNvbmZpZy5jYXJkU2l6ZS53aWR0aDtcbiAgICB5cG9zID0gLW9mZnNldHNbdGhpcy5zdWl0XSAqIGNvbmZpZy5jYXJkU2l6ZS5oZWlnaHQ7XG4gICAgdGhpcy5yb3RhdGUoMCk7XG4gICAgJCh0aGlzLmVsKS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCB4cG9zICsgJ3B4ICcgKyB5cG9zICsgJ3B4Jyk7XG4gIH1cblxuICBoaWRlQ2FyZChwb3NpdGlvbikge1xuICAgIHZhciB5ID0gY29uZmlnLmNhcmRiYWNrID09ICdyZWQnID8gMCAqIGNvbmZpZy5jYXJkU2l6ZS5oZWlnaHQgOiAtMSAqIGNvbmZpZy5jYXJkU2l6ZS5oZWlnaHQ7XG4gICAgJCh0aGlzLmVsKS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCAnMHB4ICcgKyB5ICsgJ3B4Jyk7XG4gICAgdGhpcy5yb3RhdGUoMCk7XG4gIH1cbiAgXG4gIG1vdmVUb0Zyb250KCkge1xuICAgICQodGhpcy5lbCkuY3NzKCd6LWluZGV4JywgY29uZmlnLnpJbmRleENvdW50ZXIrKyk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuaW1wb3J0ICcuL2luZGV4Lmh0bWwnXG5yZXF1aXJlKCcuL3N0eWxlcy5jc3MnKVxuXG5pbXBvcnQgeyBjYXJkLCBkZWNrLCBoYW5kLCBwaWxlIH0gZnJvbSAnLi8nXG5pbXBvcnQgR2FtZSBmcm9tICcuLydcblxuY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZWwuaWQgPSAnY2FyZC10YWJsZSdcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGVsKVxuXG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSh7XG4gIHRhYmxlOiAnI2NhcmQtdGFibGUnXG59KVxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
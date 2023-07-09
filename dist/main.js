/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/timer-node/index.js":
/*!******************************************!*\
  !*** ./node_modules/timer-node/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const { Timer } = __webpack_require__(/*! ./src/timer */ "./node_modules/timer-node/src/timer.js");

exports.Timer = Timer;


/***/ }),

/***/ "./node_modules/timer-node/src/timer.js":
/*!**********************************************!*\
  !*** ./node_modules/timer-node/src/timer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * timer-node
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class Timer
 */
class Timer {
  /**
   * Creates a new timer
   * @param {object} [options]
   * @return {Timer}
   */
  constructor(options = {}) {
    const {
      label,
      startTimestamp,
      endTimestamp,
      currentStartTimestamp,
      pauseCount,
      accumulatedMs
    } = options;

    const startTs = (startTimestamp >= 0 && startTimestamp < Date.now())
      ? startTimestamp
      : undefined;

    const endTs = (startTs >= 0 && endTimestamp > 0 && endTimestamp > startTs)
      ? endTimestamp
      : undefined;

    const currentTs = (currentStartTimestamp >= startTs
      && (!endTs || currentStartTimestamp < endTs))
      ? currentStartTimestamp
      : startTs;

    const isStarted = startTimestamp >= 0;
    const isRunning = currentStartTimestamp !== undefined;
    const wasPausedAtLeastOneTime = pauseCount > 0;
    const isPaused = isStarted && !isRunning && wasPausedAtLeastOneTime;

    this._label = label || '';
    this._startTimestamp = startTs;
    this._currentStartTimestamp = !isPaused ? currentTs : undefined;
    this._endTimestamp = endTs;
    this._pauseCount = pauseCount || 0;
    this._accumulatedMs = accumulatedMs || 0;
  }

  /**
   * @public
   * @return {string}
   */
  getLabel() {
    return this._label;
  }

  /**
   * @public
   * @return {boolean}
   */
  isStarted() {
    return this._startTimestamp >= 0;
  }

  /**
   * @public
   * @return {boolean}
   */
  isPaused() {
    return this.isStarted() && this._currentStartTimestamp === undefined;
  }

  /**
   * @public
   * @return {boolean}
   */
  isStopped() {
    return this._endTimestamp > 0;
  }

  /**
   * @public
   * @return {boolean}
   */
  isRunning() {
    return this.isStarted() && !this.isPaused() && !this.isStopped();
  }

  /**
   * Start the timer
   * @public
   * @return {Timer}
   */
  start() {
    if (this.isStarted() && !this.isStopped()) {
      return this;
    }

    this.clear();
    this._startTimestamp = Date.now();
    this._currentStartTimestamp = this._startTimestamp;
    return this;
  }

  /**
   * Pause the timer
   * @public
   * @return {Timer}
   */
  pause() {
    if (this.isPaused() || !this.isStarted() || this.isStopped()) {
      return this;
    }

    this._pauseCount += 1;
    this._accumulatedMs += Date.now() - this._currentStartTimestamp;
    this._currentStartTimestamp = undefined;
    return this;
  }

  /**
   * Resume the paused timer
   * @public
   * @return {Timer}
   */
  resume() {
    if (!this.isPaused() || this.isStopped()) {
      return this;
    }

    this._currentStartTimestamp = Date.now();
    return this;
  }

  /**
   * Stop the started timer
   * @public
   * @return {Timer}
   */
  stop() {
    if (!this.isStarted()) {
      return this;
    }

    this._endTimestamp = Date.now();
    return this;
  }

  /**
   * Returns the elapsed running time in milliseconds
   * @public
   * @return {number}
   */
  ms() {
    if (!this.isStarted()) {
      return 0;
    }

    if (this.isPaused()) {
      return this._accumulatedMs;
    }

    const endTimestamp = this._endTimestamp || Date.now();
    const currentMs = endTimestamp - this._currentStartTimestamp;
    return currentMs + this._accumulatedMs;
  }

  /**
   * Returns the total of milliseconds of pauses
   * @public
   * @return {number}
   */
  pauseMs() {
    if (!this.isStarted()) {
      return 0;
    }

    const endTimestamp = this._endTimestamp || Date.now();
    return (endTimestamp - this._startTimestamp) - this.ms();
  }

  /**
   * @private
   * @return {object}
   */
  _getTime(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    const d = Math.floor(h / 24);

    return {
      ms: ms % 1000,
      s: s % 60,
      m: m % 60,
      h: h % 24,
      d
    };
  }

  /**
   * Returns the elapsed time as an object of time fractions
   * @public
   * @returns {object}
   */
  time() {
    return this._getTime(this.ms());
  }

  /**
   * Returns the paused time as an object of time fractions
   * @public
   * @returns {object}
   */
  pauseTime() {
    return this._getTime(this.pauseMs());
  }

  /**
   * Returns the number of pauses
   * @public
   * @returns {number}
   */
  pauseCount() {
    return this._pauseCount;
  }

  /**
   * Returns the start timestamp
   * @public
   * @returns {number}
   */
  startedAt() {
    return this._startTimestamp;
  }

  /**
   * Returns the stop timestamp
   * @public
   * @returns {number}
   */
  stoppedAt() {
    return this._endTimestamp;
  }

  /**
   * Format the recorded time using a template
   * @public
   * @param {string} template
   * @returns {string}
   */
  format(template = '%label%d d, %h h, %m m, %s s, %ms ms') {
    const time = this.time();
    return template
      .replace('%label', this._label ? `${this._label}: ` : '')
      .replace('%ms', time.ms)
      .replace('%s', time.s)
      .replace('%m', time.m)
      .replace('%h', time.h)
      .replace('%d', time.d);
  }

  /**
   * Clears the timer
   * @public
   * @return {Timer}
   */
  clear() {
    this._startTimestamp = undefined;
    this._currentStartTimestamp = undefined;
    this._endTimestamp = undefined;
    this._accumulatedMs = 0;
    this._pauseCount = 0;
    return this;
  }

  /**
   * Serialize the timer
   * @public
   * @return {string}
   */
  serialize() {
    return JSON.stringify({
      startTimestamp: this._startTimestamp,
      currentStartTimestamp: this._currentStartTimestamp,
      endTimestamp: this._endTimestamp,
      accumulatedMs: this._accumulatedMs,
      pauseCount: this._pauseCount,
      label: this._label
    });
  }

  /**
   * Deserialize the timer
   * @public
   * @param {string} serializedTime
   * @return {Timer}
   */
  static deserialize(serializedTime) {
    return new Timer(JSON.parse(serializedTime));
  }

  /**
   * Creates a benchmark timer for a function call
   * @public
   * @static
   * @param {function} fn
   * @returns {Timer}
   */
  static benchmark(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Timer.benchmark expects a function');
    }

    const timer = new Timer({ label: fn.name }).start();
    fn();
    return timer.stop();
  }
}

exports.Timer = Timer;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   level: () => (/* binding */ level),
/* harmony export */   renderChoosePage: () => (/* binding */ renderChoosePage)
/* harmony export */ });
/* harmony import */ var _pagecards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagecards.js */ "./src/pagecards.js");


let level = null
const renderChoosePage = () => {
    const appEl = document.getElementById('app')

    const choosePageHtml = `
    <div class="center">
    <div class="main__window">
        <div class="main__window_senc">
            <p>Выбери сложность</p>
        </div>
        <form class="main__window_form">
            <div  class="main__window_choose">
            <input type="radio" id="option1" name="options" value="Option 1" > 
            <label for="option1">1</label>
            </div>
            <div  class="main__window_choose">
            <input type="radio" id="option2" name="options" value="Option 2" >
            <label for="option2">2</label>
            </div>
            <div  class="main__window_choose">
            <input type="radio" id="option3" name="options" value="Option 3">
            <label for="option3">3</label>
            </div>
        </form>
            <button class="main__window_butt" id="chooseButton">Старт</button>
    </div>
    `
    appEl.innerHTML = choosePageHtml

    const easyLevel = document.getElementById('option1')
    const middleLevel = document.getElementById('option2')
    const hardLevel = document.getElementById('option3')
    const chooseButton = document.getElementById('chooseButton')
    
    
    chooseButton.addEventListener('click', (event) => {
        event.preventDefault()

       

        if (easyLevel.checked) {
            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(3)
            level = 3
        } else if (middleLevel.checked) {
            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(6)
            level = 6
        } else if (hardLevel.checked) {
            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(9)
            level = 9
        } else{
            alert('Выберите уровень сложности!!!')
            return
        }
    })
}
renderChoosePage()


/***/ }),

/***/ "./src/modulFunc.js":
/*!**************************!*\
  !*** ./src/modulFunc.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCardStyle: () => (/* binding */ changeCardStyle),
/* harmony export */   showAllCards: () => (/* binding */ showAllCards),
/* harmony export */   timerSet: () => (/* binding */ timerSet)
/* harmony export */ });
function timerSet(timer) {
    let time = 0

    function updateTime() {
        time++
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        const formattedTime = pad(minutes) + ':' + pad(seconds)
        timer.textContent = formattedTime
    }

    function pad(value) {
        return value < 10 ? '0' + value : value
    }

    const timerInterval = setInterval(updateTime, 1000)

    function stopTimer() {
        clearInterval(timerInterval)
        return time
    }

    return {
        stopTimer: stopTimer,
    }
}

function showAllCards() {
    const cardFrontElements = document.querySelectorAll('.card')
    cardFrontElements.forEach((cardFrontElement) => {
        cardFrontElement.classList.remove('selected')
        cardFrontElement
            .querySelectorAll(
                '.center__suit, .symbol-top-left, .symbol-bottom-right'
            )
            .forEach((element) => {
                element.style.display = 'block'
            })
    })
}
function changeCardStyle() {
    const cardFrontElements = document.querySelectorAll('.card')

    cardFrontElements.forEach((cardFrontElement) => {
        cardFrontElement
            .querySelectorAll(
                '.center__suit, .symbol-top-left, .symbol-bottom-right'
            )
            .forEach((element) => {
                element.style.display = 'none'
            })

        cardFrontElement.classList.add('selected')

        cardFrontElement.addEventListener('click', () => {
            cardFrontElement
                .querySelectorAll(
                    '.center__suit, .symbol-top-left, .symbol-bottom-right'
                )
                .forEach((element) => {
                    element.style.display = ''
                })

            cardFrontElement.classList.remove('selected')
        })
    })
}


/***/ }),

/***/ "./src/pagecards.js":
/*!**************************!*\
  !*** ./src/pagecards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCards: () => (/* binding */ renderCards)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _modulFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulFunc.js */ "./src/modulFunc.js");
/* harmony import */ var timer_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timer-node */ "./node_modules/timer-node/index.js");




function renderCards(pairCount) {
    const myTimer = new timer_node__WEBPACK_IMPORTED_MODULE_2__.Timer()
    const appEl = document.getElementById('app')
    const PageHtml = `
        <div class="center__second">
            <div class="second__main">
                <div>
                    <span class="timerMin">min</span>
                    <span class="timerSec">sec</span>
                    <div id="timer" class="timer">00:00</div>
                </div>
                <button class="game_butt" id="startGame">Начать заново</button>
            </div> 
            <div class="second">
                <div class="card-back"></div>
                <div class="card-deck"></div>  
            </div>
           
        </div>`
    const width = pairCount === 3 ? '400px' : pairCount === 6 ? '650px' : 'auto'

    appEl.innerHTML = PageHtml
    const timer = document.getElementById('timer')
    ;(0,_modulFunc_js__WEBPACK_IMPORTED_MODULE_1__.timerSet)(timer)
    const suits = ['clubs', 'diamonds', 'hearts', 'spades']
    const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    const deck = []
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push({
                suit: suits[i],
                rank: ranks[j],
            })
        }
    }

    const allCards = []
    for (let i = 0; i < pairCount; i++) {
        const randomCard = deck[Math.floor(Math.random() * deck.length)]
        allCards.push(randomCard)
        allCards.push(randomCard)
    }

    allCards.sort(() => Math.random() - 0.5)

    let cardsHtml = `<div class="row" style="width: ${width}" >`
    for (let i = 0; i < allCards.length; i++) {
        cardsHtml += `
            <div class="card ${allCards[i].rank}" data-suit ="${allCards[i].suit}"data-rank="${allCards[i].rank}">
                <div class="symbol-top-left"><div>${allCards[i].rank}</div><div class="block-symbol"><img src="./src/img/${allCards[i].suit}.svg"></div></div>
                <div class="center__suit"><img src="./src/img/${allCards[i].suit}.svg"></div>
                <div class="symbol-bottom-right"><div>${allCards[i].rank}</div><div class="block-symbol"><img src="./src/img/${allCards[i].suit}.svg"></div></div>
            </div>`
    }
    cardsHtml += '</div>'
    cardsHtml += `<div class="popup" id="popup-win">
    <div class="popup-content">
        <img src="./src/img/celebration.svg" alt="Win">
        <h3 class="popup-header">Вы выиграли!</h3>
        <p class="popup-text">Затраченное время:</p>
        <p class="popup-time" id="timeWin"></p>
        <button class="popup__btn">Играть снова</button>
    </div>
    </div>

    <div class="popup" id="popup-lose">
    <div class="popup-content">
        <img src="./src/img/dead.svg" alt="Lose">
        <h3 class="popup-header">Вы проиграли!</h3>
        <p class="popup-text">Затраченное время:</p>
        <p class="popup-time" id="timeLose"></p>
        <button class="popup__btn">Играть снова</button>
    </div>
    </div>`

    setTimeout(_modulFunc_js__WEBPACK_IMPORTED_MODULE_1__.changeCardStyle, 5000)
    document.querySelector('.card-deck').innerHTML = cardsHtml

    const goBegin = document.getElementById('startGame')
    goBegin.addEventListener('click', () => {
        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.renderChoosePage)()
    })

    let firstCard = null
    let pairsFound = null

    function clickCardHandler(event) {
        const card = event.target.closest('.card')
        let timeValue = myTimer.format('%m.%s')

        if (
            !card.classList.contains('selected') ||
            card.classList.contains('card-selected') ||
            card.classList.contains('card-paired')
        ) {
            return
        }
        myTimer.start()

        if (!firstCard) {
            firstCard = card
            firstCard.classList.add('card-selected')
        } else {
            let secondCard = card
            if (firstCard && secondCard) {
                if (
                    firstCard.dataset.rank === secondCard.dataset.rank &&
                    firstCard.dataset.suit === secondCard.dataset.suit
                ) {
                    firstCard.classList.add('card-paired')
                    secondCard.classList.add('card-paired')
                    pairsFound++
                    if (pairsFound === cards.length / 2) {
                        myTimer.stop()
                        const popupWin = document.querySelector('#popup-win')
                        popupWin.style.display = 'block'
                        document.getElementById('timeWin').innerHTML = timeValue
                    }
                } else {
                    myTimer.stop()
                    const popupLose = document.querySelector('#popup-lose')
                    popupLose.style.display = 'block'
                    firstCard.classList.remove('card-selected')
                    secondCard.classList.remove('card-selected')
                    ;(0,_modulFunc_js__WEBPACK_IMPORTED_MODULE_1__.showAllCards)()
                    document.getElementById('timeLose').innerHTML = timeValue
                }
                firstCard = null
                secondCard = null
            } else {
                firstCard = card
                firstCard.classList.add('card-selected')
            }
        }
    }

    const cards = document.querySelectorAll('.card')

    for (const card of cards) {
        card.addEventListener('click', clickCardHandler)
    }

    const popupCloseBtns = document.querySelectorAll('.popup__btn')
    popupCloseBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const popup = this.closest('.popup')
            popup.style.display = 'none'
            renderCards(_index_js__WEBPACK_IMPORTED_MODULE_0__.level)
        })
    })
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ 	__webpack_require__("./style.css");
/******/ 	var __webpack_exports__ = __webpack_require__("./style.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
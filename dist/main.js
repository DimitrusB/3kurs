/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/timer-node/index.js":
/*!******************************************!*\
  !*** ./node_modules/timer-node/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { Timer } = __webpack_require__(/*! ./src/timer */ \"./node_modules/timer-node/src/timer.js\");\n\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack://3kurs/./node_modules/timer-node/index.js?");

/***/ }),

/***/ "./node_modules/timer-node/src/timer.js":
/*!**********************************************!*\
  !*** ./node_modules/timer-node/src/timer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * timer-node\n * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>\n * @license MIT\n */\n\n/**\n * @class Timer\n */\nclass Timer {\n  /**\n   * Creates a new timer\n   * @param {object} [options]\n   * @return {Timer}\n   */\n  constructor(options = {}) {\n    const {\n      label,\n      startTimestamp,\n      endTimestamp,\n      currentStartTimestamp,\n      pauseCount,\n      accumulatedMs\n    } = options;\n\n    const startTs = (startTimestamp >= 0 && startTimestamp < Date.now())\n      ? startTimestamp\n      : undefined;\n\n    const endTs = (startTs >= 0 && endTimestamp > 0 && endTimestamp > startTs)\n      ? endTimestamp\n      : undefined;\n\n    const currentTs = (currentStartTimestamp >= startTs\n      && (!endTs || currentStartTimestamp < endTs))\n      ? currentStartTimestamp\n      : startTs;\n\n    const isStarted = startTimestamp >= 0;\n    const isRunning = currentStartTimestamp !== undefined;\n    const wasPausedAtLeastOneTime = pauseCount > 0;\n    const isPaused = isStarted && !isRunning && wasPausedAtLeastOneTime;\n\n    this._label = label || '';\n    this._startTimestamp = startTs;\n    this._currentStartTimestamp = !isPaused ? currentTs : undefined;\n    this._endTimestamp = endTs;\n    this._pauseCount = pauseCount || 0;\n    this._accumulatedMs = accumulatedMs || 0;\n  }\n\n  /**\n   * @public\n   * @return {string}\n   */\n  getLabel() {\n    return this._label;\n  }\n\n  /**\n   * @public\n   * @return {boolean}\n   */\n  isStarted() {\n    return this._startTimestamp >= 0;\n  }\n\n  /**\n   * @public\n   * @return {boolean}\n   */\n  isPaused() {\n    return this.isStarted() && this._currentStartTimestamp === undefined;\n  }\n\n  /**\n   * @public\n   * @return {boolean}\n   */\n  isStopped() {\n    return this._endTimestamp > 0;\n  }\n\n  /**\n   * @public\n   * @return {boolean}\n   */\n  isRunning() {\n    return this.isStarted() && !this.isPaused() && !this.isStopped();\n  }\n\n  /**\n   * Start the timer\n   * @public\n   * @return {Timer}\n   */\n  start() {\n    if (this.isStarted() && !this.isStopped()) {\n      return this;\n    }\n\n    this.clear();\n    this._startTimestamp = Date.now();\n    this._currentStartTimestamp = this._startTimestamp;\n    return this;\n  }\n\n  /**\n   * Pause the timer\n   * @public\n   * @return {Timer}\n   */\n  pause() {\n    if (this.isPaused() || !this.isStarted() || this.isStopped()) {\n      return this;\n    }\n\n    this._pauseCount += 1;\n    this._accumulatedMs += Date.now() - this._currentStartTimestamp;\n    this._currentStartTimestamp = undefined;\n    return this;\n  }\n\n  /**\n   * Resume the paused timer\n   * @public\n   * @return {Timer}\n   */\n  resume() {\n    if (!this.isPaused() || this.isStopped()) {\n      return this;\n    }\n\n    this._currentStartTimestamp = Date.now();\n    return this;\n  }\n\n  /**\n   * Stop the started timer\n   * @public\n   * @return {Timer}\n   */\n  stop() {\n    if (!this.isStarted()) {\n      return this;\n    }\n\n    this._endTimestamp = Date.now();\n    return this;\n  }\n\n  /**\n   * Returns the elapsed running time in milliseconds\n   * @public\n   * @return {number}\n   */\n  ms() {\n    if (!this.isStarted()) {\n      return 0;\n    }\n\n    if (this.isPaused()) {\n      return this._accumulatedMs;\n    }\n\n    const endTimestamp = this._endTimestamp || Date.now();\n    const currentMs = endTimestamp - this._currentStartTimestamp;\n    return currentMs + this._accumulatedMs;\n  }\n\n  /**\n   * Returns the total of milliseconds of pauses\n   * @public\n   * @return {number}\n   */\n  pauseMs() {\n    if (!this.isStarted()) {\n      return 0;\n    }\n\n    const endTimestamp = this._endTimestamp || Date.now();\n    return (endTimestamp - this._startTimestamp) - this.ms();\n  }\n\n  /**\n   * @private\n   * @return {object}\n   */\n  _getTime(ms) {\n    const s = Math.floor(ms / 1000);\n    const m = Math.floor(s / 60);\n    const h = Math.floor(m / 60);\n    const d = Math.floor(h / 24);\n\n    return {\n      ms: ms % 1000,\n      s: s % 60,\n      m: m % 60,\n      h: h % 24,\n      d\n    };\n  }\n\n  /**\n   * Returns the elapsed time as an object of time fractions\n   * @public\n   * @returns {object}\n   */\n  time() {\n    return this._getTime(this.ms());\n  }\n\n  /**\n   * Returns the paused time as an object of time fractions\n   * @public\n   * @returns {object}\n   */\n  pauseTime() {\n    return this._getTime(this.pauseMs());\n  }\n\n  /**\n   * Returns the number of pauses\n   * @public\n   * @returns {number}\n   */\n  pauseCount() {\n    return this._pauseCount;\n  }\n\n  /**\n   * Returns the start timestamp\n   * @public\n   * @returns {number}\n   */\n  startedAt() {\n    return this._startTimestamp;\n  }\n\n  /**\n   * Returns the stop timestamp\n   * @public\n   * @returns {number}\n   */\n  stoppedAt() {\n    return this._endTimestamp;\n  }\n\n  /**\n   * Format the recorded time using a template\n   * @public\n   * @param {string} template\n   * @returns {string}\n   */\n  format(template = '%label%d d, %h h, %m m, %s s, %ms ms') {\n    const time = this.time();\n    return template\n      .replace('%label', this._label ? `${this._label}: ` : '')\n      .replace('%ms', time.ms)\n      .replace('%s', time.s)\n      .replace('%m', time.m)\n      .replace('%h', time.h)\n      .replace('%d', time.d);\n  }\n\n  /**\n   * Clears the timer\n   * @public\n   * @return {Timer}\n   */\n  clear() {\n    this._startTimestamp = undefined;\n    this._currentStartTimestamp = undefined;\n    this._endTimestamp = undefined;\n    this._accumulatedMs = 0;\n    this._pauseCount = 0;\n    return this;\n  }\n\n  /**\n   * Serialize the timer\n   * @public\n   * @return {string}\n   */\n  serialize() {\n    return JSON.stringify({\n      startTimestamp: this._startTimestamp,\n      currentStartTimestamp: this._currentStartTimestamp,\n      endTimestamp: this._endTimestamp,\n      accumulatedMs: this._accumulatedMs,\n      pauseCount: this._pauseCount,\n      label: this._label\n    });\n  }\n\n  /**\n   * Deserialize the timer\n   * @public\n   * @param {string} serializedTime\n   * @return {Timer}\n   */\n  static deserialize(serializedTime) {\n    return new Timer(JSON.parse(serializedTime));\n  }\n\n  /**\n   * Creates a benchmark timer for a function call\n   * @public\n   * @static\n   * @param {function} fn\n   * @returns {Timer}\n   */\n  static benchmark(fn) {\n    if (typeof fn !== 'function') {\n      throw new Error('Timer.benchmark expects a function');\n    }\n\n    const timer = new Timer({ label: fn.name }).start();\n    fn();\n    return timer.stop();\n  }\n}\n\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack://3kurs/./node_modules/timer-node/src/timer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   level: () => (/* binding */ level),\n/* harmony export */   renderChoosePage: () => (/* binding */ renderChoosePage)\n/* harmony export */ });\n/* harmony import */ var _pagecards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagecards.js */ \"./src/pagecards.js\");\n\r\n\r\nlet level = null\r\nconst renderChoosePage = () => {\r\n    const appEl = document.getElementById('app')\r\n\r\n    const choosePageHtml = `\r\n    <div class=\"center\">\r\n    <div class=\"main__window\">\r\n        <div class=\"main__window_senc\">\r\n            <p>Выбери сложность</p>\r\n        </div>\r\n        <form class=\"main__window_form\">\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option1\" name=\"options\" value=\"Option 1\" > \r\n            <label for=\"option1\">1</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option2\" name=\"options\" value=\"Option 2\" >\r\n            <label for=\"option2\">2</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option3\" name=\"options\" value=\"Option 3\">\r\n            <label for=\"option3\">3</label>\r\n            </div>\r\n        </form>\r\n            <button class=\"main__window_butt\" id=\"chooseButton\">Старт</button>\r\n    </div>\r\n    `\r\n    appEl.innerHTML = choosePageHtml\r\n\r\n    const easyLevel = document.getElementById('option1')\r\n    const middleLevel = document.getElementById('option2')\r\n    const hardLevel = document.getElementById('option3')\r\n    const chooseButton = document.getElementById('chooseButton')\r\n    \r\n    \r\n    chooseButton.addEventListener('click', (event) => {\r\n        event.preventDefault()\r\n\r\n       \r\n\r\n        if (easyLevel.checked) {\r\n            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(3)\r\n            level = 3\r\n        } else if (middleLevel.checked) {\r\n            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(6)\r\n            level = 6\r\n        } else if (hardLevel.checked) {\r\n            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(9)\r\n            level = 9\r\n        } else{\r\n            alert('Выберите уровень сложности!!!')\r\n            return\r\n        }\r\n    })\r\n}\r\nrenderChoosePage()\r\n\n\n//# sourceURL=webpack://3kurs/./src/index.js?");

/***/ }),

/***/ "./src/modulFunc.js":
/*!**************************!*\
  !*** ./src/modulFunc.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timerSet: () => (/* binding */ timerSet)\n/* harmony export */ });\nfunction timerSet(timer) {\r\n    let time = 0\r\n\r\n    function updateTime() {\r\n        time++\r\n        const minutes = Math.floor(time / 60)\r\n        const seconds = Math.floor(time % 60)\r\n        const formattedTime = pad(minutes) + ':' + pad(seconds)\r\n        timer.textContent = formattedTime\r\n    }\r\n\r\n    function pad(value) {\r\n        return value < 10 ? '0' + value : value\r\n    }\r\n\r\n    const timerInterval = setInterval(updateTime, 1000)\r\n\r\n    function stopTimer() {\r\n        clearInterval(timerInterval)\r\n        return time\r\n    }\r\n\r\n    return {\r\n        stopTimer: stopTimer\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://3kurs/./src/modulFunc.js?");

/***/ }),

/***/ "./src/pagecards.js":
/*!**************************!*\
  !*** ./src/pagecards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCards: () => (/* binding */ renderCards)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _modulFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulFunc.js */ \"./src/modulFunc.js\");\n/* harmony import */ var timer_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timer-node */ \"./node_modules/timer-node/index.js\");\n\r\n\r\n\r\nfunction renderCards(pairCount) {\r\n    const appEl = document.getElementById('app')\r\n    const PageHtml = `\r\n        <div class=\"center__second\">\r\n            <div class=\"second__main\">\r\n                <div>\r\n                    <span class=\"timerMin\">min</span>\r\n                    <span class=\"timerSec\">sec</span>\r\n                    <div id=\"timer\" class=\"timer\">00:00</div>\r\n                </div>\r\n                <button class=\"game_butt\" id=\"startGame\">Начать заново</button>\r\n            </div> \r\n            <div class=\"second\">\r\n                <div class=\"card-back\"></div>\r\n                <div class=\"card-deck\"></div>  \r\n            </div>\r\n           \r\n        </div>\r\n        \r\n    `\r\n    appEl.innerHTML = PageHtml\r\n    const clubs ='<img src=\"./src/img/clubs.svg\">'\r\n    const diamonds = '<img src=\"./src/img/diamonds.svg\">'\r\n    const hearts = '<img src=\"./src/img/hearts.svg\">'\r\n    const spades = '<img src=\"./src/img/spades.svg\">'\r\n    const suits = [clubs, diamonds, hearts, spades]\r\n    const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']\r\n\r\n    const deck = []\r\n    for (let i = 0; i < suits.length; i++) {\r\n        for (let j = 0; j < ranks.length; j++) {\r\n            deck.push({\r\n                suit: suits[i],\r\n                rank: ranks[j],\r\n            })\r\n        }\r\n    }\r\n\r\n    const allCards = []\r\n    for (let i = 0; i < pairCount; i++) {\r\n        const randomCard = deck[Math.floor(Math.random() * deck.length)]\r\n        allCards.push(randomCard)\r\n        allCards.push(randomCard)\r\n    }\r\n\r\n    allCards.sort(() => Math.random() - 0.5)\r\n    \r\n    \r\n    let timerValue=[]\r\n    let cardsHtml = '<div class=\"row\">'\r\n    for (let i = 0; i < allCards.length; i++) {\r\n        cardsHtml += `\r\n            <div class=\"card ${allCards[i].rank}\" data-rank=\"${allCards[i].rank}\">\r\n                <div class=\"symbol-top-left\"><div>${allCards[i].rank}</div><div class=\"block-symbol\">${allCards[i].suit}</div></div>\r\n                <div class=\"center__suit\">${allCards[i].suit}</div>\r\n                <div class=\"symbol-bottom-right\"><div>${allCards[i].rank}</div><div class=\"block-symbol\">${allCards[i].suit}</div></div>\r\n            </div>`\r\n    }\r\n    cardsHtml += '</div>'\r\n    cardsHtml += `<div class=\"popup\" id=\"popup-win\">\r\n    <div class=\"popup-content\">\r\n        <img src=\"./src/img/celebration.svg\" alt=\"Win\">\r\n        <h3 class=\"popup-header\">Вы выиграли!</h3>\r\n        <p class=\"popup-text\">Затраченное время:</p>\r\n        <p class=\"popup-text\">${timerValue}</p>\r\n        <button class=\"popup__btn\">Играть снова</button>\r\n    </div>\r\n    </div>\r\n\r\n    <div class=\"popup\" id=\"popup-lose\">\r\n    <div class=\"popup-content\">\r\n        <img src=\"./src/img/dead.svg\" alt=\"Lose\">\r\n        <h3 class=\"popup-header\">Вы проиграли!</h3>\r\n        <p class=\"popup-text\">Затраченное время:</p>\r\n        <p class=\"popup-text\">${timerValue}</p>\r\n        <button class=\"popup__btn\">Играть снова</button>\r\n    </div>\r\n    </div>`\r\n\r\n    document.querySelector('.card-deck').innerHTML = cardsHtml\r\n\r\n    const goBegin = document.getElementById('startGame')\r\n    goBegin.addEventListener('click', () => {\r\n        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.renderChoosePage)()\r\n    })\r\n    \r\n    const myTimer = new timer_node__WEBPACK_IMPORTED_MODULE_2__.Timer(document.getElementById('timer'))\r\n    myTimer.start()\r\n\r\n    let firstCard = null\r\n    let pairsFound = null\r\n\r\n    \r\n    console.log(timerValue);\r\n    // Функция, которая будет запускаться при клике на карту\r\n    function clickCardHandler(event) {\r\n        \r\n        const card = event.target.closest('.card')\r\n\r\n        if (card.classList.contains('card-paired')) {\r\n            return;\r\n        }\r\n\r\n        \r\n        if (!firstCard) {\r\n            firstCard = card\r\n            firstCard.classList.add('card-selected')\r\n        } else {\r\n            let secondCard = card\r\n            if (firstCard && secondCard) {\r\n                if (firstCard.dataset.rank === secondCard.dataset.rank) {\r\n                    firstCard.classList.add('card-paired')\r\n                    secondCard.classList.add('card-paired')\r\n                    pairsFound++\r\n                    if (pairsFound === cards.length / 2) {\r\n                        const popupWin = document.querySelector('#popup-win')\r\n                        popupWin.style.display = 'block'\r\n                        myTimer.stop();\r\n                        timerValue = myTimer.time();\r\n                        console.log(timerValue);\r\n\r\n                                        }\r\n                } else {\r\n                    const popupLose = document.querySelector('#popup-lose')\r\n                    popupLose.style.display = 'block'\r\n                    firstCard.classList.remove('card-selected')\r\n                    secondCard.classList.remove('card-selected')\r\n                    myTimer.stop();\r\n                    timerValue = myTimer.time();\r\n                    console.log(timerValue);\r\n                }\r\n                firstCard = null\r\n                secondCard = null\r\n            } else {\r\n                firstCard = card\r\n                firstCard.classList.add('card-selected')\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n    const cards = document.querySelectorAll('.card')\r\n\r\n    for (const card of cards) {\r\n        card.addEventListener('click', clickCardHandler)\r\n    }\r\n    const popupCloseBtns = document.querySelectorAll('.popup__btn');\r\n    popupCloseBtns.forEach(function (btn) {\r\n      btn.addEventListener('click', function () {\r\n        const popup = this.closest('.popup');\r\n        popup.style.display = 'none';\r\n        renderCards(_index_js__WEBPACK_IMPORTED_MODULE_0__.level)\r\n      });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://3kurs/./src/pagecards.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
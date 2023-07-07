/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   level: () => (/* binding */ level),\n/* harmony export */   renderChoosePage: () => (/* binding */ renderChoosePage)\n/* harmony export */ });\n/* harmony import */ var _pagecards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagecards.js */ \"./src/pagecards.js\");\n\r\n\r\nlet level = null\r\nconst renderChoosePage = () => {\r\n    const appEl = document.getElementById('app')\r\n\r\n    const choosePageHtml = `\r\n    <div class=\"center\">\r\n    <div class=\"main__window\">\r\n        <div class=\"main__window_senc\">\r\n            <p>Выбери сложность</p>\r\n        </div>\r\n        <form class=\"main__window_form\">\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option1\" name=\"options\" value=\"Option 1\" > \r\n            <label for=\"option1\">1</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option2\" name=\"options\" value=\"Option 2\" >\r\n            <label for=\"option2\">2</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option3\" name=\"options\" value=\"Option 3\">\r\n            <label for=\"option3\">3</label>\r\n            </div>\r\n        </form>\r\n            <button class=\"main__window_butt\" id=\"chooseButton\">Старт</button>\r\n    </div>\r\n    `\r\n    appEl.innerHTML = choosePageHtml\r\n\r\n    const easyLevel = document.getElementById('option1')\r\n    const middleLevel = document.getElementById('option2')\r\n    const hardLevel = document.getElementById('option3')\r\n    const chooseButton = document.getElementById('chooseButton')\r\n    \r\n    \r\n    chooseButton.addEventListener('click', (event) => {\r\n        event.preventDefault()\r\n\r\n       \r\n\r\n        if (easyLevel.checked) {\r\n            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(3)\r\n            level = 3\r\n        } else if (middleLevel.checked) {\r\n            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(6)\r\n            level = 6\r\n        } else if (hardLevel.checked) {\r\n            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(9)\r\n            level = 9\r\n        } else{\r\n            alert('Выберите уровень сложности!!!')\r\n            return\r\n        }\r\n    })\r\n}\r\nrenderChoosePage()\r\n\n\n//# sourceURL=webpack://3kurs/./src/index.js?");

/***/ }),

/***/ "./src/modulFunc.js":
/*!**************************!*\
  !*** ./src/modulFunc.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timerSet: () => (/* binding */ timerSet)\n/* harmony export */ });\nfunction timerSet(timer) {\r\n    let time = 0\r\n\r\n    function updateTime() {\r\n        time++\r\n        const minutes = Math.floor(time / 60)\r\n        const seconds = Math.floor(time % 60)\r\n        const formattedTime = pad(minutes) + ':' + pad(seconds)\r\n        timer.textContent = formattedTime\r\n    }\r\n\r\n    function pad(value) {\r\n        return value < 10 ? '0' + value : value\r\n    }\r\n\r\n    const timerInterval = setInterval(updateTime, 1000)\r\n\r\n    function stopTimer() {\r\n        clearInterval(timerInterval)\r\n        return time\r\n    }\r\n\r\n    return {\r\n        stopTimer: stopTimer\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://3kurs/./src/modulFunc.js?");

/***/ }),

/***/ "./src/pagecards.js":
/*!**************************!*\
  !*** ./src/pagecards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCards: () => (/* binding */ renderCards)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _modulFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulFunc.js */ \"./src/modulFunc.js\");\n\r\n\r\n\r\nfunction renderCards(pairCount) {\r\n    const appEl = document.getElementById('app')\r\n    const PageHtml = `\r\n        <div class=\"center__second\">\r\n            <div class=\"second__main\">\r\n                <div>\r\n                    <span class=\"timerMin\">min</span>\r\n                    <span class=\"timerSec\">sec</span>\r\n                    <div id=\"timer\" class=\"timer\">00:00</div>\r\n                </div>\r\n                <button class=\"game_butt\" id=\"startGame\">Начать заново</button>\r\n            </div> \r\n            <div class=\"second\">\r\n                <div class=\"card-back\"></div>\r\n                <div class=\"card-deck\"></div>  \r\n            </div>\r\n           \r\n        </div>\r\n        \r\n    `\r\n    appEl.innerHTML = PageHtml\r\n    const clubs ='<img src=\"./src/img/clubs.svg\">'\r\n    const diamonds = '<img src=\"./src/img/diamonds.svg\">'\r\n    const hearts = '<img src=\"./src/img/hearts.svg\">'\r\n    const spades = '<img src=\"./src/img/spades.svg\">'\r\n    const suits = [clubs, diamonds, hearts, spades]\r\n    const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']\r\n\r\n    const deck = []\r\n    for (let i = 0; i < suits.length; i++) {\r\n        for (let j = 0; j < ranks.length; j++) {\r\n            deck.push({\r\n                suit: suits[i],\r\n                rank: ranks[j],\r\n            })\r\n        }\r\n    }\r\n\r\n    const allCards = []\r\n    for (let i = 0; i < pairCount; i++) {\r\n        const randomCard = deck[Math.floor(Math.random() * deck.length)]\r\n        allCards.push(randomCard)\r\n        allCards.push(randomCard)\r\n    }\r\n\r\n    allCards.sort(() => Math.random() - 0.5)\r\n    let stoppedTime = 0\r\n\r\n    let cardsHtml = '<div class=\"row\">'\r\n    for (let i = 0; i < allCards.length; i++) {\r\n        cardsHtml += `\r\n            <div class=\"card ${allCards[i].rank}\" data-rank=\"${allCards[i].rank}\">\r\n                <div class=\"symbol-top-left\"><div>${allCards[i].rank}</div><div class=\"block-symbol\">${allCards[i].suit}</div></div>\r\n                <div class=\"center__suit\">${allCards[i].suit}</div>\r\n                <div class=\"symbol-bottom-right\"><div>${allCards[i].rank}</div><div class=\"block-symbol\">${allCards[i].suit}</div></div>\r\n            </div>`\r\n    }\r\n    cardsHtml += '</div>'\r\n    cardsHtml += `<div class=\"popup\" id=\"popup-win\">\r\n    <div class=\"popup-content\">\r\n        <img src=\"./src/img/celebration.svg\" alt=\"Win\">\r\n        <h3 class=\"popup-header\">Вы выиграли!</h3>\r\n        <p class=\"popup-text\">Затраченное время:</p>\r\n        <p class=\"popup-text\">${stoppedTime}</p>\r\n        <button class=\"popup__btn\">Играть снова</button>\r\n    </div>\r\n    </div>\r\n\r\n    <div class=\"popup\" id=\"popup-lose\">\r\n    <div class=\"popup-content\">\r\n        <img src=\"./src/img/dead.svg\" alt=\"Lose\">\r\n        <h3 class=\"popup-header\">Вы проиграли!</h3>\r\n        <p class=\"popup-text\">Затраченное время:</p>\r\n        <p class=\"popup-text\">${stoppedTime}</p>\r\n        <button class=\"popup__btn\">Играть снова</button>\r\n    </div>\r\n    </div>`\r\n\r\n    document.querySelector('.card-deck').innerHTML = cardsHtml\r\n\r\n    const goBegin = document.getElementById('startGame')\r\n    goBegin.addEventListener('click', () => {\r\n        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.renderChoosePage)()\r\n    })\r\n\r\n    const myTimer = (0,_modulFunc_js__WEBPACK_IMPORTED_MODULE_1__.timerSet)(document.getElementById('timer'))\r\n    ;(0,_modulFunc_js__WEBPACK_IMPORTED_MODULE_1__.timerSet)(timer)\r\n    \r\n    let firstCard = null\r\n    let pairsFound = null\r\n    \r\n    // Функция, которая будет запускаться при клике на карту\r\n    function clickCardHandler(event) {\r\n        \r\n        const card = event.target.closest('.card')\r\n\r\n        if (card.classList.contains('card-paired')) {\r\n            return;\r\n        }\r\n\r\n        if (!firstCard) {\r\n            firstCard = card\r\n            firstCard.classList.add('card-selected')\r\n        } else {\r\n            let secondCard = card\r\n            if (firstCard && secondCard) {\r\n                if (firstCard.dataset.rank === secondCard.dataset.rank) {\r\n                    firstCard.classList.add('card-paired')\r\n                    secondCard.classList.add('card-paired')\r\n                    pairsFound++\r\n                    if (pairsFound === cards.length / 2) {\r\n                        const popupWin = document.querySelector('#popup-win')\r\n                        popupWin.style.display = 'block'\r\n                    }\r\n                } else {\r\n                    const popupLose = document.querySelector('#popup-lose')\r\n                    popupLose.style.display = 'block'\r\n                    firstCard.classList.remove('card-selected')\r\n                    secondCard.classList.remove('card-selected')\r\n                }\r\n                firstCard = null\r\n                secondCard = null\r\n            } else {\r\n                firstCard = card\r\n                firstCard.classList.add('card-selected')\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n    const cards = document.querySelectorAll('.card')\r\n\r\n    for (const card of cards) {\r\n        card.addEventListener('click', clickCardHandler)\r\n    }\r\n    const popupCloseBtns = document.querySelectorAll('.popup__btn');\r\n    popupCloseBtns.forEach(function (btn) {\r\n      btn.addEventListener('click', function () {\r\n        const popup = this.closest('.popup');\r\n        popup.style.display = 'none';\r\n        renderCards(_index_js__WEBPACK_IMPORTED_MODULE_0__.level)\r\n      });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://3kurs/./src/pagecards.js?");

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
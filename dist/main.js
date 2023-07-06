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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderChoosePage: () => (/* binding */ renderChoosePage)\n/* harmony export */ });\n/* harmony import */ var _pagecards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagecards.js */ \"./src/pagecards.js\");\n\r\n\r\nconst renderChoosePage = () => {\r\n    const appEl = document.getElementById('app')\r\n\r\n    const choosePageHtml = `\r\n    <div class=\"center\">\r\n    <div class=\"main__window\">\r\n        <div class=\"main__window_senc\">\r\n            <p>Выбери сложность</p>\r\n        </div>\r\n        <form class=\"main__window_form\">\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option1\" name=\"options\" value=\"Option 1\" > \r\n            <label for=\"option1\">1</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option2\" name=\"options\" value=\"Option 2\" >\r\n            <label for=\"option2\">2</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option3\" name=\"options\" value=\"Option 3\">\r\n            <label for=\"option3\">3</label>\r\n            </div>\r\n        </form>\r\n            <button class=\"main__window_butt\" id=\"chooseButton\">Старт</button>\r\n    </div>\r\n    `\r\n    appEl.innerHTML = choosePageHtml\r\n\r\n    const easyLevel = document.getElementById('option1')\r\n    const middleLevel = document.getElementById('option2')\r\n    const hardLevel = document.getElementById('option3')\r\n    const chooseButton = document.getElementById('chooseButton')\r\n\r\n    chooseButton.addEventListener('click', (event) => {\r\n        event.preventDefault()\r\n\r\n        let level = ''\r\n\r\n        if (easyLevel.checked) {\r\n            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(3)\r\n        } else if (middleLevel.checked) {\r\n            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(6)\r\n        } else if (hardLevel.checked) {\r\n            (0,_pagecards_js__WEBPACK_IMPORTED_MODULE_0__.renderCards)(9)\r\n        } else if (!level) {\r\n            alert('Выберите уровень сложности!!!')\r\n            return\r\n        }\r\n    })\r\n}\r\nrenderChoosePage()\r\n\n\n//# sourceURL=webpack://3kurs/./src/index.js?");

/***/ }),

/***/ "./src/modulFunc.js":
/*!**************************!*\
  !*** ./src/modulFunc.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timerSet: () => (/* binding */ timerSet)\n/* harmony export */ });\nfunction timerSet(timer) {\n    let time = 0\n    function updateTime() {\n        time++\n        const minutes = Math.floor(time / 60)\n        const seconds = Math.floor(time % 60)\n        const formattedTime = pad(minutes) + ':' + pad(seconds)\n        timer.textContent = formattedTime\n    }\n\n    function pad(value) {\n        return value < 10 ? '0' + value : value\n    }\n    setInterval(updateTime, 1000)\n    updateTime()\n}\n\n\n//# sourceURL=webpack://3kurs/./src/modulFunc.js?");

/***/ }),

/***/ "./src/pagecards.js":
/*!**************************!*\
  !*** ./src/pagecards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCards: () => (/* binding */ renderCards)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _modulFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulFunc.js */ \"./src/modulFunc.js\");\n\r\n\r\n\r\nfunction renderCards(pairCount) {\r\n    const appEl = document.getElementById('app')\r\n    const PageHtml = `\r\n        <div class=\"center__second\">\r\n            <div class=\"second__main\">\r\n                <div>\r\n                    <span class=\"timerMin\">min</span>\r\n                    <span class=\"timerSec\">sec</span>\r\n                    <div id=\"timer\" class=\"timer\">00:00</div>\r\n                </div>\r\n                <button class=\"game_butt\" id=\"startGame\">Начать заново</button>\r\n            </div> \r\n            <div class=\"second\">\r\n                <div class=\"card-back\"></div>\r\n                <div class=\"card-deck\"></div>  \r\n            </div>\r\n        </div>\r\n    `\r\n    appEl.innerHTML = PageHtml\r\n\r\n    const suits = [\r\n        '<img src=\"./src/img/clubs.svg\">',\r\n        '<img src=\"./src/img/diamonds.svg\">',\r\n        '<img src=\"./src/img/hearts.svg\">',\r\n        '<img src=\"./src/img/spades.svg\">',\r\n    ]\r\n    const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']\r\n\r\n    const deck = []\r\n    for (let i = 0; i < suits.length; i++) {\r\n        for (let j = 0; j < ranks.length; j++) {\r\n            deck.push({\r\n                suit: suits[i],\r\n                rank: ranks[j],\r\n            })\r\n        }\r\n    }\r\n    \r\n    const allCards = []\r\n    for (let i = 0; i < pairCount; i++) {\r\n        const randomCard = deck[Math.floor(Math.random() * deck.length)]\r\n        allCards.push(randomCard)\r\n        allCards.push(randomCard)\r\n    }\r\n\r\n    allCards.sort(() => Math.random() - 0.5)\r\n\r\n   console.log(allCards);\r\n    let cardsHtml = '<div class=\"row\">'\r\n    for (let i = 0; i < allCards.length; i++) {\r\n        cardsHtml += `\r\n            <div class=\"card ${allCards[i].rank}\" data-rank=\"${allCards[i].rank}\">\r\n                <div class=\"symbol-top-left\"><div>${allCards[i].rank}</div><div class=\"block-symbol\">${allCards[i].suit}</div></div>\r\n                <div class=\"center__suit\">${allCards[i].suit}</div>\r\n                <div class=\"symbol-bottom-right\"><div>${allCards[i].rank}</div><div class=\"block-symbol\">${allCards[i].suit}</div></div>\r\n            </div>\r\n        `\r\n    }\r\n    cardsHtml += '</div>'\r\n\r\n    document.querySelector('.card-deck').innerHTML = cardsHtml\r\n\r\n    const goBegin = document.getElementById('startGame')\r\n    goBegin.addEventListener('click', () => {\r\n        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.renderChoosePage)()\r\n    })\r\n\r\n    const timer = document.getElementById('timer')\r\n    ;(0,_modulFunc_js__WEBPACK_IMPORTED_MODULE_1__.timerSet)(timer)\r\n\r\n    let firstCard = null;\r\n\r\n// Функция, которая будет запускаться при клике на карту\r\nfunction clickCardHandler(event) {\r\n    const card = event.target.closest('.card')\r\n    if (!firstCard) {\r\n        // Если еще не выбрана первая карта, то просто сохраняем ее в firstCard\r\n        firstCard = card\r\n        firstCard.classList.add('card-selected')\r\n    } else {\r\n        let secondCard = card // сохраняем выбранную вторую карту\r\n        if (firstCard && secondCard) {\r\n            // Если игрок выбрал две карты\r\n            if (firstCard.dataset.rank === secondCard.dataset.rank) {\r\n                // Если карты совпали\r\n                firstCard.classList.add('card-paired')\r\n                secondCard.classList.add('card-paired')\r\n            } else {\r\n                // Если карты не совпали\r\n                alert(\"Вы проиграли!\")\r\n                firstCard.classList.remove('card-selected')\r\n                secondCard.classList.remove('card-selected')\r\n            }\r\n            // Сбрасываем выбор карт\r\n            firstCard = null\r\n        } else {\r\n            // Если игрок выбрал только одну карту\r\n            firstCard = card\r\n            firstCard.classList.add('card-selected')\r\n        }\r\n    }\r\n}\r\n\r\n// Добавляем обработчик события для каждой карты\r\nconst cards = document.querySelectorAll('.card')\r\n\r\nfor (const card of cards) {\r\n    card.addEventListener('click', clickCardHandler)\r\n}\r\n}\n\n//# sourceURL=webpack://3kurs/./src/pagecards.js?");

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
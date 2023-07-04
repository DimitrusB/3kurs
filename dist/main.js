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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulFunc.js */ \"./src/modulFunc.js\");\n\n\nconst renderChoosePage = () => {\n    const appEl = document.getElementById('app')\n\n    const choosePageHtml = `\n    <div class=\"center\">\n    <div class=\"main__window\">\n        <div class=\"main__window_senc\">\n            <p>Выбери сложность</p>\n        </div>\n        <form class=\"main__window_form\">\n            <div  class=\"main__window_choose\">\n            <input type=\"radio\" id=\"option1\" name=\"options\" value=\"Option 1\" > \n            <label for=\"option1\">1</label>\n            </div>\n            <div  class=\"main__window_choose\">\n            <input type=\"radio\" id=\"option2\" name=\"options\" value=\"Option 2\" >\n            <label for=\"option2\">2</label>\n            </div>\n            <div  class=\"main__window_choose\">\n            <input type=\"radio\" id=\"option3\" name=\"options\" value=\"Option 3\">\n            <label for=\"option3\">3</label>\n            </div>\n        </form>\n            <button class=\"main__window_butt\" id=\"chooseButton\">Старт</button>\n    </div>\n    `\n    appEl.innerHTML = choosePageHtml\n\n    const easyLevel = document.getElementById('option1')\n    const middleLevel = document.getElementById('option2')\n    const hardLevel = document.getElementById('option3')\n    const chooseButton = document.getElementById('chooseButton')\n\n    function renderLevel(level) {\n        const renderLevelPage = `\n          <div>\n            <div>\n              <span class=\"timerMin\">min</span>\n              <span class=\"timerSec\">sec</span>\n              <button class=\"game_butt\" id=\"startGame\">Начать заново</button>\n            </div>\n            <div id=\"timer\" class=\"timer\">00:00</div>\n          </div>\n          <div class=\"center\">\n            <form class=\"main__window_choose\">\n              <input type=\"radio\" id=\"option${level}\" name=\"options\" value=\"Option ${level}\">\n              <label for=\"option${level}\">${level}</label>\n            </form>\n          </div>\n        `\n\n        appEl.innerHTML = renderLevelPage\n        const timer = document.getElementById('timer')\n        const goBegin = document.getElementById('startGame')\n        ;(0,_modulFunc_js__WEBPACK_IMPORTED_MODULE_0__.timerSet)(timer)\n\n        goBegin.addEventListener('click', () => {\n            renderChoosePage()\n        })\n    }\n\n    chooseButton.addEventListener('click', (event) => {\n        event.preventDefault()\n\n        let level = ''\n\n        if (easyLevel.checked) {\n            level = '1'\n        } else if (middleLevel.checked) {\n            level = '2'\n        } else if (hardLevel.checked) {\n            level = '3'\n        } else if (!level) {\n            alert('Выберите уровень сложности!!!')\n            return\n        }\n\n        renderLevel(level)\n    })\n}\nrenderChoosePage()\n\n\n//# sourceURL=webpack://3kurs/./src/index.js?");

/***/ }),

/***/ "./src/modulFunc.js":
/*!**************************!*\
  !*** ./src/modulFunc.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timerSet: () => (/* binding */ timerSet)\n/* harmony export */ });\nfunction timerSet(timer) {\n    let time = 0\n    function updateTime() {\n        time++\n        const minutes = Math.floor(time / 60)\n        const seconds = Math.floor(time % 60)\n        const formattedTime = pad(minutes) + ':' + pad(seconds)\n        timer.textContent = formattedTime\n    }\n\n    function pad(value) {\n        return value < 10 ? '0' + value : value\n    }\n    setInterval(updateTime, 1000)\n    updateTime()\n}\n\n\n//# sourceURL=webpack://3kurs/./src/modulFunc.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
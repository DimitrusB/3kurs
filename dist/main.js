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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("\r\n\r\nconst renderChoosePage = ()=>{\r\n    const appEl = document.getElementById('app');\r\n\r\n    const choosePageHtml = `\r\n    <div class=\"center\">\r\n    <div class=\"main__window\">\r\n        <div class=\"main__window_senc\">\r\n            <p>Выбери сложность</p>\r\n        </div>\r\n        <form class=\"main__window_form\">\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option1\" name=\"options\" value=\"Option 1\" > \r\n            <label for=\"option1\">1</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option2\" name=\"options\" value=\"Option 2\" >\r\n            <label for=\"option2\">2</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option3\" name=\"options\" value=\"Option 3\">\r\n            <label for=\"option3\">3</label>\r\n            </div>\r\n        </form>\r\n            <button class=\"main__window_butt\" id=\"chooseButton\">Старт</button>\r\n    </div>\r\n    `\r\n    appEl.innerHTML = choosePageHtml;\r\n\r\n    const easyLevel = document.getElementById('option1');\r\n    const middleLevel = document.getElementById('option2');\r\n    const hardLevel = document.getElementById('option3');\r\n    const chooseButton = document.getElementById('chooseButton');\r\n\r\n    chooseButton.addEventListener('click', (event) =>{\r\n        event.preventDefault();\r\n\r\n         let time = 0;\r\n     \r\n         function updateTime() {\r\n            time++;\r\n            const minutes = Math.floor(time / 60);\r\n            const seconds = Math.floor(time % 60);\r\n            const formattedTime = pad(minutes) + ':' + pad(seconds);\r\n            timer.textContent = formattedTime;\r\n          }\r\n\r\n        function pad(value) {\r\n            return value < 10 ? '0' + value : value;\r\n          }\r\n\r\n        setInterval(updateTime, 1000);\r\n    \r\n        if (easyLevel.checked){\r\n        const renderEasyPage =\r\n            `<span class=\"timerMin\">min</span>\r\n            <span class=\"timerSec\">sec</span>\r\n            <div id=\"timer\" class=\"timer\">00:00</div>\r\n            <div class=\"center\">\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option1\" name=\"options\" value=\"Option 1\" > \r\n            <label for=\"option1\">1</label>\r\n            </div>\r\n             </div>\r\n            `\r\n        appEl.innerHTML=renderEasyPage;\r\n        const timer = document.getElementById('timer');\r\n\r\n        updateTime();\r\n          }\r\n        else if (middleLevel.checked){\r\n            const renderMiddlePage =\r\n                `<span class=\"timerMin\">min</span>\r\n                <span class=\"timerSec\">sec</span>\r\n                <div id=\"timer\" class=\"timer\">00:00</div>\r\n                <div class=\"center\">\r\n                <div  class=\"main__window_choose\">\r\n                <input type=\"radio\" id=\"option2\" name=\"options\" value=\"Option 2\" >\r\n                <label for=\"option2\">2</label>\r\n                </div>\r\n                 </div>\r\n                `\r\n        appEl.innerHTML=renderMiddlePage;\r\n            }\r\n        else if (hardLevel.checked){\r\n            const renderHardPage =\r\n                    `<span class=\"timerMin\">min</span>\r\n                    <span class=\"timerSec\">sec</span>\r\n                    <div id=\"timer\" class=\"timer\">00:00</div>\r\n                    <div class=\"center\">\r\n                    <div  class=\"main__window_choose\">\r\n                    <input type=\"radio\" id=\"option3\" name=\"options\" value=\"Option 3\">\r\n                    <label for=\"option3\">3</label>\r\n                    </div>\r\n                     </div>\r\n                    `\r\n        appEl.innerHTML=renderHardPage;\r\n                }\r\n    })\r\n\r\n}\r\nrenderChoosePage();\r\n\r\n\r\n\n\n//# sourceURL=webpack://3kurs/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;
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

eval("\r\n\r\nconst renderChoosePage = ()=>{\r\n    const appEl = document.getElementById('app');\r\n\r\n    const choosePageHtml = `\r\n    <div class=\"center\">\r\n    <div class=\"main__window\">\r\n        <div class=\"main__window_senc\">\r\n            <p>Выбери сложность</p>\r\n        </div>\r\n        <form class=\"main__window_form\">\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option1\" name=\"options\" value=\"Option 1\" > \r\n            <label for=\"option1\">1</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option2\" name=\"options\" value=\"Option 2\" >\r\n            <label for=\"option2\">2</label>\r\n            </div>\r\n            <div  class=\"main__window_choose\">\r\n            <input type=\"radio\" id=\"option3\" name=\"options\" value=\"Option 3\">\r\n            <label for=\"option3\">3</label>\r\n            </div>\r\n        </form>\r\n            <button class=\"main__window_butt\">Старт</button>\r\n    </div>\r\n    `\r\n    appEl.innerHTML = choosePageHtml;\r\n\r\n}\r\n\r\nrenderChoosePage();\n\n//# sourceURL=webpack://3kurs/./index.js?");

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
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy */ \"./src/legacy.js\");\n/* harmony import */ var _legacy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_legacy__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar App = function App() {\n  console.log('App Initialized');\n};\n\nApp();\n\n//# sourceURL=webpack://insta_unfollow/./src/index.js?");

/***/ }),

/***/ "./src/legacy.js":
/*!***********************!*\
  !*** ./src/legacy.js ***!
  \***********************/
/***/ (() => {

eval("/*\n  Script-Writer     : <Jimish Fotariya>\n  CAUTION   : Use this script at your own risk :P [BTW I use this too, so nothing to worry ;) ]\n  PRIVACY   : By using this script, Nothing will affect on your privacy of account.\n  SECURITY  : Your PHOTOS & PASSWORD will be still secure because nothing is related to spoof in this script.\n\n  if you are still afraid of using this then learn Javascript and DOM to see what I've written.\n\n*/\nDEVMOD = \"false\" || 0;\n\nfunction console_clear(e) {\n  !DEVMOD ? console.clear() : e && e != undefined ? console.error(e) : null;\n}\n\nselectors = {\n  modalTrigger: 'Y8-fY',\n  unameElement: 'FPmhX',\n  userLi: 'NroHT',\n  closeBtn: 'pxaFn',\n  flwTitle: 'm82CD',\n  objDiv: 'j6cq2'\n};\nconsole_clear();\nconsole.log('%c Hold-back now, Let me process (Do not touch anything).. ', 'font-size:25px; color: #CD2020');\nconsole.log('%c Fetching your followers! [wait until finishes] ', 'font-size:25px; color: #70c050;');\nvar _x = {};\nvar objDiv = {};\n_x.followers = Array();\n_x.following = Array();\n_x.followers_elm = document.getElementsByClassName(selectors.modalTrigger)[1];\n_x.following_elm = document.getElementsByClassName(selectors.modalTrigger)[2];\nmaxLenIng = _x.following_elm.getElementsByTagName('span')[0].innerHTML;\nmaxLenEr = _x.followers_elm.getElementsByTagName('span')[0].innerHTML;\n_x.oldVal = 0;\n_x.repeatCount = 0;\n\n_x.TimesRepeted = function (l) {\n  if (_x.oldVal != l) {\n    _x.oldVal = l;\n    _x.repeatCount = 0;\n    return false;\n  }\n\n  _x.repeatCount++;\n\n  if (_x.repeatCount == 40) {\n    return true;\n  }\n\n  return false;\n};\n\nfunction updateFollowers() {\n  _x.f = document.getElementsByClassName(selectors.unameElement);\n\n  for (i = 0; i < _x.f.length; i++) {\n    if (_x.f[i] != undefined) {\n      _x.followers.push(_x.f[i].innerHTML);\n    }\n  }\n}\n\nfunction updateFollowing() {\n  _x.f = document.getElementsByClassName(selectors.unameElement);\n\n  for (i = 0; i < _x.f.length; i++) {\n    if (_x.f[i] != undefined) {\n      _x.following.push(_x.f[i].innerHTML);\n    }\n  } // for pushing up unfollowers\n\n\n  _x.notFollowBack = Array();\n\n  for (i = 0; i < _x.following.length; i++) {\n    if (!_x.followers.includes(_x.following[i])) {\n      _x.notFollowBack.push(_x.following[i]);\n    }\n  }\n\n  _x.f = document.getElementsByClassName(selectors.userLi);\n  document.getElementsByClassName(selectors.flwTitle)[0].innerHTML = \"<b style='color:red'>People Not follow back !!</b>\";\n\n  for (i in _x.f) {\n    if (_x.f[i] != undefined) {\n      try {\n        var tmpUname = _x.f[i].getElementsByClassName(selectors.unameElement)[0].innerHTML;\n\n        if (_x.notFollowBack.includes(tmpUname)) {// console.log(_x.f[i]);\n          // console.log( tmpUname );\n        } else {\n          // console.log(_x.f[i]);\n          _x.f[i].style.display = 'none'; // document.getElementsByClassName('_539vh')[0].removeChild(_x.f[i]);\n          // i--;\n        }\n      } catch (e) {}\n    }\n  }\n} /// ///  this block clicks  on following element\n\n\nfunction checkOutFollowing() {\n  _x.oldVal = 0;\n  _x.repeatCount = 0; // \"-\".repeat(100);\n\n  console.log('%c Fetching people you follow! [wait until finishes] ', 'font-size:25px; color: #70c050;');\n\n  _x.following_elm.getElementsByTagName('a')[0].click();\n\n  setTimeout(function () {\n    objDiv = document.getElementsByClassName(selectors.objDiv)[0]; // console.log(objDiv.getElementsByTagName('ul'));\n\n    flwngscr();\n  }, 1500);\n} /// ///\n\n\n_x.eventIng = new CustomEvent('flwngScrlDwn', {\n  bubbles: true,\n  cancelable: true\n});\n_x.eventEr = new CustomEvent('flwerScrlDwn', {\n  bubbles: true,\n  cancelable: true\n});\ndocument.addEventListener('flwerScrlDwn', flwerscr, false);\ndocument.addEventListener('flwngScrlDwn', flwngscr, false);\n\nfunction flwerscr() {\n  // try{\n  objDiv = document.getElementsByClassName(selectors.objDiv)[0];\n  divlen = objDiv.getElementsByTagName('ul')[0].childNodes.length; // console.log(maxLenEr ,divlen);\n\n  if (maxLenEr > divlen && !_x.TimesRepeted(divlen)) {\n    objDiv.scrollTop = objDiv.scrollHeight;\n    setTimeout(function () {\n      _x.following_elm.dispatchEvent(_x.eventEr);\n    }, 1500);\n  } else {\n    updateFollowers();\n    _x.closeBtn = document.querySelector('.' + selectors.closeBtn); // console.log(_x);\n\n    _x.closeBtn.click();\n\n    setTimeout(function () {\n      checkOutFollowing();\n    }, 500);\n  } // }catch(e){\n  // \t\tconsole_clear( e );\n  // \t\tconsole.log('%c ERROR :: You\\'ve Interrupted Process. Reload page and try again !! ', 'font-size:25px; color: red;');\n  // }\n\n}\n\nfunction flwngscr() {\n  try {\n    objDiv = document.getElementsByClassName(selectors.objDiv)[0];\n    divlen = objDiv.getElementsByTagName('ul')[0].childNodes.length; // _x.TimesRepeted(divlen);\n\n    if (maxLenIng > divlen && !_x.TimesRepeted(divlen)) {\n      objDiv.scrollTop = objDiv.scrollHeight;\n      setTimeout(function () {\n        _x.following_elm.dispatchEvent(_x.eventIng);\n      }, 1500);\n    } else {\n      updateFollowing();\n      console_clear();\n      '-'.repeat(100);\n      console.log('%c Here is all what you Wanted. (People who don\\'t follow you back)!!', 'font-size:25px; color: red');\n      '-'.repeat(100); // alert(\"Checkout pop-up\");\n\n      for (var _i = 0; _i < _x.notFollowBack.length; _i++) {\n        console.log(_i + 1 + '> %chttps://instagram.com/' + _x.notFollowBack[_i], 'font-size:16px;color:blue;text-decoration:underline');\n      }\n\n      console.log('%c Checkout Popup !! ', 'font-size:25px; color: #70c050;');\n      !DEVMOD ? _x = {} : null;\n      return;\n    }\n  } catch (e) {\n    console_clear(e);\n    console.log('%c ERROR :: You\\'ve Interrupted Process. Reload page and try again !! ', 'font-size:25px; color: red;');\n  }\n} /// ///  this block clicks  on followers element\n\n\n_x.followers_elm.getElementsByTagName('a')[0].click();\n\nsetTimeout(function () {\n  _x.tempContinude = 0; // console.log(objDiv.getElementsByTagName('ul'));\n\n  flwerscr();\n}, 1500); /// ///\n\n//# sourceURL=webpack://insta_unfollow/./src/legacy.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
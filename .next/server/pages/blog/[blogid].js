"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[blogid]";
exports.ids = ["pages/blog/[blogid]"];
exports.modules = {

/***/ "./src/pages/blog/[blogid].js":
/*!************************************!*\
  !*** ./src/pages/blog/[blogid].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Blog({ title , description  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/darreltrinh/Documents/Github/nextjs/next-misc/src/pages/blog/[blogid].js\",\n                        lineNumber: 7,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: description\n                    }, void 0, false, {\n                        fileName: \"/Users/darreltrinh/Documents/Github/nextjs/next-misc/src/pages/blog/[blogid].js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darreltrinh/Documents/Github/nextjs/next-misc/src/pages/blog/[blogid].js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"content\",\n                children: [\n                    \"Env Analytics \",\n                    \"123\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darreltrinh/Documents/Github/nextjs/next-misc/src/pages/blog/[blogid].js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\nasync function getServerSideProps() {\n    const user = process.env.DB_USER;\n    const password = process.env.DB_PASSWORD;\n    console.log(`Connecting to DB with user ${user} and password ${password}`);\n    return {\n        props: {\n            title: \"Article Title\",\n            description: \"Article description\"\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9bYmxvZ2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRCO0FBRTVCLFNBQVNDLEtBQUssRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUUsRUFBRTtJQUNsQyxxQkFDSTs7MEJBQ0ksOERBQUNILGtEQUFJQTs7a0NBQ0QsOERBQUNFO2tDQUFPQTs7Ozs7O2tDQUNSLDhEQUFDRTt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBU0g7Ozs7Ozs7Ozs7OzswQkFFdEMsOERBQUNJO2dCQUFHQyxXQUFVOztvQkFBVTtvQkFDTEMsS0FBb0M7Ozs7Ozs7OztBQUluRTtBQUVBLGlFQUFlUixJQUFJQSxFQUFBO0FBRVosZUFBZVcscUJBQXFCO0lBQ3ZDLE1BQU1DLE9BQU9KLFFBQVFDLEdBQUcsQ0FBQ0ksT0FBTztJQUNoQyxNQUFNQyxXQUFXTixRQUFRQyxHQUFHLENBQUNNLFdBQVc7SUFFeENDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLDJCQUEyQixFQUFFTCxLQUFLLGNBQWMsRUFBRUUsU0FBUyxDQUFDO0lBRXpFLE9BQU87UUFDSEksT0FBTztZQUNIakIsT0FBTztZQUNQQyxhQUFhO1FBQ2pCO0lBQ0o7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1taXNjLy4vc3JjL3BhZ2VzL2Jsb2cvW2Jsb2dpZF0uanM/YzczMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcblxuZnVuY3Rpb24gQmxvZyh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIEVudiBBbmFseXRpY3Mge3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19JRH1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IHVzZXIgPSBwcm9jZXNzLmVudi5EQl9VU0VSXG4gICAgY29uc3QgcGFzc3dvcmQgPSBwcm9jZXNzLmVudi5EQl9QQVNTV09SRFxuXG4gICAgY29uc29sZS5sb2coYENvbm5lY3RpbmcgdG8gREIgd2l0aCB1c2VyICR7dXNlcn0gYW5kIHBhc3N3b3JkICR7cGFzc3dvcmR9YClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0FydGljbGUgVGl0bGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBcnRpY2xlIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgfSxcbiAgICB9XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJCbG9nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImgxIiwiY2xhc3NOYW1lIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FOQUxZVElDU19JRCIsImdldFNlcnZlclNpZGVQcm9wcyIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog/[blogid].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/blog/[blogid].js"));
module.exports = __webpack_exports__;

})();
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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_configs_db_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/configs/db.config.js */ \"./src/configs/db.config.js\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nvar rfs = __webpack_require__(/*! rotating-file-stream */ \"rotating-file-stream\");\nvar path = __webpack_require__(/*! path */ \"path\");\n\ndotenv.config();\n(0,_src_configs_db_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar port = process.env.PORT || 1337;\nvar isProduction = \"development\" === \"production\";\nvar app = express();\napp.use(helmet());\nvar accessLogStream = rfs.createStream(\"access.log\", {\n  interval: \"1d\",\n  path: path.join(__dirname, \"log\")\n});\napp.use(isProduction ? morgan(\"combined\", {\n  stream: accessLogStream\n}) : morgan(\"dev\"));\napp.use(cors());\napp.use(express.json());\napp.use(\"/api\", (__webpack_require__(/*! ./src/routes/router */ \"./src/routes/router.js\")[\"default\"]));\napp.get(\"/\", function (req, res) {\n  res.json({\n    message: \"Hello world!\"\n  });\n});\napp.get(\"*\", function (req, res) {\n  res.json({\n    message: \"Hello world!\"\n  });\n});\napp.listen(port, function () {\n  console.log(\"Listening at http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://book_directory/./index.js?");

/***/ }),

/***/ "./src/configs/db.config.js":
/*!**********************************!*\
  !*** ./src/configs/db.config.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nvar connectDatabase = function connectDatabase() {\n  var mongoDbUrl = \"mongodb+srv://\".concat(process.env.MONGO_USER, \":\").concat(process.env.MONGO_PASSWORD).concat(process.env.MONGO_URL);\n  console.log(\"Connecting to \".concat(mongoDbUrl));\n  (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Promise) = global.Promise;\n  // connecting to database\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(mongoDbUrl, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  }).then(function () {\n    console.log(\"Successfully connected to the database\");\n  })[\"catch\"](function (err) {\n    console.log(\"Could not connect to the database. Exiting now...\", err);\n    process.exit();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDatabase);\n\n//# sourceURL=webpack://book_directory/./src/configs/db.config.js?");

/***/ }),

/***/ "./src/controllers/todo.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/todo.controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar TodoService = __webpack_require__(/*! ../services/todo.service.js */ \"./src/services/todo.service.js\");\nvar TodoController = {};\nTodoController.getAllTodos = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var todos;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return TodoService.getAllTodos();\n        case 3:\n          todos = _context.sent;\n          res.status(200).json({\n            todos: todos\n          });\n          _context.next = 10;\n          break;\n        case 7:\n          _context.prev = 7;\n          _context.t0 = _context[\"catch\"](0);\n          res.status(400).json({\n            message: _context.t0.message\n          });\n        case 10:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoController);\n\n//# sourceURL=webpack://book_directory/./src/controllers/todo.controller.js?");

/***/ }),

/***/ "./src/models/todo.model.js":
/*!**********************************!*\
  !*** ./src/models/todo.model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\nvar TodoSchema = Schema({\n  name: String\n});\nvar TodoModel = mongoose.model(\"Todos\", TodoSchema, \"todos\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoModel);\n\n//# sourceURL=webpack://book_directory/./src/models/todo.model.js?");

/***/ }),

/***/ "./src/routes/router.js":
/*!******************************!*\
  !*** ./src/routes/router.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.routes */ \"./src/routes/todo.routes.js\");\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar apiRoute = express();\napiRoute.use(\"/todo\", _todo_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiRoute);\n\n//# sourceURL=webpack://book_directory/./src/routes/router.js?");

/***/ }),

/***/ "./src/routes/todo.routes.js":
/*!***********************************!*\
  !*** ./src/routes/todo.routes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_todo_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/todo.controller */ \"./src/controllers/todo.controller.js\");\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\nrouter.get(\"/\", function (req, res) {\n  return _controllers_todo_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTodos();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://book_directory/./src/routes/todo.routes.js?");

/***/ }),

/***/ "./src/services/todo.service.js":
/*!**************************************!*\
  !*** ./src/services/todo.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar TodoModel = __webpack_require__(/*! ../models/todo.model */ \"./src/models/todo.model.js\");\nvar TodoService = {};\nTodoService.getAllTodos = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n    while (1) switch (_context.prev = _context.next) {\n      case 0:\n        _context.next = 2;\n        return TodoModel.find({});\n      case 2:\n        return _context.abrupt(\"return\", _context.sent);\n      case 3:\n      case \"end\":\n        return _context.stop();\n    }\n  }, _callee);\n}));\n\n//# sourceURL=webpack://book_directory/./src/services/todo.service.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "rotating-file-stream":
/*!***************************************!*\
  !*** external "rotating-file-stream" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("rotating-file-stream");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
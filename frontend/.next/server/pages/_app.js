module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ \"./store.ts\");\nvar _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n //import { WebSocketLink } from \"@apollo/link-ws\";\n\nconst authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__[\"setContext\"])((_, {\n  headers\n}) => {\n  const token = localStorage.getItem(\"user\");\n  return {\n    headers: _objectSpread(_objectSpread({}, headers), {}, {\n      authorization: token && `bearer ${token}`\n    })\n  };\n});\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"HttpLink\"]({\n  url: \"http://localhost:4000\"\n}); // const wsLink = new WebSocketLink({\n// \turl: \"ws://localhost:4000/graphql\",\n// \toption: {\n// \t\treconnect: true,\n// \t},\n// });\n\nconst splitLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"split\"])(({\n  query\n}) => {\n  const definition = Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__[\"getMainDefinition\"])(query);\n  return definition.kind === \"OperationDefinition\" && definition.operation === \"subscription\";\n}, //\twsLink,\nauthLink.concat(httpLink));\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"](),\n  link: splitLink\n});\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  // eslint-disable-next-line react/prop-types\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_6__[\"useStore\"])(pageProps.initialReduxStore);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 3\n    }\n  }, __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: client,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJoZWFkZXJzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0aG9yaXphdGlvbiIsImh0dHBMaW5rIiwiSHR0cExpbmsiLCJ1cmwiLCJzcGxpdExpbmsiLCJzcGxpdCIsInF1ZXJ5IiwiZGVmaW5pdGlvbiIsImdldE1haW5EZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsImNvbmNhdCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImxpbmsiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwidXNlU3RvcmUiLCJpbml0aWFsUmVkdXhTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtDQUVBOztBQUVBLE1BQU1BLFFBQVEsR0FBR0Msc0VBQVUsQ0FBQyxDQUFDQyxDQUFELEVBQUk7QUFBRUM7QUFBRixDQUFKLEtBQW9CO0FBQy9DLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQWQ7QUFDQSxTQUFPO0FBQ05ILFdBQU8sa0NBQ0hBLE9BREc7QUFFTkksbUJBQWEsRUFBRUgsS0FBSyxJQUFLLFVBQVNBLEtBQU07QUFGbEM7QUFERCxHQUFQO0FBTUEsQ0FSMEIsQ0FBM0I7QUFVQSxNQUFNSSxRQUFRLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFiLENBQWpCLEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsU0FBUyxHQUFHQyw0REFBSyxDQUN0QixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQ2QsUUFBTUMsVUFBVSxHQUFHQyxrRkFBaUIsQ0FBQ0YsS0FBRCxDQUFwQztBQUNBLFNBQ0NDLFVBQVUsQ0FBQ0UsSUFBWCxLQUFvQixxQkFBcEIsSUFDQUYsVUFBVSxDQUFDRyxTQUFYLEtBQXlCLGNBRjFCO0FBSUEsQ0FQcUIsRUFRdEI7QUFDQWpCLFFBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0JWLFFBQWhCLENBVHNCLENBQXZCO0FBWUEsTUFBTVcsTUFBTSxHQUFHLElBQUlDLDJEQUFKLENBQWlCO0FBQy9CQyxPQUFLLEVBQUUsSUFBSUMsNERBQUosRUFEd0I7QUFFL0JDLE1BQUksRUFBRVo7QUFGeUIsQ0FBakIsQ0FBZjs7QUFLQSxNQUFNYSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUEyQztBQUN4RDtBQUNBLFFBQU1DLEtBQUssR0FBR0MsdURBQVEsQ0FBQ0YsU0FBUyxDQUFDRyxpQkFBWCxDQUF0QjtBQUVBLFNBQ0MsTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRUYsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFUixNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxTQUFELGVBQWVPLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURELENBREQsQ0FERDtBQU9BLENBWEQ7O0FBYWVGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdEFwb2xsb0NsaWVudCxcblx0SHR0cExpbmssXG5cdEluTWVtb3J5Q2FjaGUsXG5cdEFwb2xsb1Byb3ZpZGVyLFxuXHRzcGxpdCxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIjtcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tIFwiYXBvbGxvLWxpbmstY29udGV4dFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG4vL2ltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tIFwiQGFwb2xsby9saW5rLXdzXCI7XG5cbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcblx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG5cdHJldHVybiB7XG5cdFx0aGVhZGVyczoge1xuXHRcdFx0Li4uaGVhZGVycyxcblx0XHRcdGF1dGhvcml6YXRpb246IHRva2VuICYmIGBiZWFyZXIgJHt0b2tlbn1gLFxuXHRcdH0sXG5cdH07XG59KTtcblxuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoeyB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCIgfSk7XG5cbi8vIGNvbnN0IHdzTGluayA9IG5ldyBXZWJTb2NrZXRMaW5rKHtcbi8vIFx0dXJsOiBcIndzOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxuLy8gXHRvcHRpb246IHtcbi8vIFx0XHRyZWNvbm5lY3Q6IHRydWUsXG4vLyBcdH0sXG4vLyB9KTtcblxuY29uc3Qgc3BsaXRMaW5rID0gc3BsaXQoXG5cdCh7IHF1ZXJ5IH0pID0+IHtcblx0XHRjb25zdCBkZWZpbml0aW9uID0gZ2V0TWFpbkRlZmluaXRpb24ocXVlcnkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHRkZWZpbml0aW9uLmtpbmQgPT09IFwiT3BlcmF0aW9uRGVmaW5pdGlvblwiICYmXG5cdFx0XHRkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gXCJzdWJzY3JpcHRpb25cIlxuXHRcdCk7XG5cdH0sXG5cdC8vXHR3c0xpbmssXG5cdGF1dGhMaW5rLmNvbmNhdChodHRwTGluaylcbik7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuXHRjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcblx0bGluazogc3BsaXRMaW5rLFxufSk7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSk6IEpTWC5FbGVtZW50ID0+IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcblx0Y29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFJlZHV4U3RvcmUpO1xuXG5cdHJldHVybiAoXG5cdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0XHQ8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHQ8L0Fwb2xsb1Byb3ZpZGVyPlxuXHRcdDwvUHJvdmlkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./reducers/reducers.ts":
/*!******************************!*\
  !*** ./reducers/reducers.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst reducers = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(reducers));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZWR1Y2Vycy50cz82ZjI2Il0sIm5hbWVzIjpbInJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFFBQVEsR0FBRyxFQUFqQjtBQUVlQyw0SEFBZSxDQUFDRCxRQUFELENBQTlCIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcmVkdWNlcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3QgcmVkdWNlcnMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/reducers.ts\n");

/***/ }),

/***/ "./store.ts":
/*!******************!*\
  !*** ./store.ts ***!
  \******************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/reducers */ \"./reducers/reducers.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import { composeWithDevTools } from \"redux-devtools-extension\";\n//import thunkMiddleware from \"redux-thunk\";\n\n\nlet store;\n\nfunction initStore(initialState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState //\tcomposeWithDevTools(applyMiddleware(thunkMiddleware))\n  );\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS50cz9jMzA5Il0sIm5hbWVzIjpbInN0b3JlIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsImluaXRpYWxpemVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBOztBQUNBO0FBRUEsSUFBSUEsS0FBSjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxZQUFuQixFQUFpQztBQUNoQyxTQUFPQyx5REFBVyxDQUNqQkMsMERBRGlCLEVBRWpCRixZQUZpQixDQUdqQjtBQUhpQixHQUFsQjtBQUtBOztBQUVNLE1BQU1HLGVBQWUsR0FBSUMsY0FBRCxJQUFvQjtBQUFBOztBQUNsRCxNQUFJQyxNQUFNLGNBQUdQLEtBQUgsNkNBQVlDLFNBQVMsQ0FBQ0ssY0FBRCxDQUEvQixDQURrRCxDQUdsRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUlOLEtBQXRCLEVBQTZCO0FBQzVCTyxVQUFNLEdBQUdOLFNBQVMsaUNBQ2RELEtBQUssQ0FBQ1EsUUFBTixFQURjLEdBRWRGLGNBRmMsRUFBbEIsQ0FENEIsQ0FLNUI7O0FBQ0FOLFNBQUssR0FBR1MsU0FBUjtBQUNBLEdBWmlELENBY2xEOzs7QUFDQSxZQUFtQyxPQUFPRixNQUFQLENBZmUsQ0FnQmxEOztBQUNBLE1BQUksQ0FBQ1AsS0FBTCxFQUFZQSxLQUFLLEdBQUdPLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0EsQ0FwQk07QUFzQkEsU0FBU0csUUFBVCxDQUFrQlIsWUFBbEIsRUFBZ0M7QUFDdEMsUUFBTUYsS0FBSyxHQUFHVyxxREFBTyxDQUFDLE1BQU1OLGVBQWUsQ0FBQ0gsWUFBRCxDQUF0QixFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT0YsS0FBUDtBQUNBIiwiZmlsZSI6Ii4vc3RvcmUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG4vLyBpbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuLy9pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuL3JlZHVjZXJzL3JlZHVjZXJzXCI7XG5cbmxldCBzdG9yZTtcblxuZnVuY3Rpb24gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSkge1xuXHRyZXR1cm4gY3JlYXRlU3RvcmUoXG5cdFx0cmVkdWNlcnMsXG5cdFx0aW5pdGlhbFN0YXRlXG5cdFx0Ly9cdGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcblx0bGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSk7XG5cblx0Ly8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXG5cdC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXG5cdGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xuXHRcdF9zdG9yZSA9IGluaXRTdG9yZSh7XG5cdFx0XHQuLi5zdG9yZS5nZXRTdGF0ZSgpLFxuXHRcdFx0Li4ucHJlbG9hZGVkU3RhdGUsXG5cdFx0fSk7XG5cdFx0Ly8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcblx0XHRzdG9yZSA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX3N0b3JlO1xuXHQvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxuXHRpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZTtcblxuXHRyZXR1cm4gX3N0b3JlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuXHRjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcblx0cmV0dXJuIHN0b3JlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client/utilities\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIj9lNDYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhcG9sbG8vY2xpZW50L3V0aWxpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client/utilities\n");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-context\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1jb250ZXh0XCI/YmQ1MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1jb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstY29udGV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-context\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });
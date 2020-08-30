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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ \"./store.ts\");\n/* harmony import */ var _apollo_link_ws__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/link-ws */ \"@apollo/link-ws\");\n/* harmony import */ var _apollo_link_ws__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_ws__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nconst authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__[\"setContext\"])((_, {\n  headers\n}) => {\n  const token = localStorage.getItem(\"user\");\n  return {\n    headers: _objectSpread(_objectSpread({}, headers), {}, {\n      authorization: token && `bearer ${token}`\n    })\n  };\n});\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"HttpLink\"]({\n  uri: \"http://localhost:4000/graphql\"\n});\nconst wsLink = new _apollo_link_ws__WEBPACK_IMPORTED_MODULE_7__[\"WebSocketLink\"]({\n  uri: \"ws://localhost:4000/graphql\",\n  option: {\n    reconnect: true\n  }\n});\nconst splitLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"split\"])(({\n  query\n}) => {\n  const definition = Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__[\"getMainDefinition\"])(query);\n  return definition.kind === \"OperationDefinition\" && definition.operation === \"subscription\";\n}, wsLink, authLink.concat(httpLink)); // const client = new ApolloClient({\n// \tcache: new InMemoryCache(),\n// \tlink: splitLink,\n// });\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"](),\n  link: authLink.concat(httpLink) // link: splitLink,\n\n});\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  // eslint-disable-next-line react/prop-types\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_6__[\"useStore\"])(pageProps.initialReduxStore);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 3\n    }\n  }, __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n    client: client,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 4\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbImF1dGhMaW5rIiwic2V0Q29udGV4dCIsIl8iLCJoZWFkZXJzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0aG9yaXphdGlvbiIsImh0dHBMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJ3c0xpbmsiLCJXZWJTb2NrZXRMaW5rIiwib3B0aW9uIiwicmVjb25uZWN0Iiwic3BsaXRMaW5rIiwic3BsaXQiLCJxdWVyeSIsImRlZmluaXRpb24iLCJnZXRNYWluRGVmaW5pdGlvbiIsImtpbmQiLCJvcGVyYXRpb24iLCJjb25jYXQiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJsaW5rIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwiaW5pdGlhbFJlZHV4U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLHNFQUFVLENBQUMsQ0FBQ0MsQ0FBRCxFQUFJO0FBQUVDO0FBQUYsQ0FBSixLQUFvQjtBQUMvQyxRQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFkO0FBQ0EsU0FBTztBQUNOSCxXQUFPLGtDQUNIQSxPQURHO0FBRU5JLG1CQUFhLEVBQUVILEtBQUssSUFBSyxVQUFTQSxLQUFNO0FBRmxDO0FBREQsR0FBUDtBQU1BLENBUjBCLENBQTNCO0FBVUEsTUFBTUksUUFBa0IsR0FBRyxJQUFJQyx1REFBSixDQUFhO0FBQ3ZDQyxLQUFHLEVBQUU7QUFEa0MsQ0FBYixDQUEzQjtBQUlBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyw2REFBSixDQUFrQjtBQUNoQ0YsS0FBRyxFQUFFLDZCQUQyQjtBQUVoQ0csUUFBTSxFQUFFO0FBQ1BDLGFBQVMsRUFBRTtBQURKO0FBRndCLENBQWxCLENBQWY7QUFPQSxNQUFNQyxTQUFTLEdBQUdDLDREQUFLLENBQ3RCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDZCxRQUFNQyxVQUFVLEdBQUdDLGtGQUFpQixDQUFDRixLQUFELENBQXBDO0FBQ0EsU0FDQ0MsVUFBVSxDQUFDRSxJQUFYLEtBQW9CLHFCQUFwQixJQUNBRixVQUFVLENBQUNHLFNBQVgsS0FBeUIsY0FGMUI7QUFJQSxDQVBxQixFQVF0QlYsTUFSc0IsRUFTdEJYLFFBQVEsQ0FBQ3NCLE1BQVQsQ0FBZ0JkLFFBQWhCLENBVHNCLENBQXZCLEMsQ0FZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNZSxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFDL0JDLE9BQUssRUFBRSxJQUFJQyw0REFBSixFQUR3QjtBQUUvQkMsTUFBSSxFQUFFM0IsUUFBUSxDQUFDc0IsTUFBVCxDQUFnQmQsUUFBaEIsQ0FGeUIsQ0FHL0I7O0FBSCtCLENBQWpCLENBQWY7O0FBTUEsTUFBTW9CLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQTJDO0FBQ3hEO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyx1REFBUSxDQUFDRixTQUFTLENBQUNHLGlCQUFYLENBQXRCO0FBRUEsU0FDQyxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFRixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw2REFBRDtBQUFnQixVQUFNLEVBQUVSLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFNBQUQsZUFBZU8sU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREQsQ0FERCxDQUREO0FBT0EsQ0FYRDs7QUFhZUYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0QXBvbGxvQ2xpZW50LFxuXHRIdHRwTGluayxcblx0SW5NZW1vcnlDYWNoZSxcblx0QXBvbGxvUHJvdmlkZXIsXG5cdHNwbGl0LFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGdldE1haW5EZWZpbml0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gXCJhcG9sbG8tbGluay1jb250ZXh0XCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tIFwiQGFwb2xsby9saW5rLXdzXCI7XG5cbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcblx0Y29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG5cdHJldHVybiB7XG5cdFx0aGVhZGVyczoge1xuXHRcdFx0Li4uaGVhZGVycyxcblx0XHRcdGF1dGhvcml6YXRpb246IHRva2VuICYmIGBiZWFyZXIgJHt0b2tlbn1gLFxuXHRcdH0sXG5cdH07XG59KTtcblxuY29uc3QgaHR0cExpbms6IEh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKHtcblx0dXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG59KTtcblxuY29uc3Qgd3NMaW5rID0gbmV3IFdlYlNvY2tldExpbmsoe1xuXHR1cmk6IFwid3M6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG5cdG9wdGlvbjoge1xuXHRcdHJlY29ubmVjdDogdHJ1ZSxcblx0fSxcbn0pO1xuXG5jb25zdCBzcGxpdExpbmsgPSBzcGxpdChcblx0KHsgcXVlcnkgfSkgPT4ge1xuXHRcdGNvbnN0IGRlZmluaXRpb24gPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdGRlZmluaXRpb24ua2luZCA9PT0gXCJPcGVyYXRpb25EZWZpbml0aW9uXCIgJiZcblx0XHRcdGRlZmluaXRpb24ub3BlcmF0aW9uID09PSBcInN1YnNjcmlwdGlvblwiXG5cdFx0KTtcblx0fSxcblx0d3NMaW5rLFxuXHRhdXRoTGluay5jb25jYXQoaHR0cExpbmspXG4pO1xuXG4vLyBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbi8vIFx0Y2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4vLyBcdGxpbms6IHNwbGl0TGluayxcbi8vIH0pO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcblx0Y2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG5cdGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXG5cdC8vIGxpbms6IHNwbGl0TGluayxcbn0pO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pOiBKU1guRWxlbWVudCA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5cdGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0b3JlKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0PEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cblx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0PC9BcG9sbG9Qcm92aWRlcj5cblx0XHQ8L1Byb3ZpZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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

/***/ "@apollo/link-ws":
/*!**********************************!*\
  !*** external "@apollo/link-ws" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/link-ws\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2xpbmstd3NcIj8yMDA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhcG9sbG8vbGluay13cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vbGluay13c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/link-ws\n");

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
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SignIn/SignIn.tsx":
/*!**************************************!*\
  !*** ./components/SignIn/SignIn.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\nvar _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/SignIn/SignIn.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst SignIn = () => {\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: key,\n    1: setKey\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [login, result] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_IN\"], {\n    onError: error => {\n      setError(true);\n      console.log(error.graphQLErrors[0].message);\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setKey(localStorage.getItem(\"token\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (result.data) {\n      const token = result.data.login.value;\n      const firstName = result.data.login.firstName;\n      const lastName = result.data.login.lastName;\n      localStorage.setItem(\"token\", token);\n      localStorage.setItem(\"firstName\", firstName);\n      localStorage.setItem(\"lastName\", lastName);\n    }\n  }, [result.data]);\n\n  const handleForm = async () => {\n    await login({\n      variables: {\n        email,\n        password\n      }\n    });\n    window.location.reload();\n  };\n\n  const handleSignOut = () => {\n    setKey(\"\");\n    localStorage.clear();\n  };\n\n  const SignInForm = __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 3\n    }\n  }, __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    value: email,\n    onChange: ({\n      target\n    }) => setEmail(target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    value: password,\n    onChange: ({\n      target\n    }) => setPassword(target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  })), __jsx(\"button\", {\n    onClick: handleForm,\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 4\n    }\n  }, \"Submit\"));\n\n  if (result.loading) return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 29\n    }\n  }, \"Loading...\");\n\n  const signOut = __jsx(\"button\", {\n    onClick: handleSignOut,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 18\n    }\n  }, \"Sign Out\");\n\n  return key ? signOut : SignInForm;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZ25Jbi9TaWduSW4udHN4PzU0MGUiXSwibmFtZXMiOlsiU2lnbkluIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJrZXkiLCJzZXRLZXkiLCJsb2dpbiIsInJlc3VsdCIsInVzZU11dGF0aW9uIiwiU0lHTl9JTiIsIm9uRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ3JhcGhRTEVycm9ycyIsIm1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsInRva2VuIiwidmFsdWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldEl0ZW0iLCJoYW5kbGVGb3JtIiwidmFyaWFibGVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVTaWduT3V0IiwiY2xlYXIiLCJTaWduSW5Gb3JtIiwidGFyZ2V0IiwibG9hZGluZyIsInNpZ25PdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLE1BQU1BLE1BQU0sR0FBRyxNQUFtQjtBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQVMsRUFBVCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBUyxFQUFULENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CSixzREFBUSxDQUFVLEtBQVYsQ0FBbEM7QUFFQSxRQUFNO0FBQUEsT0FBQ0ssR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0JOLHNEQUFRLENBQVMsRUFBVCxDQUE5QjtBQUVBLFFBQU0sQ0FBQ08sS0FBRCxFQUFRQyxNQUFSLElBQWtCQyxrRUFBVyxDQUFDQywyREFBRCxFQUFVO0FBQzVDQyxXQUFPLEVBQUdSLEtBQUQsSUFBVztBQUNuQkMsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBUSxhQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBSyxDQUFDVyxhQUFOLENBQW9CLENBQXBCLEVBQXVCQyxPQUFuQztBQUNBO0FBSjJDLEdBQVYsQ0FBbkM7QUFPQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2ZWLFVBQU0sQ0FBQ1csWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQUQsQ0FBTjtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUYseURBQVMsQ0FBQyxNQUFNO0FBQ2YsUUFBSVIsTUFBTSxDQUFDVyxJQUFYLEVBQWlCO0FBQ2hCLFlBQU1DLEtBQUssR0FBR1osTUFBTSxDQUFDVyxJQUFQLENBQVlaLEtBQVosQ0FBa0JjLEtBQWhDO0FBQ0EsWUFBTUMsU0FBUyxHQUFHZCxNQUFNLENBQUNXLElBQVAsQ0FBWVosS0FBWixDQUFrQmUsU0FBcEM7QUFDQSxZQUFNQyxRQUFRLEdBQUdmLE1BQU0sQ0FBQ1csSUFBUCxDQUFZWixLQUFaLENBQWtCZ0IsUUFBbkM7QUFDQU4sa0JBQVksQ0FBQ08sT0FBYixDQUFxQixPQUFyQixFQUE4QkosS0FBOUI7QUFDQUgsa0JBQVksQ0FBQ08sT0FBYixDQUFxQixXQUFyQixFQUFrQ0YsU0FBbEM7QUFDQUwsa0JBQVksQ0FBQ08sT0FBYixDQUFxQixVQUFyQixFQUFpQ0QsUUFBakM7QUFDQTtBQUNELEdBVFEsRUFTTixDQUFDZixNQUFNLENBQUNXLElBQVIsQ0FUTSxDQUFUOztBQVdBLFFBQU1NLFVBQVUsR0FBRyxZQUFZO0FBQzlCLFVBQU1sQixLQUFLLENBQUM7QUFDWG1CLGVBQVMsRUFBRTtBQUFFNUIsYUFBRjtBQUFTRztBQUFUO0FBREEsS0FBRCxDQUFYO0FBR0EwQixVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0EsR0FMRDs7QUFPQSxRQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUMzQnhCLFVBQU0sQ0FBQyxFQUFELENBQU47QUFDQVcsZ0JBQVksQ0FBQ2MsS0FBYjtBQUNBLEdBSEQ7O0FBS0EsUUFBTUMsVUFBVSxHQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLFFBQUksRUFBQyxPQUZOO0FBR0MsU0FBSyxFQUFFbEMsS0FIUjtBQUlDLFlBQVEsRUFBRSxDQUFDO0FBQUVtQztBQUFGLEtBQUQsS0FBZ0JsQyxRQUFRLENBQUNrQyxNQUFNLENBQUNaLEtBQVIsQ0FKbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBT0M7QUFDQyxRQUFJLEVBQUMsVUFETjtBQUVDLFFBQUksRUFBQyxVQUZOO0FBR0MsU0FBSyxFQUFFcEIsUUFIUjtBQUlDLFlBQVEsRUFBRSxDQUFDO0FBQUVnQztBQUFGLEtBQUQsS0FBZ0IvQixXQUFXLENBQUMrQixNQUFNLENBQUNaLEtBQVIsQ0FKdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBELENBREQsRUFlQztBQUFRLFdBQU8sRUFBRUksVUFBakI7QUFBNkIsUUFBSSxFQUFDLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRCxDQUREOztBQXNCQSxNQUFJakIsTUFBTSxDQUFDMEIsT0FBWCxFQUFvQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7O0FBQ3BCLFFBQU1DLE9BQU8sR0FBRztBQUFRLFdBQU8sRUFBRUwsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBaEI7O0FBRUEsU0FBT3pCLEdBQUcsR0FBRzhCLE9BQUgsR0FBYUgsVUFBdkI7QUFDQSxDQW5FRDs7QUFxRWVuQyxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lnbkluL1NpZ25Jbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IFNJR05fSU4gfSBmcm9tIFwiLi4vLi4vcXVlcmllcy91c2VyLnF1ZXJ5XCI7XG5cbnR5cGUgTW91c2VFdmVudCA9IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+O1xuXG5jb25zdCBTaWduSW4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cblx0Y29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cblx0Y29uc3QgW2xvZ2luLCByZXN1bHRdID0gdXNlTXV0YXRpb24oU0lHTl9JTiwge1xuXHRcdG9uRXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0c2V0RXJyb3IodHJ1ZSk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvci5ncmFwaFFMRXJyb3JzWzBdLm1lc3NhZ2UpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0S2V5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpO1xuXHR9LCBbXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAocmVzdWx0LmRhdGEpIHtcblx0XHRcdGNvbnN0IHRva2VuID0gcmVzdWx0LmRhdGEubG9naW4udmFsdWU7XG5cdFx0XHRjb25zdCBmaXJzdE5hbWUgPSByZXN1bHQuZGF0YS5sb2dpbi5maXJzdE5hbWU7XG5cdFx0XHRjb25zdCBsYXN0TmFtZSA9IHJlc3VsdC5kYXRhLmxvZ2luLmxhc3ROYW1lO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZpcnN0TmFtZVwiLCBmaXJzdE5hbWUpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0TmFtZVwiLCBsYXN0TmFtZSk7XG5cdFx0fVxuXHR9LCBbcmVzdWx0LmRhdGFdKTtcblxuXHRjb25zdCBoYW5kbGVGb3JtID0gYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGxvZ2luKHtcblx0XHRcdHZhcmlhYmxlczogeyBlbWFpbCwgcGFzc3dvcmQgfSxcblx0XHR9KTtcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2lnbk91dCA9ICgpID0+IHtcblx0XHRzZXRLZXkoXCJcIik7XG5cdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdH07XG5cblx0Y29uc3QgU2lnbkluRm9ybSA9IChcblx0XHQ8ZGl2PlxuXHRcdFx0PGZvcm0+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldEVtYWlsKHRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRQYXNzd29yZCh0YXJnZXQudmFsdWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGb3JtfSB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFN1Ym1pdFxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG5cblx0aWYgKHJlc3VsdC5sb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXHRjb25zdCBzaWduT3V0ID0gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fT5TaWduIE91dDwvYnV0dG9uPjtcblxuXHRyZXR1cm4ga2V5ID8gc2lnbk91dCA6IFNpZ25JbkZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignIn/SignIn.tsx\n");

/***/ }),

/***/ "./components/Users/Users.tsx":
/*!************************************!*\
  !*** ./components/Users/Users.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/Users/Users.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Users = () => {\n  const result = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_2__[\"ALL_USERS\"]);\n  if (result.loading) return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 29\n    }\n  }, \"Loading...\");\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 3\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }\n  }, \"List Users\"), result.data.allUsers.map(user => __jsx(\"div\", {\n    key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__[\"v4\"])(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, user.firstName, user.lastName, user.email, user.gender)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJzL1VzZXJzLnRzeD82ZDFkIl0sIm5hbWVzIjpbIlVzZXJzIiwicmVzdWx0IiwidXNlUXVlcnkiLCJBTExfVVNFUlMiLCJsb2FkaW5nIiwiZGF0YSIsImFsbFVzZXJzIiwibWFwIiwidXNlciIsInV1aWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiZ2VuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQW1CO0FBQ2hDLFFBQU1DLE1BQU0sR0FBR0MsK0RBQVEsQ0FBQ0MsNkRBQUQsQ0FBdkI7QUFDQSxNQUFJRixNQUFNLENBQUNHLE9BQVgsRUFBb0IsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRXBCLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsRUFFRUgsTUFBTSxDQUFDSSxJQUFQLENBQVlDLFFBQVosQ0FBcUJDLEdBQXJCLENBQTBCQyxJQUFELElBQ3pCO0FBQUssT0FBRyxFQUFFQywrQ0FBSSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUQsSUFBSSxDQUFDRSxTQURQLEVBRUVGLElBQUksQ0FBQ0csUUFGUCxFQUdFSCxJQUFJLENBQUNJLEtBSFAsRUFJRUosSUFBSSxDQUFDSyxNQUpQLENBREEsQ0FGRixDQUREO0FBYUEsQ0FqQkQ7O0FBbUJlYixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlcnMvVXNlcnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEFMTF9VU0VSUyB9IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZXIucXVlcnlcIjtcbmltcG9ydCB7IElVc2VyIH0gZnJvbSBcIi4vVXNlci9Vc2VyXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcblxuY29uc3QgVXNlcnMgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuXHRjb25zdCByZXN1bHQgPSB1c2VRdWVyeShBTExfVVNFUlMpO1xuXHRpZiAocmVzdWx0LmxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgzPkxpc3QgVXNlcnM8L2gzPlxuXHRcdFx0e3Jlc3VsdC5kYXRhLmFsbFVzZXJzLm1hcCgodXNlcjogSVVzZXIpID0+IChcblx0XHRcdFx0PGRpdiBrZXk9e3V1aWQoKX0+XG5cdFx0XHRcdFx0e3VzZXIuZmlyc3ROYW1lfVxuXHRcdFx0XHRcdHt1c2VyLmxhc3ROYW1lfVxuXHRcdFx0XHRcdHt1c2VyLmVtYWlsfVxuXHRcdFx0XHRcdHt1c2VyLmdlbmRlcn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Users/Users.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Users_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Users/Users */ \"./components/Users/Users.tsx\");\n/* harmony import */ var _components_SignIn_SignIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignIn/SignIn */ \"./components/SignIn/SignIn.tsx\");\nvar _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction Home() {\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, \"Create Next App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  })), __jsx(_components_SignIn_SignIn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 4\n    }\n  }), __jsx(_components_Users_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }\n  }), __jsx(\"footer\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }\n  }, __jsx(\"a\", {\n    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, \"Powered by\", \" \", __jsx(\"img\", {\n    src: \"/vercel.svg\",\n    alt: \"Vercel Logo\",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 6\n    }\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZm9vdGVyIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBNkI7QUFDM0MsU0FDQztBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsRUFFQztBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FERCxFQU1DLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5ELEVBT0MsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsRUFRQztBQUFRLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsUUFBSSxFQUFDLHdHQUROO0FBRUMsVUFBTSxFQUFDLFFBRlI7QUFHQyxPQUFHLEVBQUMscUJBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFLWSxHQUxaLEVBTUM7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixPQUFHLEVBQUMsYUFBM0I7QUFBeUMsYUFBUyxFQUFFRiw4REFBTSxDQUFDRyxJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsQ0FERCxDQVJELENBREQ7QUFxQkEiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlcnMvVXNlcnNcIjtcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lnbkluL1NpZ25JblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IEpTWC5FbGVtZW50IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PFNpZ25JbiAvPlxuXHRcdFx0PFVzZXJzIC8+XG5cdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG5cdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdFBvd2VyZWQgYnl7XCIgXCJ9XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./queries/user.query.ts":
/*!*******************************!*\
  !*** ./queries/user.query.ts ***!
  \*******************************/
/*! exports provided: ALL_USERS, SIGNUP, SIGN_IN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_USERS\", function() { return ALL_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGNUP\", function() { return SIGNUP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN\", function() { return SIGN_IN; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ALL_USERS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n\t query allUsers {\n\t\t allUsers {\n\t\t\t firstName,\n\t\t\t lastName\n\t\t\t email \n\t\t }\n\t }\n`;\nconst SIGNUP = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n\tmutation createUser(\n\t\t$firstName: String!\n\t\t$lastName: String!\n\t\t$email: String!\n\t\t$gender: String!\n\t\t$dateOfBirth: String!\n\t\t$password: String!\n\t) {\n\t\tcreateUser(\n\t\t\tfirstName: $firstName\n\t\t\tlastName: $lastName\n\t\t\temail: $email\n\t\t\tgender: $gender\n\t\t\tdateOfBirth: $dateOfBirth\n\t\t\tpassword: $password\n\t\t) {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temail\n\t\t}\n\t}\n`;\nconst SIGN_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n\tmutation login($email: String!, $password: String!) {\n\t\tlogin(email: $email, password: $password) {\n\t\t\tvalue\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9xdWVyaWVzL3VzZXIucXVlcnkudHM/YTgyNSJdLCJuYW1lcyI6WyJBTExfVVNFUlMiLCJncWwiLCJTSUdOVVAiLCJTSUdOX0lOIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msa0RBQUk7Ozs7Ozs7O0NBQXRCO0FBVUEsTUFBTUMsTUFBTSxHQUFHRCxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFuQjtBQXdCQSxNQUFNRSxPQUFPLEdBQUdGLGtEQUFJOzs7Ozs7OztDQUFwQiIsImZpbGUiOiIuL3F1ZXJpZXMvdXNlci5xdWVyeS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgQUxMX1VTRVJTID0gZ3FsYFxuXHQgcXVlcnkgYWxsVXNlcnMge1xuXHRcdCBhbGxVc2VycyB7XG5cdFx0XHQgZmlyc3ROYW1lLFxuXHRcdFx0IGxhc3ROYW1lXG5cdFx0XHQgZW1haWwgXG5cdFx0IH1cblx0IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTSUdOVVAgPSBncWxgXG5cdG11dGF0aW9uIGNyZWF0ZVVzZXIoXG5cdFx0JGZpcnN0TmFtZTogU3RyaW5nIVxuXHRcdCRsYXN0TmFtZTogU3RyaW5nIVxuXHRcdCRlbWFpbDogU3RyaW5nIVxuXHRcdCRnZW5kZXI6IFN0cmluZyFcblx0XHQkZGF0ZU9mQmlydGg6IFN0cmluZyFcblx0XHQkcGFzc3dvcmQ6IFN0cmluZyFcblx0KSB7XG5cdFx0Y3JlYXRlVXNlcihcblx0XHRcdGZpcnN0TmFtZTogJGZpcnN0TmFtZVxuXHRcdFx0bGFzdE5hbWU6ICRsYXN0TmFtZVxuXHRcdFx0ZW1haWw6ICRlbWFpbFxuXHRcdFx0Z2VuZGVyOiAkZ2VuZGVyXG5cdFx0XHRkYXRlT2ZCaXJ0aDogJGRhdGVPZkJpcnRoXG5cdFx0XHRwYXNzd29yZDogJHBhc3N3b3JkXG5cdFx0KSB7XG5cdFx0XHRmaXJzdE5hbWVcblx0XHRcdGxhc3ROYW1lXG5cdFx0XHRlbWFpbFxuXHRcdH1cblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IFNJR05fSU4gPSBncWxgXG5cdG11dGF0aW9uIGxvZ2luKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG5cdFx0bG9naW4oZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuXHRcdFx0dmFsdWVcblx0XHRcdGZpcnN0TmFtZVxuXHRcdFx0bGFzdE5hbWVcblx0XHR9XG5cdH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./queries/user.query.ts\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });
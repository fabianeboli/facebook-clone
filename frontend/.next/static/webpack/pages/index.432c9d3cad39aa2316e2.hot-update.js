webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignIn/SignIn.tsx":
/*!**************************************!*\
  !*** ./components/SignIn/SignIn.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/SignIn/SignIn.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nvar SignIn = function SignIn() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      key = _useState4[0],\n      setKey = _useState4[1];\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_5__[\"SIGN_IN\"], {\n    onError: function onError(error) {\n      setError(true);\n      console.log(error.graphQLErrors[0].message);\n    }\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      login = _useMutation2[0],\n      result = _useMutation2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setKey(localStorage.getItem(\"token\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (result.data) {\n      var token = result.data.login.value;\n      var firstName = result.data.login.firstName;\n      var lastName = result.data.login.lastName;\n      localStorage.setItem(\"token\", token);\n      localStorage.setItem(\"firstName\", firstName);\n      localStorage.setItem(\"lastName\", lastName);\n    }\n  }, [result.data]);\n\n  var handleForm = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              login({\n                variables: {\n                  email: email,\n                  password: password\n                }\n              });\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleForm() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleSignOut = function handleSignOut() {\n    setKey(\"\");\n    localStorage.clear();\n  };\n\n  var SignInForm = __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 3\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    value: email,\n    onChange: function onChange(_ref2) {\n      var target = _ref2.target;\n      return setEmail(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    value: password,\n    onChange: function onChange(_ref3) {\n      var target = _ref3.target;\n      return setPassword(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  })), __jsx(\"button\", {\n    onClick: handleForm,\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 4\n    }\n  }, \"Submit\"));\n\n  if (result.loading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 29\n    }\n  }, \"Loading...\");\n\n  var signOut = __jsx(\"button\", {\n    onClick: handleSignOut,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 18\n    }\n  }, \"Sign Out\");\n\n  return key ? signOut : SignInForm;\n};\n\n_s(SignIn, \"BR7o16gZRzGoqGvRfzunQK8+W/w=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"]];\n});\n\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4vU2lnbkluLnRzeD81NDBlIl0sIm5hbWVzIjpbIlNpZ25JbiIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwia2V5Iiwic2V0S2V5IiwidXNlTXV0YXRpb24iLCJTSUdOX0lOIiwib25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJncmFwaFFMRXJyb3JzIiwibWVzc2FnZSIsImxvZ2luIiwicmVzdWx0IiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJ0b2tlbiIsInZhbHVlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRJdGVtIiwiaGFuZGxlRm9ybSIsInZhcmlhYmxlcyIsImhhbmRsZVNpZ25PdXQiLCJjbGVhciIsIlNpZ25JbkZvcm0iLCJ0YXJnZXQiLCJsb2FkaW5nIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQW1CO0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQVMsRUFBVCxDQUREO0FBQUEsTUFDMUJDLEtBRDBCO0FBQUEsTUFDbkJDLFFBRG1COztBQUFBLG1CQUVERixzREFBUSxDQUFTLEVBQVQsQ0FGUDtBQUFBLE1BRTFCRyxRQUYwQjtBQUFBLE1BRWhCQyxXQUZnQjs7QUFBQSxtQkFHUEosc0RBQVEsQ0FBVSxLQUFWLENBSEQ7QUFBQSxNQUcxQkssS0FIMEI7QUFBQSxNQUduQkMsUUFIbUI7O0FBQUEsbUJBS1hOLHNEQUFRLENBQVMsRUFBVCxDQUxHO0FBQUEsTUFLMUJPLEdBTDBCO0FBQUEsTUFLckJDLE1BTHFCOztBQUFBLHFCQU9UQyxrRUFBVyxDQUFDQywyREFBRCxFQUFVO0FBQzVDQyxXQUFPLEVBQUUsaUJBQUNOLEtBQUQsRUFB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QSxnQkFBaEI7O0FBRUEsU0FBT3RCLEdBQUcsR0FBRzJCLE9BQUgsR0FBYUgsVUFBdkI7QUFDQSxDQW5FRDs7R0FBTWhDLE07VUFPbUJVLDBEOzs7S0FQbkJWLE07QUFxRVNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWduSW4vU2lnbkluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgU0lHTl9JTiB9IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZXIucXVlcnlcIjtcblxudHlwZSBNb3VzZUV2ZW50ID0gUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD5cblxuY29uc3QgU2lnbkluID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG5cdGNvbnN0IFtsb2dpbiwgcmVzdWx0XSA9IHVzZU11dGF0aW9uKFNJR05fSU4sIHtcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdHNldEVycm9yKHRydWUpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IuZ3JhcGhRTEVycm9yc1swXS5tZXNzYWdlKTtcblx0XHR9LFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEtleShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTtcblx0fSwgW10pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHJlc3VsdC5kYXRhKSB7XG5cdFx0XHRjb25zdCB0b2tlbiA9IHJlc3VsdC5kYXRhLmxvZ2luLnZhbHVlO1xuXHRcdFx0Y29uc3QgZmlyc3ROYW1lID0gcmVzdWx0LmRhdGEubG9naW4uZmlyc3ROYW1lO1xuXHRcdFx0Y29uc3QgbGFzdE5hbWUgPSByZXN1bHQuZGF0YS5sb2dpbi5sYXN0TmFtZTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdE5hbWVcIiwgZmlyc3ROYW1lKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdE5hbWVcIiwgbGFzdE5hbWUpO1xuXHRcdH1cblx0fSwgW3Jlc3VsdC5kYXRhXSk7XG5cblx0Y29uc3QgaGFuZGxlRm9ybSA9IGFzeW5jICgpID0+IHtcblx0XHRcblx0XHRsb2dpbih7XG5cdFx0XHR2YXJpYWJsZXM6IHsgZW1haWwsIHBhc3N3b3JkIH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2lnbk91dCA9ICgpID0+IHtcblx0XHRzZXRLZXkoXCJcIik7XG5cdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdH07XG5cblx0Y29uc3QgU2lnbkluRm9ybSA9IChcblx0XHQ8ZGl2PlxuXHRcdFx0PGZvcm0+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldEVtYWlsKHRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRQYXNzd29yZCh0YXJnZXQudmFsdWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGb3JtfSB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFN1Ym1pdFxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG5cblx0aWYgKHJlc3VsdC5sb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXHRjb25zdCBzaWduT3V0ID0gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fT5TaWduIE91dDwvYnV0dG9uPjtcblxuXHRyZXR1cm4ga2V5ID8gc2lnbk91dCA6IFNpZ25JbkZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignIn/SignIn.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanM/MWRhMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\n");

/***/ })

})
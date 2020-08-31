webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignIn/SignIn.tsx":
/*!**************************************!*\
  !*** ./components/SignIn/SignIn.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/SignIn/SignIn.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar SignIn = function SignIn() {\n  _s();\n\n  var _localStorage;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      key = _useState4[0],\n      setKey = _useState4[1];\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_3__[\"SIGN_IN\"], {\n    onError: function onError(error) {\n      setError(true);\n      console.log(error.graphQLErrors[0].message);\n    }\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 2),\n      login = _useMutation2[0],\n      result = _useMutation2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (result.data) {\n      var token = result.data.login.value;\n      var firstName = result.data.login.firstName;\n      var lastName = result.data.login.lastName;\n      localStorage.setItem(\"token\", token);\n      localStorage.setItem(\"firstName\", firstName);\n      localStorage.setItem(\"lastName\", lastName);\n    }\n  }, [result.data]);\n\n  var handleForm = function handleForm(event) {\n    // event.preventDefault();\n    login({\n      variables: {\n        email: email,\n        password: password\n      }\n    });\n  };\n\n  var handleSignOut = function handleSignOut() {\n    localStorage.clear();\n  };\n\n  var SignInForm = __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 3\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 4\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    value: email,\n    onChange: function onChange(_ref) {\n      var target = _ref.target;\n      return setEmail(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    value: password,\n    onChange: function onChange(_ref2) {\n      var target = _ref2.target;\n      return setPassword(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  })), __jsx(\"button\", {\n    onClick: handleForm,\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }\n  }, \"Submit\"));\n\n  if (result.loading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 29\n    }\n  }, \"Loading...\");\n\n  var signOut = __jsx(\"button\", {\n    onClick: handleSignOut,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 18\n    }\n  }, \"Sign Out\");\n\n  return ((_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem(\"token\")) ? signOut : SignInForm;\n};\n\n_s(SignIn, \"XOHRnx6jdzY6xEG/VB6oRwVTk5k=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"]];\n});\n\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4vU2lnbkluLnRzeD81NDBlIl0sIm5hbWVzIjpbIlNpZ25JbiIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwia2V5Iiwic2V0S2V5IiwidXNlTXV0YXRpb24iLCJTSUdOX0lOIiwib25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJncmFwaFFMRXJyb3JzIiwibWVzc2FnZSIsImxvZ2luIiwicmVzdWx0IiwidXNlRWZmZWN0IiwiZGF0YSIsInRva2VuIiwidmFsdWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJoYW5kbGVGb3JtIiwiZXZlbnQiLCJ2YXJpYWJsZXMiLCJoYW5kbGVTaWduT3V0IiwiY2xlYXIiLCJTaWduSW5Gb3JtIiwidGFyZ2V0IiwibG9hZGluZyIsInNpZ25PdXQiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQVMsRUFBVCxDQUREO0FBQUEsTUFDMUJDLEtBRDBCO0FBQUEsTUFDbkJDLFFBRG1COztBQUFBLG1CQUVERixzREFBUSxDQUFTLEVBQVQsQ0FGUDtBQUFBLE1BRTFCRyxRQUYwQjtBQUFBLE1BRWhCQyxXQUZnQjs7QUFBQSxtQkFHUEosc0RBQVEsQ0FBVSxLQUFWLENBSEQ7QUFBQSxNQUcxQkssS0FIMEI7QUFBQSxNQUduQkMsUUFIbUI7O0FBQUEsbUJBS1hOLHNEQUFRLENBQVMsRUFBVCxDQUxHO0FBQUEsTUFLMUJPLEdBTDBCO0FBQUEsTUFLckJDLE1BTHFCOztBQUFBLHFCQVFUQyxrRUFBVyxDQUFDQywyREFBRCxFQUFVO0FBQzVDQyxXQUFPLEVBQUUsaUJBQUNO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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IFNJR05fSU4gfSBmcm9tIFwiLi4vLi4vcXVlcmllcy91c2VyLnF1ZXJ5XCI7XG5cbmNvbnN0IFNpZ25JbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuXHRjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuXHRcblx0Y29uc3QgW2xvZ2luLCByZXN1bHRdID0gdXNlTXV0YXRpb24oU0lHTl9JTiwge1xuXHRcdG9uRXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0c2V0RXJyb3IodHJ1ZSk7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvci5ncmFwaFFMRXJyb3JzWzBdLm1lc3NhZ2UpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHJlc3VsdC5kYXRhKSB7XG5cdFx0XHRjb25zdCB0b2tlbiA9IHJlc3VsdC5kYXRhLmxvZ2luLnZhbHVlO1xuXHRcdFx0Y29uc3QgZmlyc3ROYW1lID0gcmVzdWx0LmRhdGEubG9naW4uZmlyc3ROYW1lO1xuXHRcdFx0Y29uc3QgbGFzdE5hbWUgPSByZXN1bHQuZGF0YS5sb2dpbi5sYXN0TmFtZTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdE5hbWVcIiwgZmlyc3ROYW1lKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdE5hbWVcIiwgbGFzdE5hbWUpO1xuXHRcdH1cblx0fSwgW3Jlc3VsdC5kYXRhXSk7XG5cblx0Y29uc3QgaGFuZGxlRm9ybSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bG9naW4oe1xuXHRcdFx0dmFyaWFibGVzOiB7IGVtYWlsLCBwYXNzd29yZCB9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNpZ25PdXQgPSAoKSA9PiB7XG5cdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdH07XG5cblx0Y29uc3QgU2lnbkluRm9ybSA9IChcblx0XHQ8ZGl2PlxuXHRcdFx0PGZvcm0gPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRFbWFpbCh0YXJnZXQudmFsdWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UGFzc3dvcmQodGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZm9ybT5cblx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlRm9ybX0gdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHRpZiAocmVzdWx0LmxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cdGNvbnN0IHNpZ25PdXQgPSA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9PlNpZ24gT3V0PC9idXR0b24+O1xuXG5cdHJldHVybiBsb2NhbFN0b3JhZ2U/LmdldEl0ZW0oXCJ0b2tlblwiKSA/IHNpZ25PdXQgOiBTaWduSW5Gb3JtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignIn/SignIn.tsx\n");

/***/ })

})
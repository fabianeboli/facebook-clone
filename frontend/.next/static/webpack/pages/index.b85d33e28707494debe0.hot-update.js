webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignIn/SignIn.tsx":
/*!**************************************!*\
  !*** ./components/SignIn/SignIn.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/SignIn/SignIn.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nvar SignIn = function SignIn() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"test@test.com\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"testtest\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      key = _useState4[0],\n      setKey = _useState4[1];\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_5__[\"SIGN_IN\"], {\n    onError: function onError(error) {\n      setError(true);\n      alert(error.message);\n    }\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      login = _useMutation2[0],\n      result = _useMutation2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setKey(localStorage.getItem(\"token\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (result.data) {\n      var token = result.data.login.value;\n      var firstName = result.data.login.firstName;\n      var lastName = result.data.login.lastName;\n      localStorage.setItem(\"token\", token);\n      localStorage.setItem(\"firstName\", firstName);\n      localStorage.setItem(\"lastName\", lastName);\n    }\n  }, [result.data]);\n\n  var handleForm = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return login({\n                variables: {\n                  email: email,\n                  password: password\n                }\n              });\n\n            case 2:\n              window.location.reload();\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleForm() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleSignOut = function handleSignOut() {\n    setKey(\"\");\n    localStorage.clear();\n  };\n\n  var SignInForm = __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 3\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    value: email,\n    onChange: function onChange(_ref2) {\n      var target = _ref2.target;\n      return setEmail(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    value: password,\n    onChange: function onChange(_ref3) {\n      var target = _ref3.target;\n      return setPassword(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  })), __jsx(\"button\", {\n    onClick: handleForm,\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 4\n    }\n  }, \"Submit\"));\n\n  if (result.loading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 29\n    }\n  }, \"Loading...\");\n\n  var signOut = __jsx(\"button\", {\n    onClick: handleSignOut,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 18\n    }\n  }, \"Sign Out\");\n\n  return key ? signOut : SignInForm;\n};\n\n_s(SignIn, \"MgmTNdJ4p01cyDhrNLGLu1fbQEs=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"]];\n});\n\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4vU2lnbkluLnRzeD81NDBlIl0sIm5hbWVzIjpbIlNpZ25JbiIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwia2V5Iiwic2V0S2V5IiwidXNlTXV0YXRpb24iLCJTSUdOX0lOIiwib25FcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsImxvZ2luIiwicmVzdWx0IiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJ0b2tlbiIsInZhbHVlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRJdGVtIiwiaGFuZGxlRm9ybSIsInZhcmlhYmxlcyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlU2lnbk91dCIsImNsZWFyIiwiU2lnbkluRm9ybSIsInRhcmdldCIsImxvYWRpbmciLCJzaWduT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBbUI7QUFBQTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBUyxlQUFULENBREQ7QUFBQSxNQUMxQkMsS0FEMEI7QUFBQSxNQUNuQkMsUUFEbUI7O0FBQUEsbUJBRURGLHNEQUFRLENBQVMsVUFBVCxDQUZQO0FBQUEsTUFFMUJHLFFBRjBCO0FBQUEsTUFFaEJDLFdBRmdCOztBQUFBLG1CQUdQSixzREFBUSxDQUFVLEtBQVYsQ0FIRDtBQUFBLE1BRzFCSyxLQUgwQjtBQUFBLE1BR25CQyxRQUhtQjs7QUFBQSxtQkFLWE4sc0RBQVEsQ0FBUyxFQUFULENBTEc7QUFBQSxNQUsxQk8sR0FMMEI7QUFBQSxNQUtyQkMsTUFMcUI7O0FBQUEscUJBT1RDLGtFQUFXLENBQUNDLDJEQUFELEVBQVU7QUFDNUNDLFdBQU8sRUFBRSxpQkFBQ04sS0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFoQjs7QUFFQSxTQUFPdkIsR0FBRyxHQUFHNEIsT0FBSCxHQUFhSCxVQUF2QjtBQUNBLENBbkVEOztHQUFNakMsTTtVQU9tQlUsMEQ7OztLQVBuQlYsTTtBQXFFU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25Jbi9TaWduSW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBTSUdOX0lOIH0gZnJvbSBcIi4uLy4uL3F1ZXJpZXMvdXNlci5xdWVyeVwiO1xuXG5jb25zdCBTaWduSW4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJ0ZXN0QHRlc3QuY29tXCIpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJ0ZXN0dGVzdFwiKTtcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cblx0Y29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cblx0Y29uc3QgW2xvZ2luLCByZXN1bHRdID0gdXNlTXV0YXRpb24oU0lHTl9JTiwge1xuXHRcdG9uRXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0c2V0RXJyb3IodHJ1ZSk7XG5cdFx0XHRhbGVydChlcnJvci5tZXNzYWdlKTtcblx0XHR9LFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEtleShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTtcblx0fSwgW10pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHJlc3VsdC5kYXRhKSB7XG5cdFx0XHRjb25zdCB0b2tlbiA9IHJlc3VsdC5kYXRhLmxvZ2luLnZhbHVlO1xuXHRcdFx0Y29uc3QgZmlyc3ROYW1lID0gcmVzdWx0LmRhdGEubG9naW4uZmlyc3ROYW1lO1xuXHRcdFx0Y29uc3QgbGFzdE5hbWUgPSByZXN1bHQuZGF0YS5sb2dpbi5sYXN0TmFtZTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdE5hbWVcIiwgZmlyc3ROYW1lKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdE5hbWVcIiwgbGFzdE5hbWUpO1xuXHRcdH1cblx0fSwgW3Jlc3VsdC5kYXRhXSk7XG5cblx0Y29uc3QgaGFuZGxlRm9ybSA9IGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBsb2dpbih7XG5cdFx0XHR2YXJpYWJsZXM6IHsgZW1haWwsIHBhc3N3b3JkIH0sXG5cdFx0fSk7XG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNpZ25PdXQgPSAoKSA9PiB7XG5cdFx0c2V0S2V5KFwiXCIpO1xuXHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHR9O1xuXG5cdGNvbnN0IFNpZ25JbkZvcm0gPSAoXG5cdFx0PGRpdj5cblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRFbWFpbCh0YXJnZXQudmFsdWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UGFzc3dvcmQodGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZm9ybT5cblx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlRm9ybX0gdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRTdWJtaXRcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xuXG5cdGlmIChyZXN1bHQubG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2Pjtcblx0Y29uc3Qgc2lnbk91dCA9IDxidXR0b24gb25DbGljaz17aGFuZGxlU2lnbk91dH0+U2lnbiBPdXQ8L2J1dHRvbj47XG5cblx0cmV0dXJuIGtleSA/IHNpZ25PdXQgOiBTaWduSW5Gb3JtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignIn/SignIn.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignIn/SignIn.tsx":
/*!**************************************!*\
  !*** ./components/SignIn/SignIn.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/SignIn/SignIn.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nvar SignIn = function SignIn() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"test@test.com\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"testtest\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      key = _useState4[0],\n      setKey = _useState4[1];\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_5__[\"SIGN_IN\"], {\n    onError: function onError(error) {\n      setError(true);\n      alert(error.graphQLErrors);\n    }\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      login = _useMutation2[0],\n      result = _useMutation2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setKey(localStorage.getItem(\"token\"));\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (result.data) {\n      var token = result.data.login.value;\n      var firstName = result.data.login.firstName;\n      var lastName = result.data.login.lastName;\n      var friends = result.data.login.friends;\n      var friendsRequest = result.data.login.friendsRequest;\n      localStorage.setItem(\"token\", token);\n      localStorage.setItem(\"firstName\", firstName);\n      localStorage.setItem(\"lastName\", lastName); // localStorage.setItem(\"friends\", friends);\n      // localStorage.setItem(\"friendsRequest\", friendsRequest);\n    }\n  }, [result.data]);\n\n  var handleForm = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return login({\n                variables: {\n                  email: email,\n                  password: password\n                }\n              });\n\n            case 2:\n              window.location.reload();\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleForm() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleSignOut = function handleSignOut() {\n    setKey(\"\");\n    localStorage.clear();\n  };\n\n  var SignInForm = __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 3\n    }\n  }, __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    value: email,\n    onChange: function onChange(_ref2) {\n      var target = _ref2.target;\n      return setEmail(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    value: password,\n    onChange: function onChange(_ref3) {\n      var target = _ref3.target;\n      return setPassword(target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  })), __jsx(\"button\", {\n    onClick: handleForm,\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 4\n    }\n  }, \"Submit\"));\n\n  if (result.loading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 29\n    }\n  }, \"Loading...\");\n\n  var signOut = __jsx(\"button\", {\n    onClick: handleSignOut,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 18\n    }\n  }, \"Sign Out\");\n\n  return key ? signOut : SignInForm;\n};\n\n_s(SignIn, \"MgmTNdJ4p01cyDhrNLGLu1fbQEs=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"]];\n});\n\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4vU2lnbkluLnRzeD81NDBlIl0sIm5hbWVzIjpbIlNpZ25JbiIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwia2V5Iiwic2V0S2V5IiwidXNlTXV0YXRpb24iLCJTSUdOX0lOIiwib25FcnJvciIsImFsZXJ0IiwiZ3JhcGhRTEVycm9ycyIsImxvZ2luIiwicmVzdWx0IiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJ0b2tlbiIsInZhbHVlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJmcmllbmRzIiwiZnJpZW5kc1JlcXVlc3QiLCJzZXRJdGVtIiwiaGFuZGxlRm9ybSIsInZhcmlhYmxlcyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlU2lnbk91dCIsImNsZWFyIiwiU2lnbkluRm9ybSIsInRhcmdldCIsImxvYWRpbmciLCJzaWduT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBbUI7QUFBQTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBUyxlQUFULENBREQ7QUFBQSxNQUMxQkMsS0FEMEI7QUFBQSxNQUNuQkMsUUFEbUI7O0FBQUEsbUJBRURGLHNEQUFRLENBQVMsVUFBVCxDQUZQO0FBQUEsTUFFMUJHLFFBRjBCO0FBQUEsTUFFaEJDLFdBRmdCOztBQUFBLG1CQUdQSixzREFBUSxDQUFVLEtBQVYsQ0FIRDtBQUFBLE1BRzFCSyxLQUgwQjtBQUFBLE1BR25CQyxRQUhtQjs7QUFBQSxtQkFLWE4sc0RBQVEsQ0FBUyxFQUFULENBTEc7QUFBQSxNQUsxQk8sR0FMMEI7QUFBQSxNQUtyQkMsTUFMcUI7O0FBQUEscUJBT1RDLGtFQUFXLENBQUNDLDJEQUFE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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkQsQ0FERDs7QUFzQkEsTUFBSVosTUFBTSxDQUFDcUIsT0FBWCxFQUFvQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7O0FBQ3BCLE1BQU1DLE9BQU8sR0FBRztBQUFRLFdBQU8sRUFBRUwsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBaEI7O0FBRUEsU0FBT3pCLEdBQUcsR0FBRzhCLE9BQUgsR0FBYUgsVUFBdkI7QUFDQSxDQXZFRDs7R0FBTW5DLE07VUFPbUJVLDBEOzs7S0FQbkJWLE07QUF5RVNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWduSW4vU2lnbkluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgU0lHTl9JTiB9IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZXIucXVlcnlcIjtcblxuY29uc3QgU2lnbkluID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwidGVzdEB0ZXN0LmNvbVwiKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwidGVzdHRlc3RcIik7XG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG5cdGNvbnN0IFtsb2dpbiwgcmVzdWx0XSA9IHVzZU11dGF0aW9uKFNJR05fSU4sIHtcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdHNldEVycm9yKHRydWUpO1xuXHRcdFx0YWxlcnQoZXJyb3IuZ3JhcGhRTEVycm9ycyk7XG5cdFx0fSxcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRLZXkobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG5cdH0sIFtdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChyZXN1bHQuZGF0YSkge1xuXHRcdFx0Y29uc3QgdG9rZW4gPSByZXN1bHQuZGF0YS5sb2dpbi52YWx1ZTtcblx0XHRcdGNvbnN0IGZpcnN0TmFtZSA9IHJlc3VsdC5kYXRhLmxvZ2luLmZpcnN0TmFtZTtcblx0XHRcdGNvbnN0IGxhc3ROYW1lID0gcmVzdWx0LmRhdGEubG9naW4ubGFzdE5hbWU7XG5cdFx0XHRjb25zdCBmcmllbmRzID0gcmVzdWx0LmRhdGEubG9naW4uZnJpZW5kcztcblx0XHRcdGNvbnN0IGZyaWVuZHNSZXF1ZXN0ID0gcmVzdWx0LmRhdGEubG9naW4uZnJpZW5kc1JlcXVlc3Q7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3ROYW1lXCIsIGZpcnN0TmFtZSk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3ROYW1lXCIsIGxhc3ROYW1lKTtcblx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnJpZW5kc1wiLCBmcmllbmRzKTtcblx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnJpZW5kc1JlcXVlc3RcIiwgZnJpZW5kc1JlcXVlc3QpO1xuXHRcdH1cblx0fSwgW3Jlc3VsdC5kYXRhXSk7XG5cblx0Y29uc3QgaGFuZGxlRm9ybSA9IGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBsb2dpbih7XG5cdFx0XHR2YXJpYWJsZXM6IHsgZW1haWwsIHBhc3N3b3JkIH0sXG5cdFx0fSk7XG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNpZ25PdXQgPSAoKSA9PiB7XG5cdFx0c2V0S2V5KFwiXCIpO1xuXHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHR9O1xuXG5cdGNvbnN0IFNpZ25JbkZvcm0gPSAoXG5cdFx0PGRpdj5cblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRFbWFpbCh0YXJnZXQudmFsdWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UGFzc3dvcmQodGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZm9ybT5cblx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlRm9ybX0gdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRTdWJtaXRcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xuXG5cdGlmIChyZXN1bHQubG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2Pjtcblx0Y29uc3Qgc2lnbk91dCA9IDxidXR0b24gb25DbGljaz17aGFuZGxlU2lnbk91dH0+U2lnbiBPdXQ8L2J1dHRvbj47XG5cblx0cmV0dXJuIGtleSA/IHNpZ25PdXQgOiBTaWduSW5Gb3JtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignIn/SignIn.tsx\n");

/***/ })

})
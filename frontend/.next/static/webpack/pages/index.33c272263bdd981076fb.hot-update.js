webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FriendsList/Friends.tsx":
/*!********************************************!*\
  !*** ./components/FriendsList/Friends.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Friend_Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Friend/Friend */ \"./components/FriendsList/Friend/Friend.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/FriendsList/Friends.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Friends = function Friends() {\n  _s();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_USER_FRIENDS_BY_ID\"], {\n    variables: {\n      id: localStorage.getItem(\"id\")\n    }\n  }),\n      loading = _useQuery.loading,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 22\n    }\n  }, \"Loading ... \");\n\n  var presentFriends = function presentFriends() {\n    return data.findUserFriendsById.map(function (friend) {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Friend_Friend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__[\"v4\"])(),\n        firstName: friend.firstName,\n        lastName: friend.lastName,\n        avatar: friend.avatar,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 5\n        }\n      }));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 3\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }, \"My friends\"), presentFriends());\n};\n\n_s(Friends, \"HasvTXHwlBNedvPpf4Gl00Z2xbw=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"]];\n});\n\n_c = Friends;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Friends);\n\nvar _c;\n\n$RefreshReg$(_c, \"Friends\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GcmllbmRzTGlzdC9GcmllbmRzLnRzeD84ZTg5Il0sIm5hbWVzIjpbIkZyaWVuZHMiLCJ1c2VRdWVyeSIsIkZJTkRfVVNFUl9GUklFTkRTX0JZX0lEIiwidmFyaWFibGVzIiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9hZGluZyIsImRhdGEiLCJwcmVzZW50RnJpZW5kcyIsImZpbmRVc2VyRnJpZW5kc0J5SWQiLCJtYXAiLCJmcmllbmQiLCJ1dWlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBbUI7QUFBQTs7QUFBQSxrQkFDUkMsK0RBQVEsQ0FBQ0MsMkVBQUQsRUFBMEI7QUFDM0RDLGFBQVMsRUFBRTtBQUFFQyxRQUFFLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQjtBQUFOO0FBRGdELEdBQTFCLENBREE7QUFBQSxNQUMxQkMsT0FEMEIsYUFDMUJBLE9BRDBCO0FBQUEsTUFDakJDLElBRGlCLGFBQ2pCQSxJQURpQjs7QUFJbEMsTUFBSUQsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDs7QUFFYixNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsV0FDdEJELElBQUksQ0FBQ0UsbUJBQUwsQ0FBeUJDLEdBQXpCLENBQTZCLFVBQUNDLE1BQUQ7QUFBQSxhQUM1QixtRUFDQyxNQUFDLHNEQUFEO0FBQ0MsV0FBRyxFQUFFQywrQ0FBSSxFQURWO0FBRUMsaUJBQVMsRUFBRUQsTUFBTSxDQUFDRSxTQUZuQjtBQUdDLGdCQUFRLEVBQUVGLE1BQU0sQ0FBQ0csUUFIbEI7QUFJQyxjQUFNLEVBQUVILE1BQU0sQ0FBQ0ksTUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBRDRCO0FBQUEsS0FBN0IsQ0FEc0I7QUFBQSxHQUF2Qjs7QUFZQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELEVBRUVQLGNBQWMsRUFGaEIsQ0FERDtBQU1BLENBeEJEOztHQUFNVCxPO1VBQ3FCQyx1RDs7O0tBRHJCRCxPO0FBMEJTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRnJpZW5kc0xpc3QvRnJpZW5kcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IEZyaWVuZCwgeyBJRnJpZW5kIH0gZnJvbSBcIi4vRnJpZW5kL0ZyaWVuZFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBGSU5EX1VTRVJfRlJJRU5EU19CWV9JRCB9IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZXIucXVlcnlcIjtcblxuY29uc3QgRnJpZW5kcyA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG5cdGNvbnN0IHsgbG9hZGluZywgZGF0YSB9ID0gdXNlUXVlcnkoRklORF9VU0VSX0ZSSUVORFNfQllfSUQsIHtcblx0XHR2YXJpYWJsZXM6IHsgaWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikgfSxcblx0fSk7XG5cdGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLiA8L2Rpdj47XG5cblx0Y29uc3QgcHJlc2VudEZyaWVuZHMgPSAoKSA9PlxuXHRcdGRhdGEuZmluZFVzZXJGcmllbmRzQnlJZC5tYXAoKGZyaWVuZDogSUZyaWVuZCkgPT4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PEZyaWVuZFxuXHRcdFx0XHRcdGtleT17dXVpZCgpfVxuXHRcdFx0XHRcdGZpcnN0TmFtZT17ZnJpZW5kLmZpcnN0TmFtZX1cblx0XHRcdFx0XHRsYXN0TmFtZT17ZnJpZW5kLmxhc3ROYW1lfVxuXHRcdFx0XHRcdGF2YXRhcj17ZnJpZW5kLmF2YXRhcn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvPlxuXHRcdCkpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMj5NeSBmcmllbmRzPC9oMj5cblx0XHRcdHtwcmVzZW50RnJpZW5kcygpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FriendsList/Friends.tsx\n");

/***/ })

})
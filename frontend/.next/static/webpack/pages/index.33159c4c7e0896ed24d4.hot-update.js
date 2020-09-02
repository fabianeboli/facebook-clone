webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FriendsList/Friends.tsx":
/*!********************************************!*\
  !*** ./components/FriendsList/Friends.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Friend_Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Friend/Friend */ \"./components/FriendsList/Friend/Friend.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/FriendsList/Friends.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Friends = function Friends() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      id = _useState[0],\n      setId = _useState[1];\n\n  useEffect(function () {\n    set;\n  }, []);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_USER_FRIENDS_BY_ID\"], {\n    variables: {\n      id: id\n    }\n  }),\n      loading = _useQuery.loading,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 22\n    }\n  }, \"Loading ... \");\n\n  var presentFriends = function presentFriends() {\n    return data.findUserFriendsById.map(function (friend) {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Friend_Friend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__[\"v4\"])(),\n        firstName: friend.firstName,\n        lastName: friend.lastName,\n        avatar: friend.avatar,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 5\n        }\n      }));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 3\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }\n  }, \"My friends\"), presentFriends());\n};\n\n_s(Friends, \"6co5XaYOM3RZjkCaioP1oVjENpc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"]];\n});\n\n_c = Friends;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Friends);\n\nvar _c;\n\n$RefreshReg$(_c, \"Friends\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GcmllbmRzTGlzdC9GcmllbmRzLnRzeD84ZTg5Il0sIm5hbWVzIjpbIkZyaWVuZHMiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJ1c2VFZmZlY3QiLCJzZXQiLCJ1c2VRdWVyeSIsIkZJTkRfVVNFUl9GUklFTkRTX0JZX0lEIiwidmFyaWFibGVzIiwibG9hZGluZyIsImRhdGEiLCJwcmVzZW50RnJpZW5kcyIsImZpbmRVc2VyRnJpZW5kc0J5SWQiLCJtYXAiLCJmcmllbmQiLCJ1dWlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBbUI7QUFBQTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBUyxFQUFULENBRE07QUFBQSxNQUMzQkMsRUFEMkI7QUFBQSxNQUN2QkMsS0FEdUI7O0FBR2xDQyxXQUFTLENBQUMsWUFBTTtBQUNmQyxPQUFHO0FBRUgsR0FIUSxFQUdOLEVBSE0sQ0FBVDs7QUFIa0Msa0JBUVJDLCtEQUFRLENBQUNDLDJFQUFELEVBQTBCO0FBQzNEQyxhQUFTLEVBQUU7QUFBRU4sUUFBRSxFQUFFQTtBQUFOO0FBRGdELEdBQTFCLENBUkE7QUFBQSxNQVExQk8sT0FSMEIsYUFRMUJBLE9BUjBCO0FBQUEsTUFRakJDLElBUmlCLGFBUWpCQSxJQVJpQjs7QUFXbEMsTUFBSUQsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDs7QUFFYixNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsV0FDdEJELElBQUksQ0FBQ0UsbUJBQUwsQ0FBeUJDLEdBQXpCLENBQTZCLFVBQUNDLE1BQUQ7QUFBQSxhQUM1QixtRUFDQyxNQUFDLHNEQUFEO0FBQ0MsV0FBRyxFQUFFQywrQ0FBSSxFQURWO0FBRUMsaUJBQVMsRUFBRUQsTUFBTSxDQUFDRSxTQUZuQjtBQUdDLGdCQUFRLEVBQUVGLE1BQU0sQ0FBQ0csUUFIbEI7QUFJQyxjQUFNLEVBQUVILE1BQU0sQ0FBQ0ksTUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBRDRCO0FBQUEsS0FBN0IsQ0FEc0I7QUFBQSxHQUF2Qjs7QUFZQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELEVBRUVQLGNBQWMsRUFGaEIsQ0FERDtBQU1BLENBL0JEOztHQUFNWCxPO1VBUXFCTSx1RDs7O0tBUnJCTixPO0FBaUNTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRnJpZW5kc0xpc3QvRnJpZW5kcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgRnJpZW5kLCB7IElGcmllbmQgfSBmcm9tIFwiLi9GcmllbmQvRnJpZW5kXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IEZJTkRfVVNFUl9GUklFTkRTX0JZX0lEIH0gZnJvbSBcIi4uLy4uL3F1ZXJpZXMvdXNlci5xdWVyeVwiO1xuXG5jb25zdCBGcmllbmRzID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcblx0Y29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0XHRcblx0XG5cdH0sIFtdKVxuXG5cdGNvbnN0IHsgbG9hZGluZywgZGF0YSB9ID0gdXNlUXVlcnkoRklORF9VU0VSX0ZSSUVORFNfQllfSUQsIHtcblx0XHR2YXJpYWJsZXM6IHsgaWQ6IGlkIH0sXG5cdH0pO1xuXHRpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZyAuLi4gPC9kaXY+O1xuXG5cdGNvbnN0IHByZXNlbnRGcmllbmRzID0gKCkgPT5cblx0XHRkYXRhLmZpbmRVc2VyRnJpZW5kc0J5SWQubWFwKChmcmllbmQ6IElGcmllbmQpID0+IChcblx0XHRcdDw+XG5cdFx0XHRcdDxGcmllbmRcblx0XHRcdFx0XHRrZXk9e3V1aWQoKX1cblx0XHRcdFx0XHRmaXJzdE5hbWU9e2ZyaWVuZC5maXJzdE5hbWV9XG5cdFx0XHRcdFx0bGFzdE5hbWU9e2ZyaWVuZC5sYXN0TmFtZX1cblx0XHRcdFx0XHRhdmF0YXI9e2ZyaWVuZC5hdmF0YXJ9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8Lz5cblx0XHQpKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDI+TXkgZnJpZW5kczwvaDI+XG5cdFx0XHR7cHJlc2VudEZyaWVuZHMoKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FriendsList/Friends.tsx\n");

/***/ })

})
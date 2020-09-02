webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FriendsList/Friends.tsx":
/*!********************************************!*\
  !*** ./components/FriendsList/Friends.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Friend_Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Friend/Friend */ \"./components/FriendsList/Friend/Friend.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/FriendsList/Friends.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Friends = function Friends() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      id = _useState[0],\n      setId = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setId(localStorage.getItem(\"id\"));\n  }, []);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_USER_FRIENDS_BY_ID\"], {\n    variables: {\n      id: id\n    },\n    po: po\n  }),\n      loading = _useQuery.loading,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 22\n    }\n  }, \"Loading ... \");\n\n  var presentFriends = function presentFriends() {\n    return data === null || data === void 0 ? void 0 : data.findUserFriendsById.map(function (friend) {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Friend_Friend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__[\"v4\"])(),\n        firstName: friend.firstName,\n        lastName: friend.lastName,\n        avatar: friend.avatar,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 5\n        }\n      }));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 3\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }\n  }, \"My friends\"), data.findUserFriendsById.map(function (friend) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Friend_Friend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__[\"v4\"])(),\n      firstName: friend.firstName,\n      lastName: friend.lastName,\n      avatar: friend.avatar,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 6\n      }\n    }));\n  }));\n};\n\n_s(Friends, \"6co5XaYOM3RZjkCaioP1oVjENpc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"]];\n});\n\n_c = Friends;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Friends);\n\nvar _c;\n\n$RefreshReg$(_c, \"Friends\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GcmllbmRzTGlzdC9GcmllbmRzLnRzeD84ZTg5Il0sIm5hbWVzIjpbIkZyaWVuZHMiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlUXVlcnkiLCJGSU5EX1VTRVJfRlJJRU5EU19CWV9JRCIsInZhcmlhYmxlcyIsInBvIiwibG9hZGluZyIsImRhdGEiLCJwcmVzZW50RnJpZW5kcyIsImZpbmRVc2VyRnJpZW5kc0J5SWQiLCJtYXAiLCJmcmllbmQiLCJ1dWlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBbUI7QUFBQTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBUyxFQUFULENBRE07QUFBQSxNQUMzQkMsRUFEMkI7QUFBQSxNQUN2QkMsS0FEdUI7O0FBR2xDQyx5REFBUyxDQUFDLFlBQU07QUFDZkQsU0FBSyxDQUFDRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckIsQ0FBRCxDQUFMO0FBQ0EsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFIa0Msa0JBT1JDLCtEQUFRLENBQUNDLDJFQUFELEVBQTBCO0FBQzNEQyxhQUFTLEVBQUU7QUFBRVAsUUFBRSxFQUFGQTtBQUFGLEtBRGdEO0FBRzNEUSxNQUFFLEVBQUZBO0FBSDJELEdBQTFCLENBUEE7QUFBQSxNQU8xQkMsT0FQMEIsYUFPMUJBLE9BUDBCO0FBQUEsTUFPakJDLElBUGlCLGFBT2pCQSxJQVBpQjs7QUFhbEMsTUFBSUQsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDs7QUFFYixNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsV0FDdEJELElBRHNCLGFBQ3RCQSxJQURzQix1QkFDdEJBLElBQUksQ0FBRUUsbUJBQU4sQ0FBMEJDLEdBQTFCLENBQThCLFVBQUNDLE1BQUQ7QUFBQSxhQUM3QixtRUFDQyxNQUFDLHNEQUFEO0FBQ0MsV0FBRyxFQUFFQywrQ0FBSSxFQURWO0FBRUMsaUJBQVMsRUFBRUQsTUFBTSxDQUFDRSxTQUZuQjtBQUdDLGdCQUFRLEVBQUVGLE1BQU0sQ0FBQ0csUUFIbEI7QUFJQyxjQUFNLEVBQUVILE1BQU0sQ0FBQ0ksTUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBRDZCO0FBQUEsS0FBOUIsQ0FEc0I7QUFBQSxHQUF2Qjs7QUFZQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELEVBRUVSLElBQUksQ0FBQ0UsbUJBQUwsQ0FBeUJDLEdBQXpCLENBQTZCLFVBQUNDLE1BQUQ7QUFBQSxXQUM3QixtRUFDQyxNQUFDLHNEQUFEO0FBQ0MsU0FBRyxFQUFFQywrQ0FBSSxFQURWO0FBRUMsZUFBUyxFQUFFRCxNQUFNLENBQUNFLFNBRm5CO0FBR0MsY0FBUSxFQUFFRixNQUFNLENBQUNHLFFBSGxCO0FBSUMsWUFBTSxFQUFFSCxNQUFNLENBQUNJLE1BSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQUQ2QjtBQUFBLEdBQTdCLENBRkYsQ0FERDtBQWVBLENBMUNEOztHQUFNcEIsTztVQU9xQk8sdUQ7OztLQVByQlAsTztBQTRDU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZyaWVuZHNMaXN0L0ZyaWVuZHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgRnJpZW5kLCB7IElGcmllbmQgfSBmcm9tIFwiLi9GcmllbmQvRnJpZW5kXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IEZJTkRfVVNFUl9GUklFTkRTX0JZX0lEIH0gZnJvbSBcIi4uLy4uL3F1ZXJpZXMvdXNlci5xdWVyeVwiO1xuXG5jb25zdCBGcmllbmRzID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcblx0Y29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0SWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCB7IGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5KEZJTkRfVVNFUl9GUklFTkRTX0JZX0lELCB7XG5cdFx0dmFyaWFibGVzOiB7IGlkIH0sXG5cdFx0XG5cdFx0cG9cblxuXHR9KTtcblx0aWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uIDwvZGl2PjtcblxuXHRjb25zdCBwcmVzZW50RnJpZW5kcyA9ICgpID0+XG5cdFx0ZGF0YT8uZmluZFVzZXJGcmllbmRzQnlJZC5tYXAoKGZyaWVuZDogSUZyaWVuZCkgPT4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PEZyaWVuZFxuXHRcdFx0XHRcdGtleT17dXVpZCgpfVxuXHRcdFx0XHRcdGZpcnN0TmFtZT17ZnJpZW5kLmZpcnN0TmFtZX1cblx0XHRcdFx0XHRsYXN0TmFtZT17ZnJpZW5kLmxhc3ROYW1lfVxuXHRcdFx0XHRcdGF2YXRhcj17ZnJpZW5kLmF2YXRhcn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvPlxuXHRcdCkpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMj5NeSBmcmllbmRzPC9oMj5cblx0XHRcdHtkYXRhLmZpbmRVc2VyRnJpZW5kc0J5SWQubWFwKChmcmllbmQ6IElGcmllbmQpID0+IChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8RnJpZW5kXG5cdFx0XHRcdFx0XHRrZXk9e3V1aWQoKX1cblx0XHRcdFx0XHRcdGZpcnN0TmFtZT17ZnJpZW5kLmZpcnN0TmFtZX1cblx0XHRcdFx0XHRcdGxhc3ROYW1lPXtmcmllbmQubGFzdE5hbWV9XG5cdFx0XHRcdFx0XHRhdmF0YXI9e2ZyaWVuZC5hdmF0YXJ9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FriendsList/Friends.tsx\n");

/***/ })

})
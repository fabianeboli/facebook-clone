webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FriendsList/Friends.tsx":
/*!********************************************!*\
  !*** ./components/FriendsList/Friends.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Friend_Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Friend/Friend */ \"./components/FriendsList/Friend/Friend.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/FriendsList/Friends.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Friends = function Friends() {\n  _s();\n\n  var result = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_USER_FRIENDS_BY_ID\"]);\n  if (result.loading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 29\n    }\n  }, \"Loading ... \");\n\n  var presentFriends = function presentFriends() {\n    return result.data.findUserFriendsById(localStorage.getItem(\"id\")).map(function (friend) {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Friend_Friend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__[\"v4\"])(),\n        firstName: friend.firstName,\n        lastName: friend.lastName,\n        avatar: friend.avatar,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 5\n        }\n      }));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, function () {\n    return presentFriends();\n  });\n};\n\n_s(Friends, \"JqpwbFFyOF6wIHaj5E6obYHTpSg=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"]];\n});\n\n_c = Friends;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Friends);\n\nvar _c;\n\n$RefreshReg$(_c, \"Friends\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GcmllbmRzTGlzdC9GcmllbmRzLnRzeD84ZTg5Il0sIm5hbWVzIjpbIkZyaWVuZHMiLCJyZXN1bHQiLCJ1c2VRdWVyeSIsIkZJTkRfVVNFUl9GUklFTkRTX0JZX0lEIiwibG9hZGluZyIsInByZXNlbnRGcmllbmRzIiwiZGF0YSIsImZpbmRVc2VyRnJpZW5kc0J5SWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWFwIiwiZnJpZW5kIiwidXVpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQywrREFBUSxDQUFDQywyRUFBRCxDQUF2QjtBQUNBLE1BQUlGLE1BQU0sQ0FBQ0csT0FBWCxFQUFvQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7O0FBR3BCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUN0QkosTUFBTSxDQUFDSyxJQUFQLENBQVlDLG1CQUFaLENBQWdDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckIsQ0FBaEMsRUFBNERDLEdBQTVELENBQWdFLFVBQUNDLE1BQUQ7QUFBQSxhQUMvRCxtRUFDQyxNQUFDLHNEQUFEO0FBQ0MsV0FBRyxFQUFFQywrQ0FBSSxFQURWO0FBRUMsaUJBQVMsRUFBRUQsTUFBTSxDQUFDRSxTQUZuQjtBQUdDLGdCQUFRLEVBQUVGLE1BQU0sQ0FBQ0csUUFIbEI7QUFJQyxjQUFNLEVBQUVILE1BQU0sQ0FBQ0ksTUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBRCtEO0FBQUEsS0FBaEUsQ0FEc0I7QUFBQSxHQUF2Qjs7QUFZQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTTtBQUFBLFdBQU1WLGNBQWMsRUFBcEI7QUFBQSxHQUFOLENBQVA7QUFDQSxDQWxCRDs7R0FBTUwsTztVQUNVRSx1RDs7O0tBRFZGLE87QUFvQlNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GcmllbmRzTGlzdC9GcmllbmRzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IEZyaWVuZCwgeyBJRnJpZW5kIH0gZnJvbSBcIi4vRnJpZW5kL0ZyaWVuZFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBGSU5EX1VTRVJfRlJJRU5EU19CWV9JRCB9IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZXIucXVlcnlcIjtcblxuY29uc3QgRnJpZW5kcyA9ICgpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gdXNlUXVlcnkoRklORF9VU0VSX0ZSSUVORFNfQllfSUQpO1xuXHRpZiAocmVzdWx0LmxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uIDwvZGl2PjtcblxuXG5cdGNvbnN0IHByZXNlbnRGcmllbmRzID0gKCkgPT5cblx0XHRyZXN1bHQuZGF0YS5maW5kVXNlckZyaWVuZHNCeUlkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikpLm1hcCgoZnJpZW5kOiBJRnJpZW5kKSA9PiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8RnJpZW5kXG5cdFx0XHRcdFx0a2V5PXt1dWlkKCl9XG5cdFx0XHRcdFx0Zmlyc3ROYW1lPXtmcmllbmQuZmlyc3ROYW1lfVxuXHRcdFx0XHRcdGxhc3ROYW1lPXtmcmllbmQubGFzdE5hbWV9XG5cdFx0XHRcdFx0YXZhdGFyPXtmcmllbmQuYXZhdGFyfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC8+XG5cdFx0KSk7XG5cblx0cmV0dXJuIDxkaXY+eygpID0+IHByZXNlbnRGcmllbmRzKCl9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FriendsList/Friends.tsx\n");

/***/ })

})
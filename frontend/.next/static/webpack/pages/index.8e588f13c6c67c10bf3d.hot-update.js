webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FriendsList/Friends.tsx":
/*!********************************************!*\
  !*** ./components/FriendsList/Friends.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _Friend_Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Friend/Friend */ \"./components/FriendsList/Friend/Friend.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _queries_user_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../queries/user.query */ \"./queries/user.query.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/FriendsList/Friends.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Friends = function Friends() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      id = _useState[0],\n      setId = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setId(localStorage.getItem(\"id\"));\n  }, []);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(_queries_user_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_USER_FRIENDS_BY_ID\"], {\n    variables: {\n      id: id\n    },\n    pollInterval: 5000\n  }),\n      loading = _useQuery.loading,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 22\n    }\n  }, \"Loading ... \");\n\n  var presentFriends = function presentFriends() {\n    return data === null || data === void 0 ? void 0 : data.findUserFriendsById.map(function (friend) {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Friend_Friend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__[\"v4\"])(),\n        firstName: friend.firstName,\n        lastName: friend.lastName,\n        avatar: friend.avatar,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 5\n        }\n      }));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 3\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }\n  }, \"My friends\"), data.findUserFriendsById.map(function (friend) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Friend_Friend__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__[\"v4\"])(),\n      firstName: friend.firstName,\n      lastName: friend.lastName,\n      avatar: friend.avatar,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 6\n      }\n    }));\n  }));\n};\n\n_s(Friends, \"6co5XaYOM3RZjkCaioP1oVjENpc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"]];\n});\n\n_c = Friends;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Friends);\n\nvar _c;\n\n$RefreshReg$(_c, \"Friends\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GcmllbmRzTGlzdC9GcmllbmRzLnRzeD84ZTg5Il0sIm5hbWVzIjpbIkZyaWVuZHMiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlUXVlcnkiLCJGSU5EX1VTRVJfRlJJRU5EU19CWV9JRCIsInZhcmlhYmxlcyIsInBvbGxJbnRlcnZhbCIsImxvYWRpbmciLCJkYXRhIiwicHJlc2VudEZyaWVuZHMiLCJmaW5kVXNlckZyaWVuZHNCeUlkIiwibWFwIiwiZnJpZW5kIiwidXVpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQW1CO0FBQUE7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQVMsRUFBVCxDQURNO0FBQUEsTUFDM0JDLEVBRDJCO0FBQUEsTUFDdkJDLEtBRHVCOztBQUdsQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2ZELFNBQUssQ0FBQ0UsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLENBQUQsQ0FBTDtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSGtDLGtCQU9SQywrREFBUSxDQUFDQywyRUFBRCxFQUEwQjtBQUMzREMsYUFBUyxFQUFFO0FBQUVQLFFBQUUsRUFBRkE7QUFBRixLQURnRDtBQUczRFEsZ0JBQVksRUFBRTtBQUg2QyxHQUExQixDQVBBO0FBQUEsTUFPMUJDLE9BUDBCLGFBTzFCQSxPQVAwQjtBQUFBLE1BT2pCQyxJQVBpQixhQU9qQkEsSUFQaUI7O0FBYWxDLE1BQUlELE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7O0FBRWIsTUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFdBQ3RCRCxJQURzQixhQUN0QkEsSUFEc0IsdUJBQ3RCQSxJQUFJLENBQUVFLG1CQUFOLENBQTBCQyxHQUExQixDQUE4QixVQUFDQyxNQUFEO0FBQUEsYUFDN0IsbUVBQ0MsTUFBQyxzREFBRDtBQUNDLFdBQUcsRUFBRUMsK0NBQUksRUFEVjtBQUVDLGlCQUFTLEVBQUVELE1BQU0sQ0FBQ0UsU0FGbkI7QUFHQyxnQkFBUSxFQUFFRixNQUFNLENBQUNHLFFBSGxCO0FBSUMsY0FBTSxFQUFFSCxNQUFNLENBQUNJLE1BSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxDQUQ2QjtBQUFBLEtBQTlCLENBRHNCO0FBQUEsR0FBdkI7O0FBWUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxFQUVFUixJQUFJLENBQUNFLG1CQUFMLENBQXlCQyxHQUF6QixDQUE2QixVQUFDQyxNQUFEO0FBQUEsV0FDN0IsbUVBQ0MsTUFBQyxzREFBRDtBQUNDLFNBQUcsRUFBRUMsK0NBQUksRUFEVjtBQUVDLGVBQVMsRUFBRUQsTUFBTSxDQUFDRSxTQUZuQjtBQUdDLGNBQVEsRUFBRUYsTUFBTSxDQUFDRyxRQUhsQjtBQUlDLFlBQU0sRUFBRUgsTUFBTSxDQUFDSSxNQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0FENkI7QUFBQSxHQUE3QixDQUZGLENBREQ7QUFlQSxDQTFDRDs7R0FBTXBCLE87VUFPcUJPLHVEOzs7S0FQckJQLE87QUE0Q1NBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GcmllbmRzTGlzdC9GcmllbmRzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IEZyaWVuZCwgeyBJRnJpZW5kIH0gZnJvbSBcIi4vRnJpZW5kL0ZyaWVuZFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBGSU5EX1VTRVJfRlJJRU5EU19CWV9JRCB9IGZyb20gXCIuLi8uLi9xdWVyaWVzL3VzZXIucXVlcnlcIjtcblxuY29uc3QgRnJpZW5kcyA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG5cdGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldElkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikpO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShGSU5EX1VTRVJfRlJJRU5EU19CWV9JRCwge1xuXHRcdHZhcmlhYmxlczogeyBpZCB9LFxuXHRcdFxuXHRcdHBvbGxJbnRlcnZhbDogNTAwMFxuXG5cdH0pO1xuXHRpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZyAuLi4gPC9kaXY+O1xuXG5cdGNvbnN0IHByZXNlbnRGcmllbmRzID0gKCkgPT5cblx0XHRkYXRhPy5maW5kVXNlckZyaWVuZHNCeUlkLm1hcCgoZnJpZW5kOiBJRnJpZW5kKSA9PiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8RnJpZW5kXG5cdFx0XHRcdFx0a2V5PXt1dWlkKCl9XG5cdFx0XHRcdFx0Zmlyc3ROYW1lPXtmcmllbmQuZmlyc3ROYW1lfVxuXHRcdFx0XHRcdGxhc3ROYW1lPXtmcmllbmQubGFzdE5hbWV9XG5cdFx0XHRcdFx0YXZhdGFyPXtmcmllbmQuYXZhdGFyfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC8+XG5cdFx0KSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgyPk15IGZyaWVuZHM8L2gyPlxuXHRcdFx0e2RhdGEuZmluZFVzZXJGcmllbmRzQnlJZC5tYXAoKGZyaWVuZDogSUZyaWVuZCkgPT4gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxGcmllbmRcblx0XHRcdFx0XHRcdGtleT17dXVpZCgpfVxuXHRcdFx0XHRcdFx0Zmlyc3ROYW1lPXtmcmllbmQuZmlyc3ROYW1lfVxuXHRcdFx0XHRcdFx0bGFzdE5hbWU9e2ZyaWVuZC5sYXN0TmFtZX1cblx0XHRcdFx0XHRcdGF2YXRhcj17ZnJpZW5kLmF2YXRhcn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCkpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FriendsList/Friends.tsx\n");

/***/ })

})
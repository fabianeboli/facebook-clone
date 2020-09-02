webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Posts/Post/Post.tsx":
/*!****************************************!*\
  !*** ./components/Posts/Post/Post.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Comment/Comment */ \"./components/Comment/Comment.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_post_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../queries/post.query */ \"./queries/post.query.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/Posts/Post/Post.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Post = function Post(props) {\n  _s();\n\n  var _props$user, _props$user2, _props$comments;\n\n  // !TODO BUTTON SHOULD BE DISABLED WHILE LIKING OR UNLIKING\n  // !TODO BUTTON SHOULD DYNAMICALLY CHANGE TEXT\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"LIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }, {\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"IS_LIKED_BY_USER\"],\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    }]\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 1),\n      like = _useMutation2[0];\n\n  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"UNLIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }, {\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"IS_LIKED_BY_USER\"],\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    }]\n  }),\n      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation3, 1),\n      unLike = _useMutation4[0];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"IS_LIKED_BY_USER\"], {\n    variables: {\n      id: props.id,\n      userId: localStorage.getItem(\"id\")\n    },\n    errorPolicy: \"all\",\n    onError: function onError(error) {\n      console.log(\"Error: \", error.message);\n    }\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var likeFunction = function likeFunction() {\n    setLoading(true);\n    (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? like({\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    }) : unLike({\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    });\n    setLoading(false);\n  };\n\n  var LikeUnLikeButton = function LikeUnLikeButton() {\n    var likeButton = __jsx(\"button\", {\n      disabled: loading,\n      onClick: function onClick() {\n        return likeFunction();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 4\n      }\n    }, \" \", \"Like\", \" \");\n\n    var unLikeButton = __jsx(\"button\", {\n      onClick: function onClick() {\n        return unLike({\n          variables: {\n            id: props.id,\n            userId: localStorage.getItem(\"id\")\n          }\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 4\n      }\n    }, \" \", \"Unlike\", \" \");\n\n    return (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? unLikeButton : likeButton;\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 4\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }\n  }, (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.firstName, \" \", (_props$user2 = props.user) === null || _props$user2 === void 0 ? void 0 : _props$user2.lastName, \" \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 6\n    }\n  }, props.date))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 5\n    }\n  }, props.content)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 4\n    }\n  }, props.likes), \" \", LikeUnLikeButton(), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 4\n    }\n  }, props === null || props === void 0 ? void 0 : (_props$comments = props.comments) === null || _props$comments === void 0 ? void 0 : _props$comments.map(function (comment) {\n    __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      firstName: comment.firstName,\n      lastName: comment.lastName,\n      content: comment.content,\n      date: comment.date,\n      likes: comment.likes,\n      comments: comment.comments,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 6\n      }\n    });\n  })));\n};\n\n_s(Post, \"Hl2bf3qaUhE8UAY9WxbBsU+8xMc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy9Qb3N0L1Bvc3QudHN4PzEwZjgiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZU11dGF0aW9uIiwiTElLRV9QT1NUIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkZJTkRfUE9TVF9CWV9JRCIsInZhcmlhYmxlcyIsImlkIiwiSVNfTElLRURfQllfVVNFUiIsInVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaWtlIiwiVU5MSUtFX1BPU1QiLCJ1bkxpa2UiLCJ1c2VRdWVyeSIsImVycm9yUG9saWN5Iiwib25FcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJkYXRhIiwicmVmZXRjaCIsImxpa2VGdW5jdGlvbiIsImlzTGlrZWRCeVVzZXIiLCJMaWtlVW5MaWtlQnV0dG9uIiwibGlrZUJ1dHRvbiIsInVuTGlrZUJ1dHRvbiIsInVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRhdGUiLCJjb250ZW50IiwibGlrZXMiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBc0JBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBK0I7QUFBQTs7QUFBQTs7QUFDM0M7QUFDQTtBQUYyQyxrQkFHYkMsc0RBQVEsQ0FBVSxLQUFWLENBSEs7QUFBQSxNQUdwQ0MsT0FIb0M7QUFBQSxNQUczQkMsVUFIMkI7O0FBQUEscUJBSzVCQyxrRUFBVyxDQUFDQyw2REFBRCxFQUFZO0FBQ3JDQyxrQkFBYyxFQUFFLENBQ2Y7QUFBRUMsV0FBSyxFQUFFQyxtRUFBVDtBQUEwQkMsZUFBUyxFQUFFO0FBQUVDLFVBQUUsRUFBRVYsS0FBSyxDQUFDVTtBQUFaO0FBQXJDLEtBRGUsRUFFZjtBQUNDSCxX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QUE7QUFBQTtBQVFBLEdBVEEsQ0FERixDQVhELENBREQ7QUEwQkEsQ0EvRkQ7O0dBQU12QyxJO1VBS1VLLDBELEVBU0VBLDBELEVBVVNjLHVEOzs7S0F4QnJCbkIsSTtBQWlHU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzL1Bvc3QvUG9zdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29tbWVudCwgeyBJQ29tbWVudCB9IGZyb20gXCIuLi8uLi9Db21tZW50L0NvbW1lbnRcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHtcblx0TElLRV9QT1NULFxuXHRBTExfUE9TVFMsXG5cdFVOTElLRV9QT1NULFxuXHRJU19MSUtFRF9CWV9VU0VSLFxuXHRGSU5EX1BPU1RfQllfSUQsXG59IGZyb20gXCIuLi8uLi8uLi9xdWVyaWVzL3Bvc3QucXVlcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9zdCB7XG5cdGlkOiBzdHJpbmc7XG5cdHVzZXI/OiB7XG5cdFx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdFx0bGFzdE5hbWU6IHN0cmluZztcblx0fTtcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdGRhdGU6IHN0cmluZztcblx0Y29udGVudDogc3RyaW5nO1xuXHRsaWtlczogbnVtYmVyO1xuXHRjb21tZW50czogSUNvbW1lbnRbXTtcbn1cblxuY29uc3QgUG9zdCA9IChwcm9wczogSVBvc3QpOiBKU1guRWxlbWVudCA9PiB7XG5cdC8vICFUT0RPIEJVVFRPTiBTSE9VTEQgQkUgRElTQUJMRUQgV0hJTEUgTElLSU5HIE9SIFVOTElLSU5HXG5cdC8vICFUT0RPIEJVVFRPTiBTSE9VTEQgRFlOQU1JQ0FMTFkgQ0hBTkdFIFRFWFRcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdGNvbnN0IFtsaWtlXSA9IHVzZU11dGF0aW9uKExJS0VfUE9TVCwge1xuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbXG5cdFx0XHR7IHF1ZXJ5OiBGSU5EX1BPU1RfQllfSUQsIHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQgfSB9LFxuXHRcdFx0e1xuXHRcdFx0XHRxdWVyeTogSVNfTElLRURfQllfVVNFUixcblx0XHRcdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0pO1xuXHRjb25zdCBbdW5MaWtlXSA9IHVzZU11dGF0aW9uKFVOTElLRV9QT1NULCB7XG5cdFx0cmVmZXRjaFF1ZXJpZXM6IFtcblx0XHRcdHsgcXVlcnk6IEZJTkRfUE9TVF9CWV9JRCwgdmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCB9IH0sXG5cdFx0XHR7XG5cdFx0XHRcdHF1ZXJ5OiBJU19MSUtFRF9CWV9VU0VSLFxuXHRcdFx0XHR2YXJpYWJsZXM6IHsgaWQ6IHByb3BzLmlkLCB1c2VySWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikgfSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSk7XG5cblx0Y29uc3QgeyBkYXRhLCByZWZldGNoIH0gPSB1c2VRdWVyeShJU19MSUtFRF9CWV9VU0VSLCB7XG5cdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0ZXJyb3JQb2xpY3k6IFwiYWxsXCIsXG5cblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvci5tZXNzYWdlKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBsaWtlRnVuY3Rpb24gPSAoKSA9PiB7XG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcblx0XHRkYXRhPy5pc0xpa2VkQnlVc2VyXG5cdFx0XHQ/IGxpa2Uoe1xuXHRcdFx0XHRcdHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQsIHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSB9LFxuXHRcdFx0ICB9KVxuXHRcdFx0OiB1bkxpa2Uoe1xuXHRcdFx0XHRcdHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQsIHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSB9LFxuXHRcdFx0ICB9KTtcblx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0fTtcblxuXHRjb25zdCBMaWtlVW5MaWtlQnV0dG9uID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcblx0XHRjb25zdCBsaWtlQnV0dG9uID0gKFxuXHRcdFx0PGJ1dHRvbiBkaXNhYmxlZD17bG9hZGluZ30gb25DbGljaz17KCkgPT4gbGlrZUZ1bmN0aW9uKCl9PlxuXHRcdFx0XHR7XCIgXCJ9XG5cdFx0XHRcdExpa2V7XCIgXCJ9XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQpO1xuXG5cdFx0Y29uc3QgdW5MaWtlQnV0dG9uID0gKFxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxuXHRcdFx0XHRcdHVuTGlrZSh7XG5cdFx0XHRcdFx0XHR2YXJpYWJsZXM6IHsgaWQ6IHByb3BzLmlkLCB1c2VySWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikgfSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ+XG5cdFx0XHRcdHtcIiBcIn1cblx0XHRcdFx0VW5saWtle1wiIFwifVxuXHRcdFx0PC9idXR0b24+XG5cdFx0KTtcblx0XHRyZXR1cm4gZGF0YT8uaXNMaWtlZEJ5VXNlciA/IHVuTGlrZUJ1dHRvbiA6IGxpa2VCdXR0b247XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGg0PlxuXHRcdFx0XHRcdHtwcm9wcy51c2VyPy5maXJzdE5hbWV9IHtwcm9wcy51c2VyPy5sYXN0TmFtZX17XCIgXCJ9XG5cdFx0XHRcdFx0PHNwYW4+e3Byb3BzLmRhdGV9PC9zcGFuPlxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD57cHJvcHMuY29udGVudH08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+e3Byb3BzLmxpa2VzfTwvZGl2PiB7TGlrZVVuTGlrZUJ1dHRvbigpfVxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e3Byb3BzPy5jb21tZW50cz8ubWFwKChjb21tZW50OiBJQ29tbWVudCkgPT4ge1xuXHRcdFx0XHRcdDxDb21tZW50XG5cdFx0XHRcdFx0XHRmaXJzdE5hbWU9e2NvbW1lbnQuZmlyc3ROYW1lfVxuXHRcdFx0XHRcdFx0bGFzdE5hbWU9e2NvbW1lbnQubGFzdE5hbWV9XG5cdFx0XHRcdFx0XHRjb250ZW50PXtjb21tZW50LmNvbnRlbnR9XG5cdFx0XHRcdFx0XHRkYXRlPXtjb21tZW50LmRhdGV9XG5cdFx0XHRcdFx0XHRsaWtlcz17Y29tbWVudC5saWtlc31cblx0XHRcdFx0XHRcdGNvbW1lbnRzPXtjb21tZW50LmNvbW1lbnRzfVxuXHRcdFx0XHRcdC8+O1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Posts/Post/Post.tsx\n");

/***/ })

})
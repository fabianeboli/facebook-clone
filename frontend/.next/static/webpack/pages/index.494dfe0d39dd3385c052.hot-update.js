webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Posts/Post/Post.tsx":
/*!****************************************!*\
  !*** ./components/Posts/Post/Post.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Comment/Comment */ \"./components/Comment/Comment.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_post_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../queries/post.query */ \"./queries/post.query.ts\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/Posts/Post/Post.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\nvar Post = function Post(props) {\n  _s();\n\n  var _props$user, _props$user2, _props$comments;\n\n  // !TODO BUTTON SHOULD BE DISABLED WHILE LIKING OR UNLIKING\n  // !TODO BUTTON SHOULD DYNAMICALLY CHANGE TEXT\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_6__[\"LIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_6__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }, {\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_6__[\"IS_LIKED_BY_USER\"],\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    }]\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 1),\n      like = _useMutation2[0];\n\n  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_6__[\"UNLIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_6__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }, {\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_6__[\"IS_LIKED_BY_USER\"],\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    }]\n  }),\n      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation3, 1),\n      unLike = _useMutation4[0];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_6__[\"IS_LIKED_BY_USER\"], {\n    variables: {\n      id: props.id,\n      userId: localStorage.getItem(\"id\")\n    },\n    errorPolicy: \"all\",\n    onError: function onError(error) {\n      console.log(\"Error: \", error.message);\n    }\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var likeFunction = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              _context.next = 3;\n              return refetch();\n\n            case 3:\n              (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? like({\n                variables: {\n                  id: props.id,\n                  userId: localStorage.getItem(\"id\")\n                }\n              }) : unLike({\n                variables: {\n                  id: props.id,\n                  userId: localStorage.getItem(\"id\")\n                }\n              });\n              setLoading(false);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function likeFunction() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var LikeUnLikeButton = function LikeUnLikeButton() {\n    var likeButton = __jsx(\"button\", {\n      disabled: loading,\n      onClick: function onClick() {\n        return likeFunction();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 4\n      }\n    }, \" \", \"Like\", \" \");\n\n    var unLikeButton = __jsx(\"button\", {\n      disabled: loading,\n      onClick: function onClick() {\n        return likeFunction();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 4\n      }\n    }, \" \", \"Unlike\", \" \");\n\n    return (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? unLikeButton : likeButton;\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 4\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.firstName, \" \", (_props$user2 = props.user) === null || _props$user2 === void 0 ? void 0 : _props$user2.lastName, \" \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 6\n    }\n  }, props.date))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }\n  }, props.content)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }\n  }, props.likes), \" \", LikeUnLikeButton(), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 4\n    }\n  }, props === null || props === void 0 ? void 0 : (_props$comments = props.comments) === null || _props$comments === void 0 ? void 0 : _props$comments.map(function (comment) {\n    __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      firstName: comment.firstName,\n      lastName: comment.lastName,\n      content: comment.content,\n      date: comment.date,\n      likes: comment.likes,\n      comments: comment.comments,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 6\n      }\n    });\n  })));\n};\n\n_s(Post, \"Hl2bf3qaUhE8UAY9WxbBsU+8xMc=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy9Qb3N0L1Bvc3QudHN4PzEwZjgiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZU11dGF0aW9uIiwiTElLRV9QT1NUIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkZJTkRfUE9TVF9CWV9JRCIsInZhcmlhYmxlcyIsImlkIiwiSVNfTElLRURfQllfVVNFUiIsInVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaWtlIiwiVU5MSUtFX1BPU1QiLCJ1bkxpa2UiLCJ1c2VRdWVyeSIsImVycm9yUG9saWN5Iiwib25FcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJkYXRhIiwicmVmZXRjaCIsImxpa2VGdW5jdGlvbiIsImlzTGlrZWRCeVVzZXIiLCJMaWtlVW5MaWtlQnV0dG9uIiwibGlrZUJ1dHRvbiIsInVuTGlrZUJ1dHRvbiIsInVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRhdGUiLCJjb250ZW50IiwibGlrZXMiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFzQkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUErQjtBQUFBOztBQUFBOztBQUMzQztBQUNBO0FBRjJDLGtCQUdiQyxzREFBUSxDQUFVLEtBQVYsQ0FISztBQUFBLE1BR3BDQyxPQUhvQztBQUFBLE1BRzNCQyxVQUgyQjs7QUFBQSxxQkFLNUJDLGtFQUFXLENBQUNDLDZEQUFELEVBQVk7QUFDckNDLGtCQUFjLEVBQUUsQ0FDZjtBQUFFQyxXQUFLLEVBQUVDLG1FQUFUO0FBQTBCQyxlQUFTLEVBQUU7QUFBRUMsVUFBRSxFQUFFVixLQUFLLENBQUNVO0FBQVo7QUFBckMsS0FEZSxFQUVmO0FB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QUNGLFFBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxHQVRBLENBREYsQ0FYRCxDQUREO0FBMEJBLENBekZEOztHQUFNdkMsSTtVQUtVSywwRCxFQVNFQSwwRCxFQVVTYyx1RDs7O0tBeEJyQm5CLEk7QUEyRlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0cy9Qb3N0L1Bvc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbW1lbnQsIHsgSUNvbW1lbnQgfSBmcm9tIFwiLi4vLi4vQ29tbWVudC9Db21tZW50XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7XG5cdExJS0VfUE9TVCxcblx0QUxMX1BPU1RTLFxuXHRVTkxJS0VfUE9TVCxcblx0SVNfTElLRURfQllfVVNFUixcblx0RklORF9QT1NUX0JZX0lELFxufSBmcm9tIFwiLi4vLi4vLi4vcXVlcmllcy9wb3N0LnF1ZXJ5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvc3Qge1xuXHRpZDogc3RyaW5nO1xuXHR1c2VyPzoge1xuXHRcdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRcdGxhc3ROYW1lOiBzdHJpbmc7XG5cdH07XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRkYXRlOiBzdHJpbmc7XG5cdGNvbnRlbnQ6IHN0cmluZztcblx0bGlrZXM6IG51bWJlcjtcblx0Y29tbWVudHM6IElDb21tZW50W107XG59XG5cbmNvbnN0IFBvc3QgPSAocHJvcHM6IElQb3N0KTogSlNYLkVsZW1lbnQgPT4ge1xuXHQvLyAhVE9ETyBCVVRUT04gU0hPVUxEIEJFIERJU0FCTEVEIFdISUxFIExJS0lORyBPUiBVTkxJS0lOR1xuXHQvLyAhVE9ETyBCVVRUT04gU0hPVUxEIERZTkFNSUNBTExZIENIQU5HRSBURVhUXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuXHRjb25zdCBbbGlrZV0gPSB1c2VNdXRhdGlvbihMSUtFX1BPU1QsIHtcblx0XHRyZWZldGNoUXVlcmllczogW1xuXHRcdFx0eyBxdWVyeTogRklORF9QT1NUX0JZX0lELCB2YXJpYWJsZXM6IHsgaWQ6IHByb3BzLmlkIH0gfSxcblx0XHRcdHtcblx0XHRcdFx0cXVlcnk6IElTX0xJS0VEX0JZX1VTRVIsXG5cdFx0XHRcdHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQsIHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSB9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9KTtcblx0Y29uc3QgW3VuTGlrZV0gPSB1c2VNdXRhdGlvbihVTkxJS0VfUE9TVCwge1xuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbXG5cdFx0XHR7IHF1ZXJ5OiBGSU5EX1BPU1RfQllfSUQsIHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQgfSB9LFxuXHRcdFx0e1xuXHRcdFx0XHRxdWVyeTogSVNfTElLRURfQllfVVNFUixcblx0XHRcdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0pO1xuXG5cdGNvbnN0IHsgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoSVNfTElLRURfQllfVVNFUiwge1xuXHRcdHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQsIHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSB9LFxuXHRcdGVycm9yUG9saWN5OiBcImFsbFwiLFxuXG5cdFx0b25FcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IubWVzc2FnZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3QgbGlrZUZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuXHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0YXdhaXQgcmVmZXRjaCgpO1xuXHRcdGRhdGE/LmlzTGlrZWRCeVVzZXJcblx0XHRcdD8gbGlrZSh7XG5cdFx0XHRcdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0XHQgIH0pXG5cdFx0XHQ6IHVuTGlrZSh7XG5cdFx0XHRcdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0XHQgIH0pO1xuXHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHR9O1xuXG5cdGNvbnN0IExpa2VVbkxpa2VCdXR0b24gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuXHRcdGNvbnN0IGxpa2VCdXR0b24gPSAoXG5cdFx0XHQ8YnV0dG9uIGRpc2FibGVkPXtsb2FkaW5nfSBvbkNsaWNrPXsoKSA9PiBsaWtlRnVuY3Rpb24oKX0+XG5cdFx0XHRcdHtcIiBcIn1cblx0XHRcdFx0TGlrZXtcIiBcIn1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdCk7XG5cblx0XHRjb25zdCB1bkxpa2VCdXR0b24gPSAoXG5cdFx0XHQ8YnV0dG9uIGRpc2FibGVkPXtsb2FkaW5nfSBvbkNsaWNrPXsoKSA9PiBsaWtlRnVuY3Rpb24oKX0+XG5cdFx0XHRcdHtcIiBcIn1cblx0XHRcdFx0VW5saWtle1wiIFwifVxuXHRcdFx0PC9idXR0b24+XG5cdFx0KTtcblx0XHRyZXR1cm4gZGF0YT8uaXNMaWtlZEJ5VXNlciA/IHVuTGlrZUJ1dHRvbiA6IGxpa2VCdXR0b247XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGg0PlxuXHRcdFx0XHRcdHtwcm9wcy51c2VyPy5maXJzdE5hbWV9IHtwcm9wcy51c2VyPy5sYXN0TmFtZX17XCIgXCJ9XG5cdFx0XHRcdFx0PHNwYW4+e3Byb3BzLmRhdGV9PC9zcGFuPlxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD57cHJvcHMuY29udGVudH08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+e3Byb3BzLmxpa2VzfTwvZGl2PiB7TGlrZVVuTGlrZUJ1dHRvbigpfVxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e3Byb3BzPy5jb21tZW50cz8ubWFwKChjb21tZW50OiBJQ29tbWVudCkgPT4ge1xuXHRcdFx0XHRcdDxDb21tZW50XG5cdFx0XHRcdFx0XHRmaXJzdE5hbWU9e2NvbW1lbnQuZmlyc3ROYW1lfVxuXHRcdFx0XHRcdFx0bGFzdE5hbWU9e2NvbW1lbnQubGFzdE5hbWV9XG5cdFx0XHRcdFx0XHRjb250ZW50PXtjb21tZW50LmNvbnRlbnR9XG5cdFx0XHRcdFx0XHRkYXRlPXtjb21tZW50LmRhdGV9XG5cdFx0XHRcdFx0XHRsaWtlcz17Y29tbWVudC5saWtlc31cblx0XHRcdFx0XHRcdGNvbW1lbnRzPXtjb21tZW50LmNvbW1lbnRzfVxuXHRcdFx0XHRcdC8+O1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Posts/Post/Post.tsx\n");

/***/ })

})
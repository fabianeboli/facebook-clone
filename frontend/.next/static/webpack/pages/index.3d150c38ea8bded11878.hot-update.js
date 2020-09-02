webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Posts/Post/Post.tsx":
/*!****************************************!*\
  !*** ./components/Posts/Post/Post.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Comment/Comment */ \"./components/Comment/Comment.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_post_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../queries/post.query */ \"./queries/post.query.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/Posts/Post/Post.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Post = function Post(props) {\n  _s();\n\n  var _props$user, _props$user2, _props$comments;\n\n  // !TODO BUTTON SHOULD BE DISABLED WHILE LIKING OR UNLIKING\n  // !TODO BUTTON SHOULD DYNAMICALLY CHANGE TEXT\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"LIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }]\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 1),\n      like = _useMutation2[0];\n\n  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"UNLIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }]\n  }),\n      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation3, 1),\n      unLike = _useMutation4[0];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"IS_LIKED_BY_USER\"], {\n    variables: {\n      id: props.id,\n      userId: localStorage.getItem(\"id\")\n    },\n    errorPolicy: \"all\",\n    onError: function onError(error) {\n      console.log(\"Error: \", error.message);\n    }\n  }),\n      data = _useQuery.data;\n\n  var likeFunction = function likeFunction() {\n    setLoading(true);\n    (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? like({\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    }) : unLike({\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    });\n    setLoading(false);\n  };\n\n  var LikeUnLikeButton = function LikeUnLikeButton() {\n    var likeButton = __jsx(\"button\", {\n      onClick: function onClick() {\n        return likeFunction();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 22\n      }\n    }, \" Like \");\n\n    var unLikeButton = __jsx(\"button\", {\n      onClick: function onClick() {\n        return unLike({\n          variables: {\n            id: props.id,\n            userId: localStorage.getItem(\"id\")\n          }\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 4\n      }\n    }, \" \", \"Unlike\", \" \");\n\n    return (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? unLikeButton : likeButton;\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 4\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.firstName, \" \", (_props$user2 = props.user) === null || _props$user2 === void 0 ? void 0 : _props$user2.lastName, \" \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 6\n    }\n  }, props.date))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, props.content)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 4\n    }\n  }, props.likes), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 4\n    }\n  }, props === null || props === void 0 ? void 0 : (_props$comments = props.comments) === null || _props$comments === void 0 ? void 0 : _props$comments.map(function (comment) {\n    __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      firstName: comment.firstName,\n      lastName: comment.lastName,\n      content: comment.content,\n      date: comment.date,\n      likes: comment.likes,\n      comments: comment.comments,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 6\n      }\n    });\n  })));\n};\n\n_s(Post, \"Xo21AB29SMuDvVLnt2S4D+pUZa4=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy9Qb3N0L1Bvc3QudHN4PzEwZjgiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZU11dGF0aW9uIiwiTElLRV9QT1NUIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkZJTkRfUE9TVF9CWV9JRCIsInZhcmlhYmxlcyIsImlkIiwibGlrZSIsIlVOTElLRV9QT1NUIiwidW5MaWtlIiwidXNlUXVlcnkiLCJJU19MSUtFRF9CWV9VU0VSIiwidXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yUG9saWN5Iiwib25FcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJkYXRhIiwibGlrZUZ1bmN0aW9uIiwiaXNMaWtlZEJ5VXNlciIsIkxpa2VVbkxpa2VCdXR0b24iLCJsaWtlQnV0dG9uIiwidW5MaWtlQnV0dG9uIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZGF0ZSIsImNvbnRlbnQiLCJsaWtlcyIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFzQkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUErQjtBQUFBOztBQUFBOztBQUMzQztBQUNBO0FBRjJDLGtCQUdiQyxzREFBUSxDQUFVLEtBQVYsQ0FISztBQUFBLE1BR3BDQyxPQUhvQztBQUFBLE1BRzNCQyxVQUgyQjs7QUFBQSxxQkFLNUJDLGtFQUFXLENBQUNDLDZEQUFELEVBQVk7QUFDckNDLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLG1FQUFUO0FBQTBCQyxlQUFTLEVBQUU7QUFBRUMsVUFBRSxFQUFFVixLQUFLLENBQUNVO0FBQVo7QUFBckMsS0FBRDtBQURxQixHQUFaLENBTGlCO0FBQUE7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QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlsQyxLQUFLLENBQUNtQyxPQUFWLENBREQsQ0FQRCxFQVVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTW5DLEtBQUssQ0FBQ29DLEtBQVosQ0FWRCxFQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRXBDLEtBREYsYUFDRUEsS0FERiwwQ0FDRUEsS0FBSyxDQUFFcUMsUUFEVCxvREFDRSxnQkFBaUJDLEdBQWpCLENBQXFCLFVBQUNDLE9BQUQsRUFBdUI7QUFDNUMsVUFBQyx3REFBRDtBQUNDLGVBQVMsRUFBRUEsT0FBTyxDQUFDUCxTQURwQjtBQUVDLGNBQVEsRUFBRU8sT0FBTyxDQUFDTixRQUZuQjtBQUdDLGFBQU8sRUFBRU0sT0FBTyxDQUFDSixPQUhsQjtBQUlDLFVBQUksRUFBRUksT0FBTyxDQUFDTCxJQUpmO0FBS0MsV0FBSyxFQUFFSyxPQUFPLENBQUNILEtBTGhCO0FBTUMsY0FBUSxFQUFFRyxPQUFPLENBQUNGLFFBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxHQVRBLENBREYsQ0FYRCxDQUREO0FBMEJBLENBNUVEOztHQUFNdEMsSTtVQUtVSywwRCxFQUdFQSwwRCxFQUlBVSx1RDs7O0tBWlpmLEk7QUE4RVNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0cy9Qb3N0L1Bvc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbW1lbnQsIHsgSUNvbW1lbnQgfSBmcm9tIFwiLi4vLi4vQ29tbWVudC9Db21tZW50XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7XG5cdExJS0VfUE9TVCxcblx0QUxMX1BPU1RTLFxuXHRVTkxJS0VfUE9TVCxcblx0SVNfTElLRURfQllfVVNFUixcblx0RklORF9QT1NUX0JZX0lELFxufSBmcm9tIFwiLi4vLi4vLi4vcXVlcmllcy9wb3N0LnF1ZXJ5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvc3Qge1xuXHRpZDogc3RyaW5nO1xuXHR1c2VyPzoge1xuXHRcdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRcdGxhc3ROYW1lOiBzdHJpbmc7XG5cdH07XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRkYXRlOiBzdHJpbmc7XG5cdGNvbnRlbnQ6IHN0cmluZztcblx0bGlrZXM6IG51bWJlcjtcblx0Y29tbWVudHM6IElDb21tZW50W107XG59XG5cbmNvbnN0IFBvc3QgPSAocHJvcHM6IElQb3N0KTogSlNYLkVsZW1lbnQgPT4ge1xuXHQvLyAhVE9ETyBCVVRUT04gU0hPVUxEIEJFIERJU0FCTEVEIFdISUxFIExJS0lORyBPUiBVTkxJS0lOR1xuXHQvLyAhVE9ETyBCVVRUT04gU0hPVUxEIERZTkFNSUNBTExZIENIQU5HRSBURVhUXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuXHRjb25zdCBbbGlrZV0gPSB1c2VNdXRhdGlvbihMSUtFX1BPU1QsIHtcblx0XHRyZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEZJTkRfUE9TVF9CWV9JRCwgdmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCB9IH1dLFxuXHR9KTtcblx0Y29uc3QgW3VuTGlrZV0gPSB1c2VNdXRhdGlvbihVTkxJS0VfUE9TVCwge1xuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogRklORF9QT1NUX0JZX0lELCB2YXJpYWJsZXM6IHsgaWQ6IHByb3BzLmlkIH0gfV0sXG5cdH0pO1xuXG5cdGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoSVNfTElLRURfQllfVVNFUiwge1xuXHRcdHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQsIHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSB9LFxuXHRcdGVycm9yUG9saWN5OiBcImFsbFwiLFxuXHRcdG9uRXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yLm1lc3NhZ2UpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGxpa2VGdW5jdGlvbiA9ICgpID0+IHtcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdGRhdGE/LmlzTGlrZWRCeVVzZXJcblx0XHRcdD8gbGlrZSh7XG5cdFx0XHRcdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0XHQgIH0pXG5cdFx0XHQ6IHVuTGlrZSh7XG5cdFx0XHRcdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0XHQgIH0pO1xuXHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHR9O1xuXG5cdGNvbnN0IExpa2VVbkxpa2VCdXR0b24gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuXHRcdGNvbnN0IGxpa2VCdXR0b24gPSA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxpa2VGdW5jdGlvbigpfT4gTGlrZSA8L2J1dHRvbj47XG5cblx0XHRjb25zdCB1bkxpa2VCdXR0b24gPSAoXG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+XG5cdFx0XHRcdFx0dW5MaWtlKHtcblx0XHRcdFx0XHRcdHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQsIHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSB9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdD5cblx0XHRcdFx0e1wiIFwifVxuXHRcdFx0XHRVbmxpa2V7XCIgXCJ9XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQpO1xuXHRcdHJldHVybiBkYXRhPy5pc0xpa2VkQnlVc2VyID8gdW5MaWtlQnV0dG9uIDogbGlrZUJ1dHRvbjtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDQ+XG5cdFx0XHRcdFx0e3Byb3BzLnVzZXI/LmZpcnN0TmFtZX0ge3Byb3BzLnVzZXI/Lmxhc3ROYW1lfXtcIiBcIn1cblx0XHRcdFx0XHQ8c3Bhbj57cHJvcHMuZGF0ZX08L3NwYW4+XG5cdFx0XHRcdDwvaDQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxwPntwcm9wcy5jb250ZW50fTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj57cHJvcHMubGlrZXN9PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7cHJvcHM/LmNvbW1lbnRzPy5tYXAoKGNvbW1lbnQ6IElDb21tZW50KSA9PiB7XG5cdFx0XHRcdFx0PENvbW1lbnRcblx0XHRcdFx0XHRcdGZpcnN0TmFtZT17Y29tbWVudC5maXJzdE5hbWV9XG5cdFx0XHRcdFx0XHRsYXN0TmFtZT17Y29tbWVudC5sYXN0TmFtZX1cblx0XHRcdFx0XHRcdGNvbnRlbnQ9e2NvbW1lbnQuY29udGVudH1cblx0XHRcdFx0XHRcdGRhdGU9e2NvbW1lbnQuZGF0ZX1cblx0XHRcdFx0XHRcdGxpa2VzPXtjb21tZW50Lmxpa2VzfVxuXHRcdFx0XHRcdFx0Y29tbWVudHM9e2NvbW1lbnQuY29tbWVudHN9XG5cdFx0XHRcdFx0Lz47XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts/Post/Post.tsx\n");

/***/ })

})
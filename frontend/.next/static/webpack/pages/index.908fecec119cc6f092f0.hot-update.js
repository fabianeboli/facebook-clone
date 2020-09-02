webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Posts/Post/Post.tsx":
/*!****************************************!*\
  !*** ./components/Posts/Post/Post.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Comment/Comment */ \"./components/Comment/Comment.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_post_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../queries/post.query */ \"./queries/post.query.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/Posts/Post/Post.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Post = function Post(props) {\n  _s();\n\n  var _props$user, _props$user2, _props$comments;\n\n  // !TODO BUTTON SHOULD BE DISABLED WHILE LIKING OR UNLIKING\n  // !TODO BUTTON SHOULD DYNAMICALLY CHANGE TEXT\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"LIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }]\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 1),\n      like = _useMutation2[0];\n\n  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"UNLIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }]\n  }),\n      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation3, 1),\n      unLike = _useMutation4[0];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"IS_LIKED_BY_USER\"], {\n    variables: {\n      id: props.id,\n      userId: localStorage.getItem(\"id\")\n    },\n    errorPolicy: \"all\",\n    onError: function onError(error) {\n      console.log(\"Error: \", error.message);\n    }\n  }),\n      data = _useQuery.data;\n\n  var likeFunction = function likeFunction() {\n    setLoading(true);\n    (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? like({\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    }) : unLike({\n      variables: {\n        id: props.id,\n        userId: localStorage.getItem(\"id\")\n      }\n    });\n    setLoading(false);\n  };\n\n  var LikeUnLikeButton = function LikeUnLikeButton() {\n    var likeButton = __jsx(\"button\", {\n      di: true,\n      onClick: function onClick() {\n        return likeFunction();\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 22\n      }\n    }, \" Like \");\n\n    var unLikeButton = __jsx(\"button\", {\n      onClick: function onClick() {\n        return unLike({\n          variables: {\n            id: props.id,\n            userId: localStorage.getItem(\"id\")\n          }\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 4\n      }\n    }, \" \", \"Unlike\", \" \");\n\n    return (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? unLikeButton : likeButton;\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 4\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.firstName, \" \", (_props$user2 = props.user) === null || _props$user2 === void 0 ? void 0 : _props$user2.lastName, \" \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 6\n    }\n  }, props.date))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, props.content)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 4\n    }\n  }, props.likes), \" \", LikeUnLikeButton(), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 4\n    }\n  }, props === null || props === void 0 ? void 0 : (_props$comments = props.comments) === null || _props$comments === void 0 ? void 0 : _props$comments.map(function (comment) {\n    __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      firstName: comment.firstName,\n      lastName: comment.lastName,\n      content: comment.content,\n      date: comment.date,\n      likes: comment.likes,\n      comments: comment.comments,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 6\n      }\n    });\n  })));\n};\n\n_s(Post, \"Xo21AB29SMuDvVLnt2S4D+pUZa4=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy9Qb3N0L1Bvc3QudHN4PzEwZjgiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZU11dGF0aW9uIiwiTElLRV9QT1NUIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkZJTkRfUE9TVF9CWV9JRCIsInZhcmlhYmxlcyIsImlkIiwibGlrZSIsIlVOTElLRV9QT1NUIiwidW5MaWtlIiwidXNlUXVlcnkiLCJJU19MSUtFRF9CWV9VU0VSIiwidXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yUG9saWN5Iiwib25FcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJkYXRhIiwibGlrZUZ1bmN0aW9uIiwiaXNMaWtlZEJ5VXNlciIsIkxpa2VVbkxpa2VCdXR0b24iLCJsaWtlQnV0dG9uIiwidW5MaWtlQnV0dG9uIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZGF0ZSIsImNvbnRlbnQiLCJsaWtlcyIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFzQkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUErQjtBQUFBOztBQUFBOztBQUMzQztBQUNBO0FBRjJDLGtCQUdiQyxzREFBUSxDQUFVLEtBQVYsQ0FISztBQUFBLE1BR3BDQyxPQUhvQztBQUFBLE1BRzNCQyxVQUgyQjs7QUFBQSxxQkFLNUJDLGtFQUFXLENBQUNDLDZEQUFELEVBQVk7QUFDckNDLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLG1FQUFUO0FBQTBCQyxlQUFTLEVBQUU7QUFBRUMsVUFBRSxFQUFFVixLQUFLLENBQUNVO0FBQVo7QUFBckMsS0FBRDtBQURxQixHQUFaLENBTGlCO0FBQUE7QUFBQSxNQUtwQ0MsSUFMb0M7O0FBQUEsc0JBUTFCUCxrRUFBVyxDQUFDUSwrREFBRCxFQUFjO0FBQ3pDTixrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyxtRUFBVDtBQUEwQkMsZUFBUyxFQUFFO0FBQUVDLFVBQUUsRUFBRVYsS0FBSyxDQUFDVTtBQUFaO0FBQXJDLEtBQUQ7QUFEeUIsR0FBZCxDQVJlO0FBQUE7QUFBQSxNQVFwQ0csTUFSb0M7O0FBQUEsa0JBWTFCQywrREFBUSxDQUFDQyxvRUFBRCxFQUFtQjtBQUMzQ04sYUFBUyxFQUFFO0FBQUVDLFFBQUUsRUFBRVYsS0FBSyxDQUFDVSxFQUFaO0FBQWdCTSxZQUFNLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQjtBQUF4QixLQURnQztBQUUzQ0MsZUFBVyxFQUFFLEtBRjhCO0FBRzNDQyxXQUFPLEVBQUUsaUJBQUNDLEtBQUQsRUFBVztBQUNuQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsS0FBSyxDQUFDRyxPQUE3QjtBQUNBO0FBTDBDLEdBQW5CLENBWmtCO0FBQUEsTUFZbkNDLElBWm1DLGFBWW5DQSxJQVptQzs7QUFvQjNDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUJ2QixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0EsS0FBQXNCLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRSxhQUFOLElBQ0doQixJQUFJLENBQUM7QUFDTEYsZUFBUyxFQUFFO0FBQUVDLFVBQUUsRUFBRVYsS0FBSyxDQUFDVSxFQUFaO0FBQWdCTSxjQUFNLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQjtBQUF4QjtBQUROLEtBQUQsQ0FEUCxHQUlHTCxNQUFNLENBQUM7QUFDUEosZUFBUyxFQUFFO0FBQUVDLFVBQUUsRUFBRVYsS0FBSyxDQUFDVSxFQUFaO0FBQWdCTSxjQUFNLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQjtBQUF4QjtBQURKLEtBQUQsQ0FKVDtBQU9BZixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0EsR0FWRDs7QUFZQSxNQUFNeUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFtQjtBQUMzQyxRQUFNQyxVQUFVLEdBQUc7QUFBUSxRQUFFLE1BQVY7QUFBVyxhQUFPLEVBQUU7QUFBQSxlQUFNSCxZQUFZLEVBQWxCO0FBQUEsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBbkI7O0FBRUEsUUFBTUksWUFBWSxHQUNqQjtBQUNDLGFBQU8sRUFBRTtBQUFBLGVBQ1JqQixNQUFNLENBQUM7QUFDTkosbUJBQVMsRUFBRTtBQUFFQyxjQUFFLEVBQUVWLEtBQUssQ0FBQ1UsRUFBWjtBQUFnQk0sa0JBQU0sRUFBRUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCO0FBQXhCO0FBREwsU0FBRCxDQURFO0FBQUEsT0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0UsR0FQRixZQVFRLEdBUlIsQ0FERDs7QUFZQSxXQUFPLENBQUFPLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRSxhQUFOLElBQXNCRyxZQUF0QixHQUFxQ0QsVUFBNUM7QUFDQSxHQWhCRDs7QUFrQkEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0U3QixLQUFLLENBQUMrQixJQURSLGdEQUNFLFlBQVlDLFNBRGQsdUJBQzBCaEMsS0FBSyxDQUFDK0IsSUFEaEMsaURBQzBCLGFBQVlFLFFBRHRDLEVBQ2dELEdBRGhELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPakMsS0FBSyxDQUFDa0MsSUFBYixDQUZELENBREQsQ0FERCxFQU9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlsQyxLQUFLLENBQUNtQyxPQUFWLENBREQsQ0FQRCxFQVVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTW5DLEtBQUssQ0FBQ29DLEtBQVosQ0FWRCxPQVUyQlIsZ0JBQWdCLEVBVjNDLEVBV0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFNUIsS0FERixhQUNFQSxLQURGLDBDQUNFQSxLQUFLLENBQUVxQyxRQURULG9EQUNFLGdCQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsT0FBRCxFQUF1QjtBQUM1QyxVQUFDLHdEQUFEO0FBQ0MsZUFBUyxFQUFFQSxPQUFPLENBQUNQLFNBRHBCO0FBRUMsY0FBUSxFQUFFTyxPQUFPLENBQUNOLFFBRm5CO0FBR0MsYUFBTyxFQUFFTSxPQUFPLENBQUNKLE9BSGxCO0FBSUMsVUFBSSxFQUFFSSxPQUFPLENBQUNMLElBSmY7QUFLQyxXQUFLLEVBQUVLLE9BQU8sQ0FBQ0gsS0FMaEI7QUFNQyxjQUFRLEVBQUVHLE9BQU8sQ0FBQ0YsUUFObkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLEdBVEEsQ0FERixDQVhELENBREQ7QUEwQkEsQ0E1RUQ7O0dBQU10QyxJO1VBS1VLLDBELEVBR0VBLDBELEVBSUFVLHVEOzs7S0FaWmYsSTtBQThFU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzL1Bvc3QvUG9zdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29tbWVudCwgeyBJQ29tbWVudCB9IGZyb20gXCIuLi8uLi9Db21tZW50L0NvbW1lbnRcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHtcblx0TElLRV9QT1NULFxuXHRBTExfUE9TVFMsXG5cdFVOTElLRV9QT1NULFxuXHRJU19MSUtFRF9CWV9VU0VSLFxuXHRGSU5EX1BPU1RfQllfSUQsXG59IGZyb20gXCIuLi8uLi8uLi9xdWVyaWVzL3Bvc3QucXVlcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9zdCB7XG5cdGlkOiBzdHJpbmc7XG5cdHVzZXI/OiB7XG5cdFx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdFx0bGFzdE5hbWU6IHN0cmluZztcblx0fTtcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdGRhdGU6IHN0cmluZztcblx0Y29udGVudDogc3RyaW5nO1xuXHRsaWtlczogbnVtYmVyO1xuXHRjb21tZW50czogSUNvbW1lbnRbXTtcbn1cblxuY29uc3QgUG9zdCA9IChwcm9wczogSVBvc3QpOiBKU1guRWxlbWVudCA9PiB7XG5cdC8vICFUT0RPIEJVVFRPTiBTSE9VTEQgQkUgRElTQUJMRUQgV0hJTEUgTElLSU5HIE9SIFVOTElLSU5HXG5cdC8vICFUT0RPIEJVVFRPTiBTSE9VTEQgRFlOQU1JQ0FMTFkgQ0hBTkdFIFRFWFRcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdGNvbnN0IFtsaWtlXSA9IHVzZU11dGF0aW9uKExJS0VfUE9TVCwge1xuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogRklORF9QT1NUX0JZX0lELCB2YXJpYWJsZXM6IHsgaWQ6IHByb3BzLmlkIH0gfV0sXG5cdH0pO1xuXHRjb25zdCBbdW5MaWtlXSA9IHVzZU11dGF0aW9uKFVOTElLRV9QT1NULCB7XG5cdFx0cmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBGSU5EX1BPU1RfQllfSUQsIHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQgfSB9XSxcblx0fSk7XG5cblx0Y29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShJU19MSUtFRF9CWV9VU0VSLCB7XG5cdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0ZXJyb3JQb2xpY3k6IFwiYWxsXCIsXG5cdFx0b25FcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IubWVzc2FnZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3QgbGlrZUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0ZGF0YT8uaXNMaWtlZEJ5VXNlclxuXHRcdFx0PyBsaWtlKHtcblx0XHRcdFx0XHR2YXJpYWJsZXM6IHsgaWQ6IHByb3BzLmlkLCB1c2VySWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikgfSxcblx0XHRcdCAgfSlcblx0XHRcdDogdW5MaWtlKHtcblx0XHRcdFx0XHR2YXJpYWJsZXM6IHsgaWQ6IHByb3BzLmlkLCB1c2VySWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikgfSxcblx0XHRcdCAgfSk7XG5cdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdH07XG5cblx0Y29uc3QgTGlrZVVuTGlrZUJ1dHRvbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG5cdFx0Y29uc3QgbGlrZUJ1dHRvbiA9IDxidXR0b24gZGkgb25DbGljaz17KCkgPT4gbGlrZUZ1bmN0aW9uKCl9PiBMaWtlIDwvYnV0dG9uPjtcblxuXHRcdGNvbnN0IHVuTGlrZUJ1dHRvbiA9IChcblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHR1bkxpa2Uoe1xuXHRcdFx0XHRcdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PlxuXHRcdFx0XHR7XCIgXCJ9XG5cdFx0XHRcdFVubGlrZXtcIiBcIn1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdCk7XG5cdFx0cmV0dXJuIGRhdGE/LmlzTGlrZWRCeVVzZXIgPyB1bkxpa2VCdXR0b24gOiBsaWtlQnV0dG9uO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoND5cblx0XHRcdFx0XHR7cHJvcHMudXNlcj8uZmlyc3ROYW1lfSB7cHJvcHMudXNlcj8ubGFzdE5hbWV9e1wiIFwifVxuXHRcdFx0XHRcdDxzcGFuPntwcm9wcy5kYXRlfTwvc3Bhbj5cblx0XHRcdFx0PC9oND5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHA+e3Byb3BzLmNvbnRlbnR9PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2Pntwcm9wcy5saWtlc308L2Rpdj4ge0xpa2VVbkxpa2VCdXR0b24oKX1cblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtwcm9wcz8uY29tbWVudHM/Lm1hcCgoY29tbWVudDogSUNvbW1lbnQpID0+IHtcblx0XHRcdFx0XHQ8Q29tbWVudFxuXHRcdFx0XHRcdFx0Zmlyc3ROYW1lPXtjb21tZW50LmZpcnN0TmFtZX1cblx0XHRcdFx0XHRcdGxhc3ROYW1lPXtjb21tZW50Lmxhc3ROYW1lfVxuXHRcdFx0XHRcdFx0Y29udGVudD17Y29tbWVudC5jb250ZW50fVxuXHRcdFx0XHRcdFx0ZGF0ZT17Y29tbWVudC5kYXRlfVxuXHRcdFx0XHRcdFx0bGlrZXM9e2NvbW1lbnQubGlrZXN9XG5cdFx0XHRcdFx0XHRjb21tZW50cz17Y29tbWVudC5jb21tZW50c31cblx0XHRcdFx0XHQvPjtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Posts/Post/Post.tsx\n");

/***/ })

})
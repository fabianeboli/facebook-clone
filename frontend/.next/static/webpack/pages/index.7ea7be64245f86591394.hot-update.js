webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Posts/Post/Post.tsx":
/*!****************************************!*\
  !*** ./components/Posts/Post/Post.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Comment/Comment */ \"./components/Comment/Comment.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_post_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../queries/post.query */ \"./queries/post.query.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/Posts/Post/Post.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Post = function Post(props) {\n  _s();\n\n  var _props$user, _props$user2, _props$comments;\n\n  // !TODO MUTATIONS SHOULDN'T REFETCH ALL POSTS BUT JUST ONE\n  // !TODO BUTTON SHOULD BE DISABLED LIKING OR UNLIKING \n  // !TODO BUTTON SHOULD DYNAMICALLY CHANGE TEXT \n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"LIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_POST_BY_ID\"]\n    }, {\n      variables: {}\n    }]\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 1),\n      like = _useMutation2[0];\n\n  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"UNLIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"ALL_POSTS\"]\n    }]\n  }),\n      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation3, 1),\n      unLike = _useMutation4[0];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"IS_LIKED_BY_USER\"], {\n    variables: {\n      id: props.id,\n      userId: localStorage.getItem(\"id\")\n    },\n    errorPolicy: \"all\",\n    onError: function onError(error) {\n      console.log(\"Error: \", error.message);\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading;\n\n  var LikeUnLikeButton = function LikeUnLikeButton() {\n    var likeButton = __jsx(\"button\", {\n      onClick: function onClick() {\n        return like({\n          variables: {\n            id: props.id,\n            userId: localStorage.getItem(\"id\")\n          }\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 4\n      }\n    }, \" \", \"Like\", \" \");\n\n    var unLikeButton = __jsx(\"button\", {\n      onClick: function onClick() {\n        return unLike({\n          variables: {\n            id: props.id,\n            userId: localStorage.getItem(\"id\")\n          }\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 4\n      }\n    }, \" \", \"Unlike\", \" \");\n\n    console.log(data === null || data === void 0 ? void 0 : data.isLikedByUser);\n    return (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? unLikeButton : likeButton;\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 4\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.firstName, \" \", (_props$user2 = props.user) === null || _props$user2 === void 0 ? void 0 : _props$user2.lastName, \" \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 6\n    }\n  }, props.date))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }\n  }, props.content)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 4\n    }\n  }, props.likes), \" \", LikeUnLikeButton(), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 4\n    }\n  }, props === null || props === void 0 ? void 0 : (_props$comments = props.comments) === null || _props$comments === void 0 ? void 0 : _props$comments.map(function (comment) {\n    __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      firstName: comment.firstName,\n      lastName: comment.lastName,\n      content: comment.content,\n      date: comment.date,\n      likes: comment.likes,\n      comments: comment.comments,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 6\n      }\n    });\n  })));\n};\n\n_s(Post, \"r7wiD4/fEBFpe8Sl7HDB6OLW1X0=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy9Qb3N0L1Bvc3QudHN4PzEwZjgiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwidXNlTXV0YXRpb24iLCJMSUtFX1BPU1QiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiRklORF9QT1NUX0JZX0lEIiwidmFyaWFibGVzIiwibGlrZSIsIlVOTElLRV9QT1NUIiwiQUxMX1BPU1RTIiwidW5MaWtlIiwidXNlUXVlcnkiLCJJU19MSUtFRF9CWV9VU0VSIiwiaWQiLCJ1c2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZXJyb3JQb2xpY3kiLCJvbkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImRhdGEiLCJsb2FkaW5nIiwiTGlrZVVuTGlrZUJ1dHRvbiIsImxpa2VCdXR0b24iLCJ1bkxpa2VCdXR0b24iLCJpc0xpa2VkQnlVc2VyIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZGF0ZSIsImNvbnRlbnQiLCJsaWtlcyIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFzQkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUErQjtBQUFBOztBQUFBOztBQUMzQztBQUNBO0FBQ0E7QUFIMkMscUJBSTVCQyxrRUFBVyxDQUFDQyw2REFBRCxFQUFZO0FBQ3JDQyxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyxtRUFBZUE7QUFBeEIsS0FBRCxFQUE0QjtBQUFDQyxlQUFTLEVBQUU7QUFBWixLQUE1QjtBQURxQixHQUFaLENBSmlCO0FBQUE7QUFBQSxNQUlwQ0MsSUFKb0M7O0FBQUEsc0JBTzFCTixrRUFBVyxDQUFDTywrREFBRCxFQUFjO0FBQ3pDTCxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFSyw2REFBU0E7QUFBbEIsS0FBRDtBQUR5QixHQUFkLENBUGU7QUFBQTtBQUFBLE1BT3BDQyxNQVBvQzs7QUFBQSxrQkFXakJDLCtEQUFRLENBQUNDLG9FQUFELEVBQW1CO0FBQ3BETixhQUFTLEVBQUU7QUFBRU8sUUFBRSxFQUFFYixLQUFLLENBQUNhLEVBQVo7QUFBZ0JDLFlBQU0sRUFBRUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCO0FBQXhCLEtBRHlDO0FBRXBEQyxlQUFXLEVBQUUsS0FGdUM7QUFHcERDLFdBQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFXO0FBQ25CQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixLQUFLLENBQUNHLE9BQTdCO0FBQ0E7QUFMbUQsR0FBbkIsQ0FYUztBQUFBLE1BV25DQyxJQVhtQyxhQVduQ0EsSUFYbUM7QUFBQSxNQVc3QkMsT0FYNkIsYUFXN0JBLE9BWDZCOztBQW9CM0MsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFtQjtBQUMzQyxRQUFNQyxVQUFVLEdBQ2Y7QUFDQyxhQUFPLEVBQUU7QUFBQSxlQUNSbkIsSUFBSSxDQUFDO0FBQ0pELG1CQUFTLEVBQUU7QUFBRU8sY0FBRSxFQUFFYixLQUFLLENBQUNhLEVBQVo7QUFBZ0JDLGtCQUFNLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQjtBQUF4QjtBQURQLFNBQUQsQ0FESTtBQUFBLE9BRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9FLEdBUEYsVUFRTSxHQVJOLENBREQ7O0FBYUEsUUFBTVcsWUFBWSxHQUNqQjtBQUNDLGFBQU8sRUFBRTtBQUFBLGVBQ1JqQixNQUFNLENBQUM7QUFDTkosbUJBQVMsRUFBRTtBQUFFTyxjQUFFLEVBQUViLEtBQUssQ0FBQ2EsRUFBWjtBQUFnQkMsa0JBQU0sRUFBRUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCO0FBQXhCO0FBREwsU0FBRCxDQURFO0FBQUEsT0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0UsR0FQRixZQVFRLEdBUlIsQ0FERDs7QUFZQUksV0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQVosYUFBWUEsSUFBWix1QkFBWUEsSUFBSSxDQUFFSyxhQUFsQjtBQUNBLFdBQU8sQ0FBQUwsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVLLGFBQU4sSUFBc0JELFlBQXRCLEdBQXFDRCxVQUE1QztBQUNBLEdBNUJEOztBQThCQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDRTFCLEtBQUssQ0FBQzZCLElBRFIsZ0RBQ0UsWUFBWUMsU0FEZCx1QkFDMEI5QixLQUFLLENBQUM2QixJQURoQyxpREFDMEIsYUFBWUUsUUFEdEMsRUFDZ0QsR0FEaEQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU8vQixLQUFLLENBQUNnQyxJQUFiLENBRkQsQ0FERCxDQURELEVBT0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSWhDLEtBQUssQ0FBQ2lDLE9BQVYsQ0FERCxDQVBELEVBVUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNakMsS0FBSyxDQUFDa0MsS0FBWixDQVZELE9BVTJCVCxnQkFBZ0IsRUFWM0MsRUFXQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0V6QixLQURGLGFBQ0VBLEtBREYsMENBQ0VBLEtBQUssQ0FBRW1DLFFBRFQsb0RBQ0UsZ0JBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxPQUFELEVBQXVCO0FBQzVDLFVBQUMsd0RBQUQ7QUFDQyxlQUFTLEVBQUVBLE9BQU8sQ0FBQ1AsU0FEcEI7QUFFQyxjQUFRLEVBQUVPLE9BQU8sQ0FBQ04sUUFGbkI7QUFHQyxhQUFPLEVBQUVNLE9BQU8sQ0FBQ0osT0FIbEI7QUFJQyxVQUFJLEVBQUVJLE9BQU8sQ0FBQ0wsSUFKZjtBQUtDLFdBQUssRUFBRUssT0FBTyxDQUFDSCxLQUxoQjtBQU1DLGNBQVEsRUFBRUcsT0FBTyxDQUFDRixRQU5uQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUEsR0FUQSxDQURGLENBWEQsQ0FERDtBQTBCQSxDQTVFRDs7R0FBTXBDLEk7VUFJVUUsMEQsRUFHRUEsMEQsRUFJU1UsdUQ7OztLQVhyQlosSTtBQThFU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzL1Bvc3QvUG9zdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb21tZW50LCB7IElDb21tZW50IH0gZnJvbSBcIi4uLy4uL0NvbW1lbnQvQ29tbWVudFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQge1xuXHRMSUtFX1BPU1QsXG5cdEFMTF9QT1NUUyxcblx0VU5MSUtFX1BPU1QsXG5cdElTX0xJS0VEX0JZX1VTRVIsXG5cdEZJTkRfUE9TVF9CWV9JRCxcbn0gZnJvbSBcIi4uLy4uLy4uL3F1ZXJpZXMvcG9zdC5xdWVyeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3N0IHtcblx0aWQ6IHN0cmluZztcblx0dXNlcj86IHtcblx0XHRmaXJzdE5hbWU6IHN0cmluZztcblx0XHRsYXN0TmFtZTogc3RyaW5nO1xuXHR9O1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0ZGF0ZTogc3RyaW5nO1xuXHRjb250ZW50OiBzdHJpbmc7XG5cdGxpa2VzOiBudW1iZXI7XG5cdGNvbW1lbnRzOiBJQ29tbWVudFtdO1xufVxuXG5jb25zdCBQb3N0ID0gKHByb3BzOiBJUG9zdCk6IEpTWC5FbGVtZW50ID0+IHtcblx0Ly8gIVRPRE8gTVVUQVRJT05TIFNIT1VMRE4nVCBSRUZFVENIIEFMTCBQT1NUUyBCVVQgSlVTVCBPTkVcblx0Ly8gIVRPRE8gQlVUVE9OIFNIT1VMRCBCRSBESVNBQkxFRCBMSUtJTkcgT1IgVU5MSUtJTkcgXG5cdC8vICFUT0RPIEJVVFRPTiBTSE9VTEQgRFlOQU1JQ0FMTFkgQ0hBTkdFIFRFWFQgXG5cdGNvbnN0IFtsaWtlXSA9IHVzZU11dGF0aW9uKExJS0VfUE9TVCwge1xuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogRklORF9QT1NUX0JZX0lEfSwge3ZhcmlhYmxlczoge319XSxcblx0fSk7XG5cdGNvbnN0IFt1bkxpa2VdID0gdXNlTXV0YXRpb24oVU5MSUtFX1BPU1QsIHtcblx0XHRyZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEFMTF9QT1NUUyB9XSxcblx0fSk7XG5cblx0Y29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShJU19MSUtFRF9CWV9VU0VSLCB7XG5cdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0ZXJyb3JQb2xpY3k6IFwiYWxsXCIsXG5cdFx0b25FcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IubWVzc2FnZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0XG5cdGNvbnN0IExpa2VVbkxpa2VCdXR0b24gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuXHRcdGNvbnN0IGxpa2VCdXR0b24gPSAoXG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+XG5cdFx0XHRcdFx0bGlrZSh7XG5cdFx0XHRcdFx0XHR2YXJpYWJsZXM6IHsgaWQ6IHByb3BzLmlkLCB1c2VySWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikgfSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ+XG5cdFx0XHRcdHtcIiBcIn1cblx0XHRcdFx0TGlrZXtcIiBcIn1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdCk7XG5cblx0XHRjb25zdCB1bkxpa2VCdXR0b24gPSAoXG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+XG5cdFx0XHRcdFx0dW5MaWtlKHtcblx0XHRcdFx0XHRcdHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQsIHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSB9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdD5cblx0XHRcdFx0e1wiIFwifVxuXHRcdFx0XHRVbmxpa2V7XCIgXCJ9XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQpO1xuXHRcdGNvbnNvbGUubG9nKGRhdGE/LmlzTGlrZWRCeVVzZXIpO1xuXHRcdHJldHVybiBkYXRhPy5pc0xpa2VkQnlVc2VyID8gdW5MaWtlQnV0dG9uIDogbGlrZUJ1dHRvbjtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDQ+XG5cdFx0XHRcdFx0e3Byb3BzLnVzZXI/LmZpcnN0TmFtZX0ge3Byb3BzLnVzZXI/Lmxhc3ROYW1lfXtcIiBcIn1cblx0XHRcdFx0XHQ8c3Bhbj57cHJvcHMuZGF0ZX08L3NwYW4+XG5cdFx0XHRcdDwvaDQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxwPntwcm9wcy5jb250ZW50fTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj57cHJvcHMubGlrZXN9PC9kaXY+IHtMaWtlVW5MaWtlQnV0dG9uKCl9XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7cHJvcHM/LmNvbW1lbnRzPy5tYXAoKGNvbW1lbnQ6IElDb21tZW50KSA9PiB7XG5cdFx0XHRcdFx0PENvbW1lbnRcblx0XHRcdFx0XHRcdGZpcnN0TmFtZT17Y29tbWVudC5maXJzdE5hbWV9XG5cdFx0XHRcdFx0XHRsYXN0TmFtZT17Y29tbWVudC5sYXN0TmFtZX1cblx0XHRcdFx0XHRcdGNvbnRlbnQ9e2NvbW1lbnQuY29udGVudH1cblx0XHRcdFx0XHRcdGRhdGU9e2NvbW1lbnQuZGF0ZX1cblx0XHRcdFx0XHRcdGxpa2VzPXtjb21tZW50Lmxpa2VzfVxuXHRcdFx0XHRcdFx0Y29tbWVudHM9e2NvbW1lbnQuY29tbWVudHN9XG5cdFx0XHRcdFx0Lz47XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts/Post/Post.tsx\n");

/***/ })

})
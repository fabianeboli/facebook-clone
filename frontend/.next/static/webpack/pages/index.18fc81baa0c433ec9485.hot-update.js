webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Posts/Post/Post.tsx":
/*!****************************************!*\
  !*** ./components/Posts/Post/Post.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Comment/Comment */ \"./components/Comment/Comment.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries_post_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../queries/post.query */ \"./queries/post.query.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fabian/programming_Exercises/facebook-clone/frontend/components/Posts/Post/Post.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Post = function Post(props) {\n  _s();\n\n  var _props$user, _props$user2, _props$comments;\n\n  // !TODO MUTATIONS SHOULDN'T REFETCH ALL POSTS BUT JUST ONE\n  // !TODO BUTTON SHOULD BE DISABLED LIKING OR UNLIKING\n  // !TODO BUTTON SHOULD DYNAMICALLY CHANGE TEXT\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"LIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }]\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 1),\n      like = _useMutation2[0];\n\n  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"UNLIKE_POST\"], {\n    refetchQueries: [{\n      query: _queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"FIND_POST_BY_ID\"],\n      variables: {\n        id: props.id\n      }\n    }]\n  }),\n      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation3, 1),\n      unLike = _useMutation4[0];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(_queries_post_query__WEBPACK_IMPORTED_MODULE_4__[\"IS_LIKED_BY_USER\"], {\n    variables: {\n      id: props.id,\n      userId: localStorage.getItem(\"id\")\n    },\n    errorPolicy: \"all\",\n    onError: function onError(error) {\n      console.log(\"Error: \", error.message);\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading;\n\n  var LikeUnLikeButton = function LikeUnLikeButton() {\n    var likeButton = __jsx(\"button\", {\n      onClick: function onClick() {\n        return like({\n          variables: {\n            id: props.id,\n            userId: localStorage.getItem(\"id\")\n          }\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 4\n      }\n    }, \" \", \"Like\", \" \");\n\n    var unLikeButton = __jsx(\"button\", {\n      onClick: function onClick() {\n        return unLike({\n          variables: {\n            id: props.id,\n            userId: localStorage.getItem(\"id\")\n          }\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 4\n      }\n    }, \" \", \"Unlike\", \" \");\n\n    console.log(data === null || data === void 0 ? void 0 : data.isLikedByUser);\n    return (data === null || data === void 0 ? void 0 : data.isLikedByUser) ? unLikeButton : likeButton;\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 4\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 5\n    }\n  }, (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.firstName, \" \", (_props$user2 = props.user) === null || _props$user2 === void 0 ? void 0 : _props$user2.lastName, \" \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 6\n    }\n  }, props.date))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }\n  }, props.content)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 4\n    }\n  }, props.likes), \" \", LikeUnLikeButton(), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 4\n    }\n  }, props === null || props === void 0 ? void 0 : (_props$comments = props.comments) === null || _props$comments === void 0 ? void 0 : _props$comments.map(function (comment) {\n    __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      firstName: comment.firstName,\n      lastName: comment.lastName,\n      content: comment.content,\n      date: comment.date,\n      likes: comment.likes,\n      comments: comment.comments,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 6\n      }\n    });\n  })));\n};\n\n_s(Post, \"r7wiD4/fEBFpe8Sl7HDB6OLW1X0=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy9Qb3N0L1Bvc3QudHN4PzEwZjgiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwidXNlTXV0YXRpb24iLCJMSUtFX1BPU1QiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiRklORF9QT1NUX0JZX0lEIiwidmFyaWFibGVzIiwiaWQiLCJsaWtlIiwiVU5MSUtFX1BPU1QiLCJ1bkxpa2UiLCJ1c2VRdWVyeSIsIklTX0xJS0VEX0JZX1VTRVIiLCJ1c2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZXJyb3JQb2xpY3kiLCJvbkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImRhdGEiLCJsb2FkaW5nIiwiTGlrZVVuTGlrZUJ1dHRvbiIsImxpa2VCdXR0b24iLCJ1bkxpa2VCdXR0b24iLCJpc0xpa2VkQnlVc2VyIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZGF0ZSIsImNvbnRlbnQiLCJsaWtlcyIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFzQkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUErQjtBQUFBOztBQUFBOztBQUMzQztBQUNBO0FBQ0E7QUFIMkMscUJBSTVCQyxrRUFBVyxDQUFDQyw2REFBRCxFQUFZO0FBQ3JDQyxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyxtRUFBVDtBQUEwQkMsZUFBUyxFQUFFO0FBQUVDLFVBQUUsRUFBRVAsS0FBSyxDQUFDTztBQUFaO0FBQXJDLEtBQUQ7QUFEcUIsR0FBWixDQUppQjtBQUFBO0FBQUEsTUFJcENDLElBSm9DOztBQUFBLHNCQU8xQlAsa0VBQVcsQ0FBQ1EsK0RBQUQsRUFBYztBQUN6Q04sa0JBQWMsRUFBRSxDQUFDO0FBQUVDLFdBQUssRUFBRUMsbUVBQVQ7QUFBMEJDLGVBQVMsRUFBRTtBQUFFQyxVQUFFLEVBQUVQLEtBQUssQ0FBQ087QUFBWjtBQUFyQyxLQUFEO0FBRHlCLEdBQWQsQ0FQZTtBQUFBO0FBQUEsTUFPcENHLE1BUG9DOztBQUFBLGtCQVdqQkMsK0RBQVEsQ0FBQ0Msb0VBQUQsRUFBbUI7QUFDcEROLGFBQVMsRUFBRTtBQUFFQyxRQUFFLEVBQUVQLEtBQUssQ0FBQ08sRUFBWjtBQUFnQk0sWUFBTSxFQUFFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckI7QUFBeEIsS0FEeUM7QUFFcERDLGVBQVcsRUFBRSxLQUZ1QztBQUdwREMsV0FBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVc7QUFDbkJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLEtBQUssQ0FBQ0csT0FBN0I7QUFDQTtBQUxtRCxHQUFuQixDQVhTO0FBQUEsTUFXbkNDLElBWG1DLGFBV25DQSxJQVhtQztBQUFBLE1BVzdCQyxPQVg2QixhQVc3QkEsT0FYNkI7O0FBbUIzQyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQW1CO0FBQzNDLFFBQU1DLFVBQVUsR0FDZjtBQUNDLGFBQU8sRUFBRTtBQUFBLGVBQ1JqQixJQUFJLENBQUM7QUFDSkYsbUJBQVMsRUFBRTtBQUFFQyxjQUFFLEVBQUVQLEtBQUssQ0FBQ08sRUFBWjtBQUFnQk0sa0JBQU0sRUFBRUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCO0FBQXhCO0FBRFAsU0FBRCxDQURJO0FBQUEsT0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0UsR0FQRixVQVFNLEdBUk4sQ0FERDs7QUFhQSxRQUFNVyxZQUFZLEdBQ2pCO0FBQ0MsYUFBTyxFQUFFO0FBQUEsZUFDUmhCLE1BQU0sQ0FBQztBQUNOSixtQkFBUyxFQUFFO0FBQUVDLGNBQUUsRUFBRVAsS0FBSyxDQUFDTyxFQUFaO0FBQWdCTSxrQkFBTSxFQUFFQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckI7QUFBeEI7QUFETCxTQUFELENBREU7QUFBQSxPQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRSxHQVBGLFlBUVEsR0FSUixDQUREOztBQVlBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBWixhQUFZQSxJQUFaLHVCQUFZQSxJQUFJLENBQUVLLGFBQWxCO0FBQ0EsV0FBTyxDQUFBTCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUssYUFBTixJQUFzQkQsWUFBdEIsR0FBcUNELFVBQTVDO0FBQ0EsR0E1QkQ7O0FBOEJBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNFekIsS0FBSyxDQUFDNEIsSUFEUixnREFDRSxZQUFZQyxTQURkLHVCQUMwQjdCLEtBQUssQ0FBQzRCLElBRGhDLGlEQUMwQixhQUFZRSxRQUR0QyxFQUNnRCxHQURoRCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTzlCLEtBQUssQ0FBQytCLElBQWIsQ0FGRCxDQURELENBREQsRUFPQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJL0IsS0FBSyxDQUFDZ0MsT0FBVixDQURELENBUEQsRUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1oQyxLQUFLLENBQUNpQyxLQUFaLENBVkQsT0FVMkJULGdCQUFnQixFQVYzQyxFQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRXhCLEtBREYsYUFDRUEsS0FERiwwQ0FDRUEsS0FBSyxDQUFFa0MsUUFEVCxvREFDRSxnQkFBaUJDLEdBQWpCLENBQXFCLFVBQUNDLE9BQUQsRUFBdUI7QUFDNUMsVUFBQyx3REFBRDtBQUNDLGVBQVMsRUFBRUEsT0FBTyxDQUFDUCxTQURwQjtBQUVDLGNBQVEsRUFBRU8sT0FBTyxDQUFDTixRQUZuQjtBQUdDLGFBQU8sRUFBRU0sT0FBTyxDQUFDSixPQUhsQjtBQUlDLFVBQUksRUFBRUksT0FBTyxDQUFDTCxJQUpmO0FBS0MsV0FBSyxFQUFFSyxPQUFPLENBQUNILEtBTGhCO0FBTUMsY0FBUSxFQUFFRyxPQUFPLENBQUNGLFFBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxHQVRBLENBREYsQ0FYRCxDQUREO0FBMEJBLENBM0VEOztHQUFNbkMsSTtVQUlVRSwwRCxFQUdFQSwwRCxFQUlTVSx1RDs7O0tBWHJCWixJO0FBNkVTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdHMvUG9zdC9Qb3N0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbW1lbnQsIHsgSUNvbW1lbnQgfSBmcm9tIFwiLi4vLi4vQ29tbWVudC9Db21tZW50XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7XG5cdExJS0VfUE9TVCxcblx0QUxMX1BPU1RTLFxuXHRVTkxJS0VfUE9TVCxcblx0SVNfTElLRURfQllfVVNFUixcblx0RklORF9QT1NUX0JZX0lELFxufSBmcm9tIFwiLi4vLi4vLi4vcXVlcmllcy9wb3N0LnF1ZXJ5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvc3Qge1xuXHRpZDogc3RyaW5nO1xuXHR1c2VyPzoge1xuXHRcdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRcdGxhc3ROYW1lOiBzdHJpbmc7XG5cdH07XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRkYXRlOiBzdHJpbmc7XG5cdGNvbnRlbnQ6IHN0cmluZztcblx0bGlrZXM6IG51bWJlcjtcblx0Y29tbWVudHM6IElDb21tZW50W107XG59XG5cbmNvbnN0IFBvc3QgPSAocHJvcHM6IElQb3N0KTogSlNYLkVsZW1lbnQgPT4ge1xuXHQvLyAhVE9ETyBNVVRBVElPTlMgU0hPVUxETidUIFJFRkVUQ0ggQUxMIFBPU1RTIEJVVCBKVVNUIE9ORVxuXHQvLyAhVE9ETyBCVVRUT04gU0hPVUxEIEJFIERJU0FCTEVEIExJS0lORyBPUiBVTkxJS0lOR1xuXHQvLyAhVE9ETyBCVVRUT04gU0hPVUxEIERZTkFNSUNBTExZIENIQU5HRSBURVhUXG5cdGNvbnN0IFtsaWtlXSA9IHVzZU11dGF0aW9uKExJS0VfUE9TVCwge1xuXHRcdHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogRklORF9QT1NUX0JZX0lELCB2YXJpYWJsZXM6IHsgaWQ6IHByb3BzLmlkIH0gfV0sXG5cdH0pO1xuXHRjb25zdCBbdW5MaWtlXSA9IHVzZU11dGF0aW9uKFVOTElLRV9QT1NULCB7XG5cdFx0cmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBGSU5EX1BPU1RfQllfSUQsIHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQgfSB9XSxcblx0fSk7XG5cblx0Y29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShJU19MSUtFRF9CWV9VU0VSLCB7XG5cdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0ZXJyb3JQb2xpY3k6IFwiYWxsXCIsXG5cdFx0b25FcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IubWVzc2FnZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3QgTGlrZVVuTGlrZUJ1dHRvbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG5cdFx0Y29uc3QgbGlrZUJ1dHRvbiA9IChcblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRsaWtlKHtcblx0XHRcdFx0XHRcdHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQsIHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSB9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdD5cblx0XHRcdFx0e1wiIFwifVxuXHRcdFx0XHRMaWtle1wiIFwifVxuXHRcdFx0PC9idXR0b24+XG5cdFx0KTtcblxuXHRcdGNvbnN0IHVuTGlrZUJ1dHRvbiA9IChcblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHR1bkxpa2Uoe1xuXHRcdFx0XHRcdFx0dmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCwgdXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpIH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PlxuXHRcdFx0XHR7XCIgXCJ9XG5cdFx0XHRcdFVubGlrZXtcIiBcIn1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdCk7XG5cdFx0Y29uc29sZS5sb2coZGF0YT8uaXNMaWtlZEJ5VXNlcik7XG5cdFx0cmV0dXJuIGRhdGE/LmlzTGlrZWRCeVVzZXIgPyB1bkxpa2VCdXR0b24gOiBsaWtlQnV0dG9uO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoND5cblx0XHRcdFx0XHR7cHJvcHMudXNlcj8uZmlyc3ROYW1lfSB7cHJvcHMudXNlcj8ubGFzdE5hbWV9e1wiIFwifVxuXHRcdFx0XHRcdDxzcGFuPntwcm9wcy5kYXRlfTwvc3Bhbj5cblx0XHRcdFx0PC9oND5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHA+e3Byb3BzLmNvbnRlbnR9PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2Pntwcm9wcy5saWtlc308L2Rpdj4ge0xpa2VVbkxpa2VCdXR0b24oKX1cblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtwcm9wcz8uY29tbWVudHM/Lm1hcCgoY29tbWVudDogSUNvbW1lbnQpID0+IHtcblx0XHRcdFx0XHQ8Q29tbWVudFxuXHRcdFx0XHRcdFx0Zmlyc3ROYW1lPXtjb21tZW50LmZpcnN0TmFtZX1cblx0XHRcdFx0XHRcdGxhc3ROYW1lPXtjb21tZW50Lmxhc3ROYW1lfVxuXHRcdFx0XHRcdFx0Y29udGVudD17Y29tbWVudC5jb250ZW50fVxuXHRcdFx0XHRcdFx0ZGF0ZT17Y29tbWVudC5kYXRlfVxuXHRcdFx0XHRcdFx0bGlrZXM9e2NvbW1lbnQubGlrZXN9XG5cdFx0XHRcdFx0XHRjb21tZW50cz17Y29tbWVudC5jb21tZW50c31cblx0XHRcdFx0XHQvPjtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Posts/Post/Post.tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./queries/user.query.ts":
/*!*******************************!*\
  !*** ./queries/user.query.ts ***!
  \*******************************/
/*! exports provided: ALL_USERS, SIGNUP, SIGN_IN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_USERS\", function() { return ALL_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGNUP\", function() { return SIGNUP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN\", function() { return SIGN_IN; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tmutation login($email: String!, $password: String!) {\\n\\t\\tlogin(email: $email, password: $password) {\\n\\t\\t\\tvalue\\n\\t\\t\\tfirstName\\n\\t\\t\\tlastName\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tmutation createUser(\\n\\t\\t$firstName: String!\\n\\t\\t$lastName: String!\\n\\t\\t$email: String!\\n\\t\\t$gender: String!\\n\\t\\t$dateOfBirth: String!\\n\\t\\t$password: String!\\n\\t) {\\n\\t\\tcreateUser(\\n\\t\\t\\tfirstName: $firstName\\n\\t\\t\\tlastName: $lastName\\n\\t\\t\\temail: $email\\n\\t\\t\\tgender: $gender\\n\\t\\t\\tdateOfBirth: $dateOfBirth\\n\\t\\t\\tpassword: $password\\n\\t\\t) {\\n\\t\\t\\tfirstName\\n\\t\\t\\tlastName\\n\\t\\t\\temail\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\t query allUsers {\\n\\t\\t allUsers {\\n\\t\\t\\t firstName,\\n\\t\\t\\t lastName\\n\\t\\t\\t email \\n\\t\\t }\\n\\t }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar ALL_USERS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"gql\"])(_templateObject());\nvar SIGNUP = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"gql\"])(_templateObject2());\nvar SIGN_IN = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"gql\"])(_templateObject3());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcXVlcmllcy91c2VyLnF1ZXJ5LnRzP2E4MjUiXSwibmFtZXMiOlsiQUxMX1VTRVJTIiwiZ3FsIiwiU0lHTlVQIiwiU0lHTl9JTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MsMERBQUgsbUJBQWY7QUFVQSxJQUFNQyxNQUFNLEdBQUdELDBEQUFILG9CQUFaO0FBd0JBLElBQU1FLE9BQU8sR0FBR0YsMERBQUgsb0JBQWIiLCJmaWxlIjoiLi9xdWVyaWVzL3VzZXIucXVlcnkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IEFMTF9VU0VSUyA9IGdxbGBcblx0IHF1ZXJ5IGFsbFVzZXJzIHtcblx0XHQgYWxsVXNlcnMge1xuXHRcdFx0IGZpcnN0TmFtZSxcblx0XHRcdCBsYXN0TmFtZVxuXHRcdFx0IGVtYWlsIFxuXHRcdCB9XG5cdCB9XG5gO1xuXG5leHBvcnQgY29uc3QgU0lHTlVQID0gZ3FsYFxuXHRtdXRhdGlvbiBjcmVhdGVVc2VyKFxuXHRcdCRmaXJzdE5hbWU6IFN0cmluZyFcblx0XHQkbGFzdE5hbWU6IFN0cmluZyFcblx0XHQkZW1haWw6IFN0cmluZyFcblx0XHQkZ2VuZGVyOiBTdHJpbmchXG5cdFx0JGRhdGVPZkJpcnRoOiBTdHJpbmchXG5cdFx0JHBhc3N3b3JkOiBTdHJpbmchXG5cdCkge1xuXHRcdGNyZWF0ZVVzZXIoXG5cdFx0XHRmaXJzdE5hbWU6ICRmaXJzdE5hbWVcblx0XHRcdGxhc3ROYW1lOiAkbGFzdE5hbWVcblx0XHRcdGVtYWlsOiAkZW1haWxcblx0XHRcdGdlbmRlcjogJGdlbmRlclxuXHRcdFx0ZGF0ZU9mQmlydGg6ICRkYXRlT2ZCaXJ0aFxuXHRcdFx0cGFzc3dvcmQ6ICRwYXNzd29yZFxuXHRcdCkge1xuXHRcdFx0Zmlyc3ROYW1lXG5cdFx0XHRsYXN0TmFtZVxuXHRcdFx0ZW1haWxcblx0XHR9XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTSUdOX0lOID0gZ3FsYFxuXHRtdXRhdGlvbiBsb2dpbigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuXHRcdGxvZ2luKGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcblx0XHRcdHZhbHVlXG5cdFx0XHRmaXJzdE5hbWVcblx0XHRcdGxhc3ROYW1lXG5cdFx0fVxuXHR9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./queries/user.query.ts\n");

/***/ })

})
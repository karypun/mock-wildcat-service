;require('/Users/karwaipun/projects/hods-prototype/node_modules/source-map-support/source-map-support.js').install();
exports.id = "server";
exports.modules = {

/***/ "./src/common/page-wrap.tsx":
/*!**********************************!*\
  !*** ./src/common/page-wrap.tsx ***!
  \**********************************/
/*! exports provided: PageWrap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageWrap\", function() { return PageWrap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hods_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hods/components */ \"./node_modules/@hods/components/dist/index.js\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss */ \"./src/common/app.scss\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/karwaipun/projects/hods-prototype/src/common/page-wrap.tsx\";\n\n\n\nconst PageWrap = ({\n  routes,\n  children\n}) => {\n  const compare = (a, b) => a.href > b.href ? 1 : -1;\n\n  const navigation = routes.map(e => ({\n    href: e.href,\n    text: e.title\n  })).sort(compare);\n  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_hods_components__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n    footerNavigation: navigation,\n    navigation: navigation,\n    title: \"Review applications to keep wildcats\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, children);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageWrap);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BhZ2Utd3JhcC50c3g/OThmYSJdLCJuYW1lcyI6WyJQYWdlV3JhcCIsInJvdXRlcyIsImNoaWxkcmVuIiwiY29tcGFyZSIsImEiLCJiIiwiaHJlZiIsIm5hdmlnYXRpb24iLCJtYXAiLCJlIiwidGV4dCIsInRpdGxlIiwic29ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFTyxNQUFNQSxRQUF1QixHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQztBQUFWLENBQUQsS0FBMEI7QUFDL0QsUUFBTUMsT0FBTyxHQUFHLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUNkRCxDQUFDLENBQUNFLElBQUYsR0FBU0QsQ0FBQyxDQUFDQyxJQUFYLEdBQ0UsQ0FERixHQUVFLENBQUMsQ0FITDs7QUFLQSxRQUFNQyxVQUFVLEdBQUdOLE1BQU0sQ0FDdEJPLEdBRGdCLENBQ1pDLENBQUMsS0FBSztBQUNUSCxRQUFJLEVBQUVHLENBQUMsQ0FBQ0gsSUFEQztBQUVUSSxRQUFJLEVBQUVELENBQUMsQ0FBQ0U7QUFGQyxHQUFMLENBRFcsRUFLaEJDLElBTGdCLENBS1hULE9BTFcsQ0FBbkI7QUFPQSxzQkFDRSw0REFBQyxxREFBRDtBQUNFLG9CQUFnQixFQUFFSSxVQURwQjtBQUVFLGNBQVUsRUFBRUEsVUFGZDtBQUdFLFNBQUssRUFBQyxzQ0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dMLFFBTEgsQ0FERjtBQVNELENBdEJNO0FBd0JRRix1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21tb24vcGFnZS13cmFwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCBjcmVhdGVFbGVtZW50IGFzIGggfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYWdlUHJvcHMgfSBmcm9tICdAbm90LWdvdnVrL2FwcC1jb21wb3Nlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnQGhvZHMvY29tcG9uZW50cyc7XG5cbmltcG9ydCAnLi9hcHAuc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBQYWdlV3JhcDogRkM8UGFnZVByb3BzPiA9ICh7IHJvdXRlcywgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBjb21wYXJlID0gKGEsIGIpID0+IChcbiAgICBhLmhyZWYgPiBiLmhyZWZcbiAgICA/IDFcbiAgICA6IC0xXG4gICk7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSByb3V0ZXNcbiAgICAubWFwKGUgPT4gKHtcbiAgICAgIGhyZWY6IGUuaHJlZixcbiAgICAgIHRleHQ6IGUudGl0bGVcbiAgICB9KSlcbiAgICAuc29ydChjb21wYXJlKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlXG4gICAgICBmb290ZXJOYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufVxuICAgICAgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn1cbiAgICAgIHRpdGxlPVwiUmV2aWV3IGFwcGxpY2F0aW9ucyB0byBrZWVwIHdpbGRjYXRzXCJcbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/page-wrap.tsx\n");

/***/ })

};
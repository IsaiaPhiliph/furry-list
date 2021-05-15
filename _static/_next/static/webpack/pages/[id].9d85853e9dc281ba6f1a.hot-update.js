self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id].tsx":
/*!************************!*\
  !*** ./pages/[id].tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ AnimeDetails; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AnimeDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AnimeDetail */ "./components/AnimeDetail.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Pablo\\Documents\\Proyectos\\furry-list\\pages\\[id].tsx",
    _s = $RefreshSig$();




var __N_SSG = true;
function AnimeDetails(_ref) {
  _s();

  var data = _ref.data;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: router.query.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "The best Anime and Manga community"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "bg-gray-100",
      children: data.status === 404 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No se ha podido encontrar ese anime"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimeDetail__WEBPACK_IMPORTED_MODULE_3__.default, {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_s(AnimeDetails, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = AnimeDetails;

var _c;

$RefreshReg$(_c, "AnimeDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS50c3giXSwibmFtZXMiOlsiQW5pbWVEZXRhaWxzIiwiZGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaWQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFHQTs7QUFDZSxTQUFTQSxZQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzNDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBQSxrQkFBUUQsTUFBTSxDQUFDRSxLQUFQLENBQWFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQ0ksWUFBSSxFQUFDLGFBRFQ7QUFFSSxlQUFPLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFNSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUNJLFlBQUksRUFBQyxtRkFEVDtBQUVJLFdBQUcsRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVdJO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWVJO0FBQU0sZUFBUyxFQUFDLGFBQWhCO0FBQUEsZ0JBQ0tKLElBQUksQ0FBQ0ssTUFBTCxLQUFnQixHQUFoQixnQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGdCQUdHLDhEQUFDLDREQUFEO0FBQWEsWUFBSSxFQUFFTDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUJIOztHQTNCdUJELFk7VUFDTEcsa0Q7OztLQURLSCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tpZF0uOWQ4NTg1M2U5ZGMyODFiYTZmMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFuaW1lSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9BbmltZUl0ZW1cIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzXCI7XHJcbmltcG9ydCBBbmltZVNlYXJjaFJlc3VsdCwgeyBBbmltZURldGFpbHNSZXN1bHQgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBBbmltZSB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRBbmltZURldGFpbHMgfSBmcm9tIFwiLi4vaG9va3MvYXBpXCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEFuaW1lRGV0YWlsIGZyb20gXCIuLi9jb21wb25lbnRzL0FuaW1lRGV0YWlsXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1lRGV0YWlscyh7IGRhdGEgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntyb3V0ZXIucXVlcnkuaWR9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiVGhlIGJlc3QgQW5pbWUgYW5kIE1hbmdhIGNvbW11bml0eVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzID09PSA0MDQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gc2UgaGEgcG9kaWRvIGVuY29udHJhciBlc2UgYW5pbWU8L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxBbmltZURldGFpbCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpOiBQcm9taXNlPHtcclxuICAgIHBhdGhzOiBhbnk7XHJcbiAgICBmYWxsYmFjazogYW55O1xyXG59PiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBbXHJcbiAgICAgICAgICAgIHsgcGFyYW1zOiB7IGlkOiBcIjFcIiB9IH0sXHJcbiAgICAgICAgICAgIHsgcGFyYW1zOiB7IGlkOiBcIjJcIiB9IH0sXHJcbiAgICAgICAgICAgIHsgcGFyYW1zOiB7IGlkOiBcIjNcIiB9IH0sXHJcbiAgICAgICAgICAgIHsgcGFyYW1zOiB7IGlkOiBcIjRcIiB9IH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IGRhdGE6IEFuaW1lRGV0YWlsc1Jlc3VsdCA9IGF3YWl0IGdldEFuaW1lRGV0YWlscyhpZCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICAgIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
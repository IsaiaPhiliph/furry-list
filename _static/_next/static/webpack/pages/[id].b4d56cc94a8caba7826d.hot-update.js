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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AnimeDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AnimeDetail */ "./components/AnimeDetail.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Pablo\\Documents\\Proyectos\\furry-list\\pages\\[id].tsx",
    _s = $RefreshSig$();





var __N_SSG = true;
function AnimeDetails(_ref) {
  _s();

  var data = _ref.data,
      err = _ref.err;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(err),
      error = _useState[0],
      setError = _useState[1];

  console.log(data);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: router.query.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "The best Anime and Manga community"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "bg-gray-100",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimeDetail__WEBPACK_IMPORTED_MODULE_4__.default, {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_s(AnimeDetails, "inh13QQrkUjdM9wz7qcPvVeKVSE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS50c3giXSwibmFtZXMiOlsiQW5pbWVEZXRhaWxzIiwiZGF0YSIsImVyciIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUdBOztBQUNlLFNBQVNBLFlBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFiQyxJQUFhLFFBQWJBLElBQWE7QUFBQSxNQUFQQyxHQUFPLFFBQVBBLEdBQU87O0FBQUEsa0JBQ3RCQywrQ0FBUSxDQUFDRCxHQUFELENBRGM7QUFBQSxNQUN6Q0UsS0FEeUM7QUFBQSxNQUNsQ0MsUUFEa0M7O0FBRWhEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUNBLE1BQU1PLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBQSxrQkFBUUQsTUFBTSxDQUFDRSxLQUFQLENBQWFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQ0ksWUFBSSxFQUFDLGFBRFQ7QUFFSSxlQUFPLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFNSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUNJLFlBQUksRUFBQyxtRkFEVDtBQUVJLFdBQUcsRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVdJO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWVJO0FBQU0sZUFBUyxFQUFDLGFBQWhCO0FBQUEsNkJBQ0ksOERBQUMsNERBQUQ7QUFBYSxZQUFJLEVBQUVWO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7O0dBekJ1QkQsWTtVQUdMUyxrRDs7O0tBSEtULFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS5iNGQ1NmNjOTRhOGNhYmE3ODI2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQW5pbWVJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0FuaW1lSXRlbVwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNcIjtcclxuaW1wb3J0IEFuaW1lU2VhcmNoUmVzdWx0LCB7IEFuaW1lRGV0YWlsc1Jlc3VsdCB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEFuaW1lIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldEFuaW1lRGV0YWlscyB9IGZyb20gXCIuLi9ob29rcy9hcGlcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgQW5pbWVEZXRhaWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQW5pbWVEZXRhaWxcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWVEZXRhaWxzKHsgZGF0YSwgZXJyIH0pIHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZXJyKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntyb3V0ZXIucXVlcnkuaWR9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiVGhlIGJlc3QgQW5pbWUgYW5kIE1hbmdhIGNvbW11bml0eVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEFuaW1lRGV0YWlsIGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKTogUHJvbWlzZTx7XHJcbiAgICBwYXRoczogYW55O1xyXG4gICAgZmFsbGJhY2s6IGFueTtcclxufT4gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogW1xyXG4gICAgICAgICAgICB7IHBhcmFtczogeyBpZDogXCIxXCIgfSB9LFxyXG4gICAgICAgICAgICB7IHBhcmFtczogeyBpZDogXCIyXCIgfSB9LFxyXG4gICAgICAgICAgICB7IHBhcmFtczogeyBpZDogXCIzXCIgfSB9LFxyXG4gICAgICAgICAgICB7IHBhcmFtczogeyBpZDogXCI0XCIgfSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBsZXQgZXJyOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgY29uc3Qgc2V0RXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICBlcnIgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IGRhdGE6IEFuaW1lRGV0YWlsc1Jlc3VsdCA9IGF3YWl0IGdldEFuaW1lRGV0YWlscyhpZCwgc2V0RXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBkYXRhLCBlcnIgfSxcclxuICAgIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
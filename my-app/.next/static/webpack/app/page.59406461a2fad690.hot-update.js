"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/_components/DoctorList.jsx":
/*!****************************************!*\
  !*** ./app/_components/DoctorList.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\nfunction DoctorList(param) {\n    let { doctorList } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-xl\",\n                children: \"Popular Doctors\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            doctorList && doctorList.map((doctor, index)=>{\n                var _doctor_attributes_image_data_attributes, _doctor_attributes_image_data, _doctor_attributes_image, _doctor_attributes;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: (_doctor_attributes = doctor.attributes) === null || _doctor_attributes === void 0 ? void 0 : (_doctor_attributes_image = _doctor_attributes.image) === null || _doctor_attributes_image === void 0 ? void 0 : (_doctor_attributes_image_data = _doctor_attributes_image.data) === null || _doctor_attributes_image_data === void 0 ? void 0 : (_doctor_attributes_image_data_attributes = _doctor_attributes_image_data.attributes) === null || _doctor_attributes_image_data_attributes === void 0 ? void 0 : _doctor_attributes_image_data_attributes.url,\n                    alt: \"doctor\",\n                    width: 400,\n                    height: 400,\n                    className: \"rounded-XL shadow-md m-2 h-[200px] w-full object-cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = DoctorList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoctorList);\nvar _c;\n$RefreshReg$(_c, \"DoctorList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9Eb2N0b3JMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDSztBQUUvQixTQUFTRSxXQUFXLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDtJQUNsQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFvQjs7Ozs7O1lBRWpDRixjQUNDQSxXQUFXSSxHQUFHLENBQUMsQ0FBQ0MsUUFBUUM7b0JBRWZELDBDQUFBQSwrQkFBQUEsMEJBQUFBO3FDQURQLDhEQUFDUCxrREFBS0E7b0JBQ0pTLEdBQUcsR0FBRUYscUJBQUFBLE9BQU9HLFVBQVUsY0FBakJILDBDQUFBQSwyQkFBQUEsbUJBQW1CSSxLQUFLLGNBQXhCSixnREFBQUEsZ0NBQUFBLHlCQUEwQkssSUFBSSxjQUE5QkwscURBQUFBLDJDQUFBQSw4QkFBZ0NHLFVBQVUsY0FBMUNILCtEQUFBQSx5Q0FBNENNLEdBQUc7b0JBQ3BEQyxLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSWixXQUFVOzs7Ozs7Ozs7Ozs7O0FBS3RCO0tBakJTSDtBQWtCVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2NvbXBvbmVudHMvRG9jdG9yTGlzdC5qc3g/MzJlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZnVuY3Rpb24gRG9jdG9yTGlzdCh7IGRvY3Rvckxpc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bFwiPlBvcHVsYXIgRG9jdG9yczwvaDE+XHJcbiAgICAgIHsvKiBEb2N0b3IgTGlzdCAqL31cclxuICAgICAge2RvY3Rvckxpc3QgJiZcclxuICAgICAgICBkb2N0b3JMaXN0Lm1hcCgoZG9jdG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17ZG9jdG9yLmF0dHJpYnV0ZXM/LmltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzPy51cmx9XHJcbiAgICAgICAgICAgIGFsdD1cImRvY3RvclwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLVhMIHNoYWRvdy1tZCBtLTIgaC1bMjAwcHhdIHctZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJEb2N0b3JMaXN0IiwiZG9jdG9yTGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiZG9jdG9yIiwiaW5kZXgiLCJzcmMiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJkYXRhIiwidXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/DoctorList.jsx\n"));

/***/ })

});
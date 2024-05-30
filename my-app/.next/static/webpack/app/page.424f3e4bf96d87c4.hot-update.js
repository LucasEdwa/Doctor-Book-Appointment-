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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\nfunction DoctorList(param) {\n    let { doctorList } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-xl\",\n                children: \"Popular Doctors\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5\",\n                children: doctorList && doctorList.map((doctor, index)=>{\n                    var _doctor_attributes_image_data_attributes, _doctor_attributes_image_data, _doctor_attributes_image, _doctor_attributes, _doctor_attributes_categories_data_attributes, _doctor_attributes_categories_data, _doctor_attributes_categories, _doctor_attributes1, _doctor_attributes2, _doctor_attributes3, _doctor_attributes4;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-[1px] rounded-lg p-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: (_doctor_attributes = doctor.attributes) === null || _doctor_attributes === void 0 ? void 0 : (_doctor_attributes_image = _doctor_attributes.image) === null || _doctor_attributes_image === void 0 ? void 0 : (_doctor_attributes_image_data = _doctor_attributes_image.data) === null || _doctor_attributes_image_data === void 0 ? void 0 : (_doctor_attributes_image_data_attributes = _doctor_attributes_image_data.attributes) === null || _doctor_attributes_image_data_attributes === void 0 ? void 0 : _doctor_attributes_image_data_attributes.url,\n                                alt: \"doctor\",\n                                width: 500,\n                                height: 200,\n                                className: \"rounded-XL shadow-md m-2 h-[200px] w-full \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-[10px] mt-1 flex flex-col items-baseline\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" text-sm bg-blue-100 p-1 rounded-full px-2 text-primary\",\n                                        children: (_doctor_attributes1 = doctor.attributes) === null || _doctor_attributes1 === void 0 ? void 0 : (_doctor_attributes_categories = _doctor_attributes1.categories) === null || _doctor_attributes_categories === void 0 ? void 0 : (_doctor_attributes_categories_data = _doctor_attributes_categories.data) === null || _doctor_attributes_categories_data === void 0 ? void 0 : (_doctor_attributes_categories_data_attributes = _doctor_attributes_categories_data.attributes) === null || _doctor_attributes_categories_data_attributes === void 0 ? void 0 : _doctor_attributes_categories_data_attributes.Name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 17\n                                    }, this),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"font-bold text-lg \",\n                                        children: [\n                                            \"Dr. \",\n                                            (_doctor_attributes2 = doctor.attributes) === null || _doctor_attributes2 === void 0 ? void 0 : _doctor_attributes2.Name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 text-sm\",\n                                        children: [\n                                            (_doctor_attributes3 = doctor.attributes) === null || _doctor_attributes3 === void 0 ? void 0 : _doctor_attributes3.Year_of_Exprience,\n                                            \" Experience\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 text-sm\",\n                                        children: (_doctor_attributes4 = doctor.attributes) === null || _doctor_attributes4 === void 0 ? void 0 : _doctor_attributes4.Address\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = DoctorList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoctorList);\nvar _c;\n$RefreshReg$(_c, \"DoctorList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9Eb2N0b3JMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDSztBQUUvQixTQUFTRSxXQUFXLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDtJQUNsQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFvQjs7Ozs7OzBCQUVsQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pGLGNBQ0NBLFdBQVdJLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQzt3QkFHYkQsMENBQUFBLCtCQUFBQSwwQkFBQUEsb0JBUUZBLCtDQUFBQSxvQ0FBQUEsK0JBQUFBLHFCQUdJQSxxQkFHSkEscUJBR0FBO3lDQW5CUCw4REFBQ0o7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSixrREFBS0E7Z0NBQ0pTLEdBQUcsR0FBRUYscUJBQUFBLE9BQU9HLFVBQVUsY0FBakJILDBDQUFBQSwyQkFBQUEsbUJBQW1CSSxLQUFLLGNBQXhCSixnREFBQUEsZ0NBQUFBLHlCQUEwQkssSUFBSSxjQUE5QkwscURBQUFBLDJDQUFBQSw4QkFBZ0NHLFVBQVUsY0FBMUNILCtEQUFBQSx5Q0FBNENNLEdBQUc7Z0NBQ3BEQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSWixXQUFVOzs7Ozs7MENBRVosOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2E7d0NBQUViLFdBQVU7bURBQ1ZHLHNCQUFBQSxPQUFPRyxVQUFVLGNBQWpCSCwyQ0FBQUEsZ0NBQUFBLG9CQUFtQlcsVUFBVSxjQUE3QlgscURBQUFBLHFDQUFBQSw4QkFBK0JLLElBQUksY0FBbkNMLDBEQUFBQSxnREFBQUEsbUNBQXFDRyxVQUFVLGNBQS9DSCxvRUFBQUEsOENBQWlEWSxJQUFJOzs7Ozs7b0NBQ25EO2tEQUNMLDhEQUFDQzt3Q0FBR2hCLFdBQVU7OzRDQUFxQjs2Q0FDNUJHLHNCQUFBQSxPQUFPRyxVQUFVLGNBQWpCSCwwQ0FBQUEsb0JBQW1CWSxJQUFJOzs7Ozs7O2tEQUU5Qiw4REFBQ0Y7d0NBQUViLFdBQVU7OzZDQUNWRyxzQkFBQUEsT0FBT0csVUFBVSxjQUFqQkgsMENBQUFBLG9CQUFtQmMsaUJBQWlCOzRDQUFDOzs7Ozs7O2tEQUV4Qyw4REFBQ0o7d0NBQUViLFdBQVU7bURBQ1ZHLHNCQUFBQSxPQUFPRyxVQUFVLGNBQWpCSCwwQ0FBQUEsb0JBQW1CZSxPQUFPOzs7Ozs7Ozs7Ozs7O3VCQW5CaUJkOzs7Ozs7Ozs7Ozs7Ozs7OztBQTJCOUQ7S0FuQ1NQO0FBb0NULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fY29tcG9uZW50cy9Eb2N0b3JMaXN0LmpzeD8zMmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBEb2N0b3JMaXN0KHsgZG9jdG9yTGlzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsXCI+UG9wdWxhciBEb2N0b3JzPC9oMT5cclxuICAgICAgey8qIERvY3RvciBMaXN0ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTEwIG10LTVcIj5cclxuICAgICAgICB7ZG9jdG9yTGlzdCAmJlxyXG4gICAgICAgICAgZG9jdG9yTGlzdC5tYXAoKGRvY3RvciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gcm91bmRlZC1sZyBwLTNcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17ZG9jdG9yLmF0dHJpYnV0ZXM/LmltYWdlPy5kYXRhPy5hdHRyaWJ1dGVzPy51cmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJkb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1YTCBzaGFkb3ctbWQgbS0yIGgtWzIwMHB4XSB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gbXQtMSBmbGV4IGZsZXgtY29sIGl0ZW1zLWJhc2VsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1zbSBiZy1ibHVlLTEwMCBwLTEgcm91bmRlZC1mdWxsIHB4LTIgdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkb2N0b3IuYXR0cmlidXRlcz8uY2F0ZWdvcmllcz8uZGF0YT8uYXR0cmlidXRlcz8uTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgXCI+XHJcbiAgICAgICAgICAgICAgICAgIERyLiB7ZG9jdG9yLmF0dHJpYnV0ZXM/Lk5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkb2N0b3IuYXR0cmlidXRlcz8uWWVhcl9vZl9FeHByaWVuY2V9IEV4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZG9jdG9yLmF0dHJpYnV0ZXM/LkFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkRvY3Rvckxpc3QiLCJkb2N0b3JMaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJkb2N0b3IiLCJpbmRleCIsInNyYyIsImF0dHJpYnV0ZXMiLCJpbWFnZSIsImRhdGEiLCJ1cmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJjYXRlZ29yaWVzIiwiTmFtZSIsImgyIiwiWWVhcl9vZl9FeHByaWVuY2UiLCJBZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/DoctorList.jsx\n"));

/***/ })

});
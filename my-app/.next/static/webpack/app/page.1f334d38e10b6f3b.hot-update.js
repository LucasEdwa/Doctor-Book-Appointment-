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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\nfunction DoctorList(param) {\n    let { doctorList } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-xl\",\n                children: \"Popular Doctors\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5\",\n                children: doctorList && doctorList.map((doctor, index)=>{\n                    var _doctor_attributes_image_data_attributes, _doctor_attributes_image_data, _doctor_attributes_image, _doctor_attributes, _doctor_attributes1, _doctor_attributes_category_data_attributes, _doctor_attributes_category_data, _doctor_attributes_category, _doctor_attributes2, _doctor_attributes3;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-[1px] rounded-lg p-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: (_doctor_attributes = doctor.attributes) === null || _doctor_attributes === void 0 ? void 0 : (_doctor_attributes_image = _doctor_attributes.image) === null || _doctor_attributes_image === void 0 ? void 0 : (_doctor_attributes_image_data = _doctor_attributes_image.data) === null || _doctor_attributes_image_data === void 0 ? void 0 : (_doctor_attributes_image_data_attributes = _doctor_attributes_image_data.attributes) === null || _doctor_attributes_image_data_attributes === void 0 ? void 0 : _doctor_attributes_image_data_attributes.url,\n                                alt: \"doctor\",\n                                width: 500,\n                                height: 200,\n                                className: \"rounded-XL shadow-md m-2 h-[200px] w-full \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"font-bold text-lg\",\n                                        children: (_doctor_attributes1 = doctor.attributes) === null || _doctor_attributes1 === void 0 ? void 0 : _doctor_attributes1.Name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 text-sm\",\n                                        children: (_doctor_attributes2 = doctor.attributes) === null || _doctor_attributes2 === void 0 ? void 0 : (_doctor_attributes_category = _doctor_attributes2.category) === null || _doctor_attributes_category === void 0 ? void 0 : (_doctor_attributes_category_data = _doctor_attributes_category.data) === null || _doctor_attributes_category_data === void 0 ? void 0 : (_doctor_attributes_category_data_attributes = _doctor_attributes_category_data.attributes) === null || _doctor_attributes_category_data_attributes === void 0 ? void 0 : _doctor_attributes_category_data_attributes.Name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 text-sm\",\n                                        children: [\n                                            (_doctor_attributes3 = doctor.attributes) === null || _doctor_attributes3 === void 0 ? void 0 : _doctor_attributes3.Experience,\n                                            \" years of experience\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = DoctorList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoctorList);\nvar _c;\n$RefreshReg$(_c, \"DoctorList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9Eb2N0b3JMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDSztBQUUvQixTQUFTRSxXQUFXLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDtJQUNsQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFvQjs7Ozs7OzBCQUVsQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pGLGNBQ0NBLFdBQVdJLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQzt3QkFHYkQsMENBQUFBLCtCQUFBQSwwQkFBQUEsb0JBTzhCQSxxQkFFaENBLDZDQUFBQSxrQ0FBQUEsNkJBQUFBLHFCQUdBQTt5Q0FkUCw4REFBQ0o7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSixrREFBS0E7Z0NBQ0pTLEdBQUcsR0FBRUYscUJBQUFBLE9BQU9HLFVBQVUsY0FBakJILDBDQUFBQSwyQkFBQUEsbUJBQW1CSSxLQUFLLGNBQXhCSixnREFBQUEsZ0NBQUFBLHlCQUEwQkssSUFBSSxjQUE5QkwscURBQUFBLDJDQUFBQSw4QkFBZ0NHLFVBQVUsY0FBMUNILCtEQUFBQSx5Q0FBNENNLEdBQUc7Z0NBQ3BEQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSWixXQUFVOzs7Ozs7MENBRVosOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2E7d0NBQUdiLFdBQVU7bURBQXFCRyxzQkFBQUEsT0FBT0csVUFBVSxjQUFqQkgsMENBQUFBLG9CQUFtQlcsSUFBSTs7Ozs7O2tEQUMxRCw4REFBQ0M7d0NBQUVmLFdBQVU7bURBQ1ZHLHNCQUFBQSxPQUFPRyxVQUFVLGNBQWpCSCwyQ0FBQUEsOEJBQUFBLG9CQUFtQmEsUUFBUSxjQUEzQmIsbURBQUFBLG1DQUFBQSw0QkFBNkJLLElBQUksY0FBakNMLHdEQUFBQSw4Q0FBQUEsaUNBQW1DRyxVQUFVLGNBQTdDSCxrRUFBQUEsNENBQStDVyxJQUFJOzs7Ozs7a0RBRXRELDhEQUFDQzt3Q0FBRWYsV0FBVTs7NkNBQ1ZHLHNCQUFBQSxPQUFPRyxVQUFVLGNBQWpCSCwwQ0FBQUEsb0JBQW1CYyxVQUFVOzRDQUFDOzs7Ozs7Ozs7Ozs7Ozt1QkFkYWI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0I5RDtLQTlCU1A7QUErQlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19jb21wb25lbnRzL0RvY3Rvckxpc3QuanN4PzMyZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIERvY3Rvckxpc3QoeyBkb2N0b3JMaXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGxcIj5Qb3B1bGFyIERvY3RvcnM8L2gxPlxyXG4gICAgICB7LyogRG9jdG9yIExpc3QgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtMTAgbXQtNVwiPlxyXG4gICAgICAgIHtkb2N0b3JMaXN0ICYmXHJcbiAgICAgICAgICBkb2N0b3JMaXN0Lm1hcCgoZG9jdG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSByb3VuZGVkLWxnIHAtM1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtkb2N0b3IuYXR0cmlidXRlcz8uaW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXM/LnVybH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLVhMIHNoYWRvdy1tZCBtLTIgaC1bMjAwcHhdIHctZnVsbCBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+e2RvY3Rvci5hdHRyaWJ1dGVzPy5OYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAge2RvY3Rvci5hdHRyaWJ1dGVzPy5jYXRlZ29yeT8uZGF0YT8uYXR0cmlidXRlcz8uTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZG9jdG9yLmF0dHJpYnV0ZXM/LkV4cGVyaWVuY2V9IHllYXJzIG9mIGV4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERvY3Rvckxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiRG9jdG9yTGlzdCIsImRvY3Rvckxpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImRvY3RvciIsImluZGV4Iiwic3JjIiwiYXR0cmlidXRlcyIsImltYWdlIiwiZGF0YSIsInVybCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJOYW1lIiwicCIsImNhdGVnb3J5IiwiRXhwZXJpZW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/DoctorList.jsx\n"));

/***/ })

});
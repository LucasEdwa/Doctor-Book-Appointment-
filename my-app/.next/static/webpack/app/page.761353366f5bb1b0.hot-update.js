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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\nfunction DoctorList(param) {\n    let { doctorList } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-xl\",\n                children: \"Popular Doctors\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5\",\n                children: doctorList && doctorList.map((doctor, index)=>{\n                    var _doctor_attributes_image_data_attributes, _doctor_attributes_image_data, _doctor_attributes_image, _doctor_attributes, _doctor_attributes1, _doctor_attributes_categories_data_attributes, _doctor_attributes_categories_data, _doctor_attributes_categories, _doctor_attributes2, _doctor_attributes3;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-[1px] rounded-lg p-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: (_doctor_attributes = doctor.attributes) === null || _doctor_attributes === void 0 ? void 0 : (_doctor_attributes_image = _doctor_attributes.image) === null || _doctor_attributes_image === void 0 ? void 0 : (_doctor_attributes_image_data = _doctor_attributes_image.data) === null || _doctor_attributes_image_data === void 0 ? void 0 : (_doctor_attributes_image_data_attributes = _doctor_attributes_image_data.attributes) === null || _doctor_attributes_image_data_attributes === void 0 ? void 0 : _doctor_attributes_image_data_attributes.url,\n                                alt: \"doctor\",\n                                width: 500,\n                                height: 200,\n                                className: \"rounded-XL shadow-md m-2 h-[200px] w-full \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center mt-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"font-bold text-lg\",\n                                        children: (_doctor_attributes1 = doctor.attributes) === null || _doctor_attributes1 === void 0 ? void 0 : _doctor_attributes1.Name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 text-sm\",\n                                        children: (_doctor_attributes2 = doctor.attributes) === null || _doctor_attributes2 === void 0 ? void 0 : (_doctor_attributes_categories = _doctor_attributes2.categories) === null || _doctor_attributes_categories === void 0 ? void 0 : (_doctor_attributes_categories_data = _doctor_attributes_categories.data) === null || _doctor_attributes_categories_data === void 0 ? void 0 : (_doctor_attributes_categories_data_attributes = _doctor_attributes_categories_data.attributes) === null || _doctor_attributes_categories_data_attributes === void 0 ? void 0 : _doctor_attributes_categories_data_attributes.Name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 text-sm\",\n                                        children: [\n                                            (_doctor_attributes3 = doctor.attributes) === null || _doctor_attributes3 === void 0 ? void 0 : _doctor_attributes3.Year_of_Exprience,\n                                            \" Experience\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\DoctorList.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = DoctorList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoctorList);\nvar _c;\n$RefreshReg$(_c, \"DoctorList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9Eb2N0b3JMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDSztBQUUvQixTQUFTRSxXQUFXLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDtJQUNsQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFvQjs7Ozs7OzBCQUVsQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pGLGNBQ0NBLFdBQVdJLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQzt3QkFHYkQsMENBQUFBLCtCQUFBQSwwQkFBQUEsb0JBTzhCQSxxQkFFaENBLCtDQUFBQSxvQ0FBQUEsK0JBQUFBLHFCQUdBQTt5Q0FkUCw4REFBQ0o7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSixrREFBS0E7Z0NBQ0pTLEdBQUcsR0FBRUYscUJBQUFBLE9BQU9HLFVBQVUsY0FBakJILDBDQUFBQSwyQkFBQUEsbUJBQW1CSSxLQUFLLGNBQXhCSixnREFBQUEsZ0NBQUFBLHlCQUEwQkssSUFBSSxjQUE5QkwscURBQUFBLDJDQUFBQSw4QkFBZ0NHLFVBQVUsY0FBMUNILCtEQUFBQSx5Q0FBNENNLEdBQUc7Z0NBQ3BEQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSWixXQUFVOzs7Ozs7MENBRVosOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2E7d0NBQUdiLFdBQVU7bURBQXFCRyxzQkFBQUEsT0FBT0csVUFBVSxjQUFqQkgsMENBQUFBLG9CQUFtQlcsSUFBSTs7Ozs7O2tEQUMxRCw4REFBQ0M7d0NBQUVmLFdBQVU7bURBQ1ZHLHNCQUFBQSxPQUFPRyxVQUFVLGNBQWpCSCwyQ0FBQUEsZ0NBQUFBLG9CQUFtQmEsVUFBVSxjQUE3QmIscURBQUFBLHFDQUFBQSw4QkFBK0JLLElBQUksY0FBbkNMLDBEQUFBQSxnREFBQUEsbUNBQXFDRyxVQUFVLGNBQS9DSCxvRUFBQUEsOENBQWlEVyxJQUFJOzs7Ozs7a0RBRXhELDhEQUFDQzt3Q0FBRWYsV0FBVTs7NkNBQ1ZHLHNCQUFBQSxPQUFPRyxVQUFVLGNBQWpCSCwwQ0FBQUEsb0JBQW1CYyxpQkFBaUI7NENBQUM7Ozs7Ozs7Ozs7Ozs7O3VCQWRNYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQjlEO0tBOUJTUDtBQStCVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2NvbXBvbmVudHMvRG9jdG9yTGlzdC5qc3g/MzJlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZnVuY3Rpb24gRG9jdG9yTGlzdCh7IGRvY3Rvckxpc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bFwiPlBvcHVsYXIgRG9jdG9yczwvaDE+XHJcbiAgICAgIHsvKiBEb2N0b3IgTGlzdCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC0xMCBtdC01XCI+XHJcbiAgICAgICAge2RvY3Rvckxpc3QgJiZcclxuICAgICAgICAgIGRvY3Rvckxpc3QubWFwKChkb2N0b3IsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIHJvdW5kZWQtbGcgcC0zXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e2RvY3Rvci5hdHRyaWJ1dGVzPy5pbWFnZT8uZGF0YT8uYXR0cmlidXRlcz8udXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiZG9jdG9yXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtWEwgc2hhZG93LW1kIG0tMiBoLVsyMDBweF0gdy1mdWxsIFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTFcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPntkb2N0b3IuYXR0cmlidXRlcz8uTmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkb2N0b3IuYXR0cmlidXRlcz8uY2F0ZWdvcmllcz8uZGF0YT8uYXR0cmlidXRlcz8uTmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZG9jdG9yLmF0dHJpYnV0ZXM/LlllYXJfb2ZfRXhwcmllbmNlfSBFeHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkRvY3Rvckxpc3QiLCJkb2N0b3JMaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJkb2N0b3IiLCJpbmRleCIsInNyYyIsImF0dHJpYnV0ZXMiLCJpbWFnZSIsImRhdGEiLCJ1cmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIiwiTmFtZSIsInAiLCJjYXRlZ29yaWVzIiwiWWVhcl9vZl9FeHByaWVuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/DoctorList.jsx\n"));

/***/ })

});
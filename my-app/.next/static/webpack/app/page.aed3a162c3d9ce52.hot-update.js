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

/***/ "(app-pages-browser)/./app/_components/CategorySearch.jsx":
/*!********************************************!*\
  !*** ./app/_components/CategorySearch.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategorySearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _barrel_optimize_names_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _strapiBackends_my_project_types_generated_utils_GlobalApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../strapiBackends/my-project/types/generated/_utils/GlobalApi */ \"(app-pages-browser)/../strapiBackends/my-project/types/generated/_utils/GlobalApi.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CategorySearch() {\n    _s();\n    const [categoryList, setCategoryList] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getCategoryList();\n    }, []);\n    const getCategoryList = ()=>{\n        _strapiBackends_my_project_types_generated_utils_GlobalApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getCategory().then((res)=>{\n            console.log(res.data.data);\n            setCategoryList(res.data.data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-10 items-center flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-4xl tracking-wide \",\n                children: [\n                    \"Search \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \" text-primary\",\n                        children: \"Doctors\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 16\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \" text-gray-500 text-xl\",\n                children: \"Search Your Doctor and Book Appointment in one click\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full mt-3 max-w-sm items-center space-x-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        type: \"text\",\n                        placeholder: \"Search...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"submit\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"h-4 w-4 mr-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            \"Search\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center gap-8 mt-5\",\n                children: categoryList.map((category, index)=>{\n                    var _category_attributes_Icon_data_attributes, _category_attributes_Icon, _category_attributes;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: (_category_attributes = category.attributes) === null || _category_attributes === void 0 ? void 0 : (_category_attributes_Icon = _category_attributes.Icon) === null || _category_attributes_Icon === void 0 ? void 0 : (_category_attributes_Icon_data_attributes = _category_attributes_Icon.data.attributes) === null || _category_attributes_Icon_data_attributes === void 0 ? void 0 : _category_attributes_Icon_data_attributes.url,\n                            alt: \"icon\",\n                            width: 80,\n                            height: 80\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lucas\\\\Desktop\\\\doctor appointment booking app\\\\my-app\\\\app\\\\_components\\\\CategorySearch.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(CategorySearch, \"ZQlHNAaXzLWzTWMl4FtX0eMwTFc=\");\n_c = CategorySearch;\nvar _c;\n$RefreshReg$(_c, \"CategorySearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9DYXRlZ29yeVNlYXJjaC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDRjtBQUNSO0FBQ1A7QUFDb0I7QUFDeUM7QUFDN0UsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkRELGdEQUFTQSxDQUFDO1FBQ1JNO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsTUFBTUEsa0JBQWtCO1FBQ3RCSixrR0FBU0EsQ0FBQ0ssV0FBVyxHQUFHQyxJQUFJLENBQUMsQ0FBQ0M7WUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsSUFBSSxDQUFDQSxJQUFJO1lBQ3pCUCxnQkFBZ0JJLElBQUlHLElBQUksQ0FBQ0EsSUFBSTtRQUMvQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTs7b0JBQW9DO2tDQUN6Qyw4REFBQ0U7d0JBQUtGLFdBQVU7a0NBQWdCOzs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUI7Ozs7OzswQkFHdkMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2xCLHVEQUFLQTt3QkFBQ3FCLE1BQUs7d0JBQU9DLGFBQVk7Ozs7OztrQ0FDL0IsOERBQUN2Qix5REFBTUE7d0JBQUNzQixNQUFLOzswQ0FDWCw4REFBQ3BCLGtGQUFNQTtnQ0FBQ2lCLFdBQVU7Ozs7Ozs0QkFBaUI7Ozs7Ozs7Ozs7Ozs7MEJBS3ZDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlYsYUFBYWUsR0FBRyxDQUFDLENBQUNDLFVBQVVDO3dCQUdsQkQsMkNBQUFBLDJCQUFBQTt5Q0FGVCw4REFBQ1A7d0JBQWdCQyxXQUFVO2tDQUN6Qiw0RUFBQ2hCLGtEQUFLQTs0QkFDSndCLEdBQUcsR0FBRUYsdUJBQUFBLFNBQVNHLFVBQVUsY0FBbkJILDRDQUFBQSw0QkFBQUEscUJBQXFCSSxJQUFJLGNBQXpCSixpREFBQUEsNENBQUFBLDBCQUEyQlIsSUFBSSxDQUFDVyxVQUFVLGNBQTFDSCxnRUFBQUEsMENBQTRDSyxHQUFHOzRCQUNwREMsS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs7Ozs7O3VCQUxGUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZcEI7R0F6Q3dCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19jb21wb25lbnRzL0NhdGVnb3J5U2VhcmNoLmpzeD8yYWVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdsb2JhbEFwaSBmcm9tIFwiLi4vLi4vLi4vc3RyYXBpQmFja2VuZHMvbXktcHJvamVjdC90eXBlcy9nZW5lcmF0ZWQvX3V0aWxzL0dsb2JhbEFwaVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeVNlYXJjaCgpIHtcclxuICBjb25zdCBbY2F0ZWdvcnlMaXN0LCBzZXRDYXRlZ29yeUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDYXRlZ29yeUxpc3QoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgZ2V0Q2F0ZWdvcnlMaXN0ID0gKCkgPT4ge1xyXG4gICAgR2xvYmFsQXBpLmdldENhdGVnb3J5KCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICBzZXRDYXRlZ29yeUxpc3QocmVzLmRhdGEuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwIGl0ZW1zLWNlbnRlciBmbGV4IGZsZXgtY29sIGdhcC00XCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgdHJhY2tpbmctd2lkZSBcIj5cclxuICAgICAgICBTZWFyY2ggPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtcHJpbWFyeVwiPkRvY3RvcnM8L3NwYW4+XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCIgdGV4dC1ncmF5LTUwMCB0ZXh0LXhsXCI+XHJcbiAgICAgICAgU2VhcmNoIFlvdXIgRG9jdG9yIGFuZCBCb29rIEFwcG9pbnRtZW50IGluIG9uZSBjbGlja1xyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIG10LTMgbWF4LXctc20gaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cclxuICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIERpc3BsYXkgdGhlIGNhdGVnb3J5IGxpc3QqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTggbXQtNVwiPlxyXG4gICAgICAgIHtjYXRlZ29yeUxpc3QubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17Y2F0ZWdvcnkuYXR0cmlidXRlcz8uSWNvbj8uZGF0YS5hdHRyaWJ1dGVzPy51cmx9XHJcbiAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17ODB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsIlNlYXJjaCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdsb2JhbEFwaSIsIkNhdGVnb3J5U2VhcmNoIiwiY2F0ZWdvcnlMaXN0Iiwic2V0Q2F0ZWdvcnlMaXN0IiwiZ2V0Q2F0ZWdvcnlMaXN0IiwiZ2V0Q2F0ZWdvcnkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInNwYW4iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJjYXRlZ29yeSIsImluZGV4Iiwic3JjIiwiYXR0cmlidXRlcyIsIkljb24iLCJ1cmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/CategorySearch.jsx\n"));

/***/ })

});
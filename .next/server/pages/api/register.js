"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "(api)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLFNBQVNDLE9BQU9DLFlBQVksSUFBSUgsd0RBQVlBO0FBQ2xELElBQUlJLEtBQXlCLEVBQWNGLEVBQXlCRDtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVhbS1ib2F0Ly4vbGliL3ByaXNtYWRiLnRzPzBlM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5jb25zdCBjbGllbnQgPSBnbG9iYWwucHJpc21hZGIgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWFkYiA9IGNsaWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbCIsInByaXNtYWRiIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).end();\n    }\n    try {\n        const { name , email , password  } = req.body;\n        const existingUser = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existingUser) {\n            return res.status(422).json({\n                error: \"User already exist\"\n            });\n        }\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password, 12);\n        const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n            data: {\n                email,\n                name,\n                hashedPassword,\n                image: \"\",\n                emailVerified: new Date()\n            }\n        });\n        return res.status(200).json(user);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUVVO0FBRXRDLDZCQUFlLDBDQUFnQkUsR0FBbUIsRUFBRUMsR0FBb0I7SUFDdkUsSUFBSUQsSUFBSUUsV0FBVyxRQUFRO1FBQzFCLE9BQU9ELElBQUlFLE9BQU8sS0FBS0M7SUFDeEI7SUFFQSxJQUFJO1FBQ0gsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdQLElBQUlRO1FBRXRDLE1BQU1DLGVBQWUsTUFBTVYscUVBQXdCWSxDQUFDO1lBQUVDLE9BQU87Z0JBQUVOO1lBQU07UUFBRTtRQUV2RSxJQUFJRyxjQUFjO1lBQ2pCLE9BQU9SLElBQUlFLE9BQU8sS0FBS1UsS0FBSztnQkFBRUMsT0FBTztZQUFxQjtRQUMzRDtRQUVBLE1BQU1DLGlCQUFpQixNQUFNakIsc0RBQWVrQixDQUFDVCxVQUFVO1FBRXZELE1BQU1HLE9BQU8sTUFBTVgsaUVBQW9Ca0IsQ0FBQztZQUN2Q0MsTUFBTTtnQkFDTFo7Z0JBQ0FEO2dCQUNBVTtnQkFDQUksT0FBTztnQkFDUEMsZUFBZSxJQUFJQztZQUNwQjtRQUNEO1FBRUEsT0FBT3BCLElBQUlFLE9BQU8sS0FBS1UsS0FBS0g7SUFDN0IsRUFBRSxPQUFPSSxPQUFPO1FBQ2ZRLFFBQVFDLElBQUlUO1FBQ1osT0FBT2IsSUFBSUUsT0FBTyxLQUFLQztJQUN4QjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyZWFtLWJvYXQvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHM/N2RhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnQC9saWIvcHJpc21hZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcblx0aWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuXHRcdHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuXHRcdGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYWRiLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSk7XG5cblx0XHRpZiAoZXhpc3RpbmdVc2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBlcnJvcjogJ1VzZXIgYWxyZWFkeSBleGlzdCcgfSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIDEyKTtcblxuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmNyZWF0ZSh7XG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGVtYWlsLFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRoYXNoZWRQYXNzd29yZCxcblx0XHRcdFx0aW1hZ2U6ICcnLFxuXHRcdFx0XHRlbWFpbFZlcmlmaWVkOiBuZXcgRGF0ZSgpLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5lbmQoKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbImJjcnlwdCIsInByaXNtYWRiIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwiZXhpc3RpbmdVc2VyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImpzb24iLCJlcnJvciIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaFN5bmMiLCJjcmVhdGUiLCJkYXRhIiwiaW1hZ2UiLCJlbWFpbFZlcmlmaWVkIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();
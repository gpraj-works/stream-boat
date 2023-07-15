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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

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

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.prismadb || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLFNBQVNDLE9BQU9DLFlBQVksSUFBSUgsd0RBQVlBO0FBQ2xELElBQUlJLEtBQXlCLEVBQWNGLEVBQXlCRDtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVhbS1ib2F0Ly4vbGliL3ByaXNtYWRiLnRzPzBlM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5jb25zdCBjbGllbnQgPSBnbG9iYWwucHJpc21hZGIgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWFkYiA9IGNsaWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbCIsInByaXNtYWRiIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prismadb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/prismadb */ \"(api)/./lib/prismadb.ts\");\n\n\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID || \"\",\n            clientSecret: process.env.GITHUB_SECRET || \"\"\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Email and password required\");\n                }\n                const user = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.hashedPassword) {\n                    throw new Error(\"Email does not exist\");\n                }\n                const isCorrectPassword = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_4__.compare)(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Incorrect password\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth\"\n    },\n    debug: \"development\" === \"development\",\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_5__.PrismaAdapter)(_lib_prismadb__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.NEXT_AUTH_JWT_SECRET\n    },\n    secret: process.env.NEXT_AUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNBO0FBQ047QUFDUTtBQUN6QjtBQUN5QjtBQUNwQjtBQUUvQixNQUFNTyxjQUEyQjtJQUN2Q0MsV0FBVztRQUNWUixpRUFBY0EsQ0FBQztZQUNkUyxVQUFVQyxRQUFRQyxJQUFJQyxvQkFBb0I7WUFDMUNDLGNBQWNILFFBQVFDLElBQUlHLHdCQUF3QjtRQUNuRDtRQUNBYixpRUFBY0EsQ0FBQztZQUNkUSxVQUFVQyxRQUFRQyxJQUFJSSxhQUFhO1lBQ25DRixjQUFjSCxRQUFRQyxJQUFJSyxpQkFBaUI7UUFDNUM7UUFDQWIsc0VBQVdBLENBQUM7WUFDWGMsSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1pDLE9BQU87b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1A7Z0JBQ0FDLFVBQVU7b0JBQ1RGLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1A7WUFDRDtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQzFCLElBQUksQ0FBQ0EsYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNsRCxNQUFNLElBQUlFLE1BQU07Z0JBQ2pCO2dCQUVBLE1BQU1DLE9BQU8sTUFBTXBCLHFFQUF3QnFCLENBQUM7b0JBQzNDQyxPQUFPO3dCQUNOUixPQUFPRCxZQUFZQztvQkFDcEI7Z0JBQ0Q7Z0JBRUEsSUFBSSxDQUFDTSxRQUFRLENBQUNBLEtBQUtHLGdCQUFnQjtvQkFDbEMsTUFBTSxJQUFJSixNQUFNO2dCQUNqQjtnQkFFQSxNQUFNSyxvQkFBb0IsTUFBTTFCLCtDQUFPQSxDQUN0Q2UsWUFBWUksVUFDWkcsS0FBS0c7Z0JBR04sSUFBSSxDQUFDQyxtQkFBbUI7b0JBQ3ZCLE1BQU0sSUFBSUwsTUFBTTtnQkFDakI7Z0JBRUEsT0FBT0M7WUFDUjtRQUNEO0tBQ0E7SUFDREssT0FBTztRQUNOQyxRQUFRO0lBQ1Q7SUFDQUMsT0FBT3ZCLGtCQUF5QjtJQUNoQ3dCLFNBQVM3Qix3RUFBYUEsQ0FBQ0MscURBQVFBO0lBQy9CNkIsU0FBUztRQUFFQyxVQUFVO0lBQU07SUFDM0JDLEtBQUs7UUFDSkMsUUFBUTVCLFFBQVFDLElBQUk0QjtJQUNyQjtJQUNBRCxRQUFRNUIsUUFBUUMsSUFBSTZCO0FBQ3JCLEVBQUU7QUFFRixpRUFBZXRDLGdEQUFRQSxDQUFDSyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyZWFtLWJvYXQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1Yic7XG5pbXBvcnQgTmV4dEF1dGgsIHsgQXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcic7XG5pbXBvcnQgcHJpc21hZGIgZnJvbSAnQC9saWIvcHJpc21hZGInO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xuXHRwcm92aWRlcnM6IFtcblx0XHRHb29nbGVQcm92aWRlcih7XG5cdFx0XHRjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCB8fCAnJyxcblx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgfHwgJycsXG5cdFx0fSksXG5cdFx0R2l0aHViUHJvdmlkZXIoe1xuXHRcdFx0Y2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCB8fCAnJyxcblx0XHRcdGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCB8fCAnJyxcblx0XHR9KSxcblx0XHRDcmVkZW50aWFscyh7XG5cdFx0XHRpZDogJ2NyZWRlbnRpYWxzJyxcblx0XHRcdG5hbWU6ICdDcmVkZW50aWFscycsXG5cdFx0XHRjcmVkZW50aWFsczoge1xuXHRcdFx0XHRlbWFpbDoge1xuXHRcdFx0XHRcdGxhYmVsOiAnRW1haWwnLFxuXHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0cGFzc3dvcmQ6IHtcblx0XHRcdFx0XHRsYWJlbDogJ1Bhc3N3b3JkJyxcblx0XHRcdFx0XHR0eXBlOiAncGFzc3dvcmQnLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuXHRcdFx0XHRpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFbWFpbCBhbmQgcGFzc3dvcmQgcmVxdWlyZWQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWFkYi51c2VyLmZpbmRVbmlxdWUoe1xuXHRcdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0XHRlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKCF1c2VyIHx8ICF1c2VyLmhhc2hlZFBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFbWFpbCBkb2VzIG5vdCBleGlzdCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBjb21wYXJlKFxuXHRcdFx0XHRcdGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuXHRcdFx0XHRcdHVzZXIuaGFzaGVkUGFzc3dvcmRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgcGFzc3dvcmQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB1c2VyO1xuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblx0cGFnZXM6IHtcblx0XHRzaWduSW46ICcvYXV0aCcsXG5cdH0sXG5cdGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcblx0YWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWFkYiksXG5cdHNlc3Npb246IHsgc3RyYXRlZ3k6ICdqd3QnIH0sXG5cdGp3dDoge1xuXHRcdHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9BVVRIX0pXVF9TRUNSRVQsXG5cdH0sXG5cdHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9BVVRIX1NFQ1JFVCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJHb29nbGVQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFscyIsImNvbXBhcmUiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hZGIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9TRUNSRVQiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJoYXNoZWRQYXNzd29yZCIsImlzQ29ycmVjdFBhc3N3b3JkIiwicGFnZXMiLCJzaWduSW4iLCJkZWJ1ZyIsImFkYXB0ZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJqd3QiLCJzZWNyZXQiLCJORVhUX0FVVEhfSldUX1NFQ1JFVCIsIk5FWFRfQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
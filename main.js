/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./harukaze-webfont.woff2 */ "./src/harukaze-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./harukaze-webfont.woff */ "./src/harukaze-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./scroll-open.png */ "./src/scroll-open.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./scroll-closed.png */ "./src/scroll-closed.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "harukaze";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: 600;
  font-style: normal;
}

body {
  --black: #040404;
  --white: #e4e4e4;
  --light-grey: #acacac;
  --grey: #7e7e7e;
  --dark-grey: #4f4f4f;
  --small-font: 25px;
  --medim-font: 35px;
  --large-font: 45px;

  font-family: "harukaze";
  letter-spacing: 1.2px;
  margin: 0;
  padding: 0;
  display: grid;
  min-height: 100vh;
  width: 100vw;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 120px 1fr;
}

header {
  background-color: var(--grey);
  grid-column: 1/-1;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 40px;
}

.zoomed-image {
  --size: 100px;
  width: var(--size);
  height: var(--size);
  overflow: hidden;
  border-radius: 50%;
}

.logo {
  width: 100%;
  transform: scale(1.35);
  transform-origin: center;
}

header .title {
  font-size: 75px;
  margin-left: 450px;
}

.actions {
  margin-right: 50px;
  gap: 10px;
  display: flex;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: var(--light-grey);
  border: 1px solid white;
  color: white;
  padding: 12px 7px;
}

side-bar {
  background-color: var(--light-grey);
  grid-row: 2/3;
  padding-left: 35px;
}

/* .projects {
} */

#project-dialog {
  font-family: sans-serif;
  font-size: var(--small-font);
  word-spacing: 0.1px;
  border-radius: 25px;
}

#project-dialog form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: start;
}

#project-dialog .form-actions {
  align-self: center;
}

.project-section {
  font-size: var(--medim-font);
  position: relative;
}

.project-section .add {
  position: absolute;
  display: inline-block;
  top: -10%;
  left: 55%;
}

.project-item {
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: center;
  transition: all 0.1s ease-in-out;
}

.project-item:hover {
  border-radius: 20px;
  padding: 10px;
  margin-right: 10px;
  box-shadow: 0 0 10px var(--black);
  transform: translateY(-5px);
}

.project-item img {
  --size: 55px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
}

.project-item-label {
  font-size: var(--small-font);
}

main {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  margin: 0;
}

.project-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* border-left: 5px solid red; */
  line-height: 35px;
  background-color: var(--light-grey);
  border-radius: 20px;
  width: 100%;
  height: fit-content;
  padding: 25px;
}

.project-container-title {
  font-size: 45px;
  margin: 10px;
}

.add {
  margin-left: 3%;
  margin-top: 1%;
  width: 45px;
  height: 45px;
}

.rotate-object:hover {
  animation: spin 0.3s linear infinite;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.651);
}

.rotate-object:active {
  animation: none;
  box-shadow: 0 0 20px gold;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.list-item {
  position: relative;
  list-style: none;
  font-family: sans-serif;
  font-size: 25px;
  margin-left: 10px;
  background-color: var(--white);
  padding: 20px;
  border-radius: 20px;
  padding-bottom: 60px;
}

.list-item * {
  margin: 0;
}

.list-item-head {
  display: flex;
  gap: 15px;
  align-items: center;
}

.list-item-title {
  margin: 10px 0;
  font-size: 25px;
  position: relative;
}

.list-item-img {
  --size: 20px;
  max-width: var(--size);
  max-height: var(--size);
}

.list-item-img:hover {
  --size: 30px;
}

.list-item-description {
  --max-lines: 1;
  --line-height: 1.7;

  max-height: calc(var(--max-lines) * 15px * var(--line-height));
  line-height: var(--line-height);
  overflow: hidden;
  font-size: 15px;
  position: relative;
  word-spacing: 1px;
}
.expand-btn {
  appearance: none;
  /* border: 1px solid var(--black); */
  padding: 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
  position: absolute;
  margin-top: 10px;
  transition: transform 0.3s ease;
}

.expand-btn:hover {
  /* background-color: var(--light-grey); */
  transform: translateY(-10px);
}

.expand-btn::before {
  content: "";
  display: block;
  height: 25px;
  width: 25px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
}

.expand-btn:checked::before {
  content: "";
  display: block;
  margin-top: -8px;
  margin-left: -10px;
  width: 45px;
  height: 45px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;
}

.list-item-description:has(+ .expand-btn:checked) {
  max-height: none;
}

/* .list-item-description::before {
  content: "";
  position: absolute;
  height: calc(15px * var(--line-height));
  width: 20%;
  margin-left: 80%;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, var(--white));
} */

.list-item-date {
  margin-left: auto;
  font-size: 15px;
}

.list-item-priority-container {
  position: absolute;
  right: 5%;
  bottom: 5%;
}

.list-item-priority {
  --size: 25px;
  max-width: var(--size);
  max-height: var(--size);
}

.list-item-status {
  position: absolute;
  left: -2.5%;
  bottom: 50%;
}

.list-item-edit {
  max-width: 30px;
  max-height: 30px;
  background: none;
  padding: 0;
  cursor: pointer;
  border: none;

  position: absolute;
  left: 7.5%;
  bottom: 15px;
  transition: transform 0.3s ease;
}

.list-item-edit:hover {
  transform: translateY(-7px);
}

.list-item-delete {
  max-width: 30px;
  max-height: 30px;
  background: none;
  padding: 0;
  cursor: pointer;
  border: none;

  position: absolute;
  left: 12.5%;
  bottom: 17px;
  transition: transform 0.3s ease;
}

.list-item-delete:hover {
  transform: translateY(-7px);
}

/* modal styling */
#item-dialog {
  font-family: sans-serif;
  word-spacing: 0.1px;
  border-radius: 25px;
}

#item-dialog form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.form-group {
  min-width: 350px;
}

.form-group label {
  display: inline-block;
  min-width: 150px;
}

.form-group input {
  min-width: 200px;
}

.form-group select {
  text-align: center;
  min-width: 200px;
}

.form-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB;0DAC+C;EAC/C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;;EAElB,uBAAuB;EACvB,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;EAC7B,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,kBAAkB;AACpB;;AAEA;GACG;;AAEH;EACE,uBAAuB;EACvB,4BAA4B;EAC5B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gCAAgC;EAChC,iBAAiB;EACjB,mCAAmC;EACnC,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,cAAc;EACd,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,kBAAkB;;EAElB,8DAA8D;EAC9D,+BAA+B;EAC/B,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,oCAAoC;EACpC,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,yCAAyC;EACzC,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,cAAc;EACd,YAAY;EACZ,WAAW;EACX,yDAAwC;EACxC,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,yDAA0C;EAC1C,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;;;;;;;;GAUG;;AAEH;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;EACV,eAAe;EACf,YAAY;;EAEZ,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;EACV,eAAe;EACf,YAAY;;EAEZ,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,kBAAkB;AAClB;EACE,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX","sourcesContent":["@font-face {\n  font-family: \"harukaze\";\n  src: url(\"./harukaze-webfont.woff2\") format(\"woff2\"),\n    url(\"./harukaze-webfont.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n  --black: #040404;\n  --white: #e4e4e4;\n  --light-grey: #acacac;\n  --grey: #7e7e7e;\n  --dark-grey: #4f4f4f;\n  --small-font: 25px;\n  --medim-font: 35px;\n  --large-font: 45px;\n\n  font-family: \"harukaze\";\n  letter-spacing: 1.2px;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  min-height: 100vh;\n  width: 100vw;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 120px 1fr;\n}\n\nheader {\n  background-color: var(--grey);\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding-left: 40px;\n}\n\n.zoomed-image {\n  --size: 100px;\n  width: var(--size);\n  height: var(--size);\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.logo {\n  width: 100%;\n  transform: scale(1.35);\n  transform-origin: center;\n}\n\nheader .title {\n  font-size: 75px;\n  margin-left: 450px;\n}\n\n.actions {\n  margin-right: 50px;\n  gap: 10px;\n  display: flex;\n}\n\nbutton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 5px;\n  border-radius: 15px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\nbutton:hover {\n  background-color: var(--light-grey);\n  border: 1px solid white;\n  color: white;\n  padding: 12px 7px;\n}\n\nside-bar {\n  background-color: var(--light-grey);\n  grid-row: 2/3;\n  padding-left: 35px;\n}\n\n/* .projects {\n} */\n\n#project-dialog {\n  font-family: sans-serif;\n  font-size: var(--small-font);\n  word-spacing: 0.1px;\n  border-radius: 25px;\n}\n\n#project-dialog form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  justify-content: center;\n  align-items: start;\n}\n\n#project-dialog .form-actions {\n  align-self: center;\n}\n\n.project-section {\n  font-size: var(--medim-font);\n  position: relative;\n}\n\n.project-section .add {\n  position: absolute;\n  display: inline-block;\n  top: -10%;\n  left: 55%;\n}\n\n.project-item {\n  display: flex;\n  gap: 10px;\n  justify-content: start;\n  align-items: center;\n  transition: all 0.1s ease-in-out;\n}\n\n.project-item:hover {\n  border-radius: 20px;\n  padding: 10px;\n  margin-right: 10px;\n  box-shadow: 0 0 10px var(--black);\n  transform: translateY(-5px);\n}\n\n.project-item img {\n  --size: 55px;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n}\n\n.project-item-label {\n  font-size: var(--small-font);\n}\n\nmain {\n  background-color: var(--white);\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 20px;\n  margin: 0;\n}\n\n.project-container {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  /* border-left: 5px solid red; */\n  line-height: 35px;\n  background-color: var(--light-grey);\n  border-radius: 20px;\n  width: 100%;\n  height: fit-content;\n  padding: 25px;\n}\n\n.project-container-title {\n  font-size: 45px;\n  margin: 10px;\n}\n\n.add {\n  margin-left: 3%;\n  margin-top: 1%;\n  width: 45px;\n  height: 45px;\n}\n\n.rotate-object:hover {\n  animation: spin 0.3s linear infinite;\n  border-radius: 50%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.651);\n}\n\n.rotate-object:active {\n  animation: none;\n  box-shadow: 0 0 20px gold;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.list-item {\n  position: relative;\n  list-style: none;\n  font-family: sans-serif;\n  font-size: 25px;\n  margin-left: 10px;\n  background-color: var(--white);\n  padding: 20px;\n  border-radius: 20px;\n  padding-bottom: 60px;\n}\n\n.list-item * {\n  margin: 0;\n}\n\n.list-item-head {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n\n.list-item-title {\n  margin: 10px 0;\n  font-size: 25px;\n  position: relative;\n}\n\n.list-item-img {\n  --size: 20px;\n  max-width: var(--size);\n  max-height: var(--size);\n}\n\n.list-item-img:hover {\n  --size: 30px;\n}\n\n.list-item-description {\n  --max-lines: 1;\n  --line-height: 1.7;\n\n  max-height: calc(var(--max-lines) * 15px * var(--line-height));\n  line-height: var(--line-height);\n  overflow: hidden;\n  font-size: 15px;\n  position: relative;\n  word-spacing: 1px;\n}\n.expand-btn {\n  appearance: none;\n  /* border: 1px solid var(--black); */\n  padding: 0.5em;\n  border-radius: 0.25em;\n  cursor: pointer;\n  position: absolute;\n  margin-top: 10px;\n  transition: transform 0.3s ease;\n}\n\n.expand-btn:hover {\n  /* background-color: var(--light-grey); */\n  transform: translateY(-10px);\n}\n\n.expand-btn::before {\n  content: \"\";\n  display: block;\n  height: 25px;\n  width: 25px;\n  background-image: url(./scroll-open.png);\n  background-size: cover;\n}\n\n.expand-btn:checked::before {\n  content: \"\";\n  display: block;\n  margin-top: -8px;\n  margin-left: -10px;\n  width: 45px;\n  height: 45px;\n  background-image: url(./scroll-closed.png);\n  background-size: cover;\n}\n\n.list-item-description:has(+ .expand-btn:checked) {\n  max-height: none;\n}\n\n/* .list-item-description::before {\n  content: \"\";\n  position: absolute;\n  height: calc(15px * var(--line-height));\n  width: 20%;\n  margin-left: 80%;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  background: linear-gradient(to bottom, transparent, var(--white));\n} */\n\n.list-item-date {\n  margin-left: auto;\n  font-size: 15px;\n}\n\n.list-item-priority-container {\n  position: absolute;\n  right: 5%;\n  bottom: 5%;\n}\n\n.list-item-priority {\n  --size: 25px;\n  max-width: var(--size);\n  max-height: var(--size);\n}\n\n.list-item-status {\n  position: absolute;\n  left: -2.5%;\n  bottom: 50%;\n}\n\n.list-item-edit {\n  max-width: 30px;\n  max-height: 30px;\n  background: none;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n\n  position: absolute;\n  left: 7.5%;\n  bottom: 15px;\n  transition: transform 0.3s ease;\n}\n\n.list-item-edit:hover {\n  transform: translateY(-7px);\n}\n\n.list-item-delete {\n  max-width: 30px;\n  max-height: 30px;\n  background: none;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n\n  position: absolute;\n  left: 12.5%;\n  bottom: 17px;\n  transition: transform 0.3s ease;\n}\n\n.list-item-delete:hover {\n  transform: translateY(-7px);\n}\n\n/* modal styling */\n#item-dialog {\n  font-family: sans-serif;\n  word-spacing: 0.1px;\n  border-radius: 25px;\n}\n\n#item-dialog form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-group {\n  min-width: 350px;\n}\n\n.form-group label {\n  display: inline-block;\n  min-width: 150px;\n}\n\n.form-group input {\n  min-width: 200px;\n}\n\n.form-group select {\n  text-align: center;\n  min-width: 200px;\n}\n\n.form-actions {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dateHandler.js":
/*!****************************!*\
  !*** ./src/dateHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dateHandler = {
  getTodaysDate: function () {
    const today = new Date();
    return this.readableDate(today);
  },
  readableDate: function (date) {
    let locale = "en-US";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(locale, options);
  },
  validateDate: function (inputDate) {
    return this.readableDate(new Date(inputDate));
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dateHandler);


/***/ }),

/***/ "./src/displayHandler.js":
/*!*******************************!*\
  !*** ./src/displayHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDisplayHandler)
/* harmony export */ });
/* harmony import */ var _fire_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fire.png */ "./src/fire.png");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/item.js");
/* harmony import */ var _katana_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./katana.png */ "./src/katana.png");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _personal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal.png */ "./src/personal.png");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _quill_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quill.png */ "./src/quill.png");
/* harmony import */ var _shurikenAdd_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shurikenAdd.svg */ "./src/shurikenAdd.svg");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _tooltip_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltip.svg */ "./src/tooltip.svg");












function createDisplayHandler(proj) {
  const main = document.querySelector("main");
  const localStorageHandler = (0,_storage__WEBPACK_IMPORTED_MODULE_8__["default"])();
  //later will use persistance layer, this is temporary

  //split into create proj, add items, remove items
  //create loadProject function to load from persistance layer

  function loadAssets() {
    //header logo
    const logo = document.querySelector(".zoomed-image img");
    logo.src = _logo_svg__WEBPACK_IMPORTED_MODULE_3__;
    //sidebar add icon
    const addProjectIcon = document.querySelector(".project-section .add");
    addProjectIcon.src = _shurikenAdd_svg__WEBPACK_IMPORTED_MODULE_7__;
  }

  function initDisplayHanlder(projects) {
    // fillItemForm();
    loadAssets();
    activateAddProjectButton();
    projects.forEach((proj, index) => {
      const projectItem = renderProjectItem(proj);
      const projectSection = document.querySelector(".projects");
      projectSection.appendChild(projectItem);

      if (index == 0) projectItem.click();
    });
  }

  function activateAddProjectButton() {
    const addProjButton = document.querySelector(".project-section img");
    addProjButton.addEventListener("click", addProjectForm);
  }

  function addProjectForm() {
    const dialog = document.getElementById("project-dialog");
    const projectSection = document.querySelector(".projects");
    dialog.showModal();
    fillProjectForm().then((proj) => {
      console.log(proj);
      const project = renderProjectItem(proj);
      localStorageHandler.addProject(proj);
      // console.log(project);
      projectSection.appendChild(project);
    });
  }

  function fillProjectForm() {
    return new Promise((resolve) => {
      const form = document.querySelector("#project-dialog form");

      const submitEvent = (e) => {
        e.preventDefault();

        const dialog = document.getElementById("project-dialog");

        const projTitle = document.getElementById("project-title");
        const projImage = document.getElementById("project-image");

        // const project = renderProjectItem({
        //   projTitle: projTitle.value,
        //   projImage: projImage.value,
        // });

        //have to add path to img in project obj
        //*proj creation
        const project = (0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])(projTitle.value);
        // console.log(`Inside proj add listener ${projTitle.value}`);
        projTitle.value = "";
        projImage.value = "";

        // console.log(`Inside Submit function: ${item}`);
        dialog.close();
        return project;
      };

      const cancelEvent = (e) => {
        e.preventDefault();

        const dialog = document.getElementById("project-dialog");

        // console.log(`Inside Cancel function`);
        dialog.close();
        return null;
      };

      const submitHandler = (e) => {
        const project = submitEvent(e);
        removeEventListeners();
        resolve(project);
      };
      const cancelHandler = (e) => {
        const project = cancelEvent(e);
        removeEventListeners();
        resolve(project);
      };
      //if possible seperate event listeners from resolution
      form.addEventListener("submit", submitHandler, { once: true });

      const cancelBtn = document.querySelector("#project-dialog .cancel");
      cancelBtn.addEventListener("click", cancelHandler, { once: true });

      function removeEventListeners() {
        form.removeEventListener("submit", submitHandler);
        cancelBtn.removeEventListener("click", cancelHandler);
      }
    });
  }

  function renderProjectItem(projItem) {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.addEventListener("click", (e) => {
      // alert(projItem.projectName);
      renderProjectUnload();
      renderProjectLoad(projItem);
    });

    //replace with projItem.img
    const imgElement = document.createElement("img");
    imgElement.src = "../src/personal.png";
    imgElement.alt = "project-item-image";

    const pElement = document.createElement("p");
    pElement.classList.add("project-item-label");
    pElement.innerText = projItem.projectName;

    projectItem.appendChild(imgElement);
    projectItem.appendChild(pElement);

    return projectItem;
  }

  function renderProjectLoad(proj) {
    const projectContainer = document.createElement("ul");
    projectContainer.classList.add("project-container");
    projectContainer.classList.add(`${proj.projectName.split(" ").join("-")}`);

    const projTitle = document.createElement("p");
    projTitle.classList.add("project-container-title");
    projTitle.innerHTML = proj.projectName;
    projectContainer.appendChild(projTitle);

    const projList = [];
    proj.itemsList.forEach((element, index) => {
      projList[index] = renderListItem(element);
    });

    projList.forEach((item) => {
      projectContainer.appendChild(item);
    });

    const addBtn = document.createElement("img");
    addBtn.src = _shurikenAdd_svg__WEBPACK_IMPORTED_MODULE_7__;
    addBtn.alt = "Add";
    addBtn.classList.add("rotate-object", "add");
    //may remove this, if not used
    addBtn.setAttribute("data-project-name", proj.projectName);

    projectContainer.appendChild(addBtn);

    main.appendChild(projectContainer);

    activateAddItemButton(proj);
    activateEditItemButton(proj);
    activateDeleteItemButton(proj);
  }

  //passed projectContainer, change if needed
  function activateEditItemButton(proj) {
    const projectContainer = document.querySelector(
      `.${proj.projectName.split(" ").join("-")}`
    );
    projectContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("list-item-edit")) {
        const listItem = e.target.closest("li");
        if (listItem) {
          const index = Array.from(listItem.parentNode.children).indexOf(
            listItem
          );

          editItemForm(proj, index - 1);
        }
      }
    });
  }

  function activateDeleteItemButton(proj) {
    const projectContainer = document.querySelector(
      `.${proj.projectName.split(" ").join("-")}`
    );
    projectContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("list-item-delete")) {
        const listItem = e.target.closest("li");
        if (listItem) {
          const index = Array.from(listItem.parentNode.children).indexOf(
            listItem
          );
          proj.removeItem(index - 1);
          localStorageHandler.updateProject(proj);
          renderItemListRefresh(proj);
        }
      }
    });
  }

  function renderProjectUnload() {
    const projectContainers = document.querySelectorAll(".project-container");

    projectContainers.forEach((projectContainer) => {
      main.removeChild(projectContainer);
    });
  }

  function activateAddItemButton(proj) {
    // To prevent multiple event listeners on a button

    const addBtn = document.querySelector(
      `.${proj.projectName.split(" ").join("-")} .add`
    );

    addBtn.addEventListener("click", () => {
      addItemForm(proj);
    });
  }

  function addItemForm(proj) {
    const dialog = document.getElementById("item-dialog");
    dialog.showModal();

    fillItemForm().then((item) => {
      // removeEventListener();
      if (item == null) {
        // console.log("returning item as null");
        return null;
      } else {
        // console.log("item is not null");
        // console.log(`returned from function: ${item}`);
        console.log(proj);
        proj.addItem(item);
        localStorageHandler.updateProject(proj);
        renderItemListRefresh(proj);
      }
    });
  }

  function editItemForm(editProj, index) {
    //use diff modal
    const dialog = document.getElementById("item-dialog");
    dialog.showModal();

    fillItemForm().then((editedItem) => {
      // removeEventListener();
      if (editedItem == null) {
        // console.log("returning item as null");
        return null;
      } else {
        // console.log("item is not null");
        // console.log(`returned from function: ${item}`);
        //*efficiency
        //change seperately instead of loading whole module
        editProj.replaceItem(index, editedItem);
        localStorageHandler.updateProject(editProj);
        renderItemListRefresh(editProj);
        // console.log(proj);
      }
    });
  }

  function fillItemForm() {
    return new Promise((resolve) => {
      const form = document.querySelector("#item-dialog form");

      const submitEvent = (e) => {
        e.preventDefault();

        const dialog = document.getElementById("item-dialog");

        const itemTitle = form.querySelector("#item-title");
        const itemDescription = form.querySelector("#item-description");
        const itemNotes = form.querySelector("#item-notes");
        const itemDueDate = form.querySelector("#item-due-date");
        const itemPriority = form.querySelector("#item-priority");
        const completedStatus = form.querySelector("#completed-status");

        const item = (0,_item__WEBPACK_IMPORTED_MODULE_1__["default"])(
          itemTitle.value,
          itemDescription.value,
          itemNotes.value,
          itemDueDate.value,
          itemPriority.value,
          completedStatus.checked
        );

        itemTitle.value = "";
        itemDescription.value = "";
        itemNotes.value = "";
        itemDueDate.value = "";
        itemPriority.value = 3;
        completedStatus.value = false;

        // console.log(`Inside Submit function: ${item}`);
        dialog.close();
        return item;
      };

      const cancelEvent = (e) => {
        e.preventDefault();

        const dialog = document.getElementById("item-dialog");

        // console.log(`Inside Cancel function`);
        dialog.close();
        return null;
      };

      const submitHandler = (e) => {
        const item = submitEvent(e);
        removeEventListeners();
        resolve(item);
      };
      const cancelHandler = (e) => {
        const item = cancelEvent(e);
        removeEventListeners();
        resolve(item);
      };
      //if possible seperate event listeners from resolution
      form.addEventListener("submit", submitHandler, { once: true });

      const cancelBtn = document.querySelector("#item-dialog .cancel");
      cancelBtn.addEventListener("click", cancelHandler, { once: true });

      function removeEventListeners() {
        form.removeEventListener("submit", submitHandler);
        cancelBtn.removeEventListener("click", cancelHandler);
      }
    });
  }

  function renderItemListRefresh(proj) {
    const projectContainer = document.querySelector(
      `.${proj.projectName.split(" ").join("-")}`
    );

    const listItems = projectContainer.querySelectorAll(
      `.${proj.projectName.split(" ").join("-")} li.list-item`
    );
    listItems.forEach((item) => {
      projectContainer.removeChild(item);
    });

    const addBtn = document.querySelector(
      `.${proj.projectName.split(" ").join("-")} .add`
    );

    proj.itemsList.forEach((element) => {
      const item = renderListItem(element);
      projectContainer.insertBefore(item, addBtn);
    });
  }

  // need to add edit and
  function renderListItem(item) {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const headDiv = document.createElement("div");
    headDiv.classList.add("list-item-head");

    const title = document.createElement("p");
    title.classList.add("list-item-title");
    title.textContent = item.title;

    const tooltipImg = document.createElement("img");
    tooltipImg.classList.add("list-item-img");
    tooltipImg.src = _tooltip_svg__WEBPACK_IMPORTED_MODULE_10__;
    tooltipImg.alt = "tooltip";
    tooltipImg.title = item.notes;

    //have to add created and dueDate in container
    const date = document.createElement("p");
    date.classList.add("list-item-date");
    date.textContent = item.dueDate;

    headDiv.appendChild(title);
    headDiv.appendChild(tooltipImg);
    headDiv.appendChild(date);

    const description = document.createElement("p");
    description.classList.add("list-item-description");
    description.textContent = item.description;

    const expandCheck = document.createElement("input");
    expandCheck.type = "checkbox";
    expandCheck.classList.add("expand-btn");

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("list-item-priority-container");

    //need to dynamically change based on due
    // date closeness
    //integrate when adding date module
    let priorityClr = "green";
    if (item.priority == 1) {
      priorityClr = "red";
    } else if (item.priority == 2) {
      priorityClr = "orange";
    }

    for (let i = item.priority; i <= 3; i++) {
      const priorityImg = document.createElement("img");
      priorityImg.classList.add("list-item-priority");
      priorityImg.src = _katana_png__WEBPACK_IMPORTED_MODULE_2__;
      priorityImg.alt = "level";
      priorityDiv.appendChild(priorityImg);
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("list-item-status");
    checkbox.checked = item.completedStatus;

    const editButton = document.createElement("img");
    editButton.src = _quill_png__WEBPACK_IMPORTED_MODULE_6__;
    editButton.alt = "edit icon";
    editButton.classList.add("list-item-edit");

    const deleteButton = document.createElement("img");
    deleteButton.src = _fire_png__WEBPACK_IMPORTED_MODULE_0__;
    deleteButton.alt = "delete icon";
    deleteButton.classList.add("list-item-delete");

    li.style.borderLeft = `5px solid ${priorityClr}`;

    li.appendChild(headDiv);
    li.appendChild(description);
    li.appendChild(expandCheck);
    li.appendChild(priorityDiv);
    li.appendChild(checkbox);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
  }

  initDisplayHanlder(proj);
  // need to add a toggle checkbox function for
  return {
    renderProjectLoad,
    renderProjectUnload,
    renderProjectItem,
  };
}


/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createItem)
/* harmony export */ });
/* harmony import */ var _dateHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateHandler */ "./src/dateHandler.js");


function createItem(
  title,
  description,
  notes,
  dueDate,
  priority,
  completedStatus
) {
  const _dateCreated = _dateHandler__WEBPACK_IMPORTED_MODULE_0__["default"].getTodaysDate();
  let _dueDate = _dateHandler__WEBPACK_IMPORTED_MODULE_0__["default"].validateDate(dueDate);

  return {
    get dateCreated() {
      return _dateCreated;
    },
    get dueDate() {
      return _dueDate;
    },
    set dueDate(newDate) {
      _dueDate = _dateHandler__WEBPACK_IMPORTED_MODULE_0__["default"].validateDate(newDate);
    },
    title,
    description,
    notes,
    priority,
    completedStatus,
  };
}


/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let listPrototype = {
  addItem(item) {
    this.itemsList.push(item);
  },

  replaceItem(index, newItem) {
    this.itemsList[index] = newItem;
  },

  removeItem(index) {
    this.itemsList.splice(index, 1);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listPrototype);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/list.js");

//img path [property]
//project color property
function createProject(projName, list = []) {
  return Object.assign({}, _list__WEBPACK_IMPORTED_MODULE_0__["default"], {
    projectName: projName,
    // projectImage: projImg,
    itemsList: [...list],
  });
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorageHandler)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


function LocalStorageHandler() {
  function loadProjects() {
    const projectData = JSON.parse(localStorage.getItem("projects"));
    const projects = projectData.map((project) => {
      return (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(project.projectName, project.itemsList);
    });
    return projects;
  }

  function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  // check for not allowing mutliple same project
  function addProject(newProject) {
    const projects = loadProjects();

    const index = projects.findIndex(
      (project) => project.projectName === newProject.projectName
    );

    if (index == -1) {
      projects.push(newProject);
      saveProjects(projects);
    }
  }

  function updateProject(updatedProject) {
    const projects = loadProjects();

    // const index = indexFinder(projects, updateProject);
    const index = projects.findIndex(
      (project) => project.projectName === updatedProject.projectName
    );

    if (index !== -1) {
      projects[index] = updatedProject;
      saveProjects(projects);
    } else {
      console.log("project not found");
      console.log(updatedProject);
    }
  }

  function removeProject(projectToRemove) {
    const projects = loadProjects();

    const index = projects.findIndex(
      (project) => project.projectName === projectToRemove.projectName
    );

    if (index !== -1) {
      projects.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projects));
    } else {
      console.log(`Project does not exist ${projectToRemove}`);
    }
  }

  return {
    loadProjects,
    saveProjects,
    addProject,
    removeProject,
    updateProject,
  };
}


/***/ }),

/***/ "./src/fire.png":
/*!**********************!*\
  !*** ./src/fire.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2c26e64ced840c1af47.png";

/***/ }),

/***/ "./src/harukaze-webfont.woff":
/*!***********************************!*\
  !*** ./src/harukaze-webfont.woff ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8ee0a27ca5f2af735d9.woff";

/***/ }),

/***/ "./src/harukaze-webfont.woff2":
/*!************************************!*\
  !*** ./src/harukaze-webfont.woff2 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e420e55ff0bf25d86e8.woff2";

/***/ }),

/***/ "./src/katana.png":
/*!************************!*\
  !*** ./src/katana.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2308d4f038126edde2a8.png";

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1a64d90d8ea2e5c749d.svg";

/***/ }),

/***/ "./src/personal.png":
/*!**************************!*\
  !*** ./src/personal.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e77954dd1baa92435109.png";

/***/ }),

/***/ "./src/quill.png":
/*!***********************!*\
  !*** ./src/quill.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1364280bed3679f2ea3f.png";

/***/ }),

/***/ "./src/scroll-closed.png":
/*!*******************************!*\
  !*** ./src/scroll-closed.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae3bbf513432d51d122a.png";

/***/ }),

/***/ "./src/scroll-open.png":
/*!*****************************!*\
  !*** ./src/scroll-open.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80c7bcb901514083ef29.png";

/***/ }),

/***/ "./src/shurikenAdd.svg":
/*!*****************************!*\
  !*** ./src/shurikenAdd.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33301b410e6697f3f5c0.svg";

/***/ }),

/***/ "./src/tooltip.svg":
/*!*************************!*\
  !*** ./src/tooltip.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fbaa4405ee8f78b8dbd.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHandler */ "./src/displayHandler.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



const localStorageHandler = (0,_storage__WEBPACK_IMPORTED_MODULE_1__["default"])();
let projects = localStorageHandler.loadProjects();
console.log(projects);

document.addEventListener("DOMContentLoaded", () => {
  const displayHandler = (0,_displayHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(projects);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZIQUEyQztBQUN2Riw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0QywrR0FBb0M7QUFDaEYsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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QTtBQUNBLHlCQUF5QiwyREFBb0I7QUFDN0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RhdGVIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kaXNwbGF5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9oYXJ1a2F6ZS13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9oYXJ1a2F6ZS13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3Njcm9sbC1vcGVuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vc2Nyb2xsLWNsb3NlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoYXJ1a2F6ZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5ib2R5IHtcbiAgLS1ibGFjazogIzA0MDQwNDtcbiAgLS13aGl0ZTogI2U0ZTRlNDtcbiAgLS1saWdodC1ncmV5OiAjYWNhY2FjO1xuICAtLWdyZXk6ICM3ZTdlN2U7XG4gIC0tZGFyay1ncmV5OiAjNGY0ZjRmO1xuICAtLXNtYWxsLWZvbnQ6IDI1cHg7XG4gIC0tbWVkaW0tZm9udDogMzVweDtcbiAgLS1sYXJnZS1mb250OiA0NXB4O1xuXG4gIGZvbnQtZmFtaWx5OiBcImhhcnVrYXplXCI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnI7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4uem9vbWVkLWltYWdlIHtcbiAgLS1zaXplOiAxMDBweDtcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zNSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNzVweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xufVxuXG4uYWN0aW9ucyB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgZ2FwOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggN3B4O1xufVxuXG5zaWRlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xuICBncmlkLXJvdzogMi8zO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG59XG5cbi8qIC5wcm9qZWN0cyB7XG59ICovXG5cbiNwcm9qZWN0LWRpYWxvZyB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xuICB3b3JkLXNwYWNpbmc6IDAuMXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4jcHJvamVjdC1kaWFsb2cgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuI3Byb2plY3QtZGlhbG9nIC5mb3JtLWFjdGlvbnMge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXNlY3Rpb24ge1xuICBmb250LXNpemU6IHZhcigtLW1lZGltLWZvbnQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0LXNlY3Rpb24gLmFkZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDU1JTtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWJsYWNrKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG4ucHJvamVjdC1pdGVtIGltZyB7XG4gIC0tc2l6ZTogNTVweDtcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wcm9qZWN0LWl0ZW0tbGFiZWwge1xuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDsgKi9cbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5hZGQge1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi10b3A6IDElO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ucm90YXRlLW9iamVjdDpob3ZlciB7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjNzIGxpbmVhciBpbmZpbml0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcbn1cblxuLnJvdGF0ZS1vYmplY3Q6YWN0aXZlIHtcbiAgYW5pbWF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCBnb2xkO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4ubGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmxpc3QtaXRlbSAqIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdC1pdGVtLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5saXN0LWl0ZW0tdGl0bGUge1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saXN0LWl0ZW0taW1nIHtcbiAgLS1zaXplOiAyMHB4O1xuICBtYXgtd2lkdGg6IHZhcigtLXNpemUpO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1zaXplKTtcbn1cblxuLmxpc3QtaXRlbS1pbWc6aG92ZXIge1xuICAtLXNpemU6IDMwcHg7XG59XG5cbi5saXN0LWl0ZW0tZGVzY3JpcHRpb24ge1xuICAtLW1heC1saW5lczogMTtcbiAgLS1saW5lLWhlaWdodDogMS43O1xuXG4gIG1heC1oZWlnaHQ6IGNhbGModmFyKC0tbWF4LWxpbmVzKSAqIDE1cHggKiB2YXIoLS1saW5lLWhlaWdodCkpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd29yZC1zcGFjaW5nOiAxcHg7XG59XG4uZXhwYW5kLWJ0biB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTsgKi9cbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5leHBhbmQtYnRuOmhvdmVyIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7ICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG59XG5cbi5leHBhbmQtYnRuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXhwYW5kLWJ0bjpjaGVja2VkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5saXN0LWl0ZW0tZGVzY3JpcHRpb246aGFzKCsgLmV4cGFuZC1idG46Y2hlY2tlZCkge1xuICBtYXgtaGVpZ2h0OiBub25lO1xufVxuXG4vKiAubGlzdC1pdGVtLWRlc2NyaXB0aW9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogY2FsYygxNXB4ICogdmFyKC0tbGluZS1oZWlnaHQpKTtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHZhcigtLXdoaXRlKSk7XG59ICovXG5cbi5saXN0LWl0ZW0tZGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5saXN0LWl0ZW0tcHJpb3JpdHktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG4gIGJvdHRvbTogNSU7XG59XG5cbi5saXN0LWl0ZW0tcHJpb3JpdHkge1xuICAtLXNpemU6IDI1cHg7XG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XG4gIG1heC1oZWlnaHQ6IHZhcigtLXNpemUpO1xufVxuXG4ubGlzdC1pdGVtLXN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIuNSU7XG4gIGJvdHRvbTogNTAlO1xufVxuXG4ubGlzdC1pdGVtLWVkaXQge1xuICBtYXgtd2lkdGg6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNy41JTtcbiAgYm90dG9tOiAxNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4ubGlzdC1pdGVtLWVkaXQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XG59XG5cbi5saXN0LWl0ZW0tZGVsZXRlIHtcbiAgbWF4LXdpZHRoOiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEyLjUlO1xuICBib3R0b206IDE3cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5saXN0LWl0ZW0tZGVsZXRlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xufVxuXG4vKiBtb2RhbCBzdHlsaW5nICovXG4jaXRlbS1kaWFsb2cge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgd29yZC1zcGFjaW5nOiAwLjFweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuI2l0ZW0tZGlhbG9nIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmZvcm0tYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCOzBEQUMrQztFQUMvQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0dBQ0c7O0FBRUg7RUFDRSx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLG1CQUFt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RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsWUFBWTs7RUFFWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVk7O0VBRVosa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJoYXJ1a2F6ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9oYXJ1a2F6ZS13ZWJmb250LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4vaGFydWthemUtd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIC0tYmxhY2s6ICMwNDA0MDQ7XFxuICAtLXdoaXRlOiAjZTRlNGU0O1xcbiAgLS1saWdodC1ncmV5OiAjYWNhY2FjO1xcbiAgLS1ncmV5OiAjN2U3ZTdlO1xcbiAgLS1kYXJrLWdyZXk6ICM0ZjRmNGY7XFxuICAtLXNtYWxsLWZvbnQ6IDI1cHg7XFxuICAtLW1lZGltLWZvbnQ6IDM1cHg7XFxuICAtLWxhcmdlLWZvbnQ6IDQ1cHg7XFxuXFxuICBmb250LWZhbWlseTogXFxcImhhcnVrYXplXFxcIjtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMWZyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLnpvb21lZC1pbWFnZSB7XFxuICAtLXNpemU6IDEwMHB4O1xcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjM1KTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC50aXRsZSB7XFxuICBmb250LXNpemU6IDc1cHg7XFxuICBtYXJnaW4tbGVmdDogNDUwcHg7XFxufVxcblxcbi5hY3Rpb25zIHtcXG4gIG1hcmdpbi1yaWdodDogNTBweDtcXG4gIGdhcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMnB4IDdweDtcXG59XFxuXFxuc2lkZS1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4vKiAucHJvamVjdHMge1xcbn0gKi9cXG5cXG4jcHJvamVjdC1kaWFsb2cge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xcbiAgd29yZC1zcGFjaW5nOiAwLjFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbiNwcm9qZWN0LWRpYWxvZyBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbiNwcm9qZWN0LWRpYWxvZyAuZm9ybS1hY3Rpb25zIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Qtc2VjdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLW1lZGltLWZvbnQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIC5hZGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdG9wOiAtMTAlO1xcbiAgbGVmdDogNTUlO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tYmxhY2spO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIGltZyB7XFxuICAtLXNpemU6IDU1cHg7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7ICovXFxuICBsaW5lLWhlaWdodDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lci10aXRsZSB7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5hZGQge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICB3aWR0aDogNDVweDtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuXFxuLnJvdGF0ZS1vYmplY3Q6aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBzcGluIDAuM3MgbGluZWFyIGluZmluaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxufVxcblxcbi5yb3RhdGUtb2JqZWN0OmFjdGl2ZSB7XFxuICBhbmltYXRpb246IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCBnb2xkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG59XFxuXFxuLmxpc3QtaXRlbSAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxpc3QtaXRlbS1oZWFkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtLXRpdGxlIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGlzdC1pdGVtLWltZyB7XFxuICAtLXNpemU6IDIwcHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgbWF4LWhlaWdodDogdmFyKC0tc2l6ZSk7XFxufVxcblxcbi5saXN0LWl0ZW0taW1nOmhvdmVyIHtcXG4gIC0tc2l6ZTogMzBweDtcXG59XFxuXFxuLmxpc3QtaXRlbS1kZXNjcmlwdGlvbiB7XFxuICAtLW1heC1saW5lczogMTtcXG4gIC0tbGluZS1oZWlnaHQ6IDEuNztcXG5cXG4gIG1heC1oZWlnaHQ6IGNhbGModmFyKC0tbWF4LWxpbmVzKSAqIDE1cHggKiB2YXIoLS1saW5lLWhlaWdodCkpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3b3JkLXNwYWNpbmc6IDFweDtcXG59XFxuLmV4cGFuZC1idG4ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTsgKi9cXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbi5leHBhbmQtYnRuOmhvdmVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpOyAqL1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG59XFxuXFxuLmV4cGFuZC1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zY3JvbGwtb3Blbi5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmV4cGFuZC1idG46Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9zY3JvbGwtY2xvc2VkLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubGlzdC1pdGVtLWRlc2NyaXB0aW9uOmhhcygrIC5leHBhbmQtYnRuOmNoZWNrZWQpIHtcXG4gIG1heC1oZWlnaHQ6IG5vbmU7XFxufVxcblxcbi8qIC5saXN0LWl0ZW0tZGVzY3JpcHRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogY2FsYygxNXB4ICogdmFyKC0tbGluZS1oZWlnaHQpKTtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW4tbGVmdDogODAlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHZhcigtLXdoaXRlKSk7XFxufSAqL1xcblxcbi5saXN0LWl0ZW0tZGF0ZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmxpc3QtaXRlbS1wcmlvcml0eS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUlO1xcbiAgYm90dG9tOiA1JTtcXG59XFxuXFxuLmxpc3QtaXRlbS1wcmlvcml0eSB7XFxuICAtLXNpemU6IDI1cHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgbWF4LWhlaWdodDogdmFyKC0tc2l6ZSk7XFxufVxcblxcbi5saXN0LWl0ZW0tc3RhdHVzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0yLjUlO1xcbiAgYm90dG9tOiA1MCU7XFxufVxcblxcbi5saXN0LWl0ZW0tZWRpdCB7XFxuICBtYXgtd2lkdGg6IDMwcHg7XFxuICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA3LjUlO1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuLmxpc3QtaXRlbS1lZGl0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcXG59XFxuXFxuLmxpc3QtaXRlbS1kZWxldGUge1xcbiAgbWF4LXdpZHRoOiAzMHB4O1xcbiAgbWF4LWhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTIuNSU7XFxuICBib3R0b206IDE3cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG4ubGlzdC1pdGVtLWRlbGV0ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XFxufVxcblxcbi8qIG1vZGFsIHN0eWxpbmcgKi9cXG4jaXRlbS1kaWFsb2cge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB3b3JkLXNwYWNpbmc6IDAuMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuI2l0ZW0tZGlhbG9nIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gIG1pbi13aWR0aDogMzUwcHg7XFxufVxcblxcbi5mb3JtLWdyb3VwIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxufVxcblxcbi5mb3JtLWdyb3VwIGlucHV0IHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5mb3JtLWdyb3VwIHNlbGVjdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZm9ybS1hY3Rpb25zIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkYXRlSGFuZGxlciA9IHtcbiAgZ2V0VG9kYXlzRGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5yZWFkYWJsZURhdGUodG9kYXkpO1xuICB9LFxuICByZWFkYWJsZURhdGU6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgbGV0IGxvY2FsZSA9IFwiZW4tVVNcIjtcbiAgICBjb25zdCBvcHRpb25zID0geyB5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH07XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZSwgb3B0aW9ucyk7XG4gIH0sXG4gIHZhbGlkYXRlRGF0ZTogZnVuY3Rpb24gKGlucHV0RGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWRhYmxlRGF0ZShuZXcgRGF0ZShpbnB1dERhdGUpKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGVIYW5kbGVyO1xuIiwiaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vZmlyZS5wbmdcIjtcbmltcG9ydCBjcmVhdGVJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBrYXRhbmEgZnJvbSBcIi4va2F0YW5hLnBuZ1wiO1xuaW1wb3J0IGxvZ29JY29uIGZyb20gXCIuL2xvZ28uc3ZnXCI7XG5pbXBvcnQgcHJvamVjdEltYWdlIGZyb20gXCIuL3BlcnNvbmFsLnBuZ1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL3F1aWxsLnBuZ1wiO1xuaW1wb3J0IHNodXJpa2VuIGZyb20gXCIuL3NodXJpa2VuQWRkLnN2Z1wiO1xuaW1wb3J0IExvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgdG9vbHRpcCBmcm9tIFwiLi90b29sdGlwLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEaXNwbGF5SGFuZGxlcihwcm9qKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgbG9jYWxTdG9yYWdlSGFuZGxlciA9IExvY2FsU3RvcmFnZUhhbmRsZXIoKTtcbiAgLy9sYXRlciB3aWxsIHVzZSBwZXJzaXN0YW5jZSBsYXllciwgdGhpcyBpcyB0ZW1wb3JhcnlcblxuICAvL3NwbGl0IGludG8gY3JlYXRlIHByb2osIGFkZCBpdGVtcywgcmVtb3ZlIGl0ZW1zXG4gIC8vY3JlYXRlIGxvYWRQcm9qZWN0IGZ1bmN0aW9uIHRvIGxvYWQgZnJvbSBwZXJzaXN0YW5jZSBsYXllclxuXG4gIGZ1bmN0aW9uIGxvYWRBc3NldHMoKSB7XG4gICAgLy9oZWFkZXIgbG9nb1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnpvb21lZC1pbWFnZSBpbWdcIik7XG4gICAgbG9nby5zcmMgPSBsb2dvSWNvbjtcbiAgICAvL3NpZGViYXIgYWRkIGljb25cbiAgICBjb25zdCBhZGRQcm9qZWN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWN0aW9uIC5hZGRcIik7XG4gICAgYWRkUHJvamVjdEljb24uc3JjID0gc2h1cmlrZW47XG4gIH1cblxuICBmdW5jdGlvbiBpbml0RGlzcGxheUhhbmxkZXIocHJvamVjdHMpIHtcbiAgICAvLyBmaWxsSXRlbUZvcm0oKTtcbiAgICBsb2FkQXNzZXRzKCk7XG4gICAgYWN0aXZhdGVBZGRQcm9qZWN0QnV0dG9uKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvaiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gcmVuZGVyUHJvamVjdEl0ZW0ocHJvaik7XG4gICAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gICAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG5cbiAgICAgIGlmIChpbmRleCA9PSAwKSBwcm9qZWN0SXRlbS5jbGljaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGVBZGRQcm9qZWN0QnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZFByb2pCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VjdGlvbiBpbWdcIik7XG4gICAgYWRkUHJvakJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdEZvcm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRpYWxvZ1wiKTtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGZpbGxQcm9qZWN0Rm9ybSgpLnRoZW4oKHByb2opID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHByb2opO1xuICAgICAgY29uc3QgcHJvamVjdCA9IHJlbmRlclByb2plY3RJdGVtKHByb2opO1xuICAgICAgbG9jYWxTdG9yYWdlSGFuZGxlci5hZGRQcm9qZWN0KHByb2opO1xuICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGxQcm9qZWN0Rm9ybSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGlhbG9nIGZvcm1cIik7XG5cbiAgICAgIGNvbnN0IHN1Ym1pdEV2ZW50ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kaWFsb2dcIik7XG5cbiAgICAgICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgICBjb25zdCBwcm9qSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW1hZ2VcIik7XG5cbiAgICAgICAgLy8gY29uc3QgcHJvamVjdCA9IHJlbmRlclByb2plY3RJdGVtKHtcbiAgICAgICAgLy8gICBwcm9qVGl0bGU6IHByb2pUaXRsZS52YWx1ZSxcbiAgICAgICAgLy8gICBwcm9qSW1hZ2U6IHByb2pJbWFnZS52YWx1ZSxcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy9oYXZlIHRvIGFkZCBwYXRoIHRvIGltZyBpbiBwcm9qZWN0IG9ialxuICAgICAgICAvLypwcm9qIGNyZWF0aW9uXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2pUaXRsZS52YWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJbnNpZGUgcHJvaiBhZGQgbGlzdGVuZXIgJHtwcm9qVGl0bGUudmFsdWV9YCk7XG4gICAgICAgIHByb2pUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHByb2pJbWFnZS52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYEluc2lkZSBTdWJtaXQgZnVuY3Rpb246ICR7aXRlbX1gKTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY2FuY2VsRXZlbnQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRpYWxvZ1wiKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSW5zaWRlIENhbmNlbCBmdW5jdGlvbmApO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHN1Ym1pdEV2ZW50KGUpO1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKHByb2plY3QpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNhbmNlbEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gY2FuY2VsRXZlbnQoZSk7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHJlc29sdmUocHJvamVjdCk7XG4gICAgICB9O1xuICAgICAgLy9pZiBwb3NzaWJsZSBzZXBlcmF0ZSBldmVudCBsaXN0ZW5lcnMgZnJvbSByZXNvbHV0aW9uXG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZGlhbG9nIC5jYW5jZWxcIik7XG4gICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRIYW5kbGVyKTtcbiAgICAgICAgY2FuY2VsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3RJdGVtKHByb2pJdGVtKSB7XG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG4gICAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAvLyBhbGVydChwcm9qSXRlbS5wcm9qZWN0TmFtZSk7XG4gICAgICByZW5kZXJQcm9qZWN0VW5sb2FkKCk7XG4gICAgICByZW5kZXJQcm9qZWN0TG9hZChwcm9qSXRlbSk7XG4gICAgfSk7XG5cbiAgICAvL3JlcGxhY2Ugd2l0aCBwcm9qSXRlbS5pbWdcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWdFbGVtZW50LnNyYyA9IFwiLi4vc3JjL3BlcnNvbmFsLnBuZ1wiO1xuICAgIGltZ0VsZW1lbnQuYWx0ID0gXCJwcm9qZWN0LWl0ZW0taW1hZ2VcIjtcblxuICAgIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1sYWJlbFwiKTtcbiAgICBwRWxlbWVudC5pbm5lclRleHQgPSBwcm9qSXRlbS5wcm9qZWN0TmFtZTtcblxuICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xuICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHBFbGVtZW50KTtcblxuICAgIHJldHVybiBwcm9qZWN0SXRlbTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3RMb2FkKHByb2opIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtwcm9qLnByb2plY3ROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX1gKTtcblxuICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2pUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXItdGl0bGVcIik7XG4gICAgcHJvalRpdGxlLmlubmVySFRNTCA9IHByb2oucHJvamVjdE5hbWU7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qVGl0bGUpO1xuXG4gICAgY29uc3QgcHJvakxpc3QgPSBbXTtcbiAgICBwcm9qLml0ZW1zTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcHJvakxpc3RbaW5kZXhdID0gcmVuZGVyTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBwcm9qTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBhZGRCdG4uc3JjID0gc2h1cmlrZW47XG4gICAgYWRkQnRuLmFsdCA9IFwiQWRkXCI7XG4gICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGUtb2JqZWN0XCIsIFwiYWRkXCIpO1xuICAgIC8vbWF5IHJlbW92ZSB0aGlzLCBpZiBub3QgdXNlZFxuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtbmFtZVwiLCBwcm9qLnByb2plY3ROYW1lKTtcblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBhY3RpdmF0ZUFkZEl0ZW1CdXR0b24ocHJvaik7XG4gICAgYWN0aXZhdGVFZGl0SXRlbUJ1dHRvbihwcm9qKTtcbiAgICBhY3RpdmF0ZURlbGV0ZUl0ZW1CdXR0b24ocHJvaik7XG4gIH1cblxuICAvL3Bhc3NlZCBwcm9qZWN0Q29udGFpbmVyLCBjaGFuZ2UgaWYgbmVlZGVkXG4gIGZ1bmN0aW9uIGFjdGl2YXRlRWRpdEl0ZW1CdXR0b24ocHJvaikge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3Byb2oucHJvamVjdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfWBcbiAgICApO1xuICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlzdC1pdGVtLWVkaXRcIikpIHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KFwibGlcIik7XG4gICAgICAgIGlmIChsaXN0SXRlbSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbShsaXN0SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKFxuICAgICAgICAgICAgbGlzdEl0ZW1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZWRpdEl0ZW1Gb3JtKHByb2osIGluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlRGVsZXRlSXRlbUJ1dHRvbihwcm9qKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7cHJvai5wcm9qZWN0TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9YFxuICAgICk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaXN0LWl0ZW0tZGVsZXRlXCIpKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xuICAgICAgICBpZiAobGlzdEl0ZW0pIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20obGlzdEl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihcbiAgICAgICAgICAgIGxpc3RJdGVtXG4gICAgICAgICAgKTtcbiAgICAgICAgICBwcm9qLnJlbW92ZUl0ZW0oaW5kZXggLSAxKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VIYW5kbGVyLnVwZGF0ZVByb2plY3QocHJvaik7XG4gICAgICAgICAgcmVuZGVySXRlbUxpc3RSZWZyZXNoKHByb2opO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0VW5sb2FkKCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcblxuICAgIHByb2plY3RDb250YWluZXJzLmZvckVhY2goKHByb2plY3RDb250YWluZXIpID0+IHtcbiAgICAgIG1haW4ucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhY3RpdmF0ZUFkZEl0ZW1CdXR0b24ocHJvaikge1xuICAgIC8vIFRvIHByZXZlbnQgbXVsdGlwbGUgZXZlbnQgbGlzdGVuZXJzIG9uIGEgYnV0dG9uXG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3Byb2oucHJvamVjdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfSAuYWRkYFxuICAgICk7XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFkZEl0ZW1Gb3JtKHByb2opO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSXRlbUZvcm0ocHJvaikge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS1kaWFsb2dcIik7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gICAgZmlsbEl0ZW1Gb3JtKCkudGhlbigoaXRlbSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJldHVybmluZyBpdGVtIGFzIG51bGxcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpdGVtIGlzIG5vdCBudWxsXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbjogJHtpdGVtfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qKTtcbiAgICAgICAgcHJvai5hZGRJdGVtKGl0ZW0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2VIYW5kbGVyLnVwZGF0ZVByb2plY3QocHJvaik7XG4gICAgICAgIHJlbmRlckl0ZW1MaXN0UmVmcmVzaChwcm9qKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRJdGVtRm9ybShlZGl0UHJvaiwgaW5kZXgpIHtcbiAgICAvL3VzZSBkaWZmIG1vZGFsXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLWRpYWxvZ1wiKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgICBmaWxsSXRlbUZvcm0oKS50aGVuKChlZGl0ZWRJdGVtKSA9PiB7XG4gICAgICAvLyByZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgICBpZiAoZWRpdGVkSXRlbSA9PSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIGl0ZW0gYXMgbnVsbFwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIml0ZW0gaXMgbm90IG51bGxcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGByZXR1cm5lZCBmcm9tIGZ1bmN0aW9uOiAke2l0ZW19YCk7XG4gICAgICAgIC8vKmVmZmljaWVuY3lcbiAgICAgICAgLy9jaGFuZ2Ugc2VwZXJhdGVseSBpbnN0ZWFkIG9mIGxvYWRpbmcgd2hvbGUgbW9kdWxlXG4gICAgICAgIGVkaXRQcm9qLnJlcGxhY2VJdGVtKGluZGV4LCBlZGl0ZWRJdGVtKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlSGFuZGxlci51cGRhdGVQcm9qZWN0KGVkaXRQcm9qKTtcbiAgICAgICAgcmVuZGVySXRlbUxpc3RSZWZyZXNoKGVkaXRQcm9qKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvaik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxsSXRlbUZvcm0oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpdGVtLWRpYWxvZyBmb3JtXCIpO1xuXG4gICAgICBjb25zdCBzdWJtaXRFdmVudCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tZGlhbG9nXCIpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNpdGVtLXRpdGxlXCIpO1xuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgaXRlbU5vdGVzID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2l0ZW0tbm90ZXNcIik7XG4gICAgICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2l0ZW0tZHVlLWRhdGVcIik7XG4gICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNpdGVtLXByaW9yaXR5XCIpO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRTdGF0dXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkLXN0YXR1c1wiKTtcblxuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlSXRlbShcbiAgICAgICAgICBpdGVtVGl0bGUudmFsdWUsXG4gICAgICAgICAgaXRlbURlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIGl0ZW1Ob3Rlcy52YWx1ZSxcbiAgICAgICAgICBpdGVtRHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICBpdGVtUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgY29tcGxldGVkU3RhdHVzLmNoZWNrZWRcbiAgICAgICAgKTtcblxuICAgICAgICBpdGVtVGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICBpdGVtTm90ZXMudmFsdWUgPSBcIlwiO1xuICAgICAgICBpdGVtRHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS52YWx1ZSA9IDM7XG4gICAgICAgIGNvbXBsZXRlZFN0YXR1cy52YWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJbnNpZGUgU3VibWl0IGZ1bmN0aW9uOiAke2l0ZW19YCk7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNhbmNlbEV2ZW50ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS1kaWFsb2dcIik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYEluc2lkZSBDYW5jZWwgZnVuY3Rpb25gKTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzdWJtaXRFdmVudChlKTtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBjYW5jZWxIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGNhbmNlbEV2ZW50KGUpO1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgfTtcbiAgICAgIC8vaWYgcG9zc2libGUgc2VwZXJhdGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gcmVzb2x1dGlvblxuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcblxuICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpdGVtLWRpYWxvZyAuY2FuY2VsXCIpO1xuICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SGFuZGxlcik7XG4gICAgICAgIGNhbmNlbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsSGFuZGxlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJJdGVtTGlzdFJlZnJlc2gocHJvaikge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3Byb2oucHJvamVjdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfWBcbiAgICApO1xuXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYC4ke3Byb2oucHJvamVjdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfSBsaS5saXN0LWl0ZW1gXG4gICAgKTtcbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7cHJvai5wcm9qZWN0TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9IC5hZGRgXG4gICAgKTtcblxuICAgIHByb2ouaXRlbXNMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSByZW5kZXJMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKGl0ZW0sIGFkZEJ0bik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBuZWVkIHRvIGFkZCBlZGl0IGFuZFxuICBmdW5jdGlvbiByZW5kZXJMaXN0SXRlbShpdGVtKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbVwiKTtcblxuICAgIGNvbnN0IGhlYWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWREaXYuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1oZWFkXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcblxuICAgIGNvbnN0IHRvb2x0aXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRvb2x0aXBJbWcuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1pbWdcIik7XG4gICAgdG9vbHRpcEltZy5zcmMgPSB0b29sdGlwO1xuICAgIHRvb2x0aXBJbWcuYWx0ID0gXCJ0b29sdGlwXCI7XG4gICAgdG9vbHRpcEltZy50aXRsZSA9IGl0ZW0ubm90ZXM7XG5cbiAgICAvL2hhdmUgdG8gYWRkIGNyZWF0ZWQgYW5kIGR1ZURhdGUgaW4gY29udGFpbmVyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1kYXRlXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7XG5cbiAgICBoZWFkRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkRGl2LmFwcGVuZENoaWxkKHRvb2x0aXBJbWcpO1xuICAgIGhlYWREaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZXhwYW5kQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZXhwYW5kQ2hlY2sudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBleHBhbmRDaGVjay5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kLWJ0blwiKTtcblxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXByaW9yaXR5LWNvbnRhaW5lclwiKTtcblxuICAgIC8vbmVlZCB0byBkeW5hbWljYWxseSBjaGFuZ2UgYmFzZWQgb24gZHVlXG4gICAgLy8gZGF0ZSBjbG9zZW5lc3NcbiAgICAvL2ludGVncmF0ZSB3aGVuIGFkZGluZyBkYXRlIG1vZHVsZVxuICAgIGxldCBwcmlvcml0eUNsciA9IFwiZ3JlZW5cIjtcbiAgICBpZiAoaXRlbS5wcmlvcml0eSA9PSAxKSB7XG4gICAgICBwcmlvcml0eUNsciA9IFwicmVkXCI7XG4gICAgfSBlbHNlIGlmIChpdGVtLnByaW9yaXR5ID09IDIpIHtcbiAgICAgIHByaW9yaXR5Q2xyID0gXCJvcmFuZ2VcIjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gaXRlbS5wcmlvcml0eTsgaSA8PSAzOyBpKyspIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIHByaW9yaXR5SW1nLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tcHJpb3JpdHlcIik7XG4gICAgICBwcmlvcml0eUltZy5zcmMgPSBrYXRhbmE7XG4gICAgICBwcmlvcml0eUltZy5hbHQgPSBcImxldmVsXCI7XG4gICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUltZyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXN0YXR1c1wiKTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gaXRlbS5jb21wbGV0ZWRTdGF0dXM7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0QnV0dG9uLnNyYyA9IGVkaXRJY29uO1xuICAgIGVkaXRCdXR0b24uYWx0ID0gXCJlZGl0IGljb25cIjtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tZWRpdFwiKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgZGVsZXRlQnV0dG9uLmFsdCA9IFwiZGVsZXRlIGljb25cIjtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1kZWxldGVcIik7XG5cbiAgICBsaS5zdHlsZS5ib3JkZXJMZWZ0ID0gYDVweCBzb2xpZCAke3ByaW9yaXR5Q2xyfWA7XG5cbiAgICBsaS5hcHBlbmRDaGlsZChoZWFkRGl2KTtcbiAgICBsaS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZXhwYW5kQ2hlY2spO1xuICAgIGxpLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIHJldHVybiBsaTtcbiAgfVxuXG4gIGluaXREaXNwbGF5SGFubGRlcihwcm9qKTtcbiAgLy8gbmVlZCB0byBhZGQgYSB0b2dnbGUgY2hlY2tib3ggZnVuY3Rpb24gZm9yXG4gIHJldHVybiB7XG4gICAgcmVuZGVyUHJvamVjdExvYWQsXG4gICAgcmVuZGVyUHJvamVjdFVubG9hZCxcbiAgICByZW5kZXJQcm9qZWN0SXRlbSxcbiAgfTtcbn1cbiIsImltcG9ydCBkYXRlSGFuZGxlciBmcm9tIFwiLi9kYXRlSGFuZGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJdGVtKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIG5vdGVzLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgY29tcGxldGVkU3RhdHVzXG4pIHtcbiAgY29uc3QgX2RhdGVDcmVhdGVkID0gZGF0ZUhhbmRsZXIuZ2V0VG9kYXlzRGF0ZSgpO1xuICBsZXQgX2R1ZURhdGUgPSBkYXRlSGFuZGxlci52YWxpZGF0ZURhdGUoZHVlRGF0ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgZGF0ZUNyZWF0ZWQoKSB7XG4gICAgICByZXR1cm4gX2RhdGVDcmVhdGVkO1xuICAgIH0sXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gX2R1ZURhdGU7XG4gICAgfSxcbiAgICBzZXQgZHVlRGF0ZShuZXdEYXRlKSB7XG4gICAgICBfZHVlRGF0ZSA9IGRhdGVIYW5kbGVyLnZhbGlkYXRlRGF0ZShuZXdEYXRlKTtcbiAgICB9LFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIG5vdGVzLFxuICAgIHByaW9yaXR5LFxuICAgIGNvbXBsZXRlZFN0YXR1cyxcbiAgfTtcbn1cbiIsImxldCBsaXN0UHJvdG90eXBlID0ge1xuICBhZGRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLml0ZW1zTGlzdC5wdXNoKGl0ZW0pO1xuICB9LFxuXG4gIHJlcGxhY2VJdGVtKGluZGV4LCBuZXdJdGVtKSB7XG4gICAgdGhpcy5pdGVtc0xpc3RbaW5kZXhdID0gbmV3SXRlbTtcbiAgfSxcblxuICByZW1vdmVJdGVtKGluZGV4KSB7XG4gICAgdGhpcy5pdGVtc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RQcm90b3R5cGU7XG4iLCJpbXBvcnQgbGlzdFByb3RvdHlwZSBmcm9tIFwiLi9saXN0XCI7XG4vL2ltZyBwYXRoIFtwcm9wZXJ0eV1cbi8vcHJvamVjdCBjb2xvciBwcm9wZXJ0eVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qTmFtZSwgbGlzdCA9IFtdKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBsaXN0UHJvdG90eXBlLCB7XG4gICAgcHJvamVjdE5hbWU6IHByb2pOYW1lLFxuICAgIC8vIHByb2plY3RJbWFnZTogcHJvakltZyxcbiAgICBpdGVtc0xpc3Q6IFsuLi5saXN0XSxcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2FsU3RvcmFnZUhhbmRsZXIoKSB7XG4gIGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0RGF0YS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVQcm9qZWN0KHByb2plY3QucHJvamVjdE5hbWUsIHByb2plY3QuaXRlbXNMaXN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cblxuICAvLyBjaGVjayBmb3Igbm90IGFsbG93aW5nIG11dGxpcGxlIHNhbWUgcHJvamVjdFxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGxvYWRQcm9qZWN0cygpO1xuXG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gbmV3UHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICk7XG5cbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICBzYXZlUHJvamVjdHMocHJvamVjdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3QodXBkYXRlZFByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGxvYWRQcm9qZWN0cygpO1xuXG4gICAgLy8gY29uc3QgaW5kZXggPSBpbmRleEZpbmRlcihwcm9qZWN0cywgdXBkYXRlUHJvamVjdCk7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gdXBkYXRlZFByb2plY3QucHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcHJvamVjdHNbaW5kZXhdID0gdXBkYXRlZFByb2plY3Q7XG4gICAgICBzYXZlUHJvamVjdHMocHJvamVjdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInByb2plY3Qgbm90IGZvdW5kXCIpO1xuICAgICAgY29uc29sZS5sb2codXBkYXRlZFByb2plY3QpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdFRvUmVtb3ZlKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcblxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3RUb1JlbW92ZS5wcm9qZWN0TmFtZVxuICAgICk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBkb2VzIG5vdCBleGlzdCAke3Byb2plY3RUb1JlbW92ZX1gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvYWRQcm9qZWN0cyxcbiAgICBzYXZlUHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIHVwZGF0ZVByb2plY3QsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVEaXNwbGF5SGFuZGxlciBmcm9tIFwiLi9kaXNwbGF5SGFuZGxlclwiO1xuaW1wb3J0IExvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBsb2NhbFN0b3JhZ2VIYW5kbGVyID0gTG9jYWxTdG9yYWdlSGFuZGxlcigpO1xubGV0IHByb2plY3RzID0gbG9jYWxTdG9yYWdlSGFuZGxlci5sb2FkUHJvamVjdHMoKTtcbmNvbnNvbGUubG9nKHByb2plY3RzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5SGFuZGxlciA9IGNyZWF0ZURpc3BsYXlIYW5kbGVyKHByb2plY3RzKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
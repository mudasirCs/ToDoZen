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
/* harmony import */ var _personal_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal.png */ "./src/personal.png");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _quill_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quill.png */ "./src/quill.png");
/* harmony import */ var _shurikenAdd_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shurikenAdd.svg */ "./src/shurikenAdd.svg");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _tooltip_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tooltip.svg */ "./src/tooltip.svg");











function createDisplayHandler(proj) {
  const main = document.querySelector("main");
  const localStorageHandler = (0,_storage__WEBPACK_IMPORTED_MODULE_7__["default"])();
  //later will use persistance layer, this is temporary

  //split into create proj, add items, remove items
  //create loadProject function to load from persistance layer

  function initDisplayHanlder(projects) {
    // fillItemForm();
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
        const project = (0,_project__WEBPACK_IMPORTED_MODULE_4__["default"])(projTitle.value);
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
    addBtn.src = _shurikenAdd_svg__WEBPACK_IMPORTED_MODULE_6__;
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
    tooltipImg.src = _tooltip_svg__WEBPACK_IMPORTED_MODULE_9__;
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
    editButton.src = _quill_png__WEBPACK_IMPORTED_MODULE_5__;
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
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/item.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/storage.js");






//since storage does not save functions
//need to make habit of using prototype bases functions

const item1 = (0,_item__WEBPACK_IMPORTED_MODULE_1__["default"])(
  "fish takeout",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore ea facere debitis sint optio iste molestiae. Atque corporis fugit sequi exercitationem incidunt sapiente mollitia, minus vitae, veritatis deserunt saepe!
    Placeat animi in ea ab facilis distinctio maxime, ut vero? Pariatur aspernatur, voluptas eaque odio, molestiae reiciendis recusandae ullam hic assumenda ut molestias, dolorum cum suscipit. Voluptas, sint cumque. Aperiam!`,
  "I need to get some fish to make some takuyaki sushi",
  "2023-8-15",
  1,
  false
);
const item2 = (0,_item__WEBPACK_IMPORTED_MODULE_1__["default"])(
  "Weeding",
  "Weed out the yard",
  "Get some weed killer for next month to cover more ground",
  "2023-11-30",
  3,
  true
);
const item3 = (0,_item__WEBPACK_IMPORTED_MODULE_1__["default"])(
  "Searching",
  "find knife car keys",
  "Search room from tip to toe or else change keys",
  "2023-11-30",
  "High",
  false
);

const project1 = (0,_project__WEBPACK_IMPORTED_MODULE_3__["default"])("Miscellaneous");
project1.addItem(item1);
project1.addItem(item2);

// console.log(project1);

// const project2 = createProject("Finder");
// project2.addItem(item3);

const localStorageHandler = (0,_storage__WEBPACK_IMPORTED_MODULE_4__["default"])();
// const projects = [];
// projects.push(project1);
// localStorageHandler.saveProjects(projects);
// localStorageHandler.removeProject(project1);
let projects = localStorageHandler.loadProjects();
// const tester = localStorageHandler.loadProjects();
// console.log(tester);
// localStorageHandler.saveProjects(projects);
// tester = localStorageHandler.loadProjects();
// console.log(tester);

// projects.push(project);

// localStorageHandler.addProject(projects);

// console.log(projects);
// const project = createProject("Personal", "blue");
// project.addItem(item1);
// project.addItem(item2);

// projects.push(project);

console.log(projects);

document.addEventListener("DOMContentLoaded", () => {
  const displayHandler = (0,_displayHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(projects);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZIQUEyQztBQUN2Riw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0QywrR0FBb0M7QUFDaEYsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaURBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG9EQUFhO0FBQzlCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEIsb0RBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCLDJEQUFvQjtBQUM3QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZGF0ZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2Rpc3BsYXlIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2hhcnVrYXplLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2hhcnVrYXplLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vc2Nyb2xsLW9wZW4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9zY3JvbGwtY2xvc2VkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhhcnVrYXplXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmJvZHkge1xuICAtLWJsYWNrOiAjMDQwNDA0O1xuICAtLXdoaXRlOiAjZTRlNGU0O1xuICAtLWxpZ2h0LWdyZXk6ICNhY2FjYWM7XG4gIC0tZ3JleTogIzdlN2U3ZTtcbiAgLS1kYXJrLWdyZXk6ICM0ZjRmNGY7XG4gIC0tc21hbGwtZm9udDogMjVweDtcbiAgLS1tZWRpbS1mb250OiAzNXB4O1xuICAtLWxhcmdlLWZvbnQ6IDQ1cHg7XG5cbiAgZm9udC1mYW1pbHk6IFwiaGFydWthemVcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmcjtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi56b29tZWQtaW1hZ2Uge1xuICAtLXNpemU6IDEwMHB4O1xuICB3aWR0aDogdmFyKC0tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjM1KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG5oZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiA3NXB4O1xuICBtYXJnaW4tbGVmdDogNDUwcHg7XG59XG5cbi5hY3Rpb25zIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBnYXA6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTJweCA3cHg7XG59XG5cbnNpZGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG4gIGdyaWQtcm93OiAyLzM7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbn1cblxuLyogLnByb2plY3RzIHtcbn0gKi9cblxuI3Byb2plY3QtZGlhbG9nIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG4gIHdvcmQtc3BhY2luZzogMC4xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbiNwcm9qZWN0LWRpYWxvZyBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4jcHJvamVjdC1kaWFsb2cgLmZvcm0tYWN0aW9ucyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnByb2plY3Qtc2VjdGlvbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tbWVkaW0tZm9udCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2plY3Qtc2VjdGlvbiAuYWRkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRvcDogLTEwJTtcbiAgbGVmdDogNTUlO1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnByb2plY3QtaXRlbTpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tYmxhY2spO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG5cbi5wcm9qZWN0LWl0ZW0gaW1nIHtcbiAgLS1zaXplOiA1NXB4O1xuICB3aWR0aDogdmFyKC0tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnByb2plY3QtaXRlbS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkOyAqL1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ucHJvamVjdC1jb250YWluZXItdGl0bGUge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmFkZCB7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5yb3RhdGUtb2JqZWN0OmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBzcGluIDAuM3MgbGluZWFyIGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42NTEpO1xufVxuXG4ucm90YXRlLW9iamVjdDphY3RpdmUge1xuICBhbmltYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IGdvbGQ7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5saXN0LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4ubGlzdC1pdGVtICoge1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LWl0ZW0taGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxpc3QtaXRlbS10aXRsZSB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxpc3QtaXRlbS1pbWcge1xuICAtLXNpemU6IDIwcHg7XG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XG4gIG1heC1oZWlnaHQ6IHZhcigtLXNpemUpO1xufVxuXG4ubGlzdC1pdGVtLWltZzpob3ZlciB7XG4gIC0tc2l6ZTogMzBweDtcbn1cblxuLmxpc3QtaXRlbS1kZXNjcmlwdGlvbiB7XG4gIC0tbWF4LWxpbmVzOiAxO1xuICAtLWxpbmUtaGVpZ2h0OiAxLjc7XG5cbiAgbWF4LWhlaWdodDogY2FsYyh2YXIoLS1tYXgtbGluZXMpICogMTVweCAqIHZhcigtLWxpbmUtaGVpZ2h0KSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3b3JkLXNwYWNpbmc6IDFweDtcbn1cbi5leHBhbmQtYnRuIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spOyAqL1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLmV4cGFuZC1idG46aG92ZXIge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTsgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cblxuLmV4cGFuZC1idG46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5leHBhbmQtYnRuOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxpc3QtaXRlbS1kZXNjcmlwdGlvbjpoYXMoKyAuZXhwYW5kLWJ0bjpjaGVja2VkKSB7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG59XG5cbi8qIC5saXN0LWl0ZW0tZGVzY3JpcHRpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBjYWxjKDE1cHggKiB2YXIoLS1saW5lLWhlaWdodCkpO1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogODAlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgdmFyKC0td2hpdGUpKTtcbn0gKi9cblxuLmxpc3QtaXRlbS1kYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxpc3QtaXRlbS1wcmlvcml0eS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1JTtcbiAgYm90dG9tOiA1JTtcbn1cblxuLmxpc3QtaXRlbS1wcmlvcml0eSB7XG4gIC0tc2l6ZTogMjVweDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaXplKTtcbiAgbWF4LWhlaWdodDogdmFyKC0tc2l6ZSk7XG59XG5cbi5saXN0LWl0ZW0tc3RhdHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMi41JTtcbiAgYm90dG9tOiA1MCU7XG59XG5cbi5saXN0LWl0ZW0tZWRpdCB7XG4gIG1heC13aWR0aDogMzBweDtcbiAgbWF4LWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3LjUlO1xuICBib3R0b206IDE1cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5saXN0LWl0ZW0tZWRpdDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbn1cblxuLmxpc3QtaXRlbS1kZWxldGUge1xuICBtYXgtd2lkdGg6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTIuNSU7XG4gIGJvdHRvbTogMTdweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLmxpc3QtaXRlbS1kZWxldGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XG59XG5cbi8qIG1vZGFsIHN0eWxpbmcgKi9cbiNpdGVtLWRpYWxvZyB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB3b3JkLXNwYWNpbmc6IDAuMXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4jaXRlbS1kaWFsb2cgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0IHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkI7MERBQytDO0VBQy9DLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCOztFQUVsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNi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ZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImhhcnVrYXplXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2hhcnVrYXplLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi9oYXJ1a2F6ZS13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgLS1ibGFjazogIzA0MDQwNDtcXG4gIC0td2hpdGU6ICNlNGU0ZTQ7XFxuICAtLWxpZ2h0LWdyZXk6ICNhY2FjYWM7XFxuICAtLWdyZXk6ICM3ZTdlN2U7XFxuICAtLWRhcmstZ3JleTogIzRmNGY0ZjtcXG4gIC0tc21hbGwtZm9udDogMjVweDtcXG4gIC0tbWVkaW0tZm9udDogMzVweDtcXG4gIC0tbGFyZ2UtZm9udDogNDVweDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiaGFydWthemVcXFwiO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4uem9vbWVkLWltYWdlIHtcXG4gIC0tc2l6ZTogMTAwcHg7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMzUpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNzVweDtcXG4gIG1hcmdpbi1sZWZ0OiA0NTBweDtcXG59XFxuXFxuLmFjdGlvbnMge1xcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEycHggN3B4O1xcbn1cXG5cXG5zaWRlLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbi8qIC5wcm9qZWN0cyB7XFxufSAqL1xcblxcbiNwcm9qZWN0LWRpYWxvZyB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XFxuICB3b3JkLXNwYWNpbmc6IDAuMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuI3Byb2plY3QtZGlhbG9nIC5mb3JtLWFjdGlvbnMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbWVkaW0tZm9udCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24gLmFkZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0b3A6IC0xMCU7XFxuICBsZWZ0OiA1NSU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1ibGFjayk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gaW1nIHtcXG4gIC0tc2l6ZTogNTVweDtcXG4gIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tbGFiZWwge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcXG59XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDsgKi9cXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmFkZCB7XFxuICBtYXJnaW4tbGVmdDogMyU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG4ucm90YXRlLW9iamVjdDpob3ZlciB7XFxuICBhbmltYXRpb246IHNwaW4gMC4zcyBsaW5lYXIgaW5maW5pdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG59XFxuXFxuLnJvdGF0ZS1vYmplY3Q6YWN0aXZlIHtcXG4gIGFuaW1hdGlvbjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IGdvbGQ7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubGlzdC1pdGVtLWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWl0ZW0tdGl0bGUge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0LWl0ZW0taW1nIHtcXG4gIC0tc2l6ZTogMjBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBtYXgtaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG59XFxuXFxuLmxpc3QtaXRlbS1pbWc6aG92ZXIge1xcbiAgLS1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLWRlc2NyaXB0aW9uIHtcXG4gIC0tbWF4LWxpbmVzOiAxO1xcbiAgLS1saW5lLWhlaWdodDogMS43O1xcblxcbiAgbWF4LWhlaWdodDogY2FsYyh2YXIoLS1tYXgtbGluZXMpICogMTVweCAqIHZhcigtLWxpbmUtaGVpZ2h0KSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdvcmQtc3BhY2luZzogMXB4O1xcbn1cXG4uZXhwYW5kLWJ0biB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spOyAqL1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG59XFxuXFxuLmV4cGFuZC1idG46aG92ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7ICovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbn1cXG5cXG4uZXhwYW5kLWJ0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3Njcm9sbC1vcGVuLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZXhwYW5kLWJ0bjpjaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICB3aWR0aDogNDVweDtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3Njcm9sbC1jbG9zZWQucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5saXN0LWl0ZW0tZGVzY3JpcHRpb246aGFzKCsgLmV4cGFuZC1idG46Y2hlY2tlZCkge1xcbiAgbWF4LWhlaWdodDogbm9uZTtcXG59XFxuXFxuLyogLmxpc3QtaXRlbS1kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiBjYWxjKDE1cHggKiB2YXIoLS1saW5lLWhlaWdodCkpO1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgdmFyKC0td2hpdGUpKTtcXG59ICovXFxuXFxuLmxpc3QtaXRlbS1kYXRlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNSU7XFxuICBib3R0b206IDUlO1xcbn1cXG5cXG4ubGlzdC1pdGVtLXByaW9yaXR5IHtcXG4gIC0tc2l6ZTogMjVweDtcXG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBtYXgtaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG59XFxuXFxuLmxpc3QtaXRlbS1zdGF0dXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTIuNSU7XFxuICBib3R0b206IDUwJTtcXG59XFxuXFxuLmxpc3QtaXRlbS1lZGl0IHtcXG4gIG1heC13aWR0aDogMzBweDtcXG4gIG1heC1oZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDcuNSU7XFxuICBib3R0b206IDE1cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbn1cXG5cXG4ubGlzdC1pdGVtLWVkaXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xcbn1cXG5cXG4ubGlzdC1pdGVtLWRlbGV0ZSB7XFxuICBtYXgtd2lkdGg6IDMwcHg7XFxuICBtYXgtaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxMi41JTtcXG4gIGJvdHRvbTogMTdweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbi5saXN0LWl0ZW0tZGVsZXRlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcXG59XFxuXFxuLyogbW9kYWwgc3R5bGluZyAqL1xcbiNpdGVtLWRpYWxvZyB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHdvcmQtc3BhY2luZzogMC4xcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jaXRlbS1kaWFsb2cgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgaW5wdXQge1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgc2VsZWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5mb3JtLWFjdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGRhdGVIYW5kbGVyID0ge1xuICBnZXRUb2RheXNEYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLnJlYWRhYmxlRGF0ZSh0b2RheSk7XG4gIH0sXG4gIHJlYWRhYmxlRGF0ZTogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBsZXQgbG9jYWxlID0gXCJlbi1VU1wiO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcobG9jYWxlLCBvcHRpb25zKTtcbiAgfSxcbiAgdmFsaWRhdGVEYXRlOiBmdW5jdGlvbiAoaW5wdXREYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZGFibGVEYXRlKG5ldyBEYXRlKGlucHV0RGF0ZSkpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0ZUhhbmRsZXI7XG4iLCJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9maXJlLnBuZ1wiO1xuaW1wb3J0IGNyZWF0ZUl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IGthdGFuYSBmcm9tIFwiLi9rYXRhbmEucG5nXCI7XG5pbXBvcnQgcHJvamVjdEltYWdlIGZyb20gXCIuL3BlcnNvbmFsLnBuZ1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL3F1aWxsLnBuZ1wiO1xuaW1wb3J0IHNodXJpa2VuIGZyb20gXCIuL3NodXJpa2VuQWRkLnN2Z1wiO1xuaW1wb3J0IExvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgdG9vbHRpcCBmcm9tIFwiLi90b29sdGlwLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEaXNwbGF5SGFuZGxlcihwcm9qKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgbG9jYWxTdG9yYWdlSGFuZGxlciA9IExvY2FsU3RvcmFnZUhhbmRsZXIoKTtcbiAgLy9sYXRlciB3aWxsIHVzZSBwZXJzaXN0YW5jZSBsYXllciwgdGhpcyBpcyB0ZW1wb3JhcnlcblxuICAvL3NwbGl0IGludG8gY3JlYXRlIHByb2osIGFkZCBpdGVtcywgcmVtb3ZlIGl0ZW1zXG4gIC8vY3JlYXRlIGxvYWRQcm9qZWN0IGZ1bmN0aW9uIHRvIGxvYWQgZnJvbSBwZXJzaXN0YW5jZSBsYXllclxuXG4gIGZ1bmN0aW9uIGluaXREaXNwbGF5SGFubGRlcihwcm9qZWN0cykge1xuICAgIC8vIGZpbGxJdGVtRm9ybSgpO1xuICAgIGFjdGl2YXRlQWRkUHJvamVjdEJ1dHRvbigpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2osIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IHJlbmRlclByb2plY3RJdGVtKHByb2opO1xuICAgICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICAgICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuXG4gICAgICBpZiAoaW5kZXggPT0gMCkgcHJvamVjdEl0ZW0uY2xpY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlQWRkUHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBhZGRQcm9qQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlY3Rpb24gaW1nXCIpO1xuICAgIGFkZFByb2pCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RGb3JtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kaWFsb2dcIik7XG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBmaWxsUHJvamVjdEZvcm0oKS50aGVuKChwcm9qKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qKTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSByZW5kZXJQcm9qZWN0SXRlbShwcm9qKTtcbiAgICAgIGxvY2FsU3RvcmFnZUhhbmRsZXIuYWRkUHJvamVjdChwcm9qKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxsUHJvamVjdEZvcm0oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRpYWxvZyBmb3JtXCIpO1xuXG4gICAgICBjb25zdCBzdWJtaXRFdmVudCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGlhbG9nXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICAgICAgY29uc3QgcHJvakltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWltYWdlXCIpO1xuXG4gICAgICAgIC8vIGNvbnN0IHByb2plY3QgPSByZW5kZXJQcm9qZWN0SXRlbSh7XG4gICAgICAgIC8vICAgcHJvalRpdGxlOiBwcm9qVGl0bGUudmFsdWUsXG4gICAgICAgIC8vICAgcHJvakltYWdlOiBwcm9qSW1hZ2UudmFsdWUsXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vaGF2ZSB0byBhZGQgcGF0aCB0byBpbWcgaW4gcHJvamVjdCBvYmpcbiAgICAgICAgLy8qcHJvaiBjcmVhdGlvblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qVGl0bGUudmFsdWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSW5zaWRlIHByb2ogYWRkIGxpc3RlbmVyICR7cHJvalRpdGxlLnZhbHVlfWApO1xuICAgICAgICBwcm9qVGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBwcm9qSW1hZ2UudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJbnNpZGUgU3VibWl0IGZ1bmN0aW9uOiAke2l0ZW19YCk7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNhbmNlbEV2ZW50ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kaWFsb2dcIik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYEluc2lkZSBDYW5jZWwgZnVuY3Rpb25gKTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBzdWJtaXRFdmVudChlKTtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmVzb2x2ZShwcm9qZWN0KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBjYW5jZWxIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGNhbmNlbEV2ZW50KGUpO1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKHByb2plY3QpO1xuICAgICAgfTtcbiAgICAgIC8vaWYgcG9zc2libGUgc2VwZXJhdGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gcmVzb2x1dGlvblxuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcblxuICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRpYWxvZyAuY2FuY2VsXCIpO1xuICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SGFuZGxlcik7XG4gICAgICAgIGNhbmNlbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsSGFuZGxlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0SXRlbShwcm9qSXRlbSkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuICAgIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgLy8gYWxlcnQocHJvakl0ZW0ucHJvamVjdE5hbWUpO1xuICAgICAgcmVuZGVyUHJvamVjdFVubG9hZCgpO1xuICAgICAgcmVuZGVyUHJvamVjdExvYWQocHJvakl0ZW0pO1xuICAgIH0pO1xuXG4gICAgLy9yZXBsYWNlIHdpdGggcHJvakl0ZW0uaW1nXG4gICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nRWxlbWVudC5zcmMgPSBcIi4uL3NyYy9wZXJzb25hbC5wbmdcIjtcbiAgICBpbWdFbGVtZW50LmFsdCA9IFwicHJvamVjdC1pdGVtLWltYWdlXCI7XG5cbiAgICBjb25zdCBwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0tbGFiZWxcIik7XG4gICAgcEVsZW1lbnQuaW5uZXJUZXh0ID0gcHJvakl0ZW0ucHJvamVjdE5hbWU7XG5cbiAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChpbWdFbGVtZW50KTtcbiAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwRWxlbWVudCk7XG5cbiAgICByZXR1cm4gcHJvamVjdEl0ZW07XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0TG9hZChwcm9qKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7cHJvai5wcm9qZWN0TmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIil9YCk7XG5cbiAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qVGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyLXRpdGxlXCIpO1xuICAgIHByb2pUaXRsZS5pbm5lckhUTUwgPSBwcm9qLnByb2plY3ROYW1lO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcblxuICAgIGNvbnN0IHByb2pMaXN0ID0gW107XG4gICAgcHJvai5pdGVtc0xpc3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHByb2pMaXN0W2luZGV4XSA9IHJlbmRlckxpc3RJdGVtKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcHJvakxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYWRkQnRuLnNyYyA9IHNodXJpa2VuO1xuICAgIGFkZEJ0bi5hbHQgPSBcIkFkZFwiO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwicm90YXRlLW9iamVjdFwiLCBcImFkZFwiKTtcbiAgICAvL21heSByZW1vdmUgdGhpcywgaWYgbm90IHVzZWRcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIiwgcHJvai5wcm9qZWN0TmFtZSk7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gICAgYWN0aXZhdGVBZGRJdGVtQnV0dG9uKHByb2opO1xuICAgIGFjdGl2YXRlRWRpdEl0ZW1CdXR0b24ocHJvaik7XG4gICAgYWN0aXZhdGVEZWxldGVJdGVtQnV0dG9uKHByb2opO1xuICB9XG5cbiAgLy9wYXNzZWQgcHJvamVjdENvbnRhaW5lciwgY2hhbmdlIGlmIG5lZWRlZFxuICBmdW5jdGlvbiBhY3RpdmF0ZUVkaXRJdGVtQnV0dG9uKHByb2opIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtwcm9qLnByb2plY3ROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX1gXG4gICAgKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpc3QtaXRlbS1lZGl0XCIpKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xuICAgICAgICBpZiAobGlzdEl0ZW0pIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20obGlzdEl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihcbiAgICAgICAgICAgIGxpc3RJdGVtXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGVkaXRJdGVtRm9ybShwcm9qLCBpbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhY3RpdmF0ZURlbGV0ZUl0ZW1CdXR0b24ocHJvaikge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3Byb2oucHJvamVjdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfWBcbiAgICApO1xuICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlzdC1pdGVtLWRlbGV0ZVwiKSkge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKTtcbiAgICAgICAgaWYgKGxpc3RJdGVtKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKGxpc3RJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YoXG4gICAgICAgICAgICBsaXN0SXRlbVxuICAgICAgICAgICk7XG4gICAgICAgICAgcHJvai5yZW1vdmVJdGVtKGluZGV4IC0gMSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlSGFuZGxlci51cGRhdGVQcm9qZWN0KHByb2opO1xuICAgICAgICAgIHJlbmRlckl0ZW1MaXN0UmVmcmVzaChwcm9qKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdFVubG9hZCgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVycy5mb3JFYWNoKChwcm9qZWN0Q29udGFpbmVyKSA9PiB7XG4gICAgICBtYWluLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGVBZGRJdGVtQnV0dG9uKHByb2opIHtcbiAgICAvLyBUbyBwcmV2ZW50IG11bHRpcGxlIGV2ZW50IGxpc3RlbmVycyBvbiBhIGJ1dHRvblxuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtwcm9qLnByb2plY3ROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX0gLmFkZGBcbiAgICApO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhZGRJdGVtRm9ybShwcm9qKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEl0ZW1Gb3JtKHByb2opIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tZGlhbG9nXCIpO1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcblxuICAgIGZpbGxJdGVtRm9ybSgpLnRoZW4oKGl0ZW0pID0+IHtcbiAgICAgIC8vIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaXRlbSBhcyBudWxsXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRlbSBpcyBub3QgbnVsbFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHJldHVybmVkIGZyb20gZnVuY3Rpb246ICR7aXRlbX1gKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvaik7XG4gICAgICAgIHByb2ouYWRkSXRlbShpdGVtKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlSGFuZGxlci51cGRhdGVQcm9qZWN0KHByb2opO1xuICAgICAgICByZW5kZXJJdGVtTGlzdFJlZnJlc2gocHJvaik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0SXRlbUZvcm0oZWRpdFByb2osIGluZGV4KSB7XG4gICAgLy91c2UgZGlmZiBtb2RhbFxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbS1kaWFsb2dcIik7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gICAgZmlsbEl0ZW1Gb3JtKCkudGhlbigoZWRpdGVkSXRlbSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgaWYgKGVkaXRlZEl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJldHVybmluZyBpdGVtIGFzIG51bGxcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpdGVtIGlzIG5vdCBudWxsXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbjogJHtpdGVtfWApO1xuICAgICAgICAvLyplZmZpY2llbmN5XG4gICAgICAgIC8vY2hhbmdlIHNlcGVyYXRlbHkgaW5zdGVhZCBvZiBsb2FkaW5nIHdob2xlIG1vZHVsZVxuICAgICAgICBlZGl0UHJvai5yZXBsYWNlSXRlbShpbmRleCwgZWRpdGVkSXRlbSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZUhhbmRsZXIudXBkYXRlUHJvamVjdChlZGl0UHJvaik7XG4gICAgICAgIHJlbmRlckl0ZW1MaXN0UmVmcmVzaChlZGl0UHJvaik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2opO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsbEl0ZW1Gb3JtKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXRlbS1kaWFsb2cgZm9ybVwiKTtcblxuICAgICAgY29uc3Qgc3VibWl0RXZlbnQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtLWRpYWxvZ1wiKTtcblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjaXRlbS10aXRsZVwiKTtcbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2l0ZW0tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IGl0ZW1Ob3RlcyA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNpdGVtLW5vdGVzXCIpO1xuICAgICAgICBjb25zdCBpdGVtRHVlRGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNpdGVtLWR1ZS1kYXRlXCIpO1xuICAgICAgICBjb25zdCBpdGVtUHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjaXRlbS1wcmlvcml0eVwiKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVkU3RhdHVzID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZC1zdGF0dXNcIik7XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgaXRlbVRpdGxlLnZhbHVlLFxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICBpdGVtTm90ZXMudmFsdWUsXG4gICAgICAgICAgaXRlbUR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgaXRlbVByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgIGNvbXBsZXRlZFN0YXR1cy5jaGVja2VkXG4gICAgICAgICk7XG5cbiAgICAgICAgaXRlbVRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgaXRlbU5vdGVzLnZhbHVlID0gXCJcIjtcbiAgICAgICAgaXRlbUR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBpdGVtUHJpb3JpdHkudmFsdWUgPSAzO1xuICAgICAgICBjb21wbGV0ZWRTdGF0dXMudmFsdWUgPSBmYWxzZTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSW5zaWRlIFN1Ym1pdCBmdW5jdGlvbjogJHtpdGVtfWApO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjYW5jZWxFdmVudCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW0tZGlhbG9nXCIpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJbnNpZGUgQ2FuY2VsIGZ1bmN0aW9uYCk7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3VibWl0RXZlbnQoZSk7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgY2FuY2VsSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjYW5jZWxFdmVudChlKTtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICAgIH07XG4gICAgICAvL2lmIHBvc3NpYmxlIHNlcGVyYXRlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHJlc29sdXRpb25cbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXRlbS1kaWFsb2cgLmNhbmNlbFwiKTtcbiAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsSGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gICAgICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIpO1xuICAgICAgICBjYW5jZWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySXRlbUxpc3RSZWZyZXNoKHByb2opIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtwcm9qLnByb2plY3ROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX1gXG4gICAgKTtcblxuICAgIGNvbnN0IGxpc3RJdGVtcyA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGAuJHtwcm9qLnByb2plY3ROYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKX0gbGkubGlzdC1pdGVtYFxuICAgICk7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3Byb2oucHJvamVjdE5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfSAuYWRkYFxuICAgICk7XG5cbiAgICBwcm9qLml0ZW1zTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gcmVuZGVyTGlzdEl0ZW0oZWxlbWVudCk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEJlZm9yZShpdGVtLCBhZGRCdG4pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gbmVlZCB0byBhZGQgZWRpdCBhbmRcbiAgZnVuY3Rpb24gcmVuZGVyTGlzdEl0ZW0oaXRlbSkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XG5cbiAgICBjb25zdCBoZWFkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkRGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0taGVhZFwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG5cbiAgICBjb25zdCB0b29sdGlwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0b29sdGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0taW1nXCIpO1xuICAgIHRvb2x0aXBJbWcuc3JjID0gdG9vbHRpcDtcbiAgICB0b29sdGlwSW1nLmFsdCA9IFwidG9vbHRpcFwiO1xuICAgIHRvb2x0aXBJbWcudGl0bGUgPSBpdGVtLm5vdGVzO1xuXG4gICAgLy9oYXZlIHRvIGFkZCBjcmVhdGVkIGFuZCBkdWVEYXRlIGluIGNvbnRhaW5lclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tZGF0ZVwiKTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuXG4gICAgaGVhZERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZERpdi5hcHBlbmRDaGlsZCh0b29sdGlwSW1nKTtcbiAgICBoZWFkRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGV4cGFuZENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGV4cGFuZENoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgZXhwYW5kQ2hlY2suY2xhc3NMaXN0LmFkZChcImV4cGFuZC1idG5cIik7XG5cbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1wcmlvcml0eS1jb250YWluZXJcIik7XG5cbiAgICAvL25lZWQgdG8gZHluYW1pY2FsbHkgY2hhbmdlIGJhc2VkIG9uIGR1ZVxuICAgIC8vIGRhdGUgY2xvc2VuZXNzXG4gICAgLy9pbnRlZ3JhdGUgd2hlbiBhZGRpbmcgZGF0ZSBtb2R1bGVcbiAgICBsZXQgcHJpb3JpdHlDbHIgPSBcImdyZWVuXCI7XG4gICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT0gMSkge1xuICAgICAgcHJpb3JpdHlDbHIgPSBcInJlZFwiO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PSAyKSB7XG4gICAgICBwcmlvcml0eUNsciA9IFwib3JhbmdlXCI7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IGl0ZW0ucHJpb3JpdHk7IGkgPD0gMzsgaSsrKSB7XG4gICAgICBjb25zdCBwcmlvcml0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBwcmlvcml0eUltZy5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXByaW9yaXR5XCIpO1xuICAgICAgcHJpb3JpdHlJbWcuc3JjID0ga2F0YW5hO1xuICAgICAgcHJpb3JpdHlJbWcuYWx0ID0gXCJsZXZlbFwiO1xuICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbWcpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1zdGF0dXNcIik7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGl0ZW0uY29tcGxldGVkU3RhdHVzO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWRpdEJ1dHRvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICBlZGl0QnV0dG9uLmFsdCA9IFwiZWRpdCBpY29uXCI7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWVkaXRcIik7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgIGRlbGV0ZUJ1dHRvbi5hbHQgPSBcImRlbGV0ZSBpY29uXCI7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tZGVsZXRlXCIpO1xuXG4gICAgbGkuc3R5bGUuYm9yZGVyTGVmdCA9IGA1cHggc29saWQgJHtwcmlvcml0eUNscn1gO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQoaGVhZERpdik7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGxpLmFwcGVuZENoaWxkKGV4cGFuZENoZWNrKTtcbiAgICBsaS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gICAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGxpLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gbGk7XG4gIH1cblxuICBpbml0RGlzcGxheUhhbmxkZXIocHJvaik7XG4gIC8vIG5lZWQgdG8gYWRkIGEgdG9nZ2xlIGNoZWNrYm94IGZ1bmN0aW9uIGZvclxuICByZXR1cm4ge1xuICAgIHJlbmRlclByb2plY3RMb2FkLFxuICAgIHJlbmRlclByb2plY3RVbmxvYWQsXG4gICAgcmVuZGVyUHJvamVjdEl0ZW0sXG4gIH07XG59XG4iLCJpbXBvcnQgZGF0ZUhhbmRsZXIgZnJvbSBcIi4vZGF0ZUhhbmRsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSXRlbShcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBub3RlcyxcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIGNvbXBsZXRlZFN0YXR1c1xuKSB7XG4gIGNvbnN0IF9kYXRlQ3JlYXRlZCA9IGRhdGVIYW5kbGVyLmdldFRvZGF5c0RhdGUoKTtcbiAgbGV0IF9kdWVEYXRlID0gZGF0ZUhhbmRsZXIudmFsaWRhdGVEYXRlKGR1ZURhdGUpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGRhdGVDcmVhdGVkKCkge1xuICAgICAgcmV0dXJuIF9kYXRlQ3JlYXRlZDtcbiAgICB9LFxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIF9kdWVEYXRlO1xuICAgIH0sXG4gICAgc2V0IGR1ZURhdGUobmV3RGF0ZSkge1xuICAgICAgX2R1ZURhdGUgPSBkYXRlSGFuZGxlci52YWxpZGF0ZURhdGUobmV3RGF0ZSk7XG4gICAgfSxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBub3RlcyxcbiAgICBwcmlvcml0eSxcbiAgICBjb21wbGV0ZWRTdGF0dXMsXG4gIH07XG59XG4iLCJsZXQgbGlzdFByb3RvdHlwZSA9IHtcbiAgYWRkSXRlbShpdGVtKSB7XG4gICAgdGhpcy5pdGVtc0xpc3QucHVzaChpdGVtKTtcbiAgfSxcblxuICByZXBsYWNlSXRlbShpbmRleCwgbmV3SXRlbSkge1xuICAgIHRoaXMuaXRlbXNMaXN0W2luZGV4XSA9IG5ld0l0ZW07XG4gIH0sXG5cbiAgcmVtb3ZlSXRlbShpbmRleCkge1xuICAgIHRoaXMuaXRlbXNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0UHJvdG90eXBlO1xuIiwiaW1wb3J0IGxpc3RQcm90b3R5cGUgZnJvbSBcIi4vbGlzdFwiO1xuLy9pbWcgcGF0aCBbcHJvcGVydHldXG4vL3Byb2plY3QgY29sb3IgcHJvcGVydHlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvak5hbWUsIGxpc3QgPSBbXSkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbGlzdFByb3RvdHlwZSwge1xuICAgIHByb2plY3ROYW1lOiBwcm9qTmFtZSxcbiAgICAvLyBwcm9qZWN0SW1hZ2U6IHByb2pJbWcsXG4gICAgaXRlbXNMaXN0OiBbLi4ubGlzdF0sXG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2VIYW5kbGVyKCkge1xuICBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdERhdGEubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gY3JlYXRlUHJvamVjdChwcm9qZWN0LnByb2plY3ROYW1lLCBwcm9qZWN0Lml0ZW1zTGlzdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG5cbiAgLy8gY2hlY2sgZm9yIG5vdCBhbGxvd2luZyBtdXRsaXBsZSBzYW1lIHByb2plY3RcbiAgZnVuY3Rpb24gYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcblxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUgPT09IG5ld1Byb2plY3QucHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgc2F2ZVByb2plY3RzKHByb2plY3RzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KHVwZGF0ZWRQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcblxuICAgIC8vIGNvbnN0IGluZGV4ID0gaW5kZXhGaW5kZXIocHJvamVjdHMsIHVwZGF0ZVByb2plY3QpO1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QucHJvamVjdE5hbWUgPT09IHVwZGF0ZWRQcm9qZWN0LnByb2plY3ROYW1lXG4gICAgKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHByb2plY3RzW2luZGV4XSA9IHVwZGF0ZWRQcm9qZWN0O1xuICAgICAgc2F2ZVByb2plY3RzKHByb2plY3RzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0IG5vdCBmb3VuZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRQcm9qZWN0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RUb1JlbW92ZSkge1xuICAgIGNvbnN0IHByb2plY3RzID0gbG9hZFByb2plY3RzKCk7XG5cbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0VG9SZW1vdmUucHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYFByb2plY3QgZG9lcyBub3QgZXhpc3QgJHtwcm9qZWN0VG9SZW1vdmV9YCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkUHJvamVjdHMsXG4gICAgc2F2ZVByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlRGlzcGxheUhhbmRsZXIgZnJvbSBcIi4vZGlzcGxheUhhbmRsZXJcIjtcbmltcG9ydCBjcmVhdGVJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBjcmVhdGVMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBMb2NhbFN0b3JhZ2VIYW5kbGVyIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy9zaW5jZSBzdG9yYWdlIGRvZXMgbm90IHNhdmUgZnVuY3Rpb25zXG4vL25lZWQgdG8gbWFrZSBoYWJpdCBvZiB1c2luZyBwcm90b3R5cGUgYmFzZXMgZnVuY3Rpb25zXG5cbmNvbnN0IGl0ZW0xID0gY3JlYXRlSXRlbShcbiAgXCJmaXNoIHRha2VvdXRcIixcbiAgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNlZCBkb2xvcmUgZWEgZmFjZXJlIGRlYml0aXMgc2ludCBvcHRpbyBpc3RlIG1vbGVzdGlhZS4gQXRxdWUgY29ycG9yaXMgZnVnaXQgc2VxdWkgZXhlcmNpdGF0aW9uZW0gaW5jaWR1bnQgc2FwaWVudGUgbW9sbGl0aWEsIG1pbnVzIHZpdGFlLCB2ZXJpdGF0aXMgZGVzZXJ1bnQgc2FlcGUhXG4gICAgUGxhY2VhdCBhbmltaSBpbiBlYSBhYiBmYWNpbGlzIGRpc3RpbmN0aW8gbWF4aW1lLCB1dCB2ZXJvPyBQYXJpYXR1ciBhc3Blcm5hdHVyLCB2b2x1cHRhcyBlYXF1ZSBvZGlvLCBtb2xlc3RpYWUgcmVpY2llbmRpcyByZWN1c2FuZGFlIHVsbGFtIGhpYyBhc3N1bWVuZGEgdXQgbW9sZXN0aWFzLCBkb2xvcnVtIGN1bSBzdXNjaXBpdC4gVm9sdXB0YXMsIHNpbnQgY3VtcXVlLiBBcGVyaWFtIWAsXG4gIFwiSSBuZWVkIHRvIGdldCBzb21lIGZpc2ggdG8gbWFrZSBzb21lIHRha3V5YWtpIHN1c2hpXCIsXG4gIFwiMjAyMy04LTE1XCIsXG4gIDEsXG4gIGZhbHNlXG4pO1xuY29uc3QgaXRlbTIgPSBjcmVhdGVJdGVtKFxuICBcIldlZWRpbmdcIixcbiAgXCJXZWVkIG91dCB0aGUgeWFyZFwiLFxuICBcIkdldCBzb21lIHdlZWQga2lsbGVyIGZvciBuZXh0IG1vbnRoIHRvIGNvdmVyIG1vcmUgZ3JvdW5kXCIsXG4gIFwiMjAyMy0xMS0zMFwiLFxuICAzLFxuICB0cnVlXG4pO1xuY29uc3QgaXRlbTMgPSBjcmVhdGVJdGVtKFxuICBcIlNlYXJjaGluZ1wiLFxuICBcImZpbmQga25pZmUgY2FyIGtleXNcIixcbiAgXCJTZWFyY2ggcm9vbSBmcm9tIHRpcCB0byB0b2Ugb3IgZWxzZSBjaGFuZ2Uga2V5c1wiLFxuICBcIjIwMjMtMTEtMzBcIixcbiAgXCJIaWdoXCIsXG4gIGZhbHNlXG4pO1xuXG5jb25zdCBwcm9qZWN0MSA9IGNyZWF0ZVByb2plY3QoXCJNaXNjZWxsYW5lb3VzXCIpO1xucHJvamVjdDEuYWRkSXRlbShpdGVtMSk7XG5wcm9qZWN0MS5hZGRJdGVtKGl0ZW0yKTtcblxuLy8gY29uc29sZS5sb2cocHJvamVjdDEpO1xuXG4vLyBjb25zdCBwcm9qZWN0MiA9IGNyZWF0ZVByb2plY3QoXCJGaW5kZXJcIik7XG4vLyBwcm9qZWN0Mi5hZGRJdGVtKGl0ZW0zKTtcblxuY29uc3QgbG9jYWxTdG9yYWdlSGFuZGxlciA9IExvY2FsU3RvcmFnZUhhbmRsZXIoKTtcbi8vIGNvbnN0IHByb2plY3RzID0gW107XG4vLyBwcm9qZWN0cy5wdXNoKHByb2plY3QxKTtcbi8vIGxvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKHByb2plY3RzKTtcbi8vIGxvY2FsU3RvcmFnZUhhbmRsZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0MSk7XG5sZXQgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2VIYW5kbGVyLmxvYWRQcm9qZWN0cygpO1xuLy8gY29uc3QgdGVzdGVyID0gbG9jYWxTdG9yYWdlSGFuZGxlci5sb2FkUHJvamVjdHMoKTtcbi8vIGNvbnNvbGUubG9nKHRlc3Rlcik7XG4vLyBsb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhwcm9qZWN0cyk7XG4vLyB0ZXN0ZXIgPSBsb2NhbFN0b3JhZ2VIYW5kbGVyLmxvYWRQcm9qZWN0cygpO1xuLy8gY29uc29sZS5sb2codGVzdGVyKTtcblxuLy8gcHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuLy8gbG9jYWxTdG9yYWdlSGFuZGxlci5hZGRQcm9qZWN0KHByb2plY3RzKTtcblxuLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xuLy8gY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJQZXJzb25hbFwiLCBcImJsdWVcIik7XG4vLyBwcm9qZWN0LmFkZEl0ZW0oaXRlbTEpO1xuLy8gcHJvamVjdC5hZGRJdGVtKGl0ZW0yKTtcblxuLy8gcHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlIYW5kbGVyID0gY3JlYXRlRGlzcGxheUhhbmRsZXIocHJvamVjdHMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
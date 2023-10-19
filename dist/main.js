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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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
  justify-content: space-between;
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

.project-section {
  font-size: var(--medim-font);
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
  padding: 40px 80px;
}

.project-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
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

.project-container .add {
  margin-left: 3%;
  margin-top: 1%;
  width: 50px;
  height: 50px;
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
  font-size: 15px;
  word-spacing: 1px;
}

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

/* modal styling */
dialog {
  font-family: sans-serif;
  word-spacing: 0.1px;
  border-radius: 25px;
}

dialog form {
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"harukaze\";\n  src: url(\"./harukaze-webfont.woff2\") format(\"woff2\"),\n    url(\"./harukaze-webfont.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n  --black: #040404;\n  --white: #e4e4e4;\n  --light-grey: #acacac;\n  --grey: #7e7e7e;\n  --dark-grey: #4f4f4f;\n  --small-font: 25px;\n  --medim-font: 35px;\n  --large-font: 45px;\n\n  font-family: \"harukaze\";\n  letter-spacing: 1.2px;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  min-height: 100vh;\n  width: 100vw;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 120px 1fr;\n}\n\nheader {\n  background-color: var(--grey);\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 40px;\n}\n\n.zoomed-image {\n  --size: 100px;\n  width: var(--size);\n  height: var(--size);\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.logo {\n  width: 100%;\n  transform: scale(1.35);\n  transform-origin: center;\n}\n\n.actions {\n  margin-right: 50px;\n  gap: 10px;\n  display: flex;\n}\n\nbutton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 5px;\n  border-radius: 15px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\nbutton:hover {\n  background-color: var(--light-grey);\n  border: 1px solid white;\n  color: white;\n  padding: 12px 7px;\n}\n\nside-bar {\n  background-color: var(--light-grey);\n  grid-row: 2/3;\n  padding-left: 35px;\n}\n\n/* .projects {\n} */\n\n.project-section {\n  font-size: var(--medim-font);\n}\n\n.project-item {\n  display: flex;\n  gap: 10px;\n  justify-content: start;\n  align-items: center;\n  transition: all 0.1s ease-in-out;\n}\n\n.project-item:hover {\n  border-radius: 20px;\n  padding: 10px;\n  margin-right: 10px;\n  box-shadow: 0 0 10px var(--black);\n  transform: translateY(-5px);\n}\n\n.project-item img {\n  --size: 55px;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n}\n\n.project-item-label {\n  font-size: var(--small-font);\n}\n\nmain {\n  background-color: var(--white);\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 40px 80px;\n}\n\n.project-container {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  line-height: 35px;\n  background-color: var(--light-grey);\n  border-radius: 20px;\n  width: 100%;\n  height: fit-content;\n  padding: 25px;\n}\n\n.project-container-title {\n  font-size: 45px;\n  margin: 10px;\n}\n\n.project-container .add {\n  margin-left: 3%;\n  margin-top: 1%;\n  width: 50px;\n  height: 50px;\n}\n\n.rotate-object:hover {\n  animation: spin 0.3s linear infinite;\n  border-radius: 50%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.651);\n}\n\n.rotate-object:active {\n  animation: none;\n  box-shadow: 0 0 20px gold;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.list-item {\n  position: relative;\n  list-style: none;\n  font-family: sans-serif;\n  font-size: 25px;\n  margin-left: 10px;\n  background-color: var(--white);\n  padding: 20px;\n  border-radius: 20px;\n  padding-bottom: 60px;\n}\n\n.list-item * {\n  margin: 0;\n}\n\n.list-item-head {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n\n.list-item-title {\n  margin: 10px 0;\n  font-size: 25px;\n  position: relative;\n}\n\n.list-item-img {\n  --size: 20px;\n  max-width: var(--size);\n  max-height: var(--size);\n}\n\n.list-item-img:hover {\n  --size: 30px;\n}\n\n.list-item-description {\n  font-size: 15px;\n  word-spacing: 1px;\n}\n\n.list-item-date {\n  margin-left: auto;\n  font-size: 15px;\n}\n\n.list-item-priority-container {\n  position: absolute;\n  right: 5%;\n  bottom: 5%;\n}\n\n.list-item-priority {\n  --size: 25px;\n  max-width: var(--size);\n  max-height: var(--size);\n}\n\n.list-item-status {\n  position: absolute;\n  left: -2.5%;\n  bottom: 50%;\n}\n\n/* modal styling */\ndialog {\n  font-family: sans-serif;\n  word-spacing: 0.1px;\n  border-radius: 25px;\n}\n\ndialog form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-group {\n  min-width: 350px;\n}\n\n.form-group label {\n  display: inline-block;\n  min-width: 150px;\n}\n\n.form-group input {\n  min-width: 200px;\n}\n\n.form-group select {\n  text-align: center;\n  min-width: 200px;\n}\n\n.form-actions {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/item.js");
/* harmony import */ var _katana_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./katana.png */ "./src/katana.png");
/* harmony import */ var _shurikenAdd_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shurikenAdd.svg */ "./src/shurikenAdd.svg");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _tooltip_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip.svg */ "./src/tooltip.svg");







function createDisplayHandler() {
  const main = document.querySelector("main");
  let standardItem = (0,_item__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "Template Title",
    "Template description, just some random text that needs to be added",
    "These are the template notes",
    "2025-10-8",
    "Medium",
    true
  );

  //later will use persistance layer, this is temporary

  //split into create proj, add items, remove items
  //create loadProject function to load from persistance layer

  // function initDisplayHanlder() {
  //   initFormActions();
  // }

  function initFormActions() {
    return new Promise((resolve) => {
      const dialog = document.querySelector("dialog");
      const form = document.querySelector("dialog form");

      const itemTitle = form.querySelector("#item-title");
      const itemDescription = form.querySelector("#item-description");
      const itemNotes = form.querySelector("#item-notes");
      const itemDueDate = form.querySelector("#item-due-date");
      const itemPriority = form.querySelector("#item-priority");
      const completedStatus = form.querySelector("#completed-status");

      // Add event listeners for the form submission and cancel
      form.addEventListener(
        "submit",
        (e) => {
          e.preventDefault();

          const item = (0,_item__WEBPACK_IMPORTED_MODULE_1__["default"])(
            itemTitle.value,
            itemDescription.value,
            itemNotes.value,
            itemDueDate.value,
            itemPriority.value,
            completedStatus.checked
          );

          standardItem = item;

          itemTitle.value = "";
          itemDescription.value = "";
          itemNotes.value = "";
          itemDueDate.value = "";
          itemPriority.value = "";
          completedStatus.value = false;

          dialog.close();
          resolve(); // Resolve the Promise when the form is submitted
        },
        { once: true }
      );

      const cancelBtn = document.querySelector(".cancel");
      cancelBtn.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          dialog.close();
          resolve(); // Resolve the Promise when the form is canceled
        },
        { once: true }
      );
    });
  }

  function renderProject(proj) {
    const projectContainer = document.createElement("ul");
    projectContainer.classList.add("project-container");
    projectContainer.classList.add(`${proj.projectName}`);

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
    addBtn.src = _shurikenAdd_svg__WEBPACK_IMPORTED_MODULE_3__;
    addBtn.alt = "Add";
    addBtn.classList.add("rotate-object", "add");
    //may remove this, if not used
    addBtn.setAttribute("data-project-name", proj.projectName);

    projectContainer.appendChild(addBtn);

    main.appendChild(projectContainer);

    activateAddItemButton(proj);
  }

  async function activateAddItemButton(proj) {
    // To prevent multiple event listeners on a button
    const addBtn = document.querySelector(`.${proj.projectName} .add`);
    const dialog = document.querySelector("dialog");

    addBtn.addEventListener("click", async (e) => {
      dialog.showModal();

      await initFormActions();

      proj.addItem(standardItem);
      renderItemListRefresh(proj);
    });
  }

  function renderItemListRefresh(proj) {
    const projectContainer = document.querySelector(`.${proj.projectName}`);

    const listItems = projectContainer.querySelectorAll(
      `.${proj.projectName} li.list-item`
    );
    listItems.forEach((item) => {
      projectContainer.removeChild(item);
    });

    const addBtn = document.querySelector(`.${proj.projectName} .add`);

    proj.itemsList.forEach((element) => {
      const item = renderListItem(element);
      projectContainer.insertBefore(item, addBtn);
    });
  }

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
    tooltipImg.src = _tooltip_svg__WEBPACK_IMPORTED_MODULE_5__;
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

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("list-item-priority-container");

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

    li.appendChild(headDiv);
    li.appendChild(description);
    li.appendChild(priorityDiv);
    li.appendChild(checkbox);

    return li;
  }

  // need to add a toggle checkbox function for

  return { renderProject };
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHandler */ "./src/displayHandler.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/item.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




const item1 = (0,_item__WEBPACK_IMPORTED_MODULE_1__["default"])(
  "fish takeout",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore ea facere debitis sint optio iste molestiae. Atque corporis fugit sequi exercitationem incidunt sapiente mollitia, minus vitae, veritatis deserunt saepe!
    Placeat animi in ea ab facilis distinctio maxime, ut vero? Pariatur aspernatur, voluptas eaque odio, molestiae reiciendis recusandae ullam hic assumenda ut molestias, dolorum cum suscipit. Voluptas, sint cumque. Aperiam!`,
  "I need to get some fish to make some takuyaki sushi",
  "2023-8-15",
  "High",
  false
);

const item2 = (0,_item__WEBPACK_IMPORTED_MODULE_1__["default"])(
  "Weeding",
  "Weed out the yard",
  "Get some weed killer for next month to cover more ground",
  "2023-11-30",
  "Medium",
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

const projects = [];

const project = (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])("Personal");
project.addItem(item1);
project.addItem(item2);

const project2 = (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])("Gym");
project2.addItem(item3);
project2.addItem(item2);

projects.push(project);
projects.push(project2);

console.log(project);
console.log(project2);

document.addEventListener("DOMContentLoaded", () => {
  const displayHandler = (0,_displayHandler__WEBPACK_IMPORTED_MODULE_0__["default"])();
  displayHandler.renderProject(project);
  displayHandler.renderProject(project2);
});


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
    priority: parseInt(priority),
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
/* harmony export */   "default": () => (/* binding */ createList)
/* harmony export */ });
function createList() {
  let itemsList = [];

  function addItem(item) {
    itemsList.push(item);
  }

  function removeItem(index) {
    itemsList.splice[(index, 1)];
  }

  return { itemsList, addItem, removeItem };
}


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


function createProject(projName) {
  return { projectName: projName, ...(0,_list__WEBPACK_IMPORTED_MODULE_0__["default"])() };
}


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZIQUEyQztBQUN2Riw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVks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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kYXRlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZGlzcGxheUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2hhcnVrYXplLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2hhcnVrYXplLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJoYXJ1a2F6ZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5ib2R5IHtcbiAgLS1ibGFjazogIzA0MDQwNDtcbiAgLS13aGl0ZTogI2U0ZTRlNDtcbiAgLS1saWdodC1ncmV5OiAjYWNhY2FjO1xuICAtLWdyZXk6ICM3ZTdlN2U7XG4gIC0tZGFyay1ncmV5OiAjNGY0ZjRmO1xuICAtLXNtYWxsLWZvbnQ6IDI1cHg7XG4gIC0tbWVkaW0tZm9udDogMzVweDtcbiAgLS1sYXJnZS1mb250OiA0NXB4O1xuXG4gIGZvbnQtZmFtaWx5OiBcImhhcnVrYXplXCI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnI7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi56b29tZWQtaW1hZ2Uge1xuICAtLXNpemU6IDEwMHB4O1xuICB3aWR0aDogdmFyKC0tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjM1KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4uYWN0aW9ucyB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgZ2FwOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggN3B4O1xufVxuXG5zaWRlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xuICBncmlkLXJvdzogMi8zO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG59XG5cbi8qIC5wcm9qZWN0cyB7XG59ICovXG5cbi5wcm9qZWN0LXNlY3Rpb24ge1xuICBmb250LXNpemU6IHZhcigtLW1lZGltLWZvbnQpO1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnByb2plY3QtaXRlbTpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tYmxhY2spO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG5cbi5wcm9qZWN0LWl0ZW0gaW1nIHtcbiAgLS1zaXplOiA1NXB4O1xuICB3aWR0aDogdmFyKC0tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnByb2plY3QtaXRlbS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAgcGFkZGluZzogNDBweCA4MHB4O1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ucHJvamVjdC1jb250YWluZXIgLmFkZCB7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5yb3RhdGUtb2JqZWN0OmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBzcGluIDAuM3MgbGluZWFyIGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42NTEpO1xufVxuXG4ucm90YXRlLW9iamVjdDphY3RpdmUge1xuICBhbmltYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IGdvbGQ7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5saXN0LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4ubGlzdC1pdGVtICoge1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LWl0ZW0taGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxpc3QtaXRlbS10aXRsZSB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxpc3QtaXRlbS1pbWcge1xuICAtLXNpemU6IDIwcHg7XG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XG4gIG1heC1oZWlnaHQ6IHZhcigtLXNpemUpO1xufVxuXG4ubGlzdC1pdGVtLWltZzpob3ZlciB7XG4gIC0tc2l6ZTogMzBweDtcbn1cblxuLmxpc3QtaXRlbS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd29yZC1zcGFjaW5nOiAxcHg7XG59XG5cbi5saXN0LWl0ZW0tZGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5saXN0LWl0ZW0tcHJpb3JpdHktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG4gIGJvdHRvbTogNSU7XG59XG5cbi5saXN0LWl0ZW0tcHJpb3JpdHkge1xuICAtLXNpemU6IDI1cHg7XG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XG4gIG1heC1oZWlnaHQ6IHZhcigtLXNpemUpO1xufVxuXG4ubGlzdC1pdGVtLXN0YXR1cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIuNSU7XG4gIGJvdHRvbTogNTAlO1xufVxuXG4vKiBtb2RhbCBzdHlsaW5nICovXG5kaWFsb2cge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgd29yZC1zcGFjaW5nOiAwLjFweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuZGlhbG9nIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmZvcm0tYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6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O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaGFydWthemVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vaGFydWthemUtd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2hhcnVrYXplLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAtLWJsYWNrOiAjMDQwNDA0O1xcbiAgLS13aGl0ZTogI2U0ZTRlNDtcXG4gIC0tbGlnaHQtZ3JleTogI2FjYWNhYztcXG4gIC0tZ3JleTogIzdlN2U3ZTtcXG4gIC0tZGFyay1ncmV5OiAjNGY0ZjRmO1xcbiAgLS1zbWFsbC1mb250OiAyNXB4O1xcbiAgLS1tZWRpbS1mb250OiAzNXB4O1xcbiAgLS1sYXJnZS1mb250OiA0NXB4O1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJoYXJ1a2F6ZVxcXCI7XFxuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLnpvb21lZC1pbWFnZSB7XFxuICAtLXNpemU6IDEwMHB4O1xcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjM1KTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLmFjdGlvbnMge1xcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEycHggN3B4O1xcbn1cXG5cXG5zaWRlLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbi8qIC5wcm9qZWN0cyB7XFxufSAqL1xcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1tZWRpbS1mb250KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWJsYWNrKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSBpbWcge1xcbiAgLS1zaXplOiA1NXB4O1xcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtaXRlbS1sYWJlbCB7XFxuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogNDBweCA4MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXItdGl0bGUge1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIgLmFkZCB7XFxuICBtYXJnaW4tbGVmdDogMyU7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucm90YXRlLW9iamVjdDpob3ZlciB7XFxuICBhbmltYXRpb246IHNwaW4gMC4zcyBsaW5lYXIgaW5maW5pdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG59XFxuXFxuLnJvdGF0ZS1vYmplY3Q6YWN0aXZlIHtcXG4gIGFuaW1hdGlvbjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IGdvbGQ7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubGlzdC1pdGVtLWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWl0ZW0tdGl0bGUge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saXN0LWl0ZW0taW1nIHtcXG4gIC0tc2l6ZTogMjBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBtYXgtaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG59XFxuXFxuLmxpc3QtaXRlbS1pbWc6aG92ZXIge1xcbiAgLS1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHdvcmQtc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLWRhdGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5saXN0LWl0ZW0tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1JTtcXG4gIGJvdHRvbTogNSU7XFxufVxcblxcbi5saXN0LWl0ZW0tcHJpb3JpdHkge1xcbiAgLS1zaXplOiAyNXB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaXplKTtcXG4gIG1heC1oZWlnaHQ6IHZhcigtLXNpemUpO1xcbn1cXG5cXG4ubGlzdC1pdGVtLXN0YXR1cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMi41JTtcXG4gIGJvdHRvbTogNTAlO1xcbn1cXG5cXG4vKiBtb2RhbCBzdHlsaW5nICovXFxuZGlhbG9nIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgd29yZC1zcGFjaW5nOiAwLjFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbmRpYWxvZyBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1ncm91cCB7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uZm9ybS1ncm91cCBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uZm9ybS1ncm91cCBpbnB1dCB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZm9ybS1ncm91cCBzZWxlY3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZvcm0tYWN0aW9ucyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZGF0ZUhhbmRsZXIgPSB7XG4gIGdldFRvZGF5c0RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMucmVhZGFibGVEYXRlKHRvZGF5KTtcbiAgfSxcbiAgcmVhZGFibGVEYXRlOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIGxldCBsb2NhbGUgPSBcImVuLVVTXCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcImxvbmdcIiwgZGF5OiBcIm51bWVyaWNcIiB9O1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGUsIG9wdGlvbnMpO1xuICB9LFxuICB2YWxpZGF0ZURhdGU6IGZ1bmN0aW9uIChpbnB1dERhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkYWJsZURhdGUobmV3IERhdGUoaW5wdXREYXRlKSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRlSGFuZGxlcjtcbiIsImltcG9ydCB7IGZpbmRQcm9qZWN0QnlOYW1lIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBjcmVhdGVJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBrYXRhbmEgZnJvbSBcIi4va2F0YW5hLnBuZ1wiO1xuaW1wb3J0IHNodXJpa2VuIGZyb20gXCIuL3NodXJpa2VuQWRkLnN2Z1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgdG9vbHRpcCBmcm9tIFwiLi90b29sdGlwLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEaXNwbGF5SGFuZGxlcigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBsZXQgc3RhbmRhcmRJdGVtID0gY3JlYXRlSXRlbShcbiAgICBcIlRlbXBsYXRlIFRpdGxlXCIsXG4gICAgXCJUZW1wbGF0ZSBkZXNjcmlwdGlvbiwganVzdCBzb21lIHJhbmRvbSB0ZXh0IHRoYXQgbmVlZHMgdG8gYmUgYWRkZWRcIixcbiAgICBcIlRoZXNlIGFyZSB0aGUgdGVtcGxhdGUgbm90ZXNcIixcbiAgICBcIjIwMjUtMTAtOFwiLFxuICAgIFwiTWVkaXVtXCIsXG4gICAgdHJ1ZVxuICApO1xuXG4gIC8vbGF0ZXIgd2lsbCB1c2UgcGVyc2lzdGFuY2UgbGF5ZXIsIHRoaXMgaXMgdGVtcG9yYXJ5XG5cbiAgLy9zcGxpdCBpbnRvIGNyZWF0ZSBwcm9qLCBhZGQgaXRlbXMsIHJlbW92ZSBpdGVtc1xuICAvL2NyZWF0ZSBsb2FkUHJvamVjdCBmdW5jdGlvbiB0byBsb2FkIGZyb20gcGVyc2lzdGFuY2UgbGF5ZXJcblxuICAvLyBmdW5jdGlvbiBpbml0RGlzcGxheUhhbmxkZXIoKSB7XG4gIC8vICAgaW5pdEZvcm1BY3Rpb25zKCk7XG4gIC8vIH1cblxuICBmdW5jdGlvbiBpbml0Rm9ybUFjdGlvbnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2cgZm9ybVwiKTtcblxuICAgICAgY29uc3QgaXRlbVRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2l0ZW0tdGl0bGVcIik7XG4gICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgICAgIGNvbnN0IGl0ZW1Ob3RlcyA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNpdGVtLW5vdGVzXCIpO1xuICAgICAgY29uc3QgaXRlbUR1ZURhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjaXRlbS1kdWUtZGF0ZVwiKTtcbiAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNpdGVtLXByaW9yaXR5XCIpO1xuICAgICAgY29uc3QgY29tcGxldGVkU3RhdHVzID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZC1zdGF0dXNcIik7XG5cbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBmb3JtIHN1Ym1pc3Npb24gYW5kIGNhbmNlbFxuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcInN1Ym1pdFwiLFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVJdGVtKFxuICAgICAgICAgICAgaXRlbVRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgaXRlbU5vdGVzLnZhbHVlLFxuICAgICAgICAgICAgaXRlbUR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBpdGVtUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICBjb21wbGV0ZWRTdGF0dXMuY2hlY2tlZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBzdGFuZGFyZEl0ZW0gPSBpdGVtO1xuXG4gICAgICAgICAgaXRlbVRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICBpdGVtRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICAgIGl0ZW1Ob3Rlcy52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgaXRlbUR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICAgIGl0ZW1Qcmlvcml0eS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgY29tcGxldGVkU3RhdHVzLnZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICByZXNvbHZlKCk7IC8vIFJlc29sdmUgdGhlIFByb21pc2Ugd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWRcbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgcmVzb2x2ZSgpOyAvLyBSZXNvbHZlIHRoZSBQcm9taXNlIHdoZW4gdGhlIGZvcm0gaXMgY2FuY2VsZWRcbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0KHByb2opIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtwcm9qLnByb2plY3ROYW1lfWApO1xuXG4gICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvalRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lci10aXRsZVwiKTtcbiAgICBwcm9qVGl0bGUuaW5uZXJIVE1MID0gcHJvai5wcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG5cbiAgICBjb25zdCBwcm9qTGlzdCA9IFtdO1xuICAgIHByb2ouaXRlbXNMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBwcm9qTGlzdFtpbmRleF0gPSByZW5kZXJMaXN0SXRlbShlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHByb2pMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZEJ0bi5zcmMgPSBzaHVyaWtlbjtcbiAgICBhZGRCdG4uYWx0ID0gXCJBZGRcIjtcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcInJvdGF0ZS1vYmplY3RcIiwgXCJhZGRcIik7XG4gICAgLy9tYXkgcmVtb3ZlIHRoaXMsIGlmIG5vdCB1c2VkXG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1uYW1lXCIsIHByb2oucHJvamVjdE5hbWUpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGFjdGl2YXRlQWRkSXRlbUJ1dHRvbihwcm9qKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFjdGl2YXRlQWRkSXRlbUJ1dHRvbihwcm9qKSB7XG4gICAgLy8gVG8gcHJldmVudCBtdWx0aXBsZSBldmVudCBsaXN0ZW5lcnMgb24gYSBidXR0b25cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwcm9qLnByb2plY3ROYW1lfSAuYWRkYCk7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcblxuICAgICAgYXdhaXQgaW5pdEZvcm1BY3Rpb25zKCk7XG5cbiAgICAgIHByb2ouYWRkSXRlbShzdGFuZGFyZEl0ZW0pO1xuICAgICAgcmVuZGVySXRlbUxpc3RSZWZyZXNoKHByb2opO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySXRlbUxpc3RSZWZyZXNoKHByb2opIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cHJvai5wcm9qZWN0TmFtZX1gKTtcblxuICAgIGNvbnN0IGxpc3RJdGVtcyA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGAuJHtwcm9qLnByb2plY3ROYW1lfSBsaS5saXN0LWl0ZW1gXG4gICAgKTtcbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3Byb2oucHJvamVjdE5hbWV9IC5hZGRgKTtcblxuICAgIHByb2ouaXRlbXNMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSByZW5kZXJMaXN0SXRlbShlbGVtZW50KTtcbiAgICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKGl0ZW0sIGFkZEJ0bik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJMaXN0SXRlbShpdGVtKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbVwiKTtcblxuICAgIGNvbnN0IGhlYWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWREaXYuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1oZWFkXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcblxuICAgIGNvbnN0IHRvb2x0aXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRvb2x0aXBJbWcuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1pbWdcIik7XG4gICAgdG9vbHRpcEltZy5zcmMgPSB0b29sdGlwO1xuICAgIHRvb2x0aXBJbWcuYWx0ID0gXCJ0b29sdGlwXCI7XG4gICAgdG9vbHRpcEltZy50aXRsZSA9IGl0ZW0ubm90ZXM7XG5cbiAgICAvL2hhdmUgdG8gYWRkIGNyZWF0ZWQgYW5kIGR1ZURhdGUgaW4gY29udGFpbmVyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1kYXRlXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7XG5cbiAgICBoZWFkRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkRGl2LmFwcGVuZENoaWxkKHRvb2x0aXBJbWcpO1xuICAgIGhlYWREaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW0tcHJpb3JpdHktY29udGFpbmVyXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IGl0ZW0ucHJpb3JpdHk7IGkgPD0gMzsgaSsrKSB7XG4gICAgICBjb25zdCBwcmlvcml0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBwcmlvcml0eUltZy5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLXByaW9yaXR5XCIpO1xuICAgICAgcHJpb3JpdHlJbWcuc3JjID0ga2F0YW5hO1xuICAgICAgcHJpb3JpdHlJbWcuYWx0ID0gXCJsZXZlbFwiO1xuICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbWcpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbS1zdGF0dXNcIik7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGl0ZW0uY29tcGxldGVkU3RhdHVzO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQoaGVhZERpdik7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGxpLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICByZXR1cm4gbGk7XG4gIH1cblxuICAvLyBuZWVkIHRvIGFkZCBhIHRvZ2dsZSBjaGVja2JveCBmdW5jdGlvbiBmb3JcblxuICByZXR1cm4geyByZW5kZXJQcm9qZWN0IH07XG59XG4iLCJpbXBvcnQgY3JlYXRlRGlzcGxheUhhbmRsZXIgZnJvbSBcIi4vZGlzcGxheUhhbmRsZXJcIjtcbmltcG9ydCBjcmVhdGVJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgaXRlbTEgPSBjcmVhdGVJdGVtKFxuICBcImZpc2ggdGFrZW91dFwiLFxuICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2VkIGRvbG9yZSBlYSBmYWNlcmUgZGViaXRpcyBzaW50IG9wdGlvIGlzdGUgbW9sZXN0aWFlLiBBdHF1ZSBjb3Jwb3JpcyBmdWdpdCBzZXF1aSBleGVyY2l0YXRpb25lbSBpbmNpZHVudCBzYXBpZW50ZSBtb2xsaXRpYSwgbWludXMgdml0YWUsIHZlcml0YXRpcyBkZXNlcnVudCBzYWVwZSFcbiAgICBQbGFjZWF0IGFuaW1pIGluIGVhIGFiIGZhY2lsaXMgZGlzdGluY3RpbyBtYXhpbWUsIHV0IHZlcm8/IFBhcmlhdHVyIGFzcGVybmF0dXIsIHZvbHVwdGFzIGVhcXVlIG9kaW8sIG1vbGVzdGlhZSByZWljaWVuZGlzIHJlY3VzYW5kYWUgdWxsYW0gaGljIGFzc3VtZW5kYSB1dCBtb2xlc3RpYXMsIGRvbG9ydW0gY3VtIHN1c2NpcGl0LiBWb2x1cHRhcywgc2ludCBjdW1xdWUuIEFwZXJpYW0hYCxcbiAgXCJJIG5lZWQgdG8gZ2V0IHNvbWUgZmlzaCB0byBtYWtlIHNvbWUgdGFrdXlha2kgc3VzaGlcIixcbiAgXCIyMDIzLTgtMTVcIixcbiAgXCJIaWdoXCIsXG4gIGZhbHNlXG4pO1xuXG5jb25zdCBpdGVtMiA9IGNyZWF0ZUl0ZW0oXG4gIFwiV2VlZGluZ1wiLFxuICBcIldlZWQgb3V0IHRoZSB5YXJkXCIsXG4gIFwiR2V0IHNvbWUgd2VlZCBraWxsZXIgZm9yIG5leHQgbW9udGggdG8gY292ZXIgbW9yZSBncm91bmRcIixcbiAgXCIyMDIzLTExLTMwXCIsXG4gIFwiTWVkaXVtXCIsXG4gIHRydWVcbik7XG5cbmNvbnN0IGl0ZW0zID0gY3JlYXRlSXRlbShcbiAgXCJTZWFyY2hpbmdcIixcbiAgXCJmaW5kIGtuaWZlIGNhciBrZXlzXCIsXG4gIFwiU2VhcmNoIHJvb20gZnJvbSB0aXAgdG8gdG9lIG9yIGVsc2UgY2hhbmdlIGtleXNcIixcbiAgXCIyMDIzLTExLTMwXCIsXG4gIFwiSGlnaFwiLFxuICBmYWxzZVxuKTtcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJQZXJzb25hbFwiKTtcbnByb2plY3QuYWRkSXRlbShpdGVtMSk7XG5wcm9qZWN0LmFkZEl0ZW0oaXRlbTIpO1xuXG5jb25zdCBwcm9qZWN0MiA9IGNyZWF0ZVByb2plY3QoXCJHeW1cIik7XG5wcm9qZWN0Mi5hZGRJdGVtKGl0ZW0zKTtcbnByb2plY3QyLmFkZEl0ZW0oaXRlbTIpO1xuXG5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xucHJvamVjdHMucHVzaChwcm9qZWN0Mik7XG5cbmNvbnNvbGUubG9nKHByb2plY3QpO1xuY29uc29sZS5sb2cocHJvamVjdDIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlIYW5kbGVyID0gY3JlYXRlRGlzcGxheUhhbmRsZXIoKTtcbiAgZGlzcGxheUhhbmRsZXIucmVuZGVyUHJvamVjdChwcm9qZWN0KTtcbiAgZGlzcGxheUhhbmRsZXIucmVuZGVyUHJvamVjdChwcm9qZWN0Mik7XG59KTtcbiIsImltcG9ydCBkYXRlSGFuZGxlciBmcm9tIFwiLi9kYXRlSGFuZGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJdGVtKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIG5vdGVzLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgY29tcGxldGVkU3RhdHVzXG4pIHtcbiAgY29uc3QgX2RhdGVDcmVhdGVkID0gZGF0ZUhhbmRsZXIuZ2V0VG9kYXlzRGF0ZSgpO1xuICBsZXQgX2R1ZURhdGUgPSBkYXRlSGFuZGxlci52YWxpZGF0ZURhdGUoZHVlRGF0ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgZGF0ZUNyZWF0ZWQoKSB7XG4gICAgICByZXR1cm4gX2RhdGVDcmVhdGVkO1xuICAgIH0sXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gX2R1ZURhdGU7XG4gICAgfSxcbiAgICBzZXQgZHVlRGF0ZShuZXdEYXRlKSB7XG4gICAgICBfZHVlRGF0ZSA9IGRhdGVIYW5kbGVyLnZhbGlkYXRlRGF0ZShuZXdEYXRlKTtcbiAgICB9LFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIG5vdGVzLFxuICAgIHByaW9yaXR5OiBwYXJzZUludChwcmlvcml0eSksXG4gICAgY29tcGxldGVkU3RhdHVzLFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGlzdCgpIHtcbiAgbGV0IGl0ZW1zTGlzdCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZEl0ZW0oaXRlbSkge1xuICAgIGl0ZW1zTGlzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSXRlbShpbmRleCkge1xuICAgIGl0ZW1zTGlzdC5zcGxpY2VbKGluZGV4LCAxKV07XG4gIH1cblxuICByZXR1cm4geyBpdGVtc0xpc3QsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0gfTtcbn1cbiIsImltcG9ydCBjcmVhdGVMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qTmFtZSkge1xuICByZXR1cm4geyBwcm9qZWN0TmFtZTogcHJvak5hbWUsIC4uLmNyZWF0ZUxpc3QoKSB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
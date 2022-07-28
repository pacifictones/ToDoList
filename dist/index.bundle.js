"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    padding: 0;\n}\n\n.topBar {\n    width: 100vw;\n    height: 10vh;\n    \n   \n}\n\n.sideBar {\n    width: 25vw;\n    height: 90vh;\n    border: 1px solid black;\n    \n}\n\n.container {\n    display: flex;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid black;\n    width: 75vw;\n    height: 90vh;\n}\n\n#listTitle {\n    width: 100%;\n    height: 50px;\n    background-color: red;\n}\n\n.listRow {\n    display: grid;\n    grid-template-columns: .25fr 1fr 1fr 1fr;\n}\n\n.status, .toDoDate, .toDoMenu  {\n    flex-grow: 1;\n}\n\n.toDoTitle {\n    flex-grow: 2;\n}\n\n.projectTitle {\n    cursor: pointer;\n}\n\n#headerContainer {\n    display: flex;\n    justify-content: space-around;\n    align-self: center;\n    gap: 20px;\n}\n\n#listTitle {\n    display: flex;\n    justify-content: space-around;\n}\n\n#formPopUp {\n    width: 500px;\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    border: 2px solid black;\n    transform: translate(-50%, -50%) scale(1);\n    transition: 200ms ease-in-out;\n    z-index: 10; \n    \n}\n\ninput {\n    width: 95%;\n}\n\n/* .status {\n    width: 30px;\n} */\n.toDoMenu {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n    position: relative;\n}\n\n\n.popUpMenu {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    z-index: 2;\n    background-color: antiquewhite;\n    padding: 4px;\n    bottom: 30px;\n    right: 10px;\n    \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;;;AAGhB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;;AAE3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,wCAAwC;AAC5C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,QAAQ;IACR,SAAS;IACT,uBAAuB;IACvB,yCAAyC;IACzC,6BAA6B;IAC7B,WAAW;;AAEf;;AAEA;IACI,UAAU;AACd;;AAEA;;GAEG;AACH;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;IACV,8BAA8B;IAC9B,YAAY;IACZ,YAAY;IACZ,WAAW;;AAEf","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n}\n\n.topBar {\n    width: 100vw;\n    height: 10vh;\n    \n   \n}\n\n.sideBar {\n    width: 25vw;\n    height: 90vh;\n    border: 1px solid black;\n    \n}\n\n.container {\n    display: flex;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid black;\n    width: 75vw;\n    height: 90vh;\n}\n\n#listTitle {\n    width: 100%;\n    height: 50px;\n    background-color: red;\n}\n\n.listRow {\n    display: grid;\n    grid-template-columns: .25fr 1fr 1fr 1fr;\n}\n\n.status, .toDoDate, .toDoMenu  {\n    flex-grow: 1;\n}\n\n.toDoTitle {\n    flex-grow: 2;\n}\n\n.projectTitle {\n    cursor: pointer;\n}\n\n#headerContainer {\n    display: flex;\n    justify-content: space-around;\n    align-self: center;\n    gap: 20px;\n}\n\n#listTitle {\n    display: flex;\n    justify-content: space-around;\n}\n\n#formPopUp {\n    width: 500px;\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    border: 2px solid black;\n    transform: translate(-50%, -50%) scale(1);\n    transition: 200ms ease-in-out;\n    z-index: 10; \n    \n}\n\ninput {\n    width: 95%;\n}\n\n/* .status {\n    width: 30px;\n} */\n.toDoMenu {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n    position: relative;\n}\n\n\n.popUpMenu {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    z-index: 2;\n    background-color: antiquewhite;\n    padding: 4px;\n    bottom: 30px;\n    right: 10px;\n    \n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "default": () => (/* binding */ addProjectToDom),
/* harmony export */   "displayProject": () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





//This module adds and updates the DOM with project titles in the side bar. 
function addProjectToDom(projectLibrary) {
    const projectList = document.createElement('div');
    projectList.setAttribute('id', 'projectList');
    
    const sideBar = document.getElementById('sideBar'); 
    sideBar.appendChild(projectList);

    for (let i = 0; i < projectLibrary.length; i++) {
      
    const projectTitle = document.createElement('div');
    addClick(projectTitle);
    addClass(projectTitle, "projectTitle");
    projectTitle.setAttribute('data-num', i);
    projectTitle.innerHTML = projectLibrary[i].title;
    
    projectList.appendChild(projectTitle);
    
}
}



function addClick(element) {
    
element.addEventListener('click', () => {
    let dataNum = element.dataset.num;
    let header = element.innerHTML;
    clearHeader();
    createHeader(header, dataNum);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.handleToDoDisplay)(dataNum);
})
}



function clearHeader() {
    const headerContainer = document.getElementById('headerContainer');
    headerContainer.remove();
}



 function createHeader (title, datanum) {
    const listTitle = document.getElementById('listTitle');
    
    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('id', 'headerContainer');

    const listHeader = document.createElement('div');
    listHeader.setAttribute('id', 'listHeader');
    listHeader.innerHTML = title;

    const addToDoButton = document.createElement('button');
    addToDoButton.setAttribute('id', 'addToDoButton');
    addToDoButton.setAttribute('data-num', datanum);
    addToDoButton.innerHTML = 'Add a ToDo';
    addToDoButton.type = 'button';
    addToDoClick(addToDoButton);

    document.getElementById('submitFormButton').setAttribute('data-num', datanum);


    listTitle.appendChild(headerContainer);
    headerContainer.appendChild(listHeader);
    headerContainer.appendChild(addToDoButton);
}


function addToDoClick (element) {
    element.addEventListener('click', () => {
    document.getElementById('formPopUp').style.display = "block";

    })
}

//This function displays all the ToDos for a project to the list ul element in the "main" div.
 function displayProject (project, dataNum) {
   
    const list = document.getElementById('list');
    list.innerHTML = '';

    for (let i = 0; i < project.length; i ++ ){
    const projectNumber = dataNum;
    console.log(projectNumber);    
    const listRow = document.createElement('li');
    addClass(listRow, "listRow");
    listRow.setAttribute('data-num', i);

    const status = document.createElement('input');
    addClass(status, "status");
    status.setAttribute('data-num', i);
    status.setAttribute('data-project', projectNumber);
    status.setAttribute('type', 'checkbox')
    addClickToCheckbox(status);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.setCheckBox)(status, projectNumber, i);
    

    const toDoTitle = document.createElement('div');
    addClass(toDoTitle, "toDoTitle");
    const toDoDate = document.createElement('div');
    addClass(toDoDate, "toDoDate");

    

    const toDoMenu = document.createElement('button');
    addClass(toDoMenu, "toDoMenue");
    toDoMenu.setAttribute('data-num', i);
    toDoMenu.setAttribute('data-project', projectNumber);
    toDoMenu.innerHTML = 'edit';
    addMenuClick(toDoMenu, projectNumber, i);
    
    list.appendChild(listRow);
    listRow.appendChild(status);
    listRow.appendChild(toDoTitle);
    listRow.appendChild(toDoDate);
    listRow.appendChild(toDoMenu);

    
toDoTitle.innerHTML = project[i].title + project[i].description;
status.innerHTML = project[i].priority;
toDoDate.innerHTML = project[i].dueDate;
toDoMenu.innerHTML = 'options';
}
}

function addMenuClick(element, p, d){
    element.addEventListener('click', () => {

    })
}

//This function adds a class to an element. I really just did this for fun and practice but also i think it saves a bit of time.
 function addClass(element, classword) {
    return element.classList.add(classword);
}

function addClickToCheckbox(element) {
    element.addEventListener('change', () => {
    let dataNum = element.dataset.num;
    let project = element.dataset.project;
    
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.handleCheckBox)(element, project, dataNum);
    })
}



/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });

    class ToDo {
        constructor (title, description, dueDate) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.status = false;
        }
    }

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleAddButton": () => (/* binding */ handleAddButton),
/* harmony export */   "handleAddTodo": () => (/* binding */ handleAddTodo),
/* harmony export */   "handleCheckBox": () => (/* binding */ handleCheckBox),
/* harmony export */   "handleToDoDisplay": () => (/* binding */ handleToDoDisplay),
/* harmony export */   "setCheckBox": () => (/* binding */ setCheckBox)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo.js */ "./src/createToDo.js");
/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProject.js */ "./src/newProject.js");
/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadPage.js */ "./src/loadPage.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");







document.body.appendChild((0,_loadPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])());

const toDo = new _createToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Shop', 'Groceries', 'Tomorrow');


const toDo1 = new _createToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Eat", 'some food', "today");

const toDo3 = new _createToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Read", "Books", "Now");


const projectLibrary = [];

const project1 = new _newProject_js__WEBPACK_IMPORTED_MODULE_2__["default"]("shopping");
project1.list.push(toDo);
project1.list.push(toDo1);
projectLibrary.push(project1);
console.log(projectLibrary);

const project2 = new _newProject_js__WEBPACK_IMPORTED_MODULE_2__["default"]('eating');
project2.list.push(toDo);
projectLibrary.push(project2);

const project3 = new _newProject_js__WEBPACK_IMPORTED_MODULE_2__["default"]('yoyoing');
project3.list.push(toDo3);
projectLibrary.push(project3);

function handleAddButton () {
    const projectList = document.getElementById('projectList');
    const getNewProject = document.getElementById('addProjectInput');
    const newProjectName = getNewProject.value;
    if (getNewProject && getNewProject.value) {
    const newProject = new _newProject_js__WEBPACK_IMPORTED_MODULE_2__["default"](newProjectName);
    getNewProject.value = '';
    projectLibrary.push(newProject);
    projectList.remove();
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectLibrary);
    console.log(projectLibrary);
    }
}

function handleAddTodo (dataNum) {
    let title = document.getElementById('titleInput');
    let newTitle = title.value;
    if (newTitle === '') {
        alert('Please enter a title!');
        return;
    }

    let description = document.getElementById('description');
    let newDescription = description.value;

    let date = document.getElementById('date');
    let newDate = date.value;
    if (newDate === '') {
        newDate = "No due date"; 
    }

    

    let newToDo = new _createToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"](newTitle, newDescription, newDate, false);
    projectLibrary[dataNum].list.push(newToDo);
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject)(projectLibrary[dataNum].list);

    title.value = '';
    description.value = '';
    date.value = '';
    document.getElementById('formPopUp').style.display = "none";
}

function handleToDoDisplay(dataNum) {
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject)(projectLibrary[dataNum].list, dataNum);
}

function handleCheckBox(element, p,d) {
       
    if(element.checked) {
        projectLibrary[p].list[d].status = true;
    } else {
        projectLibrary[p].list[d].status = false;
    }
    console.log(p + " " + d);
    console.log(projectLibrary[p].list[d].status);

}

function setCheckBox(element, p, d) {
    if(projectLibrary[p].list[d].status === true) {
        element.checked = true;
    } else {
        element.checked = false;
    }
}

 console.log(projectLibrary[0].list);



 console.log(projectLibrary[0].list);
(0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.createHeader)(projectLibrary[0].title, 0);
 (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectLibrary);




(0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject)(projectLibrary[0].list, 0);
// console.log(projectLibrary);

// console.log(projectLibrary[0].title);
// console.log(projectLibrary[0].list[0].description);

// console.log(projectLibrary[1].title);

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");






function loadPage() {
    // Create Elements

    const content = document.createElement('div');
    const topBar = document.createElement('div');
    const container = document.createElement('div');
    const sideBar = document.createElement('div');
    // const projectList = document.createElement('div');
    const main = document.createElement('div');
    const addButton = document.createElement('button');
    const listTitle = document.createElement('div');
    const list = document.createElement('ul');
    const input = document.createElement('input');

    //create the pop-up form
    const formPopUp = document.createElement('div');
    formPopUp.setAttribute('id', 'formPopUp');

    const formInput = document.createElement('form');
    formInput.classList.add('formInput');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'titleInput');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'titleInput');
    titleLabel.innerHTML = "Title:";

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('id', 'description');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.innerHTML = "Description:";

    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('type', 'date');
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.innerHTML = 'Date:';

    

    const closeFormButton = document.createElement('button');
    closeFormButton.setAttribute('id', 'closeFormButton');
    closeFormButton.type = 'button';
    addCloseClick(closeFormButton);
    closeFormButton.innerHTML = 'Cancel';

    const submitFormButton = document.createElement('button');
    submitFormButton.setAttribute('id', 'submitFormButton');
    submitFormButton.type = 'button';
    submitFormButton.setAttribute('data-num', 0);
    submitFormButton.innerHTML = 'Add';

    submitFormButton.addEventListener('click', () => {
    const dataNum = submitFormButton.dataset.num;
        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.handleAddTodo)(dataNum);
    })


    
    
   
   //Add class to Elements
    content.classList.add('content');
    container.classList.add('container');
    sideBar.classList.add('sideBar');
    sideBar.setAttribute('id', 'sideBar');

    // projectList.setAttribute('id', 'projectList')
    topBar.classList.add('topBar');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    listTitle.setAttribute('id', 'listTitle');
    list.setAttribute('id', 'list');
    addButton.classList.add('addButton');
    addClick(addButton);
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'addProjectInput');

    //Append Elements
    
    content.appendChild(topBar);
    content.appendChild(container);
    container.appendChild(sideBar);
    container.appendChild(main);
    main.appendChild(listTitle);
    main.appendChild(formPopUp);

    formPopUp.appendChild(formInput);
    formInput.appendChild(titleLabel);
    formInput.appendChild(titleInput);
    formInput.appendChild(descriptionLabel);
    formInput.appendChild(descriptionInput);
    formInput.appendChild(dateLabel);
    formInput.appendChild(dateInput);
    
    
    formInput.appendChild(submitFormButton);
    formInput.appendChild(closeFormButton);

    main.appendChild(list);
    sideBar.appendChild(input);
    sideBar.appendChild(addButton);
    // sideBar.appendChild(projectList);

    //Add content
   
    addButton.innerHTML = "Add Project";
   

    
return content;
}

function addClick(element) {
    return element.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.handleAddButton);
}

function addCloseClick(element) {
    element.addEventListener('click', () => {
        document.getElementById('formPopUp').style.display = "none";
    })
}

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(title, list = []){
        this.title = title;
        this.list = list;
        
        
    }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCxnQkFBZ0IsaUJBQWlCLEdBQUcsYUFBYSxtQkFBbUIsbUJBQW1CLGNBQWMsY0FBYyxrQkFBa0IsbUJBQW1CLDhCQUE4QixTQUFTLGdCQUFnQixvQkFBb0IsR0FBRyxXQUFXLG9CQUFvQiw2QkFBNkIsa0NBQWtDLGtCQUFrQixtQkFBbUIsR0FBRyxnQkFBZ0Isa0JBQWtCLG1CQUFtQiw0QkFBNEIsR0FBRyxjQUFjLG9CQUFvQiwrQ0FBK0MsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLG9DQUFvQyx5QkFBeUIsZ0JBQWdCLEdBQUcsZ0JBQWdCLG9CQUFvQixvQ0FBb0MsR0FBRyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixzQkFBc0IsZUFBZSxnQkFBZ0IsOEJBQThCLGdEQUFnRCxvQ0FBb0MsbUJBQW1CLFNBQVMsV0FBVyxpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLElBQUksZUFBZSxvQkFBb0IsMEJBQTBCLHdCQUF3Qix5QkFBeUIsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2Qix5QkFBeUIsaUJBQWlCLHFDQUFxQyxtQkFBbUIsbUJBQW1CLGtCQUFrQixTQUFTLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLCtCQUErQixnQkFBZ0IsaUJBQWlCLEdBQUcsYUFBYSxtQkFBbUIsbUJBQW1CLGNBQWMsY0FBYyxrQkFBa0IsbUJBQW1CLDhCQUE4QixTQUFTLGdCQUFnQixvQkFBb0IsR0FBRyxXQUFXLG9CQUFvQiw2QkFBNkIsa0NBQWtDLGtCQUFrQixtQkFBbUIsR0FBRyxnQkFBZ0Isa0JBQWtCLG1CQUFtQiw0QkFBNEIsR0FBRyxjQUFjLG9CQUFvQiwrQ0FBK0MsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLG9DQUFvQyx5QkFBeUIsZ0JBQWdCLEdBQUcsZ0JBQWdCLG9CQUFvQixvQ0FBb0MsR0FBRyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixzQkFBc0IsZUFBZSxnQkFBZ0IsOEJBQThCLGdEQUFnRCxvQ0FBb0MsbUJBQW1CLFNBQVMsV0FBVyxpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLElBQUksZUFBZSxvQkFBb0IsMEJBQTBCLHdCQUF3Qix5QkFBeUIsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2Qix5QkFBeUIsaUJBQWlCLHFDQUFxQyxtQkFBbUIsbUJBQW1CLGtCQUFrQixTQUFTLG1CQUFtQjtBQUNsMkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ3VEOzs7O0FBSTVFO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBaUI7QUFDckIsQ0FBQztBQUNEOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxDQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFXO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFjO0FBQ2xCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkEsSUFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnFCO0FBQ2M7QUFDRztBQUNEO0FBQzJCO0FBQ2pCOztBQUUvQywwQkFBMEIsd0RBQVE7O0FBRWxDLGlCQUFpQixzREFBSTs7O0FBR3JCLGtCQUFrQixzREFBSTs7QUFFdEIsa0JBQWtCLHNEQUFJOzs7QUFHdEI7O0FBRUEscUJBQXFCLHNEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixzREFBTztBQUM1QjtBQUNBOztBQUVBLHFCQUFxQixzREFBTztBQUM1QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBZTtBQUNuQjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixzREFBSTtBQUMxQjtBQUNBLElBQUksOERBQWM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxJQUFJLDhEQUFjO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBLDREQUFZO0FBQ1osQ0FBQywwREFBZTs7Ozs7QUFLaEIsOERBQWM7QUFDZDs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIK0I7QUFDVjtBQUN3QjtBQUNDO0FBQ0g7O0FBRTVCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsd0RBQWE7QUFDckIsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLHNEQUFlO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNqSWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9uZXdQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRvcEJhciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBcXG4gICBcXG59XFxuXFxuLnNpZGVCYXIge1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG59XFxuXFxuI2xpc3RUaXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmxpc3RSb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG4uc3RhdHVzLCAudG9Eb0RhdGUsIC50b0RvTWVudSAge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50b0RvVGl0bGUge1xcbiAgICBmbGV4LWdyb3c6IDI7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNsaXN0VGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2Zvcm1Qb3BVcCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDsgXFxuICAgIFxcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbi8qIC5zdGF0dXMge1xcbiAgICB3aWR0aDogMzBweDtcXG59ICovXFxuLnRvRG9NZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLnBvcFVwTWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvdHRvbTogMzBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZOzs7QUFHaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3QixXQUFXOztBQUVmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOztHQUVHO0FBQ0g7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7O0FBRWZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRvcEJhciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBcXG4gICBcXG59XFxuXFxuLnNpZGVCYXIge1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG59XFxuXFxuI2xpc3RUaXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmxpc3RSb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG4uc3RhdHVzLCAudG9Eb0RhdGUsIC50b0RvTWVudSAge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50b0RvVGl0bGUge1xcbiAgICBmbGV4LWdyb3c6IDI7XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNsaXN0VGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2Zvcm1Qb3BVcCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDsgXFxuICAgIFxcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbi8qIC5zdGF0dXMge1xcbiAgICB3aWR0aDogMzBweDtcXG59ICovXFxuLnRvRG9NZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLnBvcFVwTWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvdHRvbTogMzBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGFuZGxlVG9Eb0Rpc3BsYXksIGhhbmRsZUNoZWNrQm94LCBzZXRDaGVja0JveCB9IGZyb20gJy4vaW5kZXguanMnO1xuXG5cblxuLy9UaGlzIG1vZHVsZSBhZGRzIGFuZCB1cGRhdGVzIHRoZSBET00gd2l0aCBwcm9qZWN0IHRpdGxlcyBpbiB0aGUgc2lkZSBiYXIuIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdFRvRG9tKHByb2plY3RMaWJyYXJ5KSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RMaXN0Jyk7XG4gICAgXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlQmFyJyk7IFxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2xpY2socHJvamVjdFRpdGxlKTtcbiAgICBhZGRDbGFzcyhwcm9qZWN0VGl0bGUsIFwicHJvamVjdFRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgaSk7XG4gICAgcHJvamVjdFRpdGxlLmlubmVySFRNTCA9IHByb2plY3RMaWJyYXJ5W2ldLnRpdGxlO1xuICAgIFxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgXG59XG59XG5cblxuXG5mdW5jdGlvbiBhZGRDbGljayhlbGVtZW50KSB7XG4gICAgXG5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBkYXRhTnVtID0gZWxlbWVudC5kYXRhc2V0Lm51bTtcbiAgICBsZXQgaGVhZGVyID0gZWxlbWVudC5pbm5lckhUTUw7XG4gICAgY2xlYXJIZWFkZXIoKTtcbiAgICBjcmVhdGVIZWFkZXIoaGVhZGVyLCBkYXRhTnVtKTtcbiAgICBoYW5kbGVUb0RvRGlzcGxheShkYXRhTnVtKTtcbn0pXG59XG5cblxuXG5mdW5jdGlvbiBjbGVhckhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQ29udGFpbmVyJyk7XG4gICAgaGVhZGVyQ29udGFpbmVyLnJlbW92ZSgpO1xufVxuXG5cblxuIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIgKHRpdGxlLCBkYXRhbnVtKSB7XG4gICAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RUaXRsZScpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlckNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0SGVhZGVyJyk7XG4gICAgbGlzdEhlYWRlci5pbm5lckhUTUwgPSB0aXRsZTtcblxuICAgIGNvbnN0IGFkZFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUb0RvQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVG9Eb0J1dHRvbicpO1xuICAgIGFkZFRvRG9CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW51bScsIGRhdGFudW0pO1xuICAgIGFkZFRvRG9CdXR0b24uaW5uZXJIVE1MID0gJ0FkZCBhIFRvRG8nO1xuICAgIGFkZFRvRG9CdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGFkZFRvRG9DbGljayhhZGRUb0RvQnV0dG9uKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRGb3JtQnV0dG9uJykuc2V0QXR0cmlidXRlKCdkYXRhLW51bScsIGRhdGFudW0pO1xuXG5cbiAgICBsaXN0VGl0bGUuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEhlYWRlcik7XG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvRG9CdXR0b24pO1xufVxuXG5cbmZ1bmN0aW9uIGFkZFRvRG9DbGljayAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Qb3BVcCcpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICB9KVxufVxuXG4vL1RoaXMgZnVuY3Rpb24gZGlzcGxheXMgYWxsIHRoZSBUb0RvcyBmb3IgYSBwcm9qZWN0IHRvIHRoZSBsaXN0IHVsIGVsZW1lbnQgaW4gdGhlIFwibWFpblwiIGRpdi5cbiBleHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3QgKHByb2plY3QsIGRhdGFOdW0pIHtcbiAgIFxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpICsrICl7XG4gICAgY29uc3QgcHJvamVjdE51bWJlciA9IGRhdGFOdW07XG4gICAgY29uc29sZS5sb2cocHJvamVjdE51bWJlcik7ICAgIFxuICAgIGNvbnN0IGxpc3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZENsYXNzKGxpc3RSb3csIFwibGlzdFJvd1wiKTtcbiAgICBsaXN0Um93LnNldEF0dHJpYnV0ZSgnZGF0YS1udW0nLCBpKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYWRkQ2xhc3Moc3RhdHVzLCBcInN0YXR1c1wiKTtcbiAgICBzdGF0dXMuc2V0QXR0cmlidXRlKCdkYXRhLW51bScsIGkpO1xuICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3ROdW1iZXIpO1xuICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIGFkZENsaWNrVG9DaGVja2JveChzdGF0dXMpO1xuICAgIHNldENoZWNrQm94KHN0YXR1cywgcHJvamVjdE51bWJlciwgaSk7XG4gICAgXG5cbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDbGFzcyh0b0RvVGl0bGUsIFwidG9Eb1RpdGxlXCIpO1xuICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2xhc3ModG9Eb0RhdGUsIFwidG9Eb0RhdGVcIik7XG5cbiAgICBcblxuICAgIGNvbnN0IHRvRG9NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQ2xhc3ModG9Eb01lbnUsIFwidG9Eb01lbnVlXCIpO1xuICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnZGF0YS1udW0nLCBpKTtcbiAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3ROdW1iZXIpO1xuICAgIHRvRG9NZW51LmlubmVySFRNTCA9ICdlZGl0JztcbiAgICBhZGRNZW51Q2xpY2sodG9Eb01lbnUsIHByb2plY3ROdW1iZXIsIGkpO1xuICAgIFxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdFJvdyk7XG4gICAgbGlzdFJvdy5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICAgIGxpc3RSb3cuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcbiAgICBsaXN0Um93LmFwcGVuZENoaWxkKHRvRG9EYXRlKTtcbiAgICBsaXN0Um93LmFwcGVuZENoaWxkKHRvRG9NZW51KTtcblxuICAgIFxudG9Eb1RpdGxlLmlubmVySFRNTCA9IHByb2plY3RbaV0udGl0bGUgKyBwcm9qZWN0W2ldLmRlc2NyaXB0aW9uO1xuc3RhdHVzLmlubmVySFRNTCA9IHByb2plY3RbaV0ucHJpb3JpdHk7XG50b0RvRGF0ZS5pbm5lckhUTUwgPSBwcm9qZWN0W2ldLmR1ZURhdGU7XG50b0RvTWVudS5pbm5lckhUTUwgPSAnb3B0aW9ucyc7XG59XG59XG5cbmZ1bmN0aW9uIGFkZE1lbnVDbGljayhlbGVtZW50LCBwLCBkKXtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgfSlcbn1cblxuLy9UaGlzIGZ1bmN0aW9uIGFkZHMgYSBjbGFzcyB0byBhbiBlbGVtZW50LiBJIHJlYWxseSBqdXN0IGRpZCB0aGlzIGZvciBmdW4gYW5kIHByYWN0aWNlIGJ1dCBhbHNvIGkgdGhpbmsgaXQgc2F2ZXMgYSBiaXQgb2YgdGltZS5cbiBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc3dvcmQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzd29yZCk7XG59XG5cbmZ1bmN0aW9uIGFkZENsaWNrVG9DaGVja2JveChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgbGV0IGRhdGFOdW0gPSBlbGVtZW50LmRhdGFzZXQubnVtO1xuICAgIGxldCBwcm9qZWN0ID0gZWxlbWVudC5kYXRhc2V0LnByb2plY3Q7XG4gICAgXG4gICAgaGFuZGxlQ2hlY2tCb3goZWxlbWVudCwgcHJvamVjdCwgZGF0YU51bSk7XG4gICAgfSlcbn1cblxuIiwiXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gICAgICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRvRG8gZnJvbSAnLi9jcmVhdGVUb0RvLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbmV3UHJvamVjdC5qcyc7XG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkUGFnZS5qcyc7XG5pbXBvcnQgYWRkUHJvamVjdFRvRG9tLCB7ZGlzcGxheVByb2plY3R9IGZyb20gJy4vYWRkUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2FkZFByb2plY3QuanMnO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRQYWdlKCkpO1xuXG5jb25zdCB0b0RvID0gbmV3IFRvRG8oJ1Nob3AnLCAnR3JvY2VyaWVzJywgJ1RvbW9ycm93Jyk7XG5cblxuY29uc3QgdG9EbzEgPSBuZXcgVG9EbyhcIkVhdFwiLCAnc29tZSBmb29kJywgXCJ0b2RheVwiKTtcblxuY29uc3QgdG9EbzMgPSBuZXcgVG9EbyhcIlJlYWRcIiwgXCJCb29rc1wiLCBcIk5vd1wiKTtcblxuXG5jb25zdCBwcm9qZWN0TGlicmFyeSA9IFtdO1xuXG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KFwic2hvcHBpbmdcIik7XG5wcm9qZWN0MS5saXN0LnB1c2godG9Ebyk7XG5wcm9qZWN0MS5saXN0LnB1c2godG9EbzEpO1xucHJvamVjdExpYnJhcnkucHVzaChwcm9qZWN0MSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeSk7XG5cbmNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoJ2VhdGluZycpO1xucHJvamVjdDIubGlzdC5wdXNoKHRvRG8pO1xucHJvamVjdExpYnJhcnkucHVzaChwcm9qZWN0Mik7XG5cbmNvbnN0IHByb2plY3QzID0gbmV3IFByb2plY3QoJ3lveW9pbmcnKTtcbnByb2plY3QzLmxpc3QucHVzaCh0b0RvMyk7XG5wcm9qZWN0TGlicmFyeS5wdXNoKHByb2plY3QzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUFkZEJ1dHRvbiAoKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcbiAgICBjb25zdCBnZXROZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RJbnB1dCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZ2V0TmV3UHJvamVjdC52YWx1ZTtcbiAgICBpZiAoZ2V0TmV3UHJvamVjdCAmJiBnZXROZXdQcm9qZWN0LnZhbHVlKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTtcbiAgICBnZXROZXdQcm9qZWN0LnZhbHVlID0gJyc7XG4gICAgcHJvamVjdExpYnJhcnkucHVzaChuZXdQcm9qZWN0KTtcbiAgICBwcm9qZWN0TGlzdC5yZW1vdmUoKTtcbiAgICBhZGRQcm9qZWN0VG9Eb20ocHJvamVjdExpYnJhcnkpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBZGRUb2RvIChkYXRhTnVtKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSW5wdXQnKTtcbiAgICBsZXQgbmV3VGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICBpZiAobmV3VGl0bGUgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgIGxldCBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgIGxldCBuZXdEYXRlID0gZGF0ZS52YWx1ZTtcbiAgICBpZiAobmV3RGF0ZSA9PT0gJycpIHtcbiAgICAgICAgbmV3RGF0ZSA9IFwiTm8gZHVlIGRhdGVcIjsgXG4gICAgfVxuXG4gICAgXG5cbiAgICBsZXQgbmV3VG9EbyA9IG5ldyBUb0RvKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RGF0ZSwgZmFsc2UpO1xuICAgIHByb2plY3RMaWJyYXJ5W2RhdGFOdW1dLmxpc3QucHVzaChuZXdUb0RvKTtcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlicmFyeVtkYXRhTnVtXS5saXN0KTtcblxuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Qb3BVcCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvRG9EaXNwbGF5KGRhdGFOdW0pIHtcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlicmFyeVtkYXRhTnVtXS5saXN0LCBkYXRhTnVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94KGVsZW1lbnQsIHAsZCkge1xuICAgICAgIFxuICAgIGlmKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICBwcm9qZWN0TGlicmFyeVtwXS5saXN0W2RdLnN0YXR1cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdExpYnJhcnlbcF0ubGlzdFtkXS5zdGF0dXMgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocCArIFwiIFwiICsgZCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpYnJhcnlbcF0ubGlzdFtkXS5zdGF0dXMpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDaGVja0JveChlbGVtZW50LCBwLCBkKSB7XG4gICAgaWYocHJvamVjdExpYnJhcnlbcF0ubGlzdFtkXS5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbiBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeVswXS5saXN0KTtcblxuXG5cbiBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeVswXS5saXN0KTtcbmNyZWF0ZUhlYWRlcihwcm9qZWN0TGlicmFyeVswXS50aXRsZSwgMCk7XG4gYWRkUHJvamVjdFRvRG9tKHByb2plY3RMaWJyYXJ5KTtcblxuXG5cblxuZGlzcGxheVByb2plY3QocHJvamVjdExpYnJhcnlbMF0ubGlzdCwgMCk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeSk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5WzBdLnRpdGxlKTtcbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5WzBdLmxpc3RbMF0uZGVzY3JpcHRpb24pO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeVsxXS50aXRsZSk7IiwiaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoYW5kbGVBZGRCdXR0b24gfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBhZGRQcm9qZWN0VG9Eb20gZnJvbSAnLi9hZGRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGhhbmRsZUFkZFRvZG8gfSBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgLy8gQ3JlYXRlIEVsZW1lbnRzXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIC8vY3JlYXRlIHRoZSBwb3AtdXAgZm9ybVxuICAgIGNvbnN0IGZvcm1Qb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Qb3BVcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1Qb3BVcCcpO1xuXG4gICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtSW5wdXQnKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZUlucHV0Jyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZUlucHV0Jyk7XG4gICAgdGl0bGVMYWJlbC5pbm5lckhUTUwgPSBcIlRpdGxlOlwiO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvbjpcIjtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gJ0RhdGU6JztcblxuICAgIFxuXG4gICAgY29uc3QgY2xvc2VGb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VGb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VGb3JtQnV0dG9uJyk7XG4gICAgY2xvc2VGb3JtQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRDbG9zZUNsaWNrKGNsb3NlRm9ybUJ1dHRvbik7XG4gICAgY2xvc2VGb3JtQnV0dG9uLmlubmVySFRNTCA9ICdDYW5jZWwnO1xuXG4gICAgY29uc3Qgc3VibWl0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRGb3JtQnV0dG9uJyk7XG4gICAgc3VibWl0Rm9ybUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgc3VibWl0Rm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgMCk7XG4gICAgc3VibWl0Rm9ybUJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkJztcblxuICAgIHN1Ym1pdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZGF0YU51bSA9IHN1Ym1pdEZvcm1CdXR0b24uZGF0YXNldC5udW07XG4gICAgICAgIGhhbmRsZUFkZFRvZG8oZGF0YU51bSk7XG4gICAgfSlcblxuXG4gICAgXG4gICAgXG4gICBcbiAgIC8vQWRkIGNsYXNzIHRvIEVsZW1lbnRzXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZUJhcicpO1xuICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlQmFyJyk7XG5cbiAgICAvLyBwcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RMaXN0JylcbiAgICB0b3BCYXIuY2xhc3NMaXN0LmFkZCgndG9wQmFyJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICBsaXN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0VGl0bGUnKTtcbiAgICBsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlzdCcpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b24nKTtcbiAgICBhZGRDbGljayhhZGRCdXR0b24pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcm9qZWN0SW5wdXQnKTtcblxuICAgIC8vQXBwZW5kIEVsZW1lbnRzXG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BCYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcm1Qb3BVcCk7XG5cbiAgICBmb3JtUG9wVXAuYXBwZW5kQ2hpbGQoZm9ybUlucHV0KTtcbiAgICBmb3JtSW5wdXQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGZvcm1JbnB1dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBmb3JtSW5wdXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgXG4gICAgXG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKHN1Ym1pdEZvcm1CdXR0b24pO1xuICAgIGZvcm1JbnB1dC5hcHBlbmRDaGlsZChjbG9zZUZvcm1CdXR0b24pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgLy8gc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgICAvL0FkZCBjb250ZW50XG4gICBcbiAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuICAgXG5cbiAgICBcbnJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBhZGRDbGljayhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRDbG9zZUNsaWNrKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVBvcFVwJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGxpc3QgPSBbXSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9

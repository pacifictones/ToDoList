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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    padding: 0;\n}\n\n.topBar {\n    width: 100vw;\n    height: 10vh;\n    \n   \n}\n\n.sideBar {\n    width: 25vw;\n    height: 90vh;\n    border: 1px solid black;\n    \n}\n\n.container {\n    display: flex;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid black;\n    width: 75vw;\n    height: 90vh;\n}\n\n#listTitle {\n    width: 100%;\n    height: 50px;\n    background-color: red;\n}\n\n.listRow {\n    display: grid;\n    grid-template-columns: .25fr 1fr 1fr 1fr;\n}\n\n.status, .toDoDate, .toDoMenu  {\n    flex-grow: 1;\n}\n\n.toDoTitle {\n    flex-grow: 2;\n}\n\n.projectTitle {\n    cursor: pointer;\n}\n\n#headerContainer {\n    display: flex;\n    justify-content: space-around;\n    align-self: center;\n    gap: 20px;\n}\n\n#listTitle {\n    display: flex;\n    justify-content: space-around;\n}\n\n#formPopUp {\n    width: 500px;\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    border: 2px solid black;\n    transform: translate(-50%, -50%) scale(1);\n    transition: 200ms ease-in-out;\n    z-index: 10; \n    \n}\n\ninput {\n    width: 95%;\n}\n\n/* .status {\n    width: 30px;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;;;AAGhB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;;AAE3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,wCAAwC;AAC5C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,QAAQ;IACR,SAAS;IACT,uBAAuB;IACvB,yCAAyC;IACzC,6BAA6B;IAC7B,WAAW;;AAEf;;AAEA;IACI,UAAU;AACd;;AAEA;;GAEG","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n}\n\n.topBar {\n    width: 100vw;\n    height: 10vh;\n    \n   \n}\n\n.sideBar {\n    width: 25vw;\n    height: 90vh;\n    border: 1px solid black;\n    \n}\n\n.container {\n    display: flex;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid black;\n    width: 75vw;\n    height: 90vh;\n}\n\n#listTitle {\n    width: 100%;\n    height: 50px;\n    background-color: red;\n}\n\n.listRow {\n    display: grid;\n    grid-template-columns: .25fr 1fr 1fr 1fr;\n}\n\n.status, .toDoDate, .toDoMenu  {\n    flex-grow: 1;\n}\n\n.toDoTitle {\n    flex-grow: 2;\n}\n\n.projectTitle {\n    cursor: pointer;\n}\n\n#headerContainer {\n    display: flex;\n    justify-content: space-around;\n    align-self: center;\n    gap: 20px;\n}\n\n#listTitle {\n    display: flex;\n    justify-content: space-around;\n}\n\n#formPopUp {\n    width: 500px;\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    border: 2px solid black;\n    transform: translate(-50%, -50%) scale(1);\n    transition: 200ms ease-in-out;\n    z-index: 10; \n    \n}\n\ninput {\n    width: 95%;\n}\n\n/* .status {\n    width: 30px;\n} */"],"sourceRoot":""}]);
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
    const toDoTitle = document.createElement('div');
    addClass(toDoTitle, "toDoTitle");
    const toDoDate = document.createElement('div');
    addClass(toDoDate, "toDoDate");
    const toDoMenu = document.createElement('div');
    addClass(toDoMenu, "toDoMenue");
    
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
/* harmony export */   "handleToDoDisplay": () => (/* binding */ handleToDoDisplay)
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
    const status = projectLibrary[p].list[d].status;
    
    if(element.checked) {
        console.log("boom");
    } else {
        console.log('oops');
    }
    console.log(p + " " + d);
    console.log(projectLibrary[p].list[d]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsc0RBQWU7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ2pJZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9wQmFyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIFxcbiAgIFxcbn1cXG5cXG4uc2lkZUJhciB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4jbGlzdFRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubGlzdFJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjI1ZnIgMWZyIDFmciAxZnI7XFxufVxcblxcbi5zdGF0dXMsIC50b0RvRGF0ZSwgLnRvRG9NZW51ICB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRvRG9UaXRsZSB7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2xpc3RUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jZm9ybVBvcFVwIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwOyBcXG4gICAgXFxufVxcblxcbmlucHV0IHtcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLyogLnN0YXR1cyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZOzs7QUFHaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3QixXQUFXOztBQUVmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBOztHQUVHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi50b3BCYXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgXFxuICAgXFxufVxcblxcbi5zaWRlQmFyIHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIFxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxufVxcblxcbiNsaXN0VGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5saXN0Um93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLnN0YXR1cywgLnRvRG9EYXRlLCAudG9Eb01lbnUgIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4udG9Eb1RpdGxlIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbGlzdFRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNmb3JtUG9wVXAge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTA7IFxcbiAgICBcXG59XFxuXFxuaW5wdXQge1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4vKiAuc3RhdHVzIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoYW5kbGVUb0RvRGlzcGxheSwgaGFuZGxlQ2hlY2tCb3ggfSBmcm9tICcuL2luZGV4LmpzJztcblxuXG5cbi8vVGhpcyBtb2R1bGUgYWRkcyBhbmQgdXBkYXRlcyB0aGUgRE9NIHdpdGggcHJvamVjdCB0aXRsZXMgaW4gdGhlIHNpZGUgYmFyLiBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbShwcm9qZWN0TGlicmFyeSkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0TGlzdCcpO1xuICAgIFxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZUJhcicpOyBcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIFxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsaWNrKHByb2plY3RUaXRsZSk7XG4gICAgYWRkQ2xhc3MocHJvamVjdFRpdGxlLCBcInByb2plY3RUaXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdkYXRhLW51bScsIGkpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0TGlicmFyeVtpXS50aXRsZTtcbiAgICBcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIFxufVxufVxuXG5cblxuZnVuY3Rpb24gYWRkQ2xpY2soZWxlbWVudCkge1xuICAgIFxuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgZGF0YU51bSA9IGVsZW1lbnQuZGF0YXNldC5udW07XG4gICAgbGV0IGhlYWRlciA9IGVsZW1lbnQuaW5uZXJIVE1MO1xuICAgIGNsZWFySGVhZGVyKCk7XG4gICAgY3JlYXRlSGVhZGVyKGhlYWRlciwgZGF0YU51bSk7XG4gICAgaGFuZGxlVG9Eb0Rpc3BsYXkoZGF0YU51bSk7XG59KVxufVxuXG5cblxuZnVuY3Rpb24gY2xlYXJIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpO1xuICAgIGhlYWRlckNvbnRhaW5lci5yZW1vdmUoKTtcbn1cblxuXG5cbiBleHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyICh0aXRsZSwgZGF0YW51bSkge1xuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0VGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXJDb250YWluZXInKTtcblxuICAgIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlzdEhlYWRlcicpO1xuICAgIGxpc3RIZWFkZXIuaW5uZXJIVE1MID0gdGl0bGU7XG5cbiAgICBjb25zdCBhZGRUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVG9Eb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRvRG9CdXR0b24nKTtcbiAgICBhZGRUb0RvQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1udW0nLCBkYXRhbnVtKTtcbiAgICBhZGRUb0RvQnV0dG9uLmlubmVySFRNTCA9ICdBZGQgYSBUb0RvJztcbiAgICBhZGRUb0RvQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRUb0RvQ2xpY2soYWRkVG9Eb0J1dHRvbik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Rm9ybUJ1dHRvbicpLnNldEF0dHJpYnV0ZSgnZGF0YS1udW0nLCBkYXRhbnVtKTtcblxuXG4gICAgbGlzdFRpdGxlLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RIZWFkZXIpO1xuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb0RvQnV0dG9uKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRUb0RvQ2xpY2sgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtUG9wVXAnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgfSlcbn1cblxuLy9UaGlzIGZ1bmN0aW9uIGRpc3BsYXlzIGFsbCB0aGUgVG9Eb3MgZm9yIGEgcHJvamVjdCB0byB0aGUgbGlzdCB1bCBlbGVtZW50IGluIHRoZSBcIm1haW5cIiBkaXYuXG4gZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0IChwcm9qZWN0LCBkYXRhTnVtKSB7XG4gICBcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSArKyApe1xuICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBkYXRhTnVtO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3ROdW1iZXIpOyAgICBcbiAgICBjb25zdCBsaXN0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRDbGFzcyhsaXN0Um93LCBcImxpc3RSb3dcIik7XG4gICAgbGlzdFJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgaSk7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGFkZENsYXNzKHN0YXR1cywgXCJzdGF0dXNcIik7XG4gICAgc3RhdHVzLnNldEF0dHJpYnV0ZSgnZGF0YS1udW0nLCBpKTtcbiAgICBzdGF0dXMuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0TnVtYmVyKTtcbiAgICBzdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICBhZGRDbGlja1RvQ2hlY2tib3goc3RhdHVzKTtcbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDbGFzcyh0b0RvVGl0bGUsIFwidG9Eb1RpdGxlXCIpO1xuICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2xhc3ModG9Eb0RhdGUsIFwidG9Eb0RhdGVcIik7XG4gICAgY29uc3QgdG9Eb01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDbGFzcyh0b0RvTWVudSwgXCJ0b0RvTWVudWVcIik7XG4gICAgXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0Um93KTtcbiAgICBsaXN0Um93LmFwcGVuZENoaWxkKHN0YXR1cyk7XG4gICAgbGlzdFJvdy5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuICAgIGxpc3RSb3cuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuICAgIGxpc3RSb3cuYXBwZW5kQ2hpbGQodG9Eb01lbnUpO1xuXG4gICAgXG50b0RvVGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdFtpXS50aXRsZSArIHByb2plY3RbaV0uZGVzY3JpcHRpb247XG5zdGF0dXMuaW5uZXJIVE1MID0gcHJvamVjdFtpXS5wcmlvcml0eTtcbnRvRG9EYXRlLmlubmVySFRNTCA9IHByb2plY3RbaV0uZHVlRGF0ZTtcbnRvRG9NZW51LmlubmVySFRNTCA9ICdvcHRpb25zJztcbn1cblxufVxuXG4vL1RoaXMgZnVuY3Rpb24gYWRkcyBhIGNsYXNzIHRvIGFuIGVsZW1lbnQuIEkgcmVhbGx5IGp1c3QgZGlkIHRoaXMgZm9yIGZ1biBhbmQgcHJhY3RpY2UgYnV0IGFsc28gaSB0aGluayBpdCBzYXZlcyBhIGJpdCBvZiB0aW1lLlxuIGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzd29yZCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3N3b3JkKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xpY2tUb0NoZWNrYm94KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBsZXQgZGF0YU51bSA9IGVsZW1lbnQuZGF0YXNldC5udW07XG4gICAgbGV0IHByb2plY3QgPSBlbGVtZW50LmRhdGFzZXQucHJvamVjdDtcbiAgICBcbiAgICBoYW5kbGVDaGVja0JveChlbGVtZW50LCBwcm9qZWN0LCBkYXRhTnVtKTtcbiAgICB9KVxufVxuXG4iLCJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcbiAgICAgICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL2NyZWF0ZVRvRG8uanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9uZXdQcm9qZWN0LmpzJztcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWRQYWdlLmpzJztcbmltcG9ydCBhZGRQcm9qZWN0VG9Eb20sIHtkaXNwbGF5UHJvamVjdH0gZnJvbSAnLi9hZGRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vYWRkUHJvamVjdC5qcyc7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZFBhZ2UoKSk7XG5cbmNvbnN0IHRvRG8gPSBuZXcgVG9EbygnU2hvcCcsICdHcm9jZXJpZXMnLCAnVG9tb3Jyb3cnKTtcblxuXG5jb25zdCB0b0RvMSA9IG5ldyBUb0RvKFwiRWF0XCIsICdzb21lIGZvb2QnLCBcInRvZGF5XCIpO1xuXG5jb25zdCB0b0RvMyA9IG5ldyBUb0RvKFwiUmVhZFwiLCBcIkJvb2tzXCIsIFwiTm93XCIpO1xuXG5cbmNvbnN0IHByb2plY3RMaWJyYXJ5ID0gW107XG5cbmNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QoXCJzaG9wcGluZ1wiKTtcbnByb2plY3QxLmxpc3QucHVzaCh0b0RvKTtcbnByb2plY3QxLmxpc3QucHVzaCh0b0RvMSk7XG5wcm9qZWN0TGlicmFyeS5wdXNoKHByb2plY3QxKTtcbmNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5KTtcblxuY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgnZWF0aW5nJyk7XG5wcm9qZWN0Mi5saXN0LnB1c2godG9Ebyk7XG5wcm9qZWN0TGlicmFyeS5wdXNoKHByb2plY3QyKTtcblxuY29uc3QgcHJvamVjdDMgPSBuZXcgUHJvamVjdCgneW95b2luZycpO1xucHJvamVjdDMubGlzdC5wdXNoKHRvRG8zKTtcbnByb2plY3RMaWJyYXJ5LnB1c2gocHJvamVjdDMpO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQWRkQnV0dG9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdCcpO1xuICAgIGNvbnN0IGdldE5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdElucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBnZXROZXdQcm9qZWN0LnZhbHVlO1xuICAgIGlmIChnZXROZXdQcm9qZWN0ICYmIGdldE5ld1Byb2plY3QudmFsdWUpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdE5hbWUpO1xuICAgIGdldE5ld1Byb2plY3QudmFsdWUgPSAnJztcbiAgICBwcm9qZWN0TGlicmFyeS5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHByb2plY3RMaXN0LnJlbW92ZSgpO1xuICAgIGFkZFByb2plY3RUb0RvbShwcm9qZWN0TGlicmFyeSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpYnJhcnkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUFkZFRvZG8gKGRhdGFOdW0pIHtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dCcpO1xuICAgIGxldCBuZXdUaXRsZSA9IHRpdGxlLnZhbHVlO1xuICAgIGlmIChuZXdUaXRsZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHRpdGxlIScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XG4gICAgbGV0IG5ld0RhdGUgPSBkYXRlLnZhbHVlO1xuICAgIGlmIChuZXdEYXRlID09PSAnJykge1xuICAgICAgICBuZXdEYXRlID0gXCJObyBkdWUgZGF0ZVwiOyBcbiAgICB9XG5cbiAgICBcblxuICAgIGxldCBuZXdUb0RvID0gbmV3IFRvRG8obmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEYXRlLCBmYWxzZSk7XG4gICAgcHJvamVjdExpYnJhcnlbZGF0YU51bV0ubGlzdC5wdXNoKG5ld1RvRG8pO1xuICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RMaWJyYXJ5W2RhdGFOdW1dLmxpc3QpO1xuXG4gICAgdGl0bGUudmFsdWUgPSAnJztcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgIGRhdGUudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVBvcFVwJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG9Eb0Rpc3BsYXkoZGF0YU51bSkge1xuICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RMaWJyYXJ5W2RhdGFOdW1dLmxpc3QsIGRhdGFOdW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tCb3goZWxlbWVudCwgcCxkKSB7XG4gICAgY29uc3Qgc3RhdHVzID0gcHJvamVjdExpYnJhcnlbcF0ubGlzdFtkXS5zdGF0dXM7XG4gICAgXG4gICAgaWYoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYm9vbVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnb29wcycpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwICsgXCIgXCIgKyBkKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeVtwXS5saXN0W2RdKTtcblxufVxuXG5cbiBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeVswXS5saXN0KTtcblxuXG5cbiBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeVswXS5saXN0KTtcbmNyZWF0ZUhlYWRlcihwcm9qZWN0TGlicmFyeVswXS50aXRsZSwgMCk7XG4gYWRkUHJvamVjdFRvRG9tKHByb2plY3RMaWJyYXJ5KTtcblxuXG5cblxuZGlzcGxheVByb2plY3QocHJvamVjdExpYnJhcnlbMF0ubGlzdCwgMCk7XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeSk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5WzBdLnRpdGxlKTtcbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5WzBdLmxpc3RbMF0uZGVzY3JpcHRpb24pO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeVsxXS50aXRsZSk7IiwiaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoYW5kbGVBZGRCdXR0b24gfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBhZGRQcm9qZWN0VG9Eb20gZnJvbSAnLi9hZGRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGhhbmRsZUFkZFRvZG8gfSBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgLy8gQ3JlYXRlIEVsZW1lbnRzXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIC8vY3JlYXRlIHRoZSBwb3AtdXAgZm9ybVxuICAgIGNvbnN0IGZvcm1Qb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Qb3BVcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1Qb3BVcCcpO1xuXG4gICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtSW5wdXQnKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZUlucHV0Jyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZUlucHV0Jyk7XG4gICAgdGl0bGVMYWJlbC5pbm5lckhUTUwgPSBcIlRpdGxlOlwiO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvbjpcIjtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gJ0RhdGU6JztcblxuICAgIFxuXG4gICAgY29uc3QgY2xvc2VGb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VGb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VGb3JtQnV0dG9uJyk7XG4gICAgY2xvc2VGb3JtQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRDbG9zZUNsaWNrKGNsb3NlRm9ybUJ1dHRvbik7XG4gICAgY2xvc2VGb3JtQnV0dG9uLmlubmVySFRNTCA9ICdDYW5jZWwnO1xuXG4gICAgY29uc3Qgc3VibWl0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRGb3JtQnV0dG9uJyk7XG4gICAgc3VibWl0Rm9ybUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgc3VibWl0Rm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgMCk7XG4gICAgc3VibWl0Rm9ybUJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkJztcblxuICAgIHN1Ym1pdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZGF0YU51bSA9IHN1Ym1pdEZvcm1CdXR0b24uZGF0YXNldC5udW07XG4gICAgICAgIGhhbmRsZUFkZFRvZG8oZGF0YU51bSk7XG4gICAgfSlcblxuXG4gICAgXG4gICAgXG4gICBcbiAgIC8vQWRkIGNsYXNzIHRvIEVsZW1lbnRzXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZUJhcicpO1xuICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlQmFyJyk7XG5cbiAgICAvLyBwcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RMaXN0JylcbiAgICB0b3BCYXIuY2xhc3NMaXN0LmFkZCgndG9wQmFyJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICBsaXN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0VGl0bGUnKTtcbiAgICBsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlzdCcpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b24nKTtcbiAgICBhZGRDbGljayhhZGRCdXR0b24pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcm9qZWN0SW5wdXQnKTtcblxuICAgIC8vQXBwZW5kIEVsZW1lbnRzXG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BCYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcm1Qb3BVcCk7XG5cbiAgICBmb3JtUG9wVXAuYXBwZW5kQ2hpbGQoZm9ybUlucHV0KTtcbiAgICBmb3JtSW5wdXQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGZvcm1JbnB1dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBmb3JtSW5wdXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgXG4gICAgXG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKHN1Ym1pdEZvcm1CdXR0b24pO1xuICAgIGZvcm1JbnB1dC5hcHBlbmRDaGlsZChjbG9zZUZvcm1CdXR0b24pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgLy8gc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgICAvL0FkZCBjb250ZW50XG4gICBcbiAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuICAgXG5cbiAgICBcbnJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBhZGRDbGljayhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBhZGRDbG9zZUNsaWNrKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVBvcFVwJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGxpc3QgPSBbXSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
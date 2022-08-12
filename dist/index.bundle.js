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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    padding: 0;\n}\n\n.topBar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 15vh;\n    background-color: #60a5fa;\n    color: #eff6ff;\n}\n\n.pageTitle {\n    font-size: 58px;\n}\n\n.sideBarButton {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    cursor: pointer;\n    color: #60a5fa;\n\n}\n.sideBar {\n    width: 25vw;\n    height: 90vh;\n    \n    padding: 10px;\n    \n}\n#addProjectInput {\n    \n}\n\n#listHeader {\n    font-size: 30px;\n    color: #1e3a8a;\n    margin-right: 200px;\n   \n}\n\n.addButton {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.container {\n    display: flex;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    padding-right: 25px;\n    width: 75vw;\n    height: 90vh;\n    background-color: #eff6ff;\n}\n\n#listTitle {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;    \n    width: 100%;\n    height: 50px;\n    background-color: #eff6ff;\n    margin-top: 15px;\n    margin-left: 55px;\n    \n}\n\n\n#addToDoButton, #deleteProjectButton {\n    /* margin-right: 50px; */\n    cursor: pointer;\n}\n\n\n\n.listRow {\n    display: grid;\n    justify-content: center;\n    gap: 5px;\n    grid-template-columns: .25fr 2fr 1fr .25fr;\n}\n\n.status, .toDoDate, .toDoMenu  {\n    flex-grow: 1;\n    align-self: center;\n}\n\n.toDoTitle {\n    flex-grow: 2;\n}\n\n.toDoButton {\n    background-color: #60a5fa;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n}\n\ninput.status {\n    cursor: pointer;\n    align-self: center;\n    justify-self: center;\n}\n\n.toDoInfo {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.toDoDescription {\n    font-size: 15px;\n}\n\n#submitFormButton, #closeFormButton, #editSubmitButton, #editCancelButton{\n    background-color: #eff6ff;\n    color: #1e3a8a;\n    padding: 5px;\n    padding-right: 15px;\n    padding-left: 15px;\n    border-radius: 5px;\n    border: none;\n    margin: 5px;\n    font-size: 18px;\n}\n\ninput {\n    height: 24px;\n    border-radius: 5px;\n    color: #1e3a8a;\n}\n\nli {\n    margin-bottom: 5px;\n    padding: 5px;\n    border-top: 1px dashed #3b82f6;\n}\n\n.projectTitle {\n    cursor: pointer;\n    color: #1e3a8a;\n    font-size: 20px;\n    border-top: 1px dashed #3b82f6\n    ;\n    padding: 7px;\n}\n\n#headerContainer {\n    display: flex;\n    justify-content: space-around;\n    align-self: center;\n    gap: 20px;\n}\n\n#list {\n    color: #1e3a8a;\n    font-size: 20px;\n    text-align: center;\n    text-justify: center;\n}\n\nlabel {\n    color: white ;\n    font-size: 20px;\n    margin: 2px;\n}\n\n.formInput, .editForm{\npadding: 10px;\n}\n\n#formPopUp, .editForm{\n    width: 500px;\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    border: 1px solid #3b82f6;\n    border-radius: 5px;\n    background-color: #60a5fa;\n    transform: translate(-50%, -50%) scale(1);\n    transition: 200ms ease-in-out;\n    z-index: 10; \n    \n}\n\n.editForm {\n\n    display: block;\n}\n\ndate {\n    color: #1e3a8a;\n}\n\ninput {\n    width: 95%;\n    font-size: 20px;\n    border: 1px solid #3b82f6;\n    margin-bottom: 5px;\n    padding: 3px;\n}\n \n\n.toDoMenu {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n    position: relative;\n}\n\n\n.popUpMenu {\n    display: none;\n    \n}\n .popUpMenu.open  {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    position: absolute;\n    z-index: 2;\n    background-color: #bfdbfe;\n    padding: 6px;\n    bottom: 30px;\n    right: 10px;\n    border-radius: 5px;\n }\n\n .editButton, .deleteButton  {\n    \n    background-color: #eff6ff;\n    color: #1e3a8a;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n }\n#editSubmitButton {\n    margin-right: 10px;\n}\n \n\n .overlay.active {\n    \n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgb(231, 228, 236);\n    pointer-events: all;\n }\n\n .editBox {\n    width: 500px;\n    display: flex;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    border: 2px solid black;\n    transform: translate(-50%, -50%) scale(1);\n    transition: 200ms ease-in-out;\n    z-index: 10; \n}\n \n.editForm {\n    /* padding: 10px; */\n}\n\n.trashToDoContainer, .addToDoContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #60a5fa;\n    cursor: pointer;\n}\n\n.headerContainer {\n    display: flex;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0;\n    padding: 0;\n}\n\n.topBar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 15vh;\n    background-color: #60a5fa;\n    color: #eff6ff;\n}\n\n.pageTitle {\n    font-size: 58px;\n}\n\n.sideBarButton {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    cursor: pointer;\n    color: #60a5fa;\n\n}\n.sideBar {\n    width: 25vw;\n    height: 90vh;\n    \n    padding: 10px;\n    \n}\n#addProjectInput {\n    \n}\n\n#listHeader {\n    font-size: 30px;\n    color: #1e3a8a;\n    margin-right: 200px;\n   \n}\n\n.addButton {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.container {\n    display: flex;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    padding-right: 25px;\n    width: 75vw;\n    height: 90vh;\n    background-color: #eff6ff;\n}\n\n#listTitle {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;    \n    width: 100%;\n    height: 50px;\n    background-color: #eff6ff;\n    margin-top: 15px;\n    margin-left: 55px;\n    \n}\n\n\n#addToDoButton, #deleteProjectButton {\n    /* margin-right: 50px; */\n    cursor: pointer;\n}\n\n\n\n.listRow {\n    display: grid;\n    justify-content: center;\n    gap: 5px;\n    grid-template-columns: .25fr 2fr 1fr .25fr;\n}\n\n.status, .toDoDate, .toDoMenu  {\n    flex-grow: 1;\n    align-self: center;\n}\n\n.toDoTitle {\n    flex-grow: 2;\n}\n\n.toDoButton {\n    background-color: #60a5fa;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n}\n\ninput.status {\n    cursor: pointer;\n    align-self: center;\n    justify-self: center;\n}\n\n.toDoInfo {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.toDoDescription {\n    font-size: 15px;\n}\n\n#submitFormButton, #closeFormButton, #editSubmitButton, #editCancelButton{\n    background-color: #eff6ff;\n    color: #1e3a8a;\n    padding: 5px;\n    padding-right: 15px;\n    padding-left: 15px;\n    border-radius: 5px;\n    border: none;\n    margin: 5px;\n    font-size: 18px;\n}\n\ninput {\n    height: 24px;\n    border-radius: 5px;\n    color: #1e3a8a;\n}\n\nli {\n    margin-bottom: 5px;\n    padding: 5px;\n    border-top: 1px dashed #3b82f6;\n}\n\n.projectTitle {\n    cursor: pointer;\n    color: #1e3a8a;\n    font-size: 20px;\n    border-top: 1px dashed #3b82f6\n    ;\n    padding: 7px;\n}\n\n#headerContainer {\n    display: flex;\n    justify-content: space-around;\n    align-self: center;\n    gap: 20px;\n}\n\n#list {\n    color: #1e3a8a;\n    font-size: 20px;\n    text-align: center;\n    text-justify: center;\n}\n\nlabel {\n    color: white ;\n    font-size: 20px;\n    margin: 2px;\n}\n\n.formInput, .editForm{\npadding: 10px;\n}\n\n#formPopUp, .editForm{\n    width: 500px;\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    border: 1px solid #3b82f6;\n    border-radius: 5px;\n    background-color: #60a5fa;\n    transform: translate(-50%, -50%) scale(1);\n    transition: 200ms ease-in-out;\n    z-index: 10; \n    \n}\n\n.editForm {\n\n    display: block;\n}\n\ndate {\n    color: #1e3a8a;\n}\n\ninput {\n    width: 95%;\n    font-size: 20px;\n    border: 1px solid #3b82f6;\n    margin-bottom: 5px;\n    padding: 3px;\n}\n \n\n.toDoMenu {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n    position: relative;\n}\n\n\n.popUpMenu {\n    display: none;\n    \n}\n .popUpMenu.open  {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    position: absolute;\n    z-index: 2;\n    background-color: #bfdbfe;\n    padding: 6px;\n    bottom: 30px;\n    right: 10px;\n    border-radius: 5px;\n }\n\n .editButton, .deleteButton  {\n    \n    background-color: #eff6ff;\n    color: #1e3a8a;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n }\n#editSubmitButton {\n    margin-right: 10px;\n}\n \n\n .overlay.active {\n    \n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgb(231, 228, 236);\n    pointer-events: all;\n }\n\n .editBox {\n    width: 500px;\n    display: flex;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    border: 2px solid black;\n    transform: translate(-50%, -50%) scale(1);\n    transition: 200ms ease-in-out;\n    z-index: 10; \n}\n \n.editForm {\n    /* padding: 10px; */\n}\n\n.trashToDoContainer, .addToDoContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #60a5fa;\n    cursor: pointer;\n}\n\n.headerContainer {\n    display: flex;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "clearHeader": () => (/* binding */ clearHeader),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "default": () => (/* binding */ addProjectToDom),
/* harmony export */   "displayProject": () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _icons_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/trash.svg */ "./src/icons/trash.svg");
/* harmony import */ var _icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/plus.svg */ "./src/icons/plus.svg");
/* harmony import */ var _icons_more_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/more.svg */ "./src/icons/more.svg");






const myTrash = new Image();
myTrash.src = _icons_trash_svg__WEBPACK_IMPORTED_MODULE_2__;

const myPlus = new Image();
myPlus.src = _icons_plus_svg__WEBPACK_IMPORTED_MODULE_3__;

const myMore = new Image();
myMore.src = _icons_more_svg__WEBPACK_IMPORTED_MODULE_4__;

//This module adds and updates the DOM with project titles in the side bar. 
function addProjectToDom(projectLibrary) {
    const projectList = document.createElement('div');
    projectList.setAttribute('id', 'projectList');
    
    const sideBar = document.getElementById('sideBar'); 
    sideBar.appendChild(projectList);
if(projectLibrary.length > 0) {
    for (let i = 0; i < projectLibrary.length; i++) {
      
    const projectTitle = document.createElement('div');
    
    addClass(projectTitle, "projectTitle");
    projectTitle.setAttribute('data-num', i);
    const dataNum = projectTitle.dataset.num;
    addClick(projectTitle);
    projectTitle.innerHTML = projectLibrary[i].title;
    
    projectList.appendChild(projectTitle, dataNum);
    }
} return;
}



function addClick(element, dataNum) {
    
element.addEventListener('click', () => {
    let dataNum = element.dataset.num;
    let header = element.innerHTML;
    const headerContainer = document.getElementById('headerContainer');
    if (headerContainer) {
    clearHeader();
    }
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

    const headerButtons = document.createElement('div');
    headerButtons.classList.add('headerButtons');
    const addToDoContainer = document.createElement('div');
    addToDoContainer.classList.add('addToDoContainer');
    const trashToDoContainer = document.createElement('div');
    trashToDoContainer.classList.add('trashToDoContainer');
    const addToDoTitle = document.createElement('div');
    addToDoTitle.classList.add('addToDoTitle');
    const trashToDoTitle = document.createElement('div');
    trashToDoTitle.classList.add('trashToDoTitle');
    const addToDoButton = myPlus;
    addToDoButton.setAttribute('id', 'addToDoButton');
    addToDoButton.setAttribute('data-num', datanum);
    addToDoButton.innerHTML = 'Add a ToDo';
    addToDoButton.type = 'button';
    addToDoClick(addToDoContainer);

    const deleteProjectButton = myTrash;
    deleteProjectButton.setAttribute('id', 'deleteProjectButton');
    deleteProjectButton.setAttribute('type', 'button');
    deleteProjectButton.innerHTML = 'delete project';
    deleteProjectButton.setAttribute('data-num', datanum)
    trashToDoContainer.addEventListener('click', () => {
        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.handleDeleteProject)(datanum);
    });

    document.getElementById('submitFormButton').setAttribute('data-num', datanum);


    listTitle.appendChild(headerContainer);
    headerContainer.appendChild(listHeader);
    headerContainer.appendChild(addToDoContainer);
    
    addToDoContainer.appendChild(addToDoButton);
    addToDoContainer.appendChild(addToDoTitle);
    headerContainer.appendChild(trashToDoContainer);
    trashToDoContainer.appendChild(deleteProjectButton);
    trashToDoContainer.appendChild(trashToDoTitle);

    trashToDoTitle.innerHTML = 'Delete Project';
    addToDoTitle.innerHTML = 'Add todo';
    
}


 function addToDoClick (element) {

    element.addEventListener('click', () => {
    document.getElementById('formPopUp').style.display = "block";

    })
}

//This function displays all the ToDos for a project to the list ul element in the "main" div.
 function displayProject (project, dataNum) {
   
    const list = document.getElementById('list');
   
   if (project){ 
     list.innerHTML = '';
    const projectNumber = dataNum;
    for (let i = 0; i < project.length; i ++ ){

    const projectString = String(projectNumber);    
    const dataCombined = projectString + i;

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
    
    const toDoInfo = document.createElement('div');
    toDoInfo.classList.add('toDoInfo');
    const toDoTitle = document.createElement('div');
    const toDoDescription = document.createElement('div');
    toDoDescription.classList.add('toDoDescription');
    addClass(toDoTitle, "toDoTitle");
    const toDoDate = document.createElement('div');
    addClass(toDoDate, "toDoDate");

    const toDoMenu = document.createElement('div');
    addClass(toDoMenu, "toDoMenu");
    // addMenuClick(toDoMenu, projectNumber, i);

    const toDoButton = document.createElement('button');
    addClass(toDoButton, "toDoButton");
    toDoButton.setAttribute('data-num', i);
    toDoButton.setAttribute('data-project', projectNumber);
    // toDoButton.setAttribute('data-combined', dataCombined);
    addMenuClick(toDoButton, dataCombined);
    

    const popUpMenu = document.createElement('div');
    addClass(popUpMenu, 'popUpMenu');
    popUpMenu.setAttribute('id', dataCombined);
    
    // popUpMenu.setAttribute('data-combined', dataCombined);
    const editButton = document.createElement('button');
    addClass(editButton, "editButton");
    
    
    editButton.innerHTML = 'edit';
    const deleteButton = document.createElement('button');
    addClass(deleteButton, "deleteButton");
    editButton.setAttribute('data-num', i);
    editButton.setAttribute('data-project', projectNumber);
    addEditClick(editButton, projectNumber, i);
    deleteButton.innerHTML = 'delete';
    deleteButton.setAttribute('data-num', i);
    addDeleteClick(deleteButton, projectNumber, i);
    
    

    list.appendChild(listRow);
    listRow.appendChild(status);
    listRow.appendChild(toDoInfo);
    toDoInfo.appendChild(toDoTitle);
    toDoInfo.appendChild(toDoDescription);
    listRow.appendChild(toDoDate);
    listRow.appendChild(toDoMenu);
    toDoMenu.appendChild(popUpMenu);
    popUpMenu.appendChild(editButton);
    popUpMenu.appendChild(deleteButton);
    toDoMenu.appendChild(toDoButton);

    
toDoTitle.innerHTML = project[i].title;
toDoDescription.innerHTML = project[i].description;
status.innerHTML = project[i].priority;
toDoDate.innerHTML = project[i].dueDate;
toDoButton.innerHTML = 'Options';


}    
} else{
list.innerHTML = '';
return;}
}

function addDeleteClick(element, projectNumber, dataNum) {
    element.addEventListener('click', () => {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.handleDeleteTodo)(projectNumber, dataNum);
    })
}


function addMenuClick(element, dataCombined){
    
    element.addEventListener('click', () => {
       const overlay = document.getElementById('overlay');
       const popUp = document.getElementById(dataCombined);
       if(popUp.classList == 'open') {
        popUp.classList.remove('open');
       }
       popUp.classList.add('open');
       overlay.classList.add('active');
       

       overlay.addEventListener('click', () => {
        popUp.classList.remove('open');
        overlay.classList.remove('active');
       })
       
   
    
    
    })
}



//This function adds a class to an element. I really just did this for fun and practice but also i think it saves a bit of time.
 function addClass(element, classword) {
    return element.classList.add(classword);
}

function addClickToCheckbox(element) {
    if(element){
    element.addEventListener('change', () => {
    let dataNum = element.dataset.num;
    let project = element.dataset.project;
    
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.handleCheckBox)(element, project, dataNum);
    })
    } return;
}

function addEditClick(element, projectNumber, dataNum) {
    element.addEventListener('click', () => {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.handleEditButton)(projectNumber, dataNum);
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
/* harmony export */   "handleDeleteProject": () => (/* binding */ handleDeleteProject),
/* harmony export */   "handleDeleteTodo": () => (/* binding */ handleDeleteTodo),
/* harmony export */   "handleEditButton": () => (/* binding */ handleEditButton),
/* harmony export */   "handleEditSubmitButton": () => (/* binding */ handleEditSubmitButton),
/* harmony export */   "handleToDoDisplay": () => (/* binding */ handleToDoDisplay),
/* harmony export */   "setCheckBox": () => (/* binding */ setCheckBox)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo.js */ "./src/createToDo.js");
/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProject.js */ "./src/newProject.js");
/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadPage.js */ "./src/loadPage.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");







document.body.appendChild((0,_loadPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])());

// const toDo = new ToDo('Shop', 'Groceries', 'Today');


// const toDo1 = new ToDo("Eat", 'some food', "Today");

// const toDo3 = new ToDo("Read", "Books", "Now");


const projectLibrary = JSON.parse(localStorage.getItem('projectLibrary')) || [];

// const project1 = new Project("Quick List");
// project1.list.push(toDo);
// project1.list.push(toDo1);
// projectLibrary.push(project1);

// console.log(projectLibrary);

// const project2 = new Project('eating');
// project2.list.push(toDo);
// project2.list.push(toDo);
// projectLibrary.push(project2);

// const project3 = new Project('yoyoing');
// project3.list.push(toDo3);
// projectLibrary.push(project3);

function handleAddButton () {
    const projectList = document.getElementById('projectList');
    const getNewProject = document.getElementById('addProjectInput');
    const newProjectName = getNewProject.value;
    if (getNewProject && getNewProject.value) {
    const newProject = new _newProject_js__WEBPACK_IMPORTED_MODULE_2__["default"](newProjectName);
    getNewProject.value = '';
    projectLibrary.push(newProject);
    
    if(projectLibrary && projectList){
        
    projectList.remove();
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectLibrary);
    console.log(projectLibrary);
    } else {
        (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectLibrary)
    }
    }
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
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
    
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject)(projectLibrary[dataNum].list, dataNum);

    title.value = '';
    description.value = '';
    date.value = '';
    document.getElementById('formPopUp').style.display = "none";
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
}

function handleDeleteTodo(projectNumber, dataNum) {
        projectLibrary[projectNumber].list.splice(dataNum,1);
        console.log(projectLibrary)
        ;(0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject)(projectLibrary[projectNumber].list, projectNumber);
        localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
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
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
}

function setCheckBox(element, p, d) {

    if(projectLibrary[p]) {
    if(projectLibrary[p].list[d].status === true) {
        element.checked = true;
    } else if (projectLibrary[p].list[d].status === false){
         element.checked = false;
    } 

    } return;
 }

 console.log(projectLibrary[0].list);



 console.log(projectLibrary[0].list);
(0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.createHeader)(projectLibrary[0].title, 0);
 (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectLibrary);
(0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject)(projectLibrary[0].list, 0);

function handleEditButton(projectNumber, dataNum) {
    const title = projectLibrary[projectNumber].list[dataNum].title;

    const description = projectLibrary[projectNumber].list[dataNum].description;

    const date = projectLibrary[projectNumber].list[dataNum].dueDate;

    document.body.appendChild((0,_loadPage_js__WEBPACK_IMPORTED_MODULE_3__.createEditBox)(title, description, date, projectNumber, dataNum));
    
}

function handleEditSubmitButton(projectNumber, dataNum){

    let title = document.getElementById('editTitle');
    let newTitle = title.value;

    let description = document.getElementById('editDescription');
    let newDescription = description.value;

    let date = document.getElementById('editDate');
    let newDate = date.value;
    if (newDate === '') {
        newDate = "No due date"; 
    }
    
    let editBox = document.getElementById('editBox');

    projectLibrary[projectNumber].list[dataNum].title = newTitle;

    projectLibrary[projectNumber].list[dataNum].description = newDescription;

    projectLibrary[projectNumber].list[dataNum].dueDate = newDate;

    editBox.remove();
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject)(projectLibrary[projectNumber].list, dataNum)
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
}

function handleDeleteProject(dataNum) {
    const projectList = document.getElementById('projectList');
    projectLibrary.splice(dataNum, 1);
    if(projectLibrary[0]) {
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject)(projectLibrary[0].list, 0);
    projectList.remove();
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectLibrary);
    
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.clearHeader)();
    
        (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.createHeader)(projectLibrary[0].title, 0);
        return;
    }
    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.clearHeader)()
    projectList.remove()
    ;(0,_addProject_js__WEBPACK_IMPORTED_MODULE_4__.displayProject)();
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));

    
}

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
/* harmony export */   "createEditBox": () => (/* binding */ createEditBox),
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
/* harmony import */ var _icons_smallPlus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/smallPlus.svg */ "./src/icons/smallPlus.svg");







const mySmallPlus = new Image();
mySmallPlus.src = _icons_smallPlus_svg__WEBPACK_IMPORTED_MODULE_3__;

function loadPage() {
    // Create Elements
    
    const content = document.createElement('div');
    const topBar = document.createElement('div');
    const pageTitle  = document.createElement('div');
    const container = document.createElement('div');
    const sideBar = document.createElement('div');
    const sideBarButton = document.createElement('div');
    const addButtonText = document.createElement('div');
    // const projectList = document.createElement('div');
    const main = document.createElement('div');
    const addButton = mySmallPlus;
    const listTitle = document.createElement('div');
    const list = document.createElement('ul');
    const input = document.createElement('input');
    input.setAttribute('placeholder', "New Project");

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

    //overlay
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');


    
    
   
   //Add class to Elements
    content.classList.add('content');
    container.classList.add('container');
    sideBar.classList.add('sideBar');
    sideBar.setAttribute('id', 'sideBar');
    overlay.classList.add('overlay');
    sideBarButton.classList.add('sideBarButton');
    sideBarButton.setAttribute('id', 'sideBarButton');

    // projectList.setAttribute('id', 'projectList')
    topBar.classList.add('topBar');
    pageTitle.classList.add('pageTitle');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    listTitle.setAttribute('id', 'listTitle');
    list.setAttribute('id', 'list');
    addButton.classList.add('addButton');
    addClick(sideBarButton);
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'addProjectInput');

    //Append Elements
    
    content.appendChild(topBar);
    topBar.appendChild(pageTitle);
    content.appendChild(container);
    container.appendChild(sideBar);
    container.appendChild(main);
    main.appendChild(listTitle);
    main.appendChild(formPopUp);
    main.appendChild(overlay);

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
    sideBar.appendChild(sideBarButton);
    sideBarButton.appendChild(addButton);
    sideBarButton.appendChild(addButtonText);
    // sideBar.appendChild(projectList);

    //Add content
    pageTitle.innerHTML = "do-it"
    addButtonText.innerHTML = "Add Project";
    
   

    
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

function createEditBox(title, description, date, projectNumber, dataNum){

    //create elements for editBox
    const editBox = document.createElement('div');
    editBox.classList.add('editBox');
    editBox.setAttribute('id', 'editBox');

    const editForm = document.createElement('form');
    editForm.classList.add('editForm');
    editForm.setAttribute('id', 'editForm');

    const editTitle = document.createElement('input');
    editTitle.value = title;
    editTitle.setAttribute('id', 'editTitle');

    const editDescription = document.createElement('input');
    editDescription.value = description;
    editDescription.setAttribute('id', 'editDescription');

    const editDate = document.createElement('input');
 
    editDate.setAttribute('id', 'editDate');
    editDate.setAttribute('type', 'date')
    editDate.value = date;

    const editSubmitButton = document.createElement('button');
    editSubmitButton.setAttribute('id', 'editSubmitButton');
    editSubmitButton.innerHTML = 'Submit changes';
    editSubmitButton.type = 'button';
    editSubmitButton.addEventListener('click', () => {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.handleEditSubmitButton)(projectNumber, dataNum);
    }) 



    const editCancelButton = document.createElement('button');
    editCancelButton.setAttribute('id', 'editCancelButton');
    editCancelButton.innerHTML = 'cancel';
    editCancelButton.type = 'button';
    editCancelButton.addEventListener('click', () => {
        editBox.remove();
    })

    editBox.appendChild(editForm);
    editForm.appendChild(editTitle);
    editForm.appendChild(editDescription);
    editForm.appendChild(editDate);
    editForm.appendChild(editSubmitButton);
    editForm.appendChild(editCancelButton);
    return editBox;

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



/***/ }),

/***/ "./src/icons/more.svg":
/*!****************************!*\
  !*** ./src/icons/more.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46984c20d77638e66e84.svg";

/***/ }),

/***/ "./src/icons/plus.svg":
/*!****************************!*\
  !*** ./src/icons/plus.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afd260b486d3ae015fd8.svg";

/***/ }),

/***/ "./src/icons/smallPlus.svg":
/*!*********************************!*\
  !*** ./src/icons/smallPlus.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b5f40934e8ff0a1b092.svg";

/***/ }),

/***/ "./src/icons/trash.svg":
/*!*****************************!*\
  !*** ./src/icons/trash.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ef06adbdbeaf739ab5a.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxXQUFXLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsZ0NBQWdDLGdCQUFnQixpQkFBaUIsR0FBRyxhQUFhLG9CQUFvQiwwQkFBMEIsOEJBQThCLG1CQUFtQixtQkFBbUIsZ0NBQWdDLHFCQUFxQixHQUFHLGdCQUFnQixzQkFBc0IsR0FBRyxvQkFBb0Isb0JBQW9CLDBCQUEwQixlQUFlLHNCQUFzQixxQkFBcUIsS0FBSyxZQUFZLGtCQUFrQixtQkFBbUIsMEJBQTBCLFNBQVMsb0JBQW9CLFNBQVMsaUJBQWlCLHNCQUFzQixxQkFBcUIsMEJBQTBCLFFBQVEsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsV0FBVyxvQkFBb0IsNkJBQTZCLDBCQUEwQixrQkFBa0IsbUJBQW1CLGdDQUFnQyxHQUFHLGdCQUFnQixvQkFBb0IsMEJBQTBCLHNDQUFzQyxrQkFBa0IsbUJBQW1CLGdDQUFnQyx1QkFBdUIsd0JBQXdCLFNBQVMsNENBQTRDLDZCQUE2Qix3QkFBd0IsR0FBRyxrQkFBa0Isb0JBQW9CLDhCQUE4QixlQUFlLGlEQUFpRCxHQUFHLG9DQUFvQyxtQkFBbUIseUJBQXlCLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLGlCQUFpQixnQ0FBZ0MsbUJBQW1CLG1CQUFtQix5QkFBeUIsbUJBQW1CLHNCQUFzQixHQUFHLGtCQUFrQixzQkFBc0IseUJBQXlCLDJCQUEyQixHQUFHLGVBQWUsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyxzQkFBc0Isc0JBQXNCLEdBQUcsOEVBQThFLGdDQUFnQyxxQkFBcUIsbUJBQW1CLDBCQUEwQix5QkFBeUIseUJBQXlCLG1CQUFtQixrQkFBa0Isc0JBQXNCLEdBQUcsV0FBVyxtQkFBbUIseUJBQXlCLHFCQUFxQixHQUFHLFFBQVEseUJBQXlCLG1CQUFtQixxQ0FBcUMsR0FBRyxtQkFBbUIsc0JBQXNCLHFCQUFxQixzQkFBc0IsMkNBQTJDLG1CQUFtQixHQUFHLHNCQUFzQixvQkFBb0Isb0NBQW9DLHlCQUF5QixnQkFBZ0IsR0FBRyxXQUFXLHFCQUFxQixzQkFBc0IseUJBQXlCLDJCQUEyQixHQUFHLFdBQVcsb0JBQW9CLHNCQUFzQixrQkFBa0IsR0FBRywwQkFBMEIsZ0JBQWdCLEdBQUcsMEJBQTBCLG1CQUFtQixvQkFBb0Isc0JBQXNCLGVBQWUsZ0JBQWdCLGdDQUFnQyx5QkFBeUIsZ0NBQWdDLGdEQUFnRCxvQ0FBb0MsbUJBQW1CLFNBQVMsZUFBZSx1QkFBdUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLFdBQVcsaUJBQWlCLHNCQUFzQixnQ0FBZ0MseUJBQXlCLG1CQUFtQixHQUFHLGtCQUFrQixvQkFBb0IsMEJBQTBCLHdCQUF3Qix5QkFBeUIsR0FBRyxrQkFBa0Isb0JBQW9CLFNBQVMscUJBQXFCLG9CQUFvQixlQUFlLDZCQUE2Qix5QkFBeUIsaUJBQWlCLGdDQUFnQyxtQkFBbUIsbUJBQW1CLGtCQUFrQix5QkFBeUIsSUFBSSxrQ0FBa0Msc0NBQXNDLHFCQUFxQixtQkFBbUIseUJBQXlCLG1CQUFtQixzQkFBc0IsSUFBSSxxQkFBcUIseUJBQXlCLEdBQUcseUJBQXlCLDRCQUE0QixpQkFBaUIsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLDBDQUEwQywwQkFBMEIsSUFBSSxlQUFlLG1CQUFtQixvQkFBb0Isc0JBQXNCLGVBQWUsZ0JBQWdCLDhCQUE4QixnREFBZ0Qsb0NBQW9DLG1CQUFtQixHQUFHLGdCQUFnQix3QkFBd0IsS0FBSyw0Q0FBNEMsb0JBQW9CLDhCQUE4QiwwQkFBMEIscUJBQXFCLHNCQUFzQixHQUFHLHNCQUFzQixvQkFBb0IsR0FBRyxtQkFBbUI7QUFDOTdXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDZ0g7QUFDL0Y7QUFDRjtBQUNBOztBQUVwQztBQUNBLGNBQWMsNkNBQUs7O0FBRW5CO0FBQ0EsYUFBYSw0Q0FBSTs7QUFFakI7QUFDQSxhQUFhLDRDQUFJOztBQUVqQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFpQjtBQUNyQixDQUFDO0FBQ0Q7Ozs7QUFJTztBQUNQO0FBQ0E7QUFDQTs7OztBQUlBLENBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBbUI7QUFDM0IsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9COztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEIsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWM7QUFDbEIsS0FBSztBQUNMLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDL1FBLElBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNScUI7QUFDYztBQUNHO0FBQ2dCO0FBQ3VCO0FBQzlCOztBQUUvQywwQkFBMEIsd0RBQVE7O0FBRWxDOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBZTtBQUNuQjtBQUNBLE1BQU07QUFDTixRQUFRLDBEQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0Isc0RBQUk7QUFDMUI7QUFDQTtBQUNBLElBQUksOERBQWM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxRQUFRLCtEQUFjO0FBQ3RCO0FBQ0E7OztBQUdPO0FBQ1AsSUFBSSw4REFBYztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTTtBQUNOOztBQUVBOzs7O0FBSUE7QUFDQSw0REFBWTtBQUNaLENBQUMsMERBQWU7QUFDaEIsOERBQWM7O0FBRVA7QUFDUDs7QUFFQTs7QUFFQTs7QUFFQSw4QkFBOEIsMkRBQWE7QUFDM0M7QUFDQTs7QUFFTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLDhEQUFjO0FBQ2xCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFjO0FBQ2xCO0FBQ0EsSUFBSSwwREFBZTtBQUNuQjtBQUNBLElBQUksMkRBQVc7QUFDZjtBQUNBLFFBQVEsNERBQVk7QUFDcEI7QUFDQTtBQUNBLElBQUksMkRBQVc7QUFDZjtBQUNBLElBQUksK0RBQWM7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE0rQjtBQUNWO0FBQ3dCO0FBQ2dCO0FBQ007QUFDckI7O0FBRTlDO0FBQ0Esa0JBQWtCLGlEQUFTOztBQUVaO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsd0RBQWE7QUFDckIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxzREFBZTtBQUM1RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQXNCO0FBQzlCLEtBQUs7Ozs7QUFJTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzVNZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udG9wQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBhNWZhO1xcbiAgICBjb2xvcjogI2VmZjZmZjtcXG59XFxuXFxuLnBhZ2VUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNThweDtcXG59XFxuXFxuLnNpZGVCYXJCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzYwYTVmYTtcXG5cXG59XFxuLnNpZGVCYXIge1xcbiAgICB3aWR0aDogMjV2dztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgXFxufVxcbiNhZGRQcm9qZWN0SW5wdXQge1xcbiAgICBcXG59XFxuXFxuI2xpc3RIZWFkZXIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjMWUzYThhO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xcbiAgIFxcbn1cXG5cXG4uYWRkQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG59XFxuXFxuI2xpc3RUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgICAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xcbiAgICBcXG59XFxuXFxuXFxuI2FkZFRvRG9CdXR0b24sICNkZWxldGVQcm9qZWN0QnV0dG9uIHtcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiA1MHB4OyAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbi5saXN0Um93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDJmciAxZnIgLjI1ZnI7XFxufVxcblxcbi5zdGF0dXMsIC50b0RvRGF0ZSwgLnRvRG9NZW51ICB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9Eb1RpdGxlIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbn1cXG5cXG4udG9Eb0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGE1ZmE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dC5zdGF0dXMge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b0RvSW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9Eb0Rlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4jc3VibWl0Rm9ybUJ1dHRvbiwgI2Nsb3NlRm9ybUJ1dHRvbiwgI2VkaXRTdWJtaXRCdXR0b24sICNlZGl0Q2FuY2VsQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBjb2xvcjogIzFlM2E4YTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogIzFlM2E4YTtcXG59XFxuXFxubGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjM2I4MmY2O1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzFlM2E4YTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICMzYjgyZjZcXG4gICAgO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbiNoZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNsaXN0IHtcXG4gICAgY29sb3I6ICMxZTNhOGE7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG59XFxuXFxubGFiZWwge1xcbiAgICBjb2xvcjogd2hpdGUgO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4uZm9ybUlucHV0LCAuZWRpdEZvcm17XFxucGFkZGluZzogMTBweDtcXG59XFxuXFxuI2Zvcm1Qb3BVcCwgLmVkaXRGb3Jte1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNiODJmNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBhNWZhO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwOyBcXG4gICAgXFxufVxcblxcbi5lZGl0Rm9ybSB7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5kYXRlIHtcXG4gICAgY29sb3I6ICMxZTNhOGE7XFxufVxcblxcbmlucHV0IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2I4MmY2O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG59XFxuIFxcblxcbi50b0RvTWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5wb3BVcE1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuIC5wb3BVcE1lbnUub3BlbiAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZkYmZlO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGJvdHRvbTogMzBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gfVxcblxcbiAuZWRpdEJ1dHRvbiwgLmRlbGV0ZUJ1dHRvbiAge1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgY29sb3I6ICMxZTNhOGE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gfVxcbiNlZGl0U3VibWl0QnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4gXFxuXFxuIC5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMxLCAyMjgsIDIzNik7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuIH1cXG5cXG4gLmVkaXRCb3gge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTA7IFxcbn1cXG4gXFxuLmVkaXRGb3JtIHtcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuXFxuLnRyYXNoVG9Eb0NvbnRhaW5lciwgLmFkZFRvRG9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6ICM2MGE1ZmE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixlQUFlO0lBQ2YsY0FBYzs7QUFFbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGFBQWE7O0FBRWpCO0FBQ0E7O0FBRUE7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJ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QjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRvcEJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwYTVmYTtcXG4gICAgY29sb3I6ICNlZmY2ZmY7XFxufVxcblxcbi5wYWdlVGl0bGUge1xcbiAgICBmb250LXNpemU6IDU4cHg7XFxufVxcblxcbi5zaWRlQmFyQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICM2MGE1ZmE7XFxuXFxufVxcbi5zaWRlQmFyIHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIFxcbn1cXG4jYWRkUHJvamVjdElucHV0IHtcXG4gICAgXFxufVxcblxcbiNsaXN0SGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogIzFlM2E4YTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcXG4gICBcXG59XFxuXFxuLmFkZEJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxufVxcblxcbiNsaXN0VGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNmZmO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNTVweDtcXG4gICAgXFxufVxcblxcblxcbiNhZGRUb0RvQnV0dG9uLCAjZGVsZXRlUHJvamVjdEJ1dHRvbiB7XFxuICAgIC8qIG1hcmdpbi1yaWdodDogNTBweDsgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4ubGlzdFJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAyZnIgMWZyIC4yNWZyO1xcbn1cXG5cXG4uc3RhdHVzLCAudG9Eb0RhdGUsIC50b0RvTWVudSAge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvRG9UaXRsZSB7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG59XFxuXFxuLnRvRG9CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBhNWZhO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQuc3RhdHVzIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9Eb0luZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRvRG9EZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuI3N1Ym1pdEZvcm1CdXR0b24sICNjbG9zZUZvcm1CdXR0b24sICNlZGl0U3VibWl0QnV0dG9uLCAjZWRpdENhbmNlbEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjZmZjtcXG4gICAgY29sb3I6ICMxZTNhOGE7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6ICMxZTNhOGE7XFxufVxcblxcbmxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzNiODJmNjtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMxZTNhOGE7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjM2I4MmY2XFxuICAgIDtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbGlzdCB7XFxuICAgIGNvbG9yOiAjMWUzYThhO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgY29sb3I6IHdoaXRlIDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDJweDtcXG59XFxuXFxuLmZvcm1JbnB1dCwgLmVkaXRGb3Jte1xcbnBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNmb3JtUG9wVXAsIC5lZGl0Rm9ybXtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYjgyZjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwYTVmYTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDsgXFxuICAgIFxcbn1cXG5cXG4uZWRpdEZvcm0ge1xcblxcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZGF0ZSB7XFxuICAgIGNvbG9yOiAjMWUzYThhO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNiODJmNjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcbiBcXG5cXG4udG9Eb01lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4ucG9wVXBNZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxufVxcbiAucG9wVXBNZW51Lm9wZW4gIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmZGJmZTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuIH1cXG5cXG4gLmVkaXRCdXR0b24sIC5kZWxldGVCdXR0b24gIHtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY2ZmY7XFxuICAgIGNvbG9yOiAjMWUzYThhO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuIH1cXG4jZWRpdFN1Ym1pdEJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuIFxcblxcbiAub3ZlcmxheS5hY3RpdmUge1xcbiAgICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIzMSwgMjI4LCAyMzYpO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiB9XFxuXFxuIC5lZGl0Qm94IHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwOyBcXG59XFxuIFxcbi5lZGl0Rm9ybSB7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcblxcbi50cmFzaFRvRG9Db250YWluZXIsIC5hZGRUb0RvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjNjBhNWZhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGFuZGxlVG9Eb0Rpc3BsYXksIGhhbmRsZUNoZWNrQm94LCBzZXRDaGVja0JveCwgaGFuZGxlRGVsZXRlVG9kbywgaGFuZGxlRWRpdEJ1dHRvbiwgaGFuZGxlRGVsZXRlUHJvamVjdCB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IFRyYXNoIGZyb20gJy4vaWNvbnMvdHJhc2guc3ZnJztcbmltcG9ydCBQbHVzIGZyb20gJy4vaWNvbnMvcGx1cy5zdmcnO1xuaW1wb3J0IE1vcmUgZnJvbSAnLi9pY29ucy9tb3JlLnN2Zyc7XG5cbmNvbnN0IG15VHJhc2ggPSBuZXcgSW1hZ2UoKTtcbm15VHJhc2guc3JjID0gVHJhc2g7XG5cbmNvbnN0IG15UGx1cyA9IG5ldyBJbWFnZSgpO1xubXlQbHVzLnNyYyA9IFBsdXM7XG5cbmNvbnN0IG15TW9yZSA9IG5ldyBJbWFnZSgpO1xubXlNb3JlLnNyYyA9IE1vcmU7XG5cbi8vVGhpcyBtb2R1bGUgYWRkcyBhbmQgdXBkYXRlcyB0aGUgRE9NIHdpdGggcHJvamVjdCB0aXRsZXMgaW4gdGhlIHNpZGUgYmFyLiBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbShwcm9qZWN0TGlicmFyeSkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0TGlzdCcpO1xuICAgIFxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZUJhcicpOyBcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbmlmKHByb2plY3RMaWJyYXJ5Lmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaWJyYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBhZGRDbGFzcyhwcm9qZWN0VGl0bGUsIFwicHJvamVjdFRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgaSk7XG4gICAgY29uc3QgZGF0YU51bSA9IHByb2plY3RUaXRsZS5kYXRhc2V0Lm51bTtcbiAgICBhZGRDbGljayhwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0TGlicmFyeVtpXS50aXRsZTtcbiAgICBcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUsIGRhdGFOdW0pO1xuICAgIH1cbn0gcmV0dXJuO1xufVxuXG5cblxuZnVuY3Rpb24gYWRkQ2xpY2soZWxlbWVudCwgZGF0YU51bSkge1xuICAgIFxuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgZGF0YU51bSA9IGVsZW1lbnQuZGF0YXNldC5udW07XG4gICAgbGV0IGhlYWRlciA9IGVsZW1lbnQuaW5uZXJIVE1MO1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJDb250YWluZXInKTtcbiAgICBpZiAoaGVhZGVyQ29udGFpbmVyKSB7XG4gICAgY2xlYXJIZWFkZXIoKTtcbiAgICB9XG4gICAgY3JlYXRlSGVhZGVyKGhlYWRlciwgZGF0YU51bSk7XG4gICAgaGFuZGxlVG9Eb0Rpc3BsYXkoZGF0YU51bSk7XG59KVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFySGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJDb250YWluZXInKTtcbiAgICBoZWFkZXJDb250YWluZXIucmVtb3ZlKCk7XG59XG5cblxuXG4gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlciAodGl0bGUsIGRhdGFudW0pIHtcbiAgICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdFRpdGxlJyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBsaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xpc3RIZWFkZXInKTtcbiAgICBsaXN0SGVhZGVyLmlubmVySFRNTCA9IHRpdGxlO1xuXG4gICAgY29uc3QgaGVhZGVyQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQnV0dG9ucycpO1xuICAgIGNvbnN0IGFkZFRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUb0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZFRvRG9Db250YWluZXInKTtcbiAgICBjb25zdCB0cmFzaFRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFzaFRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndHJhc2hUb0RvQ29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2FkZFRvRG9UaXRsZScpO1xuICAgIGNvbnN0IHRyYXNoVG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHJhc2hUb0RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhc2hUb0RvVGl0bGUnKTtcbiAgICBjb25zdCBhZGRUb0RvQnV0dG9uID0gbXlQbHVzO1xuICAgIGFkZFRvRG9CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUb0RvQnV0dG9uJyk7XG4gICAgYWRkVG9Eb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgZGF0YW51bSk7XG4gICAgYWRkVG9Eb0J1dHRvbi5pbm5lckhUTUwgPSAnQWRkIGEgVG9Ebyc7XG4gICAgYWRkVG9Eb0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkVG9Eb0NsaWNrKGFkZFRvRG9Db250YWluZXIpO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IG15VHJhc2g7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZVByb2plY3RCdXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9ICdkZWxldGUgcHJvamVjdCc7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgZGF0YW51bSlcbiAgICB0cmFzaFRvRG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGhhbmRsZURlbGV0ZVByb2plY3QoZGF0YW51bSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Rm9ybUJ1dHRvbicpLnNldEF0dHJpYnV0ZSgnZGF0YS1udW0nLCBkYXRhbnVtKTtcblxuXG4gICAgbGlzdFRpdGxlLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RIZWFkZXIpO1xuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb0RvQ29udGFpbmVyKTtcbiAgICBcbiAgICBhZGRUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvRG9CdXR0b24pO1xuICAgIGFkZFRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9Eb1RpdGxlKTtcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodHJhc2hUb0RvQ29udGFpbmVyKTtcbiAgICB0cmFzaFRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgdHJhc2hUb0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRyYXNoVG9Eb1RpdGxlKTtcblxuICAgIHRyYXNoVG9Eb1RpdGxlLmlubmVySFRNTCA9ICdEZWxldGUgUHJvamVjdCc7XG4gICAgYWRkVG9Eb1RpdGxlLmlubmVySFRNTCA9ICdBZGQgdG9kbyc7XG4gICAgXG59XG5cblxuIGZ1bmN0aW9uIGFkZFRvRG9DbGljayAoZWxlbWVudCkge1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVBvcFVwJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIH0pXG59XG5cbi8vVGhpcyBmdW5jdGlvbiBkaXNwbGF5cyBhbGwgdGhlIFRvRG9zIGZvciBhIHByb2plY3QgdG8gdGhlIGxpc3QgdWwgZWxlbWVudCBpbiB0aGUgXCJtYWluXCIgZGl2LlxuIGV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdCAocHJvamVjdCwgZGF0YU51bSkge1xuICAgXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG4gICBcbiAgIGlmIChwcm9qZWN0KXsgXG4gICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcHJvamVjdE51bWJlciA9IGRhdGFOdW07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSArKyApe1xuXG4gICAgY29uc3QgcHJvamVjdFN0cmluZyA9IFN0cmluZyhwcm9qZWN0TnVtYmVyKTsgICAgXG4gICAgY29uc3QgZGF0YUNvbWJpbmVkID0gcHJvamVjdFN0cmluZyArIGk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TnVtYmVyKTsgICAgXG4gICAgY29uc3QgbGlzdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkQ2xhc3MobGlzdFJvdywgXCJsaXN0Um93XCIpO1xuICAgIGxpc3RSb3cuc2V0QXR0cmlidXRlKCdkYXRhLW51bScsIGkpO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhZGRDbGFzcyhzdGF0dXMsIFwic3RhdHVzXCIpO1xuICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgaSk7XG4gICAgc3RhdHVzLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcHJvamVjdE51bWJlcik7XG4gICAgc3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgYWRkQ2xpY2tUb0NoZWNrYm94KHN0YXR1cyk7XG4gICAgc2V0Q2hlY2tCb3goc3RhdHVzLCBwcm9qZWN0TnVtYmVyLCBpKTtcbiAgICBcbiAgICBjb25zdCB0b0RvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvRG9JbmZvLmNsYXNzTGlzdC5hZGQoJ3RvRG9JbmZvJyk7XG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvRG9EZXNjcmlwdGlvbicpO1xuICAgIGFkZENsYXNzKHRvRG9UaXRsZSwgXCJ0b0RvVGl0bGVcIik7XG4gICAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDbGFzcyh0b0RvRGF0ZSwgXCJ0b0RvRGF0ZVwiKTtcblxuICAgIGNvbnN0IHRvRG9NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2xhc3ModG9Eb01lbnUsIFwidG9Eb01lbnVcIik7XG4gICAgLy8gYWRkTWVudUNsaWNrKHRvRG9NZW51LCBwcm9qZWN0TnVtYmVyLCBpKTtcblxuICAgIGNvbnN0IHRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRDbGFzcyh0b0RvQnV0dG9uLCBcInRvRG9CdXR0b25cIik7XG4gICAgdG9Eb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgaSk7XG4gICAgdG9Eb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3ROdW1iZXIpO1xuICAgIC8vIHRvRG9CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWNvbWJpbmVkJywgZGF0YUNvbWJpbmVkKTtcbiAgICBhZGRNZW51Q2xpY2sodG9Eb0J1dHRvbiwgZGF0YUNvbWJpbmVkKTtcbiAgICBcblxuICAgIGNvbnN0IHBvcFVwTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzKHBvcFVwTWVudSwgJ3BvcFVwTWVudScpO1xuICAgIHBvcFVwTWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgZGF0YUNvbWJpbmVkKTtcbiAgICBcbiAgICAvLyBwb3BVcE1lbnUuc2V0QXR0cmlidXRlKCdkYXRhLWNvbWJpbmVkJywgZGF0YUNvbWJpbmVkKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQ2xhc3MoZWRpdEJ1dHRvbiwgXCJlZGl0QnV0dG9uXCIpO1xuICAgIFxuICAgIFxuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gJ2VkaXQnO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZENsYXNzKGRlbGV0ZUJ1dHRvbiwgXCJkZWxldGVCdXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtJywgaSk7XG4gICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3ROdW1iZXIpO1xuICAgIGFkZEVkaXRDbGljayhlZGl0QnV0dG9uLCBwcm9qZWN0TnVtYmVyLCBpKTtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJ2RlbGV0ZSc7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1udW0nLCBpKTtcbiAgICBhZGREZWxldGVDbGljayhkZWxldGVCdXR0b24sIHByb2plY3ROdW1iZXIsIGkpO1xuICAgIFxuICAgIFxuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0Um93KTtcbiAgICBsaXN0Um93LmFwcGVuZENoaWxkKHN0YXR1cyk7XG4gICAgbGlzdFJvdy5hcHBlbmRDaGlsZCh0b0RvSW5mbyk7XG4gICAgdG9Eb0luZm8uYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcbiAgICB0b0RvSW5mby5hcHBlbmRDaGlsZCh0b0RvRGVzY3JpcHRpb24pO1xuICAgIGxpc3RSb3cuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuICAgIGxpc3RSb3cuYXBwZW5kQ2hpbGQodG9Eb01lbnUpO1xuICAgIHRvRG9NZW51LmFwcGVuZENoaWxkKHBvcFVwTWVudSk7XG4gICAgcG9wVXBNZW51LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHBvcFVwTWVudS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHRvRG9NZW51LmFwcGVuZENoaWxkKHRvRG9CdXR0b24pO1xuXG4gICAgXG50b0RvVGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdFtpXS50aXRsZTtcbnRvRG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0W2ldLmRlc2NyaXB0aW9uO1xuc3RhdHVzLmlubmVySFRNTCA9IHByb2plY3RbaV0ucHJpb3JpdHk7XG50b0RvRGF0ZS5pbm5lckhUTUwgPSBwcm9qZWN0W2ldLmR1ZURhdGU7XG50b0RvQnV0dG9uLmlubmVySFRNTCA9ICdPcHRpb25zJztcblxuXG59ICAgIFxufSBlbHNle1xubGlzdC5pbm5lckhUTUwgPSAnJztcbnJldHVybjt9XG59XG5cbmZ1bmN0aW9uIGFkZERlbGV0ZUNsaWNrKGVsZW1lbnQsIHByb2plY3ROdW1iZXIsIGRhdGFOdW0pIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoYW5kbGVEZWxldGVUb2RvKHByb2plY3ROdW1iZXIsIGRhdGFOdW0pO1xuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gYWRkTWVudUNsaWNrKGVsZW1lbnQsIGRhdGFDb21iaW5lZCl7XG4gICAgXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcbiAgICAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGFDb21iaW5lZCk7XG4gICAgICAgaWYocG9wVXAuY2xhc3NMaXN0ID09ICdvcGVuJykge1xuICAgICAgICBwb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgfVxuICAgICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgIFxuXG4gICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgIH0pXG4gICAgICAgXG4gICBcbiAgICBcbiAgICBcbiAgICB9KVxufVxuXG5cblxuLy9UaGlzIGZ1bmN0aW9uIGFkZHMgYSBjbGFzcyB0byBhbiBlbGVtZW50LiBJIHJlYWxseSBqdXN0IGRpZCB0aGlzIGZvciBmdW4gYW5kIHByYWN0aWNlIGJ1dCBhbHNvIGkgdGhpbmsgaXQgc2F2ZXMgYSBiaXQgb2YgdGltZS5cbiBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc3dvcmQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzd29yZCk7XG59XG5cbmZ1bmN0aW9uIGFkZENsaWNrVG9DaGVja2JveChlbGVtZW50KSB7XG4gICAgaWYoZWxlbWVudCl7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgbGV0IGRhdGFOdW0gPSBlbGVtZW50LmRhdGFzZXQubnVtO1xuICAgIGxldCBwcm9qZWN0ID0gZWxlbWVudC5kYXRhc2V0LnByb2plY3Q7XG4gICAgXG4gICAgaGFuZGxlQ2hlY2tCb3goZWxlbWVudCwgcHJvamVjdCwgZGF0YU51bSk7XG4gICAgfSlcbiAgICB9IHJldHVybjtcbn1cblxuZnVuY3Rpb24gYWRkRWRpdENsaWNrKGVsZW1lbnQsIHByb2plY3ROdW1iZXIsIGRhdGFOdW0pIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoYW5kbGVFZGl0QnV0dG9uKHByb2plY3ROdW1iZXIsIGRhdGFOdW0pO1xuICAgIH0pXG59XG4iLCJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcbiAgICAgICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL2NyZWF0ZVRvRG8uanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9uZXdQcm9qZWN0LmpzJztcbmltcG9ydCBsb2FkUGFnZSwge2NyZWF0ZUVkaXRCb3h9IGZyb20gJy4vbG9hZFBhZ2UuanMnO1xuaW1wb3J0IGFkZFByb2plY3RUb0RvbSwge2NsZWFySGVhZGVyLCBkaXNwbGF5UHJvamVjdH0gZnJvbSAnLi9hZGRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vYWRkUHJvamVjdC5qcyc7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZFBhZ2UoKSk7XG5cbi8vIGNvbnN0IHRvRG8gPSBuZXcgVG9EbygnU2hvcCcsICdHcm9jZXJpZXMnLCAnVG9kYXknKTtcblxuXG4vLyBjb25zdCB0b0RvMSA9IG5ldyBUb0RvKFwiRWF0XCIsICdzb21lIGZvb2QnLCBcIlRvZGF5XCIpO1xuXG4vLyBjb25zdCB0b0RvMyA9IG5ldyBUb0RvKFwiUmVhZFwiLCBcIkJvb2tzXCIsIFwiTm93XCIpO1xuXG5cbmNvbnN0IHByb2plY3RMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpYnJhcnknKSkgfHwgW107XG5cbi8vIGNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QoXCJRdWljayBMaXN0XCIpO1xuLy8gcHJvamVjdDEubGlzdC5wdXNoKHRvRG8pO1xuLy8gcHJvamVjdDEubGlzdC5wdXNoKHRvRG8xKTtcbi8vIHByb2plY3RMaWJyYXJ5LnB1c2gocHJvamVjdDEpO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeSk7XG5cbi8vIGNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoJ2VhdGluZycpO1xuLy8gcHJvamVjdDIubGlzdC5wdXNoKHRvRG8pO1xuLy8gcHJvamVjdDIubGlzdC5wdXNoKHRvRG8pO1xuLy8gcHJvamVjdExpYnJhcnkucHVzaChwcm9qZWN0Mik7XG5cbi8vIGNvbnN0IHByb2plY3QzID0gbmV3IFByb2plY3QoJ3lveW9pbmcnKTtcbi8vIHByb2plY3QzLmxpc3QucHVzaCh0b0RvMyk7XG4vLyBwcm9qZWN0TGlicmFyeS5wdXNoKHByb2plY3QzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUFkZEJ1dHRvbiAoKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcbiAgICBjb25zdCBnZXROZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RJbnB1dCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZ2V0TmV3UHJvamVjdC52YWx1ZTtcbiAgICBpZiAoZ2V0TmV3UHJvamVjdCAmJiBnZXROZXdQcm9qZWN0LnZhbHVlKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTtcbiAgICBnZXROZXdQcm9qZWN0LnZhbHVlID0gJyc7XG4gICAgcHJvamVjdExpYnJhcnkucHVzaChuZXdQcm9qZWN0KTtcbiAgICBcbiAgICBpZihwcm9qZWN0TGlicmFyeSAmJiBwcm9qZWN0TGlzdCl7XG4gICAgICAgIFxuICAgIHByb2plY3RMaXN0LnJlbW92ZSgpO1xuICAgIGFkZFByb2plY3RUb0RvbShwcm9qZWN0TGlicmFyeSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpYnJhcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFByb2plY3RUb0RvbShwcm9qZWN0TGlicmFyeSlcbiAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlicmFyeScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaWJyYXJ5KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBZGRUb2RvIChkYXRhTnVtKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSW5wdXQnKTtcbiAgICBsZXQgbmV3VGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICBpZiAobmV3VGl0bGUgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgIGxldCBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgIGxldCBuZXdEYXRlID0gZGF0ZS52YWx1ZTtcbiAgICBpZiAobmV3RGF0ZSA9PT0gJycpIHtcbiAgICAgICAgbmV3RGF0ZSA9IFwiTm8gZHVlIGRhdGVcIjsgXG4gICAgfVxuXG4gICAgXG5cbiAgICBsZXQgbmV3VG9EbyA9IG5ldyBUb0RvKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RGF0ZSwgZmFsc2UpO1xuICAgIHByb2plY3RMaWJyYXJ5W2RhdGFOdW1dLmxpc3QucHVzaChuZXdUb0RvKTtcbiAgICBcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlicmFyeVtkYXRhTnVtXS5saXN0LCBkYXRhTnVtKTtcblxuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICBkYXRlLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Qb3BVcCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpYnJhcnknLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlicmFyeSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRGVsZXRlVG9kbyhwcm9qZWN0TnVtYmVyLCBkYXRhTnVtKSB7XG4gICAgICAgIHByb2plY3RMaWJyYXJ5W3Byb2plY3ROdW1iZXJdLmxpc3Quc3BsaWNlKGRhdGFOdW0sMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5KVxuICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlicmFyeVtwcm9qZWN0TnVtYmVyXS5saXN0LCBwcm9qZWN0TnVtYmVyKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaWJyYXJ5JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpYnJhcnkpKTtcbiAgICB9XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvRG9EaXNwbGF5KGRhdGFOdW0pIHtcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlicmFyeVtkYXRhTnVtXS5saXN0LCBkYXRhTnVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94KGVsZW1lbnQsIHAsZCkge1xuICAgICAgIFxuICAgIGlmKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICBwcm9qZWN0TGlicmFyeVtwXS5saXN0W2RdLnN0YXR1cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdExpYnJhcnlbcF0ubGlzdFtkXS5zdGF0dXMgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocCArIFwiIFwiICsgZCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpYnJhcnlbcF0ubGlzdFtkXS5zdGF0dXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlicmFyeScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaWJyYXJ5KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDaGVja0JveChlbGVtZW50LCBwLCBkKSB7XG5cbiAgICBpZihwcm9qZWN0TGlicmFyeVtwXSkge1xuICAgIGlmKHByb2plY3RMaWJyYXJ5W3BdLmxpc3RbZF0uc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0TGlicmFyeVtwXS5saXN0W2RdLnN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBcblxuICAgIH0gcmV0dXJuO1xuIH1cblxuIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5WzBdLmxpc3QpO1xuXG5cblxuIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5WzBdLmxpc3QpO1xuY3JlYXRlSGVhZGVyKHByb2plY3RMaWJyYXJ5WzBdLnRpdGxlLCAwKTtcbiBhZGRQcm9qZWN0VG9Eb20ocHJvamVjdExpYnJhcnkpO1xuZGlzcGxheVByb2plY3QocHJvamVjdExpYnJhcnlbMF0ubGlzdCwgMCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFZGl0QnV0dG9uKHByb2plY3ROdW1iZXIsIGRhdGFOdW0pIHtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RMaWJyYXJ5W3Byb2plY3ROdW1iZXJdLmxpc3RbZGF0YU51bV0udGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2plY3RMaWJyYXJ5W3Byb2plY3ROdW1iZXJdLmxpc3RbZGF0YU51bV0uZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkYXRlID0gcHJvamVjdExpYnJhcnlbcHJvamVjdE51bWJlcl0ubGlzdFtkYXRhTnVtXS5kdWVEYXRlO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVFZGl0Qm94KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdE51bWJlciwgZGF0YU51bSkpO1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRWRpdFN1Ym1pdEJ1dHRvbihwcm9qZWN0TnVtYmVyLCBkYXRhTnVtKXtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGl0bGUnKTtcbiAgICBsZXQgbmV3VGl0bGUgPSB0aXRsZS52YWx1ZTtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RGVzY3JpcHRpb24nKTtcbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcblxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXREYXRlJyk7XG4gICAgbGV0IG5ld0RhdGUgPSBkYXRlLnZhbHVlO1xuICAgIGlmIChuZXdEYXRlID09PSAnJykge1xuICAgICAgICBuZXdEYXRlID0gXCJObyBkdWUgZGF0ZVwiOyBcbiAgICB9XG4gICAgXG4gICAgbGV0IGVkaXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEJveCcpO1xuXG4gICAgcHJvamVjdExpYnJhcnlbcHJvamVjdE51bWJlcl0ubGlzdFtkYXRhTnVtXS50aXRsZSA9IG5ld1RpdGxlO1xuXG4gICAgcHJvamVjdExpYnJhcnlbcHJvamVjdE51bWJlcl0ubGlzdFtkYXRhTnVtXS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuXG4gICAgcHJvamVjdExpYnJhcnlbcHJvamVjdE51bWJlcl0ubGlzdFtkYXRhTnVtXS5kdWVEYXRlID0gbmV3RGF0ZTtcblxuICAgIGVkaXRCb3gucmVtb3ZlKCk7XG4gICAgZGlzcGxheVByb2plY3QocHJvamVjdExpYnJhcnlbcHJvamVjdE51bWJlcl0ubGlzdCwgZGF0YU51bSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpYnJhcnknLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlicmFyeSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvamVjdChkYXRhTnVtKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcbiAgICBwcm9qZWN0TGlicmFyeS5zcGxpY2UoZGF0YU51bSwgMSk7XG4gICAgaWYocHJvamVjdExpYnJhcnlbMF0pIHtcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TGlicmFyeVswXS5saXN0LCAwKTtcbiAgICBwcm9qZWN0TGlzdC5yZW1vdmUoKTtcbiAgICBhZGRQcm9qZWN0VG9Eb20ocHJvamVjdExpYnJhcnkpO1xuICAgIFxuICAgIGNsZWFySGVhZGVyKCk7XG4gICAgXG4gICAgICAgIGNyZWF0ZUhlYWRlcihwcm9qZWN0TGlicmFyeVswXS50aXRsZSwgMCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJIZWFkZXIoKVxuICAgIHByb2plY3RMaXN0LnJlbW92ZSgpXG4gICAgZGlzcGxheVByb2plY3QoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpYnJhcnknLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlicmFyeSkpO1xuXG4gICAgXG59XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5KTtcblxuLy8gY29uc29sZS5sb2cocHJvamVjdExpYnJhcnlbMF0udGl0bGUpO1xuLy8gY29uc29sZS5sb2cocHJvamVjdExpYnJhcnlbMF0ubGlzdFswXS5kZXNjcmlwdGlvbik7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5WzFdLnRpdGxlKTsiLCJpbXBvcnQgeyBhZGQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhhbmRsZUFkZEJ1dHRvbiB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IGFkZFByb2plY3RUb0RvbSwgeyBjbG9zZVBvcFVwfSBmcm9tICcuL2FkZFByb2plY3QuanMnO1xuaW1wb3J0IHsgaGFuZGxlQWRkVG9kbywgaGFuZGxlRWRpdFN1Ym1pdEJ1dHRvbiB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IFNtYWxsUGx1cyBmcm9tICcuL2ljb25zL3NtYWxsUGx1cy5zdmcnO1xuXG5jb25zdCBteVNtYWxsUGx1cyA9IG5ldyBJbWFnZSgpO1xubXlTbWFsbFBsdXMuc3JjID0gU21hbGxQbHVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICAvLyBDcmVhdGUgRWxlbWVudHNcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGFnZVRpdGxlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzaWRlQmFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkQnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IG15U21hbGxQbHVzO1xuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJOZXcgUHJvamVjdFwiKTtcblxuICAgIC8vY3JlYXRlIHRoZSBwb3AtdXAgZm9ybVxuICAgIGNvbnN0IGZvcm1Qb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Qb3BVcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1Qb3BVcCcpO1xuXG4gICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm1JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtSW5wdXQnKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZUlucHV0Jyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZUlucHV0Jyk7XG4gICAgdGl0bGVMYWJlbC5pbm5lckhUTUwgPSBcIlRpdGxlOlwiO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvbjpcIjtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gJ0RhdGU6JztcblxuICAgICBcblxuICAgIGNvbnN0IGNsb3NlRm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlRm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlRm9ybUJ1dHRvbicpO1xuICAgIGNsb3NlRm9ybUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkQ2xvc2VDbGljayhjbG9zZUZvcm1CdXR0b24pO1xuICAgIGNsb3NlRm9ybUJ1dHRvbi5pbm5lckhUTUwgPSAnQ2FuY2VsJztcblxuICAgIGNvbnN0IHN1Ym1pdEZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRGb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Rm9ybUJ1dHRvbicpO1xuICAgIHN1Ym1pdEZvcm1CdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIHN1Ym1pdEZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW51bScsIDApO1xuICAgIHN1Ym1pdEZvcm1CdXR0b24uaW5uZXJIVE1MID0gJ0FkZCc7XG5cbiAgICBzdWJtaXRGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFOdW0gPSBzdWJtaXRGb3JtQnV0dG9uLmRhdGFzZXQubnVtO1xuICAgICAgICBoYW5kbGVBZGRUb2RvKGRhdGFOdW0pO1xuICAgIH0pXG5cbiAgICAvL292ZXJsYXlcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ292ZXJsYXknKTtcblxuXG4gICAgXG4gICAgXG4gICBcbiAgIC8vQWRkIGNsYXNzIHRvIEVsZW1lbnRzXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZUJhcicpO1xuICAgIHNpZGVCYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlQmFyJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgc2lkZUJhckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyQnV0dG9uJyk7XG4gICAgc2lkZUJhckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpZGVCYXJCdXR0b24nKTtcblxuICAgIC8vIHByb2plY3RMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdExpc3QnKVxuICAgIHRvcEJhci5jbGFzc0xpc3QuYWRkKCd0b3BCYXInKTtcbiAgICBwYWdlVGl0bGUuY2xhc3NMaXN0LmFkZCgncGFnZVRpdGxlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICBsaXN0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0VGl0bGUnKTtcbiAgICBsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlzdCcpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b24nKTtcbiAgICBhZGRDbGljayhzaWRlQmFyQnV0dG9uKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkUHJvamVjdElucHV0Jyk7XG5cbiAgICAvL0FwcGVuZCBFbGVtZW50c1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wQmFyKTtcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb3JtUG9wVXApO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICBmb3JtUG9wVXAuYXBwZW5kQ2hpbGQoZm9ybUlucHV0KTtcbiAgICBmb3JtSW5wdXQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGZvcm1JbnB1dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBmb3JtSW5wdXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgXG4gICAgXG4gICAgZm9ybUlucHV0LmFwcGVuZENoaWxkKHN1Ym1pdEZvcm1CdXR0b24pO1xuICAgIGZvcm1JbnB1dC5hcHBlbmRDaGlsZChjbG9zZUZvcm1CdXR0b24pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHNpZGVCYXJCdXR0b24pO1xuICAgIHNpZGVCYXJCdXR0b24uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBzaWRlQmFyQnV0dG9uLmFwcGVuZENoaWxkKGFkZEJ1dHRvblRleHQpO1xuICAgIC8vIHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuXG4gICAgLy9BZGQgY29udGVudFxuICAgIHBhZ2VUaXRsZS5pbm5lckhUTUwgPSBcImRvLWl0XCJcbiAgICBhZGRCdXR0b25UZXh0LmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBcbiAgIFxuXG4gICAgXG5yZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gYWRkQ2xpY2soZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xvc2VDbGljayhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVBvcFVwJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0Qm94KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdE51bWJlciwgZGF0YU51bSl7XG5cbiAgICAvL2NyZWF0ZSBlbGVtZW50cyBmb3IgZWRpdEJveFxuICAgIGNvbnN0IGVkaXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0Qm94LmNsYXNzTGlzdC5hZGQoJ2VkaXRCb3gnKTtcbiAgICBlZGl0Qm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdEJveCcpO1xuXG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdEZvcm0nKTtcbiAgICBlZGl0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXRGb3JtJyk7XG5cbiAgICBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXRUaXRsZS52YWx1ZSA9IHRpdGxlO1xuICAgIGVkaXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXRUaXRsZScpO1xuXG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0RGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICBlZGl0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0RGVzY3JpcHRpb24nKTtcblxuICAgIGNvbnN0IGVkaXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiBcbiAgICBlZGl0RGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXREYXRlJyk7XG4gICAgZWRpdERhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgIGVkaXREYXRlLnZhbHVlID0gZGF0ZTtcblxuICAgIGNvbnN0IGVkaXRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0U3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdFN1Ym1pdEJ1dHRvbicpO1xuICAgIGVkaXRTdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ1N1Ym1pdCBjaGFuZ2VzJztcbiAgICBlZGl0U3VibWl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBlZGl0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoYW5kbGVFZGl0U3VibWl0QnV0dG9uKHByb2plY3ROdW1iZXIsIGRhdGFOdW0pO1xuICAgIH0pIFxuXG5cblxuICAgIGNvbnN0IGVkaXRDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0Q2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdENhbmNlbEJ1dHRvbicpO1xuICAgIGVkaXRDYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gJ2NhbmNlbCc7XG4gICAgZWRpdENhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgZWRpdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZWRpdEJveC5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgZWRpdEJveC5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGVkaXREYXRlKTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChlZGl0U3VibWl0QnV0dG9uKTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChlZGl0Q2FuY2VsQnV0dG9uKTtcbiAgICByZXR1cm4gZWRpdEJveDtcblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBsaXN0ID0gW10pe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICAgIFxuICAgICAgIFxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
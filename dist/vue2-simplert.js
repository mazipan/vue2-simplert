/*!
 *  Vue2-Simplert v.0.2.6 
 *  (c) 2017 Irfan Maulana 
 *  MIT License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Simplert"] = factory();
	else
		root["Simplert"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/mycollab/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(7)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(6),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    useRadius: true,
    useIcon: true
  },

  data: function data() {
    return {
      DEFAULT_TYPE: "info",
      DEFAULT_BTN_CLOSE_TEXT: "Close",
      DEFAULT_BTN_CONFIRM_TEXT: "Confirm",
      INVALID_TYPE: "INVALID_TYPE",

      showSimplert: false,

      title: "",
      message: "",
      type: this.DEFAULT_TYPE,
      customClass: '',
      customIconUrl: '',

      customCloseBtnText: this.DEFAULT_BTN_CLOSE_TEXT,
      customCloseBtnClass: '',
      onClose: null,

      useConfirmBtn: false,
      customConfirmBtnText: this.DEFAULT_BTN_CONFIRM_TEXT,
      customConfirmBtnClass: '',
      onConfirm: null,

      disableOverlayClick: false,
      hideAllButton: false
    };
  },


  computed: {
    classSimplert: function classSimplert() {
      var clasz = this.customClass;
      if (this.showSimplert) {
        clasz = this.customClass + ' simplert--shown';
      }
      return clasz;
    },

    classContent: function classContent() {
      var clasz = '';
      if (this.useRadius) {
        clasz = 'simplert__content--radius';
      }
      return clasz;
    },

    classBtnClose: function classBtnClose() {
      var clasz = this.customCloseBtnClass;
      if (this.useRadius) {
        clasz = ' simplert__close--radius ' + this.customCloseBtnClass;
      }
      return clasz;
    },

    classBtnConfirm: function classBtnConfirm() {
      var clasz = this.customConfirmBtnClass;
      if (this.useRadius) {
        clasz = ' simplert__confirm--radius ' + this.customConfirmBtnClass;
      }
      return clasz;
    }
  },

  methods: {
    closeOverlay: function closeOverlay(e) {
      var _self = this;
      if (e.target.className.indexOf('simplert--shown') > 0 && !_self.disableOverlayClick) {
        _self.closeSimplert(e);
      }
    },

    whenConfirm: function whenConfirm(e) {
      var _self = this;
      e.preventDefault();

      _self.showSimplert = false;

      if (_self.onConfirm !== null) {
        _self.onConfirm();
      }
    },

    closeSimplert: function closeSimplert(e) {
      var _self = this;
      e.preventDefault();

      _self.showSimplert = false;

      if (_self.onClose !== null) {
        _self.onClose();
      }
    },

    openSimplert: function openSimplert(obj) {
      var _self = this;

      if (typeof obj !== 'undefined') {
        _self.showSimplert = true;
        _self.title = obj.title;

        if (typeof obj.message !== 'undefined') {
          _self.message = obj.message;
        } else {
          _self.message = '';
        }

        if (typeof obj.type !== 'undefined') {
          _self.type = obj.type;
        } else {
          _self.type = _self.DEFAULT_TYPE;
        }

        if (typeof obj.customClass !== 'undefined') {
          _self.customClass = obj.customClass;
        } else {
          _self.customClass = '';
        }

        if (typeof obj.customIconUrl !== 'undefined' && obj.customCloseBtnText !== '') {
          _self.customIconUrl = obj.customIconUrl;
          _self.type = _self.INVALID_TYPE;
        } else {
          _self.customIconUrl = '';
        }

        if (typeof obj.customCloseBtnText !== 'undefined' && obj.customCloseBtnText !== '') {
          _self.customCloseBtnText = obj.customCloseBtnText;
        } else {
          _self.customCloseBtnText = _self.DEFAULT_BTN_CLOSE_TEXT;
        }

        if (typeof obj.customCloseBtnClass !== 'undefined') {
          _self.customCloseBtnClass = obj.customCloseBtnClass;
        } else {
          _self.customCloseBtnClass = '';
        }

        if (typeof obj.onClose !== 'undefined' && obj.onClose !== null) {
          _self.onClose = obj.onClose;
        } else {
          _self.onClose = null;
        }

        if (typeof obj.useConfirmBtn !== 'undefined') {
          _self.useConfirmBtn = obj.useConfirmBtn;
        } else {
          _self.useConfirmBtn = false;
        }

        if (typeof obj.customConfirmBtnText !== 'undefined' && obj.customConfirmBtnText !== '') {
          _self.customConfirmBtnText = obj.customConfirmBtnText;
        } else {
          _self.customConfirmBtnText = _self.DEFAULT_BTN_CONFIRM_TEXT;
        }

        if (typeof obj.customConfirmBtnClass !== 'undefined') {
          _self.customConfirmBtnClass = obj.customConfirmBtnClass;
        } else {
          _self.customConfirmBtnClass = '';
        }

        if (typeof obj.onConfirm !== 'undefined' && obj.onConfirm !== null) {
          _self.onConfirm = obj.onConfirm;
        } else {
          _self.onConfirm = null;
        }

        if (typeof obj.disableOverlayClick !== 'undefined') {
          _self.disableOverlayClick = obj.disableOverlayClick;
        } else {
          _self.disableOverlayClick = false;
        }

        if (typeof obj.hideAllButton !== 'undefined') {
          _self.hideAllButton = obj.hideAllButton;
        } else {
          _self.hideAllButton = false;
        }
      }
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Simplert = __webpack_require__(0);
/* harmony default export */ __webpack_exports__["default"] = (Simplert);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\nhtml {\n  box-sizing: border-box;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  font-size: 62.5%;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n.simplert {\n  font-size: 14px;\n  line-height: 1.15;\n}\n.simplert {\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  display: none;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.simplert--shown {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.simplert--shown .simplert__content {\n      animation-name: zoomIn;\n      animation-duration: .3s;\n      animation-fill-mode: both;\n}\n.simplert__header {\n    padding: 2em 0;\n}\n.simplert__title {\n    font-size: 30px;\n    display: block;\n}\n.simplert__content {\n    position: relative;\n    width: 90%;\n    max-width: 400px;\n    margin: 0 auto;\n    padding: 0 20px;\n    background-color: #fff;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n@media only screen and (min-width: 768px) {\n.simplert__content {\n        width: 30%;\n}\n}\n.simplert__content--radius {\n      border-radius: 0.3em;\n}\n.simplert__body {\n    padding-bottom: 1em;\n}\n.simplert__icon {\n    position: relative;\n    width: 80px;\n    height: 80px;\n    margin: 10px auto;\n    border-radius: 50%;\n}\n.simplert__icon--info {\n      border: 4px solid #c9dae1;\n}\n.simplert__icon--success {\n      border: 4px solid #a5dc86;\n}\n.simplert__icon--warning {\n      border: 4px solid #f8bb86;\n}\n.simplert__icon--error {\n      border: 4px solid #f27474;\n}\n.simplert__icon img {\n      width: 80px;\n      height: 80px;\n}\n.simplert__line {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    height: 5px;\n    border-radius: 2px;\n}\n.simplert__line--info {\n      position: absolute;\n      top: 19px;\n      left: 50%;\n      width: 7px;\n      height: 7px;\n      margin-left: -3px;\n      border-radius: 50%;\n      background-color: #c9dae1;\n}\n.simplert__line--info-2 {\n        position: absolute;\n        bottom: 15px;\n        left: 50%;\n        width: 5px;\n        height: 29px;\n        margin-left: -2px;\n        border-radius: 2px;\n        background-color: #c9dae1;\n}\n.simplert__line--success {\n      top: 44px;\n      left: 6px;\n      width: 25px;\n      transform: rotate(45deg);\n      background-color: #a5dc86;\n}\n.simplert__line--success-2 {\n        top: 38px;\n        right: 6px;\n        width: 47px;\n        transform: rotate(-45deg);\n        background-color: #a5dc86;\n}\n.simplert__line--warning {\n      position: absolute;\n      top: 10px;\n      left: 50%;\n      width: 5px;\n      height: 35px;\n      margin-left: -2px;\n      border-radius: 2px;\n      background-color: #f8bb86;\n}\n.simplert__line--warning-2 {\n        position: absolute;\n        bottom: 10px;\n        left: 50%;\n        width: 7px;\n        height: 7px;\n        margin-left: -3px;\n        border-radius: 50%;\n        background-color: #f8bb86;\n}\n.simplert__line--error {\n      top: 35px;\n      left: 13px;\n      width: 47px;\n      transform: rotate(45deg);\n      background-color: #f27474;\n}\n.simplert__line--error-2 {\n        top: 35px;\n        right: 13px;\n        width: 47px;\n        transform: rotate(-45deg);\n        background-color: #f27474;\n}\n.simplert__footer {\n    padding: 1em 0;\n}\n.simplert__close, .simplert__confirm {\n    display: inline-block;\n    margin: 0 .5em;\n    padding: 10px 20px;\n    cursor: pointer;\n    text-align: center;\n    color: #fff;\n    border: none;\n    outline: none;\n    background-color: #068ac9;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n.simplert__close--radius, .simplert__confirm--radius {\n      border-radius: 0.3em;\n}\n@keyframes zoomIn {\nfrom {\n    transform: scale3d(0.3, 0.3, 0.3);\n    opacity: 0;\n}\n50% {\n    opacity: 1;\n}\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "simplert",
    class: _vm.classSimplert,
    attrs: {
      "role": "modal"
    },
    on: {
      "click": _vm.closeOverlay
    }
  }, [_c('div', {
    staticClass: "simplert__content",
    class: _vm.classContent
  }, [_c('div', {
    staticClass: "simplert__header"
  }, [(_vm.useIcon) ? _c('div', [(_vm.type === 'info') ? _c('div', {
    staticClass: "simplert__icon simplert__icon--info"
  }, [_c('div', {
    staticClass: "simplert__line simplert__line--info"
  }), _vm._v(" "), _c('div', {
    staticClass: "simplert__line simplert__line--info-2"
  })]) : _vm._e(), _vm._v(" "), (_vm.type === 'success') ? _c('div', {
    staticClass: "simplert__icon simplert__icon--success"
  }, [_c('div', {
    staticClass: "simplert__line simplert__line--success"
  }), _vm._v(" "), _c('div', {
    staticClass: "simplert__line simplert__line--success-2"
  })]) : _vm._e(), _vm._v(" "), (_vm.type === 'warning') ? _c('div', {
    staticClass: "simplert__icon simplert__icon--warning"
  }, [_c('div', {
    staticClass: "simplert__line simplert__line--warning"
  }), _vm._v(" "), _c('div', {
    staticClass: "simplert__line simplert__line--warning-2"
  })]) : _vm._e(), _vm._v(" "), (_vm.type === 'error') ? _c('div', {
    staticClass: "simplert__icon simplert__icon--error"
  }, [_c('div', {
    staticClass: "simplert__line simplert__line--error"
  }), _vm._v(" "), _c('div', {
    staticClass: "simplert__line simplert__line--error-2"
  })]) : _vm._e(), _vm._v(" "), (_vm.customIconUrl !== '') ? _c('div', {
    staticClass: "simplert__icon"
  }, [_c('img', {
    attrs: {
      "src": _vm.customIconUrl
    }
  })]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('b', {
    staticClass: "simplert__title"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "simplert__body"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "simplert__footer"
  }, [(_vm.useConfirmBtn && !_vm.hideAllButton) ? _c('button', {
    staticClass: "simplert__confirm",
    class: _vm.classBtnConfirm,
    on: {
      "click": _vm.whenConfirm
    }
  }, [_vm._v("\n        " + _vm._s(_vm.customConfirmBtnText) + "\n      ")]) : _vm._e(), _vm._v(" "), (!_vm.hideAllButton) ? _c('button', {
    staticClass: "simplert__close",
    class: _vm.classBtnClose,
    on: {
      "click": _vm.closeSimplert
    }
  }, [_vm._v("\n        " + _vm._s(_vm.customCloseBtnText) + "\n      ")]) : _vm._e()])])])
},staticRenderFns: []}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("54e14387", content, true);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(9)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});
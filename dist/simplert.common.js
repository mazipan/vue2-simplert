/*! Vue2-Simplert v.0.6.0 */
exports["Simplert"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Simplert = __webpack_require__(1);

var _Simplert2 = _interopRequireDefault(_Simplert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugin = {
  install: function install(Vue) {
    Vue.component(_Simplert2.default.name, _Simplert2.default);
  }
};

_Simplert2.default.install = plugin.install;

exports.default = _Simplert2.default;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Simplert_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Simplert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Simplert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34f6f8d6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Simplert_vue__ = __webpack_require__(5);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Simplert_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34f6f8d6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Simplert_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'Simplert',
  props: {
    useRadius: {
      type: Boolean,
      default: true
    },
    useIcon: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      DEFAULT_TYPE: 'info',
      DEFAULT_BTN_CLOSE_TEXT: 'Close',
      DEFAULT_BTN_CONFIRM_TEXT: 'Confirm',
      INVALID_TYPE: 'INVALID_TYPE',
      // hide/show alert
      showSimplert: false,
      // basic setup
      title: '',
      message: '',
      type: this.DEFAULT_TYPE, // info (default), success, warning, error
      customClass: '',
      customIconUrl: '',
      // open event
      onOpen: null,
      // close button
      customCloseBtnText: this.DEFAULT_BTN_CLOSE_TEXT,
      customCloseBtnClass: '',
      onClose: null,
      // confirm button
      useConfirmBtn: false,
      customConfirmBtnText: this.DEFAULT_BTN_CONFIRM_TEXT,
      customConfirmBtnClass: '',
      onConfirm: null,
      // disabled overlay
      disableOverlayClick: false,
      hideAllButton: false,
      // x close
      showXclose: false
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
      var clasz = 'simplert__close';
      if (this.useRadius) {
        clasz = 'simplert__close simplert__close--radius';
      }
      if (this.customCloseBtnClass) {
        clasz = this.customCloseBtnClass;
      }
      return clasz;
    },

    classBtnConfirm: function classBtnConfirm() {
      var clasz = 'simplert__confirm';
      if (this.useRadius) {
        clasz = 'simplert__confirm simplert__confirm--radius';
      }
      if (this.customConfirmBtnClass) {
        clasz = this.customConfirmBtnClass;
      }
      return clasz;
    }
  },

  methods: {
    justCloseSimplert: function justCloseSimplert() {
      this.showSimplert = false;
    },

    closeOverlay: function closeOverlay(e) {
      var _self = this;
      if (e.target.className.indexOf('simplert--shown') > 0 && !_self.disableOverlayClick) {
        _self.showSimplert = false;
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

        // close button setup
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

        // confirm button setup
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

        if (typeof obj.showXclose !== 'undefined') {
          _self.showXclose = obj.showXclose;
        } else {
          _self.showXclose = false;
        }

        if (typeof obj.onOpen !== 'undefined') {
          _self.onOpen = obj.onOpen;
        } else {
          _self.onOpen = null;
        }

        if (_self.onOpen !== null) {
          _self.onOpen();
        }
      }
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"simplert",class:_vm.classSimplert,attrs:{"role":"modal"},on:{"click":_vm.closeOverlay}},[_c('div',{staticClass:"simplert__content",class:_vm.classContent},[_c('div',{staticClass:"simplert__header"},[(_vm.showXclose)?_c('div',{staticClass:"simplert__x",on:{"click":_vm.justCloseSimplert}},[_vm._v("╳")]):_vm._e(),_vm._v(" "),(_vm.useIcon)?_c('div',[(_vm.type === 'info')?_c('div',{staticClass:"simplert__icon simplert__icon--info"},[_c('div',{staticClass:"simplert__line simplert__line--info"}),_vm._v(" "),_c('div',{staticClass:"simplert__line simplert__line--info-2"})]):_vm._e(),_vm._v(" "),(_vm.type === 'success')?_c('div',{staticClass:"simplert__icon simplert__icon--success"},[_c('div',{staticClass:"simplert__line simplert__line--success"}),_vm._v(" "),_c('div',{staticClass:"simplert__line simplert__line--success-2"})]):_vm._e(),_vm._v(" "),(_vm.type === 'warning')?_c('div',{staticClass:"simplert__icon simplert__icon--warning"},[_c('div',{staticClass:"simplert__line simplert__line--warning"}),_vm._v(" "),_c('div',{staticClass:"simplert__line simplert__line--warning-2"})]):_vm._e(),_vm._v(" "),(_vm.type === 'error')?_c('div',{staticClass:"simplert__icon simplert__icon--error"},[_c('div',{staticClass:"simplert__line simplert__line--error"}),_vm._v(" "),_c('div',{staticClass:"simplert__line simplert__line--error-2"})]):_vm._e(),_vm._v(" "),(_vm.customIconUrl !== '')?_c('div',{staticClass:"simplert__icon"},[_c('img',{attrs:{"src":_vm.customIconUrl}})]):_vm._e()]):_vm._e(),_vm._v(" "),_c('b',{staticClass:"simplert__title"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"simplert__body"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})]),_vm._v(" "),_c('div',{staticClass:"simplert__footer"},[(_vm.useConfirmBtn && !_vm.hideAllButton)?_c('button',{class:_vm.classBtnConfirm,on:{"click":_vm.whenConfirm}},[_vm._v("\n        "+_vm._s(_vm.customConfirmBtnText)+"\n      ")]):_vm._e(),_vm._v(" "),(!_vm.hideAllButton)?_c('button',{class:_vm.classBtnClose,on:{"click":_vm.closeSimplert}},[_vm._v("\n        "+_vm._s(_vm.customCloseBtnText)+"\n      ")]):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
//# sourceMappingURL=simplert.common.js.map
/*!
 * Keen UI v1.0.1 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2018 Josephus Paye II
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UiSelect"] = factory();
	else
		root["KeenUI"] = root["KeenUI"] || {}, root["KeenUI"]["UiSelect"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 248);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6c2d80c7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c4c9b034\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiIcon.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c4c9b034\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiIcon.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UiPopover_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiProgressCircular_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UiSelectOption_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_RespondsToExternalClick__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_util__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_element_scroll__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fuzzysearch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fuzzysearch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fuzzysearch__);













/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'ui-select',

    props: {
        name: String,
        value: {
            type: [String, Number, Object, Array],
            required: true
        },
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        placeholder: String,
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' },
        label: String,
        floatingLabel: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'basic' },
        multiple: {
            type: Boolean,
            default: false
        },
        multipleDelimiter: {
            type: String,
            default: ', '
        },
        hasSearch: {
            type: Boolean,
            default: false
        },
        searchPlaceholder: {
            type: String,
            default: 'Search'
        },
        filter: Function,
        disableFilter: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        noResults: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    class: 'class',
                    label: 'label',
                    value: 'value',
                    image: 'image'
                };
            }
        },
        invalid: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            query: '',
            isActive: false,
            isTouched: false,
            selectedIndex: -1,
            highlightedIndex: -1,
            initialValue: JSON.stringify(this.value)
        };
    },


    computed: {
        classes: function classes() {
            return ['ui-select--type-' + this.type, 'ui-select--icon-position-' + this.iconPosition, { 'is-active': this.isActive }, { 'is-invalid': this.invalid }, { 'is-touched': this.isTouched }, { 'is-disabled': this.disabled }, { 'is-multiple': this.multiple }, { 'has-label': this.hasLabel }, { 'has-floating-label': this.hasFloatingLabel }];
        },
        labelClasses: function labelClasses() {
            return {
                'is-inline': this.hasFloatingLabel && this.isLabelInline,
                'is-floating': this.hasFloatingLabel && !this.isLabelInline
            };
        },
        hasLabel: function hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },
        hasFloatingLabel: function hasFloatingLabel() {
            return this.hasLabel && this.floatingLabel;
        },
        isLabelInline: function isLabelInline() {
            return this.value.length === 0 && !this.isActive;
        },
        hasFeedback: function hasFeedback() {
            return Boolean(this.help) || Boolean(this.error) || Boolean(this.$slots.error);
        },
        showError: function showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },
        showHelp: function showHelp() {
            return !this.showError && (Boolean(this.help) || Boolean(this.$slots.help));
        },
        filteredOptions: function filteredOptions() {
            var _this = this;

            if (this.disableFilter) {
                return this.options;
            }

            return this.options.filter(function (option, index) {
                if (_this.filter) {
                    return _this.filter(option, _this.query);
                }

                return _this.defaultFilter(option, index);
            });
        },
        displayText: function displayText() {
            var _this2 = this;

            if (this.multiple) {
                if (this.value.length > 0) {
                    return this.value.map(function (value) {
                        return value[_this2.keys.label] || value;
                    }).join(this.multipleDelimiter);
                }

                return '';
            }

            return this.value ? this.value[this.keys.label] || this.value : '';
        },
        hasDisplayText: function hasDisplayText() {
            return Boolean(this.displayText.length);
        },
        hasNoResults: function hasNoResults() {
            if (this.loading || this.query.length === 0) {
                return false;
            }

            return this.disableFilter ? this.noResults : this.filteredOptions.length === 0;
        },
        submittedValue: function submittedValue() {
            var _this3 = this;

            if (!this.name || !this.value) {
                return;
            }

            if (Array.isArray(this.value)) {
                return this.value.map(function (option) {
                    return option[_this3.keys.value] || option;
                }).join(',');
            }

            return this.value[this.keys.value] || this.value;
        }
    },

    watch: {
        filteredOptions: function filteredOptions() {
            this.highlightedIndex = 0;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_element_scroll__["a" /* resetScroll */])(this.$refs.optionsList);
        },
        query: function query() {
            this.$emit('query-change', this.query);
        }
    },

    created: function created() {
        if (!this.value || this.value === '') {
            this.setValue(null);
        }
    },
    mounted: function mounted() {
        this.addExternalClickListener(this.$el, this.onExternalClick);
    },
    beforeDestroy: function beforeDestroy() {
        this.removeExternalClickListener();
    },


    methods: {
        onKeydown: function onKeydown(e) {
            this.$emit('keydown', e);
        },
        setValue: function setValue(value) {
            if (this.disabled) {
                return;
            }

            value = value ? value : this.multiple ? [] : '';

            this.$emit('input', value);

            this.onChange(value);
        },
        onChange: function onChange(value) {
            this.$emit('change', value);
        },
        highlightOption: function highlightOption(index) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { autoScroll: true };

            if (this.highlightedIndex === index || this.$refs.options.length === 0) {
                return;
            }

            var firstIndex = 0;
            var lastIndex = this.$refs.options.length - 1;

            if (index < firstIndex) {
                index = lastIndex;
            } else if (index > lastIndex) {
                index = firstIndex;
            }

            this.highlightedIndex = index;

            if (options.autoScroll) {
                this.scrollOptionIntoView(this.$refs.options[index].$el);
            }
        },
        selectHighlighted: function selectHighlighted(index, e) {
            if (this.$refs.options.length > 0) {
                e.preventDefault();
                this.selectOption(this.$refs.options[index].option, index);
            }
        },
        selectOption: function selectOption(option, index) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { autoClose: true };

            var shouldSelect = this.multiple && !this.isOptionSelected(option);

            if (this.multiple) {
                this.updateOption(option, { select: shouldSelect });
            } else {
                this.setValue(option);
                this.selectedIndex = index;
            }

            this.$emit('select', option, {
                selected: this.multiple ? shouldSelect : true
            });

            this.highlightedIndex = index;
            this.clearQuery();

            if (!this.multiple && options.autoClose) {
                this.closeDropdown();
            }
        },
        isOptionSelected: function isOptionSelected(option) {
            if (this.multiple) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_util__["b" /* looseIndexOf */])(this.value, option) > -1;
            }

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_util__["a" /* looseEqual */])(this.value, option);
        },
        updateOption: function updateOption(option) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { select: true };

            var value = [];
            var updated = false;
            var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_util__["b" /* looseIndexOf */])(this.value, option);

            if (options.select && i < 0) {
                value = this.value.concat(option);
                updated = true;
            }

            if (!options.select && i > -1) {
                value = this.value.slice(0, i).concat(this.value.slice(i + 1));
                updated = true;
            }

            if (updated) {
                this.setValue(value);
            }
        },
        defaultFilter: function defaultFilter(option) {
            var query = this.query.toLowerCase();
            var text = option[this.keys.label] || option;

            if (typeof text === 'string') {
                text = text.toLowerCase();
            }

            return __WEBPACK_IMPORTED_MODULE_7_fuzzysearch___default()(query, text);
        },
        clearQuery: function clearQuery() {
            this.query = '';
        },
        toggleDropdown: function toggleDropdown() {
            this.$refs.dropdown.toggle();
        },
        openDropdown: function openDropdown() {
            if (this.disabled) {
                return;
            }

            this.$refs.dropdown.open();

            if (!this.isActive) {
                this.isActive = true;
            }
        },
        closeDropdown: function closeDropdown() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { autoBlur: false };

            this.$refs.dropdown.close();

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }

            if (options.autoBlur) {
                this.isActive = false;
            } else {
                this.$refs.label.focus();
            }
        },
        onFocus: function onFocus(e) {
            if (this.isActive) {
                return;
            }

            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur: function onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (this.$refs.dropdown.isOpen()) {
                this.closeDropdown({ autoBlur: true });
            }
        },
        onOpen: function onOpen() {
            var _this4 = this;

            document.addEventListener('scroll', this.onExternalScroll, true);

            this.$refs.dropdown.$el.style.width = this.$refs.label.getBoundingClientRect().width + 'px';

            this.$nextTick(function () {
                _this4.$refs[_this4.hasSearch ? 'searchInput' : 'dropdownContent'].focus();
                _this4.scrollOptionIntoView(_this4.$refs.optionsList.querySelector('.is-selected'));
            });

            this.$emit('dropdown-open');
        },
        onClose: function onClose() {
            document.removeEventListener('scroll', this.onExternalScroll, true);

            this.highlightedIndex = this.multiple ? -1 : this.selectedIndex;
            this.$emit('dropdown-close');
        },
        onExternalClick: function onExternalClick() {
            if (this.$refs.dropdown.isOpen()) {
                this.closeDropdown({ autoBlur: true });
            } else if (this.isActive) {
                this.isActive = false;
            }
        },
        onExternalScroll: function onExternalScroll(e) {},
        scrollOptionIntoView: function scrollOptionIntoView(optionEl) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_element_scroll__["b" /* scrollIntoView */])(optionEl, {
                container: this.$refs.optionsList,
                marginTop: 180
            });
        },
        reset: function reset() {
            this.setValue(JSON.parse(this.initialValue));
            this.clearQuery();
            this.resetTouched();

            this.selectedIndex = -1;
            this.highlightedIndex = -1;
        },
        resetTouched: function resetTouched() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { touched: false };

            this.isTouched = options.touched;
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["default"],
        UiPopover: __WEBPACK_IMPORTED_MODULE_1__UiPopover_vue__["default"],
        UiProgressCircular: __WEBPACK_IMPORTED_MODULE_2__UiProgressCircular_vue__["default"],
        UiSelectOption: __WEBPACK_IMPORTED_MODULE_3__UiSelectOption_vue__["a" /* default */]
    },

    mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_RespondsToExternalClick__["a" /* default */]]
});

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__ = __webpack_require__(7);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'ui-select-option',

    props: {
        option: {
            type: [String, Object],
            required: true
        },
        type: {
            type: String,
            default: 'basic' },
        multiple: {
            type: Boolean,
            default: false
        },
        highlighted: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default: function _default() {
                return {
                    class: 'class',
                    label: 'label',
                    image: 'image'
                };
            }
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-select-option--type-' + this.type, this.option[this.keys.class], { 'is-highlighted': this.highlighted }, { 'is-selected': this.selected }];
        },
        imageStyle: function imageStyle() {
            return { 'background-image': 'url(' + this.option[this.keys.image] + ')' };
        }
    },

    components: {
        UiIcon: __WEBPACK_IMPORTED_MODULE_0__UiIcon_vue__["default"]
    }
});

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.3 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance === 'object' && typeof performance.now === 'function') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          if (this.element.parentNode !== this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          }
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSelect_vue__ = __webpack_require__(120);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c55db4ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiSelect_vue__ = __webpack_require__(199);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(222)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSelect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c55db4ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiSelect_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/UiSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c55db4ae", Component.options)
  } else {
    hotAPI.reload("data-v-c55db4ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    beforeDestroy: function beforeDestroy() {
        if (typeof this.externalClickListener === 'function') {
            this.removeExternalClickListener();
        }
    },


    methods: {
        addExternalClickListener: function addExternalClickListener() {
            var _this = this;

            var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$el;
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            this.externalClickListener = function (e) {
                if (!element.contains(e.target)) {
                    if (typeof callback === 'function') {
                        callback(e);
                    } else {
                        _this.$emit('external-click', e);
                    }
                }
            };

            document.addEventListener('click', this.externalClickListener);
        },
        removeExternalClickListener: function removeExternalClickListener() {
            document.removeEventListener('click', this.externalClickListener);
            this.externalClickListener = null;
        }
    }
});

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-select-option {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 0.9375rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ui-select-option.is-selected {\n    /*background-color: rgba(black, 0.05);\n        color: $brand-primary-color;*/\n    font-weight: 500;\n}\n.ui-select-option.is-selected .ui-select-option__checkbox {\n      color: #2196f3;\n}\n.ui-select-option.is-highlighted {\n    /*background-color: rgba(black, 0.1);*/\n    background-color: var(--colors-primary);\n    color: var(--colors-fg-primary);\n    fill: var(--colors-fg-primary);\n}\n.ui-select-option__basic,\n.ui-select-option__image-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ui-select-option__image {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.ui-select-option__image-object {\n  background-position: 50%;\n  background-size: cover;\n  border-radius: 50%;\n  height: 2rem;\n  margin-right: 0.75rem;\n  width: 2rem;\n}\n.ui-select-option__checkbox {\n  color: rgba(0, 0, 0, 0.38);\n  margin-left: auto;\n}\n.ui-select-option--type-basic {\n  padding: 0.375rem 0.75rem;\n}\n.ui-select-option--type-image {\n  padding: 0.25rem 0.75rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'ui-focus-container',

    props: {
        containFocus: {
            type: Boolean,
            default: true
        },
        focusRedirector: Function,
        disabled: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        focus: function focus() {
            this.$refs.content.focus();
        },
        redirectFocus: function redirectFocus(e, options) {
            if (!this.containFocus) {
                this.$emit('focus-overflow', e, options);
                return;
            }

            e.stopPropagation();

            if (this.focusRedirector) {
                this.focusRedirector(e, options);
                return;
            }

            if (options.isTabbingForward) {
                this.$refs.content.focus();
            } else {
                this.$refs.lastFocusable.focus();
            }
        }
    }
});

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether-drop 1.4.1 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require('tether'));
  } else {
    root.Drop = factory(root.Tether);
  }
}(this, function(Tether) {

/* global Tether */
'use strict';

var _bind = Function.prototype.bind;

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Tether$Utils = Tether.Utils;
var extend = _Tether$Utils.extend;
var addClass = _Tether$Utils.addClass;
var removeClass = _Tether$Utils.removeClass;
var hasClass = _Tether$Utils.hasClass;
var Evented = _Tether$Utils.Evented;

function sortAttach(str) {
  var _str$split = str.split(' ');

  var _str$split2 = _slicedToArray(_str$split, 2);

  var first = _str$split2[0];
  var second = _str$split2[1];

  if (['left', 'right'].indexOf(first) >= 0) {
    var _ref = [second, first];
    first = _ref[0];
    second = _ref[1];
  }
  return [first, second].join(' ');
}

function removeFromArray(arr, item) {
  var index = undefined;
  var results = [];
  while ((index = arr.indexOf(item)) !== -1) {
    results.push(arr.splice(index, 1));
  }
  return results;
}

var clickEvents = ['click'];
if ('ontouchstart' in document.documentElement) {
  clickEvents.push('touchstart');
}

var transitionEndEvents = {
  'WebkitTransition': 'webkitTransitionEnd',
  'MozTransition': 'transitionend',
  'OTransition': 'otransitionend',
  'transition': 'transitionend'
};

var transitionEndEvent = '';
for (var _name in transitionEndEvents) {
  if (({}).hasOwnProperty.call(transitionEndEvents, _name)) {
    var tempEl = document.createElement('p');
    if (typeof tempEl.style[_name] !== 'undefined') {
      transitionEndEvent = transitionEndEvents[_name];
    }
  }
}

var MIRROR_ATTACH = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
  middle: 'middle',
  center: 'center'
};

var allDrops = {};

// Drop can be included in external libraries.  Calling createContext gives you a fresh
// copy of drop which won't interact with other copies on the page (beyond calling the document events).

function createContext() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var drop = function drop() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new (_bind.apply(DropInstance, [null].concat(args)))();
  };

  extend(drop, {
    createContext: createContext,
    drops: [],
    defaults: {}
  });

  var defaultOptions = {
    classPrefix: 'drop',
    defaults: {
      position: 'bottom left',
      openOn: 'click',
      beforeClose: null,
      constrainToScrollParent: true,
      constrainToWindow: true,
      classes: '',
      remove: false,
      openDelay: 0,
      closeDelay: 50,
      // inherited from openDelay and closeDelay if not explicitly defined
      focusDelay: null,
      blurDelay: null,
      hoverOpenDelay: null,
      hoverCloseDelay: null,
      tetherOptions: {}
    }
  };

  extend(drop, defaultOptions, options);
  extend(drop.defaults, defaultOptions.defaults, options.defaults);

  if (typeof allDrops[drop.classPrefix] === 'undefined') {
    allDrops[drop.classPrefix] = [];
  }

  drop.updateBodyClasses = function () {
    // There is only one body, so despite the context concept, we still iterate through all
    // drops which share our classPrefix.

    var anyOpen = false;
    var drops = allDrops[drop.classPrefix];
    var len = drops.length;
    for (var i = 0; i < len; ++i) {
      if (drops[i].isOpened()) {
        anyOpen = true;
        break;
      }
    }

    if (anyOpen) {
      addClass(document.body, drop.classPrefix + '-open');
    } else {
      removeClass(document.body, drop.classPrefix + '-open');
    }
  };

  var DropInstance = (function (_Evented) {
    _inherits(DropInstance, _Evented);

    function DropInstance(opts) {
      _classCallCheck(this, DropInstance);

      _get(Object.getPrototypeOf(DropInstance.prototype), 'constructor', this).call(this);
      this.options = extend({}, drop.defaults, opts);
      this.target = this.options.target;

      if (typeof this.target === 'undefined') {
        throw new Error('Drop Error: You must provide a target.');
      }

      var dataPrefix = 'data-' + drop.classPrefix;

      var contentAttr = this.target.getAttribute(dataPrefix);
      if (contentAttr && this.options.content == null) {
        this.options.content = contentAttr;
      }

      var attrsOverride = ['position', 'openOn'];
      for (var i = 0; i < attrsOverride.length; ++i) {

        var override = this.target.getAttribute(dataPrefix + '-' + attrsOverride[i]);
        if (override && this.options[attrsOverride[i]] == null) {
          this.options[attrsOverride[i]] = override;
        }
      }

      if (this.options.classes && this.options.addTargetClasses !== false) {
        addClass(this.target, this.options.classes);
      }

      drop.drops.push(this);
      allDrops[drop.classPrefix].push(this);

      this._boundEvents = [];
      this.bindMethods();
      this.setupElements();
      this.setupEvents();
      this.setupTether();
    }

    _createClass(DropInstance, [{
      key: '_on',
      value: function _on(element, event, handler) {
        this._boundEvents.push({ element: element, event: event, handler: handler });
        element.addEventListener(event, handler);
      }
    }, {
      key: 'bindMethods',
      value: function bindMethods() {
        this.transitionEndHandler = this._transitionEndHandler.bind(this);
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        var _this = this;

        this.drop = document.createElement('div');
        addClass(this.drop, drop.classPrefix);

        if (this.options.classes) {
          addClass(this.drop, this.options.classes);
        }

        this.content = document.createElement('div');
        addClass(this.content, drop.classPrefix + '-content');

        if (typeof this.options.content === 'function') {
          var generateAndSetContent = function generateAndSetContent() {
            // content function might return a string or an element
            var contentElementOrHTML = _this.options.content.call(_this, _this);

            if (typeof contentElementOrHTML === 'string') {
              _this.content.innerHTML = contentElementOrHTML;
            } else if (typeof contentElementOrHTML === 'object') {
              _this.content.innerHTML = '';
              _this.content.appendChild(contentElementOrHTML);
            } else {
              throw new Error('Drop Error: Content function should return a string or HTMLElement.');
            }
          };

          generateAndSetContent();
          this.on('open', generateAndSetContent.bind(this));
        } else if (typeof this.options.content === 'object') {
          this.content.appendChild(this.options.content);
        } else {
          this.content.innerHTML = this.options.content;
        }

        this.drop.appendChild(this.content);
      }
    }, {
      key: 'setupTether',
      value: function setupTether() {
        // Tether expects two attachment points, one in the target element, one in the
        // drop.  We use a single one, and use the order as well, to allow us to put
        // the drop on either side of any of the four corners.  This magic converts between
        // the two:
        var dropAttach = this.options.position.split(' ');
        dropAttach[0] = MIRROR_ATTACH[dropAttach[0]];
        dropAttach = dropAttach.join(' ');

        var constraints = [];
        if (this.options.constrainToScrollParent) {
          constraints.push({
            to: 'scrollParent',
            pin: 'top, bottom',
            attachment: 'together none'
          });
        } else {
          // To get 'out of bounds' classes
          constraints.push({
            to: 'scrollParent'
          });
        }

        if (this.options.constrainToWindow !== false) {
          constraints.push({
            to: 'window',
            attachment: 'together'
          });
        } else {
          // To get 'out of bounds' classes
          constraints.push({
            to: 'window'
          });
        }

        var opts = {
          element: this.drop,
          target: this.target,
          attachment: sortAttach(dropAttach),
          targetAttachment: sortAttach(this.options.position),
          classPrefix: drop.classPrefix,
          offset: '0 0',
          targetOffset: '0 0',
          enabled: false,
          constraints: constraints,
          addTargetClasses: this.options.addTargetClasses
        };

        if (this.options.tetherOptions !== false) {
          this.tether = new Tether(extend({}, opts, this.options.tetherOptions));
        }
      }
    }, {
      key: 'setupEvents',
      value: function setupEvents() {
        var _this2 = this;

        if (!this.options.openOn) {
          return;
        }

        if (this.options.openOn === 'always') {
          setTimeout(this.open.bind(this));
          return;
        }

        var events = this.options.openOn.split(' ');

        if (events.indexOf('click') >= 0) {
          var openHandler = function openHandler(event) {
            _this2.toggle(event);
            event.preventDefault();
          };

          var closeHandler = function closeHandler(event) {
            if (!_this2.isOpened()) {
              return;
            }

            // Clicking inside dropdown
            if (event.target === _this2.drop || _this2.drop.contains(event.target)) {
              return;
            }

            // Clicking target
            if (event.target === _this2.target || _this2.target.contains(event.target)) {
              return;
            }

            _this2.close(event);
          };

          for (var i = 0; i < clickEvents.length; ++i) {
            var clickEvent = clickEvents[i];
            this._on(this.target, clickEvent, openHandler);
            this._on(document, clickEvent, closeHandler);
          }
        }

        var inTimeout = null;
        var outTimeout = null;

        var inHandler = function inHandler(event) {
          if (outTimeout !== null) {
            clearTimeout(outTimeout);
          } else {
            inTimeout = setTimeout(function () {
              _this2.open(event);
              inTimeout = null;
            }, (event.type === 'focus' ? _this2.options.focusDelay : _this2.options.hoverOpenDelay) || _this2.options.openDelay);
          }
        };

        var outHandler = function outHandler(event) {
          if (inTimeout !== null) {
            clearTimeout(inTimeout);
          } else {
            outTimeout = setTimeout(function () {
              _this2.close(event);
              outTimeout = null;
            }, (event.type === 'blur' ? _this2.options.blurDelay : _this2.options.hoverCloseDelay) || _this2.options.closeDelay);
          }
        };

        if (events.indexOf('hover') >= 0) {
          this._on(this.target, 'mouseover', inHandler);
          this._on(this.drop, 'mouseover', inHandler);
          this._on(this.target, 'mouseout', outHandler);
          this._on(this.drop, 'mouseout', outHandler);
        }

        if (events.indexOf('focus') >= 0) {
          this._on(this.target, 'focus', inHandler);
          this._on(this.drop, 'focus', inHandler);
          this._on(this.target, 'blur', outHandler);
          this._on(this.drop, 'blur', outHandler);
        }
      }
    }, {
      key: 'isOpened',
      value: function isOpened() {
        if (this.drop) {
          return hasClass(this.drop, drop.classPrefix + '-open');
        }
      }
    }, {
      key: 'toggle',
      value: function toggle(event) {
        if (this.isOpened()) {
          this.close(event);
        } else {
          this.open(event);
        }
      }
    }, {
      key: 'open',
      value: function open(event) {
        var _this3 = this;

        /* eslint no-unused-vars: 0 */
        if (this.isOpened()) {
          return;
        }

        if (!this.drop.parentNode) {
          document.body.appendChild(this.drop);
        }

        if (typeof this.tether !== 'undefined') {
          this.tether.enable();
        }

        addClass(this.drop, drop.classPrefix + '-open');
        addClass(this.drop, drop.classPrefix + '-open-transitionend');

        setTimeout(function () {
          if (_this3.drop) {
            addClass(_this3.drop, drop.classPrefix + '-after-open');
          }
        });

        if (typeof this.tether !== 'undefined') {
          this.tether.position();
        }

        this.trigger('open');

        drop.updateBodyClasses();
      }
    }, {
      key: '_transitionEndHandler',
      value: function _transitionEndHandler(e) {
        if (e.target !== e.currentTarget) {
          return;
        }

        if (!hasClass(this.drop, drop.classPrefix + '-open')) {
          removeClass(this.drop, drop.classPrefix + '-open-transitionend');
        }
        this.drop.removeEventListener(transitionEndEvent, this.transitionEndHandler);
      }
    }, {
      key: 'beforeCloseHandler',
      value: function beforeCloseHandler(event) {
        var shouldClose = true;

        if (!this.isClosing && typeof this.options.beforeClose === 'function') {
          this.isClosing = true;
          shouldClose = this.options.beforeClose(event, this) !== false;
        }

        this.isClosing = false;

        return shouldClose;
      }
    }, {
      key: 'close',
      value: function close(event) {
        if (!this.isOpened()) {
          return;
        }

        if (!this.beforeCloseHandler(event)) {
          return;
        }

        removeClass(this.drop, drop.classPrefix + '-open');
        removeClass(this.drop, drop.classPrefix + '-after-open');

        this.drop.addEventListener(transitionEndEvent, this.transitionEndHandler);

        this.trigger('close');

        if (typeof this.tether !== 'undefined') {
          this.tether.disable();
        }

        drop.updateBodyClasses();

        if (this.options.remove) {
          this.remove(event);
        }
      }
    }, {
      key: 'remove',
      value: function remove(event) {
        this.close(event);
        if (this.drop.parentNode) {
          this.drop.parentNode.removeChild(this.drop);
        }
      }
    }, {
      key: 'position',
      value: function position() {
        if (this.isOpened() && typeof this.tether !== 'undefined') {
          this.tether.position();
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this.remove();

        if (typeof this.tether !== 'undefined') {
          this.tether.destroy();
        }

        for (var i = 0; i < this._boundEvents.length; ++i) {
          var _boundEvents$i = this._boundEvents[i];
          var element = _boundEvents$i.element;
          var _event = _boundEvents$i.event;
          var handler = _boundEvents$i.handler;

          element.removeEventListener(_event, handler);
        }

        this._boundEvents = [];

        this.tether = null;
        this.drop = null;
        this.content = null;
        this.target = null;

        removeFromArray(allDrops[drop.classPrefix], this);
        removeFromArray(drop.drops, this);
      }
    }]);

    return DropInstance;
  })(Evented);

  return drop;
}

var Drop = createContext();

document.addEventListener('DOMContentLoaded', function () {
  Drop.updateBodyClasses();
});
return Drop;

}));


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-select {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  margin-bottom: 1rem;\n  outline: none;\n  position: relative;\n  /*\n    &:hover:not(.is-disabled) {\n        .ui-select__label-text {\n            color: $ui-input-label-color--hover;\n        }\n\n        .ui-select__display {\n            border-bottom-color: $ui-input-border-color--hover;\n        }\n\n        .ui-select__dropdown-button {\n            color: $ui-input-button-color--hover;\n        }\n    }\n    */\n}\n.ui-select.is-active:not(.is-disabled) .ui-select__label-text,\n  .ui-select.is-active:not(.is-disabled) .ui-select__icon-wrapper .ui-icon {\n    color: #2196f3;\n}\n.ui-select.is-active:not(.is-disabled) .ui-select__display {\n    border-bottom-color: #2196f3;\n    border-bottom-width: 2px;\n}\n.ui-select.has-floating-label .ui-select__label-text {\n    display: table;\n}\n.ui-select.has-floating-label .ui-select__label-text.is-inline {\n      color: rgba(0, 0, 0, 0.54);\n      cursor: pointer;\n      -webkit-transform: translateY(1.625rem) scale(1.1);\n              transform: translateY(1.625rem) scale(1.1);\n}\n.ui-select.has-floating-label .ui-select__label-text.is-floating {\n      -webkit-transform: translateY(0) scale(1);\n              transform: translateY(0) scale(1);\n}\n.ui-select.has-label .ui-select__icon-wrapper {\n    padding-top: 1.5rem;\n}\n.ui-select.has-label .ui-select__dropdown-button {\n    top: 1.6875rem;\n}\n.ui-select:not(.is-multiple) .ui-select__display {\n    height: 2rem;\n    line-height: 1;\n}\n.ui-select.is-multiple .ui-select__display {\n    line-height: 1.4;\n    padding-bottom: 0.25rem;\n    padding-top: 0.25rem;\n}\n.ui-select.is-invalid:not(.is-disabled) .ui-select__label-text,\n  .ui-select.is-invalid:not(.is-disabled) .ui-select__icon-wrapper .ui-icon {\n    color: #f44336;\n}\n.ui-select.is-invalid:not(.is-disabled) .ui-select__display {\n    border-bottom-color: #f44336;\n}\n.ui-select.is-invalid:not(.is-disabled) .ui-select__feedback {\n    color: #f44336;\n}\n.ui-select.is-disabled .ui-select__display {\n    border-bottom-style: dotted;\n    border-bottom-width: 2px;\n    color: rgba(0, 0, 0, 0.38);\n    cursor: default;\n    background-color: rgba(211, 211, 211, 0.2);\n}\n.ui-select.is-disabled .ui-select__dropdown-button,\n  .ui-select.is-disabled .ui-select__display-value.is-placeholder {\n    color: rgba(0, 0, 0, 0.38);\n    opacity: 0.6;\n}\n.ui-select.is-disabled .ui-select__icon-wrapper .ui-icon {\n    opacity: 0.6;\n}\n.ui-select.is-disabled .ui-select__feedback {\n    opacity: 0.8;\n}\n.ui-select__label {\n  display: block;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  width: 100%;\n}\n.ui-select__icon-wrapper {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin-right: 0.75rem;\n  padding-top: 0.25rem;\n}\n.ui-select__icon-wrapper .ui-icon {\n    color: rgba(0, 0, 0, 0.54);\n}\n.ui-select__content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.ui-select__label-text {\n  color: rgba(0, 0, 0, 0.54);\n  cursor: default;\n  font-size: 0.9375rem;\n  line-height: normal;\n  margin-bottom: 0;\n  -webkit-transform-origin: left;\n          transform-origin: left;\n  -webkit-transition: color 0.1s ease, -webkit-transform 0.2s ease;\n  transition: color 0.1s ease, -webkit-transform 0.2s ease;\n  transition: color 0.1s ease, transform 0.2s ease;\n  transition: color 0.1s ease, transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n.ui-select__display {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: none;\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: normal;\n  padding: 0;\n  -webkit-transition: border 0.1s ease;\n  transition: border 0.1s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.ui-select__display-value {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.ui-select__display-value.is-placeholder {\n    color: rgba(0, 0, 0, 0.38);\n}\n.ui-select__dropdown-button {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 1.125rem;\n  margin-left: auto;\n  margin-right: -0.25rem;\n}\n.ui-select__dropdown {\n  display: block;\n  list-style-type: none;\n  margin: 0;\n  margin-bottom: 0.5rem;\n  min-width: 11.25rem;\n  outline: none;\n  padding: 0;\n  width: 100%;\n}\n.ui-select__dropdown-content {\n  outline: none;\n}\n.ui-select__search-input {\n  background: none;\n  border: none;\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-radius: 0;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: auto;\n  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 0.9375rem;\n  font-weight: normal;\n  height: 2.25rem;\n  outline: none;\n  padding: 0 0.75rem;\n  padding-left: 2.5rem;\n  -webkit-transition: border 0.1s ease;\n  transition: border 0.1s ease;\n  width: 100%;\n}\n.ui-select__search-input::-ms-clear {\n    display: none;\n}\n.ui-select__search-input:focus + .ui-select__search-icon {\n    color: #2196f3;\n}\n.ui-select__search .ui-select__search-icon,\n.ui-select__search .ui-select__search-progress {\n  position: absolute;\n  top: 0.5rem;\n}\n.ui-select__search-icon {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 1.25rem;\n  left: 0.75rem;\n}\n.ui-select__search-progress {\n  right: 0.75rem;\n}\n.ui-select__options {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n  display: block;\n  list-style-type: none;\n  margin: 0;\n  max-height: 16rem;\n  min-width: 100%;\n  overflow-y: auto;\n  padding: 0;\n  position: relative;\n}\n.ui-select__no-results {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 0.875rem;\n  padding: 0.5rem 0.75rem;\n  width: 100%;\n}\n.ui-select__feedback {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 0.875rem;\n  line-height: 1.2;\n  margin: 0;\n  padding-top: 0.25rem;\n  position: relative;\n}\n.ui-select--icon-position-right .ui-select__icon-wrapper {\n  margin-left: 0.5rem;\n  margin-right: 0;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSelectOption_vue__ = __webpack_require__(121);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0241f6fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiSelectOption_vue__ = __webpack_require__(180);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiSelectOption_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0241f6fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiSelectOption_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/UiSelectOption.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0241f6fe", Component.options)
  } else {
    hotAPI.reload("data-v-0241f6fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tether_drop__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tether_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tether_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UiFocusContainer_vue__ = __webpack_require__(22);







/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'ui-popover',

    props: {
        trigger: {
            validator: function validator(value) {
                var isValid = value instanceof Element || value && value._isVue || typeof value === 'string';

                if (!isValid) {
                    console.warn('[UiPopover]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string which matches an existing element.');
                }

                return isValid;
            }
        },
        position: {
            type: String,
            default: 'bottom left'
        },
        constrainToScrollParent: {
            type: Boolean,
            default: true
        },
        openOn: {
            type: String,
            default: 'click' },
        removeOnClose: {
            type: Boolean,
            default: false
        },
        containFocus: {
            type: Boolean,
            default: false
        },
        focusRedirector: Function,
        raised: {
            type: Boolean,
            default: true
        }
    },

    watch: {
        trigger: function trigger() {
            this.destroyDrop();
            this.setupDrop();
        }
    },

    created: function created() {
        this.triggerEl = null;
        this.dropInstance = null;
        this.lastFocusedElement = null;
    },
    mounted: function mounted() {
        this.setupDrop();
    },
    beforeDestroy: function beforeDestroy() {
        this.destroyDrop();
    },


    methods: {
        setTrigger: function setTrigger() {
            if (this.trigger instanceof Element) {
                this.triggerEl = this.trigger;
            } else if (this.trigger && this.trigger._isVue) {
                this.triggerEl = this.trigger.$el;
            } else if (typeof this.trigger === 'string') {
                this.triggerEl = document.querySelector(this.trigger);
            }

            if (!(this.triggerEl instanceof Element)) {
                this.triggerEl = this.$el.parentElement;
            }
        },
        setupDrop: function setupDrop() {
            this.setTrigger();

            if (!this.triggerEl) {
                return;
            }

            this.dropInstance = new __WEBPACK_IMPORTED_MODULE_1_tether_drop___default.a({
                target: this.triggerEl,
                content: this.$el,
                position: this.position,
                constrainToWindow: true,
                openOn: this.openOn,
                remove: this.removeOnClose,
                constrainToScrollParent: this.constrainToScrollParent
            });

            if (!this.removeOnClose && this.dropdownPosition !== 'bottom left') {
                this.dropInstance.open();
                this.dropInstance.close();
                this.dropInstance.open();
                this.dropInstance.close();
            }

            this.dropInstance.on('open', this.onOpen);
            this.dropInstance.on('close', this.onClose);
        },
        destroyDrop: function destroyDrop() {
            if (this.dropInstance) {
                this.dropInstance.destroy();
                this.dropInstance = null;
            }
        },
        open: function open() {
            if (this.dropInstance) {
                this.dropInstance.open();
            }
        },
        close: function close() {
            if (this.dropInstance) {
                this.dropInstance.close();
            }
        },
        toggle: function toggle() {
            if (this.dropInstance) {
                this.dropInstance.toggle();
            }
        },
        isOpen: function isOpen() {
            return Boolean(this.dropInstance) && this.dropInstance.isOpened();
        },
        positionDrop: function positionDrop() {
            var drop = this.dropInstance;
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            var width = drop.drop.getBoundingClientRect().width;
            var left = drop.target.getBoundingClientRect().left;
            var availableSpace = windowWidth - left;

            if (width > availableSpace) {
                var direction = width > availableSpace ? 'right' : 'left';

                drop.tether.attachment.left = direction;
                drop.tether.targetAttachment.left = direction;

                drop.position();
            }
        },
        onOpen: function onOpen() {
            this.positionDrop();
            __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__["a" /* default */].add(this.triggerEl, 'has-dropdown-open');

            this.lastFocusedElement = document.activeElement;
            this.$refs.focusContainer.focus();

            this.$emit('open');
        },
        onClose: function onClose() {
            __WEBPACK_IMPORTED_MODULE_0__helpers_classlist__["a" /* default */].remove(this.triggerEl, 'has-dropdown-open');

            if (this.lastFocusedElement) {
                this.lastFocusedElement.focus();
            }

            this.$emit('close');
        }
    },

    components: {
        UiFocusContainer: __WEBPACK_IMPORTED_MODULE_2__UiFocusContainer_vue__["a" /* default */]
    }
});

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { staticClass: "ui-select-option", class: _vm.classes },
    [
      _vm._t("default", [
        _vm.type === "basic"
          ? _c("div", { staticClass: "ui-select-option__basic" }, [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.option[_vm.keys.label] || _vm.option) +
                  "\n        "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.type === "image"
          ? _c("div", { staticClass: "ui-select-option__image" }, [
              _c("div", {
                staticClass: "ui-select-option__image-object",
                style: _vm.imageStyle
              }),
              _vm._v(" "),
              _c("div", { staticClass: "ui-select-option__image-text" }, [
                _vm._v(_vm._s(_vm.option[_vm.keys.label]))
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.multiple
          ? _c(
              "div",
              { staticClass: "ui-select-option__checkbox" },
              [
                _vm.selected
                  ? _c("ui-icon", [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563L5.016 12zm9-14.016C20.11 3 21 3.938 21 5.016v13.97C21 20.062 20.11 21 18.984 21H5.014C3.89 21 3 20.064 3 18.986V5.015C3 3.94 3.89 3 5.014 3h13.97z"
                            }
                          })
                        ]
                      )
                    ])
                  : _c("ui-icon", [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M18.984 3C20.062 3 21 3.938 21 5.016v13.97C21 20.062 20.062 21 18.984 21H5.014C3.938 21 3 20.064 3 18.986V5.015C3 3.94 3.936 3 5.014 3h13.97zm0 2.016H5.014v13.97h13.97V5.015z"
                            }
                          })
                        ]
                      )
                    ])
              ],
              1
            )
          : _vm._e()
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0241f6fe", esExports)
  }
}

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'ui-progress-circular',

    props: {
        type: {
            type: String,
            default: 'indeterminate' },
        color: {
            type: String,
            default: 'primary' },
        progress: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 32
        },
        stroke: Number,
        autoStroke: {
            type: Boolean,
            default: true
        },
        disableTransition: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes: function classes() {
            return ['ui-progress-circular--color-' + this.color, 'ui-progress-circular--type-' + this.type];
        },
        strokeDashArray: function strokeDashArray() {
            var circumference = 2 * Math.PI * this.radius;

            return Math.round(circumference * 1000) / 1000;
        },
        strokeDashOffset: function strokeDashOffset() {
            var progress = this.moderateProgress(this.progress);
            var circumference = 2 * Math.PI * this.radius;

            return (100 - progress) / 100 * circumference;
        },
        radius: function radius() {
            var stroke = this.stroke ? this.stroke : 4;
            return (this.size - stroke) / 2;
        },
        calculatedStroke: function calculatedStroke() {
            if (this.stroke) {
                return this.stroke;
            }

            if (this.autoStroke) {
                return parseInt(this.size / 8, 10);
            }

            return 4;
        }
    },

    methods: {
        moderateProgress: function moderateProgress(progress) {
            if (isNaN(progress) || progress < 0) {
                return 0;
            }

            if (progress > 100) {
                return 100;
            }

            return progress;
        }
    }
});

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ui-select", class: _vm.classes }, [
    _vm.name
      ? _c("input", {
          staticClass: "ui-select__hidden-input",
          attrs: { type: "hidden", name: _vm.name },
          domProps: { value: _vm.submittedValue }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.icon || _vm.$slots.icon
      ? _c(
          "div",
          { staticClass: "ui-select__icon-wrapper" },
          [_vm._t("icon", [_c("ui-icon", { attrs: { icon: _vm.icon } })])],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "ui-select__content" }, [
      _c(
        "div",
        {
          ref: "label",
          staticClass: "ui-select__label",
          attrs: { name: _vm.name, tabindex: _vm.disabled ? null : "0" },
          on: {
            focus: _vm.onFocus,
            keydown: [
              function($event) {
                if (!("button" in $event) && $event.keyCode !== 113) {
                  return null
                }
                $event.preventDefault()
                _vm.openDropdown($event)
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "space", 32, $event.key)
                ) {
                  return null
                }
                $event.preventDefault()
                _vm.openDropdown($event)
              },
              function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "tab", 9, $event.key)
                ) {
                  return null
                }
                _vm.onBlur($event)
              },
              function($event) {
                !!_vm.onKeydown && _vm.onKeydown($event)
              }
            ]
          }
        },
        [
          _vm.label || _vm.$slots.default
            ? _c(
                "div",
                {
                  staticClass: "ui-select__label-text",
                  class: _vm.labelClasses
                },
                [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ui-select__display" },
            [
              _c(
                "div",
                {
                  staticClass: "ui-select__display-value",
                  class: { "is-placeholder": !_vm.hasDisplayText }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.hasDisplayText
                          ? _vm.displayText
                          : _vm.hasFloatingLabel && _vm.isLabelInline
                            ? null
                            : _vm.placeholder
                      ) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("ui-icon", { staticClass: "ui-select__dropdown-button" }, [
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24"
                    }
                  },
                  [_c("path", { attrs: { d: "M6.984 9.984h10.03L12 15z" } })]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "ui-popover",
            {
              ref: "dropdown",
              staticClass: "ui-select__dropdown",
              attrs: {
                "remove-on-close": "",
                "constrain-to-scroll-parent": false
              },
              on: { close: _vm.onClose, open: _vm.onOpen }
            },
            [
              _c(
                "div",
                {
                  ref: "dropdownContent",
                  staticClass: "ui-select__dropdown-content",
                  attrs: { tabindex: "-1" },
                  on: {
                    keydown: [
                      function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "down", 40, $event.key)
                        ) {
                          return null
                        }
                        $event.preventDefault()
                        _vm.highlightOption(_vm.highlightedIndex + 1)
                      },
                      function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        $event.preventDefault()
                        $event.stopPropagation()
                        _vm.selectHighlighted(_vm.highlightedIndex, $event)
                      },
                      function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "esc", 27, $event.key)
                        ) {
                          return null
                        }
                        $event.preventDefault()
                        $event.stopPropagation()
                        _vm.closeDropdown()
                      },
                      function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "tab", 9, $event.key)
                        ) {
                          return null
                        }
                        _vm.onBlur($event)
                      },
                      function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "up", 38, $event.key)
                        ) {
                          return null
                        }
                        $event.preventDefault()
                        _vm.highlightOption(_vm.highlightedIndex - 1)
                      },
                      function($event) {
                        $event.stopPropagation()
                        !!_vm.onKeydown && _vm.onKeydown($event)
                      }
                    ]
                  }
                },
                [
                  _vm.hasSearch
                    ? _c(
                        "div",
                        {
                          staticClass: "ui-select__search",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                            },
                            keydown: function($event) {
                              if (
                                !("button" in $event) &&
                                _vm._k($event.keyCode, "space", 32, $event.key)
                              ) {
                                return null
                              }
                              $event.stopPropagation()
                            }
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.query,
                                expression: "query"
                              }
                            ],
                            ref: "searchInput",
                            staticClass: "ui-select__search-input",
                            attrs: {
                              autocomplete: "off",
                              type: "text",
                              placeholder: _vm.searchPlaceholder
                            },
                            domProps: { value: _vm.query },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.query = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ui-icon",
                            { staticClass: "ui-select__search-icon" },
                            [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zm6 0l4.97 4.97-1.5 1.5-4.97-4.97v-.797l-.28-.282c-1.126.984-2.626 1.547-4.22 1.547-3.61 0-6.516-2.86-6.516-6.47S5.906 3 9.516 3s6.47 2.906 6.47 6.516c0 1.594-.564 3.094-1.548 4.22l.28.28h.798z"
                                    }
                                  })
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.loading
                            ? _c("ui-progress-circular", {
                                staticClass: "ui-select__search-progress",
                                attrs: { size: 20, stroke: 4 }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { ref: "optionsList", staticClass: "ui-select__options" },
                    [
                      _vm._l(_vm.filteredOptions, function(option, index) {
                        return _c(
                          "ui-select-option",
                          {
                            key: index,
                            ref: "options",
                            refInFor: true,
                            attrs: {
                              highlighted: _vm.highlightedIndex === index,
                              keys: _vm.keys,
                              multiple: _vm.multiple,
                              option: option,
                              selected: _vm.isOptionSelected(option),
                              type: _vm.type
                            },
                            nativeOn: {
                              click: function($event) {
                                $event.stopPropagation()
                                _vm.selectOption(option, index)
                              }
                            }
                          },
                          [
                            _vm._t("option", null, {
                              highlighted: _vm.highlightedIndex === index,
                              index: index,
                              option: option,
                              selected: _vm.isOptionSelected(option)
                            })
                          ],
                          2
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.hasNoResults,
                              expression: "hasNoResults"
                            }
                          ],
                          staticClass: "ui-select__no-results"
                        },
                        [_vm._t("no-results", [_vm._v("No results found")])],
                        2
                      )
                    ],
                    2
                  )
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.hasFeedback
        ? _c("div", { staticClass: "ui-select__feedback" }, [
            _vm.showError
              ? _c(
                  "div",
                  { staticClass: "ui-select__feedback-text" },
                  [_vm._t("error", [_vm._v(_vm._s(_vm.error))])],
                  2
                )
              : _vm.showHelp
                ? _c(
                    "div",
                    { staticClass: "ui-select__feedback-text" },
                    [_vm._t("help", [_vm._v(_vm._s(_vm.help))])],
                    2
                  )
                : _vm._e()
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c55db4ae", esExports)
  }
}

/***/ }),

/***/ 2:
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

var listToStyles = __webpack_require__(3)

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
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

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
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

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
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
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

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("246eeae2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0241f6fe\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSelectOption.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0241f6fe\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSelectOption.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiFocusContainer_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3888f094_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiFocusContainer_vue__ = __webpack_require__(25);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiFocusContainer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3888f094_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiFocusContainer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/UiFocusContainer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3888f094", Component.options)
  } else {
    hotAPI.reload("data-v-3888f094", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(172);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("11a9d726", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c55db4ae\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSelect.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c55db4ae\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiSelect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiPopover_vue__ = __webpack_require__(18);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ffc9d48_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiPopover_vue__ = __webpack_require__(33);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(36)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiPopover_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ffc9d48_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiPopover_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/UiPopover.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ffc9d48", Component.options)
  } else {
    hotAPI.reload("data-v-0ffc9d48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-focus-container__focus-redirector,\n.ui-focus-container__last-focusable {\n  opacity: 0;\n  position: absolute;\n}\n.ui-focus-container__content {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ui-focus-container" }, [
    !_vm.disabled
      ? _c("span", {
          staticClass: "ui-focus-container__focus-redirector",
          attrs: { tabindex: "0" },
          on: {
            focus: function($event) {
              _vm.redirectFocus($event, { isTabbingForward: false })
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "content",
        staticClass: "ui-focus-container__content",
        attrs: { tabindex: "-1" }
      },
      [_vm._t("default")],
      2
    ),
    _vm._v(" "),
    !_vm.disabled && _vm.containFocus
      ? _c("span", {
          ref: "lastFocusable",
          staticClass: "ui-focus-container__last-focusable",
          attrs: { tabindex: "-1" }
        })
      : _vm._e(),
    _vm._v(" "),
    !_vm.disabled
      ? _c("span", {
          staticClass: "ui-focus-container__focus-redirector",
          attrs: { tabindex: "0" },
          on: {
            focus: function($event) {
              _vm.redirectFocus($event, { isTabbingForward: true })
            }
          }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3888f094", esExports)
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0e3833da", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3888f094\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiFocusContainer.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3888f094\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiFocusContainer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiProgressCircular_vue__ = __webpack_require__(19);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60945259_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiProgressCircular_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(38)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiProgressCircular_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60945259_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiProgressCircular_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/UiProgressCircular.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60945259", Component.options)
  } else {
    hotAPI.reload("data-v-60945259", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-popover {\n  background-color: white;\n  outline: none;\n}\n.ui-popover.is-raised {\n    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.ui-popover .ui-menu {\n    border: none;\n}\n.drop-element {\n  display: none;\n  max-height: 100%;\n  max-width: 100%;\n  opacity: 0;\n  position: absolute;\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n  z-index: 60;\n}\n.drop-element, .drop-element:after, .drop-element:before,\n  .drop-element *,\n  .drop-element *:after,\n  .drop-element *:before {\n    box-sizing: border-box;\n}\n.drop-element.drop-open {\n    display: block;\n}\n.drop-element.drop-after-open {\n    opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ 3:
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


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-progress-circular {\n  position: relative;\n}\n.ui-progress-circular__determinate {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n.ui-progress-circular__determinate-path {\n  stroke-dashoffset: 0;\n  -webkit-transition: stroke-dashoffset 0.3s;\n  transition: stroke-dashoffset 0.3s;\n}\n.ui-progress-circular__indeterminate {\n  -webkit-animation: ui-progress-circular-rotate 0.7s linear infinite;\n          animation: ui-progress-circular-rotate 0.7s linear infinite;\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  width: 100%;\n}\n.ui-progress-circular__indeterminate-path {\n  stroke-dasharray: 89,200;\n  stroke-dashoffset: -35px;\n  stroke-linecap: round;\n}\n.ui-progress-circular--color-multi-color .ui-progress-circular__determinate-path {\n  stroke: #2196f3;\n}\n.ui-progress-circular--color-multi-color .ui-progress-circular__indeterminate-path {\n  -webkit-animation: ui-progress-circular-color 6s ease-in-out infinite;\n          animation: ui-progress-circular-color 6s ease-in-out infinite;\n}\n.ui-progress-circular--color-primary .ui-progress-circular__determinate-path,\n.ui-progress-circular--color-primary .ui-progress-circular__indeterminate-path {\n  stroke: #2196f3;\n}\n.ui-progress-circular--color-accent .ui-progress-circular__determinate-path,\n.ui-progress-circular--color-accent .ui-progress-circular__indeterminate-path {\n  stroke: #d500f9;\n}\n.ui-progress-circular--color-black .ui-progress-circular__determinate-path,\n.ui-progress-circular--color-black .ui-progress-circular__indeterminate-path {\n  stroke: #212121;\n}\n.ui-progress-circular--color-white .ui-progress-circular__determinate-path,\n.ui-progress-circular--color-white .ui-progress-circular__indeterminate-path {\n  stroke: white;\n}\n.ui-progress-circular--transition-fade-enter-active,\n.ui-progress-circular--transition-fade-leave-active {\n  -webkit-transition: opacity 0.3s ease, -webkit-transform 0.3s ease;\n  transition: opacity 0.3s ease, -webkit-transform 0.3s ease;\n  transition: opacity 0.3s ease, transform 0.3s ease;\n  transition: opacity 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.ui-progress-circular--transition-fade-enter,\n.ui-progress-circular--transition-fade-leave-active {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n@-webkit-keyframes ui-progress-circular-rotate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes ui-progress-circular-rotate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes ui-progress-circular-color {\n0%,\n  100% {\n    stroke: #f44336;\n}\n40% {\n    stroke: #2196f3;\n}\n66% {\n    stroke: #4caf50;\n}\n80%,\n  90% {\n    stroke: #ff9800;\n}\n}\n@keyframes ui-progress-circular-color {\n0%,\n  100% {\n    stroke: #f44336;\n}\n40% {\n    stroke: #2196f3;\n}\n66% {\n    stroke: #4caf50;\n}\n80%,\n  90% {\n    stroke: #ff9800;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ui-focus-container",
    {
      ref: "focusContainer",
      staticClass: "ui-popover",
      class: { "is-raised": _vm.raised },
      attrs: {
        role: "dialog",
        "contain-focus": _vm.containFocus,
        "focus-redirector": _vm.focusRedirector
      },
      on: { "focus-overflow": _vm.close },
      nativeOn: {
        keydown: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "esc", 27, $event.key)
          ) {
            return null
          }
          _vm.close($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ffc9d48", esExports)
  }
}

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: {
        name: _vm.disableTransition
          ? null
          : "ui-progress-circular--transition-fade"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "ui-progress-circular",
          class: _vm.classes,
          style: { width: _vm.size + "px", height: _vm.size + "px" }
        },
        [
          _vm.type === "determinate"
            ? _c(
                "svg",
                {
                  staticClass: "ui-progress-circular__determinate",
                  attrs: {
                    role: "progressbar",
                    "aria-valuemax": 100,
                    "aria-valuemin": 0,
                    "aria-valuenow": _vm.progress,
                    height: _vm.size,
                    width: _vm.size
                  }
                },
                [
                  _c("circle", {
                    staticClass: "ui-progress-circular__determinate-path",
                    style: {
                      "stroke-dashoffset": _vm.strokeDashOffset,
                      "stroke-width": _vm.calculatedStroke
                    },
                    attrs: {
                      fill: "transparent",
                      "stroke-dashoffset": "0",
                      cx: _vm.size / 2,
                      cy: _vm.size / 2,
                      r: _vm.radius,
                      "stroke-dasharray": _vm.strokeDashArray
                    }
                  })
                ]
              )
            : _c(
                "svg",
                {
                  staticClass: "ui-progress-circular__indeterminate",
                  attrs: {
                    role: "progressbar",
                    viewBox: "25 25 50 50",
                    "aria-valuemax": 100,
                    "aria-valuemin": 0
                  }
                },
                [
                  _c("circle", {
                    staticClass: "ui-progress-circular__indeterminate-path",
                    attrs: {
                      cx: "50",
                      cy: "50",
                      fill: "none",
                      r: "20",
                      "stroke-miterlimit": "10",
                      "stroke-width": _vm.calculatedStroke
                    }
                  })
                ]
              )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-60945259", esExports)
  }
}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("fd74c15a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ffc9d48\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiPopover.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ffc9d48\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiPopover.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("219145e7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60945259\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiProgressCircular.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60945259\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UiProgressCircular.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'ui-icon',

    props: {
        icon: String,
        iconSet: {
            type: String,
            default: 'material-icons'
        },
        ariaLabel: String,
        removeText: {
            type: Boolean,
            default: false
        },
        useSvg: {
            type: Boolean,
            default: false
        }
    }
});

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var trim = /^\s+|\s+$/g;
var whitespace = /\s+/g;

function interpret(input) {
    return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

function classes(el) {
    if (isElement(el)) {
        return (el.getAttribute('class') || '').replace(trim, '').split(whitespace);
    }

    return [];
}

function set(el, input) {
    if (isElement(el)) {
        el.setAttribute('class', interpret(input).join(' '));
    }
}

function add(el, input) {
    var current = remove(el, input);
    var values = interpret(input);

    current.push.apply(current, values);
    set(el, current);

    return current;
}

function remove(el, input) {
    var current = classes(el);
    var values = interpret(input);

    values.forEach(function (value) {
        var i = current.indexOf(value);
        if (i !== -1) {
            current.splice(i, 1);
        }
    });

    set(el, current);

    return current;
}

function contains(el, input) {
    var current = classes(el);
    var values = interpret(input);

    return values.every(function (value) {
        return current.indexOf(value) !== -1;
    });
}

function isElement(o) {
    var elementObjects = (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object';
    return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

function isElementObject(o) {
    return o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && typeof o.nodeName === 'string' && o.nodeType === 1;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    add: add,
    remove: remove,
    contains: contains,
    has: contains,
    set: set,
    get: classes
});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isObject */
/* harmony export (immutable) */ __webpack_exports__["a"] = looseEqual;
/* harmony export (immutable) */ __webpack_exports__["b"] = looseIndexOf;
/* unused harmony export startsWith */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

function looseEqual(a, b) {
    return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
}

function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) {
            return i;
        }
    }

    return -1;
}

function startsWith(string, query) {
    var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    return string.substr(position, query.length) === query;
}

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export inView */
/* harmony export (immutable) */ __webpack_exports__["b"] = scrollIntoView;
/* harmony export (immutable) */ __webpack_exports__["a"] = resetScroll;
function inView(element, container) {
    if (!element) {
        return;
    }

    container = container || element.parentElement;

    var top = element.offsetTop;
    var parentTop = container.scrollTop;
    var bottom = top + element.offsetHeight;
    var parentBottom = container.offsetHeight;

    return top >= parentTop && bottom <= parentBottom;
}

function scrollIntoView(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { container: null, marginTop: 0 };

    if (!element) {
        return;
    }

    options.container = options.container || element.parentElement;

    if (inView(element, options.container)) {
        return;
    }

    options.container.scrollTop = element.offsetTop - options.marginTop;
}

function resetScroll(element) {
    if (!element) {
        return;
    }

    element.scrollTop = 0;
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
    inView: inView,
    scrollIntoView: scrollIntoView,
    resetScroll: resetScroll
});

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiIcon_vue__ = __webpack_require__(4);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4c9b034_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiIcon_vue__ = __webpack_require__(9);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(1)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UiIcon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4c9b034_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UiIcon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/UiIcon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c4c9b034", Component.options)
  } else {
    hotAPI.reload("data-v-c4c9b034", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.ui-icon {\n  cursor: inherit;\n  display: inline-block;\n  font-size: 1.5rem;\n  height: 1em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  width: 1em;\n}\n.ui-icon svg {\n    display: block;\n    fill: currentColor;\n    height: 1em;\n    margin: 0;\n    padding: 0;\n    width: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      staticClass: "ui-icon",
      class: [_vm.iconSet, _vm.icon],
      attrs: { "aria-label": _vm.ariaLabel }
    },
    [
      _vm.useSvg
        ? _c("svg", { staticClass: "ui-icon__svg" }, [
            _c("use", {
              attrs: {
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xlink:href": "#" + _vm.icon
              }
            })
          ])
        : _vm._t("default", [_vm._v(_vm._s(_vm.removeText ? null : _vm.icon))])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c4c9b034", esExports)
  }
}

/***/ })

/******/ });
});
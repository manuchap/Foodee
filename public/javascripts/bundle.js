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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascripts/app.js":
/*!****************************!*\
  !*** ./javascripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _manager = __webpack_require__(/*! ./sections/_manager */ "./javascripts/sections/_manager.js");

var _manager2 = _interopRequireDefault(_manager);

var _sections = __webpack_require__(/*! ./sections */ "./javascripts/sections/index.js");

var Sections = _interopRequireWildcard(_sections);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// === Wagon main javascript file ===
// Tell Webpack to load the style
// import '../stylesheets/app.scss';

// Import the classes required to handle sections
document.addEventListener('DOMContentLoaded', function (event) {

  // Load all the sections
  var sectionsManager = new _manager2.default();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  sectionsManager.registerSection('about', Sections.About);
  sectionsManager.registerSection('fh5co_home', Sections.Home);

  sectionsManager.start();
});

/***/ }),

/***/ "./javascripts/sections/_manager.js":
/*!******************************************!*\
  !*** ./javascripts/sections/_manager.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Manager = function () {
  function Manager() {
    _classCallCheck(this, Manager);

    this.sections = {};
  }

  _createClass(Manager, [{
    key: 'registerSection',
    value: function registerSection(type, actions) {
      console.log(type, actions);
      this.sections[type] = actions;
    }
  }, {
    key: 'start',
    value: function start() {
      var _this = this;

      this.eachType(function (type, actions) {
        _this.queryAll('.locomotive-section[data-locomotive-section-type="' + type + '"]').forEach(function (section, index) {
          _this.runAction(actions, 'load', section);
        });
      });
      this.registerEvents();

      window._sectionsManager = this;
    }
  }, {
    key: 'registerEvents',
    value: function registerEvents() {
      var _this2 = this;

      var events = {
        section: ['load', 'unload', 'select', 'deselect', 'reorder'],
        block: ['select', 'deselect']
      };

      for (var namespace in events) {
        events[namespace].forEach(function (eventType) {
          var eventName = 'locomotive::' + namespace + '::' + eventType;
          var actionName = _this2.eventTypeToActionName(namespace, eventType);

          document.addEventListener(eventName, function (event) {
            _this2.applyRuleToEvent(actionName, event);
          });
        });
      }
    }
  }, {
    key: 'applyRuleToEvent',
    value: function applyRuleToEvent(actionName, event) {
      var _event$detail = event.detail,
          sectionId = _event$detail.sectionId,
          blockId = _event$detail.blockId;

      var section = document.getElementById('locomotive-section-' + sectionId);
      var type = section.getAttribute('data-locomotive-section-type');
      var block = this.queryOne('[data-locomotive-block="section-' + sectionId + '-block-' + blockId + '"]', section);

      this.runAction(this.sections[type], actionName, section, block);
    }
  }, {
    key: 'eventTypeToActionName',
    value: function eventTypeToActionName(namespace, eventType) {
      if (namespace === 'section') return eventType;else return namespace + eventType.charAt(0).toUpperCase() + eventType.slice(1);
    }
  }, {
    key: 'runAction',
    value: function runAction(actions, actionName, section, block) {
      var action = actions[actionName];

      if (action !== undefined) action(section, block);
    }
  }, {
    key: 'eachType',
    value: function eachType(callback) {
      for (var type in this.sections) {
        var actions = this.sections[type];
        callback(type, actions);
      }
    }
  }, {
    key: 'queryAll',
    value: function queryAll(selector, scope) {
      scope = scope ? scope : document;
      return scope.querySelectorAll(selector);
    }
  }, {
    key: 'queryOne',
    value: function queryOne(selector, scope) {
      scope = scope ? scope : document;
      return scope.querySelector(selector);
    }
  }, {
    key: 'testAction',
    value: function testAction(eventType, section, block) {
      var hasBlock = block !== undefined && block !== null;
      var namespace = hasBlock ? 'block' : 'section';
      var sectionId = section.getAttribute('id').replace('locomotive-section-', '');
      var blockId = hasBlock ? block.getAttribute('data-locomotive-block').replace('section-' + sectionId + '-block-', '') : null;
      var detail = { detail: { sectionId: sectionId, blockId: blockId } };
      var eventName = 'locomotive::' + namespace + '::' + eventType;

      document.dispatchEvent(new CustomEvent(eventName, detail));
    }
  }]);

  return Manager;
}();

exports.default = Manager;

/***/ }),

/***/ "./javascripts/sections/about.js":
/*!***************************************!*\
  !*** ./javascripts/sections/about.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Section = {

  // load: (section) => {
  // },

  // unload: (section) => {
  // },

  // select: (section) => {
  // },

  // deselect: (section) => {
  // },

  // reorder: (section) => {
  // },

  // blockSelect: (section, block) => {
  // },

  // blockDeSelect: (section, block) => {
  // }

};

exports.default = Section;

/***/ }),

/***/ "./javascripts/sections/home.js":
/*!**************************************!*\
  !*** ./javascripts/sections/home.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Section = {

  // load: (section) => {
  // },

  // unload: (section) => {
  // },

  // select: (section) => {
  // },

  // deselect: (section) => {
  // },

  // reorder: (section) => {
  // },

  // blockSelect: (section, block) => {
  // },

  // blockDeSelect: (section, block) => {
  // }

};

exports.default = Section;

/***/ }),

/***/ "./javascripts/sections/index.js":
/*!***************************************!*\
  !*** ./javascripts/sections/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(/*! ./home */ "./javascripts/sections/home.js");

Object.defineProperty(exports, 'Fh5coHome', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_home).default;
  }
});

var _about = __webpack_require__(/*! ./about */ "./javascripts/sections/about.js");

Object.defineProperty(exports, 'About', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_about).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL19tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2Fib3V0LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvc2VjdGlvbnMvaW5kZXguanMiXSwibmFtZXMiOlsiU2VjdGlvbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uc01hbmFnZXIiLCJTZWN0aW9uc01hbmFnZXIiLCJyZWdpc3RlclNlY3Rpb24iLCJBYm91dCIsIkhvbWUiLCJzdGFydCIsIk1hbmFnZXIiLCJzZWN0aW9ucyIsInR5cGUiLCJhY3Rpb25zIiwiY29uc29sZSIsImxvZyIsImVhY2hUeXBlIiwicXVlcnlBbGwiLCJmb3JFYWNoIiwic2VjdGlvbiIsImluZGV4IiwicnVuQWN0aW9uIiwicmVnaXN0ZXJFdmVudHMiLCJ3aW5kb3ciLCJfc2VjdGlvbnNNYW5hZ2VyIiwiZXZlbnRzIiwiYmxvY2siLCJuYW1lc3BhY2UiLCJldmVudE5hbWUiLCJldmVudFR5cGUiLCJhY3Rpb25OYW1lIiwiZXZlbnRUeXBlVG9BY3Rpb25OYW1lIiwiYXBwbHlSdWxlVG9FdmVudCIsImV2ZW50IiwiZGV0YWlsIiwic2VjdGlvbklkIiwiYmxvY2tJZCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlPbmUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiYWN0aW9uIiwidW5kZWZpbmVkIiwiY2FsbGJhY2siLCJzZWxlY3RvciIsInNjb3BlIiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNCbG9jayIsInJlcGxhY2UiLCJkaXNwYXRjaEV2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TyIsImZpbGUiOiJqYXZhc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2phdmFzY3JpcHRzL2FwcC5qc1wiKTtcbiIsIi8vID09PSBXYWdvbiBtYWluIGphdmFzY3JpcHQgZmlsZSA9PT1cbi8vIFRlbGwgV2VicGFjayB0byBsb2FkIHRoZSBzdHlsZVxuLy8gaW1wb3J0ICcuLi9zdHlsZXNoZWV0cy9hcHAuc2Nzcyc7XG5cbi8vIEltcG9ydCB0aGUgY2xhc3NlcyByZXF1aXJlZCB0byBoYW5kbGUgc2VjdGlvbnNcbmltcG9ydCBTZWN0aW9uc01hbmFnZXIgZnJvbSAnLi9zZWN0aW9ucy9fbWFuYWdlcic7XG5pbXBvcnQgKiBhcyBTZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGV2ZW50ID0+IHtcblxuICAvLyBMb2FkIGFsbCB0aGUgc2VjdGlvbnNcbiAgY29uc3Qgc2VjdGlvbnNNYW5hZ2VyID0gbmV3IFNlY3Rpb25zTWFuYWdlcigpO1xuXG4gIC8vIFJlZ2lzdGVyIHNlY3Rpb25zIGhlcmUuIERPIE5PVCBSRU1PVkUgT1IgVVBEQVRFIFRISVMgTElORVxuICBzZWN0aW9uc01hbmFnZXIucmVnaXN0ZXJTZWN0aW9uKCdhYm91dCcsIFNlY3Rpb25zLkFib3V0KTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignZmg1Y29faG9tZScsIFNlY3Rpb25zLkhvbWUpO1xuXG4gIHNlY3Rpb25zTWFuYWdlci5zdGFydCgpO1xuXG59KTtcbiIsImNsYXNzIE1hbmFnZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyU2VjdGlvbih0eXBlLCBhY3Rpb25zKSB7XG4gICAgY29uc29sZS5sb2codHlwZSwgYWN0aW9ucyk7XG4gICAgdGhpcy5zZWN0aW9uc1t0eXBlXSA9IGFjdGlvbnM7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVhY2hUeXBlKCh0eXBlLCBhY3Rpb25zKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5QWxsKGAubG9jb21vdGl2ZS1zZWN0aW9uW2RhdGEtbG9jb21vdGl2ZS1zZWN0aW9uLXR5cGU9XCIke3R5cGV9XCJdYCkuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5ydW5BY3Rpb24oYWN0aW9ucywgJ2xvYWQnLCBzZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIHdpbmRvdy5fc2VjdGlvbnNNYW5hZ2VyID0gdGhpcztcbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGNvbnN0IGV2ZW50cyA9IHtcbiAgICAgIHNlY3Rpb246IFsnbG9hZCcsICd1bmxvYWQnLCAnc2VsZWN0JywgJ2Rlc2VsZWN0JywgJ3Jlb3JkZXInXSxcbiAgICAgIGJsb2NrOiBbJ3NlbGVjdCcsICdkZXNlbGVjdCddXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZXNwYWNlIGluIGV2ZW50cykge1xuICAgICAgZXZlbnRzW25hbWVzcGFjZV0uZm9yRWFjaChldmVudFR5cGUgPT4ge1xuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBgbG9jb21vdGl2ZTo6JHtuYW1lc3BhY2V9Ojoke2V2ZW50VHlwZX1gO1xuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gdGhpcy5ldmVudFR5cGVUb0FjdGlvbk5hbWUobmFtZXNwYWNlLCBldmVudFR5cGUpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hcHBseVJ1bGVUb0V2ZW50KGFjdGlvbk5hbWUsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVJ1bGVUb0V2ZW50KGFjdGlvbk5hbWUsIGV2ZW50KSB7XG4gICAgY29uc3QgeyBzZWN0aW9uSWQsIGJsb2NrSWQgfSA9IGV2ZW50LmRldGFpbDtcbiAgICBjb25zdCBzZWN0aW9uICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbG9jb21vdGl2ZS1zZWN0aW9uLSR7c2VjdGlvbklkfWApO1xuICAgIGNvbnN0IHR5cGUgICAgICA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWxvY29tb3RpdmUtc2VjdGlvbi10eXBlJyk7XG4gICAgY29uc3QgYmxvY2sgICAgID0gdGhpcy5xdWVyeU9uZShgW2RhdGEtbG9jb21vdGl2ZS1ibG9jaz1cInNlY3Rpb24tJHtzZWN0aW9uSWR9LWJsb2NrLSR7YmxvY2tJZH1cIl1gLCBzZWN0aW9uKTtcblxuICAgIHRoaXMucnVuQWN0aW9uKHRoaXMuc2VjdGlvbnNbdHlwZV0sIGFjdGlvbk5hbWUsIHNlY3Rpb24sIGJsb2NrKVxuICB9XG5cbiAgZXZlbnRUeXBlVG9BY3Rpb25OYW1lKG5hbWVzcGFjZSwgZXZlbnRUeXBlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSA9PT0gJ3NlY3Rpb24nKVxuICAgICAgcmV0dXJuIGV2ZW50VHlwZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbmFtZXNwYWNlICsgZXZlbnRUeXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZXZlbnRUeXBlLnNsaWNlKDEpO1xuICB9XG5cbiAgcnVuQWN0aW9uKGFjdGlvbnMsIGFjdGlvbk5hbWUsIHNlY3Rpb24sIGJsb2NrKSB7XG4gICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1thY3Rpb25OYW1lXTtcblxuICAgIGlmIChhY3Rpb24gIT09IHVuZGVmaW5lZClcbiAgICAgIGFjdGlvbihzZWN0aW9uLCBibG9jayk7XG4gIH1cblxuICBlYWNoVHlwZShjYWxsYmFjaykge1xuICAgIGZvciAodmFyIHR5cGUgaW4gdGhpcy5zZWN0aW9ucykge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuc2VjdGlvbnNbdHlwZV07XG4gICAgICBjYWxsYmFjayh0eXBlLCBhY3Rpb25zKVxuICAgIH1cbiAgfVxuXG4gIHF1ZXJ5QWxsKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgPyBzY29wZSA6IGRvY3VtZW50O1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHF1ZXJ5T25lKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgPyBzY29wZSA6IGRvY3VtZW50O1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHRlc3RBY3Rpb24oZXZlbnRUeXBlLCBzZWN0aW9uLCBibG9jaykge1xuICAgIGNvbnN0IGhhc0Jsb2NrICA9IGJsb2NrICE9PSB1bmRlZmluZWQgJiYgYmxvY2sgIT09IG51bGwgO1xuICAgIGNvbnN0IG5hbWVzcGFjZSA9IGhhc0Jsb2NrID8gJ2Jsb2NrJyA6ICdzZWN0aW9uJztcbiAgICBjb25zdCBzZWN0aW9uSWQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdsb2NvbW90aXZlLXNlY3Rpb24tJywgJycpO1xuICAgIGNvbnN0IGJsb2NrSWQgICA9IGhhc0Jsb2NrID8gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLWxvY29tb3RpdmUtYmxvY2snKS5yZXBsYWNlKGBzZWN0aW9uLSR7c2VjdGlvbklkfS1ibG9jay1gLCAnJykgOiBudWxsO1xuICAgIGNvbnN0IGRldGFpbCAgICA9IHsgZGV0YWlsOiB7IHNlY3Rpb25JZCwgYmxvY2tJZCB9IH07XG4gICAgY29uc3QgZXZlbnROYW1lID0gYGxvY29tb3RpdmU6OiR7bmFtZXNwYWNlfTo6JHtldmVudFR5cGV9YDtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZGV0YWlsKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiLy8gSW1wb3J0IGFsbCB0aGUgc2VjdGlvbnMgaGVyZVxuLy9cbi8vIEV4YW1wbGU6XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tICcuL2hlcm8nO1xuLy9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmg1Y29Ib21lIH0gZnJvbSAnLi9ob21lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWJvdXQgfSBmcm9tICcuL2Fib3V0JztcbiJdLCJzb3VyY2VSb290IjoiIn0=
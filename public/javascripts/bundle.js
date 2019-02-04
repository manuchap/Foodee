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
  sectionsManager.registerSection('fh5co_home', Sections.Fh5coHome);

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

/***/ "./javascripts/sections/fh5co_home.js":
/*!********************************************!*\
  !*** ./javascripts/sections/fh5co_home.js ***!
  \********************************************/
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

var _fh5co_home = __webpack_require__(/*! ./fh5co_home */ "./javascripts/sections/fh5co_home.js");

Object.defineProperty(exports, 'Fh5coHome', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fh5co_home).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL19tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2ZoNWNvX2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvc2VjdGlvbnMvaW5kZXguanMiXSwibmFtZXMiOlsiU2VjdGlvbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uc01hbmFnZXIiLCJTZWN0aW9uc01hbmFnZXIiLCJyZWdpc3RlclNlY3Rpb24iLCJGaDVjb0hvbWUiLCJzdGFydCIsIk1hbmFnZXIiLCJzZWN0aW9ucyIsInR5cGUiLCJhY3Rpb25zIiwiY29uc29sZSIsImxvZyIsImVhY2hUeXBlIiwicXVlcnlBbGwiLCJmb3JFYWNoIiwic2VjdGlvbiIsImluZGV4IiwicnVuQWN0aW9uIiwicmVnaXN0ZXJFdmVudHMiLCJ3aW5kb3ciLCJfc2VjdGlvbnNNYW5hZ2VyIiwiZXZlbnRzIiwiYmxvY2siLCJuYW1lc3BhY2UiLCJldmVudE5hbWUiLCJldmVudFR5cGUiLCJhY3Rpb25OYW1lIiwiZXZlbnRUeXBlVG9BY3Rpb25OYW1lIiwiYXBwbHlSdWxlVG9FdmVudCIsImV2ZW50IiwiZGV0YWlsIiwic2VjdGlvbklkIiwiYmxvY2tJZCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlPbmUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiYWN0aW9uIiwidW5kZWZpbmVkIiwiY2FsbGJhY2siLCJzZWxlY3RvciIsInNjb3BlIiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNCbG9jayIsInJlcGxhY2UiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJTZWN0aW9uIiwiZGVmYXVsdCJdLCJt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QUFXVixPLEVBQVNPLEssRUFBTztBQUNwQyxVQUFNd0IsV0FBWXhCLFVBQVVrQixTQUFWLElBQXVCbEIsVUFBVSxJQUFuRDtBQUNBLFVBQU1DLFlBQVl1QixXQUFXLE9BQVgsR0FBcUIsU0FBdkM7QUFDQSxVQUFNZixZQUFZaEIsUUFBUW1CLFlBQVIsQ0FBcUIsSUFBckIsRUFBMkJhLE9BQTNCLENBQW1DLHFCQUFuQyxFQUEwRCxFQUExRCxDQUFsQjtBQUNBLFVBQU1mLFVBQVljLFdBQVd4QixNQUFNWSxZQUFOLENBQW1CLHVCQUFuQixFQUE0Q2EsT0FBNUMsY0FBK0RoQixTQUEvRCxjQUFtRixFQUFuRixDQUFYLEdBQW9HLElBQXRIO0FBQ0EsVUFBTUQsU0FBWSxFQUFFQSxRQUFRLEVBQUVDLG9CQUFGLEVBQWFDLGdCQUFiLEVBQVYsRUFBbEI7QUFDQSxVQUFNUiw2QkFBMkJELFNBQTNCLFVBQXlDRSxTQUEvQzs7QUFFQTFCLGVBQVNpRCxhQUFULENBQXVCLElBQUlDLFdBQUosQ0FBZ0J6QixTQUFoQixFQUEyQk0sTUFBM0IsQ0FBdkI7QUFDRDs7Ozs7O2tCQUlZeEIsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RmYsSUFBTTRDLFVBQVU7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFyQmMsQ0FBaEI7O2tCQXlCZUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDcEJOQyxPIiwiZmlsZSI6ImphdmFzY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vamF2YXNjcmlwdHMvYXBwLmpzXCIpO1xuIiwiLy8gPT09IFdhZ29uIG1haW4gamF2YXNjcmlwdCBmaWxlID09PVxuLy8gVGVsbCBXZWJwYWNrIHRvIGxvYWQgdGhlIHN0eWxlXG4vLyBpbXBvcnQgJy4uL3N0eWxlc2hlZXRzL2FwcC5zY3NzJztcblxuLy8gSW1wb3J0IHRoZSBjbGFzc2VzIHJlcXVpcmVkIHRvIGhhbmRsZSBzZWN0aW9uc1xuaW1wb3J0IFNlY3Rpb25zTWFuYWdlciBmcm9tICcuL3NlY3Rpb25zL19tYW5hZ2VyJztcbmltcG9ydCAqIGFzIFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZXZlbnQgPT4ge1xuXG4gIC8vIExvYWQgYWxsIHRoZSBzZWN0aW9uc1xuICBjb25zdCBzZWN0aW9uc01hbmFnZXIgPSBuZXcgU2VjdGlvbnNNYW5hZ2VyKCk7XG5cbiAgLy8gUmVnaXN0ZXIgc2VjdGlvbnMgaGVyZS4gRE8gTk9UIFJFTU9WRSBPUiBVUERBVEUgVEhJUyBMSU5FXG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ2ZoNWNvX2hvbWUnLCBTZWN0aW9ucy5GaDVjb0hvbWUpO1xuXG4gIHNlY3Rpb25zTWFuYWdlci5zdGFydCgpO1xuXG59KTtcbiIsImNsYXNzIE1hbmFnZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyU2VjdGlvbih0eXBlLCBhY3Rpb25zKSB7XG4gICAgY29uc29sZS5sb2codHlwZSwgYWN0aW9ucyk7XG4gICAgdGhpcy5zZWN0aW9uc1t0eXBlXSA9IGFjdGlvbnM7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVhY2hUeXBlKCh0eXBlLCBhY3Rpb25zKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5QWxsKGAubG9jb21vdGl2ZS1zZWN0aW9uW2RhdGEtbG9jb21vdGl2ZS1zZWN0aW9uLXR5cGU9XCIke3R5cGV9XCJdYCkuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5ydW5BY3Rpb24oYWN0aW9ucywgJ2xvYWQnLCBzZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIHdpbmRvdy5fc2VjdGlvbnNNYW5hZ2VyID0gdGhpcztcbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGNvbnN0IGV2ZW50cyA9IHtcbiAgICAgIHNlY3Rpb246IFsnbG9hZCcsICd1bmxvYWQnLCAnc2VsZWN0JywgJ2Rlc2VsZWN0JywgJ3Jlb3JkZXInXSxcbiAgICAgIGJsb2NrOiBbJ3NlbGVjdCcsICdkZXNlbGVjdCddXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZXNwYWNlIGluIGV2ZW50cykge1xuICAgICAgZXZlbnRzW25hbWVzcGFjZV0uZm9yRWFjaChldmVudFR5cGUgPT4ge1xuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBgbG9jb21vdGl2ZTo6JHtuYW1lc3BhY2V9Ojoke2V2ZW50VHlwZX1gO1xuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gdGhpcy5ldmVudFR5cGVUb0FjdGlvbk5hbWUobmFtZXNwYWNlLCBldmVudFR5cGUpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hcHBseVJ1bGVUb0V2ZW50KGFjdGlvbk5hbWUsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVJ1bGVUb0V2ZW50KGFjdGlvbk5hbWUsIGV2ZW50KSB7XG4gICAgY29uc3QgeyBzZWN0aW9uSWQsIGJsb2NrSWQgfSA9IGV2ZW50LmRldGFpbDtcbiAgICBjb25zdCBzZWN0aW9uICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbG9jb21vdGl2ZS1zZWN0aW9uLSR7c2VjdGlvbklkfWApO1xuICAgIGNvbnN0IHR5cGUgICAgICA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWxvY29tb3RpdmUtc2VjdGlvbi10eXBlJyk7XG4gICAgY29uc3QgYmxvY2sgICAgID0gdGhpcy5xdWVyeU9uZShgW2RhdGEtbG9jb21vdGl2ZS1ibG9jaz1cInNlY3Rpb24tJHtzZWN0aW9uSWR9LWJsb2NrLSR7YmxvY2tJZH1cIl1gLCBzZWN0aW9uKTtcblxuICAgIHRoaXMucnVuQWN0aW9uKHRoaXMuc2VjdGlvbnNbdHlwZV0sIGFjdGlvbk5hbWUsIHNlY3Rpb24sIGJsb2NrKVxuICB9XG5cbiAgZXZlbnRUeXBlVG9BY3Rpb25OYW1lKG5hbWVzcGFjZSwgZXZlbnRUeXBlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSA9PT0gJ3NlY3Rpb24nKVxuICAgICAgcmV0dXJuIGV2ZW50VHlwZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbmFtZXNwYWNlICsgZXZlbnRUeXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZXZlbnRUeXBlLnNsaWNlKDEpO1xuICB9XG5cbiAgcnVuQWN0aW9uKGFjdGlvbnMsIGFjdGlvbk5hbWUsIHNlY3Rpb24sIGJsb2NrKSB7XG4gICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1thY3Rpb25OYW1lXTtcblxuICAgIGlmIChhY3Rpb24gIT09IHVuZGVmaW5lZClcbiAgICAgIGFjdGlvbihzZWN0aW9uLCBibG9jayk7XG4gIH1cblxuICBlYWNoVHlwZShjYWxsYmFjaykge1xuICAgIGZvciAodmFyIHR5cGUgaW4gdGhpcy5zZWN0aW9ucykge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuc2VjdGlvbnNbdHlwZV07XG4gICAgICBjYWxsYmFjayh0eXBlLCBhY3Rpb25zKVxuICAgIH1cbiAgfVxuXG4gIHF1ZXJ5QWxsKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgPyBzY29wZSA6IGRvY3VtZW50O1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHF1ZXJ5T25lKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgPyBzY29wZSA6IGRvY3VtZW50O1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHRlc3RBY3Rpb24oZXZlbnRUeXBlLCBzZWN0aW9uLCBibG9jaykge1xuICAgIGNvbnN0IGhhc0Jsb2NrICA9IGJsb2NrICE9PSB1bmRlZmluZWQgJiYgYmxvY2sgIT09IG51bGwgO1xuICAgIGNvbnN0IG5hbWVzcGFjZSA9IGhhc0Jsb2NrID8gJ2Jsb2NrJyA6ICdzZWN0aW9uJztcbiAgICBjb25zdCBzZWN0aW9uSWQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdsb2NvbW90aXZlLXNlY3Rpb24tJywgJycpO1xuICAgIGNvbnN0IGJsb2NrSWQgICA9IGhhc0Jsb2NrID8gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLWxvY29tb3RpdmUtYmxvY2snKS5yZXBsYWNlKGBzZWN0aW9uLSR7c2VjdGlvbklkfS1ibG9jay1gLCAnJykgOiBudWxsO1xuICAgIGNvbnN0IGRldGFpbCAgICA9IHsgZGV0YWlsOiB7IHNlY3Rpb25JZCwgYmxvY2tJZCB9IH07XG4gICAgY29uc3QgZXZlbnROYW1lID0gYGxvY29tb3RpdmU6OiR7bmFtZXNwYWNlfTo6JHtldmVudFR5cGV9YDtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZGV0YWlsKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiLy8gSW1wb3J0IGFsbCB0aGUgc2VjdGlvbnMgaGVyZVxuLy9cbi8vIEV4YW1wbGU6XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tICcuL2hlcm8nO1xuLy9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmg1Y29Ib21lIH0gZnJvbSAnLi9maDVjb19ob21lJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
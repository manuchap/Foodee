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
  sectionsManager.registerSection('menu', Sections.Menu);
  sectionsManager.registerSection('features', Sections.Feature);
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

/***/ "./javascripts/sections/features.js":
/*!******************************************!*\
  !*** ./javascripts/sections/features.js ***!
  \******************************************/
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

var _features = __webpack_require__(/*! ./features */ "./javascripts/sections/features.js");

Object.defineProperty(exports, 'Feature', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_features).default;
  }
});

var _menu = __webpack_require__(/*! ./menu */ "./javascripts/sections/menu.js");

Object.defineProperty(exports, 'Menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_menu).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./javascripts/sections/menu.js":
/*!**************************************!*\
  !*** ./javascripts/sections/menu.js ***!
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL19tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2Fib3V0LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2ZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvc2VjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvc2VjdGlvbnMvbWVudS5qcyJdLCJuYW1lcyI6WyJTZWN0aW9ucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlY3Rpb25zTWFuYWdlciIsIlNlY3Rpb25zTWFuYWdlciIsInJlZ2lzdGVyU2VjdGlvbiIsIk1lbnUiLCJGZWF0dXJlIiwiQWJvdXQiLCJIb21lIiwic3RhcnQiLCJNYW5hZ2VyIiwic2VjdGlvbnMiLCJ0eXBlIiwiYWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJlYWNoVHlwZSIsInF1ZXJ5QWxsIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJpbmRleCIsInJ1bkFjdGlvbiIsInJlZ2lzdGVyRXZlbnRzIiwid2luZG93IiwiX3NlY3Rpb25zTWFuYWdlciIsImV2ZW50cyIsImJsb2NrIiwibmFtZXNwYWNlIiwiZXZlbnROYW1lIiwiZXZlbnRUeXBlIiwiYWN0aW9uTmFtZSIsImV2ZW50VHlwZVRvQWN0aW9uTmFtZSIsImFwcGx5UnVsZVRvRXZlbnQiLCJldmVudCIsImRldGFpbCIsInNlY3Rpb25JZCIsImJsb2NrSWQiLCJnZXRFbGVtZW50QnlJZCIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5T25lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImFjdGlvbiIsInVuZGVmaW5lZCIsImNhbGxiYWNrIiwic2VsZWN0b3IiLCJzY29wZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQmxvY2siLCJyZXBsYWNlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiU2VjdGlvbiIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTs7OztBQUNBOztJQUFZQSxROzs7Ozs7QUFOWjtBQUNBO0FBQ0E7O0FBRUE7QUFJQUMsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLGlCQUFTOztBQUVyRDtBQUNBLE1BQU1DLGtCQUFrQixJQUFJQyxpQkFBSixFQUF4Qjs7QUFFQTtBQUNBRCxrQkFBZ0JFLGVBQWhCLENBQWdDLE1BQWhDLEVBQXdDTCxTQUFTTSxJQUFqRDtBQUNBSCxrQkFBZ0JFLGVBQWhCLENBQWdDLFVBQWhDLEVBQTRDTCxTQUFTTyxPQUFyRDtBQUNB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O0FBQ0E7O0FBckJjLENBQWhCOztrQkF5QmVBLE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmLElBQU1BLFVBQVU7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFyQmMsQ0FBaEI7O2tCQXlCZUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmYsSUFBTUEsVUFBVTs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQXJCYyxDQUFoQjs7a0JBeUJlQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0NwQk5DLE87Ozs7Ozs7OzswQ0FDQUEsTzs7Ozs7Ozs7OzZDQUNBQSxPOzs7Ozs7Ozs7eUNBQ0FBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JULElBQU1ELFVBQVU7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFyQmMsQ0FBaEI7O2tCQXlCZUEsTyIsImZpbGUiOiJqYXZhc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2phdmFzY3JpcHRzL2FwcC5qc1wiKTtcbiIsIi8vID09PSBXYWdvbiBtYWluIGphdmFzY3JpcHQgZmlsZSA9PT1cbi8vIFRlbGwgV2VicGFjayB0byBsb2FkIHRoZSBzdHlsZVxuLy8gaW1wb3J0ICcuLi9zdHlsZXNoZWV0cy9hcHAuc2Nzcyc7XG5cbi8vIEltcG9ydCB0aGUgY2xhc3NlcyByZXF1aXJlZCB0byBoYW5kbGUgc2VjdGlvbnNcbmltcG9ydCBTZWN0aW9uc01hbmFnZXIgZnJvbSAnLi9zZWN0aW9ucy9fbWFuYWdlcic7XG5pbXBvcnQgKiBhcyBTZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGV2ZW50ID0+IHtcblxuICAvLyBMb2FkIGFsbCB0aGUgc2VjdGlvbnNcbiAgY29uc3Qgc2VjdGlvbnNNYW5hZ2VyID0gbmV3IFNlY3Rpb25zTWFuYWdlcigpO1xuXG4gIC8vIFJlZ2lzdGVyIHNlY3Rpb25zIGhlcmUuIERPIE5PVCBSRU1PVkUgT1IgVVBEQVRFIFRISVMgTElORVxuICBzZWN0aW9uc01hbmFnZXIucmVnaXN0ZXJTZWN0aW9uKCdtZW51JywgU2VjdGlvbnMuTWVudSk7XG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ2ZlYXR1cmVzJywgU2VjdGlvbnMuRmVhdHVyZSk7XG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ2Fib3V0JywgU2VjdGlvbnMuQWJvdXQpO1xuICBzZWN0aW9uc01hbmFnZXIucmVnaXN0ZXJTZWN0aW9uKCdmaDVjb19ob21lJywgU2VjdGlvbnMuSG9tZSk7XG5cbiAgc2VjdGlvbnNNYW5hZ2VyLnN0YXJ0KCk7XG5cbn0pO1xuIiwiY2xhc3MgTWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWN0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmVnaXN0ZXJTZWN0aW9uKHR5cGUsIGFjdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZyh0eXBlLCBhY3Rpb25zKTtcbiAgICB0aGlzLnNlY3Rpb25zW3R5cGVdID0gYWN0aW9ucztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZWFjaFR5cGUoKHR5cGUsIGFjdGlvbnMpID0+IHtcbiAgICAgIHRoaXMucXVlcnlBbGwoYC5sb2NvbW90aXZlLXNlY3Rpb25bZGF0YS1sb2NvbW90aXZlLXNlY3Rpb24tdHlwZT1cIiR7dHlwZX1cIl1gKS5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnJ1bkFjdGlvbihhY3Rpb25zLCAnbG9hZCcsIHNlY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgd2luZG93Ll9zZWN0aW9uc01hbmFnZXIgPSB0aGlzO1xuICB9XG5cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgY29uc3QgZXZlbnRzID0ge1xuICAgICAgc2VjdGlvbjogWydsb2FkJywgJ3VubG9hZCcsICdzZWxlY3QnLCAnZGVzZWxlY3QnLCAncmVvcmRlciddLFxuICAgICAgYmxvY2s6IFsnc2VsZWN0JywgJ2Rlc2VsZWN0J11cbiAgICB9XG5cbiAgICBmb3IgKHZhciBuYW1lc3BhY2UgaW4gZXZlbnRzKSB7XG4gICAgICBldmVudHNbbmFtZXNwYWNlXS5mb3JFYWNoKGV2ZW50VHlwZSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGBsb2NvbW90aXZlOjoke25hbWVzcGFjZX06OiR7ZXZlbnRUeXBlfWA7XG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSB0aGlzLmV2ZW50VHlwZVRvQWN0aW9uTmFtZShuYW1lc3BhY2UsIGV2ZW50VHlwZSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFwcGx5UnVsZVRvRXZlbnQoYWN0aW9uTmFtZSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5UnVsZVRvRXZlbnQoYWN0aW9uTmFtZSwgZXZlbnQpIHtcbiAgICBjb25zdCB7IHNlY3Rpb25JZCwgYmxvY2tJZCB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGNvbnN0IHNlY3Rpb24gICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsb2NvbW90aXZlLXNlY3Rpb24tJHtzZWN0aW9uSWR9YCk7XG4gICAgY29uc3QgdHlwZSAgICAgID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jb21vdGl2ZS1zZWN0aW9uLXR5cGUnKTtcbiAgICBjb25zdCBibG9jayAgICAgPSB0aGlzLnF1ZXJ5T25lKGBbZGF0YS1sb2NvbW90aXZlLWJsb2NrPVwic2VjdGlvbi0ke3NlY3Rpb25JZH0tYmxvY2stJHtibG9ja0lkfVwiXWAsIHNlY3Rpb24pO1xuXG4gICAgdGhpcy5ydW5BY3Rpb24odGhpcy5zZWN0aW9uc1t0eXBlXSwgYWN0aW9uTmFtZSwgc2VjdGlvbiwgYmxvY2spXG4gIH1cblxuICBldmVudFR5cGVUb0FjdGlvbk5hbWUobmFtZXNwYWNlLCBldmVudFR5cGUpIHtcbiAgICBpZiAobmFtZXNwYWNlID09PSAnc2VjdGlvbicpXG4gICAgICByZXR1cm4gZXZlbnRUeXBlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBuYW1lc3BhY2UgKyBldmVudFR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBldmVudFR5cGUuc2xpY2UoMSk7XG4gIH1cblxuICBydW5BY3Rpb24oYWN0aW9ucywgYWN0aW9uTmFtZSwgc2VjdGlvbiwgYmxvY2spIHtcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2FjdGlvbk5hbWVdO1xuXG4gICAgaWYgKGFjdGlvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgYWN0aW9uKHNlY3Rpb24sIGJsb2NrKTtcbiAgfVxuXG4gIGVhY2hUeXBlKGNhbGxiYWNrKSB7XG4gICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLnNlY3Rpb25zKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5zZWN0aW9uc1t0eXBlXTtcbiAgICAgIGNhbGxiYWNrKHR5cGUsIGFjdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgcXVlcnlBbGwoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSA/IHNjb3BlIDogZG9jdW1lbnQ7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9XG5cbiAgcXVlcnlPbmUoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSA/IHNjb3BlIDogZG9jdW1lbnQ7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgdGVzdEFjdGlvbihldmVudFR5cGUsIHNlY3Rpb24sIGJsb2NrKSB7XG4gICAgY29uc3QgaGFzQmxvY2sgID0gYmxvY2sgIT09IHVuZGVmaW5lZCAmJiBibG9jayAhPT0gbnVsbCA7XG4gICAgY29uc3QgbmFtZXNwYWNlID0gaGFzQmxvY2sgPyAnYmxvY2snIDogJ3NlY3Rpb24nO1xuICAgIGNvbnN0IHNlY3Rpb25JZCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2xvY29tb3RpdmUtc2VjdGlvbi0nLCAnJyk7XG4gICAgY29uc3QgYmxvY2tJZCAgID0gaGFzQmxvY2sgPyBibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jb21vdGl2ZS1ibG9jaycpLnJlcGxhY2UoYHNlY3Rpb24tJHtzZWN0aW9uSWR9LWJsb2NrLWAsICcnKSA6IG51bGw7XG4gICAgY29uc3QgZGV0YWlsICAgID0geyBkZXRhaWw6IHsgc2VjdGlvbklkLCBibG9ja0lkIH0gfTtcbiAgICBjb25zdCBldmVudE5hbWUgPSBgbG9jb21vdGl2ZTo6JHtuYW1lc3BhY2V9Ojoke2V2ZW50VHlwZX1gO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkZXRhaWwpKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7XG4iLCJjb25zdCBTZWN0aW9uID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJjb25zdCBTZWN0aW9uID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJjb25zdCBTZWN0aW9uID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCIvLyBJbXBvcnQgYWxsIHRoZSBzZWN0aW9ucyBoZXJlXG4vL1xuLy8gRXhhbXBsZTpcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gJy4vaGVybyc7XG4vL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaDVjb0hvbWUgfSBmcm9tICcuL2hvbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBYm91dCB9IGZyb20gJy4vYWJvdXQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGZWF0dXJlIH0gZnJvbSAnLi9mZWF0dXJlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbnUgfSBmcm9tICcuL21lbnUnO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
  sectionsManager.registerSection('events', Sections.Event);
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

/***/ "./javascripts/sections/events.js":
/*!****************************************!*\
  !*** ./javascripts/sections/events.js ***!
  \****************************************/
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

var _events = __webpack_require__(/*! ./events */ "./javascripts/sections/events.js");

Object.defineProperty(exports, 'Event', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_events).default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL19tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2Fib3V0LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9zZWN0aW9ucy9mZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9zZWN0aW9ucy9ob21lLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL21lbnUuanMiXSwibmFtZXMiOlsiU2VjdGlvbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uc01hbmFnZXIiLCJTZWN0aW9uc01hbmFnZXIiLCJyZWdpc3RlclNlY3Rpb24iLCJFdmVudCIsIk1lbnUiLCJGZWF0dXJlIiwiQWJvdXQiLCJIb21lIiwic3RhcnQiLCJNYW5hZ2VyIiwic2VjdGlvbnMiLCJ0eXBlIiwiYWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJlYWNoVHlwZSIsInF1ZXJ5QWxsIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJpbmRleCIsInJ1bkFjdGlvbiIsInJlZ2lzdGVyRXZlbnRzIiwid2luZG93IiwiX3NlY3Rpb25zTWFuYWdlciIsImV2ZW50cyIsImJsb2NrIiwibmFtZXNwYWNlIiwiZXZlbnROYW1lIiwiZXZlbnRUeXBlIiwiYWN0aW9uTmFtZSIsImV2ZW50VHlwZVRvQWN0aW9uTmFtZSIsImFwcGx5UnVsZVRvRXZlbnQiLCJldmVudCIsImRldGFpbCIsInNlY3Rpb25JZCIsImJsb2NrSWQiLCJnZXRFbGVtZW50QnlJZCIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5T25lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImFjdGlvbiIsInVuZGVmaW5lZCIsImNhbGxiYWNrIiwic2VsZWN0b3IiLCJzY29wZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQmxvY2siLCJyZXBsYWNlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiU2VjdGlvbiIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTs7OztBQUNBOztJQUFZQSxROzs7Ozs7QUFOWjtBQUNBO0FBQ0E7O0FBRUE7QUFJQUMsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLGlCQUFTOztBQUVyRDtBQUNBLE1BQU1DLGtCQUFrQixJQUFJQyxpQkFBSixFQUF4Qjs7QUFFQTtBQUNBRCxrQkFBZ0JFLGVBQWhCLENBQWdDLFFBQWhDLEVBQTBDTCxTQUFTTSxLQUFuRDtB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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZmLElBQU00QyxVQUFVOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBckJjLENBQWhCOztrQkF5QmVBLE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmLElBQU1BLFVBQVU7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFyQmMsQ0FBaEI7O2tCQXlCZUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmYsSUFBTUEsVUFBVTs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQXJCYyxDQUFoQjs7a0JBeUJlQSxPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZixJQUFNQSxVQUFVOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBckJjLENBQWhCOztrQkF5QmVBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQ3BCTkMsTzs7Ozs7Ozs7OzBDQUNBQSxPOzs7Ozs7Ozs7NkNBQ0FBLE87Ozs7Ozs7Ozt5Q0FDQUEsTzs7Ozs7Ozs7OzJDQUNBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUVCxJQUFNRCxVQUFVOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBckJjLENBQWhCOztrQkF5QmVBLE8iLCJmaWxlIjoiamF2YXNjcmlwdHMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qYXZhc2NyaXB0cy9hcHAuanNcIik7XG4iLCIvLyA9PT0gV2Fnb24gbWFpbiBqYXZhc2NyaXB0IGZpbGUgPT09XG4vLyBUZWxsIFdlYnBhY2sgdG8gbG9hZCB0aGUgc3R5bGVcbi8vIGltcG9ydCAnLi4vc3R5bGVzaGVldHMvYXBwLnNjc3MnO1xuXG4vLyBJbXBvcnQgdGhlIGNsYXNzZXMgcmVxdWlyZWQgdG8gaGFuZGxlIHNlY3Rpb25zXG5pbXBvcnQgU2VjdGlvbnNNYW5hZ2VyIGZyb20gJy4vc2VjdGlvbnMvX21hbmFnZXInO1xuaW1wb3J0ICogYXMgU2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9ucyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBldmVudCA9PiB7XG5cbiAgLy8gTG9hZCBhbGwgdGhlIHNlY3Rpb25zXG4gIGNvbnN0IHNlY3Rpb25zTWFuYWdlciA9IG5ldyBTZWN0aW9uc01hbmFnZXIoKTtcblxuICAvLyBSZWdpc3RlciBzZWN0aW9ucyBoZXJlLiBETyBOT1QgUkVNT1ZFIE9SIFVQREFURSBUSElTIExJTkVcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignZXZlbnRzJywgU2VjdGlvbnMuRXZlbnQpO1xuICBzZWN0aW9uc01hbmFnZXIucmVnaXN0ZXJTZWN0aW9uKCdtZW51JywgU2VjdGlvbnMuTWVudSk7XG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ2ZlYXR1cmVzJywgU2VjdGlvbnMuRmVhdHVyZSk7XG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ2Fib3V0JywgU2VjdGlvbnMuQWJvdXQpO1xuICBzZWN0aW9uc01hbmFnZXIucmVnaXN0ZXJTZWN0aW9uKCdmaDVjb19ob21lJywgU2VjdGlvbnMuSG9tZSk7XG5cbiAgc2VjdGlvbnNNYW5hZ2VyLnN0YXJ0KCk7XG5cbn0pO1xuIiwiY2xhc3MgTWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWN0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmVnaXN0ZXJTZWN0aW9uKHR5cGUsIGFjdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZyh0eXBlLCBhY3Rpb25zKTtcbiAgICB0aGlzLnNlY3Rpb25zW3R5cGVdID0gYWN0aW9ucztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZWFjaFR5cGUoKHR5cGUsIGFjdGlvbnMpID0+IHtcbiAgICAgIHRoaXMucXVlcnlBbGwoYC5sb2NvbW90aXZlLXNlY3Rpb25bZGF0YS1sb2NvbW90aXZlLXNlY3Rpb24tdHlwZT1cIiR7dHlwZX1cIl1gKS5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnJ1bkFjdGlvbihhY3Rpb25zLCAnbG9hZCcsIHNlY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgd2luZG93Ll9zZWN0aW9uc01hbmFnZXIgPSB0aGlzO1xuICB9XG5cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgY29uc3QgZXZlbnRzID0ge1xuICAgICAgc2VjdGlvbjogWydsb2FkJywgJ3VubG9hZCcsICdzZWxlY3QnLCAnZGVzZWxlY3QnLCAncmVvcmRlciddLFxuICAgICAgYmxvY2s6IFsnc2VsZWN0JywgJ2Rlc2VsZWN0J11cbiAgICB9XG5cbiAgICBmb3IgKHZhciBuYW1lc3BhY2UgaW4gZXZlbnRzKSB7XG4gICAgICBldmVudHNbbmFtZXNwYWNlXS5mb3JFYWNoKGV2ZW50VHlwZSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGBsb2NvbW90aXZlOjoke25hbWVzcGFjZX06OiR7ZXZlbnRUeXBlfWA7XG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSB0aGlzLmV2ZW50VHlwZVRvQWN0aW9uTmFtZShuYW1lc3BhY2UsIGV2ZW50VHlwZSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFwcGx5UnVsZVRvRXZlbnQoYWN0aW9uTmFtZSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5UnVsZVRvRXZlbnQoYWN0aW9uTmFtZSwgZXZlbnQpIHtcbiAgICBjb25zdCB7IHNlY3Rpb25JZCwgYmxvY2tJZCB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGNvbnN0IHNlY3Rpb24gICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsb2NvbW90aXZlLXNlY3Rpb24tJHtzZWN0aW9uSWR9YCk7XG4gICAgY29uc3QgdHlwZSAgICAgID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jb21vdGl2ZS1zZWN0aW9uLXR5cGUnKTtcbiAgICBjb25zdCBibG9jayAgICAgPSB0aGlzLnF1ZXJ5T25lKGBbZGF0YS1sb2NvbW90aXZlLWJsb2NrPVwic2VjdGlvbi0ke3NlY3Rpb25JZH0tYmxvY2stJHtibG9ja0lkfVwiXWAsIHNlY3Rpb24pO1xuXG4gICAgdGhpcy5ydW5BY3Rpb24odGhpcy5zZWN0aW9uc1t0eXBlXSwgYWN0aW9uTmFtZSwgc2VjdGlvbiwgYmxvY2spXG4gIH1cblxuICBldmVudFR5cGVUb0FjdGlvbk5hbWUobmFtZXNwYWNlLCBldmVudFR5cGUpIHtcbiAgICBpZiAobmFtZXNwYWNlID09PSAnc2VjdGlvbicpXG4gICAgICByZXR1cm4gZXZlbnRUeXBlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBuYW1lc3BhY2UgKyBldmVudFR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBldmVudFR5cGUuc2xpY2UoMSk7XG4gIH1cblxuICBydW5BY3Rpb24oYWN0aW9ucywgYWN0aW9uTmFtZSwgc2VjdGlvbiwgYmxvY2spIHtcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2FjdGlvbk5hbWVdO1xuXG4gICAgaWYgKGFjdGlvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgYWN0aW9uKHNlY3Rpb24sIGJsb2NrKTtcbiAgfVxuXG4gIGVhY2hUeXBlKGNhbGxiYWNrKSB7XG4gICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLnNlY3Rpb25zKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5zZWN0aW9uc1t0eXBlXTtcbiAgICAgIGNhbGxiYWNrKHR5cGUsIGFjdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgcXVlcnlBbGwoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSA/IHNjb3BlIDogZG9jdW1lbnQ7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9XG5cbiAgcXVlcnlPbmUoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSA/IHNjb3BlIDogZG9jdW1lbnQ7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgdGVzdEFjdGlvbihldmVudFR5cGUsIHNlY3Rpb24sIGJsb2NrKSB7XG4gICAgY29uc3QgaGFzQmxvY2sgID0gYmxvY2sgIT09IHVuZGVmaW5lZCAmJiBibG9jayAhPT0gbnVsbCA7XG4gICAgY29uc3QgbmFtZXNwYWNlID0gaGFzQmxvY2sgPyAnYmxvY2snIDogJ3NlY3Rpb24nO1xuICAgIGNvbnN0IHNlY3Rpb25JZCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2xvY29tb3RpdmUtc2VjdGlvbi0nLCAnJyk7XG4gICAgY29uc3QgYmxvY2tJZCAgID0gaGFzQmxvY2sgPyBibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jb21vdGl2ZS1ibG9jaycpLnJlcGxhY2UoYHNlY3Rpb24tJHtzZWN0aW9uSWR9LWJsb2NrLWAsICcnKSA6IG51bGw7XG4gICAgY29uc3QgZGV0YWlsICAgID0geyBkZXRhaWw6IHsgc2VjdGlvbklkLCBibG9ja0lkIH0gfTtcbiAgICBjb25zdCBldmVudE5hbWUgPSBgbG9jb21vdGl2ZTo6JHtuYW1lc3BhY2V9Ojoke2V2ZW50VHlwZX1gO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkZXRhaWwpKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7XG4iLCJjb25zdCBTZWN0aW9uID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJjb25zdCBTZWN0aW9uID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJjb25zdCBTZWN0aW9uID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJjb25zdCBTZWN0aW9uID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCIvLyBJbXBvcnQgYWxsIHRoZSBzZWN0aW9ucyBoZXJlXG4vL1xuLy8gRXhhbXBsZTpcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gJy4vaGVybyc7XG4vL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaDVjb0hvbWUgfSBmcm9tICcuL2hvbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBYm91dCB9IGZyb20gJy4vYWJvdXQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGZWF0dXJlIH0gZnJvbSAnLi9mZWF0dXJlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbnUgfSBmcm9tICcuL21lbnUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFdmVudCB9IGZyb20gJy4vZXZlbnRzJztcbiIsImNvbnN0IFNlY3Rpb24gPSB7XG5cbiAgLy8gbG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyB1bmxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGRlc2VsZWN0OiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHJlb3JkZXI6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrRGVTZWxlY3Q6IChzZWN0aW9uLCBibG9jaykgPT4ge1xuICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=
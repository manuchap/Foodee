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
  sectionsManager.registerSection('footer', Sections.Footer);
  sectionsManager.registerSection('reservation', Sections.Reservation);
  sectionsManager.registerSection('events', Sections.Event);
  sectionsManager.registerSection('menu', Sections.Menu);
  sectionsManager.registerSection('features', Sections.Feature);
  sectionsManager.registerSection('about', Sections.About);
  sectionsManager.registerSection('home', Sections.Home);

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

/***/ "./javascripts/sections/footer.js":
/*!****************************************!*\
  !*** ./javascripts/sections/footer.js ***!
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

Object.defineProperty(exports, 'Home', {
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

var _reservation = __webpack_require__(/*! ./reservation */ "./javascripts/sections/reservation.js");

Object.defineProperty(exports, 'Reservation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reservation).default;
  }
});

var _footer = __webpack_require__(/*! ./footer */ "./javascripts/sections/footer.js");

Object.defineProperty(exports, 'Footer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footer).default;
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

/***/ }),

/***/ "./javascripts/sections/reservation.js":
/*!*********************************************!*\
  !*** ./javascripts/sections/reservation.js ***!
  \*********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL19tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2Fib3V0LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9zZWN0aW9ucy9mZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9zZWN0aW9ucy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvc2VjdGlvbnMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9zZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0cy9zZWN0aW9ucy9tZW51LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL3Jlc2VydmF0aW9uLmpzIl0sIm5hbWVzIjpbIlNlY3Rpb25zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VjdGlvbnNNYW5hZ2VyIiwiU2VjdGlvbnNNYW5hZ2VyIiwicmVnaXN0ZXJTZWN0aW9uIiwiRm9vdGVyIiwiUmVzZXJ2YXRpb24iLCJFdmVudCIsIk1lbnUiLCJGZWF0dXJlIiwiQWJvdXQiLCJIb21lIiwic3RhcnQiLCJNYW5hZ2VyIiwic2VjdGlvbnMiLCJ0eXBlIiwiYWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJlYWNoVHlwZSIsInF1ZXJ5QWxsIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJpbmRleCIsInJ1bkFjdGlvbiIsInJlZ2lzdGVyRXZlbnRzIiwid2luZG93IiwiX3NlY3Rpb25zTWFuYWdlciIsImV2ZW50cyIsImJsb2NrIiwibmFtZXNwYWNlIiwiZXZlbnROYW1lIiwiZXZlbnRUeXBlIiwiYWN0aW9uTmFtZSIsImV2ZW50VHlwZVRvQWN0aW9uTmFtZSIsImFwcGx5UnVsZVRvRXZlbnQiLCJldmVudCIsImRldGFpbCIsInNlY3Rpb25JZCIsImJsb2NrSWQiLCJnZXRFbGVtZW50QnlJZCIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5T25lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImFjdGlvbiIsInVuZGVmaW5lZCIsImNhbGxiYWNrIiwic2VsZWN0b3IiLCJzY29wZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQmxvY2siLCJyZXBsYWNlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiU2VjdGlvbiIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTs7OztBQUNBOztJQUFZQSxROzs7Ozs7QUFOWjtBQUNBO0FBQ0E7O0FBRUE7QUFJQUMsU0FBU0MsZ0JBQVQsQ0FBMEIs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Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQ3BCTkMsTzs7Ozs7Ozs7OzBDQUNBQSxPOzs7Ozs7Ozs7NkNBQ0FBLE87Ozs7Ozs7Ozt5Q0FDQUEsTzs7Ozs7Ozs7OzJDQUNBQSxPOzs7Ozs7Ozs7Z0RBQ0FBLE87Ozs7Ozs7OzsyQ0FDQUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFQsSUFBTUQsVUFBVTs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQXJCYyxDQUFoQjs7a0JBeUJlQSxPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZixJQUFNQSxVQUFVOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBckJjLENBQWhCOztrQkF5QmVBLE8iLCJmaWxlIjoiamF2YXNjcmlwdHMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qYXZhc2NyaXB0cy9hcHAuanNcIik7XG4iLCIvLyA9PT0gV2Fnb24gbWFpbiBqYXZhc2NyaXB0IGZpbGUgPT09XG4vLyBUZWxsIFdlYnBhY2sgdG8gbG9hZCB0aGUgc3R5bGVcbi8vIGltcG9ydCAnLi4vc3R5bGVzaGVldHMvYXBwLnNjc3MnO1xuXG4vLyBJbXBvcnQgdGhlIGNsYXNzZXMgcmVxdWlyZWQgdG8gaGFuZGxlIHNlY3Rpb25zXG5pbXBvcnQgU2VjdGlvbnNNYW5hZ2VyIGZyb20gJy4vc2VjdGlvbnMvX21hbmFnZXInO1xuaW1wb3J0ICogYXMgU2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9ucyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBldmVudCA9PiB7XG5cbiAgLy8gTG9hZCBhbGwgdGhlIHNlY3Rpb25zXG4gIGNvbnN0IHNlY3Rpb25zTWFuYWdlciA9IG5ldyBTZWN0aW9uc01hbmFnZXIoKTtcblxuICAvLyBSZWdpc3RlciBzZWN0aW9ucyBoZXJlLiBETyBOT1QgUkVNT1ZFIE9SIFVQREFURSBUSElTIExJTkVcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignZm9vdGVyJywgU2VjdGlvbnMuRm9vdGVyKTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbigncmVzZXJ2YXRpb24nLCBTZWN0aW9ucy5SZXNlcnZhdGlvbik7XG4gIHNlY3Rpb25zTWFuYWdlci5yZWdpc3RlclNlY3Rpb24oJ2V2ZW50cycsIFNlY3Rpb25zLkV2ZW50KTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignbWVudScsIFNlY3Rpb25zLk1lbnUpO1xuICBzZWN0aW9uc01hbmFnZXIucmVnaXN0ZXJTZWN0aW9uKCdmZWF0dXJlcycsIFNlY3Rpb25zLkZlYXR1cmUpO1xuICBzZWN0aW9uc01hbmFnZXIucmVnaXN0ZXJTZWN0aW9uKCdhYm91dCcsIFNlY3Rpb25zLkFib3V0KTtcbiAgc2VjdGlvbnNNYW5hZ2VyLnJlZ2lzdGVyU2VjdGlvbignaG9tZScsIFNlY3Rpb25zLkhvbWUpO1xuXG4gIHNlY3Rpb25zTWFuYWdlci5zdGFydCgpO1xuXG59KTtcbiIsImNsYXNzIE1hbmFnZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyU2VjdGlvbih0eXBlLCBhY3Rpb25zKSB7XG4gICAgY29uc29sZS5sb2codHlwZSwgYWN0aW9ucyk7XG4gICAgdGhpcy5zZWN0aW9uc1t0eXBlXSA9IGFjdGlvbnM7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVhY2hUeXBlKCh0eXBlLCBhY3Rpb25zKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5QWxsKGAubG9jb21vdGl2ZS1zZWN0aW9uW2RhdGEtbG9jb21vdGl2ZS1zZWN0aW9uLXR5cGU9XCIke3R5cGV9XCJdYCkuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5ydW5BY3Rpb24oYWN0aW9ucywgJ2xvYWQnLCBzZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIHdpbmRvdy5fc2VjdGlvbnNNYW5hZ2VyID0gdGhpcztcbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGNvbnN0IGV2ZW50cyA9IHtcbiAgICAgIHNlY3Rpb246IFsnbG9hZCcsICd1bmxvYWQnLCAnc2VsZWN0JywgJ2Rlc2VsZWN0JywgJ3Jlb3JkZXInXSxcbiAgICAgIGJsb2NrOiBbJ3NlbGVjdCcsICdkZXNlbGVjdCddXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZXNwYWNlIGluIGV2ZW50cykge1xuICAgICAgZXZlbnRzW25hbWVzcGFjZV0uZm9yRWFjaChldmVudFR5cGUgPT4ge1xuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBgbG9jb21vdGl2ZTo6JHtuYW1lc3BhY2V9Ojoke2V2ZW50VHlwZX1gO1xuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gdGhpcy5ldmVudFR5cGVUb0FjdGlvbk5hbWUobmFtZXNwYWNlLCBldmVudFR5cGUpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5hcHBseVJ1bGVUb0V2ZW50KGFjdGlvbk5hbWUsIGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVJ1bGVUb0V2ZW50KGFjdGlvbk5hbWUsIGV2ZW50KSB7XG4gICAgY29uc3QgeyBzZWN0aW9uSWQsIGJsb2NrSWQgfSA9IGV2ZW50LmRldGFpbDtcbiAgICBjb25zdCBzZWN0aW9uICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbG9jb21vdGl2ZS1zZWN0aW9uLSR7c2VjdGlvbklkfWApO1xuICAgIGNvbnN0IHR5cGUgICAgICA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWxvY29tb3RpdmUtc2VjdGlvbi10eXBlJyk7XG4gICAgY29uc3QgYmxvY2sgICAgID0gdGhpcy5xdWVyeU9uZShgW2RhdGEtbG9jb21vdGl2ZS1ibG9jaz1cInNlY3Rpb24tJHtzZWN0aW9uSWR9LWJsb2NrLSR7YmxvY2tJZH1cIl1gLCBzZWN0aW9uKTtcblxuICAgIHRoaXMucnVuQWN0aW9uKHRoaXMuc2VjdGlvbnNbdHlwZV0sIGFjdGlvbk5hbWUsIHNlY3Rpb24sIGJsb2NrKVxuICB9XG5cbiAgZXZlbnRUeXBlVG9BY3Rpb25OYW1lKG5hbWVzcGFjZSwgZXZlbnRUeXBlKSB7XG4gICAgaWYgKG5hbWVzcGFjZSA9PT0gJ3NlY3Rpb24nKVxuICAgICAgcmV0dXJuIGV2ZW50VHlwZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbmFtZXNwYWNlICsgZXZlbnRUeXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZXZlbnRUeXBlLnNsaWNlKDEpO1xuICB9XG5cbiAgcnVuQWN0aW9uKGFjdGlvbnMsIGFjdGlvbk5hbWUsIHNlY3Rpb24sIGJsb2NrKSB7XG4gICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1thY3Rpb25OYW1lXTtcblxuICAgIGlmIChhY3Rpb24gIT09IHVuZGVmaW5lZClcbiAgICAgIGFjdGlvbihzZWN0aW9uLCBibG9jayk7XG4gIH1cblxuICBlYWNoVHlwZShjYWxsYmFjaykge1xuICAgIGZvciAodmFyIHR5cGUgaW4gdGhpcy5zZWN0aW9ucykge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuc2VjdGlvbnNbdHlwZV07XG4gICAgICBjYWxsYmFjayh0eXBlLCBhY3Rpb25zKVxuICAgIH1cbiAgfVxuXG4gIHF1ZXJ5QWxsKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgPyBzY29wZSA6IGRvY3VtZW50O1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHF1ZXJ5T25lKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIHNjb3BlID0gc2NvcGUgPyBzY29wZSA6IGRvY3VtZW50O1xuICAgIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHRlc3RBY3Rpb24oZXZlbnRUeXBlLCBzZWN0aW9uLCBibG9jaykge1xuICAgIGNvbnN0IGhhc0Jsb2NrICA9IGJsb2NrICE9PSB1bmRlZmluZWQgJiYgYmxvY2sgIT09IG51bGwgO1xuICAgIGNvbnN0IG5hbWVzcGFjZSA9IGhhc0Jsb2NrID8gJ2Jsb2NrJyA6ICdzZWN0aW9uJztcbiAgICBjb25zdCBzZWN0aW9uSWQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKCdsb2NvbW90aXZlLXNlY3Rpb24tJywgJycpO1xuICAgIGNvbnN0IGJsb2NrSWQgICA9IGhhc0Jsb2NrID8gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLWxvY29tb3RpdmUtYmxvY2snKS5yZXBsYWNlKGBzZWN0aW9uLSR7c2VjdGlvbklkfS1ibG9jay1gLCAnJykgOiBudWxsO1xuICAgIGNvbnN0IGRldGFpbCAgICA9IHsgZGV0YWlsOiB7IHNlY3Rpb25JZCwgYmxvY2tJZCB9IH07XG4gICAgY29uc3QgZXZlbnROYW1lID0gYGxvY29tb3RpdmU6OiR7bmFtZXNwYWNlfTo6JHtldmVudFR5cGV9YDtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZGV0YWlsKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY29uc3QgU2VjdGlvbiA9IHtcblxuICAvLyBsb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHVubG9hZDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gZGVzZWxlY3Q6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gcmVvcmRlcjogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja1NlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gYmxvY2tEZVNlbGVjdDogKHNlY3Rpb24sIGJsb2NrKSA9PiB7XG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiLy8gSW1wb3J0IGFsbCB0aGUgc2VjdGlvbnMgaGVyZVxuLy9cbi8vIEV4YW1wbGU6XG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tICcuL2hlcm8nO1xuLy9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgSG9tZSB9IGZyb20gJy4vaG9tZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFib3V0IH0gZnJvbSAnLi9hYm91dCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZlYXR1cmUgfSBmcm9tICcuL2ZlYXR1cmVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVudSB9IGZyb20gJy4vbWVudSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50IH0gZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXNlcnZhdGlvbiB9IGZyb20gJy4vcmVzZXJ2YXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG4iLCJjb25zdCBTZWN0aW9uID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJjb25zdCBTZWN0aW9uID0ge1xuXG4gIC8vIGxvYWQ6IChzZWN0aW9uKSA9PiB7XG4gIC8vIH0sXG5cbiAgLy8gdW5sb2FkOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIHNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyBkZXNlbGVjdDogKHNlY3Rpb24pID0+IHtcbiAgLy8gfSxcblxuICAvLyByZW9yZGVyOiAoc2VjdGlvbikgPT4ge1xuICAvLyB9LFxuXG4gIC8vIGJsb2NrU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfSxcblxuICAvLyBibG9ja0RlU2VsZWN0OiAoc2VjdGlvbiwgYmxvY2spID0+IHtcbiAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9
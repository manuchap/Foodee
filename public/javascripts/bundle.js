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

/***/ "./javascripts/sections/index.js":
/*!***************************************!*\
  !*** ./javascripts/sections/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Import all the sections here
//
// Example:
// export { default as Hero } from './hero';
//


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL19tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHRzL3NlY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb25zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VjdGlvbnNNYW5hZ2VyIiwiU2VjdGlvbnNNYW5hZ2VyIiwic3RhcnQiLCJNYW5hZ2VyIiwic2VjdGlvbnMiLCJ0eXBlIiwiYWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJlYWNoVHlwZSIsInF1ZXJ5QWxsIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJpbmRleCIsInJ1bkFjdGlvbiIsInJlZ2lzdGVyRXZlbnRzIiwid2luZG93IiwiX3NlY3Rpb25zTWFuYWdlciIsImV2ZW50cyIsImJsb2NrIiwibmFtZXNwYWNlIiwiZXZlbnROYW1lIiwiZXZlbnRUeXBlIiwiYWN0aW9uTmFtZSIsImV2ZW50VHlwZVRvQWN0aW9uTmFtZSIsImFwcGx5UnVsZVRvRXZlbnQiLCJldmVudCIsImRldGFpbCIsInNlY3Rpb25JZCIsImJsb2NrSWQiLCJnZXRFbGVtZW50QnlJZCIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5T25lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImFjdGlvbiIsInVuZGVmaW5lZCIsImNhbGxiYWNrIiwic2VsZWN0b3IiLCJzY29wZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQmxvY2siLCJyZXBsYWNlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7Ozs7QUFDQTs7SUFBWUEsUTs7Ozs7O0FBTlo7QUFDQTtBQUNBOztBQUVBO0FBSUFDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxpQkFBUzs7QUFFckQ7QUFDQSxNQUFNQyxrQkFBa0IsSUFBSUMsaUJBQUosRUFBeEI7O0FBRUE7O0FBRUFELGtCQUFnQkUsS0FBaEI7QUFFRCxDQVRELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNSTUMsTztBQUVKLHFCQUFjO0FBQUE7O0FBQ1osU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNEOzs7O29DQUVlQyxJLEVBQU1DLE8sRUFBUztBQUM3QkMsY0FBUUMsR0FBUixDQUFZSCxJQUFaLEVBQWtCQyxPQUFsQjtBQUNBLFdBQUtGLFFBQUwsQ0FBY0MsSUFBZCxJQUFzQkMsT0FBdEI7QUFDRDs7OzRCQUVPO0FBQUE7O0FBQ04sV0FBS0csUUFBTCxDQUFjLFVBQUNKLElBQUQsRUFBT0MsT0FBUCxFQUFtQjtBQUMvQixjQUFLSSxRQUFMLHdEQUFtRUwsSUFBbkUsU0FBNkVNLE9BQTdFLENBQXFGLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUN2RyxnQkFBS0MsU0FBTCxDQUFlUixPQUFmLEVBQXdCLE1BQXhCLEVBQWdDTSxPQUFoQztBQUNELFNBRkQ7QUFHRCxPQUpEO0FBS0EsV0FBS0csY0FBTDs7QUFFQUMsYUFBT0MsZ0JBQVAsR0FBMEIsSUFBMUI7QUFDRDs7O3FDQUVnQjtBQUFBOztBQUNmLFVBQU1DLFNBQVM7QUFDYk4saUJBQVMsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixRQUFuQixFQUE2QixVQUE3QixFQUF5QyxTQUF6QyxDQURJO0FBRWJPLGVBQU8sQ0FBQyxRQUFELEVBQVcsVUFBWDtBQUZNLE9BQWY7O0FBS0EsV0FBSyxJQUFJQyxTQUFULElBQXNCRixNQUF0QixFQUE4QjtBQUM1QkEsZUFBT0UsU0FBUCxFQUFrQlQsT0FBbEIsQ0FBMEIscUJBQWE7QUFDckMsY0FBTVUsNkJBQTJCRCxTQUEzQixVQUF5Q0UsU0FBL0M7QUFDQSxjQUFNQyxhQUFhLE9BQUtDLHFCQUFMLENBQTJCSixTQUEzQixFQUFzQ0UsU0FBdEMsQ0FBbkI7O0FBRUF4QixtQkFBU0MsZ0JBQVQsQ0FBMEJzQixTQUExQixFQUFxQyxpQkFBUztBQUM1QyxtQkFBS0ksZ0JBQUwsQ0FBc0JGLFVBQXRCLEVBQWtDRyxLQUFsQztBQUNELFdBRkQ7QUFHRCxTQVBEO0FBUUQ7QUFDRjs7O3FDQUVnQkgsVSxFQUFZRyxLLEVBQU87QUFBQSwwQkFDSEEsTUFBTUMsTUFESDtBQUFBLFVBQzFCQyxTQUQwQixpQkFDMUJBLFNBRDBCO0FBQUEsVUFDZkMsT0FEZSxpQkFDZkEsT0FEZTs7QUFFbEMsVUFBTWpCLFVBQVlkLFNBQVNnQyxjQUFULHlCQUE4Q0YsU0FBOUMsQ0FBbEI7QUFDQSxVQUFNdkIsT0FBWU8sUUFBUW1CLFlBQVIsQ0FBcUIsOEJBQXJCLENBQWxCO0FBQ0EsVUFBTVosUUFBWSxLQUFLYSxRQUFMLHNDQUFpREosU0FBakQsZUFBb0VDLE9BQXBFLFNBQWlGakIsT0FBakYsQ0FBbEI7O0FBRUEsV0FBS0UsU0FBTCxDQUFlLEtBQUtWLFFBQUwsQ0FBY0MsSUFBZCxDQUFmLEVBQW9Da0IsVUFBcEMsRUFBZ0RYLE9BQWhELEVBQXlETyxLQUF6RDtBQUNEOzs7MENBRXFCQyxTLEVBQVdFLFMsRUFBVztBQUMxQyxVQUFJRixjQUFjLFNBQWxCLEVBQ0UsT0FBT0UsU0FBUCxDQURGLEtBR0UsT0FBT0YsWUFBWUUsVUFBVVcsTUFBVixDQUFpQixDQUFqQixFQUFvQkMsV0FBcEIsRUFBWixHQUFnRFosVUFBVWEsS0FBVixDQUFnQixDQUFoQixDQUF2RDtBQUNIOzs7OEJBRVM3QixPLEVBQVNpQixVLEVBQVlYLE8sRUFBU08sSyxFQUFPO0FBQzdDLFVBQU1pQixTQUFTOUIsUUFBUWlCLFVBQVIsQ0FBZjs7QUFFQSxVQUFJYSxXQUFXQyxTQUFmLEVBQ0VELE9BQU94QixPQUFQLEVBQWdCTyxLQUFoQjtBQUNIOzs7NkJBRVFtQixRLEVBQVU7QUFDakIsV0FBSyxJQUFJakMsSUFBVCxJQUFpQixLQUFLRCxRQUF0QixFQUFnQztBQUM5QixZQUFNRSxVQUFVLEtBQUtGLFFBQUwsQ0FBY0MsSUFBZCxDQUFoQjtBQUNBaUMsaUJBQVNqQyxJQUFULEVBQWVDLE9BQWY7QUFDRDtBQUNGOzs7NkJBRVFpQyxRLEVBQVVDLEssRUFBTztBQUN4QkEsY0FBUUEsUUFBUUEsS0FBUixHQUFnQjFDLFFBQXhCO0FBQ0EsYUFBTzBDLE1BQU1DLGdCQUFOLENBQXVCRixRQUF2QixDQUFQO0FBQ0Q7Ozs2QkFFUUEsUSxFQUFVQyxLLEVBQU87QUFDeEJBLGNBQVFBLFFBQVFBLEtBQVIsR0FBZ0IxQyxRQUF4QjtBQUNBLGFBQU8wQyxNQUFNRSxhQUFOLENBQW9CSCxRQUFwQixDQUFQO0FBQ0Q7OzsrQkFFVWpCLFMsRUFBV1YsTyxFQUFTTyxLLEVBQU87QUFDcEMsVUFBTXdCLFdBQVl4QixVQUFVa0IsU0FBVixJQUF1QmxCLFVBQVUsSUFBbkQ7QUFDQSxVQUFNQyxZQUFZdUIsV0FBVyxPQUFYLEdBQXFCLFNBQXZDO0FBQ0EsVUFBTWYsWUFBWWhCLFFBQVFtQixZQUFSLENBQXFCLElBQXJCLEVBQTJCYSxPQUEzQixDQUFtQyxxQkFBbkMsRUFBMEQsRUFBMUQsQ0FBbEI7QUFDQSxVQUFNZixVQUFZYyxXQUFXeEIsTUFBTVksWUFBTixDQUFtQix1QkFBbkIsRUFBNENhLE9BQTVDLGNBQStEaEIsU0FBL0QsY0FBbUYsRUFBbkYsQ0FBWCxHQUFvRyxJQUF0SDtBQUNBLFVBQU1ELFNBQVksRUFBRUEsUUFBUSxFQUFFQyxvQkFBRixFQUFhQyxnQkFBYixFQUFWLEVBQWxCO0FBQ0EsVUFBTVIsNkJBQTJCRCxTQUEzQixVQUF5Q0UsU0FBL0M7O0FBRUF4QixlQUFTK0MsYUFBVCxDQUF1QixJQUFJQyxXQUFKLENBQWdCekIsU0FBaEIsRUFBMkJNLE1BQTNCLENBQXZCO0FBQ0Q7Ozs7OztrQkFJWXhCLE87Ozs7Ozs7Ozs7OztBQzdGZjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImphdmFzY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vamF2YXNjcmlwdHMvYXBwLmpzXCIpO1xuIiwiLy8gPT09IFdhZ29uIG1haW4gamF2YXNjcmlwdCBmaWxlID09PVxuLy8gVGVsbCBXZWJwYWNrIHRvIGxvYWQgdGhlIHN0eWxlXG4vLyBpbXBvcnQgJy4uL3N0eWxlc2hlZXRzL2FwcC5zY3NzJztcblxuLy8gSW1wb3J0IHRoZSBjbGFzc2VzIHJlcXVpcmVkIHRvIGhhbmRsZSBzZWN0aW9uc1xuaW1wb3J0IFNlY3Rpb25zTWFuYWdlciBmcm9tICcuL3NlY3Rpb25zL19tYW5hZ2VyJztcbmltcG9ydCAqIGFzIFNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZXZlbnQgPT4ge1xuXG4gIC8vIExvYWQgYWxsIHRoZSBzZWN0aW9uc1xuICBjb25zdCBzZWN0aW9uc01hbmFnZXIgPSBuZXcgU2VjdGlvbnNNYW5hZ2VyKCk7XG5cbiAgLy8gUmVnaXN0ZXIgc2VjdGlvbnMgaGVyZS4gRE8gTk9UIFJFTU9WRSBPUiBVUERBVEUgVEhJUyBMSU5FXG5cbiAgc2VjdGlvbnNNYW5hZ2VyLnN0YXJ0KCk7XG5cbn0pO1xuIiwiY2xhc3MgTWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWN0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmVnaXN0ZXJTZWN0aW9uKHR5cGUsIGFjdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZyh0eXBlLCBhY3Rpb25zKTtcbiAgICB0aGlzLnNlY3Rpb25zW3R5cGVdID0gYWN0aW9ucztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZWFjaFR5cGUoKHR5cGUsIGFjdGlvbnMpID0+IHtcbiAgICAgIHRoaXMucXVlcnlBbGwoYC5sb2NvbW90aXZlLXNlY3Rpb25bZGF0YS1sb2NvbW90aXZlLXNlY3Rpb24tdHlwZT1cIiR7dHlwZX1cIl1gKS5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnJ1bkFjdGlvbihhY3Rpb25zLCAnbG9hZCcsIHNlY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgd2luZG93Ll9zZWN0aW9uc01hbmFnZXIgPSB0aGlzO1xuICB9XG5cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgY29uc3QgZXZlbnRzID0ge1xuICAgICAgc2VjdGlvbjogWydsb2FkJywgJ3VubG9hZCcsICdzZWxlY3QnLCAnZGVzZWxlY3QnLCAncmVvcmRlciddLFxuICAgICAgYmxvY2s6IFsnc2VsZWN0JywgJ2Rlc2VsZWN0J11cbiAgICB9XG5cbiAgICBmb3IgKHZhciBuYW1lc3BhY2UgaW4gZXZlbnRzKSB7XG4gICAgICBldmVudHNbbmFtZXNwYWNlXS5mb3JFYWNoKGV2ZW50VHlwZSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGBsb2NvbW90aXZlOjoke25hbWVzcGFjZX06OiR7ZXZlbnRUeXBlfWA7XG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSB0aGlzLmV2ZW50VHlwZVRvQWN0aW9uTmFtZShuYW1lc3BhY2UsIGV2ZW50VHlwZSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmFwcGx5UnVsZVRvRXZlbnQoYWN0aW9uTmFtZSwgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5UnVsZVRvRXZlbnQoYWN0aW9uTmFtZSwgZXZlbnQpIHtcbiAgICBjb25zdCB7IHNlY3Rpb25JZCwgYmxvY2tJZCB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGNvbnN0IHNlY3Rpb24gICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsb2NvbW90aXZlLXNlY3Rpb24tJHtzZWN0aW9uSWR9YCk7XG4gICAgY29uc3QgdHlwZSAgICAgID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jb21vdGl2ZS1zZWN0aW9uLXR5cGUnKTtcbiAgICBjb25zdCBibG9jayAgICAgPSB0aGlzLnF1ZXJ5T25lKGBbZGF0YS1sb2NvbW90aXZlLWJsb2NrPVwic2VjdGlvbi0ke3NlY3Rpb25JZH0tYmxvY2stJHtibG9ja0lkfVwiXWAsIHNlY3Rpb24pO1xuXG4gICAgdGhpcy5ydW5BY3Rpb24odGhpcy5zZWN0aW9uc1t0eXBlXSwgYWN0aW9uTmFtZSwgc2VjdGlvbiwgYmxvY2spXG4gIH1cblxuICBldmVudFR5cGVUb0FjdGlvbk5hbWUobmFtZXNwYWNlLCBldmVudFR5cGUpIHtcbiAgICBpZiAobmFtZXNwYWNlID09PSAnc2VjdGlvbicpXG4gICAgICByZXR1cm4gZXZlbnRUeXBlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBuYW1lc3BhY2UgKyBldmVudFR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBldmVudFR5cGUuc2xpY2UoMSk7XG4gIH1cblxuICBydW5BY3Rpb24oYWN0aW9ucywgYWN0aW9uTmFtZSwgc2VjdGlvbiwgYmxvY2spIHtcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2FjdGlvbk5hbWVdO1xuXG4gICAgaWYgKGFjdGlvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgYWN0aW9uKHNlY3Rpb24sIGJsb2NrKTtcbiAgfVxuXG4gIGVhY2hUeXBlKGNhbGxiYWNrKSB7XG4gICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLnNlY3Rpb25zKSB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5zZWN0aW9uc1t0eXBlXTtcbiAgICAgIGNhbGxiYWNrKHR5cGUsIGFjdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgcXVlcnlBbGwoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSA/IHNjb3BlIDogZG9jdW1lbnQ7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9XG5cbiAgcXVlcnlPbmUoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSA/IHNjb3BlIDogZG9jdW1lbnQ7XG4gICAgcmV0dXJuIHNjb3BlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgdGVzdEFjdGlvbihldmVudFR5cGUsIHNlY3Rpb24sIGJsb2NrKSB7XG4gICAgY29uc3QgaGFzQmxvY2sgID0gYmxvY2sgIT09IHVuZGVmaW5lZCAmJiBibG9jayAhPT0gbnVsbCA7XG4gICAgY29uc3QgbmFtZXNwYWNlID0gaGFzQmxvY2sgPyAnYmxvY2snIDogJ3NlY3Rpb24nO1xuICAgIGNvbnN0IHNlY3Rpb25JZCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdpZCcpLnJlcGxhY2UoJ2xvY29tb3RpdmUtc2VjdGlvbi0nLCAnJyk7XG4gICAgY29uc3QgYmxvY2tJZCAgID0gaGFzQmxvY2sgPyBibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jb21vdGl2ZS1ibG9jaycpLnJlcGxhY2UoYHNlY3Rpb24tJHtzZWN0aW9uSWR9LWJsb2NrLWAsICcnKSA6IG51bGw7XG4gICAgY29uc3QgZGV0YWlsICAgID0geyBkZXRhaWw6IHsgc2VjdGlvbklkLCBibG9ja0lkIH0gfTtcbiAgICBjb25zdCBldmVudE5hbWUgPSBgbG9jb21vdGl2ZTo6JHtuYW1lc3BhY2V9Ojoke2V2ZW50VHlwZX1gO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkZXRhaWwpKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7XG4iLCIvLyBJbXBvcnQgYWxsIHRoZSBzZWN0aW9ucyBoZXJlXG4vL1xuLy8gRXhhbXBsZTpcbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gJy4vaGVybyc7XG4vL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
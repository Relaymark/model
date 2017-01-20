(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["relaymark.model.relayboxDriverModel"] = factory(require("angular"));
	else
		root["relaymark.model.relayboxDriverModel"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(1);

	__webpack_require__(64);

	var _RbDriverCmxNetworkModel = __webpack_require__(12);

	var _RbDriverCmxNetworkModel2 = _interopRequireDefault(_RbDriverCmxNetworkModel);

	var _RbDriverInstallationOptionsModel = __webpack_require__(13);

	var _RbDriverInstallationOptionsModel2 = _interopRequireDefault(_RbDriverInstallationOptionsModel);

	var _RbDriverAccessPointModel = __webpack_require__(7);

	var _RbDriverAccessPointModel2 = _interopRequireDefault(_RbDriverAccessPointModel);

	var _RbDriverCmxNetworkMerakiConfigurationModel = __webpack_require__(11);

	var _RbDriverCmxNetworkMerakiConfigurationModel2 = _interopRequireDefault(_RbDriverCmxNetworkMerakiConfigurationModel);

	var _RbDriverCmxNetworkCountersConfigurationModel = __webpack_require__(10);

	var _RbDriverCmxNetworkCountersConfigurationModel2 = _interopRequireDefault(_RbDriverCmxNetworkCountersConfigurationModel);

	var _RbDriverCmxNetworkCloudtraxConfigurationModel = __webpack_require__(9);

	var _RbDriverCmxNetworkCloudtraxConfigurationModel2 = _interopRequireDefault(_RbDriverCmxNetworkCloudtraxConfigurationModel);

	var _RbDriverCmxNetworkCaptivePortalConfigurationModel = __webpack_require__(8);

	var _RbDriverCmxNetworkCaptivePortalConfigurationModel2 = _interopRequireDefault(_RbDriverCmxNetworkCaptivePortalConfigurationModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('relaymark.model.relayboxDriver', ['relayboxApiModelFactory'])
	// .factory('RbDriverRegistrationModel', RbDriverRegistrationModel)
	// .factory('RbDriverEquipmentModel', RbDriverEquipmentModel)

	.factory('RbDriverCmxNetworkModel', _RbDriverCmxNetworkModel2.default).factory('RbDriverInstallationOptionsModel', _RbDriverInstallationOptionsModel2.default).factory('RbDriverAccessPointModel', _RbDriverAccessPointModel2.default).factory('RbDriverCmxNetworkMerakiConfigurationModel', _RbDriverCmxNetworkMerakiConfigurationModel2.default).factory('RbDriverCmxNetworkCountersConfigurationModel', _RbDriverCmxNetworkCountersConfigurationModel2.default).factory('RbDriverCmxNetworkCloudtraxConfigurationModel', _RbDriverCmxNetworkCloudtraxConfigurationModel2.default).factory('RbDriverCmxNetworkCaptivePortalConfigurationModel', _RbDriverCmxNetworkCaptivePortalConfigurationModel2.default).name;

	// import RbDriverRegistrationModel from './Relaybox-driver-api/RbDriverRegistrationModel';
	// import RbDriverEquipmentModel from './Relaybox-driver-api/RbDriverEquipmentModel';

	/**
	 * Created by benoit.bacot on 29/08/2016.
	 */

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = 'ngFileUpload';

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function(root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	}(this, function(undefined) {
	  'use strict';

	  var $scope, conflict, conflictResolution = [];
	  if (typeof global === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(
	      function() {
	        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	          $scope.DeepDiff = conflict;
	          conflict = undefined;
	        }
	      });
	  }

	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }

	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }

	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);

	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);

	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);

	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);

	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }

	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }

	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }

	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
	        else if (typeof(prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }

	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }

	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i, len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function(k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function(k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }

	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs,
	      function(diff) {
	        if (diff) {
	          accum.push(diff);
	        }
	      },
	      prefilter);
	    return (accum.length) ? accum : undefined;
	  }

	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }

	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }

	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }

	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }

	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }

	  Object.defineProperties(accumulateDiff, {

	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function(it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });

	  return accumulateDiff;
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 3:
/***/ function(module, exports) {

	/**!
	 * AngularJS file upload directives and services. Supports: file upload/drop/paste, resume, cancel/abort,
	 * progress, resize, thumbnail, preview, validation and CORS
	 * FileAPI Flash shim for old browsers not supporting FormData
	 * @author  Danial  <danial.farid@gmail.com>
	 * @version 12.2.9
	 */

	(function () {
	  /** @namespace FileAPI.noContentTimeout */

	  function patchXHR(fnName, newFn) {
	    window.XMLHttpRequest.prototype[fnName] = newFn(window.XMLHttpRequest.prototype[fnName]);
	  }

	  function redefineProp(xhr, prop, fn) {
	    try {
	      Object.defineProperty(xhr, prop, {get: fn});
	    } catch (e) {/*ignore*/
	    }
	  }

	  if (!window.FileAPI) {
	    window.FileAPI = {};
	  }

	  if (!window.XMLHttpRequest) {
	    throw 'AJAX is not supported. XMLHttpRequest is not defined.';
	  }

	  FileAPI.shouldLoad = !window.FormData || FileAPI.forceLoad;
	  if (FileAPI.shouldLoad) {
	    var initializeUploadListener = function (xhr) {
	      if (!xhr.__listeners) {
	        if (!xhr.upload) xhr.upload = {};
	        xhr.__listeners = [];
	        var origAddEventListener = xhr.upload.addEventListener;
	        xhr.upload.addEventListener = function (t, fn) {
	          xhr.__listeners[t] = fn;
	          if (origAddEventListener) origAddEventListener.apply(this, arguments);
	        };
	      }
	    };

	    patchXHR('open', function (orig) {
	      return function (m, url, b) {
	        initializeUploadListener(this);
	        this.__url = url;
	        try {
	          orig.apply(this, [m, url, b]);
	        } catch (e) {
	          if (e.message.indexOf('Access is denied') > -1) {
	            this.__origError = e;
	            orig.apply(this, [m, '_fix_for_ie_crossdomain__', b]);
	          }
	        }
	      };
	    });

	    patchXHR('getResponseHeader', function (orig) {
	      return function (h) {
	        return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(h) : (orig == null ? null : orig.apply(this, [h]));
	      };
	    });

	    patchXHR('getAllResponseHeaders', function (orig) {
	      return function () {
	        return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : (orig == null ? null : orig.apply(this));
	      };
	    });

	    patchXHR('abort', function (orig) {
	      return function () {
	        return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : (orig == null ? null : orig.apply(this));
	      };
	    });

	    patchXHR('setRequestHeader', function (orig) {
	      return function (header, value) {
	        if (header === '__setXHR_') {
	          initializeUploadListener(this);
	          var val = value(this);
	          // fix for angular < 1.2.0
	          if (val instanceof Function) {
	            val(this);
	          }
	        } else {
	          this.__requestHeaders = this.__requestHeaders || {};
	          this.__requestHeaders[header] = value;
	          orig.apply(this, arguments);
	        }
	      };
	    });

	    patchXHR('send', function (orig) {
	      return function () {
	        var xhr = this;
	        if (arguments[0] && arguments[0].__isFileAPIShim) {
	          var formData = arguments[0];
	          var config = {
	            url: xhr.__url,
	            jsonp: false, //removes the callback form param
	            cache: true, //removes the ?fileapiXXX in the url
	            complete: function (err, fileApiXHR) {
	              if (err && angular.isString(err) && err.indexOf('#2174') !== -1) {
	                // this error seems to be fine the file is being uploaded properly.
	                err = null;
	              }
	              xhr.__completed = true;
	              if (!err && xhr.__listeners.load)
	                xhr.__listeners.load({
	                  type: 'load',
	                  loaded: xhr.__loaded,
	                  total: xhr.__total,
	                  target: xhr,
	                  lengthComputable: true
	                });
	              if (!err && xhr.__listeners.loadend)
	                xhr.__listeners.loadend({
	                  type: 'loadend',
	                  loaded: xhr.__loaded,
	                  total: xhr.__total,
	                  target: xhr,
	                  lengthComputable: true
	                });
	              if (err === 'abort' && xhr.__listeners.abort)
	                xhr.__listeners.abort({
	                  type: 'abort',
	                  loaded: xhr.__loaded,
	                  total: xhr.__total,
	                  target: xhr,
	                  lengthComputable: true
	                });
	              if (fileApiXHR.status !== undefined) redefineProp(xhr, 'status', function () {
	                return (fileApiXHR.status === 0 && err && err !== 'abort') ? 500 : fileApiXHR.status;
	              });
	              if (fileApiXHR.statusText !== undefined) redefineProp(xhr, 'statusText', function () {
	                return fileApiXHR.statusText;
	              });
	              redefineProp(xhr, 'readyState', function () {
	                return 4;
	              });
	              if (fileApiXHR.response !== undefined) redefineProp(xhr, 'response', function () {
	                return fileApiXHR.response;
	              });
	              var resp = fileApiXHR.responseText || (err && fileApiXHR.status === 0 && err !== 'abort' ? err : undefined);
	              redefineProp(xhr, 'responseText', function () {
	                return resp;
	              });
	              redefineProp(xhr, 'response', function () {
	                return resp;
	              });
	              if (err) redefineProp(xhr, 'err', function () {
	                return err;
	              });
	              xhr.__fileApiXHR = fileApiXHR;
	              if (xhr.onreadystatechange) xhr.onreadystatechange();
	              if (xhr.onload) xhr.onload();
	            },
	            progress: function (e) {
	              e.target = xhr;
	              if (xhr.__listeners.progress) xhr.__listeners.progress(e);
	              xhr.__total = e.total;
	              xhr.__loaded = e.loaded;
	              if (e.total === e.loaded) {
	                // fix flash issue that doesn't call complete if there is no response text from the server
	                var _this = this;
	                setTimeout(function () {
	                  if (!xhr.__completed) {
	                    xhr.getAllResponseHeaders = function () {
	                    };
	                    _this.complete(null, {status: 204, statusText: 'No Content'});
	                  }
	                }, FileAPI.noContentTimeout || 10000);
	              }
	            },
	            headers: xhr.__requestHeaders
	          };
	          config.data = {};
	          config.files = {};
	          for (var i = 0; i < formData.data.length; i++) {
	            var item = formData.data[i];
	            if (item.val != null && item.val.name != null && item.val.size != null && item.val.type != null) {
	              config.files[item.key] = item.val;
	            } else {
	              config.data[item.key] = item.val;
	            }
	          }

	          setTimeout(function () {
	            if (!FileAPI.hasFlash) {
	              throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
	            }
	            xhr.__fileApiXHR = FileAPI.upload(config);
	          }, 1);
	        } else {
	          if (this.__origError) {
	            throw this.__origError;
	          }
	          orig.apply(xhr, arguments);
	        }
	      };
	    });
	    window.XMLHttpRequest.__isFileAPIShim = true;
	    window.FormData = FormData = function () {
	      return {
	        append: function (key, val, name) {
	          if (val.__isFileAPIBlobShim) {
	            val = val.data[0];
	          }
	          this.data.push({
	            key: key,
	            val: val,
	            name: name
	          });
	        },
	        data: [],
	        __isFileAPIShim: true
	      };
	    };

	    window.Blob = Blob = function (b) {
	      return {
	        data: b,
	        __isFileAPIBlobShim: true
	      };
	    };
	  }

	})();

	(function () {
	  /** @namespace FileAPI.forceLoad */
	  /** @namespace window.FileAPI.jsUrl */
	  /** @namespace window.FileAPI.jsPath */

	  function isInputTypeFile(elem) {
	    return elem[0].tagName.toLowerCase() === 'input' && elem.attr('type') && elem.attr('type').toLowerCase() === 'file';
	  }

	  function hasFlash() {
	    try {
	      var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	      if (fo) return true;
	    } catch (e) {
	      if (navigator.mimeTypes['application/x-shockwave-flash'] !== undefined) return true;
	    }
	    return false;
	  }

	  function getOffset(obj) {
	    var left = 0, top = 0;

	    if (window.jQuery) {
	      return jQuery(obj).offset();
	    }

	    if (obj.offsetParent) {
	      do {
	        left += (obj.offsetLeft - obj.scrollLeft);
	        top += (obj.offsetTop - obj.scrollTop);
	        obj = obj.offsetParent;
	      } while (obj);
	    }
	    return {
	      left: left,
	      top: top
	    };
	  }

	  if (FileAPI.shouldLoad) {
	    FileAPI.hasFlash = hasFlash();

	    //load FileAPI
	    if (FileAPI.forceLoad) {
	      FileAPI.html5 = false;
	    }

	    if (!FileAPI.upload) {
	      var jsUrl, basePath, script = document.createElement('script'), allScripts = document.getElementsByTagName('script'), i, index, src;
	      if (window.FileAPI.jsUrl) {
	        jsUrl = window.FileAPI.jsUrl;
	      } else if (window.FileAPI.jsPath) {
	        basePath = window.FileAPI.jsPath;
	      } else {
	        for (i = 0; i < allScripts.length; i++) {
	          src = allScripts[i].src;
	          index = src.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/);
	          if (index > -1) {
	            basePath = src.substring(0, index + 1);
	            break;
	          }
	        }
	      }

	      if (FileAPI.staticPath == null) FileAPI.staticPath = basePath;
	      script.setAttribute('src', jsUrl || basePath + 'FileAPI.min.js');
	      document.getElementsByTagName('head')[0].appendChild(script);
	    }

	    FileAPI.ngfFixIE = function (elem, fileElem, changeFn) {
	      if (!hasFlash()) {
	        throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
	      }
	      var fixInputStyle = function () {
	        var label = fileElem.parent();
	        if (elem.attr('disabled')) {
	          if (label) label.removeClass('js-fileapi-wrapper');
	        } else {
	          if (!fileElem.attr('__ngf_flash_')) {
	            fileElem.unbind('change');
	            fileElem.unbind('click');
	            fileElem.bind('change', function (evt) {
	              fileApiChangeFn.apply(this, [evt]);
	              changeFn.apply(this, [evt]);
	            });
	            fileElem.attr('__ngf_flash_', 'true');
	          }
	          label.addClass('js-fileapi-wrapper');
	          if (!isInputTypeFile(elem)) {
	            label.css('position', 'absolute')
	              .css('top', getOffset(elem[0]).top + 'px').css('left', getOffset(elem[0]).left + 'px')
	              .css('width', elem[0].offsetWidth + 'px').css('height', elem[0].offsetHeight + 'px')
	              .css('filter', 'alpha(opacity=0)').css('display', elem.css('display'))
	              .css('overflow', 'hidden').css('z-index', '900000')
	              .css('visibility', 'visible');
	            fileElem.css('width', elem[0].offsetWidth + 'px').css('height', elem[0].offsetHeight + 'px')
	              .css('position', 'absolute').css('top', '0px').css('left', '0px');
	          }
	        }
	      };

	      elem.bind('mouseenter', fixInputStyle);

	      var fileApiChangeFn = function (evt) {
	        var files = FileAPI.getFiles(evt);
	        //just a double check for #233
	        for (var i = 0; i < files.length; i++) {
	          if (files[i].size === undefined) files[i].size = 0;
	          if (files[i].name === undefined) files[i].name = 'file';
	          if (files[i].type === undefined) files[i].type = 'undefined';
	        }
	        if (!evt.target) {
	          evt.target = {};
	        }
	        evt.target.files = files;
	        // if evt.target.files is not writable use helper field
	        if (evt.target.files !== files) {
	          evt.__files_ = files;
	        }
	        (evt.__files_ || evt.target.files).item = function (i) {
	          return (evt.__files_ || evt.target.files)[i] || null;
	        };
	      };
	    };

	    FileAPI.disableFileInput = function (elem, disable) {
	      if (disable) {
	        elem.removeClass('js-fileapi-wrapper');
	      } else {
	        elem.addClass('js-fileapi-wrapper');
	      }
	    };
	  }
	})();

	if (!window.FileReader) {
	  window.FileReader = function () {
	    var _this = this, loadStarted = false;
	    this.listeners = {};
	    this.addEventListener = function (type, fn) {
	      _this.listeners[type] = _this.listeners[type] || [];
	      _this.listeners[type].push(fn);
	    };
	    this.removeEventListener = function (type, fn) {
	      if (_this.listeners[type]) _this.listeners[type].splice(_this.listeners[type].indexOf(fn), 1);
	    };
	    this.dispatchEvent = function (evt) {
	      var list = _this.listeners[evt.type];
	      if (list) {
	        for (var i = 0; i < list.length; i++) {
	          list[i].call(_this, evt);
	        }
	      }
	    };
	    this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;

	    var constructEvent = function (type, evt) {
	      var e = {type: type, target: _this, loaded: evt.loaded, total: evt.total, error: evt.error};
	      if (evt.result != null) e.target.result = evt.result;
	      return e;
	    };
	    var listener = function (evt) {
	      if (!loadStarted) {
	        loadStarted = true;
	        if (_this.onloadstart) _this.onloadstart(constructEvent('loadstart', evt));
	      }
	      var e;
	      if (evt.type === 'load') {
	        if (_this.onloadend) _this.onloadend(constructEvent('loadend', evt));
	        e = constructEvent('load', evt);
	        if (_this.onload) _this.onload(e);
	        _this.dispatchEvent(e);
	      } else if (evt.type === 'progress') {
	        e = constructEvent('progress', evt);
	        if (_this.onprogress) _this.onprogress(e);
	        _this.dispatchEvent(e);
	      } else {
	        e = constructEvent('error', evt);
	        if (_this.onerror) _this.onerror(e);
	        _this.dispatchEvent(e);
	      }
	    };
	    this.readAsDataURL = function (file) {
	      FileAPI.readAsDataURL(file, listener);
	    };
	    this.readAsText = function (file) {
	      FileAPI.readAsText(file, listener);
	    };
	  };
	}

	/**!
	 * AngularJS file upload directives and services. Supoorts: file upload/drop/paste, resume, cancel/abort,
	 * progress, resize, thumbnail, preview, validation and CORS
	 * @author  Danial  <danial.farid@gmail.com>
	 * @version 12.2.9
	 */

	if (window.XMLHttpRequest && !(window.FileAPI && FileAPI.shouldLoad)) {
	  window.XMLHttpRequest.prototype.setRequestHeader = (function (orig) {
	    return function (header, value) {
	      if (header === '__setXHR_') {
	        var val = value(this);
	        // fix for angular < 1.2.0
	        if (val instanceof Function) {
	          val(this);
	        }
	      } else {
	        orig.apply(this, arguments);
	      }
	    };
	  })(window.XMLHttpRequest.prototype.setRequestHeader);
	}

	var ngFileUpload = angular.module('ngFileUpload', []);

	ngFileUpload.version = '12.2.9';

	ngFileUpload.service('UploadBase', ['$http', '$q', '$timeout', function ($http, $q, $timeout) {
	  var upload = this;
	  upload.promisesCount = 0;

	  this.isResumeSupported = function () {
	    return window.Blob && window.Blob.prototype.slice;
	  };

	  var resumeSupported = this.isResumeSupported();

	  function sendHttp(config) {
	    config.method = config.method || 'POST';
	    config.headers = config.headers || {};

	    var deferred = config._deferred = config._deferred || $q.defer();
	    var promise = deferred.promise;

	    function notifyProgress(e) {
	      if (deferred.notify) {
	        deferred.notify(e);
	      }
	      if (promise.progressFunc) {
	        $timeout(function () {
	          promise.progressFunc(e);
	        });
	      }
	    }

	    function getNotifyEvent(n) {
	      if (config._start != null && resumeSupported) {
	        return {
	          loaded: n.loaded + config._start,
	          total: (config._file && config._file.size) || n.total,
	          type: n.type, config: config,
	          lengthComputable: true, target: n.target
	        };
	      } else {
	        return n;
	      }
	    }

	    if (!config.disableProgress) {
	      config.headers.__setXHR_ = function () {
	        return function (xhr) {
	          if (!xhr || !xhr.upload || !xhr.upload.addEventListener) return;
	          config.__XHR = xhr;
	          if (config.xhrFn) config.xhrFn(xhr);
	          xhr.upload.addEventListener('progress', function (e) {
	            e.config = config;
	            notifyProgress(getNotifyEvent(e));
	          }, false);
	          //fix for firefox not firing upload progress end, also IE8-9
	          xhr.upload.addEventListener('load', function (e) {
	            if (e.lengthComputable) {
	              e.config = config;
	              notifyProgress(getNotifyEvent(e));
	            }
	          }, false);
	        };
	      };
	    }

	    function uploadWithAngular() {
	      $http(config).then(function (r) {
	          if (resumeSupported && config._chunkSize && !config._finished && config._file) {
	            var fileSize = config._file && config._file.size || 0;
	            notifyProgress({
	                loaded: Math.min(config._end, fileSize),
	                total: fileSize,
	                config: config,
	                type: 'progress'
	              }
	            );
	            upload.upload(config, true);
	          } else {
	            if (config._finished) delete config._finished;
	            deferred.resolve(r);
	          }
	        }, function (e) {
	          deferred.reject(e);
	        }, function (n) {
	          deferred.notify(n);
	        }
	      );
	    }

	    if (!resumeSupported) {
	      uploadWithAngular();
	    } else if (config._chunkSize && config._end && !config._finished) {
	      config._start = config._end;
	      config._end += config._chunkSize;
	      uploadWithAngular();
	    } else if (config.resumeSizeUrl) {
	      $http.get(config.resumeSizeUrl).then(function (resp) {
	        if (config.resumeSizeResponseReader) {
	          config._start = config.resumeSizeResponseReader(resp.data);
	        } else {
	          config._start = parseInt((resp.data.size == null ? resp.data : resp.data.size).toString());
	        }
	        if (config._chunkSize) {
	          config._end = config._start + config._chunkSize;
	        }
	        uploadWithAngular();
	      }, function (e) {
	        throw e;
	      });
	    } else if (config.resumeSize) {
	      config.resumeSize().then(function (size) {
	        config._start = size;
	        if (config._chunkSize) {
	          config._end = config._start + config._chunkSize;
	        }
	        uploadWithAngular();
	      }, function (e) {
	        throw e;
	      });
	    } else {
	      if (config._chunkSize) {
	        config._start = 0;
	        config._end = config._start + config._chunkSize;
	      }
	      uploadWithAngular();
	    }


	    promise.success = function (fn) {
	      promise.then(function (response) {
	        fn(response.data, response.status, response.headers, config);
	      });
	      return promise;
	    };

	    promise.error = function (fn) {
	      promise.then(null, function (response) {
	        fn(response.data, response.status, response.headers, config);
	      });
	      return promise;
	    };

	    promise.progress = function (fn) {
	      promise.progressFunc = fn;
	      promise.then(null, null, function (n) {
	        fn(n);
	      });
	      return promise;
	    };
	    promise.abort = promise.pause = function () {
	      if (config.__XHR) {
	        $timeout(function () {
	          config.__XHR.abort();
	        });
	      }
	      return promise;
	    };
	    promise.xhr = function (fn) {
	      config.xhrFn = (function (origXhrFn) {
	        return function () {
	          if (origXhrFn) origXhrFn.apply(promise, arguments);
	          fn.apply(promise, arguments);
	        };
	      })(config.xhrFn);
	      return promise;
	    };

	    upload.promisesCount++;
	    if (promise['finally'] && promise['finally'] instanceof Function) {
	      promise['finally'](function () {
	        upload.promisesCount--;
	      });
	    }
	    return promise;
	  }

	  this.isUploadInProgress = function () {
	    return upload.promisesCount > 0;
	  };

	  this.rename = function (file, name) {
	    file.ngfName = name;
	    return file;
	  };

	  this.jsonBlob = function (val) {
	    if (val != null && !angular.isString(val)) {
	      val = JSON.stringify(val);
	    }
	    var blob = new window.Blob([val], {type: 'application/json'});
	    blob._ngfBlob = true;
	    return blob;
	  };

	  this.json = function (val) {
	    return angular.toJson(val);
	  };

	  function copy(obj) {
	    var clone = {};
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        clone[key] = obj[key];
	      }
	    }
	    return clone;
	  }

	  this.isFile = function (file) {
	    return file != null && (file instanceof window.Blob || (file.flashId && file.name && file.size));
	  };

	  this.upload = function (config, internal) {
	    function toResumeFile(file, formData) {
	      if (file._ngfBlob) return file;
	      config._file = config._file || file;
	      if (config._start != null && resumeSupported) {
	        if (config._end && config._end >= file.size) {
	          config._finished = true;
	          config._end = file.size;
	        }
	        var slice = file.slice(config._start, config._end || file.size);
	        slice.name = file.name;
	        slice.ngfName = file.ngfName;
	        if (config._chunkSize) {
	          formData.append('_chunkSize', config._chunkSize);
	          formData.append('_currentChunkSize', config._end - config._start);
	          formData.append('_chunkNumber', Math.floor(config._start / config._chunkSize));
	          formData.append('_totalSize', config._file.size);
	        }
	        return slice;
	      }
	      return file;
	    }

	    function addFieldToFormData(formData, val, key) {
	      if (val !== undefined) {
	        if (angular.isDate(val)) {
	          val = val.toISOString();
	        }
	        if (angular.isString(val)) {
	          formData.append(key, val);
	        } else if (upload.isFile(val)) {
	          var file = toResumeFile(val, formData);
	          var split = key.split(',');
	          if (split[1]) {
	            file.ngfName = split[1].replace(/^\s+|\s+$/g, '');
	            key = split[0];
	          }
	          config._fileKey = config._fileKey || key;
	          formData.append(key, file, file.ngfName || file.name);
	        } else {
	          if (angular.isObject(val)) {
	            if (val.$$ngfCircularDetection) throw 'ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: ' + key;

	            val.$$ngfCircularDetection = true;
	            try {
	              for (var k in val) {
	                if (val.hasOwnProperty(k) && k !== '$$ngfCircularDetection') {
	                  var objectKey = config.objectKey == null ? '[i]' : config.objectKey;
	                  if (val.length && parseInt(k) > -1) {
	                    objectKey = config.arrayKey == null ? objectKey : config.arrayKey;
	                  }
	                  addFieldToFormData(formData, val[k], key + objectKey.replace(/[ik]/g, k));
	                }
	              }
	            } finally {
	              delete val.$$ngfCircularDetection;
	            }
	          } else {
	            formData.append(key, val);
	          }
	        }
	      }
	    }

	    function digestConfig() {
	      config._chunkSize = upload.translateScalars(config.resumeChunkSize);
	      config._chunkSize = config._chunkSize ? parseInt(config._chunkSize.toString()) : null;

	      config.headers = config.headers || {};
	      config.headers['Content-Type'] = undefined;
	      config.transformRequest = config.transformRequest ?
	        (angular.isArray(config.transformRequest) ?
	          config.transformRequest : [config.transformRequest]) : [];
	      config.transformRequest.push(function (data) {
	        var formData = new window.FormData(), key;
	        data = data || config.fields || {};
	        if (config.file) {
	          data.file = config.file;
	        }
	        for (key in data) {
	          if (data.hasOwnProperty(key)) {
	            var val = data[key];
	            if (config.formDataAppender) {
	              config.formDataAppender(formData, key, val);
	            } else {
	              addFieldToFormData(formData, val, key);
	            }
	          }
	        }

	        return formData;
	      });
	    }

	    if (!internal) config = copy(config);
	    if (!config._isDigested) {
	      config._isDigested = true;
	      digestConfig();
	    }

	    return sendHttp(config);
	  };

	  this.http = function (config) {
	    config = copy(config);
	    config.transformRequest = config.transformRequest || function (data) {
	        if ((window.ArrayBuffer && data instanceof window.ArrayBuffer) || data instanceof window.Blob) {
	          return data;
	        }
	        return $http.defaults.transformRequest[0].apply(this, arguments);
	      };
	    config._chunkSize = upload.translateScalars(config.resumeChunkSize);
	    config._chunkSize = config._chunkSize ? parseInt(config._chunkSize.toString()) : null;

	    return sendHttp(config);
	  };

	  this.translateScalars = function (str) {
	    if (angular.isString(str)) {
	      if (str.search(/kb/i) === str.length - 2) {
	        return parseFloat(str.substring(0, str.length - 2) * 1024);
	      } else if (str.search(/mb/i) === str.length - 2) {
	        return parseFloat(str.substring(0, str.length - 2) * 1048576);
	      } else if (str.search(/gb/i) === str.length - 2) {
	        return parseFloat(str.substring(0, str.length - 2) * 1073741824);
	      } else if (str.search(/b/i) === str.length - 1) {
	        return parseFloat(str.substring(0, str.length - 1));
	      } else if (str.search(/s/i) === str.length - 1) {
	        return parseFloat(str.substring(0, str.length - 1));
	      } else if (str.search(/m/i) === str.length - 1) {
	        return parseFloat(str.substring(0, str.length - 1) * 60);
	      } else if (str.search(/h/i) === str.length - 1) {
	        return parseFloat(str.substring(0, str.length - 1) * 3600);
	      }
	    }
	    return str;
	  };

	  this.urlToBlob = function(url) {
	    var defer = $q.defer();
	    $http({url: url, method: 'get', responseType: 'arraybuffer'}).then(function (resp) {
	      var arrayBufferView = new Uint8Array(resp.data);
	      var type = resp.headers('content-type') || 'image/WebP';
	      var blob = new window.Blob([arrayBufferView], {type: type});
	      var matches = url.match(/.*\/(.+?)(\?.*)?$/);
	      if (matches.length > 1) {
	        blob.name = matches[1];
	      }
	      defer.resolve(blob);
	    }, function (e) {
	      defer.reject(e);
	    });
	    return defer.promise;
	  };

	  this.setDefaults = function (defaults) {
	    this.defaults = defaults || {};
	  };

	  this.defaults = {};
	  this.version = ngFileUpload.version;
	}

	]);

	ngFileUpload.service('Upload', ['$parse', '$timeout', '$compile', '$q', 'UploadExif', function ($parse, $timeout, $compile, $q, UploadExif) {
	  var upload = UploadExif;
	  upload.getAttrWithDefaults = function (attr, name) {
	    if (attr[name] != null) return attr[name];
	    var def = upload.defaults[name];
	    return (def == null ? def : (angular.isString(def) ? def : JSON.stringify(def)));
	  };

	  upload.attrGetter = function (name, attr, scope, params) {
	    var attrVal = this.getAttrWithDefaults(attr, name);
	    if (scope) {
	      try {
	        if (params) {
	          return $parse(attrVal)(scope, params);
	        } else {
	          return $parse(attrVal)(scope);
	        }
	      } catch (e) {
	        // hangle string value without single qoute
	        if (name.search(/min|max|pattern/i)) {
	          return attrVal;
	        } else {
	          throw e;
	        }
	      }
	    } else {
	      return attrVal;
	    }
	  };

	  upload.shouldUpdateOn = function (type, attr, scope) {
	    var modelOptions = upload.attrGetter('ngfModelOptions', attr, scope);
	    if (modelOptions && modelOptions.updateOn) {
	      return modelOptions.updateOn.split(' ').indexOf(type) > -1;
	    }
	    return true;
	  };

	  upload.emptyPromise = function () {
	    var d = $q.defer();
	    var args = arguments;
	    $timeout(function () {
	      d.resolve.apply(d, args);
	    });
	    return d.promise;
	  };

	  upload.rejectPromise = function () {
	    var d = $q.defer();
	    var args = arguments;
	    $timeout(function () {
	      d.reject.apply(d, args);
	    });
	    return d.promise;
	  };

	  upload.happyPromise = function (promise, data) {
	    var d = $q.defer();
	    promise.then(function (result) {
	      d.resolve(result);
	    }, function (error) {
	      $timeout(function () {
	        throw error;
	      });
	      d.resolve(data);
	    });
	    return d.promise;
	  };

	  function applyExifRotations(files, attr, scope) {
	    var promises = [upload.emptyPromise()];
	    angular.forEach(files, function (f, i) {
	      if (f.type.indexOf('image/jpeg') === 0 && upload.attrGetter('ngfFixOrientation', attr, scope, {$file: f})) {
	        promises.push(upload.happyPromise(upload.applyExifRotation(f), f).then(function (fixedFile) {
	          files.splice(i, 1, fixedFile);
	        }));
	      }
	    });
	    return $q.all(promises);
	  }

	  function resize(files, attr, scope) {
	    var resizeVal = upload.attrGetter('ngfResize', attr, scope);
	    if (!resizeVal || !upload.isResizeSupported() || !files.length) return upload.emptyPromise();
	    if (resizeVal instanceof Function) {
	      var defer = $q.defer();
	      return resizeVal(files).then(function (p) {
	        resizeWithParams(p, files, attr, scope).then(function (r) {
	          defer.resolve(r);
	        }, function (e) {
	          defer.reject(e);
	        });
	      }, function (e) {
	        defer.reject(e);
	      });
	    } else {
	      return resizeWithParams(resizeVal, files, attr, scope);
	    }
	  }

	  function resizeWithParams(params, files, attr, scope) {
	    var promises = [upload.emptyPromise()];

	    function handleFile(f, i) {
	      if (f.type.indexOf('image') === 0) {
	        if (params.pattern && !upload.validatePattern(f, params.pattern)) return;
	        params.resizeIf = function (width, height) {
	          return upload.attrGetter('ngfResizeIf', attr, scope,
	            {$width: width, $height: height, $file: f});
	        };
	        var promise = upload.resize(f, params);
	        promises.push(promise);
	        promise.then(function (resizedFile) {
	          files.splice(i, 1, resizedFile);
	        }, function (e) {
	          f.$error = 'resize';
	          f.$errorParam = (e ? (e.message ? e.message : e) + ': ' : '') + (f && f.name);
	        });
	      }
	    }

	    for (var i = 0; i < files.length; i++) {
	      handleFile(files[i], i);
	    }
	    return $q.all(promises);
	  }

	  upload.updateModel = function (ngModel, attr, scope, fileChange, files, evt, noDelay) {
	    function update(files, invalidFiles, newFiles, dupFiles, isSingleModel) {
	      attr.$$ngfPrevValidFiles = files;
	      attr.$$ngfPrevInvalidFiles = invalidFiles;
	      var file = files && files.length ? files[0] : null;
	      var invalidFile = invalidFiles && invalidFiles.length ? invalidFiles[0] : null;

	      if (ngModel) {
	        upload.applyModelValidation(ngModel, files);
	        ngModel.$setViewValue(isSingleModel ? file : files);
	      }

	      if (fileChange) {
	        $parse(fileChange)(scope, {
	          $files: files,
	          $file: file,
	          $newFiles: newFiles,
	          $duplicateFiles: dupFiles,
	          $invalidFiles: invalidFiles,
	          $invalidFile: invalidFile,
	          $event: evt
	        });
	      }

	      var invalidModel = upload.attrGetter('ngfModelInvalid', attr);
	      if (invalidModel) {
	        $timeout(function () {
	          $parse(invalidModel).assign(scope, isSingleModel ? invalidFile : invalidFiles);
	        });
	      }
	      $timeout(function () {
	        // scope apply changes
	      });
	    }

	    var allNewFiles, dupFiles = [], prevValidFiles, prevInvalidFiles,
	      invalids = [], valids = [];

	    function removeDuplicates() {
	      function equals(f1, f2) {
	        return f1.name === f2.name && (f1.$ngfOrigSize || f1.size) === (f2.$ngfOrigSize || f2.size) &&
	          f1.type === f2.type;
	      }

	      function isInPrevFiles(f) {
	        var j;
	        for (j = 0; j < prevValidFiles.length; j++) {
	          if (equals(f, prevValidFiles[j])) {
	            return true;
	          }
	        }
	        for (j = 0; j < prevInvalidFiles.length; j++) {
	          if (equals(f, prevInvalidFiles[j])) {
	            return true;
	          }
	        }
	        return false;
	      }

	      if (files) {
	        allNewFiles = [];
	        dupFiles = [];
	        for (var i = 0; i < files.length; i++) {
	          if (isInPrevFiles(files[i])) {
	            dupFiles.push(files[i]);
	          } else {
	            allNewFiles.push(files[i]);
	          }
	        }
	      }
	    }

	    function toArray(v) {
	      return angular.isArray(v) ? v : [v];
	    }

	    function resizeAndUpdate() {
	      function updateModel() {
	        $timeout(function () {
	          update(keep ? prevValidFiles.concat(valids) : valids,
	            keep ? prevInvalidFiles.concat(invalids) : invalids,
	            files, dupFiles, isSingleModel);
	        }, options && options.debounce ? options.debounce.change || options.debounce : 0);
	      }

	      resize(validateAfterResize ? allNewFiles : valids, attr, scope).then(function () {
	        if (validateAfterResize) {
	          upload.validate(allNewFiles, keep ? prevValidFiles.length : 0, ngModel, attr, scope)
	            .then(function (validationResult) {
	              valids = validationResult.validsFiles;
	              invalids = validationResult.invalidsFiles;
	              updateModel();
	            });
	        } else {
	          updateModel();
	        }
	      }, function (e) {
	        throw 'Could not resize files ' + e;
	      });
	    }

	    prevValidFiles = attr.$$ngfPrevValidFiles || [];
	    prevInvalidFiles = attr.$$ngfPrevInvalidFiles || [];
	    if (ngModel && ngModel.$modelValue) {
	      prevValidFiles = toArray(ngModel.$modelValue);
	    }

	    var keep = upload.attrGetter('ngfKeep', attr, scope);
	    allNewFiles = (files || []).slice(0);
	    if (keep === 'distinct' || upload.attrGetter('ngfKeepDistinct', attr, scope) === true) {
	      removeDuplicates(attr, scope);
	    }

	    var isSingleModel = !keep && !upload.attrGetter('ngfMultiple', attr, scope) && !upload.attrGetter('multiple', attr);

	    if (keep && !allNewFiles.length) return;

	    upload.attrGetter('ngfBeforeModelChange', attr, scope, {
	      $files: files,
	      $file: files && files.length ? files[0] : null,
	      $newFiles: allNewFiles,
	      $duplicateFiles: dupFiles,
	      $event: evt
	    });

	    var validateAfterResize = upload.attrGetter('ngfValidateAfterResize', attr, scope);

	    var options = upload.attrGetter('ngfModelOptions', attr, scope);
	    upload.validate(allNewFiles, keep ? prevValidFiles.length : 0, ngModel, attr, scope)
	      .then(function (validationResult) {
	      if (noDelay) {
	        update(allNewFiles, [], files, dupFiles, isSingleModel);
	      } else {
	        if ((!options || !options.allowInvalid) && !validateAfterResize) {
	          valids = validationResult.validFiles;
	          invalids = validationResult.invalidFiles;
	        } else {
	          valids = allNewFiles;
	        }
	        if (upload.attrGetter('ngfFixOrientation', attr, scope) && upload.isExifSupported()) {
	          applyExifRotations(valids, attr, scope).then(function () {
	            resizeAndUpdate();
	          });
	        } else {
	          resizeAndUpdate();
	        }
	      }
	    });
	  };

	  return upload;
	}]);

	ngFileUpload.directive('ngfSelect', ['$parse', '$timeout', '$compile', 'Upload', function ($parse, $timeout, $compile, Upload) {
	  var generatedElems = [];

	  function isDelayedClickSupported(ua) {
	    // fix for android native browser < 4.4 and safari windows
	    var m = ua.match(/Android[^\d]*(\d+)\.(\d+)/);
	    if (m && m.length > 2) {
	      var v = Upload.defaults.androidFixMinorVersion || 4;
	      return parseInt(m[1]) < 4 || (parseInt(m[1]) === v && parseInt(m[2]) < v);
	    }

	    // safari on windows
	    return ua.indexOf('Chrome') === -1 && /.*Windows.*Safari.*/.test(ua);
	  }

	  function linkFileSelect(scope, elem, attr, ngModel, $parse, $timeout, $compile, upload) {
	    /** @namespace attr.ngfSelect */
	    /** @namespace attr.ngfChange */
	    /** @namespace attr.ngModel */
	    /** @namespace attr.ngfModelOptions */
	    /** @namespace attr.ngfMultiple */
	    /** @namespace attr.ngfCapture */
	    /** @namespace attr.ngfValidate */
	    /** @namespace attr.ngfKeep */
	    var attrGetter = function (name, scope) {
	      return upload.attrGetter(name, attr, scope);
	    };

	    function isInputTypeFile() {
	      return elem[0].tagName.toLowerCase() === 'input' && attr.type && attr.type.toLowerCase() === 'file';
	    }

	    function fileChangeAttr() {
	      return attrGetter('ngfChange') || attrGetter('ngfSelect');
	    }

	    function changeFn(evt) {
	      if (upload.shouldUpdateOn('change', attr, scope)) {
	        var fileList = evt.__files_ || (evt.target && evt.target.files), files = [];
	        /* Handle duplicate call in  IE11 */
	        if (!fileList) return;
	        for (var i = 0; i < fileList.length; i++) {
	          files.push(fileList[i]);
	        }
	        upload.updateModel(ngModel, attr, scope, fileChangeAttr(),
	          files.length ? files : null, evt);
	      }
	    }

	    upload.registerModelChangeValidator(ngModel, attr, scope);

	    var unwatches = [];
	    if (attrGetter('ngfMultiple')) {
	      unwatches.push(scope.$watch(attrGetter('ngfMultiple'), function () {
	        fileElem.attr('multiple', attrGetter('ngfMultiple', scope));
	      }));
	    }
	    if (attrGetter('ngfCapture')) {
	      unwatches.push(scope.$watch(attrGetter('ngfCapture'), function () {
	        fileElem.attr('capture', attrGetter('ngfCapture', scope));
	      }));
	    }
	    if (attrGetter('ngfAccept')) {
	      unwatches.push(scope.$watch(attrGetter('ngfAccept'), function () {
	        fileElem.attr('accept', attrGetter('ngfAccept', scope));
	      }));
	    }
	    attr.$observe('accept', function () {
	      fileElem.attr('accept', attrGetter('accept'));
	    });
	    unwatches.push(function () {
	      if (attr.$$observers) delete attr.$$observers.accept;
	    });
	    function bindAttrToFileInput(fileElem) {
	      for (var i = 0; i < elem[0].attributes.length; i++) {
	        var attribute = elem[0].attributes[i];
	        if (attribute.name !== 'type' && attribute.name !== 'class' && attribute.name !== 'style') {
	          if (attribute.value == null || attribute.value === '') {
	            if (attribute.name === 'required') attribute.value = 'required';
	            if (attribute.name === 'multiple') attribute.value = 'multiple';
	          }
	          fileElem.attr(attribute.name, attribute.name === 'id' ? 'ngf-' + attribute.value : attribute.value);
	        }
	      }
	    }

	    function createFileInput() {
	      if (isInputTypeFile()) {
	        return elem;
	      }

	      var fileElem = angular.element('<input type="file">');

	      bindAttrToFileInput(fileElem);

	      var label = angular.element('<label>upload</label>');
	      label.css('visibility', 'hidden').css('position', 'absolute').css('overflow', 'hidden')
	        .css('width', '0px').css('height', '0px').css('border', 'none')
	        .css('margin', '0px').css('padding', '0px').attr('tabindex', '-1');
	      if (elem.attr('id')) {
	        label.attr('id', 'ngf-label-' + elem.attr('id'));
	      }
	      generatedElems.push({el: elem, ref: label});

	      document.body.appendChild(label.append(fileElem)[0]);

	      return fileElem;
	    }

	    function clickHandler(evt) {
	      if (elem.attr('disabled')) return false;
	      if (attrGetter('ngfSelectDisabled', scope)) return;

	      var r = detectSwipe(evt);
	      // prevent the click if it is a swipe
	      if (r != null) return r;

	      resetModel(evt);

	      // fix for md when the element is removed from the DOM and added back #460
	      try {
	        if (!isInputTypeFile() && !document.body.contains(fileElem[0])) {
	          generatedElems.push({el: elem, ref: fileElem.parent()});
	          document.body.appendChild(fileElem.parent()[0]);
	          fileElem.bind('change', changeFn);
	        }
	      } catch(e){/*ignore*/}

	      if (isDelayedClickSupported(navigator.userAgent)) {
	        setTimeout(function () {
	          fileElem[0].click();
	        }, 0);
	      } else {
	        fileElem[0].click();
	      }

	      return false;
	    }


	    var initialTouchStartY = 0;
	    var initialTouchStartX = 0;

	    function detectSwipe(evt) {
	      var touches = evt.changedTouches || (evt.originalEvent && evt.originalEvent.changedTouches);
	      if (touches) {
	        if (evt.type === 'touchstart') {
	          initialTouchStartX = touches[0].clientX;
	          initialTouchStartY = touches[0].clientY;
	          return true; // don't block event default
	        } else {
	          // prevent scroll from triggering event
	          if (evt.type === 'touchend') {
	            var currentX = touches[0].clientX;
	            var currentY = touches[0].clientY;
	            if ((Math.abs(currentX - initialTouchStartX) > 20) ||
	            (Math.abs(currentY - initialTouchStartY) > 20)) {
	              evt.stopPropagation();
	              evt.preventDefault();
	              return false;
	            }
	          }
	          return true;
	        }
	      }
	    }

	    var fileElem = elem;

	    function resetModel(evt) {
	      if (upload.shouldUpdateOn('click', attr, scope) && fileElem.val()) {
	        fileElem.val(null);
	        upload.updateModel(ngModel, attr, scope, fileChangeAttr(), null, evt, true);
	      }
	    }

	    if (!isInputTypeFile()) {
	      fileElem = createFileInput();
	    }
	    fileElem.bind('change', changeFn);

	    if (!isInputTypeFile()) {
	      elem.bind('click touchstart touchend', clickHandler);
	    } else {
	      elem.bind('click', resetModel);
	    }

	    function ie10SameFileSelectFix(evt) {
	      if (fileElem && !fileElem.attr('__ngf_ie10_Fix_')) {
	        if (!fileElem[0].parentNode) {
	          fileElem = null;
	          return;
	        }
	        evt.preventDefault();
	        evt.stopPropagation();
	        fileElem.unbind('click');
	        var clone = fileElem.clone();
	        fileElem.replaceWith(clone);
	        fileElem = clone;
	        fileElem.attr('__ngf_ie10_Fix_', 'true');
	        fileElem.bind('change', changeFn);
	        fileElem.bind('click', ie10SameFileSelectFix);
	        fileElem[0].click();
	        return false;
	      } else {
	        fileElem.removeAttr('__ngf_ie10_Fix_');
	      }
	    }

	    if (navigator.appVersion.indexOf('MSIE 10') !== -1) {
	      fileElem.bind('click', ie10SameFileSelectFix);
	    }

	    if (ngModel) ngModel.$formatters.push(function (val) {
	      if (val == null || val.length === 0) {
	        if (fileElem.val()) {
	          fileElem.val(null);
	        }
	      }
	      return val;
	    });

	    scope.$on('$destroy', function () {
	      if (!isInputTypeFile()) fileElem.parent().remove();
	      angular.forEach(unwatches, function (unwatch) {
	        unwatch();
	      });
	    });

	    $timeout(function () {
	      for (var i = 0; i < generatedElems.length; i++) {
	        var g = generatedElems[i];
	        if (!document.body.contains(g.el[0])) {
	          generatedElems.splice(i, 1);
	          g.ref.remove();
	        }
	      }
	    });

	    if (window.FileAPI && window.FileAPI.ngfFixIE) {
	      window.FileAPI.ngfFixIE(elem, fileElem, changeFn);
	    }
	  }

	  return {
	    restrict: 'AEC',
	    require: '?ngModel',
	    link: function (scope, elem, attr, ngModel) {
	      linkFileSelect(scope, elem, attr, ngModel, $parse, $timeout, $compile, Upload);
	    }
	  };
	}]);

	(function () {

	  ngFileUpload.service('UploadDataUrl', ['UploadBase', '$timeout', '$q', function (UploadBase, $timeout, $q) {
	    var upload = UploadBase;
	    upload.base64DataUrl = function (file) {
	      if (angular.isArray(file)) {
	        var d = $q.defer(), count = 0;
	        angular.forEach(file, function (f) {
	          upload.dataUrl(f, true)['finally'](function () {
	            count++;
	            if (count === file.length) {
	              var urls = [];
	              angular.forEach(file, function (ff) {
	                urls.push(ff.$ngfDataUrl);
	              });
	              d.resolve(urls, file);
	            }
	          });
	        });
	        return d.promise;
	      } else {
	        return upload.dataUrl(file, true);
	      }
	    };
	    upload.dataUrl = function (file, disallowObjectUrl) {
	      if (!file) return upload.emptyPromise(file, file);
	      if ((disallowObjectUrl && file.$ngfDataUrl != null) || (!disallowObjectUrl && file.$ngfBlobUrl != null)) {
	        return upload.emptyPromise(disallowObjectUrl ? file.$ngfDataUrl : file.$ngfBlobUrl, file);
	      }
	      var p = disallowObjectUrl ? file.$$ngfDataUrlPromise : file.$$ngfBlobUrlPromise;
	      if (p) return p;

	      var deferred = $q.defer();
	      $timeout(function () {
	        if (window.FileReader && file &&
	          (!window.FileAPI || navigator.userAgent.indexOf('MSIE 8') === -1 || file.size < 20000) &&
	          (!window.FileAPI || navigator.userAgent.indexOf('MSIE 9') === -1 || file.size < 4000000)) {
	          //prefer URL.createObjectURL for handling refrences to files of all sizes
	          //since it doesn´t build a large string in memory
	          var URL = window.URL || window.webkitURL;
	          if (URL && URL.createObjectURL && !disallowObjectUrl) {
	            var url;
	            try {
	              url = URL.createObjectURL(file);
	            } catch (e) {
	              $timeout(function () {
	                file.$ngfBlobUrl = '';
	                deferred.reject();
	              });
	              return;
	            }
	            $timeout(function () {
	              file.$ngfBlobUrl = url;
	              if (url) {
	                deferred.resolve(url, file);
	                upload.blobUrls = upload.blobUrls || [];
	                upload.blobUrlsTotalSize = upload.blobUrlsTotalSize || 0;
	                upload.blobUrls.push({url: url, size: file.size});
	                upload.blobUrlsTotalSize += file.size || 0;
	                var maxMemory = upload.defaults.blobUrlsMaxMemory || 268435456;
	                var maxLength = upload.defaults.blobUrlsMaxQueueSize || 200;
	                while ((upload.blobUrlsTotalSize > maxMemory || upload.blobUrls.length > maxLength) && upload.blobUrls.length > 1) {
	                  var obj = upload.blobUrls.splice(0, 1)[0];
	                  URL.revokeObjectURL(obj.url);
	                  upload.blobUrlsTotalSize -= obj.size;
	                }
	              }
	            });
	          } else {
	            var fileReader = new FileReader();
	            fileReader.onload = function (e) {
	              $timeout(function () {
	                file.$ngfDataUrl = e.target.result;
	                deferred.resolve(e.target.result, file);
	                $timeout(function () {
	                  delete file.$ngfDataUrl;
	                }, 1000);
	              });
	            };
	            fileReader.onerror = function () {
	              $timeout(function () {
	                file.$ngfDataUrl = '';
	                deferred.reject();
	              });
	            };
	            fileReader.readAsDataURL(file);
	          }
	        } else {
	          $timeout(function () {
	            file[disallowObjectUrl ? '$ngfDataUrl' : '$ngfBlobUrl'] = '';
	            deferred.reject();
	          });
	        }
	      });

	      if (disallowObjectUrl) {
	        p = file.$$ngfDataUrlPromise = deferred.promise;
	      } else {
	        p = file.$$ngfBlobUrlPromise = deferred.promise;
	      }
	      p['finally'](function () {
	        delete file[disallowObjectUrl ? '$$ngfDataUrlPromise' : '$$ngfBlobUrlPromise'];
	      });
	      return p;
	    };
	    return upload;
	  }]);

	  function getTagType(el) {
	    if (el.tagName.toLowerCase() === 'img') return 'image';
	    if (el.tagName.toLowerCase() === 'audio') return 'audio';
	    if (el.tagName.toLowerCase() === 'video') return 'video';
	    return /./;
	  }

	  function linkFileDirective(Upload, $timeout, scope, elem, attr, directiveName, resizeParams, isBackground) {
	    function constructDataUrl(file) {
	      var disallowObjectUrl = Upload.attrGetter('ngfNoObjectUrl', attr, scope);
	      Upload.dataUrl(file, disallowObjectUrl)['finally'](function () {
	        $timeout(function () {
	          var src = (disallowObjectUrl ? file.$ngfDataUrl : file.$ngfBlobUrl) || file.$ngfDataUrl;
	          if (isBackground) {
	            elem.css('background-image', 'url(\'' + (src || '') + '\')');
	          } else {
	            elem.attr('src', src);
	          }
	          if (src) {
	            elem.removeClass('ng-hide');
	          } else {
	            elem.addClass('ng-hide');
	          }
	        });
	      });
	    }

	    $timeout(function () {
	      var unwatch = scope.$watch(attr[directiveName], function (file) {
	        var size = resizeParams;
	        if (directiveName === 'ngfThumbnail') {
	          if (!size) {
	            size = {width: elem[0].naturalWidth || elem[0].clientWidth,
	              height: elem[0].naturalHeight || elem[0].clientHeight};
	          }
	          if (size.width === 0 && window.getComputedStyle) {
	            var style = getComputedStyle(elem[0]);
	            size = {
	              width: parseInt(style.width.slice(0, -2)),
	              height: parseInt(style.height.slice(0, -2))
	            };
	          }
	        }

	        if (angular.isString(file)) {
	          elem.removeClass('ng-hide');
	          if (isBackground) {
	            return elem.css('background-image', 'url(\'' + file + '\')');
	          } else {
	            return elem.attr('src', file);
	          }
	        }
	        if (file && file.type && file.type.search(getTagType(elem[0])) === 0 &&
	          (!isBackground || file.type.indexOf('image') === 0)) {
	          if (size && Upload.isResizeSupported()) {
	            size.resizeIf = function (width, height) {
	              return Upload.attrGetter('ngfResizeIf', attr, scope,
	                {$width: width, $height: height, $file: file});
	            };
	            Upload.resize(file, size).then(
	              function (f) {
	                constructDataUrl(f);
	              }, function (e) {
	                throw e;
	              }
	            );
	          } else {
	            constructDataUrl(file);
	          }
	        } else {
	          elem.addClass('ng-hide');
	        }
	      });

	      scope.$on('$destroy', function () {
	        unwatch();
	      });
	    });
	  }


	  /** @namespace attr.ngfSrc */
	  /** @namespace attr.ngfNoObjectUrl */
	  ngFileUpload.directive('ngfSrc', ['Upload', '$timeout', function (Upload, $timeout) {
	    return {
	      restrict: 'AE',
	      link: function (scope, elem, attr) {
	        linkFileDirective(Upload, $timeout, scope, elem, attr, 'ngfSrc',
	          Upload.attrGetter('ngfResize', attr, scope), false);
	      }
	    };
	  }]);

	  /** @namespace attr.ngfBackground */
	  /** @namespace attr.ngfNoObjectUrl */
	  ngFileUpload.directive('ngfBackground', ['Upload', '$timeout', function (Upload, $timeout) {
	    return {
	      restrict: 'AE',
	      link: function (scope, elem, attr) {
	        linkFileDirective(Upload, $timeout, scope, elem, attr, 'ngfBackground',
	          Upload.attrGetter('ngfResize', attr, scope), true);
	      }
	    };
	  }]);

	  /** @namespace attr.ngfThumbnail */
	  /** @namespace attr.ngfAsBackground */
	  /** @namespace attr.ngfSize */
	  /** @namespace attr.ngfNoObjectUrl */
	  ngFileUpload.directive('ngfThumbnail', ['Upload', '$timeout', function (Upload, $timeout) {
	    return {
	      restrict: 'AE',
	      link: function (scope, elem, attr) {
	        var size = Upload.attrGetter('ngfSize', attr, scope);
	        linkFileDirective(Upload, $timeout, scope, elem, attr, 'ngfThumbnail', size,
	          Upload.attrGetter('ngfAsBackground', attr, scope));
	      }
	    };
	  }]);

	  ngFileUpload.config(['$compileProvider', function ($compileProvider) {
	    if ($compileProvider.imgSrcSanitizationWhitelist) $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/);
	    if ($compileProvider.aHrefSanitizationWhitelist) $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/);
	  }]);

	  ngFileUpload.filter('ngfDataUrl', ['UploadDataUrl', '$sce', function (UploadDataUrl, $sce) {
	    return function (file, disallowObjectUrl, trustedUrl) {
	      if (angular.isString(file)) {
	        return $sce.trustAsResourceUrl(file);
	      }
	      var src = file && ((disallowObjectUrl ? file.$ngfDataUrl : file.$ngfBlobUrl) || file.$ngfDataUrl);
	      if (file && !src) {
	        if (!file.$ngfDataUrlFilterInProgress && angular.isObject(file)) {
	          file.$ngfDataUrlFilterInProgress = true;
	          UploadDataUrl.dataUrl(file, disallowObjectUrl);
	        }
	        return '';
	      }
	      if (file) delete file.$ngfDataUrlFilterInProgress;
	      return (file && src ? (trustedUrl ? $sce.trustAsResourceUrl(src) : src) : file) || '';
	    };
	  }]);

	})();

	ngFileUpload.service('UploadValidate', ['UploadDataUrl', '$q', '$timeout', function (UploadDataUrl, $q, $timeout) {
	  var upload = UploadDataUrl;

	  function globStringToRegex(str) {
	    var regexp = '', excludes = [];
	    if (str.length > 2 && str[0] === '/' && str[str.length - 1] === '/') {
	      regexp = str.substring(1, str.length - 1);
	    } else {
	      var split = str.split(',');
	      if (split.length > 1) {
	        for (var i = 0; i < split.length; i++) {
	          var r = globStringToRegex(split[i]);
	          if (r.regexp) {
	            regexp += '(' + r.regexp + ')';
	            if (i < split.length - 1) {
	              regexp += '|';
	            }
	          } else {
	            excludes = excludes.concat(r.excludes);
	          }
	        }
	      } else {
	        if (str.indexOf('!') === 0) {
	          excludes.push('^((?!' + globStringToRegex(str.substring(1)).regexp + ').)*$');
	        } else {
	          if (str.indexOf('.') === 0) {
	            str = '*' + str;
	          }
	          regexp = '^' + str.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&') + '$';
	          regexp = regexp.replace(/\\\*/g, '.*').replace(/\\\?/g, '.');
	        }
	      }
	    }
	    return {regexp: regexp, excludes: excludes};
	  }

	  upload.validatePattern = function (file, val) {
	    if (!val) {
	      return true;
	    }
	    var pattern = globStringToRegex(val), valid = true;
	    if (pattern.regexp && pattern.regexp.length) {
	      var regexp = new RegExp(pattern.regexp, 'i');
	      valid = (file.type != null && regexp.test(file.type)) ||
	        (file.name != null && regexp.test(file.name));
	    }
	    var len = pattern.excludes.length;
	    while (len--) {
	      var exclude = new RegExp(pattern.excludes[len], 'i');
	      valid = valid && (file.type == null || exclude.test(file.type)) &&
	        (file.name == null || exclude.test(file.name));
	    }
	    return valid;
	  };

	  upload.ratioToFloat = function (val) {
	    var r = val.toString(), xIndex = r.search(/[x:]/i);
	    if (xIndex > -1) {
	      r = parseFloat(r.substring(0, xIndex)) / parseFloat(r.substring(xIndex + 1));
	    } else {
	      r = parseFloat(r);
	    }
	    return r;
	  };

	  upload.registerModelChangeValidator = function (ngModel, attr, scope) {
	    if (ngModel) {
	      ngModel.$formatters.push(function (files) {
	        if (ngModel.$dirty) {
	          if (files && !angular.isArray(files)) {
	            files = [files];
	          }
	          upload.validate(files, 0, ngModel, attr, scope).then(function () {
	            upload.applyModelValidation(ngModel, files);
	          });
	        }
	      });
	    }
	  };

	  function markModelAsDirty(ngModel, files) {
	    if (files != null && !ngModel.$dirty) {
	      if (ngModel.$setDirty) {
	        ngModel.$setDirty();
	      } else {
	        ngModel.$dirty = true;
	      }
	    }
	  }

	  upload.applyModelValidation = function (ngModel, files) {
	    markModelAsDirty(ngModel, files);
	    angular.forEach(ngModel.$ngfValidations, function (validation) {
	      ngModel.$setValidity(validation.name, validation.valid);
	    });
	  };

	  upload.getValidationAttr = function (attr, scope, name, validationName, file) {
	    var dName = 'ngf' + name[0].toUpperCase() + name.substr(1);
	    var val = upload.attrGetter(dName, attr, scope, {$file: file});
	    if (val == null) {
	      val = upload.attrGetter('ngfValidate', attr, scope, {$file: file});
	      if (val) {
	        var split = (validationName || name).split('.');
	        val = val[split[0]];
	        if (split.length > 1) {
	          val = val && val[split[1]];
	        }
	      }
	    }
	    return val;
	  };

	  upload.validate = function (files, prevLength, ngModel, attr, scope) {
	    ngModel = ngModel || {};
	    ngModel.$ngfValidations = ngModel.$ngfValidations || [];

	    angular.forEach(ngModel.$ngfValidations, function (v) {
	      v.valid = true;
	    });

	    var attrGetter = function (name, params) {
	      return upload.attrGetter(name, attr, scope, params);
	    };

	    var ignoredErrors = (upload.attrGetter('ngfIgnoreInvalid', attr, scope) || '').split(' ');
	    var runAllValidation = upload.attrGetter('ngfRunAllValidations', attr, scope);

	    if (files == null || files.length === 0) {
	      return upload.emptyPromise({'validFiles': files, 'invalidFiles': []});
	    }

	    files = files.length === undefined ? [files] : files.slice(0);
	    var invalidFiles = [];

	    function validateSync(name, validationName, fn) {
	      if (files) {
	        var i = files.length, valid = null;
	        while (i--) {
	          var file = files[i];
	          if (file) {
	            var val = upload.getValidationAttr(attr, scope, name, validationName, file);
	            if (val != null) {
	              if (!fn(file, val, i)) {
	                if (ignoredErrors.indexOf(name) === -1) {
	                  file.$error = name;
	                  (file.$errorMessages = (file.$errorMessages || {}))[name] = true;
	                  file.$errorParam = val;
	                  if (invalidFiles.indexOf(file) === -1) {
	                    invalidFiles.push(file);
	                  }
	                  if (!runAllValidation) {
	                    files.splice(i, 1);
	                  }
	                  valid = false;
	                } else {
	                  files.splice(i, 1);
	                }
	              }
	            }
	          }
	        }
	        if (valid !== null) {
	          ngModel.$ngfValidations.push({name: name, valid: valid});
	        }
	      }
	    }

	    validateSync('pattern', null, upload.validatePattern);
	    validateSync('minSize', 'size.min', function (file, val) {
	      return file.size + 0.1 >= upload.translateScalars(val);
	    });
	    validateSync('maxSize', 'size.max', function (file, val) {
	      return file.size - 0.1 <= upload.translateScalars(val);
	    });
	    var totalSize = 0;
	    validateSync('maxTotalSize', null, function (file, val) {
	      totalSize += file.size;
	      if (totalSize > upload.translateScalars(val)) {
	        files.splice(0, files.length);
	        return false;
	      }
	      return true;
	    });

	    validateSync('validateFn', null, function (file, r) {
	      return r === true || r === null || r === '';
	    });

	    if (!files.length) {
	      return upload.emptyPromise({'validFiles': [], 'invalidFiles': invalidFiles});
	    }

	    function validateAsync(name, validationName, type, asyncFn, fn) {
	      function resolveResult(defer, file, val) {
	        function resolveInternal(fn) {
	          if (fn()) {
	            if (ignoredErrors.indexOf(name) === -1) {
	              file.$error = name;
	              (file.$errorMessages = (file.$errorMessages || {}))[name] = true;
	              file.$errorParam = val;
	              if (invalidFiles.indexOf(file) === -1) {
	                invalidFiles.push(file);
	              }
	              if (!runAllValidation) {
	                files.splice(files.indexOf(file), 1);
	              }
	              defer.resolve(false);
	            } else {
	              files.splice(files.indexOf(file), 1);
	              defer.resolve(true);
	            }
	          } else {
	            defer.resolve(true);
	          }
	        }

	        if (val != null) {
	          asyncFn(file, val).then(function (d) {
	            resolveInternal(function () {
	              return !fn(d, val);
	            });
	          }, function () {
	            resolveInternal(function () {
	              return attrGetter('ngfValidateForce', {$file: file});
	            });
	          });
	        } else {
	          defer.resolve(true);
	        }
	      }

	      var promises = [upload.emptyPromise(true)];
	      if (files) {
	        files = files.length === undefined ? [files] : files;
	        angular.forEach(files, function (file) {
	          var defer = $q.defer();
	          promises.push(defer.promise);
	          if (type && (file.type == null || file.type.search(type) !== 0)) {
	            defer.resolve(true);
	            return;
	          }
	          if (name === 'dimensions' && upload.attrGetter('ngfDimensions', attr) != null) {
	            upload.imageDimensions(file).then(function (d) {
	              resolveResult(defer, file,
	                attrGetter('ngfDimensions', {$file: file, $width: d.width, $height: d.height}));
	            }, function () {
	              defer.resolve(false);
	            });
	          } else if (name === 'duration' && upload.attrGetter('ngfDuration', attr) != null) {
	            upload.mediaDuration(file).then(function (d) {
	              resolveResult(defer, file,
	                attrGetter('ngfDuration', {$file: file, $duration: d}));
	            }, function () {
	              defer.resolve(false);
	            });
	          } else {
	            resolveResult(defer, file,
	              upload.getValidationAttr(attr, scope, name, validationName, file));
	          }
	        });
	      }
	      var deffer = $q.defer();
	      $q.all(promises).then(function (values) {
	        var isValid = true;
	        for (var i = 0; i < values.length; i++) {
	          if (!values[i]) {
	            isValid = false;
	            break;
	          }
	        }
	        ngModel.$ngfValidations.push({name: name, valid: isValid});
	        deffer.resolve(isValid);
	      });
	      return deffer.promise;
	    }

	    var deffer = $q.defer();
	    var promises = [];

	    promises.push(validateAsync('maxHeight', 'height.max', /image/,
	      this.imageDimensions, function (d, val) {
	        return d.height <= val;
	      }));
	    promises.push(validateAsync('minHeight', 'height.min', /image/,
	      this.imageDimensions, function (d, val) {
	        return d.height >= val;
	      }));
	    promises.push(validateAsync('maxWidth', 'width.max', /image/,
	      this.imageDimensions, function (d, val) {
	        return d.width <= val;
	      }));
	    promises.push(validateAsync('minWidth', 'width.min', /image/,
	      this.imageDimensions, function (d, val) {
	        return d.width >= val;
	      }));
	    promises.push(validateAsync('dimensions', null, /image/,
	      function (file, val) {
	        return upload.emptyPromise(val);
	      }, function (r) {
	        return r;
	      }));
	    promises.push(validateAsync('ratio', null, /image/,
	      this.imageDimensions, function (d, val) {
	        var split = val.toString().split(','), valid = false;
	        for (var i = 0; i < split.length; i++) {
	          if (Math.abs((d.width / d.height) - upload.ratioToFloat(split[i])) < 0.01) {
	            valid = true;
	          }
	        }
	        return valid;
	      }));
	    promises.push(validateAsync('maxRatio', 'ratio.max', /image/,
	      this.imageDimensions, function (d, val) {
	        return (d.width / d.height) - upload.ratioToFloat(val) < 0.0001;
	      }));
	    promises.push(validateAsync('minRatio', 'ratio.min', /image/,
	      this.imageDimensions, function (d, val) {
	        return (d.width / d.height) - upload.ratioToFloat(val) > -0.0001;
	      }));
	    promises.push(validateAsync('maxDuration', 'duration.max', /audio|video/,
	      this.mediaDuration, function (d, val) {
	        return d <= upload.translateScalars(val);
	      }));
	    promises.push(validateAsync('minDuration', 'duration.min', /audio|video/,
	      this.mediaDuration, function (d, val) {
	        return d >= upload.translateScalars(val);
	      }));
	    promises.push(validateAsync('duration', null, /audio|video/,
	      function (file, val) {
	        return upload.emptyPromise(val);
	      }, function (r) {
	        return r;
	      }));

	    promises.push(validateAsync('validateAsyncFn', null, null,
	      function (file, val) {
	        return val;
	      }, function (r) {
	        return r === true || r === null || r === '';
	      }));

	    $q.all(promises).then(function () {

	      if (runAllValidation) {
	        for (var i = 0; i < files.length; i++) {
	          var file = files[i];
	          if (file.$error) {
	            files.splice(i--, 1);
	          }
	        }
	      }

	      runAllValidation = false;
	      validateSync('maxFiles', null, function (file, val, i) {
	        return prevLength + i < val;
	      });

	      deffer.resolve({'validFiles': files, 'invalidFiles': invalidFiles});
	    });
	    return deffer.promise;
	  };

	  upload.imageDimensions = function (file) {
	    if (file.$ngfWidth && file.$ngfHeight) {
	      var d = $q.defer();
	      $timeout(function () {
	        d.resolve({width: file.$ngfWidth, height: file.$ngfHeight});
	      });
	      return d.promise;
	    }
	    if (file.$ngfDimensionPromise) return file.$ngfDimensionPromise;

	    var deferred = $q.defer();
	    $timeout(function () {
	      if (file.type.indexOf('image') !== 0) {
	        deferred.reject('not image');
	        return;
	      }
	      upload.dataUrl(file).then(function (dataUrl) {
	        var img = angular.element('<img>').attr('src', dataUrl)
	          .css('visibility', 'hidden').css('position', 'fixed')
	          .css('max-width', 'none !important').css('max-height', 'none !important');

	        function success() {
	          var width = img[0].naturalWidth || img[0].clientWidth;
	          var height = img[0].naturalHeight || img[0].clientHeight;
	          img.remove();
	          file.$ngfWidth = width;
	          file.$ngfHeight = height;
	          deferred.resolve({width: width, height: height});
	        }

	        function error() {
	          img.remove();
	          deferred.reject('load error');
	        }

	        img.on('load', success);
	        img.on('error', error);

	        var secondsCounter = 0;
	        function checkLoadErrorInCaseOfNoCallback() {
	          $timeout(function () {
	            if (img[0].parentNode) {
	              if (img[0].clientWidth) {
	                success();
	              } else if (secondsCounter++ > 10) {
	                error();
	              } else {
	                checkLoadErrorInCaseOfNoCallback();
	              }
	            }
	          }, 1000);
	        }

	        checkLoadErrorInCaseOfNoCallback();

	        angular.element(document.getElementsByTagName('body')[0]).append(img);
	      }, function () {
	        deferred.reject('load error');
	      });
	    });

	    file.$ngfDimensionPromise = deferred.promise;
	    file.$ngfDimensionPromise['finally'](function () {
	      delete file.$ngfDimensionPromise;
	    });
	    return file.$ngfDimensionPromise;
	  };

	  upload.mediaDuration = function (file) {
	    if (file.$ngfDuration) {
	      var d = $q.defer();
	      $timeout(function () {
	        d.resolve(file.$ngfDuration);
	      });
	      return d.promise;
	    }
	    if (file.$ngfDurationPromise) return file.$ngfDurationPromise;

	    var deferred = $q.defer();
	    $timeout(function () {
	      if (file.type.indexOf('audio') !== 0 && file.type.indexOf('video') !== 0) {
	        deferred.reject('not media');
	        return;
	      }
	      upload.dataUrl(file).then(function (dataUrl) {
	        var el = angular.element(file.type.indexOf('audio') === 0 ? '<audio>' : '<video>')
	          .attr('src', dataUrl).css('visibility', 'none').css('position', 'fixed');

	        function success() {
	          var duration = el[0].duration;
	          file.$ngfDuration = duration;
	          el.remove();
	          deferred.resolve(duration);
	        }

	        function error() {
	          el.remove();
	          deferred.reject('load error');
	        }

	        el.on('loadedmetadata', success);
	        el.on('error', error);
	        var count = 0;

	        function checkLoadError() {
	          $timeout(function () {
	            if (el[0].parentNode) {
	              if (el[0].duration) {
	                success();
	              } else if (count > 10) {
	                error();
	              } else {
	                checkLoadError();
	              }
	            }
	          }, 1000);
	        }

	        checkLoadError();

	        angular.element(document.body).append(el);
	      }, function () {
	        deferred.reject('load error');
	      });
	    });

	    file.$ngfDurationPromise = deferred.promise;
	    file.$ngfDurationPromise['finally'](function () {
	      delete file.$ngfDurationPromise;
	    });
	    return file.$ngfDurationPromise;
	  };
	  return upload;
	}
	]);

	ngFileUpload.service('UploadResize', ['UploadValidate', '$q', function (UploadValidate, $q) {
	  var upload = UploadValidate;

	  /**
	   * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
	   * images to fit into a certain area.
	   * Source:  http://stackoverflow.com/a/14731922
	   *
	   * @param {Number} srcWidth Source area width
	   * @param {Number} srcHeight Source area height
	   * @param {Number} maxWidth Nestable area maximum available width
	   * @param {Number} maxHeight Nestable area maximum available height
	   * @return {Object} { width, height }
	   */
	  var calculateAspectRatioFit = function (srcWidth, srcHeight, maxWidth, maxHeight, centerCrop) {
	    var ratio = centerCrop ? Math.max(maxWidth / srcWidth, maxHeight / srcHeight) :
	      Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
	    return {
	      width: srcWidth * ratio, height: srcHeight * ratio,
	      marginX: srcWidth * ratio - maxWidth, marginY: srcHeight * ratio - maxHeight
	    };
	  };

	  // Extracted from https://github.com/romelgomez/angular-firebase-image-upload/blob/master/app/scripts/fileUpload.js#L89
	  var resize = function (imagen, width, height, quality, type, ratio, centerCrop, resizeIf) {
	    var deferred = $q.defer();
	    var canvasElement = document.createElement('canvas');
	    var imageElement = document.createElement('img');
	    imageElement.setAttribute('style', 'visibility:hidden;position:fixed;z-index:-100000');
	    document.body.appendChild(imageElement);

	    imageElement.onload = function () {
	      var imgWidth = imageElement.width, imgHeight = imageElement.height;
	      imageElement.parentNode.removeChild(imageElement);
	      if (resizeIf != null && resizeIf(imgWidth, imgHeight) === false) {
	        deferred.reject('resizeIf');
	        return;
	      }
	      try {
	        if (ratio) {
	          var ratioFloat = upload.ratioToFloat(ratio);
	          var imgRatio = imgWidth / imgHeight;
	          if (imgRatio < ratioFloat) {
	            width = imgWidth;
	            height = width / ratioFloat;
	          } else {
	            height = imgHeight;
	            width = height * ratioFloat;
	          }
	        }
	        if (!width) {
	          width = imgWidth;
	        }
	        if (!height) {
	          height = imgHeight;
	        }
	        var dimensions = calculateAspectRatioFit(imgWidth, imgHeight, width, height, centerCrop);
	        canvasElement.width = Math.min(dimensions.width, width);
	        canvasElement.height = Math.min(dimensions.height, height);
	        var context = canvasElement.getContext('2d');
	        context.drawImage(imageElement,
	          Math.min(0, -dimensions.marginX / 2), Math.min(0, -dimensions.marginY / 2),
	          dimensions.width, dimensions.height);
	        deferred.resolve(canvasElement.toDataURL(type || 'image/WebP', quality || 0.934));
	      } catch (e) {
	        deferred.reject(e);
	      }
	    };
	    imageElement.onerror = function () {
	      imageElement.parentNode.removeChild(imageElement);
	      deferred.reject();
	    };
	    imageElement.src = imagen;
	    return deferred.promise;
	  };

	  upload.dataUrltoBlob = function (dataurl, name, origSize) {
	    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
	      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
	    while (n--) {
	      u8arr[n] = bstr.charCodeAt(n);
	    }
	    var blob = new window.Blob([u8arr], {type: mime});
	    blob.name = name;
	    blob.$ngfOrigSize = origSize;
	    return blob;
	  };

	  upload.isResizeSupported = function () {
	    var elem = document.createElement('canvas');
	    return window.atob && elem.getContext && elem.getContext('2d') && window.Blob;
	  };

	  if (upload.isResizeSupported()) {
	    // add name getter to the blob constructor prototype
	    Object.defineProperty(window.Blob.prototype, 'name', {
	      get: function () {
	        return this.$ngfName;
	      },
	      set: function (v) {
	        this.$ngfName = v;
	      },
	      configurable: true
	    });
	  }

	  upload.resize = function (file, options) {
	    if (file.type.indexOf('image') !== 0) return upload.emptyPromise(file);

	    var deferred = $q.defer();
	    upload.dataUrl(file, true).then(function (url) {
	      resize(url, options.width, options.height, options.quality, options.type || file.type,
	        options.ratio, options.centerCrop, options.resizeIf)
	        .then(function (dataUrl) {
	          if (file.type === 'image/jpeg' && options.restoreExif !== false) {
	            try {
	              dataUrl = upload.restoreExif(url, dataUrl);
	            } catch (e) {
	              setTimeout(function () {throw e;}, 1);
	            }
	          }
	          try {
	            var blob = upload.dataUrltoBlob(dataUrl, file.name, file.size);
	            deferred.resolve(blob);
	          } catch (e) {
	            deferred.reject(e);
	          }
	        }, function (r) {
	          if (r === 'resizeIf') {
	            deferred.resolve(file);
	          }
	          deferred.reject(r);
	        });
	    }, function (e) {
	      deferred.reject(e);
	    });
	    return deferred.promise;
	  };

	  return upload;
	}]);

	(function () {
	  ngFileUpload.directive('ngfDrop', ['$parse', '$timeout', '$window', 'Upload', '$http', '$q',
	    function ($parse, $timeout, $window, Upload, $http, $q) {
	      return {
	        restrict: 'AEC',
	        require: '?ngModel',
	        link: function (scope, elem, attr, ngModel) {
	          linkDrop(scope, elem, attr, ngModel, $parse, $timeout, $window, Upload, $http, $q);
	        }
	      };
	    }]);

	  ngFileUpload.directive('ngfNoFileDrop', function () {
	    return function (scope, elem) {
	      if (dropAvailable()) elem.css('display', 'none');
	    };
	  });

	  ngFileUpload.directive('ngfDropAvailable', ['$parse', '$timeout', 'Upload', function ($parse, $timeout, Upload) {
	    return function (scope, elem, attr) {
	      if (dropAvailable()) {
	        var model = $parse(Upload.attrGetter('ngfDropAvailable', attr));
	        $timeout(function () {
	          model(scope);
	          if (model.assign) {
	            model.assign(scope, true);
	          }
	        });
	      }
	    };
	  }]);

	  function linkDrop(scope, elem, attr, ngModel, $parse, $timeout, $window, upload, $http, $q) {
	    var available = dropAvailable();

	    var attrGetter = function (name, scope, params) {
	      return upload.attrGetter(name, attr, scope, params);
	    };

	    if (attrGetter('dropAvailable')) {
	      $timeout(function () {
	        if (scope[attrGetter('dropAvailable')]) {
	          scope[attrGetter('dropAvailable')].value = available;
	        } else {
	          scope[attrGetter('dropAvailable')] = available;
	        }
	      });
	    }
	    if (!available) {
	      if (attrGetter('ngfHideOnDropNotAvailable', scope) === true) {
	        elem.css('display', 'none');
	      }
	      return;
	    }

	    function isDisabled() {
	      return elem.attr('disabled') || attrGetter('ngfDropDisabled', scope);
	    }

	    if (attrGetter('ngfSelect') == null) {
	      upload.registerModelChangeValidator(ngModel, attr, scope);
	    }

	    var leaveTimeout = null;
	    var stopPropagation = $parse(attrGetter('ngfStopPropagation'));
	    var dragOverDelay = 1;
	    var actualDragOverClass;

	    elem[0].addEventListener('dragover', function (evt) {
	      if (isDisabled() || !upload.shouldUpdateOn('drop', attr, scope)) return;
	      evt.preventDefault();
	      if (stopPropagation(scope)) evt.stopPropagation();
	      // handling dragover events from the Chrome download bar
	      if (navigator.userAgent.indexOf('Chrome') > -1) {
	        var b = evt.dataTransfer.effectAllowed;
	        evt.dataTransfer.dropEffect = ('move' === b || 'linkMove' === b) ? 'move' : 'copy';
	      }
	      $timeout.cancel(leaveTimeout);
	      if (!actualDragOverClass) {
	        actualDragOverClass = 'C';
	        calculateDragOverClass(scope, attr, evt, function (clazz) {
	          actualDragOverClass = clazz;
	          elem.addClass(actualDragOverClass);
	          attrGetter('ngfDrag', scope, {$isDragging: true, $class: actualDragOverClass, $event: evt});
	        });
	      }
	    }, false);
	    elem[0].addEventListener('dragenter', function (evt) {
	      if (isDisabled() || !upload.shouldUpdateOn('drop', attr, scope)) return;
	      evt.preventDefault();
	      if (stopPropagation(scope)) evt.stopPropagation();
	    }, false);
	    elem[0].addEventListener('dragleave', function (evt) {
	      if (isDisabled() || !upload.shouldUpdateOn('drop', attr, scope)) return;
	      evt.preventDefault();
	      if (stopPropagation(scope)) evt.stopPropagation();
	      leaveTimeout = $timeout(function () {
	        if (actualDragOverClass) elem.removeClass(actualDragOverClass);
	        actualDragOverClass = null;
	        attrGetter('ngfDrag', scope, {$isDragging: false, $event: evt});
	      }, dragOverDelay || 100);
	    }, false);
	    elem[0].addEventListener('drop', function (evt) {
	      if (isDisabled() || !upload.shouldUpdateOn('drop', attr, scope)) return;
	      evt.preventDefault();
	      if (stopPropagation(scope)) evt.stopPropagation();
	      if (actualDragOverClass) elem.removeClass(actualDragOverClass);
	      actualDragOverClass = null;
	      var items = evt.dataTransfer.items;
	      var html;
	      try {
	        html = evt.dataTransfer && evt.dataTransfer.getData && evt.dataTransfer.getData('text/html');
	      } catch (e) {/* Fix IE11 that throw error calling getData */
	      }

	      extractFiles(items, evt.dataTransfer.files, attrGetter('ngfAllowDir', scope) !== false,
	        attrGetter('multiple') || attrGetter('ngfMultiple', scope)).then(function (files) {
	        if (files.length) {
	          updateModel(files, evt);
	        } else {
	          extractFilesFromHtml('dropUrl', html).then(function (files) {
	            updateModel(files, evt);
	          });
	        }
	      });
	    }, false);
	    elem[0].addEventListener('paste', function (evt) {
	      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 &&
	        attrGetter('ngfEnableFirefoxPaste', scope)) {
	        evt.preventDefault();
	      }
	      if (isDisabled() || !upload.shouldUpdateOn('paste', attr, scope)) return;
	      var files = [];
	      var clipboard = evt.clipboardData || evt.originalEvent.clipboardData;
	      if (clipboard && clipboard.items) {
	        for (var k = 0; k < clipboard.items.length; k++) {
	          if (clipboard.items[k].type.indexOf('image') !== -1) {
	            files.push(clipboard.items[k].getAsFile());
	          }
	        }
	      }
	      if (files.length) {
	        updateModel(files, evt);
	      } else {
	        extractFilesFromHtml('pasteUrl', clipboard).then(function (files) {
	          updateModel(files, evt);
	        });
	      }
	    }, false);

	    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 &&
	      attrGetter('ngfEnableFirefoxPaste', scope)) {
	      elem.attr('contenteditable', true);
	      elem.on('keypress', function (e) {
	        if (!e.metaKey && !e.ctrlKey) {
	          e.preventDefault();
	        }
	      });
	    }

	    function updateModel(files, evt) {
	      upload.updateModel(ngModel, attr, scope, attrGetter('ngfChange') || attrGetter('ngfDrop'), files, evt);
	    }

	    function extractFilesFromHtml(updateOn, html) {
	      if (!upload.shouldUpdateOn(updateOn, attr, scope) || typeof html !== 'string') return upload.rejectPromise([]);
	      var urls = [];
	      html.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function (m, n, src) {
	        urls.push(src);
	      });
	      var promises = [], files = [];
	      if (urls.length) {
	        angular.forEach(urls, function (url) {
	          promises.push(upload.urlToBlob(url).then(function (blob) {
	            files.push(blob);
	          }));
	        });
	        var defer = $q.defer();
	        $q.all(promises).then(function () {
	          defer.resolve(files);
	        }, function (e) {
	          defer.reject(e);
	        });
	        return defer.promise;
	      }
	      return upload.emptyPromise();
	    }

	    function calculateDragOverClass(scope, attr, evt, callback) {
	      var obj = attrGetter('ngfDragOverClass', scope, {$event: evt}), dClass = 'dragover';
	      if (angular.isString(obj)) {
	        dClass = obj;
	      } else if (obj) {
	        if (obj.delay) dragOverDelay = obj.delay;
	        if (obj.accept || obj.reject) {
	          var items = evt.dataTransfer.items;
	          if (items == null || !items.length) {
	            dClass = obj.accept;
	          } else {
	            var pattern = obj.pattern || attrGetter('ngfPattern', scope, {$event: evt});
	            var len = items.length;
	            while (len--) {
	              if (!upload.validatePattern(items[len], pattern)) {
	                dClass = obj.reject;
	                break;
	              } else {
	                dClass = obj.accept;
	              }
	            }
	          }
	        }
	      }
	      callback(dClass);
	    }

	    function extractFiles(items, fileList, allowDir, multiple) {
	      var maxFiles = upload.getValidationAttr(attr, scope, 'maxFiles');
	      if (maxFiles == null) {
	        maxFiles = Number.MAX_VALUE;
	      }
	      var maxTotalSize = upload.getValidationAttr(attr, scope, 'maxTotalSize');
	      if (maxTotalSize == null) {
	        maxTotalSize = Number.MAX_VALUE;
	      }
	      var includeDir = attrGetter('ngfIncludeDir', scope);
	      var files = [], totalSize = 0;

	      function traverseFileTree(entry, path) {
	        var defer = $q.defer();
	        if (entry != null) {
	          if (entry.isDirectory) {
	            var promises = [upload.emptyPromise()];
	            if (includeDir) {
	              var file = {type: 'directory'};
	              file.name = file.path = (path || '') + entry.name;
	              files.push(file);
	            }
	            var dirReader = entry.createReader();
	            var entries = [];
	            var readEntries = function () {
	              dirReader.readEntries(function (results) {
	                try {
	                  if (!results.length) {
	                    angular.forEach(entries.slice(0), function (e) {
	                      if (files.length <= maxFiles && totalSize <= maxTotalSize) {
	                        promises.push(traverseFileTree(e, (path ? path : '') + entry.name + '/'));
	                      }
	                    });
	                    $q.all(promises).then(function () {
	                      defer.resolve();
	                    }, function (e) {
	                      defer.reject(e);
	                    });
	                  } else {
	                    entries = entries.concat(Array.prototype.slice.call(results || [], 0));
	                    readEntries();
	                  }
	                } catch (e) {
	                  defer.reject(e);
	                }
	              }, function (e) {
	                defer.reject(e);
	              });
	            };
	            readEntries();
	          } else {
	            entry.file(function (file) {
	              try {
	                file.path = (path ? path : '') + file.name;
	                if (includeDir) {
	                  file = upload.rename(file, file.path);
	                }
	                files.push(file);
	                totalSize += file.size;
	                defer.resolve();
	              } catch (e) {
	                defer.reject(e);
	              }
	            }, function (e) {
	              defer.reject(e);
	            });
	          }
	        }
	        return defer.promise;
	      }

	      var promises = [upload.emptyPromise()];

	      if (items && items.length > 0 && $window.location.protocol !== 'file:') {
	        for (var i = 0; i < items.length; i++) {
	          if (items[i].webkitGetAsEntry && items[i].webkitGetAsEntry() && items[i].webkitGetAsEntry().isDirectory) {
	            var entry = items[i].webkitGetAsEntry();
	            if (entry.isDirectory && !allowDir) {
	              continue;
	            }
	            if (entry != null) {
	              promises.push(traverseFileTree(entry));
	            }
	          } else {
	            var f = items[i].getAsFile();
	            if (f != null) {
	              files.push(f);
	              totalSize += f.size;
	            }
	          }
	          if (files.length > maxFiles || totalSize > maxTotalSize ||
	            (!multiple && files.length > 0)) break;
	        }
	      } else {
	        if (fileList != null) {
	          for (var j = 0; j < fileList.length; j++) {
	            var file = fileList.item(j);
	            if (file.type || file.size > 0) {
	              files.push(file);
	              totalSize += file.size;
	            }
	            if (files.length > maxFiles || totalSize > maxTotalSize ||
	              (!multiple && files.length > 0)) break;
	          }
	        }
	      }

	      var defer = $q.defer();
	      $q.all(promises).then(function () {
	        if (!multiple && !includeDir && files.length) {
	          var i = 0;
	          while (files[i] && files[i].type === 'directory') i++;
	          defer.resolve([files[i]]);
	        } else {
	          defer.resolve(files);
	        }
	      }, function (e) {
	        defer.reject(e);
	      });

	      return defer.promise;
	    }
	  }

	  function dropAvailable() {
	    var div = document.createElement('div');
	    return ('draggable' in div) && ('ondrop' in div) && !/Edge\/12./i.test(navigator.userAgent);
	  }

	})();

	// customized version of https://github.com/exif-js/exif-js
	ngFileUpload.service('UploadExif', ['UploadResize', '$q', function (UploadResize, $q) {
	  var upload = UploadResize;

	  upload.isExifSupported = function () {
	    return window.FileReader && new FileReader().readAsArrayBuffer && upload.isResizeSupported();
	  };

	  function applyTransform(ctx, orientation, width, height) {
	    switch (orientation) {
	      case 2:
	        return ctx.transform(-1, 0, 0, 1, width, 0);
	      case 3:
	        return ctx.transform(-1, 0, 0, -1, width, height);
	      case 4:
	        return ctx.transform(1, 0, 0, -1, 0, height);
	      case 5:
	        return ctx.transform(0, 1, 1, 0, 0, 0);
	      case 6:
	        return ctx.transform(0, 1, -1, 0, height, 0);
	      case 7:
	        return ctx.transform(0, -1, -1, 0, height, width);
	      case 8:
	        return ctx.transform(0, -1, 1, 0, 0, width);
	    }
	  }

	  upload.readOrientation = function (file) {
	    var defer = $q.defer();
	    var reader = new FileReader();
	    var slicedFile = file.slice ? file.slice(0, 64 * 1024) : file;
	    reader.readAsArrayBuffer(slicedFile);
	    reader.onerror = function (e) {
	      return defer.reject(e);
	    };
	    reader.onload = function (e) {
	      var result = {orientation: 1};
	      var view = new DataView(this.result);
	      if (view.getUint16(0, false) !== 0xFFD8) return defer.resolve(result);

	      var length = view.byteLength,
	        offset = 2;
	      while (offset < length) {
	        var marker = view.getUint16(offset, false);
	        offset += 2;
	        if (marker === 0xFFE1) {
	          if (view.getUint32(offset += 2, false) !== 0x45786966) return defer.resolve(result);

	          var little = view.getUint16(offset += 6, false) === 0x4949;
	          offset += view.getUint32(offset + 4, little);
	          var tags = view.getUint16(offset, little);
	          offset += 2;
	          for (var i = 0; i < tags; i++)
	            if (view.getUint16(offset + (i * 12), little) === 0x0112) {
	              var orientation = view.getUint16(offset + (i * 12) + 8, little);
	              if (orientation >= 2 && orientation <= 8) {
	                view.setUint16(offset + (i * 12) + 8, 1, little);
	                result.fixedArrayBuffer = e.target.result;
	              }
	              result.orientation = orientation;
	              return defer.resolve(result);
	            }
	        } else if ((marker & 0xFF00) !== 0xFF00) break;
	        else offset += view.getUint16(offset, false);
	      }
	      return defer.resolve(result);
	    };
	    return defer.promise;
	  };

	  function arrayBufferToBase64(buffer) {
	    var binary = '';
	    var bytes = new Uint8Array(buffer);
	    var len = bytes.byteLength;
	    for (var i = 0; i < len; i++) {
	      binary += String.fromCharCode(bytes[i]);
	    }
	    return window.btoa(binary);
	  }

	  upload.applyExifRotation = function (file) {
	    if (file.type.indexOf('image/jpeg') !== 0) {
	      return upload.emptyPromise(file);
	    }

	    var deferred = $q.defer();
	    upload.readOrientation(file).then(function (result) {
	      if (result.orientation < 2 || result.orientation > 8) {
	        return deferred.resolve(file);
	      }
	      upload.dataUrl(file, true).then(function (url) {
	        var canvas = document.createElement('canvas');
	        var img = document.createElement('img');

	        img.onload = function () {
	          try {
	            canvas.width = result.orientation > 4 ? img.height : img.width;
	            canvas.height = result.orientation > 4 ? img.width : img.height;
	            var ctx = canvas.getContext('2d');
	            applyTransform(ctx, result.orientation, img.width, img.height);
	            ctx.drawImage(img, 0, 0);
	            var dataUrl = canvas.toDataURL(file.type || 'image/WebP', 0.934);
	            dataUrl = upload.restoreExif(arrayBufferToBase64(result.fixedArrayBuffer), dataUrl);
	            var blob = upload.dataUrltoBlob(dataUrl, file.name);
	            deferred.resolve(blob);
	          } catch (e) {
	            return deferred.reject(e);
	          }
	        };
	        img.onerror = function () {
	          deferred.reject();
	        };
	        img.src = url;
	      }, function (e) {
	        deferred.reject(e);
	      });
	    }, function (e) {
	      deferred.reject(e);
	    });
	    return deferred.promise;
	  };

	  upload.restoreExif = function (orig, resized) {
	    var ExifRestorer = {};

	    ExifRestorer.KEY_STR = 'ABCDEFGHIJKLMNOP' +
	      'QRSTUVWXYZabcdef' +
	      'ghijklmnopqrstuv' +
	      'wxyz0123456789+/' +
	      '=';

	    ExifRestorer.encode64 = function (input) {
	      var output = '',
	        chr1, chr2, chr3 = '',
	        enc1, enc2, enc3, enc4 = '',
	        i = 0;

	      do {
	        chr1 = input[i++];
	        chr2 = input[i++];
	        chr3 = input[i++];

	        enc1 = chr1 >> 2;
	        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	        enc4 = chr3 & 63;

	        if (isNaN(chr2)) {
	          enc3 = enc4 = 64;
	        } else if (isNaN(chr3)) {
	          enc4 = 64;
	        }

	        output = output +
	          this.KEY_STR.charAt(enc1) +
	          this.KEY_STR.charAt(enc2) +
	          this.KEY_STR.charAt(enc3) +
	          this.KEY_STR.charAt(enc4);
	        chr1 = chr2 = chr3 = '';
	        enc1 = enc2 = enc3 = enc4 = '';
	      } while (i < input.length);

	      return output;
	    };

	    ExifRestorer.restore = function (origFileBase64, resizedFileBase64) {
	      if (origFileBase64.match('data:image/jpeg;base64,')) {
	        origFileBase64 = origFileBase64.replace('data:image/jpeg;base64,', '');
	      }

	      var rawImage = this.decode64(origFileBase64);
	      var segments = this.slice2Segments(rawImage);

	      var image = this.exifManipulation(resizedFileBase64, segments);

	      return 'data:image/jpeg;base64,' + this.encode64(image);
	    };


	    ExifRestorer.exifManipulation = function (resizedFileBase64, segments) {
	      var exifArray = this.getExifArray(segments),
	        newImageArray = this.insertExif(resizedFileBase64, exifArray);
	      return new Uint8Array(newImageArray);
	    };


	    ExifRestorer.getExifArray = function (segments) {
	      var seg;
	      for (var x = 0; x < segments.length; x++) {
	        seg = segments[x];
	        if (seg[0] === 255 & seg[1] === 225) //(ff e1)
	        {
	          return seg;
	        }
	      }
	      return [];
	    };


	    ExifRestorer.insertExif = function (resizedFileBase64, exifArray) {
	      var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', ''),
	        buf = this.decode64(imageData),
	        separatePoint = buf.indexOf(255, 3),
	        mae = buf.slice(0, separatePoint),
	        ato = buf.slice(separatePoint),
	        array = mae;

	      array = array.concat(exifArray);
	      array = array.concat(ato);
	      return array;
	    };


	    ExifRestorer.slice2Segments = function (rawImageArray) {
	      var head = 0,
	        segments = [];

	      while (1) {
	        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
	          break;
	        }
	        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
	          head += 2;
	        }
	        else {
	          var length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3],
	            endPoint = head + length + 2,
	            seg = rawImageArray.slice(head, endPoint);
	          segments.push(seg);
	          head = endPoint;
	        }
	        if (head > rawImageArray.length) {
	          break;
	        }
	      }

	      return segments;
	    };


	    ExifRestorer.decode64 = function (input) {
	      var chr1, chr2, chr3 = '',
	        enc1, enc2, enc3, enc4 = '',
	        i = 0,
	        buf = [];

	      // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
	      var base64test = /[^A-Za-z0-9\+\/\=]/g;
	      if (base64test.exec(input)) {
	        console.log('There were invalid base64 characters in the input text.\n' +
	          'Valid base64 characters are A-Z, a-z, 0-9, ' + ', ' / ',and "="\n' +
	          'Expect errors in decoding.');
	      }
	      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

	      do {
	        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
	        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
	        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
	        enc4 = this.KEY_STR.indexOf(input.charAt(i++));

	        chr1 = (enc1 << 2) | (enc2 >> 4);
	        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	        chr3 = ((enc3 & 3) << 6) | enc4;

	        buf.push(chr1);

	        if (enc3 !== 64) {
	          buf.push(chr2);
	        }
	        if (enc4 !== 64) {
	          buf.push(chr3);
	        }

	        chr1 = chr2 = chr3 = '';
	        enc1 = enc2 = enc3 = enc4 = '';

	      } while (i < input.length);

	      return buf;
	    };

	    return ExifRestorer.restore(orig, resized);  //<= EXIF
	  };

	  return upload;
	}]);



/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports){
			module.exports = factory();
		} else {
			global.UriTemplate = factory();
		}
	})(this, function () {
		var uriTemplateGlobalModifiers = {
			"+": true,
			"#": true,
			".": true,
			"/": true,
			";": true,
			"?": true,
			"&": true
		};
		var uriTemplateSuffices = {
			"*": true
		};
		var urlEscapedChars = /[:/&?#]/;

		function notReallyPercentEncode(string) {
			return encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {
				return "%" + doubleEncoded.substring(3);
			});
		}

		function isPercentEncoded(string) {
			string = string.replace(/%../g, '');
			return encodeURIComponent(string) === string;
		}

		function uriTemplateSubstitution(spec) {
			var modifier = "";
			if (uriTemplateGlobalModifiers[spec.charAt(0)]) {
				modifier = spec.charAt(0);
				spec = spec.substring(1);
			}
			var separator = "";
			var prefix = "";
			var shouldEscape = true;
			var showVariables = false;
			var trimEmptyString = false;
			if (modifier == '+') {
				shouldEscape = false;
			} else if (modifier == ".") {
				prefix = ".";
				separator = ".";
			} else if (modifier == "/") {
				prefix = "/";
				separator = "/";
			} else if (modifier == '#') {
				prefix = "#";
				shouldEscape = false;
			} else if (modifier == ';') {
				prefix = ";";
				separator = ";",
				showVariables = true;
				trimEmptyString = true;
			} else if (modifier == '?') {
				prefix = "?";
				separator = "&",
				showVariables = true;
			} else if (modifier == '&') {
				prefix = "&";
				separator = "&",
				showVariables = true;
			}

			var varNames = [];
			var varList = spec.split(",");
			var varSpecs = [];
			var varSpecMap = {};
			for (var i = 0; i < varList.length; i++) {
				var varName = varList[i];
				var truncate = null;
				if (varName.indexOf(":") != -1) {
					var parts = varName.split(":");
					varName = parts[0];
					truncate = parseInt(parts[1]);
				}
				var suffices = {};
				while (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {
					suffices[varName.charAt(varName.length - 1)] = true;
					varName = varName.substring(0, varName.length - 1);
				}
				var varSpec = {
					truncate: truncate,
					name: varName,
					suffices: suffices
				};
				varSpecs.push(varSpec);
				varSpecMap[varName] = varSpec;
				varNames.push(varName);
			}
			var subFunction = function (valueFunction) {
				var result = "";
				var startIndex = 0;
				for (var i = 0; i < varSpecs.length; i++) {
					var varSpec = varSpecs[i];
					var value = valueFunction(varSpec.name);
					if (value == null || (Array.isArray(value) && value.length == 0) || (typeof value == 'object' && Object.keys(value).length == 0)) {
						startIndex++;
						continue;
					}
					if (i == startIndex) {
						result += prefix;
					} else {
						result += (separator || ",");
					}
					if (Array.isArray(value)) {
						if (showVariables) {
							result += varSpec.name + "=";
						}
						for (var j = 0; j < value.length; j++) {
							if (j > 0) {
								result += varSpec.suffices['*'] ? (separator || ",") : ",";
								if (varSpec.suffices['*'] && showVariables) {
									result += varSpec.name + "=";
								}
							}
							result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : notReallyPercentEncode(value[j]);
						}
					} else if (typeof value == "object") {
						if (showVariables && !varSpec.suffices['*']) {
							result += varSpec.name + "=";
						}
						var first = true;
						for (var key in value) {
							if (!first) {
								result += varSpec.suffices['*'] ? (separator || ",") : ",";
							}
							first = false;
							result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : notReallyPercentEncode(key);
							result += varSpec.suffices['*'] ? '=' : ",";
							result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : notReallyPercentEncode(value[key]);
						}
					} else {
						if (showVariables) {
							result += varSpec.name;
							if (!trimEmptyString || value != "") {
								result += "=";
							}
						}
						if (varSpec.truncate != null) {
							value = value.substring(0, varSpec.truncate);
						}
						result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21"): notReallyPercentEncode(value);
					}
				}
				return result;
			};
			var guessFunction = function (stringValue, resultObj, strict) {
				if (prefix) {
					stringValue = stringValue.substring(prefix.length);
				}
				if (varSpecs.length == 1 && varSpecs[0].suffices['*']) {
					var varSpec = varSpecs[0];
					var varName = varSpec.name;
					var arrayValue = varSpec.suffices['*'] ? stringValue.split(separator || ",") : [stringValue];
					var hasEquals = (shouldEscape && stringValue.indexOf('=') != -1);	// There's otherwise no way to distinguish between "{value*}" for arrays and objects
					for (var i = 1; i < arrayValue.length; i++) {
						var stringValue = arrayValue[i];
						if (hasEquals && stringValue.indexOf('=') == -1) {
							// Bit of a hack - if we're expecting "=" for key/value pairs, and values can't contain "=", then assume a value has been accidentally split
							arrayValue[i - 1] += (separator || ",") + stringValue;
							arrayValue.splice(i, 1);
							i--;
						}
					}
					for (var i = 0; i < arrayValue.length; i++) {
						var stringValue = arrayValue[i];
						if (shouldEscape && stringValue.indexOf('=') != -1) {
							hasEquals = true;
						}
						var innerArrayValue = stringValue.split(",");
						if (innerArrayValue.length == 1) {
							arrayValue[i] = innerArrayValue[0];
						} else {
							arrayValue[i] = innerArrayValue;
						}
					}

					if (showVariables || hasEquals) {
						var objectValue = resultObj[varName] || {};
						for (var j = 0; j < arrayValue.length; j++) {
							var innerValue = stringValue;
							if (showVariables && !innerValue) {
								// The empty string isn't a valid variable, so if our value is zero-length we have nothing
								continue;
							}
							if (typeof arrayValue[j] == "string") {
								var stringValue = arrayValue[j];
								var innerVarName = stringValue.split("=", 1)[0];
								var stringValue = stringValue.substring(innerVarName.length + 1);
								if (shouldEscape) {
									if (strict && !isPercentEncoded(stringValue)) {
										return;
									}
									stringValue = decodeURIComponent(stringValue);
								}
								innerValue = stringValue;
							} else {
								var stringValue = arrayValue[j][0];
								var innerVarName = stringValue.split("=", 1)[0];
								var stringValue = stringValue.substring(innerVarName.length + 1);
								if (shouldEscape) {
									if (strict && !isPercentEncoded(stringValue)) {
										return;
									}
									stringValue = decodeURIComponent(stringValue);
								}
								arrayValue[j][0] = stringValue;
								innerValue = arrayValue[j];
							}
							if (shouldEscape) {
								if (strict && !isPercentEncoded(innerVarName)) {
									return;
								}
								innerVarName = decodeURIComponent(innerVarName);
							}

							if (objectValue[innerVarName] !== undefined) {
								if (Array.isArray(objectValue[innerVarName])) {
									objectValue[innerVarName].push(innerValue);
								} else {
									objectValue[innerVarName] = [objectValue[innerVarName], innerValue];
								}
							} else {
								objectValue[innerVarName] = innerValue;
							}
						}
						if (Object.keys(objectValue).length == 1 && objectValue[varName] !== undefined) {
							resultObj[varName] = objectValue[varName];
						} else {
							resultObj[varName] = objectValue;
						}
					} else {
						if (shouldEscape) {
							for (var j = 0; j < arrayValue.length; j++) {
								var innerArrayValue = arrayValue[j];
								if (Array.isArray(innerArrayValue)) {
									for (var k = 0; k < innerArrayValue.length; k++) {
										if (strict && !isPercentEncoded(innerArrayValue[k])) {
											return;
										}
										innerArrayValue[k] = decodeURIComponent(innerArrayValue[k]);
									}
								} else {
									if (strict && !isPercentEncoded(innerArrayValue)) {
										return;
									}
									arrayValue[j] = decodeURIComponent(innerArrayValue);
								}
							}
						}

						if (resultObj[varName] !== undefined) {
							if (Array.isArray(resultObj[varName])) {
								resultObj[varName] = resultObj[varName].concat(arrayValue);
							} else {
								resultObj[varName] = [resultObj[varName]].concat(arrayValue);
							}
						} else {
							if (arrayValue.length == 1 && !varSpec.suffices['*']) {
								resultObj[varName] = arrayValue[0];
							} else {
								resultObj[varName] = arrayValue;
							}
						}
					}
				} else {
					var arrayValue = (varSpecs.length == 1) ? [stringValue] : stringValue.split(separator || ",");
					var specIndexMap = {};
					for (var i = 0; i < arrayValue.length; i++) {
						// Try from beginning
						var firstStarred = 0;
						for (; firstStarred < varSpecs.length - 1 && firstStarred < i; firstStarred++) {
							if (varSpecs[firstStarred].suffices['*']) {
								break;
							}
						}
						if (firstStarred == i) {
							// The first [i] of them have no "*" suffix
							specIndexMap[i] = i;
							continue;
						} else {
							// Try from the end
							for (var lastStarred = varSpecs.length - 1; lastStarred > 0 && (varSpecs.length - lastStarred) < (arrayValue.length - i); lastStarred--) {
								if (varSpecs[lastStarred].suffices['*']) {
									break;
								}
							}
							if ((varSpecs.length - lastStarred) == (arrayValue.length - i)) {
								// The last [length - i] of them have no "*" suffix
								specIndexMap[i] = lastStarred;
								continue;
							}
						}
						// Just give up and use the first one
						specIndexMap[i] = firstStarred;
					}
					for (var i = 0; i < arrayValue.length; i++) {
						var stringValue = arrayValue[i];
						if (!stringValue && showVariables) {
							// The empty string isn't a valid variable, so if our value is zero-length we have nothing
							continue;
						}
						var innerArrayValue = stringValue.split(",");
						var hasEquals = false;

						if (showVariables) {
							var stringValue = innerArrayValue[0]; // using innerArrayValue
							var varName = stringValue.split("=", 1)[0];
							var stringValue = stringValue.substring(varName.length + 1);
							innerArrayValue[0] = stringValue;
							var varSpec = varSpecMap[varName] || varSpecs[0];
						} else {
							var varSpec = varSpecs[specIndexMap[i]];
							var varName = varSpec.name;
						}

						for (var j = 0; j < innerArrayValue.length; j++) {
							if (shouldEscape) {
								if (strict && !isPercentEncoded(innerArrayValue[j])) {
									return;
								}
								innerArrayValue[j] = decodeURIComponent(innerArrayValue[j]);
							}
						}

						if ((showVariables || varSpec.suffices['*'])&& resultObj[varName] !== undefined) {
							if (Array.isArray(resultObj[varName])) {
								resultObj[varName] = resultObj[varName].concat(innerArrayValue);
							} else {
								resultObj[varName] = [resultObj[varName]].concat(innerArrayValue);
							}
						} else {
							if (innerArrayValue.length == 1 && !varSpec.suffices['*']) {
								resultObj[varName] = innerArrayValue[0];
							} else {
								resultObj[varName] = innerArrayValue;
							}
						}
					}
				}
				return 1;
			};
			return {
				varNames: varNames,
				prefix: prefix,
				substitution: subFunction,
				unSubstitution: guessFunction
			};
		}

		function UriTemplate(template) {
			if (!(this instanceof UriTemplate)) {
				return new UriTemplate(template);
			}
			var parts = template.split("{");
			var textParts = [parts.shift()];
			var prefixes = [];
			var substitutions = [];
			var unSubstitutions = [];
			var varNames = [];
			while (parts.length > 0) {
				var part = parts.shift();
				var spec = part.split("}")[0];
				var remainder = part.substring(spec.length + 1);
				var funcs = uriTemplateSubstitution(spec);
				substitutions.push(funcs.substitution);
				unSubstitutions.push(funcs.unSubstitution);
				prefixes.push(funcs.prefix);
				textParts.push(remainder);
				varNames = varNames.concat(funcs.varNames);
			}
			this.fill = function (valueFunction) {
				if (valueFunction && typeof valueFunction !== 'function') {
					var value = valueFunction;
					valueFunction = function (varName) {
						return value[varName];
					};
				}

				var result = textParts[0];
				for (var i = 0; i < substitutions.length; i++) {
					var substitution = substitutions[i];
					result += substitution(valueFunction);
					result += textParts[i + 1];
				}
				return result;
			};
			this.fromUri = function (substituted, options) {
				options = options || {};
				var result = {};
				for (var i = 0; i < textParts.length; i++) {
					var part = textParts[i];
					if (substituted.substring(0, part.length) !== part) {
						return /*undefined*/;
					}
					substituted = substituted.substring(part.length);
					if (i >= textParts.length - 1) {
						// We've run out of input - is there any template left?
						if (substituted == "") {
							break;
						} else {
							return /*undefined*/;
						}
					}

					var prefix = prefixes[i];
					if (prefix && substituted.substring(0, prefix.length) !== prefix) {
						// All values are optional - if we have a prefix and it doesn't match, move along
						continue;
					}

					// Find the next part to un-substitute
					var nextPart = textParts[i + 1];
					var offset = i;
					while (true) {
						if (offset == textParts.length - 2) {
							var endPart = substituted.substring(substituted.length - nextPart.length);
							if (endPart !== nextPart) {
								return /*undefined*/;
							}
							var stringValue = substituted.substring(0, substituted.length - nextPart.length);
							substituted = endPart;
						} else if (nextPart) {
							var nextPartPos = substituted.indexOf(nextPart);
							var stringValue = substituted.substring(0, nextPartPos);
							substituted = substituted.substring(nextPartPos);
						} else if (prefixes[offset + 1]) {
							var nextPartPos = substituted.indexOf(prefixes[offset + 1]);
							if (nextPartPos === -1) nextPartPos = substituted.length;
							var stringValue = substituted.substring(0, nextPartPos);
							substituted = substituted.substring(nextPartPos);
						} else if (textParts.length > offset + 2) {
							// If the separator between this variable and the next is blank (with no prefix), continue onwards
							offset++;
							nextPart = textParts[offset + 1];
							continue;
						} else {
							var stringValue = substituted;
							substituted = "";
						}
						break;
					}
					if (!unSubstitutions[i](stringValue, result, options.strict)) {
						return /*undefined*/;
					}
				}
				return result;
			}
			this.varNames = varNames;
			this.template = template;
		}
		UriTemplate.prototype = {
			toString: function () {
				return this.template;
			},
			fillFromObject: function (obj) {
				return this.fill(obj);
			},
			test: function (uri, options) {
				return !!this.fromUri(uri, options)
			}
		};

		return UriTemplate;
	});


/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },

/***/ 7:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = RbDriverAccessPointModel;
	/**
	 * Created by benoit.bacot on 02/10/2016.
	 */
	RbDriverAccessPointModel.$inject = ['$relayboxApiModelFactory'];
	function RbDriverAccessPointModel($relayboxApiModelFactory) {
	  return $relayboxApiModelFactory('access-point', {
	    actions: {
	      batch: {
	        method: 'POST',
	        url: 'batch',
	        wrap: false
	      }
	    }
	  });
	}

/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = RbDriverCmxNetworkCaptivePortalConfigurationModel;
	RbDriverCmxNetworkCaptivePortalConfigurationModel;
	RbDriverCmxNetworkCaptivePortalConfigurationModel.$inject = ['$relayboxApiModelFactory'];
	function RbDriverCmxNetworkCaptivePortalConfigurationModel($relayboxApiModelFactory) {
	    return {
	        forNetwork: function forNetwork(networkShortId) {
	            return $relayboxApiModelFactory('networks/' + networkShortId + '/captive-portal-configuration');
	        }
	    };
	}

/***/ },

/***/ 9:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = RbDriverCmxNetworkCloudtraxConfigurationModel;
	RbDriverCmxNetworkCloudtraxConfigurationModel.$inject = ['$relayboxApiModelFactory'];
	function RbDriverCmxNetworkCloudtraxConfigurationModel($relayboxApiModelFactory) {
	  return {
	    forNetwork: function forNetwork(networkShortId) {
	      return $relayboxApiModelFactory('networks/' + networkShortId + '/cloudtrax-configuration');
	    }
	  };
	}

/***/ },

/***/ 10:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = RbDriverCmxNetworkCountersConfigurationModel;
	RbDriverCmxNetworkCountersConfigurationModel.$inject = ['$relayboxApiModelFactory'];
	function RbDriverCmxNetworkCountersConfigurationModel($relayboxApiModelFactory) {
	    return {
	        forNetwork: function forNetwork(networkShortId) {
	            return $relayboxApiModelFactory('networks/' + networkShortId + '/counters-configuration');
	        }
	    };
	}

/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = RbDriverCmxNetworkMerakiConfigurationModel;
	RbDriverCmxNetworkMerakiConfigurationModel.$inject = ['$relayboxApiModelFactory'];
	function RbDriverCmxNetworkMerakiConfigurationModel($relayboxApiModelFactory) {
	  return {
	    forNetwork: function forNetwork(networkShortId) {
	      return $relayboxApiModelFactory('networks/' + networkShortId + '/meraki-configuration');
	    }
	  };
	}

/***/ },

/***/ 12:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = RbDriverCmxNetworkModel;
	/**
	 * Created by benoit.bacot on 29/08/2016.
	 */
	RbDriverCmxNetworkModel.$inject = ['$relayboxApiModelFactory'];
	function RbDriverCmxNetworkModel($relayboxApiModelFactory) {
	  return $relayboxApiModelFactory('networks');
	}

/***/ },

/***/ 13:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = RbDriverInstallationOptionsModel;
	/**
	 * Created by benoit.bacot on 02/10/2016.
	 */
	RbDriverInstallationOptionsModel.$inject = ['$relayboxApiModelFactory'];
	function RbDriverInstallationOptionsModel($relayboxApiModelFactory) {
	  return $relayboxApiModelFactory('installation-options', {});
	}

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Created by benoit.bacot on 29/08/2016.
	 */
	(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(4), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== 'undefined' && module.exports) {
	    module.exports = factory(require('angular'), require('uri-templates'), require('deep-diff'), require('ng-file-upload')); //, require('ng-file-upload')
	  } else {
	    global.ModelFactory = factory(global.angular, global.UriTemplate, global.DeepDiff); //, global.ngFileUpload
	  }
	})(undefined, function (angular, UriTemplate, DeepDiff) {
	  //, ngFileUpload

	  var module = angular.module('relayboxApiModelFactory', ['ngFileUpload']);
	  var uploadService;
	  module.run(['Upload', function (Upload) {
	    uploadService = Upload;
	  }]);

	  // compression
	  var copy = angular.copy,
	      extend = angular.extend,
	      forEach = angular.forEach;

	  // keywords that are reserved for model instance
	  // internal usage only and to be stripped
	  // before sending to server
	  var instanceKeywords = ['$$array', '$save', '$destroy', '$pending', '$rollback', '$diff', '$update', '$commit', '$copy'];

	  // keywords that are reserved for the model static
	  // these are used to determine if a attribute should be extended
	  // to the model static class for like a helper that is not a http method
	  var staticKeywords = ['actions', 'instance', 'list', 'defaults', 'pk', 'stripTrailingSlashes', 'map'];

	  // Deep extends
	  // http://stackoverflow.com/questions/15310935/angularjs-extend-recursive
	  var extendDeep = function extendDeep(dst) {
	    forEach(arguments, function (obj) {
	      if (obj !== dst) {
	        forEach(obj, function (value, key) {
	          if (instanceKeywords.indexOf(key) === -1) {
	            if (dst[key]) {
	              if (angular.isArray(dst[key])) {
	                dst[key].concat(value.filter(function (v) {
	                  var vv = dst[key].indexOf(v) !== -1;
	                  if (vv) {
	                    extendDeep(vv, v);
	                  }
	                  return vv;
	                }));
	              } else if (angular.isObject(dst[key])) {
	                extendDeep(dst[key], value);
	              } else {
	                // if value is a simple type like a string, boolean or number
	                // then assign it
	                dst[key] = value;
	              }
	            } else if (!angular.isFunction(dst[key])) {
	              dst[key] = value;
	            }
	          }
	        });
	      }
	    });
	    return dst;
	  };

	  // Create a shallow copy of an object and clear other fields from the destination
	  // https://github.com/angular/angular.js/blob/master/src/ngResource/resource.js#L30
	  var shallowClearAndCopy = function shallowClearAndCopy(src, dst) {
	    dst = dst || {};

	    // Remove any properties in destination that were not
	    // returned from the source
	    forEach(dst, function (value, key) {
	      if (!src.hasOwnProperty(key) && key.charAt(0) !== '$') {
	        delete dst[key];
	      }
	    });

	    for (var key in src) {

	      if (src.hasOwnProperty(key) && key.charAt(0) !== '$') {
	        // For properties common to both source and destination,
	        // check for object references and recurse as needed. Route around
	        // arrays to prevent value/order inconsistencies
	        if (angular.isObject(src[key]) && !angular.isArray(src[key])) {
	          dst[key] = shallowClearAndCopy(src[key], dst[key]);
	        } else {
	          // Not an object, so just overwrite with value from source
	          dst[key] = src[key];
	        }
	      }
	    }

	    return dst;
	  };

	  var getPropValue = function getPropValue(o, s) {
	    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
	    s = s.replace(/^\./, ''); // strip a leading dot
	    var a = s.split('.');
	    for (var i = 0, n = a.length; i < n; ++i) {
	      var k = a[i];
	      if (k in o) {
	        o = o[k];
	      } else {
	        return;
	      }
	    }
	    return o;
	  };

	  var getDefaultProviderOptions = function getDefaultProviderOptions() {
	    return {

	      /**
	       * URL Prefix for requests.  This should only really
	       * be used at the provider level, not an instance.
	       */
	      prefix: '',

	      /**
	       * Primary key of the model
	       */
	      pk: 'shortId',

	      /**
	       * Add pk defined upper in routes when needed.
	       */
	      addPkToRoutes: true,

	      /**
	       * By default, trailing slashes will be stripped
	       * from the calculated URLs.
	       */
	      stripTrailingSlashes: true,

	      /**
	       * Default values for a new instance.
	       * This will only be populated if the property
	       * is undefined.
	       *
	       * Example:
	       *      defaults: {
	         *          'create': new Date()
	         *      }
	       */
	      defaults: {},

	      /**
	       * Attribute mapping.  Tranposes attributes
	       * from a response to a different attribute.
	       *
	       * Also handles 'has many' and 'has one' relations.
	       *
	       * Example:
	       *      map: {
	         *          // transpose `animalId` to
	         *          // `id` on our instance
	         *          'id': 'animalId',
	         *
	         *          // transposes `animal` attribute
	         *          // to an array of `AnimalModel`'s
	         *          'animal': AnimalModel.List,
	         *
	         *          // transposes `location` attribute
	         *          // to an instance of `LocationModel`
	         *          'location': LocationModel
	         *      }
	       */
	      map: {},

	      /**
	       * Hash declaration of model actions.
	       *
	       * NOTE: Anything prefixed with `$` will be attached to the
	       * model instance rather than the static.
	       */
	      actions: {

	        /**
	         * Base options to be applied to all other actions by default.
	         * In addition to the methods listed here, any `$http` attribute
	         * is valid. https://docs.angularjs.org/api/ng/service/$http
	         *
	         * If the method is a `GET` and the arguments invoking it are a string or number,
	         * then the model automatically assumes you are wanting to pass those are the primary key.
	         *
	         * Action Agnostic Attributes:
	         *  - `override` Overrides the base url prefixing.
	         *  - `method` Case insensitive HTTP method (e.g. GET, POST, PUT, DELETE, JSONP, etc).
	         *  - `url` URL to be invoked by `$http`.  All urls are prefixed with the base url passed initally.  All templates are [URI Template](http://tools.ietf.org/html/rfc6570) spec.
	         */
	        base: {
	          /**
	           * Wrap the response from an action in a instance of the model.
	           */
	          wrap: true,

	          /**
	           * Callback before data is sent to server.
	           * This allows developers to manipulate the
	           * object before its sent to the server but
	           * not effect the core object.
	           */
	          beforeRequest: undefined,

	          /**
	           * Callback after data recieved from server but
	           * before the data is wrapped in an instance.
	           */
	          afterRequest: undefined,

	          /**
	           * By default, do not cache the requests.
	           */
	          cache: false,

	          defaultPagedListParams: {
	            page: 1,
	            pageSize: 20
	          }
	        },
	        get: {
	          method: 'GET'
	        },
	        query: {
	          method: 'GET',
	          /**
	           * If true then the returned object for this action is an array.
	           */
	          isArray: false,
	          /**
	           * If true then the returned object is a paged List.
	           */
	          isPagedList: true //isPagedList === true bypass isArray params.
	        },

	        /**
	         * In theory `post`, `update`, and `delete` below would/should not be used,
	         * instead one would use `$save` or `$destroy` to be invoked
	         */
	        post: {
	          method: 'POST',
	          invalidateCache: true
	        },
	        update: {
	          method: 'PUT',
	          invalidateCache: true
	        },
	        postWithUpload: {
	          method: 'POSTWITHUPLOAD',
	          invalidateCache: true
	        },
	        updateWithUpload: {
	          method: 'PUTWITHUPLOAD',
	          invalidateCache: true
	        },
	        'delete': {
	          method: 'DELETE',
	          invalidateCache: true
	        }
	      },

	      /**
	       * Instance level extensions/helpers.
	       *
	       * Example:
	       *      instance: {
	         *          'name': function() {
	         *              return this.first + ' ' + this.last
	         *          }
	         *      }
	       */
	      instance: {},

	      /**
	       * List level extensions/helpers.
	       *
	       * Example:
	       *
	       *      list: {
	         *          'namesById': function(id){
	         *              return this.find(function(u){ return u.id === id; });
	         *          }
	         *      }
	       *
	       */
	      list: {}
	    };
	  };

	  module.provider('$relayboxApiModelFactory', function () {
	    var provider = this;
	    provider.defaultOptions = getDefaultProviderOptions();

	    provider.$get = ['$rootScope', '$http', '$q', '$log', '$cacheFactory', function ($rootScope, $http, $q, $log, $cacheFactory) {

	      /**
	       * Model factory.
	       *
	       * Example usages:
	       *       $modelFactory('api/zoo');
	       *       $modelFactory('api/zoo', { ... });
	       */
	      function modelFactory(url, options) {

	        /**
	         * Prevents multiple calls of the exact same type.
	         *
	         *      { key: url, value: promise }
	         *
	         */
	        var promiseTracker = {};

	        /**
	         * Make a pretty name from the url
	         * for the event emitters
	         */
	        var nameSplit = url.split('/'),
	            prettyName = nameSplit[nameSplit.length - 1];

	        //set isExtendedAction === true for the ones added in models //USED FOR BEING ABLE TO SPECIFY ShortId directly in extend actions route (ex: {shortId}/member-stats )
	        if (options && options.actions) {
	          forEach(options.actions, function (v) {
	            v.isExtendedAction = true;
	          });
	        }

	        // copy so we also extend our defaults and not override
	        // var actions = angular.extend({}, defaultOptions.actions, options.actions);
	        options = extendDeep({}, copy(provider.defaultOptions), options);

	        //
	        // Collection
	        // ------------------------------------------------------------
	        //

	        function PagedList(value) {
	          value = value || {
	            totalPages: 0,
	            totalResults: 0,
	            results: []
	          };

	          var modelList = new Model.List(value.results);
	          value.results = modelList;
	          return value;
	        }

	        /**
	         * Model list instance.
	         * All raw objects passed will be converted to an instance of this model.
	         *
	         * If we `push` a item into an existing collection, a pointer will be made
	         * so on a destroy items will be removed from the array as well.
	         *
	         * Example usages:
	         *       var zoos = new Zoo.List([ {}, ... ]);
	         */
	        function ModelCollection(value) {
	          value = value || [];

	          // wrap each obj
	          value.forEach(function (v, i) {
	            // this should not happen but prevent blow up
	            if (v === null || v === undefined) {
	              return;
	            }

	            // reset to new instance
	            value[i] = wrapAsNewModelInstance(v, value);
	          });

	          // override push to set an instance
	          // of the list on the model so destroys will chain
	          var __oldPush = value.push;
	          value.push = function () {
	            // Array.push(..) allows to pass in multiple params
	            var args = Array.prototype.slice.call(arguments);

	            for (var i = 0; i < args.length; i++) {
	              args[i] = wrapAsNewModelInstance(args[i], value);
	            }

	            __oldPush.apply(value, args);
	          };

	          // add list helpers
	          if (options.list) {
	            extend(value, options.list);
	          }

	          return value;
	        }

	        // helper function for creating a new instance of a model from
	        // a raw JavaScript obj. If it is already a model, it will be left
	        // as it is
	        var wrapAsNewModelInstance = function wrapAsNewModelInstance(rawObj, arrayInst) {
	          // create an instance
	          var inst = rawObj.constructor === Model ? rawObj : new Model(rawObj);

	          // set a pointer to the array
	          inst.$$array = arrayInst;

	          return inst;
	        };

	        // ES5, IE compatible version to retrieve the name of a function. ES6
	        // would permit to do something like functionRef.name
	        var functionName = function functionName(fun) {
	          var ret = fun.toString();
	          ret = ret.substr('function '.length);
	          ret = ret.substr(0, ret.indexOf('('));
	          return ret;
	        };

	        //
	        // Model Instance
	        // ------------------------------------------------------------
	        // ignorePkMapping is false by default.

	        /**
	         * Model instance.
	         *
	         * Example usages:
	         *       var zoo = new Zoo({ ... });
	         */
	        function Model(value, ignorePkMapping) {
	          var commits = [],
	              instance = this;

	          ignorePkMapping = ignorePkMapping || false;

	          // if the value is undefined, create a empty obj
	          value = value || {};

	          // build the defaults but only on new instances
	          forEach(options.defaults, function (v, k) {
	            // only populates when not already defined
	            if (value[k] === undefined) {
	              if (typeof v === 'function') {
	                // pass the value so you can combine things
	                // this could be tricky if you have defaults that rely on other defaults ...
	                // like: { name: function(val) { return val.firstName + val.lastName }) }
	                value[k] = copy(v(value));
	              } else {
	                value[k] = copy(v);
	              }
	            }
	          });

	          // Map all the objects to new names or relationships
	          forEach(options.map, function (v, k) {
	            if (functionName(v) === functionName(Model) || functionName(v) === functionName(ModelCollection)) {
	              value[k] = new v(value[k]); //eslint-disable-line
	            } else if (typeof v === 'function') {
	              // if its a function, invoke it,
	              // this would be helpful for seralizers
	              // like: map: { date: function(val){ return moment(val) } }
	              value[k] = v(value[k], value);
	            }
	            // In order to be able to use the constructor for resource to Post having a PK mapping set.
	            else if (!ignorePkMapping || k !== options.pk) {
	                value[k] = getPropValue(value, v);
	                // delete value[v];  // in case we would like to delete original prop ... not the case for us ...
	              }
	          });

	          // attach instance actions
	          forEach(options.actions, function (v, k) {
	            if (k[0] === '$') {
	              instance[k] = function () {
	                return Model.$buildRequest(k, v, instance);
	              };
	            }
	          });

	          // copy values to the instance
	          extend(instance, value);

	          // copy instance level helpers to this instance
	          extend(instance, copy(options.instance));

	          instance.$saveWithUpload = function (filesObject) {
	            //filesObject is a key-value ( key == propertyName / value == files array )
	            var actionType = instance[options.pk] ? 'updateWithUpload' : 'postWithUpload',
	                promise = Model[actionType](this, filesObject);

	            instance.$pending = true;

	            promise.then(function (returnedValue) {
	              instance.$pending = false;

	              // extend the value from the server to me
	              if (returnedValue) {
	                instance.$update(returnedValue);
	              }

	              var broadcastName = actionType === 'post' ? 'created' : 'updated';
	              $rootScope.$broadcast(prettyName + '-' + broadcastName, instance);

	              // commit the change for reversion
	              commits.push(angular.toJson(instance));
	            }, function () {
	              // rejected
	              instance.$pending = false;
	            });

	            return promise;
	          };

	          /**
	           * Save the instance to the server.  Posts the instance unless
	           * the instance has the `pk` attribute already then it will do a put.
	           * you can call $save({bypassPromiseTracker : true}) in order to bypass Promise tracking
	           */
	          instance.$save = function (config) {
	            var actionType = instance[options.pk] ? 'update' : 'post',
	                promise = Model[actionType](this, config);

	            instance.$pending = true;

	            promise.then(function (returnedValue) {
	              instance.$pending = false;

	              // extend the value from the server to me
	              if (returnedValue) {
	                instance.$update(returnedValue);
	              }

	              var broadcastName = actionType === 'post' ? 'created' : 'updated';
	              $rootScope.$broadcast(prettyName + '-' + broadcastName, instance);

	              // commit the change for reversion
	              commits.push(angular.toJson(instance));
	            }, function () {
	              // rejected
	              instance.$pending = false;
	            });

	            return promise;
	          };

	          /**
	           * Delete the instance.  Performs a DELETE on this instance performing
	           * the delete action passing an instance of itself.
	           *
	           * If the item is associated with an array, it will automatically be removed
	           * on successful delete.
	           */
	          instance.$destroy = function () {
	            // keep a local pointer since we strip before send

	            var promise = Model.delete(this);
	            instance.$pending = true;

	            promise.then(function () {
	              instance.$pending = false;

	              var arr = instance.$$array;
	              if (arr) {
	                arr.splice(arr.indexOf(instance), 1);
	              }

	              $rootScope.$broadcast(prettyName + '-destroyed', instance);
	            }, function () {
	              // rejected
	              instance.$pending = false;
	            });

	            return promise;
	          };

	          /**
	           * Display the difference between the original data and the
	           * current instance.
	           * https://github.com/flitbit/diff
	           */
	          instance.$diff = function (version) {
	            var currCommit = angular.toJson(instance),
	                prevCommit = commits[version || commits.length - 1];

	            return DeepDiff.diff(JSON.parse(prevCommit), JSON.parse(currCommit), function (path, key) {
	              return key[0] === '$';
	            });
	          };

	          /**
	           * Commits the change the commits bucket for rollback later if needed.
	           */
	          instance.$commit = function () {
	            // stringify it so you have a clean instance
	            commits.push(angular.toJson(instance));
	            return instance;
	          };

	          /**
	           * Reverts the current instance back either the latest instance
	           * or you can pass a specific instance on the commits stack.
	           */
	          instance.$rollback = function (version) {
	            var prevCommit = commits[version || commits.length - 1];
	            instance.$update(JSON.parse(prevCommit));
	            return instance;
	          };

	          /**
	           * Extends the properties of the new object onto
	           * the current object without replacing it.  Helpful
	           * when copying and then re-copying new props back
	           */
	          instance.$update = function (n) {
	            shallowClearAndCopy(n, instance);
	            return instance;
	          };

	          /**
	           * Creates a copy by taking the raw data values and by
	           * creating a new instance of the model.
	           */
	          instance.$copy = function () {
	            // get the raw data of the model
	            var rawData = angular.toJson(this);

	            // ..then wrap it into a new instance to create a clone
	            return new Model(angular.fromJson(rawData));
	          };

	          // Create a copy of the value last so we get all the goodies,
	          // like default values and whatnot.
	          instance.$commit();
	        }

	        //
	        // Model Static
	        // ------------------------------------------------------------

	        /**
	         * Create an instance of a cache factory
	         * for tracking data of this instance type.
	         * https://docs.angularjs.org/api/ng/service/$cacheFactory
	         */
	        var existingCache = $cacheFactory.get(url);
	        Model.$cache = existingCache || $cacheFactory(url);

	        // attach static actions
	        forEach(options.actions, function (v, k) {
	          // don't do base or $
	          if (k === 'base' || k[0] === '$') {
	            return;
	          }
	          Model[k] = function () {
	            //http://stackoverflow.com/questions/2091138/why-doesnt-join-work-with-function-arguments
	            var args = Array.prototype.slice.call(arguments);
	            return Model.$buildRequest.apply(this, [k, v].concat(args));
	          };
	        });

	        /**
	         * Builds the request for a set of actions.
	         */
	        Model.$buildRequest = function (action, param, data, extras) {
	          var clone = copy(options.actions.base);
	          var uri;
	          extend(clone, copy(param));

	          // in case we made a call of $save({bypassPromiseTracker : true}))
	          clone.bypassPromiseTracker = false;
	          if (extras) {
	            clone.bypassPromiseTracker = extras.bypassPromiseTracker || false;
	            delete extras.bypassPromiseTracker;
	          }

	          // if we explicity call cache
	          // to true and don't pass a factory
	          // lets use our instance level for
	          // data storage means
	          if (clone.cache === true) {
	            clone.cache = Model.$cache;
	          }

	          // make sure we have a method specified, otherwise
	          // default to GET
	          clone.method = clone.method || 'GET';

	          // uri template to parameterize
	          uri = options.prefix ? options.prefix + '/' : '';

	          // make sure we didn't override the base url prefixing
	          if (!clone.override) {

	            // set the uri to the base
	            uri += url;

	            // if we have a url defined, append to base
	            if (clone.url) {
	              uri += '/' + clone.url;
	            }

	            // set the uri to the base
	            // GET/QUERY CASE for static actions
	            //  ==> NetworkModel.getMemberStatistics({'shortId':$stateParams.id});
	            //  ==> or this shortcut : NetworkModel.getMemberStatistics($stateParams.id)
	            if (!param.isExtendedAction || clone.method === 'GET' && angular.isObject(data)) {
	              uri = Model.$url(uri, data, clone.method);
	            } // POST/PUT CASES for static actions
	            //  ==> RegistrationModel.sendRegistrationEmail({objectToPost}, {'shortId':myId});
	            //  ==> or this shortcut : RegistrationModel.sendRegistrationEmail({objectToPost},myId)
	            else if (param.isExtendedAction && (clone.method === 'POST' || clone.method === 'PUT')) {
	                // data will be the object to POST/PUT
	                // extras will be used for URI template var replacement.
	                var myObj = {};
	                if (angular.isObject(extras)) {
	                  myObj = extras;
	                } else if (angular.isString(extras) || angular.isNumber(extras)) {
	                  // if we want to pass shortId directly and it's the only param. in URI
	                  myObj[options.pk] = extras;
	                }
	                uri = Model.$url(uri, myObj, clone.method);
	              } else if (param.isExtendedAction && clone.method === 'DELETE') {
	                var myObjData = {};
	                if (angular.isObject(data)) {
	                  myObjData = data;
	                } else if (angular.isString(data) || angular.isNumber(data)) {
	                  // if we want to pass shortId directly and it's the only param. in URI
	                  myObjData[options.pk] = data;
	                }
	                uri = Model.$url(uri, myObjData, clone.method);
	              }

	            // attach the pk referece by default if it is a 'core' type
	            if (action === 'get' || action === 'post' || action === 'update' || action === 'delete' || action === 'postWithUpload' || action === 'updateWithUpload') {
	              if (options.addPkToRoutes) {
	                uri += '/{' + options.pk + '}';
	              }
	            }

	            if ((clone.method === 'GET' || clone.method === 'DELETE') && (angular.isString(data) || angular.isNumber(data))) {
	              // if we have a get method and its a number or a string
	              // you can assume i'm wanting to do something like:
	              // ZooModel.get(1234) instead of ZooModel.get({ id: 1234 });
	              var obj = {};
	              obj[options.pk] = data;
	              data = obj;

	              // if we have a extra argument on this case we should assume its a
	              //
	              if (extras) {
	                // data.param = extras;
	                clone.params = extendDeep({}, clone.params, extras);
	                // uri += '{?param*}';
	              }
	            } else if (clone.method === 'GET' && angular.isObject(data)) {
	              // if its a GET request and its not the above, we can assume
	              // you want to do a query param like:
	              // ZooModel.query({ type: 'panda' }) and do /api/zoo?type=panda
	              // data = { param: data };
	              clone.params = extendDeep({}, clone.params, data);
	              // uri += '{?param*}';

	              //adding default query params. for query(s)
	              if (param.isPagedList) {
	                if (!clone.params.page) {
	                  clone.params.page = clone.defaultPagedListParams.page;
	                }
	                if (!clone.params.pageSize) {
	                  clone.params.pagesize = clone.defaultPagedListParams.pageSize;
	                }
	              }
	            }
	          } else {
	            uri = clone.url;
	          }

	          clone.url = Model.$url(uri, data, clone.method);

	          // don't include the payload for DELETE requests
	          if (action !== 'delete' && clone.method !== 'DELETE') {
	            clone.data = data;
	          }

	          // add files for withUpload versions...
	          if (action === 'postWithUpload' || action === 'updateWithUpload') {
	            clone.files = extras;
	          }

	          return Model.$call(clone);
	        };

	        /**
	         * Invokes `$http` given parameters and does some
	         * callback before/after and state setting.
	         */
	        Model.$call = function (params) {
	          // if we have the promise in queue, return it
	          //? exTODO NOTICE: could be improved for POST requests ( as for now I decided not to compare posted objects ... )
	          var fullUrl = Model.$url(params.url + '{?params*}', { params: params.params });
	          var signature = params.method + ':' + fullUrl;
	          var promise;
	          var def = $q.defer();

	          if (!params.bypassPromiseTracker && promiseTracker[signature]) {
	            return promiseTracker[signature];
	          }

	          // set the queue for this promise
	          promiseTracker[signature] = def.promise;

	          // copy the data so we can manipulate
	          // it before the request and not affect
	          // the core object
	          params.data = copy(params.data);

	          // before callbacks
	          //params.beforeRequest && params.beforeRequest(params);
	          if (params.beforeRequest) {
	            params.beforeRequest(params);
	          }
	          // strip all the internal functions/etc
	          params.data = Model.$strip(params.data);

	          if (params.method === 'POSTWITHUPLOAD' || params.method === 'PUTWITHUPLOAD') {
	            var filesToUpload = params.files;
	            var keys = [];
	            var files = [];
	            for (var key in filesToUpload) {
	              if (filesToUpload[key]) {
	                for (var i = 0; i < filesToUpload[key].length; i++) {
	                  var newKey = key;
	                  if (angular.isDefined(filesToUpload[key][i].coordinates)) {
	                    newKey += filesToUpload[key][i].coordinates;
	                  }
	                  keys.push(newKey);
	                  files.push(filesToUpload[key][i]);
	                }
	              }
	            }

	            promise = uploadService.upload({
	              url: params.url,
	              method: params.method === 'POSTWITHUPLOAD' ? 'POST' : 'PUT',
	              data: params.data,
	              file: files,
	              fileFormDataName: keys
	            });
	          } else {
	            promise = $http(params);
	          }

	          promise.then(function (response) {
	            // after callbacks
	            if (params.afterRequest) {
	              var transform = params.afterRequest(response.data);
	              if (transform) {
	                response.data = transform;
	              }
	            }

	            // if we had a cache, remove it
	            // this could be optimized to only do
	            // the invalidation of things by id/etc
	            if (params.invalidateCache) {
	              Model.$cache.removeAll();
	            }

	            if (response) {
	              if (params.wrap) {
	                if (params.isPagedList) {
	                  def.resolve(new Model.PagedList(response.data));
	                } else if (params.isArray) {
	                  def.resolve(new Model.List(response.data));
	                } else {
	                  def.resolve(new Model(response.data));
	                }
	              } else {
	                def.resolve(response.data);
	              }
	            } else {
	              def.resolve();
	            }
	          }, def.reject).finally(function () {
	            promiseTracker[signature] = undefined;
	          });

	          return def.promise;
	        };

	        /**
	         * Returns a url given the URI template and parameters.
	         *
	         * Examples:
	         *
	         *      // obj = { id: 2344 }
	         *      Model.$url('api/zoo/{id}', obj)
	         *      //-> 'api/zoo/2345'
	         *
	         *      // {}
	         *      Model.$url('api/zoo/{id}')
	         *      //-> 'api/zoo'
	         *
	         *      // { params: { type: 'panda' } }
	         *      Model.$url('api/zoo/{?params*}')
	         *      //-> 'api/zoo?type=panda'
	         *
	         * Optionally strips trailing `/`'s.
	         *
	         * Based on:
	         * https://github.com/geraintluff/uri-templates
	         */
	        Model.$url = function (u, params, method) {
	          var uri = new UriTemplate(u || url).fill(function (variableName) {
	            var resolvedVariable = params[variableName];

	            // if we have a match, substitute and remove it
	            // from the original params object
	            if (resolvedVariable) {
	              // only remove params on GET requests as the
	              // passed object is intended to be used
	              // as URL params. For persistent HTTP calls
	              // the object has to be left as it is (for now)
	              if (method === 'GET') {
	                delete params[variableName];
	              }

	              return resolvedVariable;
	            }

	            // ?? log an error??
	            return null;
	          });
	          // .fillFromObject(params || {});

	          if (options.stripTrailingSlashes) {
	            uri = uri.replace(/\/+$/, '') || '/';
	          }

	          return uri;
	        };

	        /**
	         * Remove instances of reserved keywords
	         * before sending to server/json.
	         */
	        Model.$strip = function (args) {
	          //? extodo NOTICE: this needs to account for relationships too?
	          // either make recursive or chain invoked
	          if (args && (typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object') {
	            forEach(args, function (v, k) {
	              if (instanceKeywords.indexOf(k) > -1) {
	                delete args[k];
	              }
	            });
	          }
	          return args;
	        };

	        // extend the static class with arguments that are not internal
	        forEach(options, function (v, k) {
	          if (staticKeywords.indexOf(k) === -1) {
	            Model[k] = v;
	          }
	        });

	        // has to be at end for depedency reasons
	        Model.List = ModelCollection;
	        Model.PagedList = PagedList;

	        return Model;
	      }

	      return modelFactory;
	    }];
	  });

	  return module;
	});

/***/ }

/******/ })
});
;
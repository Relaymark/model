'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Created by benoit.bacot on 29/08/2016.
 */
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular', 'uri-templates', 'deep-diff', 'ng-file-upload'], factory);
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
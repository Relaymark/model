'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DataSourceRegistrationModel = require('./DataSourceRegistrationModel.js');

var _DataSourceRegistrationModel2 = _interopRequireDefault(_DataSourceRegistrationModel);

var _DataEngineCounterModel = require('./DataEngineCounterModel.js');

var _DataEngineCounterModel2 = _interopRequireDefault(_DataEngineCounterModel);

var _DataEngineEventModel = require('./DataEngineEventModel.js');

var _DataEngineEventModel2 = _interopRequireDefault(_DataEngineEventModel);

var _DataEngineCustomerModel = require('./DataEngineCustomerModel.js');

var _DataEngineCustomerModel2 = _interopRequireDefault(_DataEngineCustomerModel);

var _DataSourceModel = require('./DataSourceModel.js');

var _DataSourceModel2 = _interopRequireDefault(_DataSourceModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('relaymark.model.data-engine', ['modelFactory']).factory('DataSourceModel', _DataSourceModel2.default).factory('DataSourceRegistrationModel', _DataSourceRegistrationModel2.default).factory('DataEngineCounterModel', _DataEngineCounterModel2.default).factory('DataEngineEventModel', _DataEngineEventModel2.default).factory('DataEngineCustomerModel', _DataEngineCustomerModel2.default).name;
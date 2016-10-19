'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RelayboxPageModel = require('./RelayboxPageModel.js');

var _RelayboxPageModel2 = _interopRequireDefault(_RelayboxPageModel);

var _RelayboxDataSourceModel = require('./RelayboxDataSourceModel.js');

var _RelayboxDataSourceModel2 = _interopRequireDefault(_RelayboxDataSourceModel);

var _RelayboxCounterDataModel = require('./data/RelayboxCounterDataModel.js');

var _RelayboxCounterDataModel2 = _interopRequireDefault(_RelayboxCounterDataModel);

var _RelayboxCounterLiveDataModel = require('./data/RelayboxCounterLiveDataModel.js');

var _RelayboxCounterLiveDataModel2 = _interopRequireDefault(_RelayboxCounterLiveDataModel);

var _RelayboxCounterTypeModel = require('./data/RelayboxCounterTypeModel.js');

var _RelayboxCounterTypeModel2 = _interopRequireDefault(_RelayboxCounterTypeModel);

var _RelayboxEventModel = require('./data/RelayboxEventModel.js');

var _RelayboxEventModel2 = _interopRequireDefault(_RelayboxEventModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('relaymark.model.relaybox', ['modelFactory']).factory('RelayboxPageModel', _RelayboxPageModel2.default).factory('RelayboxDataSourceModel', _RelayboxDataSourceModel2.default).factory('RelayboxCounterDataModel', _RelayboxCounterDataModel2.default).factory('RelayboxCounterLiveDataModel', _RelayboxCounterLiveDataModel2.default).factory('RelayboxCounterTypeModel', _RelayboxCounterTypeModel2.default).factory('RelayboxEventModel', _RelayboxEventModel2.default).name;
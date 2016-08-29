'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('ng-file-upload');

require('./relayboxApiModelFactory');

var _CmxNetworkModel = require('./Relaybox-driver-api/CmxNetworkModel.js');

var _CmxNetworkModel2 = _interopRequireDefault(_CmxNetworkModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('relaymark.model.relayboxDriver', ['relayboxApiModelFactory']).factory('CmxNetworkModel', _CmxNetworkModel2.default).name; /**
                                                                                                                                                             * Created by benoit.bacot on 29/08/2016.
                                                                                                                                                             */
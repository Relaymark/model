'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('ng-file-upload');

require('./relayboxApiModelFactory');

var _RbDriverCmxNetworkModel = require('./Relaybox-driver-api/RbDriverCmxNetworkModel');

var _RbDriverCmxNetworkModel2 = _interopRequireDefault(_RbDriverCmxNetworkModel);

var _RbDriverRegistrationModel = require('./Relaybox-driver-api/RbDriverRegistrationModel');

var _RbDriverRegistrationModel2 = _interopRequireDefault(_RbDriverRegistrationModel);

var _RbDriverEquipmentModel = require('./Relaybox-driver-api/RbDriverEquipmentModel');

var _RbDriverEquipmentModel2 = _interopRequireDefault(_RbDriverEquipmentModel);

var _RbDriverInstallationOptionsModel = require('./Relaybox-driver-api/RbDriverInstallationOptionsModel');

var _RbDriverInstallationOptionsModel2 = _interopRequireDefault(_RbDriverInstallationOptionsModel);

var _RbDriverAccessPointModel = require('./Relaybox-driver-api/RbDriverAccessPointModel');

var _RbDriverAccessPointModel2 = _interopRequireDefault(_RbDriverAccessPointModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('relaymark.model.relayboxDriver', ['relayboxApiModelFactory']).factory('RbDriverCmxNetworkModel', _RbDriverCmxNetworkModel2.default).factory('RbDriverRegistrationModel', _RbDriverRegistrationModel2.default).factory('RbDriverEquipmentModel', _RbDriverEquipmentModel2.default).factory('RbDriverInstallationOptionsModel', _RbDriverInstallationOptionsModel2.default).factory('RbDriverAccessPointModel', _RbDriverAccessPointModel2.default).name; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Created by benoit.bacot on 29/08/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
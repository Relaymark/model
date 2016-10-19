'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('ng-file-upload');

require('./relayboxApiModelFactory');

var _RbDriverCmxNetworkModel = require('./Relaybox-driver-api/RbDriverCmxNetworkModel');

var _RbDriverCmxNetworkModel2 = _interopRequireDefault(_RbDriverCmxNetworkModel);

var _RbDriverInstallationOptionsModel = require('./Relaybox-driver-api/RbDriverInstallationOptionsModel');

var _RbDriverInstallationOptionsModel2 = _interopRequireDefault(_RbDriverInstallationOptionsModel);

var _RbDriverAccessPointModel = require('./Relaybox-driver-api/RbDriverAccessPointModel');

var _RbDriverAccessPointModel2 = _interopRequireDefault(_RbDriverAccessPointModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import RbDriverRegistrationModel from './Relaybox-driver-api/RbDriverRegistrationModel';
// import RbDriverEquipmentModel from './Relaybox-driver-api/RbDriverEquipmentModel';

exports.default = angular.module('relaymark.model.relayboxDriver', ['relayboxApiModelFactory']).factory('RbDriverCmxNetworkModel', _RbDriverCmxNetworkModel2.default)
// .factory('RbDriverRegistrationModel', RbDriverRegistrationModel)
// .factory('RbDriverEquipmentModel', RbDriverEquipmentModel)

.factory('RbDriverInstallationOptionsModel', _RbDriverInstallationOptionsModel2.default).factory('RbDriverAccessPointModel', _RbDriverAccessPointModel2.default).name; /**
                                                                                                                                                                        * Created by benoit.bacot on 29/08/2016.
                                                                                                                                                                        */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('ng-file-upload');

require('./modelFactory.js');

var _DirectoryModule = require('./directory/Directory.module.js');

var _DirectoryModule2 = _interopRequireDefault(_DirectoryModule);

var _CommunityModule = require('./applications/community/Community.module.js');

var _CommunityModule2 = _interopRequireDefault(_CommunityModule);

var _RelayboxModule = require('./applications/relaybox/Relaybox.module.js');

var _RelayboxModule2 = _interopRequireDefault(_RelayboxModule);

var _DataEngineModule = require('./data-engine/DataEngine.module.js');

var _DataEngineModule2 = _interopRequireDefault(_DataEngineModule);

var _AdminModel = require('./admin/AdminModel.js');

var _AdminModel2 = _interopRequireDefault(_AdminModel);

var _CorporateInvitationModel = require('./communication/CorporateInvitationModel.js');

var _CorporateInvitationModel2 = _interopRequireDefault(_CorporateInvitationModel);

var _CaptivePortalModel = require('./captive-portal/CaptivePortalModel');

var _CaptivePortalModel2 = _interopRequireDefault(_CaptivePortalModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('relaymark.model', ['modelFactory', _CommunityModule2.default, _DirectoryModule2.default, _RelayboxModule2.default, _DataEngineModule2.default]).factory('AdminModel', _AdminModel2.default).factory('CorporateInvitationModel', _CorporateInvitationModel2.default).factory('CaptivePortalModel', _CaptivePortalModel2.default).name;
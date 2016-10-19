'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AffiliationModel = require('./nested/AffiliationModel.js');

var _AffiliationModel2 = _interopRequireDefault(_AffiliationModel);

var _AffiliationRequestModel = require('./nested/AffiliationRequestModel.js');

var _AffiliationRequestModel2 = _interopRequireDefault(_AffiliationRequestModel);

var _AssignmentModel = require('./nested/AssignmentModel.js');

var _AssignmentModel2 = _interopRequireDefault(_AssignmentModel);

var _EmployeeModel = require('./nested/EmployeeModel.js');

var _EmployeeModel2 = _interopRequireDefault(_EmployeeModel);

var _OrganizationUnitModel = require('./nested/OrganizationUnitModel.js');

var _OrganizationUnitModel2 = _interopRequireDefault(_OrganizationUnitModel);

var _CompanyModel = require('./CompanyModel.js');

var _CompanyModel2 = _interopRequireDefault(_CompanyModel);

var _EventModel = require('./EventModel.js');

var _EventModel2 = _interopRequireDefault(_EventModel);

var _CompanyLocationModel = require('./nested/CompanyLocationModel.js');

var _CompanyLocationModel2 = _interopRequireDefault(_CompanyLocationModel);

var _NetworkModel = require('./NetworkModel.js');

var _NetworkModel2 = _interopRequireDefault(_NetworkModel);

var _RegistrationModel = require('./RegistrationModel.js');

var _RegistrationModel2 = _interopRequireDefault(_RegistrationModel);

var _UserModel = require('./UserModel.js');

var _UserModel2 = _interopRequireDefault(_UserModel);

var _LocationAssignmentModel = require('./nested/LocationAssignmentModel.js');

var _LocationAssignmentModel2 = _interopRequireDefault(_LocationAssignmentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('relaymark.model.directory', ['modelFactory']).factory('AffiliationModel', _AffiliationModel2.default).factory('AffiliationRequestModel', _AffiliationRequestModel2.default).factory('AssignmentModel', _AssignmentModel2.default).factory('EmployeeModel', _EmployeeModel2.default).factory('OrganizationUnitModel', _OrganizationUnitModel2.default).factory('CompanyModel', _CompanyModel2.default).factory('EventModel', _EventModel2.default).factory('CompanyLocationModel', _CompanyLocationModel2.default).factory('NetworkModel', _NetworkModel2.default).factory('RegistrationModel', _RegistrationModel2.default).factory('UserModel', _UserModel2.default).factory('LocationAssignmentModel', _LocationAssignmentModel2.default).name;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('ng-file-upload');

require('./modelFactory.js');

var _AdminModel = require('./admin/AdminModel.js');

var _AdminModel2 = _interopRequireDefault(_AdminModel);

var _CommunityAppModel = require('./applications/community/CommunityAppModel.js');

var _CommunityAppModel2 = _interopRequireDefault(_CommunityAppModel);

var _CommunityCategoryModel = require('./applications/community/CommunityCategoryModel.js');

var _CommunityCategoryModel2 = _interopRequireDefault(_CommunityCategoryModel);

var _CommunityConfigurationModel = require('./applications/community/CommunityConfigurationModel.js');

var _CommunityConfigurationModel2 = _interopRequireDefault(_CommunityConfigurationModel);

var _CommunityLinkModel = require('./applications/community/CommunityLinkModel.js');

var _CommunityLinkModel2 = _interopRequireDefault(_CommunityLinkModel);

var _CommunityPageModel = require('./applications/community/CommunityPageModel.js');

var _CommunityPageModel2 = _interopRequireDefault(_CommunityPageModel);

var _CommunityPageWidgetModel = require('./applications/community/CommunityPageWidgetModel.js');

var _CommunityPageWidgetModel2 = _interopRequireDefault(_CommunityPageWidgetModel);

var _CommunityPostCommentModel = require('./applications/community/CommunityPostCommentModel.js');

var _CommunityPostCommentModel2 = _interopRequireDefault(_CommunityPostCommentModel);

var _CommunityPostModel = require('./applications/community/CommunityPostModel.js');

var _CommunityPostModel2 = _interopRequireDefault(_CommunityPostModel);

var _CommunityPreferenceModel = require('./applications/community/CommunityPreferenceModel.js');

var _CommunityPreferenceModel2 = _interopRequireDefault(_CommunityPreferenceModel);

var _CommunityWidgetModel = require('./applications/community/CommunityWidgetModel.js');

var _CommunityWidgetModel2 = _interopRequireDefault(_CommunityWidgetModel);

var _CorporateInvitationModel = require('./communication/CorporateInvitationModel.js');

var _CorporateInvitationModel2 = _interopRequireDefault(_CorporateInvitationModel);

var _AffiliationModel = require('./directory/nested/AffiliationModel.js');

var _AffiliationModel2 = _interopRequireDefault(_AffiliationModel);

var _AffiliationRequestModel = require('./directory/nested/AffiliationRequestModel.js');

var _AffiliationRequestModel2 = _interopRequireDefault(_AffiliationRequestModel);

var _AssignmentModel = require('./directory/nested/AssignmentModel.js');

var _AssignmentModel2 = _interopRequireDefault(_AssignmentModel);

var _EmployeeModel = require('./directory/nested/EmployeeModel.js');

var _EmployeeModel2 = _interopRequireDefault(_EmployeeModel);

var _OrganizationUnitModel = require('./directory/nested/OrganizationUnitModel.js');

var _OrganizationUnitModel2 = _interopRequireDefault(_OrganizationUnitModel);

var _CompanyModel = require('./directory/CompanyModel.js');

var _CompanyModel2 = _interopRequireDefault(_CompanyModel);

var _EventModel = require('./directory/EventModel.js');

var _EventModel2 = _interopRequireDefault(_EventModel);

var _CompanyLocationModel = require('./directory/nested/CompanyLocationModel.js');

var _CompanyLocationModel2 = _interopRequireDefault(_CompanyLocationModel);

var _NetworkModel = require('./directory/NetworkModel.js');

var _NetworkModel2 = _interopRequireDefault(_NetworkModel);

var _RegistrationModel = require('./directory/RegistrationModel.js');

var _RegistrationModel2 = _interopRequireDefault(_RegistrationModel);

var _UserModel = require('./directory/UserModel.js');

var _UserModel2 = _interopRequireDefault(_UserModel);

var _RelayboxPageModel = require('./applications/relaybox/RelayboxPageModel.js');

var _RelayboxPageModel2 = _interopRequireDefault(_RelayboxPageModel);

var _RelayboxDataSourceModel = require('./applications/relaybox/RelayboxDataSourceModel.js');

var _RelayboxDataSourceModel2 = _interopRequireDefault(_RelayboxDataSourceModel);

var _RelayboxCounterDataModel = require('./applications/relaybox/data/RelayboxCounterDataModel.js');

var _RelayboxCounterDataModel2 = _interopRequireDefault(_RelayboxCounterDataModel);

var _RelayboxCounterLiveDataModel = require('./applications/relaybox/data/RelayboxCounterLiveDataModel.js');

var _RelayboxCounterLiveDataModel2 = _interopRequireDefault(_RelayboxCounterLiveDataModel);

var _RelayboxCounterTypeModel = require('./applications/relaybox/data/RelayboxCounterTypeModel.js');

var _RelayboxCounterTypeModel2 = _interopRequireDefault(_RelayboxCounterTypeModel);

var _RelayboxEventModel = require('./applications/relaybox/data/RelayboxEventModel.js');

var _RelayboxEventModel2 = _interopRequireDefault(_RelayboxEventModel);

var _DataSourceRegistrationModel = require('./data-engine/DataSourceRegistrationModel.js');

var _DataSourceRegistrationModel2 = _interopRequireDefault(_DataSourceRegistrationModel);

var _DataEngineCounterModel = require('./data-engine/DataEngineCounterModel.js');

var _DataEngineCounterModel2 = _interopRequireDefault(_DataEngineCounterModel);

var _DataEngineEventModel = require('./data-engine/DataEngineEventModel.js');

var _DataEngineEventModel2 = _interopRequireDefault(_DataEngineEventModel);

var _CaptivePortalModel = require('./captive-portal/CaptivePortalModel');

var _CaptivePortalModel2 = _interopRequireDefault(_CaptivePortalModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('relaymark.model', ['modelFactory']).factory('AdminModel', _AdminModel2.default).factory('CommunityAppModel', _CommunityAppModel2.default).factory('CommunityCategoryModel', _CommunityCategoryModel2.default).factory('CommunityConfigurationModel', _CommunityConfigurationModel2.default).factory('CommunityLinkModel', _CommunityLinkModel2.default).factory('CommunityPageModel', _CommunityPageModel2.default).factory('CommunityPageWidgetModel', _CommunityPageWidgetModel2.default).factory('CommunityPostCommentModel', _CommunityPostCommentModel2.default).factory('CommunityPostModel', _CommunityPostModel2.default).factory('CommunityPreferenceModel', _CommunityPreferenceModel2.default).factory('CommunityWidgetModel', _CommunityWidgetModel2.default).factory('CorporateInvitationModel', _CorporateInvitationModel2.default).factory('AffiliationModel', _AffiliationModel2.default).factory('AffiliationRequestModel', _AffiliationRequestModel2.default).factory('AssignmentModel', _AssignmentModel2.default).factory('EmployeeModel', _EmployeeModel2.default).factory('OrganizationUnitModel', _OrganizationUnitModel2.default).factory('CompanyModel', _CompanyModel2.default).factory('EventModel', _EventModel2.default).factory('CompanyLocationModel', _CompanyLocationModel2.default).factory('NetworkModel', _NetworkModel2.default).factory('RegistrationModel', _RegistrationModel2.default).factory('UserModel', _UserModel2.default).factory('RelayboxPageModel', _RelayboxPageModel2.default).factory('RelayboxDataSourceModel', _RelayboxDataSourceModel2.default).factory('RelayboxCounterDataModel', _RelayboxCounterDataModel2.default).factory('RelayboxCounterLiveDataModel', _RelayboxCounterLiveDataModel2.default).factory('RelayboxCounterTypeModel', _RelayboxCounterTypeModel2.default).factory('RelayboxEventModel', _RelayboxEventModel2.default).factory('DataSourceRegistrationModel', _DataSourceRegistrationModel2.default).factory('DataEngineCounterModel', _DataEngineCounterModel2.default).factory('DataEngineEventModel', _DataEngineEventModel2.default).factory('CaptivePortalModel', _CaptivePortalModel2.default).name;
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

var _DataEngineConsumeCounterSampleLiveModel = require('./data-engine/consume/DataEngineConsumeCounterSampleLiveModel.js');

var _DataEngineConsumeCounterSampleLiveModel2 = _interopRequireDefault(_DataEngineConsumeCounterSampleLiveModel);

var _DataEngineConsumeCounterSampleModel = require('./data-engine/consume/DataEngineConsumeCounterSampleModel.js');

var _DataEngineConsumeCounterSampleModel2 = _interopRequireDefault(_DataEngineConsumeCounterSampleModel);

var _DataEngineConsumeCounterTypeModel = require('./data-engine/consume/DataEngineConsumeCounterTypeModel.js');

var _DataEngineConsumeCounterTypeModel2 = _interopRequireDefault(_DataEngineConsumeCounterTypeModel);

var _DataEngineConsumeCustomerModel = require('./data-engine/consume/DataEngineConsumeCustomerModel.js');

var _DataEngineConsumeCustomerModel2 = _interopRequireDefault(_DataEngineConsumeCustomerModel);

var _DataEngineConsumeDataSourcesModel = require('./data-engine/consume/DataEngineConsumeDataSourcesModel.js');

var _DataEngineConsumeDataSourcesModel2 = _interopRequireDefault(_DataEngineConsumeDataSourcesModel);

var _DataEngineConsumeEventModel = require('./data-engine/consume/DataEngineConsumeEventModel.js');

var _DataEngineConsumeEventModel2 = _interopRequireDefault(_DataEngineConsumeEventModel);

var _DataEngineDeclareDataSourceModel = require('./data-engine/declare/DataEngineDeclareDataSourceModel.js');

var _DataEngineDeclareDataSourceModel2 = _interopRequireDefault(_DataEngineDeclareDataSourceModel);

var _DataEngineDeclareRegistrationModel = require('./data-engine/declare/DataEngineDeclareRegistrationModel.js');

var _DataEngineDeclareRegistrationModel2 = _interopRequireDefault(_DataEngineDeclareRegistrationModel);

var _DataEnginePopulateCounterSampleModel = require('./data-engine/populate/DataEnginePopulateCounterSampleModel.js');

var _DataEnginePopulateCounterSampleModel2 = _interopRequireDefault(_DataEnginePopulateCounterSampleModel);

var _DataEnginePopulateDataChunkModel = require('./data-engine/populate/DataEnginePopulateDataChunkModel.js');

var _DataEnginePopulateDataChunkModel2 = _interopRequireDefault(_DataEnginePopulateDataChunkModel);

var _DataEnginePopulateEventModel = require('./data-engine/populate/DataEnginePopulateEventModel.js');

var _DataEnginePopulateEventModel2 = _interopRequireDefault(_DataEnginePopulateEventModel);

var _CaptivePortalModel = require('./captive-portal/CaptivePortalModel');

var _CaptivePortalModel2 = _interopRequireDefault(_CaptivePortalModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('relaymark.model', ['modelFactory']).factory('AdminModel', _AdminModel2.default).factory('CommunityAppModel', _CommunityAppModel2.default).factory('CommunityCategoryModel', _CommunityCategoryModel2.default).factory('CommunityConfigurationModel', _CommunityConfigurationModel2.default).factory('CommunityLinkModel', _CommunityLinkModel2.default).factory('CommunityPageModel', _CommunityPageModel2.default).factory('CommunityPageWidgetModel', _CommunityPageWidgetModel2.default).factory('CommunityPostCommentModel', _CommunityPostCommentModel2.default).factory('CommunityPostModel', _CommunityPostModel2.default).factory('CommunityPreferenceModel', _CommunityPreferenceModel2.default).factory('CommunityWidgetModel', _CommunityWidgetModel2.default).factory('CorporateInvitationModel', _CorporateInvitationModel2.default).factory('AffiliationModel', _AffiliationModel2.default).factory('AffiliationRequestModel', _AffiliationRequestModel2.default).factory('AssignmentModel', _AssignmentModel2.default).factory('EmployeeModel', _EmployeeModel2.default).factory('OrganizationUnitModel', _OrganizationUnitModel2.default).factory('CompanyModel', _CompanyModel2.default).factory('EventModel', _EventModel2.default).factory('CompanyLocationModel', _CompanyLocationModel2.default).factory('NetworkModel', _NetworkModel2.default).factory('RegistrationModel', _RegistrationModel2.default).factory('UserModel', _UserModel2.default).factory('RelayboxPageModel', _RelayboxPageModel2.default).factory('CaptivePortalModel', _CaptivePortalModel2.default).factory('DataEngineConsumeCounterSampleLiveModel', _DataEngineConsumeCounterSampleLiveModel2.default).factory('DataEngineConsumeCounterSampleModel', _DataEngineConsumeCounterSampleModel2.default).factory('DataEngineConsumeCounterTypeModel', _DataEngineConsumeCounterTypeModel2.default).factory('DataEngineConsumeCustomerModel', _DataEngineConsumeCustomerModel2.default).factory('DataEngineConsumeDataSourcesModel', _DataEngineConsumeDataSourcesModel2.default).factory('DataEngineConsumeEventModel', _DataEngineConsumeEventModel2.default).factory('DataEngineDeclareDataSourceModel', _DataEngineDeclareDataSourceModel2.default).factory('DataEngineDeclareRegistrationModel', _DataEngineDeclareRegistrationModel2.default).factory('DataEnginePopulateCounterSampleModel', _DataEnginePopulateCounterSampleModel2.default).factory('DataEnginePopulateDataChunkModel', _DataEnginePopulateDataChunkModel2.default).factory('DataEnginePopulateEventModel', _DataEnginePopulateEventModel2.default).name;
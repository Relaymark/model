import 'ng-file-upload';
import './modelFactory.js';
import AdminModel from './admin/AdminModel.js';
import CommunityAppModel from './applications/community/CommunityAppModel.js';
import CommunityCategoryModel from './applications/community/CommunityCategoryModel.js';
import CommunityConfigurationModel from './applications/community/CommunityConfigurationModel.js';
import CommunityLinkModel from './applications/community/CommunityLinkModel.js';
import CommunityPageModel from './applications/community/CommunityPageModel.js';
import CommunityPageWidgetModel from './applications/community/CommunityPageWidgetModel.js';
import CommunityPostCommentModel from './applications/community/CommunityPostCommentModel.js';
import CommunityPostModel from './applications/community/CommunityPostModel.js';
import CommunityPreferenceModel from './applications/community/CommunityPreferenceModel.js';
import CommunityWidgetModel from './applications/community/CommunityWidgetModel.js';
import CorporateInvitationModel from './communication/CorporateInvitationModel.js';
import AffiliationModel from './directory/nested/AffiliationModel.js';
import AffiliationRequestModel from './directory/nested/AffiliationRequestModel.js';
import AssignmentModel from './directory/nested/AssignmentModel.js';
import EmployeeModel from './directory/nested/EmployeeModel.js';
import OrganizationUnitModel from './directory/nested/OrganizationUnitModel.js';
import CompanyModel from './directory/CompanyModel.js';
import EventModel from './directory/EventModel.js';
import CompanyLocationModel from './directory/nested/CompanyLocationModel.js';
import NetworkModel from './directory/NetworkModel.js';
import RegistrationModel from './directory/RegistrationModel.js';
import UserModel from './directory/UserModel.js';

import RelayboxPageModel from './applications/relaybox/RelayboxPageModel.js';
import RelayboxDataSourceModel from './applications/relaybox/RelayboxDataSourceModel.js';

import RelayboxCounterDataModel from './applications/relaybox/data/RelayboxCounterDataModel.js';
import RelayboxCounterTypeModel from './applications/relaybox/data/RelayboxCounterTypeModel.js';
import RelayboxEventModel from './applications/relaybox/data/RelayboxEventModel.js';

import DataSourceRegistrationModel from './data-engine/DataSourceRegistrationModel.js';
import DataEngineCounterModel from './data-engine/DataEngineCounterModel.js';
import DataEngineEventModel from './data-engine/DataEngineEventModel.js';

export default angular.module('relaymark.model', ['modelFactory'])
    .factory('AdminModel', AdminModel)
    .factory('CommunityAppModel', CommunityAppModel)
    .factory('CommunityCategoryModel', CommunityCategoryModel)
    .factory('CommunityConfigurationModel', CommunityConfigurationModel)
    .factory('CommunityLinkModel', CommunityLinkModel)
    .factory('CommunityPageModel', CommunityPageModel)
    .factory('CommunityPageWidgetModel', CommunityPageWidgetModel)
    .factory('CommunityPostCommentModel', CommunityPostCommentModel)
    .factory('CommunityPostModel', CommunityPostModel)
    .factory('CommunityPreferenceModel', CommunityPreferenceModel)
    .factory('CommunityWidgetModel', CommunityWidgetModel)
    .factory('CorporateInvitationModel', CorporateInvitationModel)
    .factory('AffiliationModel', AffiliationModel)
    .factory('AffiliationRequestModel', AffiliationRequestModel)
    .factory('AssignmentModel', AssignmentModel)
    .factory('EmployeeModel', EmployeeModel)
    .factory('OrganizationUnitModel', OrganizationUnitModel)
    .factory('CompanyModel', CompanyModel)
    .factory('EventModel', EventModel)
    .factory('CompanyLocationModel', CompanyLocationModel)
    .factory('NetworkModel', NetworkModel)
    .factory('RegistrationModel', RegistrationModel)
    .factory('UserModel', UserModel)
    .factory('RelayboxPageModel', RelayboxPageModel)
    .factory('RelayboxDataSourceModel', RelayboxDataSourceModel)
    .factory('RelayboxCounterDataModel', RelayboxCounterDataModel)
    .factory('RelayboxCounterTypeModel', RelayboxCounterTypeModel)
    .factory('RelayboxEventModel', RelayboxEventModel)
    .factory('DataSourceRegistrationModel', DataSourceRegistrationModel)
    .factory('DataEngineCounterModel', DataEngineCounterModel)
    .factory('DataEngineEventModel', DataEngineEventModel)
    .name;

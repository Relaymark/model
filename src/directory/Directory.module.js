import AffiliationModel from './nested/AffiliationModel.js';
import AffiliationRequestModel from './nested/AffiliationRequestModel.js';
import AssignmentModel from './nested/AssignmentModel.js';
import EmployeeModel from './nested/EmployeeModel.js';
import OrganizationUnitModel from './nested/OrganizationUnitModel.js';
import CompanyModel from './CompanyModel.js';
import EventModel from './EventModel.js';
import CompanyLocationModel from './nested/CompanyLocationModel.js';
import NetworkModel from './NetworkModel.js';
import RegistrationModel from './RegistrationModel.js';
import UserModel from './UserModel.js';
import LocationAssignmentModel from './nested/LocationAssignmentModel.js';
import AffiliatedNetworkModel from './nested/AffiliatedNetworkModel.js';
import CompanyLocationGroupModel from './nested/CompanyLocationGroupModel.js';


export default angular.module('relaymark.model.directory', ['modelFactory'])
    .factory('CompanyModel', CompanyModel)
    .factory('EventModel', EventModel)
    .factory('NetworkModel', NetworkModel)
    .factory('RegistrationModel', RegistrationModel)
    .factory('UserModel', UserModel)
    .factory('AffiliatedNetworkModel', AffiliatedNetworkModel)
    .factory('AffiliationModel', AffiliationModel)
    .factory('AffiliationRequestModel', AffiliationRequestModel)
    .factory('AssignmentModel', AssignmentModel)
    .factory('CompanyLocationGroupModel', CompanyLocationGroupModel)
    .factory('CompanyLocationModel', CompanyLocationModel)
    .factory('EmployeeModel', EmployeeModel)
    .factory('LocationAssignmentModel', LocationAssignmentModel)
    .factory('OrganizationUnitModel', OrganizationUnitModel)
    .name;
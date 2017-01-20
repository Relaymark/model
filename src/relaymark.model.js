import 'ng-file-upload';
import './modelFactory.js';
import DirectoryModule from './directory/Directory.module.js';

import ApplicationModule from './applications/Applications.module.js';
import DataEngineModule from './data-engine/DataEngine.module.js';
import RelayboxPageModel from './applications/relaybox/RelayboxPageModel.js';

import AdminModel from './admin/AdminModel.js';
import CorporateInvitationModel from './communication/CorporateInvitationModel.js';

import CaptivePortalModel from './captive-portal/CaptivePortalModel';
import CaptivePortalAccessPointModel from './captive-portal/CaptivePortalAccessPointModel';

export default angular.module('relaymark.model', ['modelFactory', ApplicationModule, DirectoryModule, DataEngineModule])
    .factory('AdminModel', AdminModel)
    .factory('CorporateInvitationModel', CorporateInvitationModel)
    .factory('CaptivePortalModel', CaptivePortalModel)
    .factory('CaptivePortalAccessPointModel', CaptivePortalAccessPointModel)
    .name;

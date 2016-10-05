import 'ng-file-upload';
import './modelFactory.js';
import DirectoryModule from './directory/Directory.module.js';

import CommunityModule from './applications/community/Community.module.js';
import RelayboxModule from './applications/relaybox/Relaybox.module.js';
import DataEngineModule from './data-engine/DataEngine.module.js';

import AdminModel from './admin/AdminModel.js';

import CorporateInvitationModel from './communication/CorporateInvitationModel.js';

import CaptivePortalModel from './captive-portal/CaptivePortalModel'

export default angular.module('relaymark.model', ['modelFactory', CommunityModule, DirectoryModule, RelayboxModule, DataEngineModule])
    .factory('AdminModel', AdminModel)
    .factory('CorporateInvitationModel', CorporateInvitationModel)
    .factory('CaptivePortalModel', CaptivePortalModel)
    .name;

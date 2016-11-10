

import RelayboxModule from './relaybox/Relaybox.module.js';
import CommunityModule from './community/Community.module.js';


import ApplicationModel from './ApplicationModel.js';
import ApplicationPermissionModel from './ApplicationPermissionModel.js';
import ApplicationSetupModel from './ApplicationSetupModel.js';



export default angular.module('relaymark.model.application', ['modelFactory', RelayboxModule, CommunityModule])
    .factory('ApplicationModel', ApplicationModel)
    .factory('ApplicationPermissionModel', ApplicationPermissionModel)
    .factory('ApplicationSetupModel', ApplicationSetupModel)
    .name;
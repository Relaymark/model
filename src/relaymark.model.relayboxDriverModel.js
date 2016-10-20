/**
 * Created by benoit.bacot on 29/08/2016.
 */
import 'ng-file-upload';
import './relayboxApiModelFactory';

// import RbDriverRegistrationModel from './Relaybox-driver-api/RbDriverRegistrationModel';
// import RbDriverEquipmentModel from './Relaybox-driver-api/RbDriverEquipmentModel';

import RbDriverCmxNetworkModel from './Relaybox-driver-api/RbDriverCmxNetworkModel';
import RbDriverInstallationOptionsModel from './Relaybox-driver-api/RbDriverInstallationOptionsModel';
import RbDriverAccessPointModel from './Relaybox-driver-api/RbDriverAccessPointModel';

export default angular.module('relaymark.model.relayboxDriver', ['relayboxApiModelFactory'])
// .factory('RbDriverRegistrationModel', RbDriverRegistrationModel)
// .factory('RbDriverEquipmentModel', RbDriverEquipmentModel)
  
  .factory('RbDriverCmxNetworkModel', RbDriverCmxNetworkModel)
  .factory('RbDriverInstallationOptionsModel', RbDriverInstallationOptionsModel)
  .factory('RbDriverAccessPointModel', RbDriverAccessPointModel)  
  .name;

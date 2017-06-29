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

import RbDriverCmxNetworkMerakiConfigurationModel from './Relaybox-driver-api/RbDriverCmxNetworkMerakiConfigurationModel';
import RbDriverCmxNetworkCountersConfigurationModel from './Relaybox-driver-api/RbDriverCmxNetworkCountersConfigurationModel';
import RbDriverCmxNetworkCloudtraxConfigurationModel from './Relaybox-driver-api/RbDriverCmxNetworkCloudtraxConfigurationModel';
import RbDriverCmxNetworkCaptivePortalConfigurationModel from './Relaybox-driver-api/RbDriverCmxNetworkCaptivePortalConfigurationModel';
import RbDriverRegistrationCountersConfigurationModel from './Relaybox-driver-api/RbDriverRegistrationCountersConfigurationModel';
import RbDriverCmxNetworkAccessPointModel from './Relaybox-driver-api/RbDriverCmxNetworkAccessPointModel';

export default angular.module('relaymark.model.relayboxDriver', ['relayboxApiModelFactory'])
// .factory('RbDriverRegistrationModel', RbDriverRegistrationModel)
// .factory('RbDriverEquipmentModel', RbDriverEquipmentModel)
  .factory('RbDriverCmxNetworkModel', RbDriverCmxNetworkModel)
  .factory('RbDriverInstallationOptionsModel', RbDriverInstallationOptionsModel)
  .factory('RbDriverAccessPointModel', RbDriverAccessPointModel)
  .factory('RbDriverCmxNetworkMerakiConfigurationModel', RbDriverCmxNetworkMerakiConfigurationModel)
  .factory('RbDriverCmxNetworkCountersConfigurationModel', RbDriverCmxNetworkCountersConfigurationModel)
  .factory('RbDriverCmxNetworkCloudtraxConfigurationModel', RbDriverCmxNetworkCloudtraxConfigurationModel)
  .factory('RbDriverCmxNetworkCaptivePortalConfigurationModel', RbDriverCmxNetworkCaptivePortalConfigurationModel)
  .factory('RbDriverRegistrationCountersConfigurationModel', RbDriverRegistrationCountersConfigurationModel)
  .factory('RbDriverCmxNetworkAccessPointModel', RbDriverCmxNetworkAccessPointModel)
  .name;

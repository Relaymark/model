/**
 * Created by benoit.bacot on 29/08/2016.
 */
import 'ng-file-upload';
import './relayboxApiModelFactory';
import RbDriverCmxNetworkModel from './Relaybox-driver-api/RbDriverCmxNetworkModel';
import RbDriverRegistrationModel from './Relaybox-driver-api/RbDriverRegistrationModel';
import RbDriverEquipmentModel from './Relaybox-driver-api/RbDriverEquipmentModel';

export default angular.module('relaymark.model.relayboxDriver', ['relayboxApiModelFactory'])
  .factory('RbDriverCmxNetworkModel', RbDriverCmxNetworkModel)
  .factory('RbDriverRegistrationModel', RbDriverRegistrationModel)
  .factory('RbDriverEquipmentModel', RbDriverEquipmentModel)
  .name;

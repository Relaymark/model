/**
 * Created by benoit.bacot on 29/08/2016.
 */
import 'ng-file-upload';
import './modelFactory.js';
import CmxNetworkModel from './Relaybox-driver-api/CmxNetworkModel.js';


export default angular.module('relaymark.model.relayboxDriver', ['$relayboxApiModelFactory'])
  .factory('CmxNetworkModel', CmxNetworkModel)
  .name;

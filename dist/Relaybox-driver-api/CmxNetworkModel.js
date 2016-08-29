'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CmxNetworkModel;
/**
 * Created by benoit.bacot on 29/08/2016.
 */
CmxNetworkModel.$inject = ['$relayboxApiModelFactory'];
function CmxNetworkModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('networks', {});
}
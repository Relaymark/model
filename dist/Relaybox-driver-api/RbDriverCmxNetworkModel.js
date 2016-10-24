'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RbDriverCmxNetworkModel;
/**
 * Created by benoit.bacot on 29/08/2016.
 */
RbDriverCmxNetworkModel.$inject = ['$relayboxApiModelFactory'];
function RbDriverCmxNetworkModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('networks', {
    actions: {
      setCaptivePortal: {
        method: 'PUT',
        url: '{networkShortId}/captive-portal',
        wrap: false
      }
    }
  });
}
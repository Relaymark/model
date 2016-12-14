/**
 * Created by benoit.bacot on 29/08/2016.
 */
RbDriverCmxNetworkModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverCmxNetworkModel($relayboxApiModelFactory) {
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

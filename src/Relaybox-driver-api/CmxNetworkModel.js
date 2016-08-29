/**
 * Created by benoit.bacot on 29/08/2016.
 */
CmxNetworkModel.$inject = ['$relayboxApiModelFactory'];
export default function CmxNetworkModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('networks', { });
}

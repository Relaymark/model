/**
 * Created by benoit.bacot on 02/10/2016.
 */
RbDriverInstallationOptionsModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverInstallationOptionsModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('installation-options', { });
}

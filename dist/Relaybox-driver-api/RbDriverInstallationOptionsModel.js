'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RbDriverInstallationOptionsModel;
/**
 * Created by benoit.bacot on 02/10/2016.
 */
RbDriverInstallationOptionsModel.$inject = ['$relayboxApiModelFactory'];
function RbDriverInstallationOptionsModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('installation-options', {});
}
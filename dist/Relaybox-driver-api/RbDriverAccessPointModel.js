'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RbDriverAccessPointModel;
/**
 * Created by benoit.bacot on 02/10/2016.
 */
RbDriverAccessPointModel.$inject = ['$relayboxApiModelFactory'];
function RbDriverAccessPointModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('access-point', {});
}
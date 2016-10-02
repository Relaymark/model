'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RbDriverEquipmentModel;
RbDriverEquipmentModel.$inject = ['$relayboxApiModelFactory'];
function RbDriverEquipmentModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('equipments', {});
}
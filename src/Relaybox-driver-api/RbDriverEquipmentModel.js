RbDriverEquipmentModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverEquipmentModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('equipments', { });
}

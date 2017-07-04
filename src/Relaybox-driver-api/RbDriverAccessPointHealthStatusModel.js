RbDriverAccessPointHealthStatusModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverAccessPointHealthStatusModel($relayboxApiModelFactory) {
  return {
      forMacAddress: function (macAddress) {
          return $relayboxApiModelFactory('access-points/' + macAddress + '/health-status');
        }
  }
}

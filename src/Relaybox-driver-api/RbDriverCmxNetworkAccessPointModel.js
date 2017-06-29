RbDriverCmxNetworkAccessPointModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverCmxNetworkAccessPointModel($relayboxApiModelFactory) {
  return {
      forNetwork: function (networkShortId) {
          return $relayboxApiModelFactory('networks/' + networkShortId + '/access-points');
        }
  }
}

RbDriverCmxNetworkRegistrationModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverCmxNetworkRegistrationModel($relayboxApiModelFactory) {
  return {
      forNetwork: function (networkShortId) {
          return $relayboxApiModelFactory('networks/' + networkShortId + '/registrations');
        }
  }
}

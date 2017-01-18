RbDriverCmxNetworkCloudtraxConfigurationModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverCmxNetworkCloudtraxConfigurationModel($relayboxApiModelFactory) {
  return {
      forNetwork: function (networkShortId) {
          return $relayboxApiModelFactory('networks/' + networkShortId + '/cloudtrax-configuration');
        }
  }
}

RbDriverCmxNetworkCountersConfigurationModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverCmxNetworkCountersConfigurationModel($relayboxApiModelFactory) {
  return {
      forNetwork: function (networkShortId) {
          return $relayboxApiModelFactory('networks/' + networkShortId + '/counters-configuration');
        }
    };
}

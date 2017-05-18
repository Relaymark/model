RbDriverCmxNetworkCaptivePortalConfigurationModel
RbDriverCmxNetworkCaptivePortalConfigurationModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverCmxNetworkCaptivePortalConfigurationModel($relayboxApiModelFactory) {
  return {
      forNetwork: function (networkShortId) {
          return $relayboxApiModelFactory('networks/' + networkShortId + '/captive-portal-configuration');
        }
    };
}

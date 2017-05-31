RbDriverRegistrationCountersConfigurationModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverRegistrationCountersConfigurationModel($relayboxApiModelFactory) {
  return {
      forNetwork: function (registrationShortid) {
          return $relayboxApiModelFactory("registration/"+ registrationShortid + "/counters-configuration");
        }
    };
}

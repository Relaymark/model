RbDriverRegistrationCountersConfigurationModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverRegistrationCountersConfigurationModel($relayboxApiModelFactory) {
  return {
      forRegistration: function (registrationShortid) {
          return $relayboxApiModelFactory("registration/"+ registrationShortid + "/counters-configuration");
        }
    };
}

RbDriverRegistrationModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverRegistrationModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('registrations');
}

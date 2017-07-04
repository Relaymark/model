RbDriverAccessPointHealthStatusesModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverAccessPointHealthStatusesModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('access-points/health-statuses');
}

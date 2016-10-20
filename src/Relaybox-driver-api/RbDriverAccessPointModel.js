/**
 * Created by benoit.bacot on 02/10/2016.
 */
RbDriverAccessPointModel.$inject = ['$relayboxApiModelFactory'];
export default function RbDriverAccessPointModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('access-point', {
    actions: {
      batch: {
        method: 'POST',
        url: 'batch',
        wrap: false
      }
    }
  });
}

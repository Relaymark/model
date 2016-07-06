EventModel.$inject = ['$modelFactory'];
export default function EventModel($modelFactory) {
  return $modelFactory('events');
}

DataEnginePopulateEventModel.$inject = ['$modelFactory'];
export default function DataEnginePopulateEventModel($modelFactory) {
  return $modelFactory('data-engine/populate/events');
}

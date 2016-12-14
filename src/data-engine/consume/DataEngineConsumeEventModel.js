DataEngineConsumeEventModel.$inject = ['$modelFactory'];
export default function DataEngineConsumeEventModel($modelFactory) {
  return $modelFactory('data-engine/consume/events');
}

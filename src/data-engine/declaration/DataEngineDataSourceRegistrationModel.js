DataEngineDataSourceRegistrationModel.$inject = ['$modelFactory'];
export default function DataEngineDataSourceRegistrationModel($modelFactory) {
  return $modelFactory('data-engine/declaration/registrations');
}

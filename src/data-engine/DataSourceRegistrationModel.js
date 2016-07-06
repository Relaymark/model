DataSourceRegistrationModel.$inject = ['$modelFactory'];
export default function DataSourceRegistrationModel($modelFactory) {
  return $modelFactory('data-engine/registrations');
}

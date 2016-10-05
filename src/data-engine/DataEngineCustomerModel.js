DataEngineCustomerModel.$inject = ['$modelFactory'];
export default function DataEngineCustomerModel($modelFactory) { 
  return $modelFactory('data-engine/customers');
}

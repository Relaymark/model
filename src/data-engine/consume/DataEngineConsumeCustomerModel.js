DataEngineConsumeCustomerModel.$inject = ['$modelFactory'];
export default function DataEngineConsumeCustomerModel($modelFactory) {
  return $modelFactory('data-engine/consume/customers');
}
DataEngineDataSourceModel.$inject = ['$modelFactory'];
export default function DataEngineDataSourceModel($modelFactory) {
  return $modelFactory('data-engine/declaration/data-sources');
}

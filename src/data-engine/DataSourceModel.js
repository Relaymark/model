DataSourceModel.$inject = ['$modelFactory'];
export default function DataSourceModel($modelFactory) {
  return $modelFactory('data-engine/data-sources');
}

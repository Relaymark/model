RelayboxDataSourceModel.$inject = ['$modelFactory'];
export default function RelayboxDataSourceModel($modelFactory) {
    return $modelFactory('applications/relaybox/data-sources');
}

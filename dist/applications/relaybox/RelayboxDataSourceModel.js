'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RelayboxDataSourceModel;
RelayboxDataSourceModel.$inject = ['$modelFactory'];
function RelayboxDataSourceModel($modelFactory) {
    return $modelFactory('applications/relaybox/data-sources');
}
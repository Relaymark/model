'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DataEngineConsumeDataSourcesModel;
DataEngineConsumeDataSourcesModel.$inject = ['$modelFactory'];
function DataEngineConsumeDataSourcesModel($modelFactory) {
    return $modelFactory('data-engine/consume/data-sources');
}
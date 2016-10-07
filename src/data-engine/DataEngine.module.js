
import DataSourceRegistrationModel from './DataSourceRegistrationModel.js';
import DataEngineCounterModel from './DataEngineCounterModel.js';
import DataEngineEventModel from './DataEngineEventModel.js';
import DataEngineCustomerModel from './DataEngineCustomerModel.js';
import DataSourceModel from './DataSourceModel.js';
import DataEngineDataChunkModel from './DataEngineDataChunkModel.js';



export default angular.module('relaymark.model.data-engine', ['modelFactory'])
    .factory('DataSourceModel', DataSourceModel)
    .factory('DataSourceRegistrationModel', DataSourceRegistrationModel)
    .factory('DataEngineCounterModel', DataEngineCounterModel)
    .factory('DataEngineEventModel', DataEngineEventModel)
    .factory('DataEngineCustomerModel', DataEngineCustomerModel)
    .factory('DataEngineDataChunkModel', DataEngineDataChunkModel)
    .name;
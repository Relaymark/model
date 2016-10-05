
import DataSourceRegistrationModel from './DataSourceRegistrationModel.js';
import DataEngineCounterModel from './DataEngineCounterModel.js';
import DataEngineEventModel from './DataEngineEventModel.js';



export default angular.module('relaymark.model.data-engine', ['modelFactory'])
    .factory('DataSourceRegistrationModel', DataSourceRegistrationModel)
    .factory('DataEngineCounterModel', DataEngineCounterModel)
    .factory('DataEngineEventModel', DataEngineEventModel)
    .name;
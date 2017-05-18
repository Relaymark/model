import DataEngineConsumeCounterSampleLiveModel from './consume/DataEngineConsumeCounterSampleLiveModel.js';
import DataEngineConsumeCounterSampleModel from './consume/DataEngineConsumeCounterSampleModel.js';
import DataEngineConsumeCounterTypeModel from './consume/DataEngineConsumeCounterTypeModel.js';
import DataEngineConsumeCustomerModel from './consume/DataEngineConsumeCustomerModel.js';
import DataEngineConsumeDataSourcesModel from './consume/DataEngineConsumeDataSourcesModel.js';
import DataEngineConsumeEventModel from './consume/DataEngineConsumeEventModel.js';

import DataEngineDeclareDataSourceModel from './declare/DataEngineDeclareDataSourceModel.js';
import DataEngineDeclareRegistrationModel from './declare/DataEngineDeclareRegistrationModel.js';

import DataEnginePopulateCounterSampleModel from './populate/DataEnginePopulateCounterSampleModel.js';
import DataEnginePopulateDataChunkModel from './populate/DataEnginePopulateDataChunkModel.js';
import DataEnginePopulateEventModel from './populate/DataEnginePopulateEventModel.js';

export default angular.module('relaymark.model.data-engine', ['modelFactory'])
    .factory('DataEngineConsumeCounterSampleLiveModel', DataEngineConsumeCounterSampleLiveModel)
    .factory('DataEngineConsumeCounterSampleModel', DataEngineConsumeCounterSampleModel)
    .factory('DataEngineConsumeCounterTypeModel', DataEngineConsumeCounterTypeModel)
    .factory('DataEngineConsumeCustomerModel', DataEngineConsumeCustomerModel)
    .factory('DataEngineConsumeDataSourcesModel', DataEngineConsumeDataSourcesModel)
    .factory('DataEngineConsumeEventModel', DataEngineConsumeEventModel)

    .factory('DataEngineDeclareDataSourceModel', DataEngineDeclareDataSourceModel)
    .factory('DataEngineDeclareRegistrationModel', DataEngineDeclareRegistrationModel)

    .factory('DataEnginePopulateCounterSampleModel', DataEnginePopulateCounterSampleModel)
    .factory('DataEnginePopulateDataChunkModel', DataEnginePopulateDataChunkModel)
    .factory('DataEnginePopulateEventModel', DataEnginePopulateEventModel)
    .name;
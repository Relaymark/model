import 'ng-file-upload';
import './modelFactory.js';
import DirectoryModule from './directory/Directory.module.js';

import ApplicationModule from './applications/Applications.module.js';
import DataEngineModule from './data-engine/DataEngine.module.js';
import RelayboxPageModel from './applications/relaybox/RelayboxPageModel.js';

import AdminModel from './admin/AdminModel.js';
import DataEngineConsumeCounterSampleLiveModel from './data-engine/consume/DataEngineConsumeCounterSampleLiveModel.js';
import DataEngineConsumeCounterSampleModel from './data-engine/consume/DataEngineConsumeCounterSampleModel.js';
import DataEngineConsumeCounterTypeModel from './data-engine/consume/DataEngineConsumeCounterTypeModel.js';
import DataEngineConsumeCustomerModel from './data-engine/consume/DataEngineConsumeCustomerModel.js';
import DataEngineConsumeDataSourcesModel from './data-engine/consume/DataEngineConsumeDataSourcesModel.js';
import DataEngineConsumeEventModel from './data-engine/consume/DataEngineConsumeEventModel.js';

import CorporateInvitationModel from './communication/CorporateInvitationModel.js';
import DataEngineDeclareDataSourceModel from './data-engine/declare/DataEngineDeclareDataSourceModel.js';
import DataEngineDeclareRegistrationModel from './data-engine/declare/DataEngineDeclareRegistrationModel.js';

import DataEnginePopulateCounterSampleModel from './data-engine/populate/DataEnginePopulateCounterSampleModel.js';
import DataEnginePopulateDataChunkModel from './data-engine/populate/DataEnginePopulateDataChunkModel.js';
import DataEnginePopulateEventModel from './data-engine/populate/DataEnginePopulateEventModel.js';

import CaptivePortalModel from './captive-portal/CaptivePortalModel'

export default angular.module('relaymark.model', ['modelFactory', ApplicationModule, DirectoryModule, DataEngineModule])
    .factory('AdminModel', AdminModel)
    .factory('CorporateInvitationModel', CorporateInvitationModel)
    .factory('CaptivePortalModel', CaptivePortalModel)

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

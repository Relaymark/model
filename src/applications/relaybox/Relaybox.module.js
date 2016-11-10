
import RelayboxPageModel from './RelayboxPageModel.js';
import RelayboxDataSourceModel from './RelayboxDataSourceModel.js';

import RelayboxCounterDataModel from './data/RelayboxCounterDataModel.js';
import RelayboxCounterLiveDataModel from './data/RelayboxCounterLiveDataModel.js';
import RelayboxCounterTypeModel from './data/RelayboxCounterTypeModel.js';
import RelayboxEventModel from './data/RelayboxEventModel.js';



export default angular.module('relaymark.model.relaybox', ['modelFactory'])
    .factory('RelayboxDataSourceModel', RelayboxDataSourceModel)
    .factory('RelayboxPageModel', RelayboxPageModel)
    .factory('RelayboxCounterDataModel', RelayboxCounterDataModel)
    .factory('RelayboxCounterLiveDataModel', RelayboxCounterLiveDataModel)
    .factory('RelayboxCounterTypeModel', RelayboxCounterTypeModel)
    .factory('RelayboxEventModel', RelayboxEventModel)
    .name;
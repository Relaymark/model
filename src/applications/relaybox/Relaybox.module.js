
import RelayboxPageModel from './RelayboxPageModel.js';

export default angular.module('relaymark.model.relaybox', ['modelFactory'])
    .factory('RelayboxDataSourceModel', RelayboxDataSourceModel)
    .factory('RelayboxPageModel', RelayboxPageModel)
    .factory('RelayboxCounterDataModel', RelayboxCounterDataModel)
    .factory('RelayboxCounterLiveDataModel', RelayboxCounterLiveDataModel)
    .factory('RelayboxCounterTypeModel', RelayboxCounterTypeModel)
    .factory('RelayboxEventModel', RelayboxEventModel)
    .name;
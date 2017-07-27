
import RelayboxPageModel from './RelayboxPageModel.js';
import RelayboxPageSeedModel from './RelayboxPageSeedModel.js';

export default angular.module('relaymark.model.relaybox', ['modelFactory'])
    .factory('RelayboxPageModel', RelayboxPageModel)
    .factory('RelayboxPageSeedModel', RelayboxPageSeedModel)
    .name;
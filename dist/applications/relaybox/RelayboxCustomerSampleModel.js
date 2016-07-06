'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RelayboxCustomerSampleModel;
RelayboxCustomerSampleModel.$inject = ['$modelFactory'];
function RelayboxCustomerSampleModel($modelFactory) {
    var result = {
        forCounterName: function forCounterName(counterName) {
            //TODO: change later
            return $modelFactory('applications/relaybox/eventsources/registrations/sample/' + counterName);
        }
    };
    return result;
}
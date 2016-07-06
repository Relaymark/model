'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RelayboxEventSourceRegistrationModel;
RelayboxEventSourceRegistrationModel.$inject = ['$modelFactory'];
function RelayboxEventSourceRegistrationModel($modelFactory) {
  return $modelFactory('applications/relaybox/eventsources/registrations/fake', {
    actions: {
      query: {
        method: 'GET',
        isArray: true,
        isPagedList: false
      }
    }
  });
}
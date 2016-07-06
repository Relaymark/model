'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RegistrationModel;
RegistrationModel.$inject = ['$modelFactory'];
function RegistrationModel($modelFactory) {
  return $modelFactory('registrations', {
    actions: {
      sendRegistrationEmail: {
        method: 'POST',
        url: '{shortId}/operators', //the call will be RegistrationModel.sendRegistrationEmail(dataObj, uriTemplateParamsObject)
        wrap: false
      }
    }
  });
}
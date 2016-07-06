RegistrationModel.$inject = ['$modelFactory'];
export default function RegistrationModel($modelFactory) {
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

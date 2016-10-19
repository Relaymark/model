'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CorporateInvitationModel;
CorporateInvitationModel.$inject = ['$modelFactory'];
function CorporateInvitationModel($modelFactory) {
  return $modelFactory('communication/corporate-invitations', {
    actions: {
      getStatuses: {
        method: 'GET',
        url: 'statuses',
        wrap: false
      },
      unban: {
        method: 'POST',
        url: 'unban',
        wrap: false
      }
    }
  });
}
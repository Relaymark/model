CorporateInvitationModel.$inject = ['$modelFactory'];
export default function CorporateInvitationModel($modelFactory) {
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

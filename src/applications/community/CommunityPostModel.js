CommunityPostModel.$inject = ['$modelFactory'];
export default function CommunityPostModel($modelFactory) {
  var result = {
    forNetwork: function (networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/posts', {
        actions: {
          acceptReadReceipt: {
            method: 'POST',
            url: '{shortId}/readReceiptAccepted',
            wrap: false
          },
          acceptAttachment: {
            method: 'POST',
            url: '{shortId}/attachmentAccepted',
            wrap: false
          }
        }
      });
    }
  };
  return result;
}

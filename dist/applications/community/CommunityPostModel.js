'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityPostModel;
CommunityPostModel.$inject = ['$modelFactory'];
function CommunityPostModel($modelFactory) {
  var result = {
    forNetwork: function forNetwork(networkId) {
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
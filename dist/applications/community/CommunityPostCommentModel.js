'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityPostCommentModel;
CommunityPostCommentModel.$inject = ['$modelFactory'];
function CommunityPostCommentModel($modelFactory) {
  var result = {
    forNetworkAndPost: function forNetworkAndPost(networkId, postId) {
      return $modelFactory('applications/networks/' + networkId + '/community/posts/' + postId + '/comments');
    }
  };
  return result;
}
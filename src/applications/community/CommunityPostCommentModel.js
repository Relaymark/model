CommunityPostCommentModel.$inject = ['$modelFactory'];
export default function CommunityPostCommentModel($modelFactory) {
  var result = {
    forNetworkAndPost: function (networkId, postId) {
      return $modelFactory('applications/networks/' + networkId + '/community/posts/' + postId + '/comments');
    }
  };
  return result;
}

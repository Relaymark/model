'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityPreferenceModel;
CommunityPreferenceModel.$inject = ['$modelFactory'];
function CommunityPreferenceModel($modelFactory) {
  var result = {
    forNetwork: function forNetwork(networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/preferences', {
        actions: {
          getFavoriteLinks: {
            method: 'GET',
            url: 'favorite-links',
            isArray: true,
            wrap: false
          },
          addLinkToFavorites: {
            method: 'PUT',
            url: 'favorite-links/{shortId}',
            wrap: false
          },
          removeLinkFromFavorites: {
            method: 'DELETE',
            url: 'favorite-links/{shortId}',
            wrap: false
          },
          getLinkOrders: {
            method: 'GET',
            url: 'link-orders',
            isArray: true,
            wrap: false
          },
          setLinkOrders: {
            method: 'PUT',
            url: 'link-orders',
            wrap: false
          }
        }
      });
    }
  };
  return result;
}
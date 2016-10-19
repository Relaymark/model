'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommunityConfigurationModel;
/*eslint-disable no-unused-vars */
CommunityConfigurationModel.$inject = ['$modelFactory', 'CommunityWidgetModel', 'CommunityLinkModel', 'CommunityPageModel', 'CommunityCategoryModel'];
function CommunityConfigurationModel($modelFactory, CommunityWidgetModel, CommunityLinkModel, CommunityPageModel, CommunityCategoryModel) {
  var result = {
    forNetwork: function forNetwork(networkId) {
      return $modelFactory('applications/networks/' + networkId + '/community/configuration', {
        actions: {
          updateUserPermissions: {
            method: 'PUT',
            url: 'userpermissions',
            isArray: true, //not a paged result for now ...
            wrap: false
          }
        },
        map: {
          //'userPermissions': function(userPermissions, communityConfig) { //FINALLY do not map here as we are just doing a PUT action with the full collection ...
          //  var Factory = CommunityUserPermissionModel.forNetwork(networkId);
          //  return userPermissions ? userPermissions.map(function(x){
          //    var model = new Factory(x);
          //    return model;
          //  }) : [];
          //},
          widgets: function widgets(_widgets, communityConfig) {
            var Factory = CommunityWidgetModel.forNetwork(networkId);
            return _widgets ? _widgets.map(function (x) {
              var model = new Factory(x);
              return model;
            }) : [];
          },
          links: function links(_links, communityConfig) {
            var Factory = CommunityLinkModel.forNetwork(networkId);
            return _links ? _links.map(function (x) {
              var model = new Factory(x);
              return model;
            }) : [];
          },
          pages: function pages(_pages, communityConfig) {
            var Factory = CommunityPageModel.forNetwork(networkId);
            return _pages ? _pages.map(function (x) {
              var model = new Factory(x);
              return model;
            }) : [];
          },
          categories: function categories(_categories, communityConfig) {
            var Factory = CommunityCategoryModel.forNetwork(networkId);
            return _categories ? _categories.map(function (x) {
              var model = new Factory(x);
              return model;
            }) : [];
          }
        }
      });
    }
  };
  return result;
}
/*eslint-enable no-unused-vars */
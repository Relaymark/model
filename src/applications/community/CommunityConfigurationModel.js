/*eslint-disable no-unused-vars */
CommunityConfigurationModel.$inject = ['$modelFactory', 'CommunityWidgetModel', 'CommunityLinkModel', 'CommunityPageModel', 'CommunityCategoryModel'];
export default function CommunityConfigurationModel($modelFactory,
                                                    CommunityWidgetModel,
                                                    CommunityLinkModel,
                                                    CommunityPageModel,
                                                    CommunityCategoryModel) {
  var result = {
    forNetwork: function (networkId) {
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
          widgets: function (widgets, communityConfig) {
            var Factory = CommunityWidgetModel.forNetwork(networkId);
            return widgets ? widgets.map(function (x) {
              var model = new Factory(x);
              return model;
            }) : [];
          },
          links: function (links, communityConfig) {
            var Factory = CommunityLinkModel.forNetwork(networkId);
            return links ? links.map(function (x) {
              var model = new Factory(x);
              return model;
            }) : [];
          },
          pages: function (pages, communityConfig) {
            var Factory = CommunityPageModel.forNetwork(networkId);
            return pages ? pages.map(function (x) {
              var model = new Factory(x);
              return model;
            }) : [];
          },
          categories: function (categories, communityConfig) {
            var Factory = CommunityCategoryModel.forNetwork(networkId);
            return categories ? categories.map(function (x) {
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

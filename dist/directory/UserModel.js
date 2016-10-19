'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserModel;
UserModel.$inject = ['$modelFactory'];
function UserModel($modelFactory) {
  return $modelFactory('directory/users', {
    actions: {
      getMe: {
        method: 'GET',
        url: 'me',
        wrap: false
      },
      getMeCompanies: {
        method: 'GET',
        url: 'me/companies',
        isPagedList: true,
        wrap: false
      },
      getMeNetworks: {
        method: 'GET',
        url: 'me/networks',
        isPagedList: true,
        wrap: false
      },
      getDefaultAffiliations: {
        method: 'GET',
        url: '{shortId}/default-affiliations',
        wrap: false
      },
      setDefaultAffiliationForNetwork: {
        method: 'POST',
        url: '{shortId}/default-affiliations/{networkShortId}',
        wrap: false
      }
    }
  });
}
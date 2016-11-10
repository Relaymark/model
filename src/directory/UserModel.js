UserModel.$inject = ['$modelFactory'];
export default function UserModel($modelFactory) {
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
      },
      'getMeApplications': {
        method: 'GET',
        url: 'me/applications',
        isPagedList: true,
        wrap: false
      },
      'getMeApplicationSetups': {
        method: 'GET',
        url: 'me/application-setups',
        isPagedList: true,
        wrap: false
      },
      'getMeLocationAssignments': {
        method: 'GET',
        url: 'me/location-assignments',
        isPagedList: true,
        wrap: false
      }
    }
  });
}

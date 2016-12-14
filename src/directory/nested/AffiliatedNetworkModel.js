AffiliatedNetworkModel.$inject = ['$modelFactory'];
export default function AffiliatedNetworkModel($modelFactory) {
    var result = {
      forCompanyAndAffiliation: function(companyShortId, affiliationShortId) {
        return $modelFactory('directory/companies/' + companyShortId + '/affiliations/' + affiliationShortId + '/network');
      }
    };
    return result;
}


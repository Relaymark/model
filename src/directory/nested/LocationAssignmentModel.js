LocationAssignmentModel.$inject = ['$modelFactory'];
export default function LocationAssignmentModel($modelFactory) {
    var result = {
        forCompany: function(companyId) {
            return $modelFactory('directory/companies/' + companyId + '/location-assignments');
        },
        forNetwork: function (networkId) {
            return $modelFactory('directory/networks/' + networkId + '/location-assignments');
        },
        forNetworkAndOrganizationUnit: function(networkShortId, ouShortId) {
            return $modelFactory('directory/networks/' + networkShortId + '/organization-units/'+ ouShortId+'/location-assignments');
        }
    };
    return result;
}

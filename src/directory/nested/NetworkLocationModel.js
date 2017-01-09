CompanyLocationModel.$inject = ['$modelFactory'];
export default function CompanyLocationModel($modelFactory) {
    var result = {
        forCompany: function (networkId) {
            return $modelFactory('directory/networks/' + networkId + '/locations');
        }
    };
    return result;
}

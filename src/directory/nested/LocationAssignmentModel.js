LocationAssignmentModel.$inject = ['$modelFactory'];
export default function LocationAssignmentModel($modelFactory) {
    var result = {
        forNetwork: function (networkId) {
            return $modelFactory('directory/networks/' + networkId + '/location-assignments');
        }
    };
    return result;
}

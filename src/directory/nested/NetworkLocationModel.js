NetworkLocationModel.$inject = ['$modelFactory'];
export default function NetworkLocationModel($modelFactory) {
    var result = {
        forNetwork: function (networkId) {
            return $modelFactory('directory/networks/' + networkId + '/locations');
        }
    };
    return result;
}

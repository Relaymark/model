'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = LocationAssignmentModel;
LocationAssignmentModel.$inject = ['$modelFactory'];
function LocationAssignmentModel($modelFactory) {
    var result = {
        forNetwork: function forNetwork(networkId) {
            return $modelFactory('directory/networks/' + networkId + '/location-assignments');
        }
    };
    return result;
}
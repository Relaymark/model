'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LocationModel;
LocationModel.$inject = ['$modelFactory'];
function LocationModel($modelFactory) {
  return $modelFactory('directory/locations');
}
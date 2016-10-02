'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RelayboxPageModel;
/**
 * Created by benjamin.speth on 28/09/2016.
 */

RelayboxPageModel.$inject = ['$modelFactory'];
function RelayboxPageModel($modelFactory) {
  return $modelFactory('captive-portal', {});
}
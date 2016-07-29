'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RelayboxPageModel;
/**
 * Created by benjamin.speth on 24/03/2016.
 */

RelayboxPageModel.$inject = ['$modelFactory'];
function RelayboxPageModel($modelFactory) {
  return $modelFactory('applications/relaybox/pages', {});
}
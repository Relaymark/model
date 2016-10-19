'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CaptivePortalModel;
/**
 * Created by benjamin.speth on 28/09/2016.
 */

CaptivePortalModel.$inject = ['$modelFactory'];
function CaptivePortalModel($modelFactory) {
  return $modelFactory('captive-portal', {});
}
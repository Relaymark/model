'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RbDriverRegistrationModel;
RbDriverRegistrationModel.$inject = ['$relayboxApiModelFactory'];
function RbDriverRegistrationModel($relayboxApiModelFactory) {
  return $relayboxApiModelFactory('registrations', {});
}
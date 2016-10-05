'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CommunityAppModel = require('./CommunityAppModel.js');

var _CommunityAppModel2 = _interopRequireDefault(_CommunityAppModel);

var _CommunityCategoryModel = require('./CommunityCategoryModel.js');

var _CommunityCategoryModel2 = _interopRequireDefault(_CommunityCategoryModel);

var _CommunityConfigurationModel = require('./CommunityConfigurationModel.js');

var _CommunityConfigurationModel2 = _interopRequireDefault(_CommunityConfigurationModel);

var _CommunityLinkModel = require('./CommunityLinkModel.js');

var _CommunityLinkModel2 = _interopRequireDefault(_CommunityLinkModel);

var _CommunityPageModel = require('./CommunityPageModel.js');

var _CommunityPageModel2 = _interopRequireDefault(_CommunityPageModel);

var _CommunityPageWidgetModel = require('./CommunityPageWidgetModel.js');

var _CommunityPageWidgetModel2 = _interopRequireDefault(_CommunityPageWidgetModel);

var _CommunityPostCommentModel = require('./CommunityPostCommentModel.js');

var _CommunityPostCommentModel2 = _interopRequireDefault(_CommunityPostCommentModel);

var _CommunityPostModel = require('./CommunityPostModel.js');

var _CommunityPostModel2 = _interopRequireDefault(_CommunityPostModel);

var _CommunityPreferenceModel = require('./CommunityPreferenceModel.js');

var _CommunityPreferenceModel2 = _interopRequireDefault(_CommunityPreferenceModel);

var _CommunityWidgetModel = require('./CommunityWidgetModel.js');

var _CommunityWidgetModel2 = _interopRequireDefault(_CommunityWidgetModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('relaymark.model.community', ['modelFactory']).factory('CommunityAppModel', _CommunityAppModel2.default).factory('CommunityCategoryModel', _CommunityCategoryModel2.default).factory('CommunityConfigurationModel', _CommunityConfigurationModel2.default).factory('CommunityLinkModel', _CommunityLinkModel2.default).factory('CommunityPageModel', _CommunityPageModel2.default).factory('CommunityPageWidgetModel', _CommunityPageWidgetModel2.default).factory('CommunityPostCommentModel', _CommunityPostCommentModel2.default).factory('CommunityPostModel', _CommunityPostModel2.default).factory('CommunityPreferenceModel', _CommunityPreferenceModel2.default).factory('CommunityWidgetModel', _CommunityWidgetModel2.default).name;
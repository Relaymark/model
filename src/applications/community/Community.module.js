
import CommunityAppModel from './CommunityAppModel.js';
import CommunityCategoryModel from './CommunityCategoryModel.js';
import CommunityConfigurationModel from './CommunityConfigurationModel.js';
import CommunityLinkModel from './CommunityLinkModel.js';
import CommunityPageModel from './CommunityPageModel.js';
import CommunityPageWidgetModel from './CommunityPageWidgetModel.js';
import CommunityPostCommentModel from './CommunityPostCommentModel.js';
import CommunityPostModel from './CommunityPostModel.js';
import CommunityPreferenceModel from './CommunityPreferenceModel.js';
import CommunityWidgetModel from './CommunityWidgetModel.js';



export default angular.module('relaymark.model.community', ['modelFactory'])
    .factory('CommunityAppModel', CommunityAppModel)
    .factory('CommunityCategoryModel', CommunityCategoryModel)
    .factory('CommunityConfigurationModel', CommunityConfigurationModel)
    .factory('CommunityLinkModel', CommunityLinkModel)
    .factory('CommunityPageModel', CommunityPageModel)
    .factory('CommunityPageWidgetModel', CommunityPageWidgetModel)
    .factory('CommunityPostCommentModel', CommunityPostCommentModel)
    .factory('CommunityPostModel', CommunityPostModel)
    .factory('CommunityPreferenceModel', CommunityPreferenceModel)
    .factory('CommunityWidgetModel', CommunityWidgetModel)
    .name;
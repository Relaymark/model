ApplicationPermissionModel.$inject = ['$modelFactory'];
export default function ApplicationPermissionModel($modelFactory) {
    return $modelFactory('directory/application-permissions', {
      actions: {
        'query': {
          method: 'GET',
          /**
           * If true then the returned object for this action is an array.
           */
          isArray: true,
          /**
           * If true then the returned object is a paged List.
           */
          isPagedList: false //isPagedList === true bypass isArray params.
        }
      }
    });
  }

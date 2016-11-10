ApplicationModel.$inject = ['$modelFactory'];
export default function ApplicationModel($modelFactory) {
    return $modelFactory('directory/applications', {
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

ApplicationSetupModel.$inject = ['$modelFactory'];
export default function ApplicationSetupModel($modelFactory) {
    return $modelFactory('directory/application-setups', {
      actions: {
        'query': {
          method: 'GET',
          /**
           * If true then the returned object for this action is an array.
           */
          isArray: false,
          /**
           * If true then the returned object is a paged List.
           */
          isPagedList: true //isPagedList === true bypass isArray params.
        }

      }
    });
  }

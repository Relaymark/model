##Publishing
    0. COMMIT ! 
    1. npm version patch
    2. git push origin master --tags ( here a a new tag certainly created per npm version patch before ... )
    3. npm publish

##Configuration

    config.$inject = ['AppConstants', '$modelFactoryProvider'];
    export default function config(AppConstants, $modelFactoryProvider, $httpProvider, svOAuth2Provider) {
    
      $modelFactoryProvider.defaultOptions.prefix = AppConstants.ENDPOINT_API;
    
    }

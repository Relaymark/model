##Publishing
    1. npm run build 
    2. git commit -am "some changes"
    3. npm version patch
    4. git push origin master --tags ( here a a new tag certainly created per npm version patch before ... )
    5. npm publish

##Configuration

    config.$inject = ['AppConstants', '$modelFactoryProvider'];
    export default function config(AppConstants, $modelFactoryProvider, $httpProvider, svOAuth2Provider) {
    
      $modelFactoryProvider.defaultOptions.prefix = AppConstants.ENDPOINT_API;
    
    }

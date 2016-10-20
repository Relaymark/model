##Publishing
    0. delete dist 
    1. npm run build 
    2. git add -A
    3. git commit -am "some changes"
    4. npm version patch
    5. git push origin master --tags ( here a a new tag certainly created per npm version patch before ... )
    6. npm publish

##Configuration

    config.$inject = ['AppConstants', '$modelFactoryProvider'];
    export default function config(AppConstants, $modelFactoryProvider, $httpProvider, svOAuth2Provider) {
    
      $modelFactoryProvider.defaultOptions.prefix = AppConstants.ENDPOINT_API;
    
    }

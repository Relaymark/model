#Relaymark.model
Relaymark model is a angularjs module which allows you to use the Relaymark Platform API.

If you want to discover our products, please visit us @ www.relaymark.com

You can check some documentation about our apis here : https://github.com/Relaymark/documentation/tree/master/ApiReference


##Publishing 
    1. npm run build (will remove dist and build)
    2. git add -A
    3. git commit -am "some changes"
    4. npm version patch
    5. git push origin master --tags
    6. npm publish

##Configuration

    config.$inject = ['AppConstants', '$modelFactoryProvider'];
    export default function config(AppConstants, $modelFactoryProvider, $httpProvider, svOAuth2Provider) {
    
      $modelFactoryProvider.defaultOptions.prefix = AppConstants.ENDPOINT_API;
    
    }

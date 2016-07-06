
##Configuration

    config.$inject = ['AppConstants', '$modelFactoryProvider'];
    export default function config(AppConstants, $modelFactoryProvider, $httpProvider, svOAuth2Provider) {
    
      $modelFactoryProvider.defaultOptions.prefix = AppConstants.ENDPOINT_API;
    
    }

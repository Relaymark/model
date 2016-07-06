/**
 * Created by benjamin.speth on 24/03/2016.
 */

RelayboxPageModel.$inject = ['$modelFactory'];
export default function RelayboxPageModel($modelFactory) {
    return $modelFactory('applications/relaybox/pages', { });
}

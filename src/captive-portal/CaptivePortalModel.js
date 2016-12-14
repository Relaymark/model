/**
 * Created by benjamin.speth on 28/09/2016.
 */

RelayboxPageModel.$inject = ['$modelFactory'];
export default function RelayboxPageModel($modelFactory) {
    return $modelFactory('captive-portal', {});
}

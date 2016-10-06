/**
 * Created by benjamin.speth on 28/09/2016.
 */

CaptivePortalModel.$inject = ['$modelFactory'];
export default function CaptivePortalModel($modelFactory) {
    return $modelFactory('captive-portal', { });
}

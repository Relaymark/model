CompanyModel.$inject = ['$modelFactory'];
export default function LocationModel($modelFactory) {
  return $modelFactory('directory/locations');
}


CompanyLocationGroupModel.$inject = ['$modelFactory'];
export default function CompanyLocationGroupModel($modelFactory) {
    var result = {
      forNetwork: function(networkShortId) {
        return $modelFactory('directory/networks/' + networkShortId + '/company-location-groups' , {
          instance: {
            sortLocationIds: function() {
              // set companyLocationIds
              this.companyLocationIds = [];
              if(this.companyLocations) {
                this.companyLocationIds = this.companyLocations.map(function(item) {
                  return item.id;
                });
              }
              // removing CompanyLocations list
              delete this.companyLocations;
            }
          }
        });
      }
    };
    return result;
  }

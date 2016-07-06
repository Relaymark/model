CompanyLocationModel.$inject = ['$modelFactory'];
export default function CompanyLocationModel($modelFactory) {
    var result = {
        forCompany: function (companyId) {
            return $modelFactory('directory/companies/' + companyId + '/locations', {
                instance: {
                    getFormattedAddress: function () {
                        var str = '';
                        if (this.address) {
                            str += this.address.number ? this.address.number : '';
                            str += this.address.street ? ' ' + this.address.street : '';
                            str += this.address.complement ? ' ' + this.address.complement : '';
                            str += this.address.zipCode ? ' ' + this.address.zipCode : '';
                            str += this.address.city ? ' ' + this.address.city : '';
                            str += this.address.country ? ' ' + this.address.country : '';
                        }
                        return str;
                    },
                    canGeocodeAddress: function () {
                        return this.address
                            && ((this.address.street && this.address.zipCode) || this.address.city);
                    }
                }
            });
        }
    };
    return result;
}

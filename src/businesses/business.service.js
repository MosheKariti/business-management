const GenericService = require('../generics/generic_service');
const User = require('./business.model');

class BusinessService extends GenericService {
    constructor() {
        super(User);
    }
}

module.exports = new BusinessService();
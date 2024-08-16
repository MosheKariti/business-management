const GenericService = require('../generics/generic_service');
const User = require('./category.model');

class CategoryService extends GenericService {
    constructor() {
        super(User);
    }
}

module.exports = new CategoryService();
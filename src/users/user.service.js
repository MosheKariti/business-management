const GenericService = require('../generics/generic_service');
const User = require('./user.model');

class UserService extends GenericService {
    constructor() {
        super(User);
    }
}

module.exports = new UserService();
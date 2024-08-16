const GenericService = require('../generics/generic_service');
const User = require('./appointment.model');

class AppointmentService extends GenericService {
    constructor() {
        super(User);
    }
}

module.exports = new AppointmentService();
const controllerFactory = require('../generics/controller_factory');
const service = require('./appointment.service');

module.exports = controllerFactory.create(service);
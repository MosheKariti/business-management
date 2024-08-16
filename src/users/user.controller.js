const controllerFactory = require('../generics/controller_factory');
const service = require('./user.service');

module.exports = controllerFactory.create(service);
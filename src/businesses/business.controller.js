const controllerFactory = require('../generics/controller_factory');
const service = require('./business.service');

module.exports = controllerFactory.create(service);
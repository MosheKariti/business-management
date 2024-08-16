const controllerFactory = require('../generics/controller_factory');
const service = require('./category.service');

module.exports = controllerFactory.create(service);
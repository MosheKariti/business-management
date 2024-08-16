const routerFactory = require('../generics/router_factory');
const controller = require('./appointment.controller');

module.exports = routerFactory.create(controller);
const routerFactory = require('../generics/router_factory');
const controller = require('./business.controller');

module.exports = routerFactory.create(controller);
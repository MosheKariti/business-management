const routerFactory = require('../generics/router_factory');
const controller = require('./category.controller');

module.exports = routerFactory.create(controller);
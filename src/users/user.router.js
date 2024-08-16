const routerFactory = require('../generics/router_factory');
const controller = require('./user.controller');

module.exports = routerFactory.create(controller);
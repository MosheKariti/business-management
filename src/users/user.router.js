const routerFactory = require('../generics/router_factory');
const controller = require('./user.controller');

routerFactory.create(controller);
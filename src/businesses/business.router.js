const routerFactory = require('../generics/router_factory');
const controller = require('./business.controller');

routerFactory.create(controller);
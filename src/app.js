const config = require('./config');
const app = require('./routes');  // renamed to avoid conflict
const logger = require('./logging/logger');
const server = require('http').createServer(app);

server.listen(config.port, () => logger.log(`Server is listening on port ${config.port}`));

require('./mongo');
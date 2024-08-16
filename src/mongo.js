const mongoose = require('mongoose');
const config = require('./config');
const { log } = require('./logging/logger');

mongoose.connect(config.mongoUrl, {
}).then(() => {
    log('MongoDB connected successfully', { by: 'mongo', color: 'green' });
}).catch(err => {
    log('MongoDB connection error:', { color: 'red'});
});
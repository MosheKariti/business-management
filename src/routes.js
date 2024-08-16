const app = require('express')();
const cors = require('cors');

app.use(cors());

app.use('/', (req, res, next) => {
    console.log('here');
    res.send('here2');
});

app.use('/users', authenticationMiddleware, require('./users/user.router'));
app.use('/businesses', authenticationMiddleware, require('./businesses/businesses.router'));
app.use('/appointments', authenticationMiddleware, require('./appointments/appoinments.router'));

module.exports = app;
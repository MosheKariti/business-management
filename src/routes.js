const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());


app.use(bodyParser.json());

app.use('/users', require('./users/user.router'));
app.use('/businesses', require('./businesses/business.router'));
app.use('/appointments', require('./appointments/appointment.router'));

app.use('/', (req, res, next) => {
    console.log('here');
    res.send('here2');
});

module.exports = app;
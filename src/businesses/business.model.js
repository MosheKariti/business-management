const genericModelFields = require('../generics/generic_model_fields');
const mongoose = require('mongoose');
const { Schema  } = mongoose

module.exports = mongoose.model('Business', new Schema({
    name: { type: String, required: true },
    address: {
        country: String,
        city: String,
        street: String,
        zip: String,
    },
    region: String,
    timezone: String,
    isActive: Boolean,
    ...genericModelFields
}));
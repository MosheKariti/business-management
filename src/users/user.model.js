const genericModelFields = require('../generics/generic_model_fields');
const mongoose = require('mongoose');
const { Schema  } = mongoose

module.exports = mongoose.model('User', new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    },
    password: { type: String, required: true },
    isStaff: Boolean,
    isBusinessOwner: Boolean,
    ...genericModelFields
}));
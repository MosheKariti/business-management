const genericModelFields = require('../generics/generic_model_fields');
const mongoose = require('mongoose');
const { Schema  } = mongoose

module.exports = mongoose.model('Appointment', new Schema({
    client: { type: Schema.Types.ObjectId, ref: 'User' },
    business: { type: Schema.Types.ObjectId, ref: 'Business' },
    at: Date,
    provider: { type: Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, ref: 'Category' },
    ...genericModelFields
}));
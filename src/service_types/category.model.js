const genericModelFields = require('../generics/generic_model_fields');
const mongoose = require('mongoose');
const { Schema  } = mongoose

module.exports = mongoose.model('Category', new Schema({
    name: String,
    business: { type: Schema.Types.ObjectId, ref: 'Business' },
    duration: {
        hours: { type: Number, default: 0 },
        minutes: { type: Number, default: 0 },
        required: true
    },
    ...genericModelFields
}));
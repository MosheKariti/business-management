const { Schema } = require('mongoose');

module.exports = {
    create: { at: Date, by: { type: Schema.Types.ObjectId, ref: 'User' }  },
    lastUpdated: { at: Date, by: { type: Schema.Types.ObjectId, ref: 'User' }  }
}
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, trim: true, lowercase: true, required: true },
    email: { type: String, unique: true, lowercase: true, trim: true, required: true },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
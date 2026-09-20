const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mernpractice');

const userSchema = mongoose.Schema({
    name: String,
    role: String,
    image: String,
});

const User = mongoose.model('user', userSchema);
module.exports = User;
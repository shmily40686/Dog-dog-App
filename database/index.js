const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/dog-user';

const db = mongoose.connect(mongoUri);

module.exports = db;
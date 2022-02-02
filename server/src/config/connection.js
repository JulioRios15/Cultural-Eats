const mongoose = require('mongoose');
const configVars = require('./vars');

mongoose.connect(configVars.dbUri);

module.exports = mongoose.connection;
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const connect = (url) => mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;

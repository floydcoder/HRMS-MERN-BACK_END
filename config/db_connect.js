const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:1234@datacluster.6i0bay9.mongodb.net/?retryWrites=true&w=majority');


module.exports = mongoose.connection;

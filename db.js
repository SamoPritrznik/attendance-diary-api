
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0-olnyy.mongodb.net/test?retryWrites=true&w=majority');
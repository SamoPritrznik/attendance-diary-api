var mongoose = require('mongoose');  
var AdminSchema = new mongoose.Schema({  
  name: String,
  surname: String,
  email: String,
  password: String
});
mongoose.model('Admins', AdminSchema);
module.exports = mongoose.model('Admins');
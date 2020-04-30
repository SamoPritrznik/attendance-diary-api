var mongoose = require('mongoose');  
var WorkerSchema = new mongoose.Schema({  
  name: String,
  surname: String,
  phone_num: String
});
mongoose.model('Workers', WorkerSchema);
module.exports = mongoose.model('Workers');
var mongoose = require('mongoose');  
var TimeSchema = new mongoose.Schema({  
  worker_id: String,
  admin_id: String,
  construction_id: String,
  Timestamp_date: Date,
  Shift: BigInt
});
mongoose.model('Time', TimeSchema);
module.exports = mongoose.model('Time');
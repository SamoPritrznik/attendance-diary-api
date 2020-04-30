var mongoose = require('mongoose');  
var ConstructionSchema = new mongoose.Schema({  
  location: String,
  site_name: String,
  used: Boolean
});
mongoose.model('Constructions', ConstructionSchema);
module.exports = mongoose.model('Constructions');
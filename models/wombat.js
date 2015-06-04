var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WombatSchema = new Schema({
  name: String,
  type: String,
  justification: String,
});

module.exports = mongoose.model('Wombat', WombatSchema);

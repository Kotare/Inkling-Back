var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WombatSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Wombat', WombatSchema);

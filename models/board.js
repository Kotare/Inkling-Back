var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bubbleSchema = new Schema({
  type: String,
  bubbleId: String,
  sourceUrl: String,
  content: String,
  location: {
    top: Number,
    left: Number
  },
  size: {
    height: String,
    width: String
  }
});

var connectionSchema = new Schema({
  startBubbleId: String,
  endBubbleId: String
});

var boardSchema = new Schema({
  fbId: String,
	bubbles: [bubbleSchema],
	connections: [connectionSchema]
});

boardSchema.set('versionKey', false);

module.exports = mongoose.model('Board', boardSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
  fbId: String,
	bubbles: [{
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
	}],
	connections: [{
		startBubbleId: String,
		endBubbleId: String
	}]
});

boardSchema.set('versionKey', false);

module.exports = mongoose.model('Board', boardSchema);

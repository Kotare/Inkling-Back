var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var boardSchema = new Schema({
	bubbles: [{
		bubbleId: String,
		heading: String,
		content: String,
		location: {
			top: Number,
			left: Number
		},
		size: {
			top: Number,
			left: Number
		}
	}],
	connections: [{
		startBubbleId: String,
		endBubbleId: String
	}]
});

boardSchema.set('versionKey', false);

module.exports = mongoose.model('Board', boardSchema);

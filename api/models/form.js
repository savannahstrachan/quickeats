// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other 
//files when it is called
module.exports  = mongoose.model('restaurants', RSchema);

var RSchema = new mongoose.Schema ({
	name: String,
	hunger: Number,
	price: Number,
	alcohol: Boolean,
	Carryout: Boolean,
	fancy: Number,
	ID: Number
},{ collection: "restaurants"}
);

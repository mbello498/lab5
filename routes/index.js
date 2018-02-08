// Get all of our friend data
var data = require('../data.json');


// is this the index.js controller?
exports.view = function(req, res) {
    console.log(data);
	res.render('index', data);

};
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/photos', {
        useNewUrlParser: true
    },
    function (err) {
        err ? console.log(err) : console.log('connected....')
    }
);

var photos = new mongoose.Schema({
    name: String,
    path: String
});

var model = mongoose.model('photos', photos);

module.exports = model;
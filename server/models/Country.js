const {Schema, model} = require("mongoose");

const Country = new Schema({
    country: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    capital: {type: String, required: true},
    info: {type: String, required: true},
    gallery: {type: Array},
    galDesc: {type: Array},
});

module.exports = model('Country', Country);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
   
});

module.exports = mongoose.model('Category', schema);

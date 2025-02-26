const {Schema, model } = require('mongoose')

const Letter = new Schema({
    From: {type: String,required: true},
    To: {type: String, required: true},
    text: {type: String, required: true},

})

module.exports = model('Letter', Letter)
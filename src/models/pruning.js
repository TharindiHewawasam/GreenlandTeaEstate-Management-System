const mongoose = require('mongoose');
const pruningSchema = new mongoose.Schema({

    date: {
        type: String,
        //default: Date.now
    },
  
  
    divisionName: {
        type: String,
        required : true
    },

    number_of_workers: {
        type: Number,
        required: true
    },

    
    pruning_method: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }   

})

module.exports = mongoose.model('Pruning', pruningSchema );
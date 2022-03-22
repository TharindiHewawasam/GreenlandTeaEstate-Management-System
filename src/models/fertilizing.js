const mongoose = require('mongoose');
const fertilizingSchema = new mongoose.Schema({

    date: {
        type: String,
        //default: Date.now
    },
  
    divisionName: {
        type: String,
        required : true
    },

    // sectionName: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'Section',
    //     required : true
    // },

    fertilizer_type: {
        type: String,
        required: true
    },

    total_amount_applied: {
        type: Number,
        required: true
    },

    number_of_workers: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    }
    

})

module.exports = mongoose.model('Fertilizing', fertilizingSchema );
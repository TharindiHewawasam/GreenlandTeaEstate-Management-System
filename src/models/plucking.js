const mongoose = require('mongoose');
const pluckingSchema = new mongoose.Schema({

    date: {
        type: String,
        
    },
  
  
    divisionName: {
        type: String, 
        required : true
    },

    number_of_workers: {
        type: Number,
        required: true
    },

    tea_leaves_bags_amount: {
        type: Number,
        required: true
    },

    tea_leaves_weight: {
        type: Number,
        required: true
    },

    water_weight: {
        type: Number,
        required: true
    },

    // net_weight: {
    //     type: Number,
    //     required: true
    // }

 
})

module.exports = mongoose.model('Plucking', pluckingSchema );
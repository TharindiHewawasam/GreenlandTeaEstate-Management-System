const mongoose = require('mongoose');
const plantingSchema = new mongoose.Schema({

    date: {
        type: String,
        //default: Date.now
    },

    divisionName: {
        type: String, 
        required : true
    },

    plant_type: {
        type: String,
        required : true
    },

    number_of_tea_plants: {
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

module.exports = mongoose.model('Planting', plantingSchema );
const mongoose = require('mongoose');
const reservePlantSchema = new mongoose.Schema({

    
    divisionName: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Division',
        required : true
    },

    sectionName: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Section',
        required : true
    },

    tea_plants_type: {
        type: String,
        required: true
    },

    number_of_tea_plants_needed: {
        type: Number,
        required: true
    },

    approvalStatus: {
        type : String,
        enum:["pending", "completed", "cancelled"],
        default:"pending",
        required: true 
    }

}, { timestamps: true});

module.exports = mongoose.model('ReservePlant', reservePlantSchema );
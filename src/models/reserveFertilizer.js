const mongoose = require('mongoose');
const reserveFertilizerSchema = new mongoose.Schema({

    
    divisionName: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Division',
        required : true
    },

    sectionName: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Section',
        required : true
    },

    fertilizer_type: {
        type: String,
        required: true
    },

    fertilizer_quantity: {
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

module.exports = mongoose.model('ReserveFertilizer', reserveFertilizerSchema );
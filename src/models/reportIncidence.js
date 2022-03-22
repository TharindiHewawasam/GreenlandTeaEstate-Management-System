const mongoose = require('mongoose');
const reportIncidentSchema = new mongoose.Schema({

    
    divisionName: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Division',
        required : true
    },

    sectionName: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Section',
        required : true
    },

    subject: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    approvalStatus: {
        type : String,
        enum:["pending", "completed", "cancelled"],
        default:"pending",
        required: true 
    }

}, { timestamps: true});

module.exports = mongoose.model('ReportIncidence', reportIncidentSchema );
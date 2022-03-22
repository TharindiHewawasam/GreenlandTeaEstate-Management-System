const mongoose = require('mongoose');
const sectionSchema = new mongoose.Schema({

    name: {
        type: String, 
        required: true,
        trim: true
    },
    slug: {
        type: String, 
        required: true, 
        unique: true
    },
    parentId: {
        type: String
    },

    total_extent:{
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    sectionPictures: [
        { img: { type: String }}
    ],

    division: { type: mongoose.Schema.Types.ObjectId, ref: 'Division', required: true}


}, { timestamps: true});

module.exports = mongoose.model('Section', sectionSchema );
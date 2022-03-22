const mongoose = require('mongoose');
const divisionSchema = new mongoose.Schema({

    name: {
        type: String, 
        required: true,
        trim: true
    },
    // slug: {
    //     type: String, 
    //     required: true, 
    //     unique: true
    // },
    // parentId: {
    //     type: String,
    //     required:true
    // },

    total_extent:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    }

    // sectionPictures: [
    //     { img: { type: String }}
    // ],

  


}, { timestamps: true});

module.exports = mongoose.model('Division', divisionSchema );
const Section = require('../models/section');
const shortid = require('shortid');
const slugify = require('slugify');

exports.createSection = (req, res) => {

   res.status(200).json({file: req.files, body: req.body});

   const {
       name, total_extent, description,  division
   } = req.body;

   let sectionPictures = [];

   if(req.files.length > 0){
       sectionPictures = req.files.map(file => {
           return { img: file.filename } 
       });
   }

   const section = new Section({
        name: name,
        slug: slugify(name),
        total_extent,
        description,
        sectionPictures,
        division
   });

   section.save(((error, section) =>{
    if(error) return res.status(400).json({ error });
    if(section){
        res.status(201).json({ section });
    }
}));
 

};


exports.getSection = (req,res) =>{
   
    Section.find().then((section)=>{
        res.json(section)
    }).catch((err)=>{
        console.log(err)
    })
};


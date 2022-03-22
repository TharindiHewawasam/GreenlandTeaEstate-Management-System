const Planting = require('../models/planting');
const router = require('../routes/division');

exports.AddPlantingRecord = ( req, res) => {
   
    const planting = new Planting({
        date: req.body.date,
        divisionName: req.body.divisionName,
        plant_type: req.body.plant_type,
        number_of_tea_plants: req.body.number_of_tea_plants,
        number_of_workers: req.body.number_of_workers,
        description: req.body.description

    });
    
    planting
        .save()
        .then(() => res.json('New planting record added successfully'))
        .catch(err => res.status(400).json(`Error: ${err}`));
        
    };

exports.GetPlantingRecords = (req,res) => {

    Planting.find( ).then(( planting )=>{
        res.json(planting)
    }).catch((err) => {
        console.log(err)
    })
};

exports.UpdatePlantingRecord = (req,res) => {
    Planting.findById(req.params.plantingId)
    .then(planting => {
        planting.date = req.body.date;
        planting.divisionName = req.body.divisionName;
        planting.plant_type = req.body.plant_type;
        planting.number_of_tea_plants = req.body.number_of_tea_plants;
        planting.number_of_workers = req.body.number_of_workers;
        planting.description = req.body.description;
    

    planting
        .save()
        .then(()=> res.json('Planting Record updated successfully'))
        .catch(err => res.status(400).json(`Error: ${err}`));

    })
    .catch(err => res.status(400).json(`Error: ${err}`));

};

exports.DeletePlantingRecord = (req, res) =>{
    Planting.findByIdAndDelete(req.params.plantingId)
     .then(() => res.json("Planting Record is DELETED!"))
     .catch(err => res.status(400).json(`Error: ${err}`));
};

exports.GetOnePlantingRecord = (req,res) => {
    Planting.findById(req.params.plantingId)
    .then(planting => res.json( planting))
    .catch(err => res.status(400).json(`Error: ${err}`));
};




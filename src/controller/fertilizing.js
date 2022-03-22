const Fertilizing = require('../models/fertilizing');
const router = require('../routes/division');


//REQUEST ADD NEW DIVISION
exports.AddFertilizingRecord  = (req,res) => {
   
    const fertilizing = new Fertilizing({
        date: req.body.date,
        divisionName: req.body.divisionName,
        //sectionName: req.body.sectionName,
        fertilizer_type: req.body.fertilizer_type,
        total_amount_applied: req.body.total_amount_applied,
        number_of_workers: req.body.number_of_workers,
        description: req.body.description
        
    });

    fertilizing
        .save()
        .then(() => res.json("The new fertilizing record added successfully!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
};



exports.GetFertilizingRecords = (req,res) => {

    Fertilizing.find( ).then(( fertilizing )=>{
        res.json(fertilizing)
    }).catch((err) => {
        console.log(err)
    })
};

//Update fertilizing record

exports.UpdateFertilizingRecord = (req,res) => {
    Fertilizing.findById(req.params.fertilizingId)
    .then(fertilizing => {
        fertilizing.date = req.body.date;
        fertilizing.divisionName = req.body.divisionName;
        fertilizing.sectionName = req.body.sectionName;
        fertilizing.fertilizer_type =  req.body.fertilizer_type;
        fertilizing.total_amount_applied = req.body.total_amount_applied;
        fertilizing.number_of_workers = req.body.number_of_workers;
        fertilizing.description = req.body.description;

        fertilizing
            .save()
            .then(() => res.json("Fertilizing Record UPDATED successfully!"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
};




exports.DeleteFertilizingRecord = (req, res) => {
    Fertilizing.findByIdAndDelete(req.params.fertilizingId)
     .then(() => res.json("Fertilizing Record is DELETED!"))
     .catch(err => res.status(400).json(`Error: ${err}`));
}


exports.GetOneFertilizingRecord = (req,res) => {
    Fertilizing.findById(req.params.fertilizingId)
    .then(fertilizing => res.json( fertilizing))
    .catch(err => res.status(400).json(`Error: ${err}`));
 };


const Plucking = require('../models/plucking');
const router = require('../routes/division');

exports.AddPluckingRecord = ( req, res) => {
   
    const plucking = new Plucking({
        date: req.body.date,
        divisionName: req.body.divisionName,
        number_of_workers: req.body.number_of_workers,
        tea_leaves_bags_amount: req.body.tea_leaves_bags_amount,
        tea_leaves_weight: req.body.tea_leaves_weight,
        water_weight: req.body.water_weight,
        net_weight: req.body.net_weight

    });
    
    plucking
        .save()
        .then(() => res.json('New plucking record added successfully'))
        .catch(err => res.status(400).json(`Error: ${err}`));

    };
   

exports.GetPluckingRecords = (req,res) => {

    Plucking.find( ).then(( plucking )=>{
        res.json(plucking)
    }).catch((err) => {
        console.log(err)
    })
};

exports.UpdatePluckingRecord = (req,res) => {
    Plucking.findById(req.params.pluckingId)
    .then(plucking => {
        plucking.date = req.body.date;
        plucking.divisionName = req.body.divisionName;
        plucking.number_of_workers = req.body.number_of_workers;
        plucking.tea_leaves_bags_amount = req.body.tea_leaves_bags_amount;
        plucking.tea_leaves_weight = req.body.tea_leaves_weight;
        plucking.water_weight = req.body.water_weight;
        plucking.net_weight = req.body.net_weight;
        

    plucking
        .save()
        .then(()=> res.json('Plucking Record updated successfully'))
        .catch(err => res.status(400).json(`Error: ${err}`));

    })
    .catch(err => res.status(400).json(`Error: ${err}`));
};

exports.DeletePluckingRecord = (req, res) =>{
    Plucking.findByIdAndDelete(req.params.pluckingId)
     .then(() => res.json("Plucking Record is DELETED!"))
     .catch(err => res.status(400).json(`Error: ${err}`));
};

exports.GetOnePluckingRecord = (req,res) => {
    Plucking.findById(req.params.pluckingId)
    .then(plucking => res.json( plucking))
    .catch(err => res.status(400).json(`Error: ${err}`));
};




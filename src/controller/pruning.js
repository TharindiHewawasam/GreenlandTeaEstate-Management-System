const Pruning = require('../models/pruning');
const router = require('../routes/division');


//REQUEST ADD NEW DIVISION
exports.AddPruningRecord = ( req, res) => {
   
    const pruning = new Pruning({
        date: req.body.date,
        divisionName: req.body.divisionName,
        number_of_workers: req.body.number_of_workers,
        pruning_method: req.body.pruning_method,
        description: req.body.description

    });
    
    pruning
        .save() 
        .then(() => res.json('New prunning record added successfully'))
        .catch(err => res.status(400).json(`Error: ${err}`));
        
    };
   


exports.GetPruningRecords = (req,res) => {

    Pruning.find( ).then(( pruning )=>{
        res.json(pruning)
    }).catch((err) => {
        console.log(err)
    })
};

exports.UpdatePruningRecord = (req,res) => {
    Pruning.findById(req.params.pruningId)
    .then(pruning => {
        pruning.date = req.body.date;
        pruning.divisionName = req.body.divisionName;
        pruning.number_of_workers = req.body.number_of_workers;
        pruning.pruning_method = req.body.pruning_method;
        pruning.description = req.body.description;
        
    pruning
        .save()
        .then(()=> res.json('Pruning Record updated successfully'))
        .catch(err => res.status(400).json(`Error: ${err}`));

    })
    .catch(err => res.status(400).json(`Error: ${err}`)); 

    
};


exports.DeletePruningRecord = (req, res) =>{
    Pruning.findByIdAndDelete(req.params.pruningId)
    .then(() => res.json("Pruning Record is DELETED!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

exports.GetOnePruningRecord = (req,res) => {
    Pruning.findById(req.params.pruningId)
    .then(pruning => res.json( pruning))
    .catch(err => res.status(400).json(`Error: ${err}`));
}

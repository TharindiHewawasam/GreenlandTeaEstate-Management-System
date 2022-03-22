const Division = require('../models/division');
const router = require('../routes/division');

//REQUEST ADD NEW DIVISION
exports.AddDivision = (req,res) => {
   
    const division = new Division({
        name: req.body.name,
        total_extent: req.body.total_extent,
        description: req.body.description

    });

    division
        .save()
        .then(() => res.json("Then new division added successfully!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
};

   
 exports.getDivision =(req,res) =>{
     Division.find({}, (err, result) => {
        if(err) {
            res.send(err)
        }

        res.send(result);
     });
 }; 


// exports.getDivision = (req,res) =>{
   
//     Division.find().then((division)=>{
//         res.json(division)
//     }).catch((err)=>{
//         console.log(err)
//     })
// };

// exports.updateDivision = async(req,res) =>{
//     let divisionId = req.params.divisionId;
//     const {name, total_extent, description}= req.body;

//     const updateDivision = {
//         name,
//         total_extent,
//         description
//     }

//     const update = await Division.findByIdAndUpdate(divisionId, updateDivision).then(()=>{
//         res.status(200).send({status: "Division updated"})
//     }).catch((err) =>{
//       console.log(err);
//       res.status(500).send({status: "Error with updating data"});
// });

// }

exports.updateDivision = (req,res) => {
    Division.findById(req.params.divisionId)
    .then(division => {
        division.name = req.body.name;
        division.total_extent= req.body.total_extent;
        division.description = req.body.description;

        division
            .save()
            .then(() => res.json("The Division is UPDATED successfully!"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
};


// exports.deleteDivision = async(req, res) => {
//     let divisionId = req.params.divisionId;

//     await Division.findByIdAndDelete(divisionId)
//     .then(()=>{
//         res.status(200).send({status: "Division deleted"});
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status:"Error with delete division", error: err.message});
//     })
// };

//REQUEST FIND DIVISION BY ID AND DELETE
exports.deleteDivision = (req, res) => {
    Division.findByIdAndDelete(req.params.divisionId)
     .then(() => res.json("The division is DELETED!"))
     .catch(err => res.status(400).json(`Error: ${err}`));
}

//Request find division by id
// exports.getOneDivision = async(req,res) => {
//     let divisionId = req.params.divisionId;

//     const division = await Division.findById(divisionId).then((division)=>{
//         res.status(200).send({status: "Division fetched", division})
//     }).catch((err)=>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with get division", error: err.message});
//     })
// }

exports.getOneDivision = (req,res) => {
   Division.findById(req.params.divisionId)
   .then(division => res.json(division))
   .catch(err => res.status(400).json(`Error: ${err}`));
};
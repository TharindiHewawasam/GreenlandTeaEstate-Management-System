const ReserveFertilizer = require('../models/reserveFertilizer');

exports.addReserveFertilizerRecord = ( req, res) => {
   
    const reserveFertilizer = new ReserveFertilizer({
        divisionName:req.body.divisionName,
        sectionName: req.body.sectionName,
        fertilizer_type: req.body.fertilizer_type,
        fertilizer_quantity: req.body.fertilizer_quantity,
        approvalStatus: req.body.approvalStatus

    });
    
    reserveFertilizer.save((error, reserveFertilizer) => {
        if(error) return res.status(400).json({ error});
        if(reserveFertilizer){
            return res.status(201).json({ reserveFertilizer })
        }
    });
   
};

exports.getReserveFertilizerRecords = (req,res) => {

    ReserveFertilizer.find( ).then(( reserveFertilizer )=>{
        res.json(reserveFertilizer)
    }).catch((err) => {
        console.log(err)
    })
};

exports.updateReserveFertilizerRecord = (req,res) => {
    let reserveFertilizerId = req.params.reserveFertilizerId;
    const { 
        divisionName,
        sectionName,
        fertilizer_type,
        fertilizer_quantity,
        approvalStatus
    } = req.body;

    const updateReserveFertilizerRecord = {
        divisionName,
        sectionName,
        fertilizer_type,
        fertilizer_quantity,
        approvalStatus
    }

    const update = ReserveFertilizer.findByIdAndUpdate(reserveFertilizerId,updateReserveFertilizerRecord).then( () => {
        res.status(200).send({status: "Reserve Fertilizer Record Updated "})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    });
};

exports.deleteReserveFertilizerRecord = (req, res) =>{
    let reserveFertilizerId = req.params.reserveFertilizerId;

    ReserveFertilizer.findByIdAndDelete(reserveFertilizerId)
    .then(()=>{
        res.status(200).send({status: "ReserveFertilizer deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete reserveFertilizer record", error: err.message});
    })
};

exports.getOneReserveFertilizerRecord = (req,res) => {
    let reserveFertilizerId = req.params.reserveFertilizerId;

    const reserveFertilizer = ReserveFertilizer.findById(reserveFertilizerId).then((reserveFertilizer)=>{
        res.status(200).send({status: "ReserveFertilizer record fetched", reserveFertilizer})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get reserveFertilizer record", error: err.message});
    })
}




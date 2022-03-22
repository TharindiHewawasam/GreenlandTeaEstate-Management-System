const ReservePlant = require('../models/reservePlant');

exports.addReservePlantRecord = ( req, res) => {
   
    const reservePlant = new ReservePlant({
        divisionName:req.body.divisionName,
        sectionName: req.body.sectionName,
        tea_plants_type: req.body.tea_plants_type,
        number_of_tea_plants_needed: req.body.number_of_tea_plants_needed,
        approvalStatus: req.body.approvalStatus

    });
    
    reservePlant.save((error, reservePlant) => {
        if(error) return res.status(400).json({ error});
        if(reservePlant){
            return res.status(201).json({ reservePlant })
        }
    });
   
};

exports.getReservePlantRecords = (req,res) => {

    ReservePlant.find( ).then(( reservePlant )=>{
        res.json(reservePlant)
    }).catch((err) => {
        console.log(err)
    })
};

exports.updateReservePlantRecord = (req,res) => {
    let reservePlantId = req.params.reservePlantId;
    const { 
        divisionName,
        sectionName,
        tea_plants_type,
        number_of_tea_plants_needed,
        approvalStatus
    } = req.body;

    const updateReservePlantRecord = {
        divisionName,
        sectionName,
        tea_plants_type,
        number_of_tea_plants_needed,
        approvalStatus
    }

    const update = ReservePlant.findByIdAndUpdate(reservePlantId,updateReservePlantRecord).then( () => {
        res.status(200).send({status: "Reserve Plant Record Updated "})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    });
};

exports.deleteReservePlantRecord = (req, res) =>{
    let reservePlantId = req.params.reservePlantId;

    ReservePlant.findByIdAndDelete(reservePlantId)
    .then(()=>{
        res.status(200).send({status: "ReservePlant deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete reservePlant record", error: err.message});
    })
};

exports.getOneReservePlantRecord = (req,res) => {
    let reservePlantId = req.params.reservePlantId;

    const reservePlant = ReservePlant.findById(reservePlantId).then((reservePlant)=>{
        res.status(200).send({status: "ReservePlant record fetched", reservePlant})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get reservePlant record", error: err.message});
    })
}




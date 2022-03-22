const ReportIncidence = require('../models/reportIncidence');

exports.addReportIncidenceRecord = ( req, res) => {
   
    const reportIncidence = new ReportIncidence({
        divisionName:req.body.divisionName,
        sectionName: req.body.sectionName,
        subject: req.body.subject,
        description: req.body.description,
        approvalStatus: req.body.approvalStatus

    });
    
    reportIncidence.save((error, reportIncidence) => {
        if(error) return res.status(400).json({ error});
        if(reportIncidence){
            return res.status(201).json({ reportIncidence })
        }
    });
   
};

exports.getReportIncidenceRecords = (req,res) => {

    ReportIncidence.find( ).then(( reportIncidence )=>{
        res.json(reportIncidence)
    }).catch((err) => {
        console.log(err)
    })
};

exports.updateReportIncidenceRecord = (req,res) => {
    let reportIncidenceId = req.params.reportIncidenceId;
    const { 
        divisionName,
        sectionName,
        subject,
        description,
        approvalStatus
    } = req.body;

    const updateReportIncidenceRecord = {
        divisionName,
        sectionName,
        subject,
        description,
        approvalStatus
    }

    const update = ReportIncidence.findByIdAndUpdate(reportIncidenceId,updateReportIncidenceRecord).then( () => {
        res.status(200).send({status: "Report Incidence Record Updated "})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    });
};

exports.deleteReportIncidenceRecord = (req, res) =>{
    let reportIncidenceId = req.params.reportIncidenceId;

    ReportIncidence.findByIdAndDelete(reportIncidenceId)
    .then(()=>{
        res.status(200).send({status: "ReportIncidence deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete reportIncidence record", error: err.message});
    })
};

exports.getOneReportIncidenceRecord = (req,res) => {
    let reportIncidenceId = req.params.reportIncidenceId;

    const reportIncidence = ReportIncidence.findById(reportIncidenceId).then((reportIncidence)=>{
        res.status(200).send({status: "ReportIncidence record fetched", reportIncidence})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get reportIncidence record", error: err.message});
    })
}




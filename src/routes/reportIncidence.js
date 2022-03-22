const express = require("express");

const { addReportIncidenceRecord, getReportIncidenceRecords, updateReportIncidenceRecord, deleteReportIncidenceRecord, getOneReportIncidenceRecord } = require("../controller/reportIncidence");
const router = express.Router();

router.post('/section/addReportIncidenceRecord', addReportIncidenceRecord);
router.get('/section/getReportIncidenceRecords/', getReportIncidenceRecords);
router.put('/section/updateReportIncidenceRecord/:reportIncidenceId', updateReportIncidenceRecord);
router.delete('/section/deleteReportIncidenceRecord/:reportIncidenceId', deleteReportIncidenceRecord);
router.get('/section/getOneReportIncidenceRecord/:reportIncidenceId',getOneReportIncidenceRecord)


module.exports = router;
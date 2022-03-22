const express = require("express");

const { addReservePlantRecord, getReservePlantRecords, updateReservePlantRecord, deleteReservePlantRecord, getOneReservePlantRecord } = require("../controller/reservePlant");
const router = express.Router();

router.post('/section/addReservePlantRecord', addReservePlantRecord);
router.get('/section/getReservePlantRecords/', getReservePlantRecords);
router.put('/section/updateReservePlantRecord/:reservePlantId', updateReservePlantRecord);
router.delete('/section/deleteReservePlantRecord/:reservePlantId', deleteReservePlantRecord);
router.get('/section/getOneReservePlantRecord/:reservePlantId',getOneReservePlantRecord)


module.exports = router;
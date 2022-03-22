const express = require("express");

const { addReserveFertilizerRecord, getReserveFertilizerRecords, updateReserveFertilizerRecord, deleteReserveFertilizerRecord, getOneReserveFertilizerRecord } = require("../controller/reserveFertilizer");
const router = express.Router();

router.post('/section/addReserveFertilizerRecord', addReserveFertilizerRecord);
router.get('/section/getReserveFertilizerRecords/', getReserveFertilizerRecords);
router.put('/section/updateReserveFertilizerRecord/:reserveFertilizerId', updateReserveFertilizerRecord);
router.delete('/section/deleteReserveFertilizerRecord/:reserveFertilizerId', deleteReserveFertilizerRecord);
router.get('/section/getOneReserveFertilizerRecord/:reserveFertilizerId',getOneReserveFertilizerRecord)


module.exports = router;
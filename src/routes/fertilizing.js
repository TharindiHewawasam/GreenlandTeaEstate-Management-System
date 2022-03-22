const express = require("express");
const { AddFertilizingRecord, GetFertilizingRecords, UpdateFertilizingRecord, DeleteFertilizingRecord, GetOneFertilizingRecord } = require("../controller/fertilizing");
const router = express.Router();

router.post('/fertilizings/AddFertilizingRecord', AddFertilizingRecord);
router.get('/fertilizings/GetFertilizingRecords/', GetFertilizingRecords);
router.put('/fertilizings/UpdateFertilizingRecord/:fertilizingId', UpdateFertilizingRecord);
router.delete('/fertilizings/DeleteFertilizingRecord/:fertilizingId', DeleteFertilizingRecord);
router.get('/fertilizings/GetOneFertilizingRecord/:fertilizingId',GetOneFertilizingRecord)


module.exports = router;                            
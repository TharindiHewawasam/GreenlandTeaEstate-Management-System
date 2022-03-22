const express = require("express");
const { AddPlantingRecord, GetPlantingRecords, UpdatePlantingRecord, DeletePlantingRecord, GetOnePlantingRecord } = require("../controller/planting");
const router = express.Router();

router.post('/plantings/AddPlantingRecord', AddPlantingRecord);
router.get('/plantings/GetPlantingRecords/', GetPlantingRecords);
router.put('/plantings/UpdatePlantingRecord/:plantingId', UpdatePlantingRecord);
router.delete('/plantings/DeletePlantingRecord/:plantingId', DeletePlantingRecord);
router.get('/plantings/GetOnePlantingRecord/:plantingId',GetOnePlantingRecord)


module.exports = router;
const express = require("express");
const { AddPluckingRecord, GetPluckingRecords, UpdatePluckingRecord, DeletePluckingRecord, GetOnePluckingRecord } = require("../controller/plucking");
const router = express.Router();

router.post('/pluckings/AddPluckingRecord', AddPluckingRecord);
router.get('/pluckings/GetPluckingRecords/', GetPluckingRecords);
router.put('/pluckings/UpdatePluckingRecord/:pluckingId', UpdatePluckingRecord);
router.delete('/pluckings/DeletePluckingRecord/:pluckingId', DeletePluckingRecord);
router.get('/pluckings/GetOnePluckingRecord/:pluckingId',GetOnePluckingRecord)


module.exports = router;  
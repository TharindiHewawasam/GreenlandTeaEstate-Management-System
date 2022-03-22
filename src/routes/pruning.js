const express = require("express");
const { AddPruningRecord, GetPruningRecords, UpdatePruningRecord, DeletePruningRecord, GetOnePruningRecord } = require("../controller/pruning");

const router = express.Router();

router.post('/prunings/AddPruningRecord',AddPruningRecord);
router.get('/prunings/GetPruningRecords/',GetPruningRecords);
router.put('/prunings/UpdatePruningRecord/:pruningId', UpdatePruningRecord);
router.delete('/prunings/DeletePruningRecord/:pruningId',DeletePruningRecord );
router.get('/prunings/GetOnePruningRecord/:pruningId',GetOnePruningRecord);

module.exports = router;      
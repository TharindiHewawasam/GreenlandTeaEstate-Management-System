const express = require("express");
const { AddDivision, getDivision, updateDivision, deleteDivision, getOneDivision } = require("../controller/division");
const router = express.Router();



router.post('/divisions/AddDivision', AddDivision);
router.get('/divisions/', getDivision);
router.put('/divisions/updateDivision/:divisionId', updateDivision);
router.delete('/divisions/deleteDivision/:divisionId', deleteDivision);
router.get('/divisions/division/:divisionId', getOneDivision);



module.exports = router;




const express = require("express");
const { createSection, getSection } = require("../controller/section");
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,path.join(path.dirname(__dirname), 'uploads') )
    },
    filename: function (req, file, cb){
        cb(null, shortid.generate() + '-'+ file.originalname)
    }
})

const upload = multer({ storage });

router.post('/section/addSection' ,upload.array('sectionPictures'), createSection);
router.get('/section/', getSection);
//router.put('/division/updateDivision/:divisionId', updateDivision);



//router.get('/section/getsection', getSections);

module.exports = router;
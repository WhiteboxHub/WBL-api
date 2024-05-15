const express = require('express');
const router = express.Router();
const homeModel = require('../models/homeModel');
const presentation = require('../controllers/presentationController')
const recordings =  require('../controllers/recordingsController')

//api-home
router.get('/', homeModel);


//api-presentation
router.get('/presentation', presentation.getPresentation);


//api to fetch recordings by batchname
router.get('/recordings/:batchname', recordings.getRecordingsByBatchname);

module.exports = router;
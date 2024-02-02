const express = require('express');
const router = express.Router();
const { uploader ,handleUpload} = require('../Controllers/UploadController');
const { authenticate } = require('../Middleware/AuthoMiddleware');


router.post('/', authenticate, uploader, handleUpload);

module.exports = router;

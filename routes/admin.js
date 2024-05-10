const express = require('express');
const { dashboard } = require('../controllers/adminController');
const router = express.Router();

/* GET users listing. */
router.get('/dashboard', dashboard )
        
module.exports = router;

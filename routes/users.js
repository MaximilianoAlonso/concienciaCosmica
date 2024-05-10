const express = require('express');
const { profile } = require('../controllers/usersController');
const router = express.Router();

/* GET users listing. */
router.get('/', profile )
        

module.exports = router;

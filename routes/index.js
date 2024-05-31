const express = require('express');
const { index, about, blog, contacts,  } = require('../controllers/indexController');
/* const { detail } = require('../controllers/productsController'); */
const router = express.Router();

/* GET home page. */
router.get('/', index)
      .get('/about', about) 
      .get('/blog', blog)
      .get('/contacts', contacts)  
 
      
module.exports = router;

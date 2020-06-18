const express = require('express');
const router = new express.Router();
const employees = require('../controllers/data.js');
 
router.route('/data/:id?')
  .get(employees.get);
 
module.exports = router;
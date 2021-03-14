const express = require('express');
const router = express.Router();
const nameCtrl = require('../controllers/nameController.js');

router.get('/', nameCtrl.getName );
router.post('/add', nameCtrl.addName);
router.delete('/delete/:id', nameCtrl.deleteName);

module.exports = router;
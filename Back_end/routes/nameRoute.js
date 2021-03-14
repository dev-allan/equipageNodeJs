const express = require('express');
const router = express.Router();
const nameCtrl = require('../controllers/nameController.js');

router.get('/', nameCtrl.GetName );
router.post('/add', nameCtrl.AddName);
router.delete('/:id', nameCtrl.DeleteName);
router.put('/modify', nameCtrl.ModifyName);

module.exports = router;
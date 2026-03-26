const express = require('express');
const router = express.Router();

const rolesController = require('../controllers/roleController')

router.post('/',rolesController.createRole);
router.get('/',rolesController.getAllRoles);
router.get('/:id',rolesController.getRoleById);
router.get('/name/:name',rolesController.getRoleByName);

module.exports = router;
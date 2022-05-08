const express = require('express');
const router = express.Router();
const controller = require('../Controller/userController')

router.get('/:email/:password',controller.getUserByEmailAndPassword);
router.get('/:id',controller.getUserById);
router.get('/',controller.getAllUsers);
router.post('/',controller.createUser);
router.patch('/:id',controller.updateUser);
router.delete('/:id',controller.deleteUser)

module.exports = router;





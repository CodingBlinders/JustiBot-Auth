const express = require('express');
const router = express.Router();
const { deleteUser, viewUser, updateUser, allUsers, deleteUserAdmin } = require('../Controllers/UserController');
const { authenticate } = require('../Middleware/AuthoMiddleware');

router.get('/profile',authenticate, viewUser);
router.put('/update', authenticate, updateUser);
router.delete('/delete', authenticate, deleteUser);
router.get('/all', authenticate, allUsers);
router.delete('/deleteUser/:userId', authenticate, deleteUserAdmin);

module.exports = router;

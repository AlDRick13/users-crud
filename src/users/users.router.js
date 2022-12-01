const router = require('express').Router();

const userServices = require('./users.services');

router.get('/user', userServices.getAllUsers);
router.post('/user', userServices.postUser);
router.get('/user/:id', userServices.getUserById);
router.patch('/user/:id', userServices.patchUser);
router.delete('/user/:id', userServices.deleteUser);

module.exports = router;
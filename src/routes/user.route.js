const { Router } = require('express'); 

const UserController = require('../controllers/userController'); 

const router = Router(); 
 
router.post('/users', UserController.register);
router.post('/users/login', UserController.login); 
router.get('/users/me', UserController.me);

module.exports = router;

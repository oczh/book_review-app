const { Router } = require('express'); 

const UserController = require('../controllers/userController'); 

const userRouter = Router(); 
 
userRouter.post('/', UserController.register);
userRouter.post('/login', UserController.login); 
userRouter.get('/me', UserController.me);

module.exports = userRouter;

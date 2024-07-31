const { Router } = require('express'); 

const ReviewController = require('../controllers/userController'); 

const reviewRouter = Router(); 
 
reviewRouter.post('/books/:bookId/reviews', auth, ReviewController.add);
reviewRouter.get('/books/:bookId/reviews', ReviewController.list); 
reviewRouter.patch('/reviews/:id', auth, ReviewController.update);
reviewRouter.delete('/reviews/:id', auth, ReviewController.delete);

module.exports = reviewRouter;
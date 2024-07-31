const { Router } = require('express'); 

const BookController = require('../controllers/userController'); 

const bookRouter = Router(); 

bookRouter.post('/', auth, BookController.add);
bookRouter.get('/', BookController.list); 
bookRouter.get('/:id', BookController.get);
bookRouter.patch('/:id', auth, BookController.update);
bookRouter.delete('/:id', auth, BookController.deleteBook);

module.exports = bookRouter;

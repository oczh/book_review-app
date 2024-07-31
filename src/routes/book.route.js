const { Router } = require('express'); 

const BookController = require('../controllers/userController'); 

const bookRouter = Router(); 

bookRouter.post('/', BookController.add);
bookRouter.get('/', BookController.list); 
bookRouter.get('/:id', BookController.get);
bookRouter.patch('/:id', BookController.update);
bookRouter.delete('/:id', BookController.deleteBook);

module.exports = bookRouter;

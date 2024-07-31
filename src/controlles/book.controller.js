import Book from './book.model';
 
const add = async (req, res)=>{
    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  };

const list = async (req, res)=>{ 
    try {
      const books = await Book.find();
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
const get = async (req, res)=>{ 
    try {
      const book = await User.findById(req.params.id);
      if (!book) {
        return res.status(404).send();
      }
      res.status(200).send(book);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
const update = async (req, res)=>{ 
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!book) {
        return res.status(404).send();
      }
      res.status(200).send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
const deleteBook = async (req, res)=>{ 
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        return res.status(404).send();
      }
      res.status(200).send(book);
    } catch (error) {
      res.status(500).send(error);
    }
};

module.exports = { 
	add, 
	list,
  get,
  update, 
  deleteBook
}
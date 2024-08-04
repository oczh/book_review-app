import Book from "../models/book.model";
import Review from "../models/review.model";
 
const add = async (req: any, res: any)=>{
  const { score, description } = req.body;
  const { bookId } = req.params;
  const review = new Review({
    score,
    description,
    userId: req.user._id
  });
  try {
    const savedReview = await review.save();
    await Book.updateOne({ _id: bookId}, {$push : {reviewId: savedReview._id}});
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

const list = async (req: any, res: any)=>{ 
  const { bookId } = req.params;
  try {
    const book = await Book.findById(bookId).populate('reviewId');
    if(book != null){
      const reviews = book.reviewId;
      res.send(reviews);
    } else {
      res.status(404).send('Book not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
  
const update = async (req: any, res: any)=>{ 
  const updates = Object.keys(req.body);
  const allowedUpdates = ['score', 'description'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const review = await Review.findOne({ _id: req.params.id, userId: req.user._id });
    if (!review) {
      return res.status(404).send();
    }
    updates.forEach(update => (review.updateOne({ _id: req.params.id}, {update: req.body[update]})));
    await review.save();
    res.send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};
  
const deleteReview = async (req: any, res: any)=>{ 
    try {
        const review = await Review.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        await Book.updateOne({ _id: req.params}, {$pull : {reviewId: req.params.id}});
        if (!review) {
          res.status(404).send();
        }
        res.send(review);
    } catch (error) {
        res.status(500).send(error);
    }
};

export { 
    add, 
	  list,
    update, 
    deleteReview
}
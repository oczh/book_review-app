import Review from './review.model';
 
const add = async (req, res)=>{
  const { rating, comment } = req.body;
  const { bookId } = req.params;
  const review = new Review({
    rating,
    comment,
    book: bookId,
    author: req.user._id
  });
  try {
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

const list = async (req, res)=>{ 
  const { bookId } = req.params;
  try {
    const reviews = await Review.find({ book: bookId }).populate('author', 'name');
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
};
  
const update = async (req, res)=>{ 
  const updates = Object.keys(req.body);
  const allowedUpdates = ['rating', 'comment'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const review = await Review.findOne({ _id: req.params.id, author: req.user._id });
    if (!review) {
      return res.status(404).send();
    }
    updates.forEach(update => (review[update] = req.body[update]));
    await review.save();
    res.send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};
  
const deleteReview = async (req, res)=>{ 
    try {
        const review = await Review.findOneAndDelete({ _id: req.params.id, author: req.user._id });
        if (!review) {
          res.status(404).send();
        }
        res.send(review);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { 
    add, 
	list,
    update, 
    deleteReview
}
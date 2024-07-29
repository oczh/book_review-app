import mongoose, { Schema, Document } from 'mongoose';

interface IReview extends Document {
  score: number;
  description: string;
  userId: Array<Schema.Types.ObjectId>;
}

const ReviewSchema: Schema = new Schema({
  score: { type: Number, required: true },
  description: { type: String},
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Review = mongoose.model<IReview>('Review', ReviewSchema);

export default Review;
import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  score: number;
  description: string;
  userId: Array<Schema.Types.ObjectId>;
}

const ReviewSchema: Schema = new Schema({
  score: { type: Number, required: true, min: 1, max: 5 },
  description: { type: String, minLength: 20 },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Review = mongoose.model<IReview>('Review', ReviewSchema);

export default Review;
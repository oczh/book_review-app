import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
  author: string;
  title: string;
  yearOfPublication: number;
  reviewId: Array<Schema.Types.ObjectId>;
  rating: number;
}

const BookSchema: Schema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true},
  yearOfPublication: { type: Number},
  reviewId: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  rating: { type: Number, required: true }
});

const Book = mongoose.model<IBook>('Book', BookSchema);

export default Book;
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  movieId: {type: Number,  unique: true,required: true },
  author: { type: String, required: true},
  content: {type: String, required: true },
});
  

export default mongoose.model('Review', ReviewSchema);
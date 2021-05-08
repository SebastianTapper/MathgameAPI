import * as mongoose from 'mongoose';

export const ScoreSchema = new mongoose.Schema({
  username: String,
  score: Number,
});

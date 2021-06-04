import * as mongoose from 'mongoose';

// makes the mongose schema which is used as schema in score.module
export const ScoreSchema = new mongoose.Schema({
  username: String,
  score: Number,
});

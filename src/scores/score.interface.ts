import {Document} from 'mongoose'

export interface Score extends Document {
  username: string;
  score: number;
}

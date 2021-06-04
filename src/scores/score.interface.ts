import {Document} from 'mongoose'
// mkaes the score module interface which can be injected into score.service
export interface Score extends Document {
  username: string;
  score: number;
}

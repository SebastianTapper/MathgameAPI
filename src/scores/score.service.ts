import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose';
import {Score} from './score.interface'
import {ScoreDto} from './score.dto';

@Injectable()
export class ScoreService {

  constructor(@InjectModel('Score') private readonly scoreModel: Model<Score>){}

// posts score to mongodb database
  public async postScore(newScore: ScoreDto) {
    const score = await new this.scoreModel(newScore);
    return score.save();
  }
  // fetches the five highest highscores from mongodb
  public async getScore(): Promise<ScoreDto[]>{
    const scores = await this.scoreModel.find().limit(5).sort({score: -1}); //Sorts docs by score and selects 5 highest
//    if(!scores || !scores[0]){
  //    throw new HttpException('Not Found', 404);
  //  }
    return scores;
  }
}

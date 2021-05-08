import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose';
import {Score} from './score.interface'
import {ScoreDto} from './score.dto';

@Injectable()
export class ScoreService {

  constructor(@InjectModel('Score') private readonly scoreModel: Model<Score>){}

  public async postScore(newScore: ScoreDto) {
    const score = await new this.scoreModel(newScore);
    return score.save();
  }
  public async getScore(): Promise<ScoreDto[]>{
    const scores = await this.scoreModel.find().exec();
//    if(!scores || !scores[0]){
  //    throw new HttpException('Not Found', 404);
  //  }
    return scores;
  }
}

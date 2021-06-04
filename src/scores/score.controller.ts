import { Controller, Body, Get, Post, Delete, Put } from '@nestjs/common';
import { ScoreService } from './score.service';
import {ScoreDto} from './score.dto';

@Controller()
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

//handles get request to /score which will call function getScore from score.service
  @Get('score')
  public getScore() {
    return this.scoreService.getScore();
  }
// handles post request to / score by calling function postScore from score.service
  @Post('score')
  public postScore(@Body() score: ScoreDto) {
    return this.scoreService.postScore(score);
  }
}

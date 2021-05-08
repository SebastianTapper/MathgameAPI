import { Controller, Body, Get, Post, Delete, Put } from '@nestjs/common';
import { ScoreService } from './score.service';
import {ScoreDto} from './score.dto';

@Controller()
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Get('score')
  public getScore() {
    return this.scoreService.getScore();
  }
  @Post('score')
  public postScore(@Body() score: ScoreDto) {
    return this.scoreService.postScore(score);
  }
}

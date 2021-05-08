import { Module } from '@nestjs/common';
import {ScoreModule} from './scores/score.module'
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION),
    ScoreModule
  ],
})
export class AppModule {}

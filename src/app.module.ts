import { Module } from '@nestjs/common';
import {ScoreModule} from './scores/score.module'
import {MongooseModule} from '@nestjs/mongoose'
require('dotenv').config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION),
    ScoreModule
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import {ScoreModule} from './scores/score.module'
import {MongooseModule} from '@nestjs/mongoose'
require('dotenv').config()

//connects the api to the database, was done with an .env, but changes for simplicity in testing
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Tapper:lMaGhpr21OwmPT6s@cluster0.g1hyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),
    ScoreModule
  ],
})
export class AppModule {}

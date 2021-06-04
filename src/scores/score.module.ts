import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';
import {ScoreSchema} from './score.schema';
@Module({
  // imports and combines controller and service as module which can then be imported to app.module
  imports: [
    MongooseModule.forFeature([
      {
        name:'Score',
        schema: ScoreSchema,
      },
    ])
  ],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}

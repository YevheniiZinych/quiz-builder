import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { Quiz } from '../../models/quiz.model';
import { Question } from '../../models/question.model';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
  imports: [SequelizeModule.forFeature([Quiz, Question])],
})
export class QuizModule {}

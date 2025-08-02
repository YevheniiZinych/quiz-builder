import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  create(
    @Body()
    data: {
      title: string;
      questions: {
        type: 'boolean' | 'input' | 'checkbox';
        question: string;
        options?: string[];
        answer: string[];
      }[];
    },
  ) {
    return this.quizService.create(data);
  }

  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.quizService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.quizService.delete(id);
  }
}

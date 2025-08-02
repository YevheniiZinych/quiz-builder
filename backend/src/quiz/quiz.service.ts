import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Quiz } from '../../models/quiz.model';
import { Question } from '../../models/question.model';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Question) private questionModel: typeof Question,
    @InjectModel(Quiz) private quizModel: typeof Quiz,
  ) {}

  async create(data: {
    title: string;
    questions: {
      type: 'boolean' | 'input' | 'checkbox';
      question: string;
      options?: string[];
      answer: string[];
    }[];
  }) {
    try {
      const quiz = await this.quizModel.create({ title: data.title });

      const questions = await Promise.all(
        data.questions.map((q) =>
          this.questionModel.create({
            quizId: quiz.id,
            type: q.type,
            question: q.question,
            options: q.options ?? null,
            answer: q.answer ?? null,
          }),
        ),
      );

      quiz.questions = questions;
      return quiz;
    } catch (error) {
      console.error('Error creating quiz:', error);

      throw new InternalServerErrorException('Failed to create quiz');
    }
  }

  async findAll() {
    try {
      const quizzes = await this.quizModel.findAll({
        include: [Question],
      });

      return quizzes.map((quiz) => ({
        id: quiz.id,
        title: quiz.title,
        questionsCount: quiz.questions?.length,
      }));
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      throw new InternalServerErrorException('Failed to fetch quizzes');
    }
  }

  async findOne(id: number) {
    try {
      const quiz = await this.quizModel.findByPk(id, {
        include: [Question],
      });

      if (!quiz) {
        throw new NotFoundException('Quiz not found');
      }

      return quiz;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      console.error('Error fetching quiz:', error);
      throw new InternalServerErrorException('Failed to fetch quiz');
    }
  }

  async delete(id: number) {
    try {
      const quiz = await this.quizModel.findByPk(id);

      if (!quiz) {
        throw new NotFoundException('Quiz not found');
      }
      await quiz.destroy();

      return {
        message: 'Quiz deleted successfully',
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      console.error('Error deleting quiz:', error);
      throw new InternalServerErrorException('Failed to delete quiz');
    }
  }
}

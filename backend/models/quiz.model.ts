import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { Question } from './question.model';
import { IQuestionData } from './question.model';

export interface IQuiz {
  title: string;
  questions?: IQuestionData[];
}

@Table({ tableName: 'quiz', timestamps: true })
export class Quiz extends Model<IQuiz> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @HasMany(() => Question)
  declare questions: Question[];
}

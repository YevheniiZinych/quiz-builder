import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Quiz } from './quiz.model';

export interface IQuestionData {
  quizId: number;
  quiz?: Quiz;
  type: 'boolean' | 'input' | 'checkbox';
  question: string;
  options?: string[] | null;
  answer?: string[] | null;
}

@Table({ tableName: 'questions', timestamps: true })
export class Question extends Model<IQuestionData> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Quiz)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare quizId: number;

  @Column({
    type: DataType.ENUM('boolean', 'input', 'checkbox'),
    allowNull: false,
  })
  declare type: 'boolean' | 'input' | 'checkbox';

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare question: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
  })
  declare options: string[] | null;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
  })
  declare answer: string[] | null;

  @BelongsTo(() => Quiz)
  declare quiz: Quiz;
}

import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [StudentController],
})
export class StudentModule {}

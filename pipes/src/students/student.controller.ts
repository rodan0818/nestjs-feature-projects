import { Controller, Get, Param } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';

@Controller('students')
export class StudentController {
  @Get(':id')
  getStudentById(@Param('id', ParseIntPipe) id: number) {
    return { student_id: id };
  }
}

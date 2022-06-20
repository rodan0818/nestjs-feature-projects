import { Module } from '@nestjs/common';
import { StudentModule } from './students/student.module';

@Module({
  imports: [StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

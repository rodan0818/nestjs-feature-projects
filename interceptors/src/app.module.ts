import { Module } from '@nestjs/common';
import { DogController } from './dogs/dog.controller';

@Module({
  imports: [],
  controllers: [DogController],
  providers: [],
})
export class AppModule {}

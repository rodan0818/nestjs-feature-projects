import { Module } from '@nestjs/common';
import { DogController } from './dogs/dogs.controller';

@Module({
  imports: [],
  controllers: [DogController],
  providers: [],
})
export class AppModule {}

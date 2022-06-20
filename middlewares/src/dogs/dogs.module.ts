import { Module } from '@nestjs/common';
import { DogController } from './dogs.controller';

@Module({
  imports: [],
  controllers: [DogController],
  providers: [],
})
export class DogModule {}

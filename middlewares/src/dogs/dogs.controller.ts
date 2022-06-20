import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogController {
  @Get('bark')
  break() {
    return 'Dog barked';
  }
}

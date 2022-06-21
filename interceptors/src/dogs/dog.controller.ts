import { Body, Controller, Post } from '@nestjs/common';

@Controller('dogs')
export class DogController {
  @Post()
  createDogEntry(@Body() body: any) {
    const { dog_license_number, name, owner } = body;
    console.log(`
    ----------------------------------------
            Log From Controller
    ----------------------------------------
    Dog License Number: ${dog_license_number}
    Dog name: ${name}
    Owner: ${owner}
    ----------------------------------------
    `);
    return 'Dog entry created';
  }
}

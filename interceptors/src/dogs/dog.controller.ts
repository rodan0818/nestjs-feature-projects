import { Body, Controller, Post } from '@nestjs/common';

@Controller('dogs')
export class DogController {
  @Post()
  async createDogEntry(@Body() body: any) {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 5000);
    });
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

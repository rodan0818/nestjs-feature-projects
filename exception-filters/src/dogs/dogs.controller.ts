import {
  Controller,
  ForbiddenException,
  Get,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exception-filter/http-exception.filter';

@Controller('dogs')
@UseFilters(new HttpExceptionFilter()) // uses to all classes methods
export class DogController {
  @Get('bark')
  // @UseFilters(HttpExceptionFilter) // used to this method only
  bark() {
    throw new ForbiddenException();
  }
}

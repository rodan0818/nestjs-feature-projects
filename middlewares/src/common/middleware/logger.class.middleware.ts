import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Class logger middleware fired for dogs/bark');
    next();
    //res.end('Go away'); // to terminate or end response
  }
}

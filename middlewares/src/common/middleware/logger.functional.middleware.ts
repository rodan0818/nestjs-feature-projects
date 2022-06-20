import { Request, Response, NextFunction } from 'express';
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(
    `Functional logger Middleware fired for dogs/walk which is not in controller though`,
  );
  next();
}

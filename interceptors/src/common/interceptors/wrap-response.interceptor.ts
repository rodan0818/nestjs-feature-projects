import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log(`
    ----------------------------------------
    (MSG FROM INTERCEPTOR): BEFORE
    ----------------------------------------
    `);
    // return next.handle().pipe(
    //   tap((data) =>
    //     console.log(`
    // ----------------------------------------
    // (MSG FROM INTERCEPTOR): AFTER
    // ----------------------------------------
    // (RESPONSE FROM CONTROLLER): ${data}
    // ----------------------------------------
    // `),
    //   ),
    // );
    // map operator takes the value from the stream and returns a modified one
    // in below example we have transformed the response from plain string to a json object and added a msg key with a value
    return next.handle().pipe(
      map((data) => {
        console.log(`
      ----------------------------------------
      (MSG FROM INTERCEPTOR): AFTER
      ----------------------------------------
      (RESPONSE FROM CONTROLLER): ${data}
      ----------------------------------------
      `);
        return { data, msg: '(hello from interceptor map)' };
      }),
    );
  }
}

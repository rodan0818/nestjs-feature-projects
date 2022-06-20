import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleWare } from './common/middleware/logger.class.middleware';
import { logger } from './common/middleware/logger.functional.middleware';
// import { DogController } from './dogs/dogs.controller';
import { DogModule } from './dogs/dogs.module';

@Module({
  imports: [DogModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleWare).forRoutes('dogs/bark'); // for certain routes
    // consumer.apply(LoggerMiddleWare).forRoutes(DogController); // for single controller, routes only define in the controller when gets fired executes the middleware
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes({ path: 'dogs/bark', method: RequestMethod.GET }); // only runs for dogs/bark get method
    consumer
      .apply(logger)
      .forRoutes({ path: 'dogs/walk', method: RequestMethod.GET });
  }
}

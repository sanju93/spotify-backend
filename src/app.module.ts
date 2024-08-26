/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
   // consumer.apply(LoggerMiddleware).forRoutes('songs') way -1 
    // consumer.apply(LoggerMiddleware).forRoutes({path : 'songs',method : RequestMethod.POST}); // way 2

    consumer.apply(LoggerMiddleware).forRoutes(SongsController) // way 3
  }
}

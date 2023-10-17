import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { joiValidationSchema } from './config/joi.validation';
import { envConfig } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: joiValidationSchema,
      load: [envConfig],
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

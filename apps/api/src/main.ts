/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {ClassSerializerInterceptor, Logger, ValidationError, ValidationPipe} from '@nestjs/common';
import {NestFactory, Reflector} from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ValidationException, ValidationFilter } from "./app/shared/validation.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new ValidationFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: false,
    exceptionFactory: (errors: ValidationError[]) => {
      const errMsg = {};
      errors.forEach(err => {
        errMsg[err.property] = [...Object.values(err.constraints)];
      });
      return new ValidationException(errMsg);
    }
  }));
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

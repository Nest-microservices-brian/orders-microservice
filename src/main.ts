import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envVars } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main-Orders');
  const app = await NestFactory.create(AppModule);

  await app.listen(envVars.PORT);
  logger.log(`Orders Microservice running on PORT ${envVars.PORT}`);
}
bootstrap();

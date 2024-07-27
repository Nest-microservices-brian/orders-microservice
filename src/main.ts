import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envVars } from './config';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new Logger('Main-Orders');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: envVars.PORT,
      },
    },
  );

  await app.listen();
  logger.log(`Orders Microservice running on PORT ${envVars.PORT}`);
}
bootstrap();

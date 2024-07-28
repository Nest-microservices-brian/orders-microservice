import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { envVars, PRODUCT_SERVICE } from 'src/config';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envVars.PRODUCTS_MICROSERVICE_HOST,
          port: envVars.PRODUCTS_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class OrdersModule {}

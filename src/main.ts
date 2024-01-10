import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sdk } from './tracing';

async function bootstrap() {
  await sdk.start();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//hosts server on port 3001
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();


  await app.listen(3001);
}
bootstrap();

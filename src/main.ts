import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
    app.setGlobalPrefix('/api', {
      exclude: ['/docs'],
    });
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();

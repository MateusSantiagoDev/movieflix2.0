import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('MovieFlix 2.0')
    .setDescription('Aplicação de filmes, séries, desenhos e documentários')
    .setVersion('2.0.0')
    .addTag('Status')
    .addTag('User')
    .addTag('Plan')
    .addTag('Basic')
    .addTag('Pattern')
    .addTag('Premium')
    .addTag('Movie')
    .addTag('Serie')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3003);
}
bootstrap();

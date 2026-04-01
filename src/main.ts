import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // configuraçao da aplicaçao nest, cria a aplicação

process.env.TZ = '-03:00'; //configuraçao da timezone

app.useGlobalPipes(new ValidationPipe()); // configuraçao de validaçao de dados de entrada

app.enableCors(); // configuração de cors para permitir requisiçoes de outras origens

  await app.listen(process.env.PORT ?? 4000); // execuçao da aplicação nest, configuração da porta
}
bootstrap();

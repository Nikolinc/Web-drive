import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { start } from 'repl';
import { AppModule } from './app.module';

async function Start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server start on port = ${PORT}`));
}
Start();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static files from the "public" directory
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Serve index.html for the root URL
  app.use((req, res, next) => {
    if (req.path === '/' || req.path === '/index.html') {
      res.sendFile(join(__dirname, '..', 'public', 'index.html'));
    } else {
      next();
    }
  });

  await app.listen(3000);
}
bootstrap();

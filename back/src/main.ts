import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
		origin: ['http://localhost:3000'],
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
		allowedHeaders: 'Content-Type, Accept, Authorization',
	};
	app.enableCors();
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

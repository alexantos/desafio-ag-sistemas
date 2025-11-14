import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const corsOptions: CorsOptions = {
		origin: ['http://localhost:3000'],
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
		allowedHeaders: 'Content-Type, Accept, Authorization',
	};
	app.enableCors();
	const config = new DocumentBuilder()
		.setTitle('Back')
		.setDescription('Uma aplicação AG sistemas')
		.setVersion('1.0')
		.addTag('back')
		.build();
	const documentFactory = () => SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, documentFactory);

	await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

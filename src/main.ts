import { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import appConfig from './config/app.config';
import swaggerConfig from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config: ConfigType<typeof appConfig> = app.get(appConfig.KEY);

  const swaggerConf: ConfigType<typeof swaggerConfig> = app.get(
    swaggerConfig.KEY,
  );

  //if (swaggerConf.enabled) {
  const properties = new DocumentBuilder()
    .setTitle(swaggerConf.title)
    .setDescription(swaggerConf.description)
    .build();
  const document = SwaggerModule.createDocument(app, properties);
  SwaggerModule.setup('swagger', app, document);
  // }

  await app.listen(config.port, () => {
    console.log(`Server listen in http://${config.host}:${config.port}`);
  });
}
bootstrap();

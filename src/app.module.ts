import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenCardModule } from './components/token-card/token-card.module';
import { TokensModule } from './components/token/token.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import swaggerConfig from './config/swagger.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, swaggerConfig, databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      useFactory: (config: ConfigType<typeof databaseConfig>) => ({
        ...config,
      }),
      inject: [databaseConfig.KEY],
    }),
    TokenCardModule,
    TokensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

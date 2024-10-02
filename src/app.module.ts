import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MottosModule } from './mottos/mottos.module';
import { AuthModule } from './auth/auth.module';
import { Motto } from './mottos/motto.entity';
import { UserDailyModule } from './daily/daily.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Motto],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    MottosModule,
    AuthModule,
    UserDailyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

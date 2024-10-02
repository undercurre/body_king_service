import { Module } from '@nestjs/common';
import { MottosService } from './mottos.service';
import { MottosController } from './mottos.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AuthModule } from 'src/auth/auth.module';
import { Motto } from './motto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Motto]), AuthModule],
  providers: [
    MottosService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [MottosController],
})
export class MottosModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';
import { Envios } from './envios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Envios])],
  controllers: [EnviosController],
  providers: [EnviosService],
})
export class EnviosModule {}

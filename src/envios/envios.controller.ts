import { Controller, Post, Body } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { CreateEnviosDto } from './dto/create-envios.dto';
import { Envios } from './envios.entity';
import { Get } from '@nestjs/common';

@Controller('envios')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Post()
  async createEnvios(@Body() createEnviosDto: CreateEnviosDto): Promise<Envios> {
    return this.enviosService.create(createEnviosDto);
  }

  @Get()
async getAllEnvios(): Promise<Envios[]> {
  return this.enviosService.findAll();
}

}


// src/envios/envios.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Envios } from './envios.entity';
import { CreateEnviosDto } from './dto/create-envios.dto';

@Injectable()
export class EnviosService {
  constructor(
    @InjectRepository(Envios)
    private enviosRepository: Repository<Envios>,
  ) {}

  calculateTarifa(distancia: number): number {
    const tarifaBase = 5;
    const costoPorKilometro = 0.50;
    return tarifaBase + (distancia * costoPorKilometro);
  }

  async create(createEnviosDto: CreateEnviosDto): Promise<Envios> {
    const tarifa = this.calculateTarifa(createEnviosDto.distancia);
    const envios = this.enviosRepository.create({
      ...createEnviosDto,
      tarifa,
    });

    return this.enviosRepository.save(envios);
  }

  async findAll(): Promise<Envios[]> {
    return this.enviosRepository.find();
  }

}


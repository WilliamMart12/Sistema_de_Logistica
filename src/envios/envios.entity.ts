import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Envios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destinatario: string;

  @Column()
  remitente: string;

  @Column()
  contenido: string;

  @Column()
  fecha_envio: Date;

  @Column('double')
  distancia: number;

  @Column('double')
  tarifa: number;
}

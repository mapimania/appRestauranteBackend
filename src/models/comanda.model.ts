import {Entity, model, property} from '@loopback/repository';

@model()
export class Comanda extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  cliente: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idComanda?: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;


  constructor(data?: Partial<Comanda>) {
    super(data);
  }
}

export interface ComandaRelations {
  // describe navigational properties here
}

export type ComandaWithRelations = Comanda & ComandaRelations;

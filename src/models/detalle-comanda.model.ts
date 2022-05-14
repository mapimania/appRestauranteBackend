import {Entity, model, property} from '@loopback/repository';

@model()
export class DetalleComanda extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idDetalleComanda?: number;

  @property({
    type: 'number',
    required: true,
  })
  idProducto: number;

  @property({
    type: 'number',
    required: true,
  })
  idComanda: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;


  constructor(data?: Partial<DetalleComanda>) {
    super(data);
  }
}

export interface DetalleComandaRelations {
  // describe navigational properties here
}

export type DetalleComandaWithRelations = DetalleComanda & DetalleComandaRelations;

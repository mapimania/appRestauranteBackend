import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idProducto?: number;

  @property({
    type: 'number',
    required: true,
  })
  idCategoria: number;

  @property({
    type: 'string',
    required: true,
  })
  nomProducto: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;


  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;

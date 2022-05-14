import {Entity, model, property} from '@loopback/repository';

@model()
export class Categoria extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCategoria?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomCategoria: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Categoria>) {
    super(data);
  }
}

export interface CategoriaRelations {
  // describe navigational properties here
}

export type CategoriaWithRelations = Categoria & CategoriaRelations;

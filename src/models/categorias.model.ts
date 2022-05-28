import {Entity, model, property} from '@loopback/repository';

@model()
export class Categorias extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  constructor(data?: Partial<Categorias>) {
    super(data);
  }
}

export interface CategoriasRelations {
  // describe navigational properties here
}

export type CategoriasWithRelations = Categorias & CategoriasRelations;

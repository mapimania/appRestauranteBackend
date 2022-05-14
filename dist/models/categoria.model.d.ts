import { Entity } from '@loopback/repository';
export declare class Categoria extends Entity {
    idCategoria?: number;
    nomCategoria: string;
    descripcion: string;
    constructor(data?: Partial<Categoria>);
}
export interface CategoriaRelations {
}
export declare type CategoriaWithRelations = Categoria & CategoriaRelations;

import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    idProducto?: number;
    idCategoria: number;
    nomProducto: string;
    precio: number;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;

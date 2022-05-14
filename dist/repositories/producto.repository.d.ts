import { DefaultCrudRepository } from '@loopback/repository';
import { DbJsonDataSource } from '../datasources';
import { Producto, ProductoRelations } from '../models';
export declare class ProductoRepository extends DefaultCrudRepository<Producto, typeof Producto.prototype.idProducto, ProductoRelations> {
    constructor(dataSource: DbJsonDataSource);
}

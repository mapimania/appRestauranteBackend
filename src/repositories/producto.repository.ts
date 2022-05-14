import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbJsonDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.idProducto,
  ProductoRelations
> {
  constructor(
    @inject('datasources.dbJson') dataSource: DbJsonDataSource,
  ) {
    super(Producto, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbJsonDataSource} from '../datasources';
import {Categoria, CategoriaRelations} from '../models';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.idCategoria,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.dbJson') dataSource: DbJsonDataSource,
  ) {
    super(Categoria, dataSource);
  }
}

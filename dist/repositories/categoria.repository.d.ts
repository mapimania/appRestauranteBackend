import { DefaultCrudRepository } from '@loopback/repository';
import { DbJsonDataSource } from '../datasources';
import { Categoria, CategoriaRelations } from '../models';
export declare class CategoriaRepository extends DefaultCrudRepository<Categoria, typeof Categoria.prototype.idCategoria, CategoriaRelations> {
    constructor(dataSource: DbJsonDataSource);
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataDataSource} from '../datasources';
import {DetalleComanda, DetalleComandaRelations} from '../models';

export class DetalleComandaRepository extends DefaultCrudRepository<
  DetalleComanda,
  typeof DetalleComanda.prototype.idDetalleComanda,
  DetalleComandaRelations
> {
  constructor(
    @inject('datasources.data') dataSource: DataDataSource,
  ) {
    super(DetalleComanda, dataSource);
  }
}

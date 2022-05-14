import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataDataSource} from '../datasources';
import {Comanda, ComandaRelations} from '../models';

export class ComandaRepository extends DefaultCrudRepository<
  Comanda,
  typeof Comanda.prototype.idComanda,
  ComandaRelations
> {
  constructor(
    @inject('datasources.data') dataSource: DataDataSource,
  ) {
    super(Comanda, dataSource);
  }
}

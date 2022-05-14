import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbJson',
  connector: 'memory',
  localStorage: '',
  file: './data/db.json'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbJsonDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbJson';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbJson', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

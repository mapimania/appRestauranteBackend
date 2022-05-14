"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbJsonDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
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
let DbJsonDataSource = class DbJsonDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
DbJsonDataSource.dataSourceName = 'dbJson';
DbJsonDataSource.defaultConfig = config;
DbJsonDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.dbJson', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], DbJsonDataSource);
exports.DbJsonDataSource = DbJsonDataSource;
//# sourceMappingURL=db-json.datasource.js.map
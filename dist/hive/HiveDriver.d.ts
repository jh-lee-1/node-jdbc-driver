import IConnectionType from '../IConnectionType';
import IConnectionConfig from '../IConnectionConfig';
export default class HiveDriver implements IConnectionType {
    protected config: IConnectionConfig;
    protected driverName: string;
    protected driverVersion: string;
    driver: string;
    constructor(config: IConnectionConfig);
    get_config: () => {
        url: string;
        drivername: string;
        user: string;
        password: string;
    };
    get_version: () => string;
    get_query: (tableName: string, type?: string) => string;
    protected get_jdbcUrl: () => string;
}

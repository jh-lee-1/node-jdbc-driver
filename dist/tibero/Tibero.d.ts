import IConnectionType from '../IConnectionType';
import IConnectionConfig from '../IConnectionConfig';
export default class Tibero implements IConnectionType {
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
        minpoolsize: number;
        maxpoolsize: number;
    };
    get_query: (tableName: string, type?: string) => string;
    get_version: () => string;
    protected get_jdbcUrl: () => string;
}

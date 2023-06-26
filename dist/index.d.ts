import IConnectionType from "./IConnectionType";
import IConnectionConfig from "./IConnectionConfig";
import IDrivers from "./IDrivers";
export declare enum ConnectionType {
    hive = "H",
    tibero = "T",
    postgreSql = "P"
}
export default class JdbcDriver implements IDrivers {
    protected jarPath: string;
    protected static connection: any;
    protected driverInstance: IConnectionType;
    protected type: ConnectionType;
    constructor(type: ConnectionType, connectionConfig: IConnectionConfig);
    get_version: () => string;
    get_columns: (tableName: string) => Promise<unknown>;
    get_table_properties: (tableName: string) => Promise<unknown>;
    findAll: (tableName: string) => Promise<unknown>;
    count: (tableName: any) => Promise<unknown>;
    find: (tableName: string, where?: number | string) => Promise<unknown>;
    connection_count: () => any;
    connection_details: () => any;
    sql: (sql: string) => Promise<unknown>;
    protected close: () => void;
    protected executeQuery: (sql: any) => Promise<unknown>;
    protected createStatement: () => Promise<unknown>;
    protected open: () => Promise<unknown>;
    protected is_init: (conn: any) => any;
    protected init: (connection: any) => Promise<unknown>;
}


import IConnectionType, { QueryType } from '../IConnectionType';
import IConnectionConfig from '../IConnectionConfig';

export default class Tibero implements IConnectionType{
    protected config: IConnectionConfig;
    protected driverName:string = 'com.tmax.tibero.jdbc.TbDriver';
    protected driverVersion:string = '7';
    public driver: string = `tibero${this.driverVersion}-jdbc.jar`;
    constructor(config: IConnectionConfig) {
        this.config = config
    }

    public get_config = () => {
        return {
            url: this.get_jdbcUrl(),
            drivername: this.driverName,
            user: this.config.username,
            password: this.config.password
        }
    }

    public get_query = (tableName:string, type:string = 'D') => {
        if(QueryType.columns == type){
            return `SELECT column_name as col_name, data_type FROM information_schema.columns WHERE table_name = '${tableName}'`
        }else{
            // QueryType.describe
            return `SELECT count(*) as total_rows, pg_size_pretty( pg_total_relation_size('${tableName}') ) as total_size;`
        }
    }

    public get_version = () => this.driverVersion;

    protected get_jdbcUrl = () => {
        const {host, port, database, } = this.config
        return `jdbc:tibero:thin:@${host}:${port}:${database}`;
    }
}

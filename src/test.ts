import JdbcDriver, { ConnectionType } from './index';

// Set the connection details for the Hive server
const host = '';
const port = 0;
const database = '';
const username = '';
const password = '';
const minpoolsize = 0;
const maxpoolsize = 0;



const get_test = async () => {
    const jdbc = new JdbcDriver(ConnectionType.tibero, {host, port, database, username, password, minpoolsize, maxpoolsize})
    const count = await jdbc.sql('SELECT sum(total_rows),sum(compliant_rows), COUNT(total_rows)  from t_krhnz__dz.compliance_stats_spark')
        console.log(count)
}

get_test()

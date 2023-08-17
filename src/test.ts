import JdbcDriver, { ConnectionType } from './index';

// Set the connection details for the Hive server
const host = '220.76.251.226';
const port = 8629;
const database = 'tibero';
const username = 'xems';
const password = 'xems2023';
const minpoolsize = 10;
const maxpoolsize = 100;



const get_test = async () => {
    const jdbc = new JdbcDriver(ConnectionType.tibero, {host, port, database, username, password, minpoolsize, maxpoolsize})
    // const count = await jdbc.sql('SELECT sum(total_rows),sum(compliant_rows), COUNT(total_rows)  from t_krhnz__dz.compliance_stats_spark')
    //const count = await jdbc.count('test')
    //console.log('test :', rst)
}

get_test()

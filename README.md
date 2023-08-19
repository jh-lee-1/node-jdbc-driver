# node-jdbc-tibero
tibero connect node-jdbc

## Latest Version
- 0.0.1

## Installation
- Release: ```npm i --save node-jdbc-tibero```

## Usage
Some mininal examples are given below.

### Initialize
```javascript
// CommonJS
const { default: JdbcDriver, ConnectionType } = require("node-jdbc-tibero")
// ES6
import JdbcDriver, { ConnectionType } from 'node-jdbc-tibero'

// Set the connection details for the JDBC connection
const host = '<host>';
const port = '<port>';
const database = '<database_name>';
const username = '<username>';
const password = '<password>';
const minpoolsize = '<minpoolsize>';
const maxpoolsize = '<maxpoolsize>';

// Choose connection type
ConnectionType.hive // for hive connection
ConnectionType.postgreSql // for postgreSql connection
ConnectionType.tibero // for postgreSql connection

// Create jdbc connection
const jdbc = new JdbcDriver(ConnectionType.tibero, {host, port, database, username, password, minpoolsize, maxpoolsize})

// check driver version
const version = jdbc.get_version()

// count example
const total = await jdbc.count('<table_name>')

// find example
const row = await jdbc.find('<table_name>', '<where_clouse>')

// find all example
const rows = await jdbc.findAll('<table_name>')

// sql example
const results = await jdbc.sql('<sql_query>')

// ddl example
const results = await jdbc.ddl('<sql_query>')

// list table columns
const columns = await jdbc.get_columns('<table_name>')

// describe table properties
const tblproperties = await jdbc.get_table_properties('<table_name>')
```





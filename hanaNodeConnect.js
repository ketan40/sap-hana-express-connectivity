const hanaClient = require("@sap/hana-client");

const connection = hanaClient.createConnection();

const connectionParams = {
    host : "************",
    port : 30013,
    uid  : "jhu98houibnuh0o",
    pwd  : "Welcome123",
    databaseName : "dbName"
}

connection.connect(connectionParams, (err) => {


    connection.exec(sql, (err, rows) => {
        connection.disconnect();
        if (err) {
            return console.error('SQL execute error:', err);
        }
        console.log("Results:", rows);
        console.log(`Query '${sql}' returned ${rows.length} items`);
    });
});

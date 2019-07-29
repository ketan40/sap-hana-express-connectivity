const hanaClient = require("@sap/hana-client");

const connection = hanaClient.createConnection();

const connectionParams = {
    host : "eds-hana-stg-01",
    port : 30013,
    uid  : "REWARD",
    pwd  : "Welcome123",
    databaseName : "HIP"
}

connection.connect(connectionParams, (err) => {
    if (err) {
        return console.error("Connection error", err);
    }
   console.log("connected to HANA");
    // const whereClause = process.argv[2] ? `WHERE "group" = '${process.argv[2]}'` : "";
    const sql         = `SELECT "LEVEL_1_NAME",
    "LEVEL_2_NAME","LEVEL_3_NAME",
    "LEVEL_4_NAME","LEVEL_5_NAME","LEVEL_6_NAME","SALES_REPRESENTATIVE_NAME", "IS_ACCOUNT_MANAGER"
      FROM "_SYS_BIC"."reward.dfs_api/SALES_HIERARCHY_FILTER"
      (PLACEHOLDER = ('$$userName$$', 'vkondapa'))`;
    
    connection.exec(sql, (err, rows) => {
        connection.disconnect();

        if (err) {
            return console.error('SQL execute error:', err);
        }

        console.log("Results:", rows);
        console.log(`Query '${sql}' returned ${rows.length} items`);
    });
});

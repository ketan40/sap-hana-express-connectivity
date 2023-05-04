const sql = require("mssql");

const connectionParams = {
    server : "qli-app-012-d",
    user  : "ITUser",
    password  : "InTe$t90",
    database : "IBPartnerRequests"
}


// connect to your database
    sql.connect(connectionParams, function (err) {
        if (err) {
          console.log(err);
        }
         console.log('sql server connected');
        // create Request object
        let request = new sql.Request();
        const userName = ''

        // query to the database and get the records
        const queryToBeExecuted = "select * from IBRequests where SourceID = 8 and Username ='' ORDER BY ReqDate desc";
        console.log(queryToBeExecuted);
        request.query(queryToBeExecuted, function (err, recordset) {
            if (err) {
              console.log(err)
            }
            console.log(recordset);
        });
    });

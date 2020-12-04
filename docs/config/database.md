# Database

There are several **database** used by this project :
* Oracle
* MongoDB

## Oracle
This project used [node-oracledb](https://github.com/oracle/node-oracledb) as library to connect with Oracle Database. The credential saved at .env file. We can get database connection using method *getConnection()* that exist on file /config/db/oracle.js 

## MongoDB
This project used [mongoose](https://www.npmjs.com/package/mongoose) as library to connect with MongoDB. The String Connection saved at .env file. We can call method *init()* from file /config/db/mongo.js and imported on app.js.
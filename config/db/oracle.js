const oracledb = require("oracledb");
module.exports = {
  getConnection: async () => {
    let connection;
    try {
      connection = await oracledb.getConnection({
        user: process.env.ORACLE_USER,
        password: process.env.ORACLE_PASSWORD,
        connectString: process.env.ORACLE_CONNECT_STRING,
      });
    } catch (err) {
      console.log("Koneksi ke database error : ", err);
    } finally {
      return connection;
    }
  },
  closeConnection: async (connection) => {
    try {
      connection.close();
    } catch (err) {
      console.log("Penutupan koneksi error : ", err);
    }
  },
};

const DB = require("../config/db/oracle");
module.exports = {
  db: async (req, res) => {
    try {
      const conn = await DB.getConnection();
      const result = await conn
        .execute("")
        .then((res) => res);
      DB.closeConnection(conn);
      return res.json(result);
    } catch (err) {
      return res.json(err);
    }
  },
  test: async (req, res) => {
    try {
      const conn = await DB.getConnection();
      const result = await conn
        .execute("", [], {
          autoCommit: true,
        })
        .then((res) => res)
        .catch((err) => {
          console.log(err);
          return err;
        });
      DB.closeConnection(conn);
      return res.json(result);
    } catch (err) {
      return res.json(err);
    }
  },
};

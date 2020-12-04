module.exports = {
  findAll: (conn) => {
    return conn
      .execute("select id, nama from hari order by id")
      .then((res) =>
        res.rows.map((item) => {
          return {
            id: item[0],
            name: item[1],
          };
        })
      )
      .catch((err) => {
        console.log("findAll day", err);
        return [];
      });
  },
  insert: (conn, name) => {
    return conn
      .execute(
        "insert into hari (id, nama) values (seq_hari.nextval, :0)",
        [name],
        {
          autoCommit: true,
        }
      )
      .then((res) => res.rowsAffected)
      .catch((err) => {
        console.log("insert day", err);
        return false;
      });
  },
  update: (conn, id, name) => {
    return conn
      .execute("update hari set nama=:0 where id=:1", [name, id], {
        autoCommit: true,
      })
      .then((res) => res.rowsAffected)
      .catch((err) => {
        console.log("update day", err);
        return false;
      });
  },
  delete: (conn, id) => {
    return conn
      .execute("delete from hari where id=:0", [id], {
        autoCommit: true,
      })
      .then((res) => res.rowsAffected)
      .catch((err) => {
        console.log("delete day", err);
        return false;
      });
  },
};

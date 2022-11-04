const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1234",
  database: "test",
});

client.connect();

client.query(`Select * from youtube`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.messages);
  }
  client.end;
});

const fs = require("fs");
const express = require("express");
const cors = require("cors");
// const { v4: uuidv4 } = require("uuid");
const postgres = require("pg");
const app = express();

app.use(cors());
app.use(express.json());
const port = 3002;

const { Client } = postgres;
// const uuid = uuidv4();

/////////////---------------//////////////////
app.post("/messages-save", async (req, res) => {
  const clientmessage = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "postgres",
  });
  await clientmessage.connect();
  await clientmessage.query(`INSERT INTO messages(text, sender, receiver) VALUES ($1,$2,$3)`, [
    req.body.text,
    req.body.sender,
    req.body.receiver,
  ]);
  await clientmessage.end();

  res.send("Send message to save in /messages-list");
});

app.get("/messages-list", async (req, res) => {
  const clientmessage = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "postgres",
  });
  await clientmessage.connect();
  const resultmessage = await clientmessage.query('SELECT * FROM "messages"');
  await clientmessage.end();
  res.send(resultmessage.rows);
});
////////////---------------//////////////////

///-----------------------//////
app.post("/contacts-save", async (req, res) => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "postgres",
  });
  await client.connect();
  await client.query(`INSERT INTO contacts(name) VALUES ($1)`, [req.body.name]);
  await client.end();
  res.send("Add Contact to save");
});

app.get("/contacts-list", async (req, res) => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "postgres",
  });
  await client.connect();
  const result = await client.query(`SELECT * FROM "contacts"`);
  await client.end();
  res.send(result.rows);
});

///-----------------------//////
app.listen(port, () => {
  console.log(`Example app ${port}`);
});

// await client.query(`INSERT INTO users(name, imagename) VALUES ($1,$2)`, [req.body.text, req.body.imagename]);

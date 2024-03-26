import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "mangoes",
  password: "mangoes",
  database: "reactmysql",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM employeeprofile";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server." });
    return res.json(result);
  });
});

app.listen(8080, () => {
  console.log("Listening to port 8080");
});

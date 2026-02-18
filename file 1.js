const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/post", (req, res) => {
  res.send(`
    <form method="POST" action="/post">
      <input type="text" name="testo" placeholder="Scrivi post">
      <button type="submit">Invia</button>
    </form>
  `);
});

app.post("/post", (req, res) => {
  const nuovoPost = req.body.testo;

  const dati = JSON.parse(fs.readFileSync("post.json"));
  dati.push(nuovoPost);

  fs.writeFileSync("post.json", JSON.stringify(dati));

  res.send("Salvato");
});

app.listen(3000, () => {
  console.log("Server avviato su porta 3000");
});


file2, post.json;
["","ciao99"]
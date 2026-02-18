const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// GET /post -> renderizza pagina con form minimale
app.get('/post', (req, res) => {
    res.send(`
        <form action="/post" method="POST">
            <input type="text" name="titolo" placeholder="Titolo" required />
            <button type="submit">Salva</button>
        </form>
    `);
});

// POST /post -> salva dati su post.json
app.post('/post', (req, res) => {
    const filePath = path.join(__dirname, 'post.json');
    const data = JSON.parse(fs.readFileSync(filePath));
    
    data.push({ titolo: req.body.titolo });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.send('Salvato');
});

app.listen(PORT, () => {
    console.log(`Server attivo su http://localhost:${PORT}`);
});
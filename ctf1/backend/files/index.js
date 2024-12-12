const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Basic challenge endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js CTF Challenge!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const path = require('path');
const fs = require('fs');

app.get('/view', (req, res) => {
    const file = req.query.file;

    // Vulnerable code: no sanitization
    const filePath = path.join(__dirname, 'files', file);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(404).send('File not found');
        } else {
            res.send(`<pre>${data}</pre>`);
        }
    });
});

const express = require('express')

const app = express()

app.get('/sections', (req, res) => {
    sections = []

    res.json(sections);
});

app.use(express.static('images'))

const port = 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
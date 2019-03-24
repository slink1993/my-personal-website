const express = require('express')

const app = express()

app.get('/api/sections', (req, res) => {
    const sections = [
        {title: 'About'},
        {title: 'Work Experience'},
        {title: 'Skills'},
        {title: 'Hobbies'}
    ];

    res.json(sections);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
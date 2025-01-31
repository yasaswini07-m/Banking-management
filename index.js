const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Banking Management System');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
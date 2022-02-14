const express = require('express')
const cors = require('cors')
require('../Server/Config/db')
const studentsRouter = require('./Router/studentsRouter')


const app = express()
const port = 8000;

app.use((cors()));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/students', studentsRouter);

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
})
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});
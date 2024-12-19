const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes); // Rutas que conectan con la API

app.listen(PORT, () => {
  console.log(`Servidor de panel SMM escuchando en el puerto ${PORT}`);
});

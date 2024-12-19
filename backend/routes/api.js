const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_URL = 'https://api-scarlet-ogd2.onrender.com/api'; // URL de tu API

// Ruta para obtener los servicios de la API
router.get('/services', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/services`, {
      headers: {
        'Authorization': `Bearer ${req.headers.api_key}`,
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error al obtener los servicios');
  }
});

// Otras rutas de la API (como crear orden, obtener usuarios, etc.) se agregan aquí

module.exports = router;

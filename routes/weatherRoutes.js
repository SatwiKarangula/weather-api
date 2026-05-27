const express = require('express');

const router = express.Router();

const {

    createWeather,
    getAllWeather,
    getWeatherById,
    updateWeather,
    deleteWeather,
    fetchAndStoreWeather

} = require('../controllers/weatherController');

router.post('/', createWeather);

router.get('/', getAllWeather);

router.get('/:id', getWeatherById);

router.put('/:id', updateWeather);

router.delete('/:id', deleteWeather);

router.get('/live/:city', fetchAndStoreWeather);

module.exports = router;

const express = require('express');

const router = express.Router();

const {

    createWeather,
    getAllWeather,
    getWeatherById,
    updateWeather,
    deleteWeather,
    fetchAndStoreWeather,
    getWeatherByCity

} = require('../controllers/weatherController');

router.post('/', createWeather);

router.get('/', getAllWeather);

router.get('/:id', getWeatherById);

router.get('/city/:city', getWeatherByCity);

router.put('/:id', updateWeather);

router.delete('/:id', deleteWeather);

router.get('/live/:city', fetchAndStoreWeather);

module.exports = router;

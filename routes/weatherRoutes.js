const express = require('express');

const router = express.Router();

const {

    createWeather,
    getAllWeather,
    getWeatherById,
    updateWeather,
    deleteWeather

} = require('../controllers/weatherController');

router.post('/', createWeather);

router.get('/', getAllWeather);

router.get('/:id', getWeatherById);

router.put('/:id', updateWeather);

router.delete('/:id', deleteWeather);

module.exports = router;

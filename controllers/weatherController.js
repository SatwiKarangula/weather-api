const Weather = require('../models/Weather');

exports.createWeather = async (req, res) => {

    try {

        const { city, temperature, weather } = req.body;

        if (!city || !temperature || !weather) {

            return res.status(400).json({
                error: 'All fields are required'
            });

        }

        const newWeather = new Weather({
            city,
            temperature,
            weather
        });

        await newWeather.save();

        res.status(201).json(newWeather);

    } catch (error) {

        res.status(500).json({
            error: 'Server Error'
        });

    }

};
exports.getAllWeather = async (req, res) => {

    try {

        const weatherData = await Weather.find();

        res.status(200).json(weatherData);

    } catch (error) {

        res.status(500).json({
            error: 'Server Error'
        });

    }

};
exports.getWeatherById = async (req, res) => {

    try {

        const weather = await Weather.findById(req.params.id);

        if (!weather) {

            return res.status(404).json({
                error: 'Record Not Found'
            });

        }

        res.status(200).json(weather);

    } catch (error) {

        res.status(500).json({
            error: 'Server Error'
        });

    }

};
exports.updateWeather = async (req, res) => {

    try {

        const updatedWeather = await Weather.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        res.status(200).json(updatedWeather);

    } catch (error) {

        res.status(500).json({
            error: 'Server Error'
        });

    }

};
exports.deleteWeather = async (req, res) => {

    try {

        await Weather.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Record Deleted Successfully'
        });

    } catch (error) {

        res.status(500).json({
            error: 'Server Error'
        });

    }

};



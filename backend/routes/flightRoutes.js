const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');
const auth = require('../middleware/auth'); 

router.get('/', flightController.getFlights);
router.get('/search', flightController.searchFlights);

router.post('/', flightController.addFlight);

module.exports = router;
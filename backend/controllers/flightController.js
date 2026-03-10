const Flight = require('../models/Flight');

//Create
exports.addFlight = async (req, res) => {
  try {
    const newFlight = new Flight(req.body);
    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (err) {
    res.status(500).json({ message: "Error adding flight", error: err.message });
  }
};

//Read
exports.getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json({ message: "Error fetching flights" });
  }
};

//Search) 
exports.searchFlights = async (req, res) => {
  try {
    const { from, to, date } = req.query;
    let query = {};
    if (from) query.from = from;
    if (to) query.to = to;
    if (date) query.date = { $gte: new Date(date) }; 

    const flights = await Flight.find(query);
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json({ message: "Error searching flights" });
  }
};
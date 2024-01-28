const express = require('express');
require('dotenv').config();
const cors = require("cors");
const PORT = process.env.PORT || 5050;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const API_PREFIX = '/api';

//import routes here
//const warehouseRoutes = require("./routes/user-routes.js");

const app = express();
app.use(express.json())
app.use(cors({ origin: CORS_ORIGIN }));
//app.use(`${API_PREFIX}/register`, userRoutes);

//API home route
app.get(`${API_PREFIX}`, (req, res) => {
	res.send("Welcome to News Explorer API!");
});

app.listen(PORT, (req, res) => {
	console.log(`Server running at port: ${PORT}`);
});